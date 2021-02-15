import React from 'react';
import { useHistory } from 'react-router-dom';

import { useModalDispatch, useModalState } from 'hooks';
import { CreateCrmInput, CrmType, useCreateCrmMutation } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddCrmRelationModal } from './AddCrmRelationModal';
import { AddCrmSubmit } from './AddCrmRelationModal.types';

export const AddCrmRelationModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('add-relation');
  const [createCrm] = useCreateCrmMutation();
  const { push } = useHistory();

  const createNewRelation: AddCrmSubmit<CreateCrmInput> = async ({
    forceAdd,
    ...input
  }: CreateCrmInput & { forceAdd?: boolean }) => {
    try {
      if (!forceAdd) {
        return { error: 'conflict', conflictsCount: 3 };
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
        push(AppRoute.crmRelationsDetails.replace(':id', data?.createCrm.id as string), { newlyAdded: true });
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
    />
  );
};
