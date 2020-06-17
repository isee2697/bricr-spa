import React from 'react';
import { useParams } from 'react-router-dom';

import { UploadModal } from 'ui/organisms';
import {
  useAddCadastreMapsMutation,
  CadastreMapType,
  useInitSendFileMutation,
  useUploadFileMutation,
  NewCadastreMapInput,
  PimCadastreDocument,
} from 'api/types';

import { AddMapModalProps } from './AddMapModal.types';

export const AddMapModalContainer = ({ isOpened, onClose }: AddMapModalProps) => {
  const { id } = useParams<{ id: string }>();
  const [addMaps, { loading }] = useAddCadastreMapsMutation();
  const [initUpload] = useInitSendFileMutation();
  const [uploadFile] = useUploadFileMutation();

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
    const fileIds: NewCadastreMapInput[] = [];

    for (let i = 0; i < files.length; i++) {
      const fileID = await getFileId(files[i]);

      fileIds.push({
        mapName: '',
        fileID: fileID,
        description: '',
        name: files[i].name,
        type: CadastreMapType.Map,
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
      onClose();
    } catch (error) {}
  };

  return <UploadModal onUpload={handleSave} isSubmitting={loading} isOpened={isOpened} onClose={onClose} />;
};
