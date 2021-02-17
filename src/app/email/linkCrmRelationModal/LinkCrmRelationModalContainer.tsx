import React from 'react';

import { CreateCrmInput, CrmType, useCreateCrmMutation } from 'api/types';
import { AddCrmRelationModal } from 'app/shared/addCrmRelationModal/AddCrmRelationModal';

import { LinkCrmRelationModalContainerProps } from './LinkCrmRelationModalContainer.types';

export const LinkCrmRelationModalContainer = ({ isOpened, onSubmit, onClose }: LinkCrmRelationModalContainerProps) => {
  const [createCrm] = useCreateCrmMutation();

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
      onSubmit(data.createCrm);
    }

    return undefined;
  };

  return (
    <AddCrmRelationModal
      isOpened={isOpened}
      onClose={onClose}
      onCreateNewRelation={createNewRelation}
      onRequestBricrData={() => {
        onClose();
      }}
    />
  );
};
