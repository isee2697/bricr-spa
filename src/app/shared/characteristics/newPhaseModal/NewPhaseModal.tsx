import React from 'react';
import { Form } from 'react-final-form';
import { Modal } from 'ui/molecules';
import { useLocale } from 'hooks';

import { NewPhaseForm } from './newPhaseForm/NewPhaseForm';
import { PhaseConflict } from './phaseConflict/PhaseConflict';
import { NewPhaseModalProps } from './NewPhaseModal.types';

export const NewPhaseModal = ({
  isOpened,
  onClose,
  conflictNumber,
  onSubmit,
  resetConflictNumber,
}: NewPhaseModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'project_details.characteristics.new_phase.title' })}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            {!conflictNumber && <NewPhaseForm onClose={onClose} submitting={submitting} />}
            {!!conflictNumber && <PhaseConflict onCancel={resetConflictNumber} conflictsCount={conflictNumber} />}
          </form>
        )}
      </Form>
    </Modal>
  );
};
