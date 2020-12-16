import React from 'react';

import { Box, Card, IconButton, Typography } from 'ui/atoms';
import { ArrowUpIcon, MenuIcon } from 'ui/atoms/icons';
import { WorkflowCanvas } from '../workflowCanvas/WorkflowCanvas';
import { useLocale } from 'hooks';
import { StartPointStart, StartPointPrevious, StartPointOutside } from '../GeneralTriggerTypes';
import { WorkflowSectionStartpoint, WorkflowTriggerType } from 'api/types';

import { WorkflowSectionExpandedProps } from './WorkflowSectionExpanded.types';
import { useStyles } from './WorkflowSectionExpanded.styles';

export const WorkflowSectionExpanded = ({
  section,
  onSettings,
  onCollapse,
  onAddWorkflowTrigger,
  ...otherProps
}: WorkflowSectionExpandedProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <Box p={3} pl={2}>
          <Box className={classes.header}>
            <Box display="flex" alignItems="center">
              <Box mr={1.5}>
                {section.startpoint === WorkflowSectionStartpoint.Start && <StartPointStart />}
                {section.startpoint === WorkflowSectionStartpoint.Previous && <StartPointPrevious />}
                {section.startpoint === WorkflowSectionStartpoint.Outside && <StartPointOutside />}
              </Box>
              <Typography variant="h2">
                {section.name} ({section.triggers.length}{' '}
                {formatMessage({ id: 'settings.workflow.startpoint' }, { startpointCount: section.triggers.length })})
              </Typography>
            </Box>
            <Box className={classes.actions}>
              <IconButton className={classes.options} variant="rounded" size="small" onClick={onSettings}>
                <MenuIcon color="inherit" />
              </IconButton>
              <IconButton className={classes.options} variant="roundedContained" size="small" onClick={onCollapse}>
                <ArrowUpIcon color="inherit" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Card>
      <WorkflowCanvas
        triggers={section.triggers}
        onAddWorkflowTrigger={(type: WorkflowTriggerType) => onAddWorkflowTrigger(section.id, type)}
        {...otherProps}
      />
    </>
  );
};
