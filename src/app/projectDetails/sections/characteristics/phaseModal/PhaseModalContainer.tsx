import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { NewPhaseModalContainer } from '../newPhaseModal/NewPhaseModalContainer';
import {
  NcpCharacteristicsDocument,
  ProjectPhasesDocument,
  useLinkNcpToProjectPhaseMutation,
  useProjectPhasesQuery,
} from 'api/types';
import { usePagination } from 'hooks';

import { PhaseForm, PhaseModalContainerProps } from './PhaseModal.types';
import { PhaseModal } from './PhaseModal';

export const PhaseModalContainer = ({ isOpened, onClose, selectedPhase }: PhaseModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [isAddPhaseOpened, setAddPhaseOpened] = useState(false);
  const [linkNcpToPhase] = useLinkNcpToProjectPhaseMutation();

  const { query: paginationQuery } = usePagination({
    itemsCount: 0,
    perPageOptions: ['All'],
  });

  const { data: listData } = useProjectPhasesQuery({
    variables: { name: undefined, ncpId: undefined, ...paginationQuery },
    fetchPolicy: 'no-cache',
  });

  const handleAddClose = (id?: string) => {
    setAddPhaseOpened(false);

    if (id) {
      onClose();
    }
  };

  const handleSubmit = async (values: PhaseForm) => {
    try {
      if (values.phase) {
        await linkNcpToPhase({
          variables: {
            input: {
              ncpId: id,
              projectPhaseId: values.phase.id,
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
      }

      onClose();

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <>
      <PhaseModal
        isOpened={!isAddPhaseOpened && isOpened}
        onClose={onClose}
        onSubmit={handleSubmit}
        phaseList={listData?.getProjectPhases.items ?? []}
        onAdd={() => setAddPhaseOpened(true)}
        selectedPhase={selectedPhase}
      />
      <NewPhaseModalContainer isOpened={isAddPhaseOpened} onClose={handleAddClose} />
    </>
  );
};
