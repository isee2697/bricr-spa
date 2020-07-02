import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import {
  useCreatePimMutation,
  RealEstateType,
  DevelopmentType,
  PimStatus,
  PimWithSameAddressQueryVariables,
  PimWithSameAddressQuery,
  PimWithSameAddressDocument,
} from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';

import { AddPimModal } from './AddPimModal';
import { AddPimSubmit } from './AddPimModal.types';

export const AddPimModalContainer = () => {
  const apiClient = useApolloClient();
  const [createPim] = useCreatePimMutation();
  const { push } = useHistory();
  const { close } = useModalDispatch();

  const handleSubmit: AddPimSubmit = async ({ forceAdd, propertyType, category, ...body }) => {
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

      push(AppRoute.pimDetails.replace(':id', result.createPim.id));

      close('add-new-pim');

      return undefined;
    } catch {
      return {
        error: 'unknown',
      };
    }
  };

  return <AddPimModal onSubmit={handleSubmit} />;
};
