import React from 'react';

import {
  CreateDmsFolderInput,
  ListDmsFoldersDocument,
  useCreateDmsFolderMutation,
  useListDmsFoldersQuery,
} from 'api/types';

import { SecondaryFolder } from './SecondaryFolder';
import { SecondaryFolderContainerProps } from './SecondaryFolder.types';

export const SecondaryFolderContainer = (props: SecondaryFolderContainerProps) => {
  const { id } = props;
  const [createDmsFolder] = useCreateDmsFolderMutation();

  const { data, loading } = useListDmsFoldersQuery({
    variables: {
      entityId: id,
    },
    fetchPolicy: 'network-only',
  });

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

  return (
    <>
      <SecondaryFolder {...props} loading={loading} onAddFolder={onAddFolder} folders={data?.listDmsFolders ?? []} />
    </>
  );
};
