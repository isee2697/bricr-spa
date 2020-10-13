import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UploadModal } from 'ui/organisms';
import {
  useAddCadastreMapsMutation,
  useInitSendFileMutation,
  useUploadFileMutation,
  NewCadastreMapInput,
  PimCadastreDocument,
} from 'api/types';

import { AddMapModalProps } from './AddMapModal.types';

export const AddMapModalContainer = ({ isOpened, onClose, onUpload }: AddMapModalProps) => {
  const { id } = useParams<{ id: string }>();
  const [addMaps] = useAddCadastreMapsMutation();
  const [initUpload] = useInitSendFileMutation();
  const [uploadFile] = useUploadFileMutation();
  const [isUploading, setIsUploading] = useState(false);

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
    setIsUploading(true);
    const fileIds: NewCadastreMapInput[] = [];

    for (let i = 0; i < files.length; i++) {
      const fileID = await getFileId(files[i]);

      fileIds.push({
        mapName: '',
        fileID: fileID,
        description: '',
        name: files[i].name,
      });
    }

    try {
      await addMaps({
        variables: {
          input: {
            pimId: id,
            maps: fileIds,
          },
        },
        refetchQueries: [
          {
            query: PimCadastreDocument,
            variables: {
              id,
            },
          },
        ],
      });

      setIsUploading(false);
      onUpload();
    } catch (error) {
      setIsUploading(false);
    }
  };

  return <UploadModal onUpload={handleSave} isSubmitting={isUploading} isOpened={isOpened} onClose={onClose} />;
};
