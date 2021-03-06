import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { AnyObject } from 'react-final-form';

import {
  DevelopmentType,
  NcpGeneralOverallInfoDocument,
  NcpWithSameAddressDocument,
  NcpWithSameAddressQuery,
  NcpWithSameAddressQueryVariables,
  ObjectTypeOverallInfoDocument,
  PimStatus,
  PimWithSameAddressDocument,
  PimWithSameAddressQuery,
  PimWithSameAddressQueryVariables,
  RealEstateType,
  useCreateNcpMutation,
  useCreatePimMutation,
  useSetObjectTypeLinkedPimsMutation,
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
  const [setLinked] = useSetObjectTypeLinkedPimsMutation();
  const { push } = useHistory();
  const { close } = useModalDispatch();
  const { isOpen: isModalOpen, options } = useModalState('add-new-pim');

  const handlePimSubmit: AddPimSubmit<AddPimBody> = async ({ forceAdd, propertyType, category, ...body }) => {
    try {
      if (!forceAdd) {
        const { data: pimWithSameAddress } = await apiClient.query<
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

      if (options?.projectId && options?.objectTypeId) {
        const { data: setResult } = await setLinked({
          variables: {
            input: {
              id: options.objectTypeId as string,
              linkedProperties: [...(options?.linkedPropertiesIds as string[]), result.createPim.id],
            },
          },
          refetchQueries: [
            {
              query: ObjectTypeOverallInfoDocument,
              variables: {
                id: options.objectTypeId,
                projectId: options?.projectId,
              },
            },
            {
              query: NcpGeneralOverallInfoDocument,
              variables: { id: options?.projectId },
            },
          ],
        });

        if (!setResult || !setResult.setObjectTypeLinkedPims) {
          throw new Error();
        }

        push(
          AppRoute.linkedPropertyDetails
            .replace(':projectId', options.projectId as string)
            .replace(':objectTypeId', options.objectTypeId as string)
            .replace(':id', result.createPim.id),
          { newlyAdded: true, data: result.createPim },
        );
      } else {
        push(AppRoute.pimDetails.replace(':id', result.createPim.id), { newlyAdded: true, data: result.createPim });
      }

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
        const { data: pimWithSameAddress } = await apiClient.query<
          NcpWithSameAddressQuery,
          NcpWithSameAddressQueryVariables
        >({
          query: NcpWithSameAddressDocument,
          fetchPolicy: 'network-only',
          variables: {
            input: {
              street: body.street,
              houseNumber: body.houseNumber,
              zipCode: body.zipCode,
              city: body.city,
            },
          },
        });

        if (pimWithSameAddress?.getNcpWithSameAddress.items?.length) {
          return {
            error: 'conflict',
            conflictsCount: pimWithSameAddress?.getNcpWithSameAddress.metadata?.total,
          };
        }
      }

      const { data: result } = await createNcp({
        variables: {
          input: {
            type: propertyType,
            projectType: options?.projectType,
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
    <AddPimModal
      onSubmit={handleSubmit}
      isOpen={isModalOpen}
      propertyCategory={options?.propertyCategory as string}
      options={options}
    />
  );
};
