import React, { useState } from 'react';

import { FormProps, NewPhaseModalContainerProps } from './NewPhaseModal.types';
import { NewPhaseModal } from './NewPhaseModal';

export const NewPhaseModalContainer = ({ isOpened, onClose }: NewPhaseModalContainerProps) => {
  const [conflictNumber, setConflictNumber] = useState(0);

  const onSubmit = async (values: FormProps) => {
    setConflictNumber(1);

    return {
      error: true,
    };
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
