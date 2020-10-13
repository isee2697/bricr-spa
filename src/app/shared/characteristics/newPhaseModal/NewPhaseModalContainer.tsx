import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import {
  NcpCharacteristicsDocument,
  ProjectPhasesDocument,
  ProjectPhasesQuery,
  ProjectPhasesQueryVariables,
  useAddProjectPhaseMutation,
  useInitSendFileMutation,
  useUploadFileMutation,
} from 'api/types';

import { FormProps, NewPhaseModalContainerProps } from './NewPhaseModal.types';
import { NewPhaseModal } from './NewPhaseModal';

export const NewPhaseModalContainer = ({ isOpened, onClose }: NewPhaseModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const apiClient = useApolloClient();
  const [conflictNumber, setConflictNumber] = useState(0);
  const [addPhase] = useAddProjectPhaseMutation();

  const [initUpload] = useInitSendFileMutation();
  const [uploadFile] = useUploadFileMutation();

  const getFileId = async (file: globalThis.File) => {
    const { data: initUploadResponse } = await initUpload({
      variables: {
        input: {
          fileName: file.name,
          fileType: file.type,
          permission: 'public',
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

  const onSubmit = async (values: FormProps) => {
    try {
      if (!values.forceAdd) {
        const { data: phasesList, errors } = await apiClient.query<ProjectPhasesQuery, ProjectPhasesQueryVariables>({
          query: ProjectPhasesDocument,
          fetchPolicy: 'network-only',
          variables: { name: values.name, ncpId: undefined, from: 0, limit: undefined },
        });

        if (errors) {
          throw new Error();
        }

        if (phasesList?.getProjectPhases.items?.length) {
          setConflictNumber(phasesList?.getProjectPhases.items?.length);

          return {
            error: true,
          };
        }
      }

      const fileId = values.file ? await getFileId(values.file) : undefined;

      const { data } = await addPhase({
        variables: {
          input: {
            ncpId: id,
            name: values.name,
            logoId: fileId,
          },
        },
        refetchQueries: [
          {
            query: NcpCharacteristicsDocument,
            variables: { id },
          },
          {
            query: ProjectPhasesDocument,
            variables: { name: undefined, ncpId: id, from: 0, limit: 1 },
          },
        ],
      });

      onClose(data?.addProjectPhase.id);

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <NewPhaseModal
      isOpened={isOpened}
      onClose={onClose}
      conflictNumber={conflictNumber}
      onSubmit={onSubmit}
      resetConflictNumber={() => setConflictNumber(0)}
    />
  );
};
