import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

import {
  useCreatePimMutation,
  CountPimsByParamsDocument,
  CountPimsByParamsQuery,
  CountPimsByParamsQueryVariables,
  RealEstateType,
  DevelopmentType,
  PimStatus,
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
        const { data, errors } = await apiClient.query<CountPimsByParamsQuery, CountPimsByParamsQueryVariables>({
          query: CountPimsByParamsDocument,
          variables: {
            filters: body,
          },
          fetchPolicy: 'no-cache',
        });

        if (errors) {
          throw new Error();
        }

        if (data.listPims.metadata?.total) {
          return {
            error: 'conflict',
            conflictsCount: data.listPims.metadata?.total,
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
