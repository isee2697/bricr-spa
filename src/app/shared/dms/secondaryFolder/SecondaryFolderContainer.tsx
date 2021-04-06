import React, { useEffect, useState } from 'react';

import {
  CreateDmsFolderInput,
  DmsFolder,
  ListDmsFolderFilesDocument,
  ListDmsFoldersDocument,
  useCreateDmsFolderMutation,
  useCreateDmsFileMutation,
  useListDmsFolderFilesLazyQuery,
  useListDmsFoldersQuery,
} from 'api/types';

import { SecondaryFolder } from './SecondaryFolder';
import { SecondaryFolderContainerProps } from './SecondaryFolder.types';

export const SecondaryFolderContainer = (props: SecondaryFolderContainerProps) => {
  const { id, type, entityType } = props;
  const [createDmsFolder] = useCreateDmsFolderMutation();
  const [listDmsFiles, { data: dmsFilesData, loading: isLoadingDmsFiles }] = useListDmsFolderFilesLazyQuery();
  const [selectedFolder, setSelectedFolder] = useState<DmsFolder | null>();
  const [createDmsFile] = useCreateDmsFileMutation();

  useEffect(() => {
    if (selectedFolder && selectedFolder.id) {
      listDmsFiles({
        variables: {
          folderId: selectedFolder.id,
        },
      });
    }
  }, [listDmsFiles, selectedFolder]);

  const { data, loading } = useListDmsFoldersQuery({
    variables: {
      entityId: id,
      withFileAmount: true,
    },
    fetchPolicy: 'network-only',
  });

  const handleSelectFolder = (folder: DmsFolder) => {
    setSelectedFolder(folder);
  };

  const onAddFolder = async (values: CreateDmsFolderInput) => {
    try {
      await createDmsFolder({
        variables: {
          input: values,
        },
        refetchQueries: [
          {
            query: ListDmsFoldersDocument,
            variables: {
              entityId: id,
            },
          },
        ],
      });
    } catch (error) {}
  };

  const onUploadFile = async (dmsFolder: DmsFolder, file: globalThis.File) => {
    try {
      const { data: initCreateDmsFile, errors } = await createDmsFile({
        variables: {
          input: {
            fileName: file.name,
            folderId: dmsFolder.id,
            entity: {
              type: entityType,
              subType: type,
            },
            meta: {
              fileType: file.type,
            },
          },
          file,
        },
        refetchQueries: [
          {
            query: ListDmsFolderFilesDocument,
            variables: {
              folderId: selectedFolder?.id,
            },
          },
        ],
      });

      if (errors || !initCreateDmsFile || !initCreateDmsFile.createDmsFile.signedUrl) {
        throw new Error('Failed to create DMS');
      }

      return initCreateDmsFile?.createDmsFile.signedUrl;
    } catch (error) {
      return { error: true };
    }
  };

  const handleSave = async (dmsFolder: DmsFolder, files: File[]) => {
    await Promise.all(
      files.map(async file => {
        return {
          fileID: await onUploadFile(dmsFolder, file),
        };
      }),
    );
  };

  return (
    <>
      <SecondaryFolder
        {...props}
        loading={loading}
        onAddFolder={onAddFolder}
        folders={data?.listDmsFolders ?? []}
        onSelectDmsFolder={handleSelectFolder}
        files={dmsFilesData?.listDmsFolderFiles || []}
        loadingFiles={isLoadingDmsFiles}
        onUpload={handleSave}
      />
    </>
  );
};
