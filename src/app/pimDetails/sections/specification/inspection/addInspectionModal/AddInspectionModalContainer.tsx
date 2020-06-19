import React from 'react';
import { useParams } from 'react-router-dom';

import { useAddInspectionMutation, PimSpecificationDocument } from 'api/types';

import { AddInspectionModalContainerProps, AddInspectionValues } from './AddInspectionModal.types';
import { AddInspectionModal } from './AddInspectionModal';

export const AddInspectionModalContainer = ({
  isOpened,
  onClose,
  type,
  onAddCustomType,
}: AddInspectionModalContainerProps) => {
  const { id } = useParams<{ id: string }>();

  const [addInspection] = useAddInspectionMutation();

  const handleSubmit = async (values: AddInspectionValues) => {
    try {
      const { data: result } = await addInspection({
        variables: {
          input: {
            pimId: id,
            inspectionType: type,
            type: values.inspection,
          },
        },
        refetchQueries: [
          {
            query: PimSpecificationDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!result?.addInspection) {
        throw new Error();
      }

      onClose();

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <AddInspectionModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      type={type}
      onAddCustomType={onAddCustomType}
    />
  );
};
