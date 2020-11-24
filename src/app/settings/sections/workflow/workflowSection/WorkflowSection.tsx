import React from 'react';

import { Box, Card, Collapse, IconButton, Typography } from 'ui/atoms';
import { ArrowDownIcon, ArrowUpIcon, MenuIcon } from 'ui/atoms/icons';
import { WorkflowCanvas } from '../workflowCanvas/WorkflowCanvas';
import { useLocale } from 'hooks';
import { StartPointStart, StartPointPrevious, StartPointOutside } from '../GeneralTriggerTypes';

import { WorkflowSectionProps } from './WorkflowSection.types';
import { useStyles } from './WorkflowSection.styles';

export const WorkflowSection = ({ section, expanded, onExpanded, onAddItem, onSettings }: WorkflowSectionProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <Box p={3} pl={2}>
          <Box className={classes.header}>
            <Box display="flex" alignItems="center">
              <Box mr={1.5}>
                {section.startpoint === 'start' && <StartPointStart />}
                {section.startpoint === 'previous' && <StartPointPrevious />}
                {section.startpoint === 'outside' && <StartPointOutside />}
              </Box>
              <Typography variant="h2">
                {section.title} ({section.triggers?.length || 0}{' '}
                {formatMessage({ id: 'settings.workflow.startpoint' }, { startpointCount: section.triggers?.length })})
              </Typography>
            </Box>
            <Box className={classes.actions}>
              <IconButton className={classes.options} variant="rounded" size="small" onClick={onSettings}>
                <MenuIcon color="inherit" />
              </IconButton>
              <IconButton className={classes.options} variant="roundedContained" size="small" onClick={onExpanded}>
                {expanded ? <ArrowUpIcon color="inherit" /> : <ArrowDownIcon color="inherit" />}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Card>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <WorkflowCanvas triggers={section.triggers} onAddItem={data => onAddItem({ ...data, sectionId: section.id })} />
      </Collapse>
    </>
  );
};
