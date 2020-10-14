import { useTheme } from '@material-ui/core/styles';
import React, { useState, useLayoutEffect, useCallback, useRef, ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import { AnyObject } from 'final-form';

import { useLocale } from 'hooks';
import { Box, Typography } from 'ui/atoms';
import { InfoSection, ConfirmModal } from 'ui/molecules';
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { DropablePlaceholder, TriggerItem, ActionItem, DndItemState } from '../workflowItems';
import {
  DragObjectType,
  DropablePlaceholderCollectProps,
} from '../workflowItems/dropablePlaceholder/DropablePlaceholder.types';
import { Action, TriggerActionGroup, WorkflowItemType } from '../Workflow.types';
import { TriggerConditions } from '../workflowConditions/triggerConditions/TriggerConditions';
import { generalConditionsTypes } from '../workflowConditions/triggerConditions/TriggerConditionsTypes';

import { WorkflowCanvasProps, Point } from './WorkflowCanvas.types';
import { useStyles } from './WorkflowCanvas.styles';

const STEP = 24;
const TRIGGER_OFFSET = {
  top: 12 + STEP * 3,
  left: 12 + STEP,
};
const ACTION_OFFSET = {
  top: STEP * 5,
  left: 12 + STEP * 10,
};
const ACTION_STEP = {
  top: STEP * 4 + 12,
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

const getNestingDepth = (actions?: Action[]): number => {
  if (!actions?.length) {
    return 0;
  }

  const getActionDepth = (action: Action, nesting: number): number => {
    if (!action.nextAction) {
      return nesting;
    }

    return getActionDepth(action.nextAction, nesting + 1);
  };

  return actions.reduce((maxDepth, action) => {
    const currentNesting = getActionDepth(action, 1);

    return maxDepth < currentNesting ? currentNesting : maxDepth;
  }, 0);
};

export const WorkflowCanvas = ({ triggers, onAddItem }: WorkflowCanvasProps) => {
  const { formatMessage } = useLocale();
  const theme = useTheme();
  const classes = useStyles();

  const [state, setState] = useState(false);
  const [confirmModal, setConfirmModal] = useState<ReactNode | null>(null);
  const [triggerCondition, setTriggerCondition] = useState<number | null>(null);
  const [conditionTab, setConditionTab] = useState<number>(0);

  const [width, height] = useWindowSize();
  const [topCanvasOffset, setTopCanvasOffset] = useState(0);
  const [{ isDrag: isDragAction }] = useDrop<DragObjectType, void, DropablePlaceholderCollectProps>({
    accept: WorkflowItemType.ACTION,
    canDrop: () => true,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      isDrag: !!monitor.canDrop(),
    }),
  });
  const error = isDragAction && !triggers?.length;

  const maxWidth = useRef(0);

  const handleToggleTriggerStatus = (index: number) => {
    if (triggers?.[index]) {
      triggers[index].status = triggers[index].status === 'inactive' ? 'active' : 'inactive';
      setState(!state);
    }
  };

  const handleShowConfirmModal = useCallback(
    (type: string, onConfirm: () => void) => {
      setConfirmModal(
        <ConfirmModal
          emoji="😬"
          isOpened={true}
          title={formatMessage({
            id: `settings.workflow.${type}.remove.title`,
          })}
          onCancel={() => {
            setConfirmModal(null);
          }}
          onConfirm={() => {
            onConfirm();
            setConfirmModal(null);
          }}
          messageLineFirst={formatMessage({
            id: `settings.workflow.${type}.remove.confirm_message`,
          })}
          cancelText={formatMessage({
            id: `settings.workflow.${type}.remove.cancel`,
          })}
          confirmText={formatMessage({
            id: `settings.workflow.${type}.remove.confirm`,
          })}
          confirmButtonType={ConfirmButtonType.ERROR}
        />,
      );
    },
    [formatMessage, setConfirmModal],
  );

  const handleRemoveTrigger = (index: number) => {
    if (triggers?.length) {
      triggers?.splice(index, 1);
    }
  };

  const handleShowTriggerConditions = (index: number | null) => {
    setTriggerCondition(index);
  };

  const handleUpdateTriggerConditions = (conditions: AnyObject, conditionAmount: number) => {
    if (triggerCondition !== null && triggers?.[triggerCondition]) {
      triggers[triggerCondition].conditions = conditions;
      triggers[triggerCondition].conditionAmount = conditionAmount;
      setState(!state);
    }
  };

  const handleToggleActionStatus = useCallback(
    (action: Action) => {
      action.status = action.status === 'inactive' ? 'active' : 'inactive';
      setState(prevState => !prevState);
    },
    [setState],
  );

  const handleRemoveAction = useCallback(
    (actionGroup: TriggerActionGroup, index: number, action: Action) => {
      if (actionGroup?.actions?.[index]) {
        if (actionGroup.actions[index] === action) {
          actionGroup.actions.splice(index, 1);
        } else {
          let curAction = actionGroup.actions[index];
          while (curAction && curAction.nextAction && curAction.nextAction !== action) {
            curAction = curAction.nextAction;
          }
          curAction.nextAction = undefined;
        }
        setState(prevState => !prevState);
      }
    },
    [setState],
  );

  // const handleShowActionSettings = (action: Action) => {};

  const renderAddPlaceholder = useCallback(
    (topOffset: number, leftOffset: number, parentId: string) => {
      if (leftOffset > maxWidth.current) {
        maxWidth.current = leftOffset;
      }

      return (
        <Box position="absolute" top={topOffset} left={leftOffset}>
          <DropablePlaceholder
            type={WorkflowItemType.ACTION}
            onDrop={item => onAddItem({ item, type: WorkflowItemType.ACTION, parentId })}
          />
        </Box>
      );
    },
    [onAddItem],
  );

  const renderLine = useCallback(
    (start: Point, stop: Point, direction = 'horizontal') => {
      if (start.y === stop.y) {
        return (
          <Box position="absolute" left={start.x} top={start.y}>
            <svg width={stop.x - start.x}>
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
            {direction === 'vertical' ? (
              <path
                d={`M 0 0
                  V ${height - quaterStep}
                  A ${quaterStep} ${quaterStep}, 0, 0, 0, ${quaterStep} ${height}
                  H ${width}`}
                stroke={theme.palette.gray.main}
                strokeWidth="1"
                fill="none"
              />
            ) : (
              <path
                d={`M 0 0
                H ${width - 15 - quaterStep} A ${quaterStep} ${quaterStep}, 0, 0, 1, ${width - 15} ${quaterStep}
                V ${height - quaterStep}
                A ${quaterStep} ${quaterStep}, 0, 0, 0, ${width - 15 + quaterStep} ${height}
                H ${width}`}
                stroke={theme.palette.gray.main}
                strokeWidth="1"
                fill="none"
              />
            )}
          </svg>
        </Box>
      );
    },
    [theme.palette.gray.main],
  );

  const renderIfRule = useCallback(
    (start: Point, rule: string, size: Point = { x: STEP * 2, y: STEP }) => {
      return (
        <Box
          position="absolute"
          left={start.x}
          top={start.y}
          width={size.x}
          height={size.y}
          className={classes.triggerRule}
        >
          {formatMessage({ id: 'settings.workflow.if' })}
          <br />
          {rule}
        </Box>
      );
    },
    [classes.triggerRule, formatMessage],
  );

  const renderAction = useCallback(
    (
      actionGroup: TriggerActionGroup,
      index: number,
      action: Action,
      topOffset: number,
      leftOffset: number,
    ): ReactNode => (
      <>
        <Box position="absolute" top={topOffset} left={leftOffset}>
          <ActionItem
            icon={action.icon}
            title={action.title}
            state={DndItemState.DROPPED}
            // settings={action.settings}
            status={action.status}
            onStatusChange={() => {
              handleToggleActionStatus(action);
            }}
            onDelete={() => {
              handleShowConfirmModal('action', () => handleRemoveAction(actionGroup, index, action));
            }}
            // onShowSettings={() => {
            //   handleShowActionSettings(action);
            // }}
          />
        </Box>
        {action.status !== 'inactive' && (
          <>
            {renderLine(
              {
                x: leftOffset + ACTION_STEP.left - STEP * 2,
                y: topOffset + STEP,
              },
              { x: leftOffset + ACTION_STEP.left, y: topOffset + STEP },
            )}
            {!!action.nextAction &&
              renderAction(actionGroup, index, action.nextAction, topOffset, leftOffset + ACTION_STEP.left)}
            {!action.nextAction && renderAddPlaceholder(topOffset, leftOffset + ACTION_STEP.left, action.id)}
          </>
        )}
      </>
    ),
    [handleToggleActionStatus, handleRemoveAction, handleShowConfirmModal, renderAddPlaceholder, renderLine],
  );

  const renderActionGroup = useCallback(
    (
      actionGroup: TriggerActionGroup,
      leftOffset: number,
      topOffset: number,
      rule: string,
      ruleLeftOffset: number,
      ruleTopOffset: number,
      lineDirection = 'horizontal',
    ): ReactNode => (
      <Box position="relative" height={((actionGroup.actions?.length ?? 0) + 1) * ACTION_STEP.top}>
        {actionGroup.actions?.map((action, index) => (
          <div key={`${action.id}_${index}`}>
            {renderLine(
              {
                x: leftOffset,
                y: topOffset,
              },
              {
                x: TRIGGER_OFFSET.left + ACTION_STEP.left - STEP * 2,
                y: STEP + ACTION_STEP.top * index,
              },
              lineDirection,
            )}
            {renderAction(actionGroup, index, action, index * ACTION_STEP.top, ACTION_OFFSET.left)}
          </div>
        ))}
        {renderLine(
          {
            x: leftOffset,
            y: topOffset,
          },
          {
            x: TRIGGER_OFFSET.left + ACTION_STEP.left - STEP * 2,
            y: STEP + ACTION_STEP.top * (actionGroup.actions?.length || 0),
          },
          lineDirection,
        )}
        {renderIfRule(
          {
            x: ruleLeftOffset,
            y: ruleTopOffset,
          },
          rule,
        )}
        <Box position="relative" top={topOffset} left={leftOffset} className={classes.entryDot} />
        {renderAddPlaceholder((actionGroup.actions?.length || 0) * ACTION_STEP.top, ACTION_OFFSET.left, actionGroup.id)}
      </Box>
    ),
    [classes.entryDot, renderAction, renderLine, renderIfRule, renderAddPlaceholder],
  );

  const canvasHeight = height - topCanvasOffset;
  const canvasWidth = width - 216;

  const triggersHeight =
    triggers?.map(trigger =>
      trigger.status === 'inactive'
        ? TRIGGER_OFFSET.top + STEP * 5
        : ACTION_OFFSET.top +
          (trigger.newActions ? (trigger.newActions.actions?.length ?? 0) + 1 : 0) * ACTION_STEP.top +
          (trigger.updateActions ? (trigger.updateActions.actions?.length ?? 0) + 1 : 0) * ACTION_STEP.top +
          (trigger.deleteActions ? (trigger.deleteActions.actions?.length ?? 0) + 1 : 0) * ACTION_STEP.top,
    ) || [];
  const totalHeight = triggersHeight.reduce((prevHeight, currentHeight) => currentHeight + prevHeight, 0) || 0;

  const totalWidth = Math.max(
    ...(triggers?.map(trigger =>
      trigger.status === 'inactive'
        ? TRIGGER_OFFSET.left + STEP * 5
        : Math.max(
            ACTION_OFFSET.left + ((trigger ? getNestingDepth(trigger.newActions?.actions) : 0) + 1) * ACTION_STEP.left,
            ACTION_OFFSET.left +
              ((trigger ? getNestingDepth(trigger.updateActions?.actions) : 0) + 1) * ACTION_STEP.left,
            ACTION_OFFSET.left +
              ((trigger ? getNestingDepth(trigger.deleteActions?.actions) : 0) + 1) * ACTION_STEP.left,
          ),
    ) || [0]),
  );

  return (
    <Box height={canvasHeight} width={canvasWidth} overflow="auto">
      <div ref={ref => setTopCanvasOffset(ref?.offsetTop ?? 0)} />

      <Box
        className={classes.container}
        height={Math.max(totalHeight + 10.5 * STEP, canvasHeight)}
        width={Math.max(totalWidth, width - 216)}
      >
        <Box className={classes.imageContainer} />
        {error && <Box className={classes.errorContainer} />}

        {!triggers?.length ? (
          <InfoSection emoji="👈">
            {error && (
              <Typography variant="h3" color="error">
                {formatMessage({ id: 'settings.workflow.add_trigger.wrong' })}
              </Typography>
            )}
            <Typography variant="h3">{formatMessage({ id: 'settings.workflow.add_trigger' })}</Typography>
          </InfoSection>
        ) : (
          <>
            <Box position="absolute" top={STEP / 2} left={TRIGGER_OFFSET.left}>
              <Typography className={classes.title}>{formatMessage({ id: 'settings.workflow.triggers' })}</Typography>
            </Box>
            <Box position="absolute" top={STEP / 2} left={ACTION_OFFSET.left}>
              <Typography className={classes.title}>{formatMessage({ id: 'settings.workflow.actions' })}</Typography>
            </Box>

            {triggers.map((trigger, index) => (
              <Box width="100%" position="relative" height={triggersHeight[index] || 0} key={index}>
                <Box position="absolute" {...TRIGGER_OFFSET}>
                  <Box className={classes.triggerNo}>
                    <Typography className={classes.title}>{index + 1}</Typography>
                  </Box>
                  <TriggerItem
                    icon={trigger.icon}
                    title={trigger.title}
                    state={DndItemState.DROPPED}
                    status={trigger.status}
                    conditions={trigger.conditions}
                    conditionAmount={trigger.conditionAmount}
                    onStatusChange={() => {
                      handleToggleTriggerStatus(index);
                    }}
                    onDelete={() => {
                      handleShowConfirmModal('trigger', () => handleRemoveTrigger(index));
                    }}
                    onShowConditions={() => {
                      handleShowTriggerConditions(index);
                    }}
                  />
                </Box>

                {trigger.status !== 'inactive' && (
                  <>
                    <Box height={ACTION_OFFSET.top} />

                    {/** Render new actions */}
                    {trigger.newActions &&
                      renderActionGroup(
                        trigger.newActions,
                        TRIGGER_OFFSET.left + 5 * STEP,
                        TRIGGER_OFFSET.top + 2.5 * STEP - ACTION_OFFSET.top,
                        formatMessage({ id: 'settings.workflow.new' }),
                        TRIGGER_OFFSET.left + 5 * STEP + 12,
                        TRIGGER_OFFSET.top + 2.5 * STEP - 12 - ACTION_OFFSET.top,
                      )}

                    {/** Render delete actions */}
                    {trigger.deleteActions &&
                      renderActionGroup(
                        trigger.deleteActions,
                        TRIGGER_OFFSET.left + 3.5 * STEP,
                        3.5 * STEP -
                          (trigger.newActions ? (trigger.newActions.actions?.length ?? 0) + 1 : 0) * ACTION_STEP.top,
                        formatMessage({ id: 'settings.workflow.delete' }),
                        TRIGGER_OFFSET.left + 2.5 * STEP,
                        -12,
                        'vertical',
                      )}

                    {/** Render update actions */}
                    {trigger.updateActions &&
                      renderActionGroup(
                        trigger.updateActions,
                        TRIGGER_OFFSET.left + 1.5 * STEP,
                        3.5 * STEP -
                          (trigger.newActions ? (trigger.newActions.actions?.length ?? 0) + 1 : 0) * ACTION_STEP.top -
                          (trigger.deleteActions ? (trigger.deleteActions.actions?.length ?? 0) + 1 : 0) *
                            ACTION_STEP.top,
                        formatMessage({ id: 'settings.workflow.update' }),
                        TRIGGER_OFFSET.left + 0.5 * STEP,
                        -12,
                        'vertical',
                      )}
                  </>
                )}
              </Box>
            ))}
          </>
        )}

        <Box position="absolute" top={2.5 * STEP + totalHeight} left={1.5 * STEP}>
          <DropablePlaceholder
            type={WorkflowItemType.TRIGGER}
            onDrop={item => onAddItem({ item, type: WorkflowItemType.TRIGGER })}
            hidePlaceholder={!triggers?.length}
          />
        </Box>
      </Box>

      {/** Show confirm dialog */}
      {confirmModal}

      {/** Show Trigger conditions dialog */}
      <TriggerConditions
        data={triggerCondition !== null ? triggers?.[triggerCondition]?.conditions : []}
        conditionAmount={triggerCondition !== null ? triggers?.[triggerCondition]?.conditionAmount || 0 : 0}
        isOpened={triggerCondition !== null}
        activeTab={conditionTab}
        onSubmit={handleUpdateTriggerConditions}
        onTabChange={tab => setConditionTab(tab)}
        onClose={() => handleShowTriggerConditions(null)}
        conditionsTypes={generalConditionsTypes}
      />
    </Box>
  );
};
