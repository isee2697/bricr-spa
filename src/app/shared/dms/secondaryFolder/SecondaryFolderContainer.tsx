import React, { useEffect, useState } from 'react';

import {
  CreateDmsFolderInput,
  DmsFolder,
  ListDmsFoldersDocument,
  useCreateDmsFolderMutation,
  useInitCreateDmsFileMutation,
  useListDmsFilesLazyQuery,
  useListDmsFoldersQuery,
  useUploadFileMutation,
} from 'api/types';

import { SecondaryFolder } from './SecondaryFolder';
import { SecondaryFolderContainerProps } from './SecondaryFolder.types';

export const SecondaryFolderContainer = (props: SecondaryFolderContainerProps) => {
  const { id, type, entityType } = props;
  const [createDmsFolder] = useCreateDmsFolderMutation();
  const [listDmsFiles, { data: dmsFilesData, loading: isLoadingDmsFiles }] = useListDmsFilesLazyQuery();
  const [selectedFolder, setSelectedFolder] = useState<DmsFolder | null>();
  const [createDmsFile] = useInitCreateDmsFileMutation();
  const [uploadFile] = useUploadFileMutation();

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
    const { data: initCreateDmsFile } = await createDmsFile({
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
      },
    });

    if (initCreateDmsFile?.initCreateDmsFile && initCreateDmsFile.initCreateDmsFile.signedUrl) {
      await uploadFile({
        variables: {
          input: file,
          pathBuilder: () => initCreateDmsFile.initCreateDmsFile.signedUrl,
        },
      });

      return initCreateDmsFile.initCreateDmsFile.id;
    }

    return undefined;
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
        files={dmsFilesData?.listDmsFiles || []}
        loadingFiles={isLoadingDmsFiles}
        onUpload={handleSave}
      />
    </>
  );
};
