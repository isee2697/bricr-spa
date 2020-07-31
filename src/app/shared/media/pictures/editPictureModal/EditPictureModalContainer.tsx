import React from 'react';
import { useParams } from 'react-router-dom';

import {
  LabelProperty,
  PictureType,
  PimMediaDocument,
  NcpMediaDocument,
  ObjectTypeMediaDocument,
  useUpdatePictureMutation,
  useUpdateNcpPictureMutation,
  useUpdateObjectTypePictureMutation,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';
import { useCustomLabels, useGetPrivateFile } from 'hooks';
import { useEntityType, EntityType } from 'app/shared/entityType';
import { getEntityFilesType } from '../Pictures.helpers';

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

  const { loading, data } = useGetPrivateFile(picture.file?.key || '', getEntityFilesType(entityType), picture.id);
  const customLabels = useCustomLabels(id, [LabelProperty.Picture], entityType);

  const [updatePicture] = useUpdatePictureMutation();
  const [updateNcpPicture] = useUpdateNcpPictureMutation();
  const [updateObjectTypePicture] = useUpdateObjectTypePictureMutation();

  const handleSave = async ({ file, description, name, type, id: pictureId }: EditPictureForm) => {
    try {
      if (!id) {
        throw new Error();
      }

      if (entityType === EntityType.Property || entityType === EntityType.LinkedProperty)
        await updatePicture({
          variables: {
            input: {
              pimId: id,
              fileId: file?.id,
              id: pictureId,
              description,
              name,
              type,
            },
          },
          refetchQueries: [
            {
              query: PimMediaDocument,
              variables: { id },
            },
          ],
        });

      if (entityType === EntityType.Project)
        await updateNcpPicture({
          variables: {
            input: {
              parentId: id,
              fileId: file?.id,
              id: pictureId,
              description,
              name,
              type,
            },
          },
          refetchQueries: [
            {
              query: NcpMediaDocument,
              variables: { id },
            },
          ],
        });

      if (entityType === EntityType.ObjectType)
        await updateObjectTypePicture({
          variables: {
            input: {
              parentId: id,
              fileId: file?.id,
              id: pictureId,
              description,
              name,
              type,
            },
          },
          refetchQueries: [
            {
              query: ObjectTypeMediaDocument,
              variables: { id },
            },
          ],
        });

      onModalClose();

      return undefined;
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
