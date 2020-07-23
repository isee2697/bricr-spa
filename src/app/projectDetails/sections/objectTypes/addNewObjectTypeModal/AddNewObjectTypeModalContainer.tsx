import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';

import { ObjectTypeGeneral, useCreateObjectTypeMutation } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddNewObjectTypeModal } from './AddNewObjectTypeModal';
import { AddNewObjectTypeModalContainerProps } from './AddNewObjectTypeModal.types';

export const AddNewObjectTypeModalContainer = ({ isOpened, onClose }: AddNewObjectTypeModalContainerProps) => {
  const [createObjectType] = useCreateObjectTypeMutation();
  const { id } = useParams<{ id: string }>();
  const { push } = useHistory();
  const [isError, setError] = useState(false);

  const handleSubmit = async (values: ObjectTypeGeneral) => {
    try {
      const { data } = await createObjectType({
        variables: {
          input: {
            ncpId: id,
            name: values.name,
          },
        },
      });
      (await data) && onClose();
      (await data) && data
        ? push(AppRoute.objectTypeDetails.replace(':projectId', id).replace(':id', data?.createObjectType?.id))
        : setError(true);

      return data ? undefined : { error: true };
    } catch (e) {
      return { error: true };
    }
  };

  return <AddNewObjectTypeModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} isError={isError} />;
};
