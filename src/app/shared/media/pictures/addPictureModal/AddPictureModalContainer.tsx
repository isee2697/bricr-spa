import React from 'react';
import { useParams } from 'react-router-dom';

import { UploadModal } from 'ui/organisms';
import { AddMapModalProps } from 'app/shared/media/pictures/addPictureModal/AddPictureModal.types';
import {
  PimMediaDocument,
  NcpMediaDocument,
  ObjectTypeMediaDocument,
  useAddPicturesMutation,
  useAddNcpPicturesMutation,
  useAddObjectTypePicturesMutation,
  useInitSendFileMutation,
  useUploadFileMutation,
} from 'api/types';
import { useEntityType, EntityType } from 'app/shared/entityType';

export const AddPictureModalContainer = ({ isOpened, onClose, sortQuery }: AddMapModalProps) => {
  const { id } = useParams<{ id: string }>();
  const { entityType } = useEntityType();

  const [initUpload, { loading: initLoading }] = useInitSendFileMutation();
  const [uploadFile, { loading: uploadLoading }] = useUploadFileMutation();
  const [addPicture, { loading: pictureLoading }] = useAddPicturesMutation();
  const [addObjectTypePicture, { loading: objectTypePictureLoading }] = useAddObjectTypePicturesMutation();
  const [addNcpPicture, { loading: ncpPictureLoading }] = useAddNcpPicturesMutation();

  const getFileId = async (file: globalThis.File) => {
    const { data: initUploadResponse } = await initUpload({
      variables: {
        input: {
          fileName: file.name,
          fileType: file.type,
          permission: 'private',
          description: file.name,
        },
      },
    });

    if (initUploadResponse?.initSendFile && initUploadResponse.initSendFile.signedUrl) {
      await uploadFile({
        variables: {
          input: file,
          pathBuilder: () => initUploadResponse.initSendFile.signedUrl,
        },
      });

      return initUploadResponse.initSendFile.id;
    }

    return '';
  };

  const handleSave = async (files: File[]) => {
    const pictures = await Promise.all(
      files.map(async file => {
        return {
          fileID: await getFileId(file),
        };
      }),
    );

    try {
      if (entityType === EntityType.Property || entityType === EntityType.LinkedProperty) {
        await addPicture({
          variables: {
            input: {
              pimId: id,
              pictures,
            },
          },
          refetchQueries: [
            {
              query: PimMediaDocument,
              variables: { id, picturesSort: sortQuery },
            },
          ],
        });
      }

      if (entityType === EntityType.Project) {
        await addNcpPicture({
          variables: {
            input: {
              parentId: id,
              pictures,
            },
          },
          refetchQueries: [
            {
              query: NcpMediaDocument,
              variables: { id, picturesSort: sortQuery },
            },
          ],
        });
      }

      if (entityType === EntityType.ObjectType) {
        await addObjectTypePicture({
          variables: {
            input: {
              parentId: id,
              pictures,
            },
          },
          refetchQueries: [
            {
              query: ObjectTypeMediaDocument,
              variables: { id, picturesSort: sortQuery },
            },
          ],
        });
      }

      onClose();
    } catch (error) {}
  };

  return (
    <UploadModal
      onUpload={handleSave}
      isSubmitting={initLoading || uploadLoading || pictureLoading || ncpPictureLoading || objectTypePictureLoading}
      isOpened={isOpened}
      onClose={onClose}
    />
  );
};
