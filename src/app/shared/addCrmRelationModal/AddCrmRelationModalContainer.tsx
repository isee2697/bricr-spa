import React from 'react';
import { useHistory } from 'react-router-dom';

import { useModalDispatch, useModalState } from 'hooks';
import { CreateCrmInput, CrmType, useCreateCrmMutation } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddCrmRelationModal } from './AddCrmRelationModal';

export const AddCrmRelationModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('add-relation');
  const [createCrm] = useCreateCrmMutation();
  const { push } = useHistory();

  const createNewRelation = async (input: CreateCrmInput) => {
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
      push(AppRoute.crmRelationsDetails.replace(':id', data.createCrm.id), { newlyAdded: true });
    }

    close('add-relation');
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
