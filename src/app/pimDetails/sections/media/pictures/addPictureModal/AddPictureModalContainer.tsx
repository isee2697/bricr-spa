import React from 'react';
import { useParams } from 'react-router-dom';

import { UploadModal } from 'ui/organisms';
import { AddMapModalProps } from 'app/pimDetails/sections/media/pictures/addPictureModal/AddPictureModal.types';
import { PimMediaDocument, useAddPicturesMutation, useInitSendFileMutation, useUploadFileMutation } from 'api/types';

export const AddPictureModalContainer = ({ isOpened, onClose, sortQuery }: AddMapModalProps) => {
  const { id } = useParams<{ id: string }>();
  const [initUpload, { loading: initLoading }] = useInitSendFileMutation();
  const [uploadFile, { loading: uploadLoading }] = useUploadFileMutation();
  const [addPicture, { loading: pictureLoading }] = useAddPicturesMutation();

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

  const handleSave = async (files: FileList) => {
    const pictures = await Promise.all(
      Array.from(files).map(async file => {
        return {
          fileID: await getFileId(file),
        };
      }),
    );

    try {
      await addPicture({
        variables: {
          input: {
            pimId: id,
            pictures: pictures,
          },
        },
        refetchQueries: [
          {
            query: PimMediaDocument,
            variables: {
              id,
              picturesSort: sortQuery,
            },
          },
        ],
      });
      onClose();
    } catch (error) {}
  };

  return (
    <UploadModal
      onUpload={handleSave}
      isSubmitting={initLoading || uploadLoading || pictureLoading}
      isOpened={isOpened}
      onClose={onClose}
    />
  );
};
