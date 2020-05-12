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

import { AddPimModal } from './AddPimModal';
import { AddPimSubmit } from './AddPimModal.types';

export const AddPimModalContainer = ({ isOpened, onToggleOpen }: { isOpened: boolean; onToggleOpen: () => void }) => {
  const apiClient = useApolloClient();
  const [createPim] = useCreatePimMutation();
  const { push } = useHistory();

  const handleSubmit: AddPimSubmit = async ({ forceAdd, propertyType, category, ...body }) => {
    try {
      if (!forceAdd) {
        const { data, errors } = await apiClient.query<CountPimsByParamsQuery, CountPimsByParamsQueryVariables>({
          query: CountPimsByParamsDocument,
          variables: {
            filters: body,
          },
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

      onToggleOpen();
      push(AppRoute.pimDetails.replace(':uid', result.createPim));

      return undefined;
    } catch {
      return {
        error: 'unknown',
      };
    }
  };

  return <AddPimModal onSubmit={handleSubmit} isOpened={isOpened} onClose={onToggleOpen} />;
};
