import React, { useState } from 'react';

import { Collapse } from 'ui/atoms';
import { SubSectionHeader } from 'ui/molecules';

import { FormSubSectionProps } from './FormSubSection.types';

export const FormSubSection = ({ title, children, onOptionsClick, initiallyOpened = true }: FormSubSectionProps) => {
  const [isOpened, setOpened] = useState(initiallyOpened);

  return (
    <>
      <SubSectionHeader toggled={isOpened} onToggleClick={() => setOpened(o => !o)} onOptionsClick={onOptionsClick}>
        {title}
      </SubSectionHeader>
      <Collapse style={{ width: '100%' }} in={isOpened} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};
