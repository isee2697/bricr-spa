import React from 'react';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { PhaseItem } from '../phaseItem/PhaseItem';

export const Phase = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.phase.title' })}
      isEditable
      isExpandable
      isInitExpanded={false}
    >
      {inEditMode => <PhaseItem inEditMode={inEditMode} phase={{ id: '1', image: 'aaa', name: 'De Werf' }} />}
    </FormSection>
  );
};
