import React, { useState, useLayoutEffect, useCallback, ReactNode } from 'react';
import { useTheme } from '@material-ui/core/styles';

import { useLocale } from 'hooks';
import { Box, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { AddPlaceholder, TriggerItem, ActionItem, DndItemState } from '../workflowItems';
import { Action } from '../Workflow.types';

import { WorkflowCanvasProps, Point } from './WorkflowCanvas.types';
import { useStyles } from './WorkflowCanvas.styles';

const STEP = 24;
const TRIGGER_OFFSET = {
  top: 12 + STEP * 2,
  left: 12 + STEP,
};
const ACTION_OFFSET = {
  top: 12 + STEP * 4,
  left: 12 + STEP * 10,
};
const ACTION_STEP = {
  top: STEP * 7,
  left: STEP * 11,
};

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

const renderAddPlaceholder = (topOffset: number, leftOffset: number) => (
  <Box position="absolute" top={topOffset} left={leftOffset}>
    <AddPlaceholder />
  </Box>
);

export const WorkflowCanvas = ({ trigger }: WorkflowCanvasProps) => {
  const { formatMessage } = useLocale();
  const theme = useTheme();
  const classes = useStyles();

  const [, height] = useWindowSize();
  const [topCanvasOffset, setTopCanvasOffset] = useState(0);

  const renderLine = useCallback(
    (start: Point, stop: Point) => {
      if (start.y === stop.y) {
        return (
          <Box position="absolute" left={start.x} top={start.y}>
            <svg>
              <path d={`M 0 0 H ${stop.x - start.x}`} stroke={theme.palette.gray.main} strokeWidth="3" fill="none" />
            </svg>
          </Box>
        );
      }

      const width = stop.x - start.x;
      const height = stop.y - start.y;
      const quaterStep = STEP / 4;

      return (
        <Box position="absolute" left={start.x} top={start.y}>
          <svg width={width + 10} height={height + 10}>
            <path
              d={`M 0 0
                  H ${width / 2 - quaterStep} A ${quaterStep} ${quaterStep}, 0, 0, 1, ${width / 2} ${quaterStep}
                  V ${height - quaterStep}
                  A ${quaterStep} ${quaterStep}, 0, 0, 0, ${width / 2 + quaterStep} ${height}
                  H ${width}`}
              stroke={theme.palette.gray.main}
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </Box>
      );
    },
    [theme.palette.gray.main],
  );

  const renderAction = useCallback(
    (action: Action, topOffset: number, leftOffset: number): ReactNode => (
      <Box key={action.id}>
        <Box position="absolute" top={topOffset} left={leftOffset}>
          <ActionItem icon={action.icon} title={action.title} state={DndItemState.DROPPED} />
          <Box mt={2.5}>
            <Box className={classes.ruleButton}>
              <AddIcon color="inherit" /> {formatMessage({ id: 'settings.workflow.set_rules_to_action' })}
            </Box>
          </Box>
        </Box>
        {renderLine(
          { x: leftOffset + 9 * STEP, y: topOffset + STEP },
          { x: leftOffset + 11 * STEP, y: topOffset + STEP },
        )}
        {!!action.nextAction && renderAction(action.nextAction, topOffset, leftOffset + ACTION_STEP.left)}
        {!action.nextAction && renderAddPlaceholder(topOffset, leftOffset + ACTION_STEP.left)}
      </Box>
    ),
    [classes.ruleButton, formatMessage, renderLine],
  );

  return (
    <Box className={classes.container} height={height - topCanvasOffset}>
      <div ref={ref => setTopCanvasOffset(ref?.offsetTop ?? 0)} />

      {!trigger && (
        <InfoSection emoji="👈">
          <Typography variant="h3">{formatMessage({ id: 'settings.workflow.add_trigger' })}</Typography>
        </InfoSection>
      )}

      {!!trigger && (
        <>
          <Box position="absolute" top={STEP / 2} left={TRIGGER_OFFSET.left}>
            <Typography className={classes.title}>{formatMessage({ id: 'settings.workflow.triggers' })}</Typography>
          </Box>
          <Box position="absolute" top={STEP / 2} left={ACTION_OFFSET.left}>
            <Typography className={classes.title}>{formatMessage({ id: 'settings.workflow.actions' })}</Typography>
          </Box>
          <Box position="absolute" {...TRIGGER_OFFSET}>
            <TriggerItem icon={trigger.icon} title={trigger.title} state={DndItemState.DROPPED} />
            <Box mt={2.5}>
              <Box className={classes.ruleButton}>
                <AddIcon color="inherit" /> {formatMessage({ id: 'settings.workflow.set_if_rules' })}
              </Box>
            </Box>
          </Box>
          {trigger.actions.map((action, index) => (
            <>
              {renderLine(
                { x: TRIGGER_OFFSET.left + 5 * STEP, y: TRIGGER_OFFSET.top + 2.5 * STEP },
                { x: TRIGGER_OFFSET.left + 9 * STEP, y: ACTION_OFFSET.top + STEP + 7 * index * STEP },
              )}
              {renderAction(action, ACTION_OFFSET.top + index * ACTION_STEP.top, ACTION_OFFSET.left)}
            </>
          ))}
          {renderLine(
            { x: TRIGGER_OFFSET.left + 5 * STEP, y: TRIGGER_OFFSET.top + 2.5 * STEP },
            { x: TRIGGER_OFFSET.left + 9 * STEP, y: ACTION_OFFSET.top + STEP + 7 * trigger.actions.length * STEP },
          )}
          {renderAddPlaceholder(ACTION_OFFSET.top + trigger.actions.length * ACTION_STEP.top, ACTION_OFFSET.left)}
        </>
      )}
    </Box>
  );
};
