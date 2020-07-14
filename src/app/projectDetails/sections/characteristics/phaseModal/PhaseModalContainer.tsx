import React, { useState } from 'react';

import { NewPhaseModalContainer } from '../newPhaseModal/NewPhaseModalContainer';

import { PhaseForm, PhaseModalContainerProps } from './PhaseModal.types';
import { PhaseModal } from './PhaseModal';

const PHASE_LIST_MOCK = [
  { id: '1', name: 'De Werf' },
  { id: '2', name: 'Brian Smith' },
];

export const PhaseModalContainer = ({ isOpened, onClose, selectedPhase }: PhaseModalContainerProps) => {
  const [isAddPhaseOpened, setAddPhaseOpened] = useState(false);

  const handleAddClose = (id?: string) => {
    setAddPhaseOpened(false);

    if (id) {
    }
  };

  const handleSubmit = async (values: PhaseForm) => {
    onClose();

    return undefined;
  };

  return (
    <>
      <PhaseModal
        isOpened={!isAddPhaseOpened && isOpened}
        onClose={onClose}
        onSubmit={handleSubmit}
        phaseList={PHASE_LIST_MOCK}
        onAdd={() => setAddPhaseOpened(true)}
        selectedPhase={selectedPhase}
      />
      <NewPhaseModalContainer isOpened={isAddPhaseOpened} onClose={handleAddClose} />
    </>
  );
};
