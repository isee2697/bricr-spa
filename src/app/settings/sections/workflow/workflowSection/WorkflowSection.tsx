import React, { useState } from 'react';

import { InfoSection } from 'ui/molecules';
import { Box, Card, Collapse, IconButton, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon, MenuIcon } from 'ui/atoms/icons';

import { WorkflowSectionProps } from './WorkflowSection.types';
import { useStyles } from './WorkflowSection.styles';

export const WorkflowSection = ({ section }: WorkflowSectionProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Card className={classes.root}>
        <Box p={3} pl={2}>
          <Box className={classes.header}>
            <Typography variant="h2">{section.title}</Typography>
            <Box className={classes.actions}>
              <IconButton className={classes.options} variant="rounded" size="small" onClick={() => {}}>
                <MenuIcon color="inherit" />
              </IconButton>
              <IconButton
                className={classes.options}
                variant="roundedContained"
                size="small"
                onClick={() => setExpanded(expanded => !expanded)}
              >
                {expanded ? <ArrowUpIcon color="inherit" /> : <ArrowDownIcon color="inherit" />}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Card>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <InfoSection emoji="👈">
          <Typography variant="h3">{formatMessage({ id: 'settings.workflow.add_trigger' })}</Typography>
        </InfoSection>
      </Collapse>
    </>
  );
};
