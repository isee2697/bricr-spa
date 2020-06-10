import React, { useState } from 'react';

import { Box, Collapse, Grid } from 'ui/atoms';
import { SubSectionHeader } from 'ui/molecules';

import { FormSubSectionProps } from './FormSubSection.types';
import { useStyles } from './FormSubSection.styles';

export const FormSubSection = ({
  title,
  children,
  onOptionsClick,
  counter,
  initiallyOpened = true,
}: FormSubSectionProps) => {
  const [isOpened, setOpened] = useState(initiallyOpened);
  const classes = useStyles();

  return (
    <>
      <SubSectionHeader toggled={isOpened} onToggleClick={() => setOpened(o => !o)} onOptionsClick={onOptionsClick}>
        <Box display="flex">
          {counter && <div className={classes.counter}>{counter}</div>}
          {title}
        </Box>
      </SubSectionHeader>
      <Collapse style={{ width: '100%' }} in={isOpened} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};
