import React from 'react';

import { Box, Card, Collapse, IconButton, Typography } from 'ui/atoms';
import { ArrowDownIcon, ArrowUpIcon, MenuIcon } from 'ui/atoms/icons';
import { WorkflowCanvas } from '../workflowCanvas/WorkflowCanvas';

import { WorkflowSectionProps } from './WorkflowSection.types';
import { useStyles } from './WorkflowSection.styles';

export const WorkflowSection = ({ section, expanded, onExpanded, onAddItem }: WorkflowSectionProps) => {
  const classes = useStyles();

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
              <IconButton className={classes.options} variant="roundedContained" size="small" onClick={onExpanded}>
                {expanded ? <ArrowUpIcon color="inherit" /> : <ArrowDownIcon color="inherit" />}
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Card>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <WorkflowCanvas trigger={section.trigger} onAddItem={data => onAddItem({ ...data, sectionId: section.id })} />
      </Collapse>
    </>
  );
};
