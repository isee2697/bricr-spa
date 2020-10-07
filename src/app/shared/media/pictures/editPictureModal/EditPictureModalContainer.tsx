import React from 'react';
import { useParams } from 'react-router-dom';
import { LabelProperty, PictureType } from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';
import { useCustomLabels, useGetPrivateFile } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { getEntityFilesType, useUpdateImage } from '../Pictures.helpers';

import { EditPictureModal } from './EditPictureModal';
import { EditPictureForm, EditPictureModalContainerProps } from './EditPictureModal.types';

const options = Object.values(PictureType).map(tagName => ({
  label: `dictionaries.media.picture.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const EditPictureModalContainer = ({ isModalOpened, onModalClose, picture }: EditPictureModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { entityType } = useEntityType();
  const { save } = useUpdateImage(id);

  const { loading, data } = useGetPrivateFile(picture.file?.key || '', getEntityFilesType(entityType), picture.id);
  const customLabels = useCustomLabels(id, [LabelProperty.Picture], entityType);

  const handleSave = async (editedPicture: EditPictureForm) => {
    try {
      const response = await save(editedPicture);

      onModalClose();

      return response;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  if (loading) {
    return null;
  }

  return (
    <EditPictureModal
      isModalOpened={!loading && isModalOpened}
      onModalClose={onModalClose}
      picture={picture}
      initialValues={{ ...picture, signedUrl: data?.signedUrl ?? '' }}
      options={[...options, ...(customLabels[LabelProperty.Picture] ?? [])]}
      onSubmit={handleSave}
    />
  );
};
