import React from 'react';
import { useParams } from 'react-router-dom';

import { EntityWithFiles, LabelProperty, PictureType, PimMediaDocument, useUpdatePictureMutation } from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';
import { useCustomLabels, useGetPrivateFile } from 'hooks';

import { EditPictureModal } from './EditPictureModal';
import { EditPictureForm, EditPictureModalContainerProps } from './EditPictureModal.types';

const options = Object.values(PictureType).map(tagName => ({
  label: `dictionaries.media.picture.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const EditPictureModalContainer = ({ isModalOpened, onModalClose, picture }: EditPictureModalContainerProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const { loading, data } = useGetPrivateFile(picture.file?.key || '', EntityWithFiles.MediaPicture, picture.id);
  const customLabels = useCustomLabels(pimId, [LabelProperty.Picture]);

  // TODO: change data based on type while integration
  const [updatePicture] = useUpdatePictureMutation();

  const handleSave = async ({ file, description, name, type, id }: EditPictureForm) => {
    try {
      if (!id) {
        throw new Error();
      }

      await updatePicture({
        variables: {
          input: {
            pimId,
            fileId: file?.id,
            id,
            description,
            name,
            type,
          },
        },
        refetchQueries: [
          {
            query: PimMediaDocument,
            variables: {
              id: pimId,
            },
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