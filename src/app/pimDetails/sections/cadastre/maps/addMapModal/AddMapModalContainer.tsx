import React from 'react';
import { useParams } from 'react-router-dom';

import { UploadModal } from 'ui/organisms';
import { useAddCadastreMapsMutation, CadastreMapType, PimDetailsDocument } from 'api/types';

import { AddMapModalProps } from './AddMapModal.types';

export const AddMapModalContainer = ({ isOpened, onClose }: AddMapModalProps) => {
  const { id } = useParams<{ id: string }>();
  const [addMaps, { loading }] = useAddCadastreMapsMutation();
  const handleSave = async (files: string[]) => {
    try {
      await addMaps({
        variables: {
          input: {
            pimId: id,
            maps: files.map(file => ({
              mapName: '',
              fileName: file,
              description: '',
              type: CadastreMapType.Map,
            })),
          },
        },
        refetchQueries: [
          {
            query: PimDetailsDocument,
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
