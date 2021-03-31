import React from 'react';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

import { useModalDispatch, useModalState } from 'hooks';
import {
  CreateCrmInput,
  CrmType,
  GetCrmWithSameInfoDocument,
  GetCrmWithSameInfoQuery,
  GetCrmWithSameInfoQueryVariables,
  useCreateCrmMutation,
} from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddCrmRelationModal } from './AddCrmRelationModal';
import { AddCrmSubmit } from './AddCrmRelationModal.types';

export const AddCrmRelationModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened, options } = useModalState('add-relation');
  const [createCrm] = useCreateCrmMutation();
  const { push } = useHistory();
  const apiClient = useApolloClient();

  const createNewRelation: AddCrmSubmit<CreateCrmInput> = async ({
    forceAdd,
    ...input
  }: CreateCrmInput & { forceAdd?: boolean }) => {
    try {
      if (!forceAdd) {
        const { data: crmWithSameInfo } = await apiClient.query<
          GetCrmWithSameInfoQuery,
          GetCrmWithSameInfoQueryVariables
        >({
          query: GetCrmWithSameInfoDocument,
          fetchPolicy: 'network-only',
          variables: {
            input,
          },
        });

        if (crmWithSameInfo?.getCrmWithSameInfo.items?.length) {
          return {
            error: 'conflict',
            conflictsCount: crmWithSameInfo?.getCrmWithSameInfo.items?.length,
          };
        }
      }

      const { data, errors } = await createCrm({
        variables: {
          input: {
            ...input,
            type: CrmType.Relation,
          },
        },
      });

      if (errors) {
        throw new Error();
      }

      if (data) {
        push(AppRoute.crmRelationsDetails.replace(':id', data?.createCrm.id as string), {
          newlyAdded: true,
          data: data?.createCrm,
        });
      }

      close('add-relation');

      return undefined;
    } catch (error) {
      return {
        error: 'unknown',
      };
    }
  };

  return (
    <AddCrmRelationModal
      isOpened={isModalOpened}
      onClose={() => close('add-relation')}
      onCreateNewRelation={createNewRelation}
      onRequestBricrData={() => {}}
      crmType={options?.crmType}
    />
  );
};
