import React, { useState } from 'react';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { PhaseItem } from '../phaseItem/PhaseItem';
import { ProjectPhase } from 'api/types';
import { EmptyBox } from '../emptyBox/EmptyBox';
import { PhaseModalContainer } from '../phaseModal/PhaseModalContainer';

export const Phase = ({ phase }: { phase?: ProjectPhase | null }) => {
  const { formatMessage } = useLocale();
  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'project_details.characteristics.phase.title' })}
        isEditable={!!phase}
        isExpandable
        isInitExpanded={false}
      >
        {inEditMode => {
          if (!phase) {
            return (
              <EmptyBox
                messageLineFirst={formatMessage({ id: 'project_details.characteristics.phase.empty_message_line_1' })}
                messageLineSecond={formatMessage({ id: 'project_details.characteristics.phase.empty_message_line_2' })}
                buttonText={formatMessage({ id: 'project_details.characteristics.phase.empty_button' })}
                onClick={() => setModalOpened(true)}
              />
            );
          }

          return <PhaseItem inEditMode={inEditMode} phase={phase} handleEdit={() => setModalOpened(true)} />;
        }}
      </FormSection>
      {isModalOpened && (
        <PhaseModalContainer
          isOpened={isModalOpened}
          onClose={() => setModalOpened(false)}
          selectedPhase={phase ?? undefined}
        />
      )}
    </>
  );
};
