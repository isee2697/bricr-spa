import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { AnyObject } from 'react-final-form';

import {
  useCreatePimMutation,
  RealEstateType,
  DevelopmentType,
  PimStatus,
  PimWithSameAddressQueryVariables,
  PimWithSameAddressQuery,
  PimWithSameAddressDocument,
  useCreateNcpMutation,
} from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { useModalState } from 'hooks';

import { AddPimModal } from './AddPimModal';
import { AddNcpBody, AddPimBody, AddPimSubmit, PropertyCategory } from './AddPimModal.types';

export const AddPimModalContainer = () => {
  const apiClient = useApolloClient();
  const [createPim] = useCreatePimMutation();
  const [createNcp] = useCreateNcpMutation();
  const { push } = useHistory();
  const { close } = useModalDispatch();
  const { isOpen: isModalOpen, options } = useModalState('add-new-pim');

  const handlePimSubmit: AddPimSubmit<AddPimBody> = async ({ forceAdd, propertyType, category, ...body }) => {
    try {
      if (!forceAdd) {
        const { data: pimWithSameAddress, errors } = await apiClient.query<
          PimWithSameAddressQuery,
          PimWithSameAddressQueryVariables
        >({
          query: PimWithSameAddressDocument,
          fetchPolicy: 'network-only',
          variables: {
            input: {
              street: body.street,
              houseNumber: body.houseNumber,
              postalCode: body.postalCode,
              city: body.city,
            },
          },
        });

        if (errors) {
          throw new Error();
        }

        if (pimWithSameAddress?.getPimsGeneralWithSameAddress.items?.length) {
          return {
            error: 'conflict',
            conflictsCount: pimWithSameAddress?.getPimsGeneralWithSameAddress.metadata?.total,
          };
        }
      }

      const { data: result } = await createPim({
        variables: {
          input: {
            ...body,
            propertyType,
            status: PimStatus.Available,
            realEstateType: RealEstateType.Business, // @TODO
            developmentType: DevelopmentType.New, // @TODO
            country: 'Netherlands', // @TODO
          },
        },
      });

      if (!result || !result.createPim) {
        throw new Error();
      }

      push(AppRoute.pimDetails.replace(':id', result.createPim.id), { newlyAdded: true });

      close('add-new-pim');

      return undefined;
    } catch {
      return {
        error: 'unknown',
      };
    }
  };

  const handleNcpSubmit: AddPimSubmit<AddNcpBody> = async ({ forceAdd, propertyType, category, ...body }) => {
    try {
      if (!forceAdd) {
        //@TODO duplicate check
      }

      const { data: result } = await createNcp({
        variables: {
          input: {
            type: propertyType,
            ...body,
          },
        },
      });

      if (!result || !result.createNcp) {
        throw new Error();
      }

      push(AppRoute.projectDetails.replace(':id', result.createNcp.id) + '/general', { newlyAdded: true });
      close('add-new-pim');

      return undefined;
    } catch {
      return {
        error: 'unknown',
      };
    }
  };

  const handleSubmit = async (values: AnyObject) => {
    if (values.category === PropertyCategory.PROPERTY) {
      return handlePimSubmit(values as AddPimBody);
    }

    if (values.category === PropertyCategory.PROJECT) {
      return handleNcpSubmit(values as AddNcpBody);
    }

    return undefined;
  };

  if (!isModalOpen) return null;

  return (
    <AddPimModal onSubmit={handleSubmit} isOpen={isModalOpen} propertyCategory={options?.propertyCategory as string} />
  );
};
