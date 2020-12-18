import React from 'react';

import { Box, Card, IconButton, Typography } from 'ui/atoms';
import { ArrowDownIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { StartPointStart, StartPointPrevious, StartPointOutside } from '../GeneralTriggerTypes';
import { WorkflowSectionStartpoint } from 'api/types';

import { WorkflowSectionCollapsedProps } from './WorkflowSectionCollapsed.types';
import { useStyles } from './WorkflowSectionCollapsed.styles';

export const WorkflowSectionCollapsed = ({ section, onExpand, onSettings }: WorkflowSectionCollapsedProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
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
              {section.name} ({section.triggers.length || 0}{' '}
              {formatMessage({ id: 'settings.workflow.startpoint' }, { startpointCount: section.triggers.length || 0 })}
              )
            </Typography>
          </Box>
          <Box className={classes.actions}>
            <IconButton
              className={classes.options}
              variant="rounded"
              size="small"
              onClick={() => {
                onSettings();
              }}
            >
              <MenuIcon color="inherit" />
            </IconButton>
            <IconButton className={classes.options} variant="roundedContained" size="small" onClick={onExpand}>
              <ArrowDownIcon color="inherit" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
