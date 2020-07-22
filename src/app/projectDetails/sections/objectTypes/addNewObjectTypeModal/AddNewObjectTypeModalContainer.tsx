import React from 'react';
import { useHistory, useParams } from 'react-router';

import { ObjectTypeGeneral, useCreateObjectTypeMutation } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddNewObjectTypeModal } from './AddNewObjectTypeModal';
import { AddNewObjectTypeModalContainerProps } from './AddNewObjectTypeModal.types';

export const AddNewObjectTypeModalContainer = ({ isOpened, onClose }: AddNewObjectTypeModalContainerProps) => {
  const [createObjectType] = useCreateObjectTypeMutation();
  const { id } = useParams<{ id: string }>();
  const { push } = useHistory();

  const handleSubmit = async (values: ObjectTypeGeneral) => {
    try {
      await createObjectType({
        variables: {
          input: {
            ncpId: id,
            name: values.name,
          },
        },
      });
      await onClose();
      push(AppRoute.objectTypeDetails.replace(':projectId', id).replace(':id', values.name));

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  return <AddNewObjectTypeModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
