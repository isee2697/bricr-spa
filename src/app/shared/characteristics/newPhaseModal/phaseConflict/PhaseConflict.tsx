import React from 'react';
import { useLocale } from 'hooks';
import { ConflictInfo } from 'ui/organisms';

import { PhaseConflictProps } from './PhaseConflict.types';

export const PhaseConflict = ({ conflictsCount, onCancel }: PhaseConflictProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <ConflictInfo
        cancel={formatMessage({ id: 'project_details.characteristics.new_phase.i_will_correct' })}
        confirm={formatMessage({ id: 'project_details.characteristics.new_phase.yes_add_the_same' })}
        messageLineFirst={formatMessage(
          { id: 'project_details.characteristics.new_phase.properties_exists' },
          { count: conflictsCount, strong: msg => <strong>{msg}</strong> },
        )}
        messageLineSecond={formatMessage({ id: 'project_details.characteristics.new_phase.are_you_sure' })}
        onCancel={onCancel}
      />
    </>
  );
};
