import { useTheme } from '@material-ui/core/styles';
import React, { useState, useLayoutEffect, useCallback, useRef, ReactNode } from 'react';
import { useDrop } from 'react-dnd';

import { useLocale } from 'hooks';
import { Box, Typography } from 'ui/atoms';
import { InfoSection, ConfirmModal } from 'ui/molecules';
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { DropablePlaceholder, TriggerItem, ActionItem, DndItemState } from '../workflowItems';
import {
  DragObjectType,
  DropablePlaceholderCollectProps,
} from '../workflowItems/dropablePlaceholder/DropablePlaceholder.types';
import {
  Trigger,
  WorkflowActionGroupWithActions,
  WorkflowItemStatus,
  WorkflowItemType,
  WorkflowTriggerWithActionGroups,
} from '../Workflow.types';
import { WorkflowAction, WorkflowActionGroupType, WorkflowActionType, WorkflowTrigger } from 'api/types';
import { TriggerConditions } from '../workflowConditions/triggerConditions/TriggerConditions';
import { TriggerConditionValuesType } from '../workflowConditions/triggerConditions/TriggerConditions.types';

import { WorkflowCanvasProps, Point } from './WorkflowCanvas.types';
import { useStyles } from './WorkflowCanvas.styles';
import { ActionIcons, generalConditionsTypes, TriggerIcons } from './dictionaries';

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

export const WorkflowCanvas = ({
  triggers,
  onRemoveTrigger,
  onRemoveAction,
  onAddWorkflowTrigger,
  onAddWorkflowAction,
  onAddWorkflowActionGroupAndAction,
  onUpdateAction,
  onUpdateTrigger,
}: WorkflowCanvasProps) => {
  const { formatMessage } = useLocale();
  const theme = useTheme();
  const classes = useStyles();
  const [triggerCondition, setTriggerCondition] = useState<WorkflowTrigger | null>(null);
  const [conditionTab, setConditionTab] = useState<number>(0);

  const [confirmModal, setConfirmModal] = useState<ReactNode | null>(null);

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
  const error = isDragAction && !triggers.length;

  const maxWidth = useRef(0);

  const handleShowTriggerConditions = (trigger: WorkflowTrigger | null) => {
    setTriggerCondition(trigger);
  };

  const handleUpdateTriggerConditions = (conditions: TriggerConditionValuesType) => {
    if (triggerCondition) {
      onUpdateTrigger(triggerCondition.id, { conditions: JSON.stringify(conditions) });
    }
    handleShowTriggerConditions(null);
  };

  const handleToggleTriggerStatus = (trigger: WorkflowTriggerWithActionGroups) => {
    onUpdateTrigger(trigger.id, {
      status: !trigger.status,
    });
  };

  const handleToggleActionStatus = useCallback(
    (action: WorkflowAction) => {
      onUpdateAction(action.id, { status: !action.status });
    },
    [onUpdateAction],
  );

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

  const renderAddPlaceholder = useCallback(
    (
      topOffset: number,
      leftOffset: number,
      actionTriggerId: string,
      showPlaceholder = true,
      actionGroupId?: string,
      actionGroupType?: WorkflowActionGroupType,
    ) => {
      if (leftOffset > maxWidth.current) {
        maxWidth.current = leftOffset;
      }

      return (
        <Box position="absolute" top={topOffset} left={leftOffset}>
          <DropablePlaceholder
            type={WorkflowItemType.ACTION}
            onDrop={item => {
              if (actionGroupId) {
                onAddWorkflowAction(actionTriggerId, actionGroupId, item.id as WorkflowActionType);
              } else if (actionGroupType) {
                onAddWorkflowActionGroupAndAction(actionTriggerId, actionGroupType, item.id as WorkflowActionType);
              }
            }}
            disabled={!showPlaceholder}
          />
        </Box>
      );
    },
    [onAddWorkflowAction, onAddWorkflowActionGroupAndAction],
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

  const renderAction = (
    index: number,
    actionGroup: WorkflowActionGroupWithActions,
    topOffset: number,
    leftOffset: number,
    showPlaceholder = true,
  ): ReactNode => {
    const inactiveActionIndex = actionGroup.actions.findIndex(action => !action.status);

    const filteredActionGroupActions =
      inactiveActionIndex >= 0 ? actionGroup.actions.slice(0, inactiveActionIndex + 1) : actionGroup.actions;

    return (
      <>
        {filteredActionGroupActions.map((action, actionIndex) => (
          <React.Fragment key={actionIndex}>
            <Box position="absolute" top={topOffset} left={leftOffset + ACTION_STEP.left * actionIndex}>
              <ActionItem
                icon={ActionIcons.find(icon => icon.type === action.type)?.icon}
                title={formatMessage({ id: `dictionaries.workflow_action_type.${action.type}` })}
                state={DndItemState.DROPPED}
                onStatusChange={() => {
                  handleToggleActionStatus(action);
                }}
                onDelete={() => {
                  handleShowConfirmModal('action', () => onRemoveAction(action.id));
                }}
                status={action.status}
                disabled={!showPlaceholder}
              />
            </Box>
            {(inactiveActionIndex < 0 || actionIndex < filteredActionGroupActions.length - 1) &&
              renderLine(
                {
                  x: leftOffset + ACTION_STEP.left * actionIndex + ACTION_STEP.left - STEP * 2,
                  y: topOffset + STEP,
                },
                { x: leftOffset + ACTION_STEP.left * actionIndex + ACTION_STEP.left, y: topOffset + STEP },
              )}
          </React.Fragment>
        ))}
        {inactiveActionIndex < 0 &&
          renderAddPlaceholder(
            topOffset,
            leftOffset + ACTION_STEP.left * actionGroup.actions.length,
            actionGroup.workflowTriggerId,
            showPlaceholder,
            actionGroup.id,
          )}
      </>
    );
  };

  const renderActionGroup = (
    actionGroups: WorkflowActionGroupWithActions[],
    leftOffset: number,
    topOffset: number,
    rule: string,
    ruleLeftOffset: number,
    ruleTopOffset: number,
    triggerId: string,
    groupType: WorkflowActionGroupType,
    showPlaceholder: boolean,
    lineDirection = 'horizontal',
  ): ReactNode => {
    return (
      <Box position="relative" height={((actionGroups.length ?? 0) + 1) * ACTION_STEP.top}>
        {actionGroups.map((actionGroup, index) => (
          <div key={`${actionGroup.id}_${index}`}>
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
            {renderAction(index, actionGroup, index * ACTION_STEP.top, ACTION_OFFSET.left, showPlaceholder)}
          </div>
        ))}
        {renderLine(
          {
            x: leftOffset,
            y: topOffset,
          },
          {
            x: TRIGGER_OFFSET.left + ACTION_STEP.left - STEP * 2,
            y: STEP + ACTION_STEP.top * (actionGroups.length || 0),
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
        {renderAddPlaceholder(
          (actionGroups.length || 0) * ACTION_STEP.top,
          ACTION_OFFSET.left,
          triggerId,
          showPlaceholder,
          undefined,
          groupType,
        )}
      </Box>
    );
  };

  const canvasHeight = height - topCanvasOffset;
  const canvasWidth = width - 216;

  const triggersHeight =
    triggers.map(trigger => {
      const newActionGroups = trigger.actionGroups.filter(group => group.type === WorkflowActionGroupType.New);
      const updateActionGroups = trigger.actionGroups.filter(group => group.type === WorkflowActionGroupType.Update);
      const deleteActionGroups = trigger.actionGroups.filter(group => group.type === WorkflowActionGroupType.Delete);

      return (
        ACTION_OFFSET.top +
        (newActionGroups ? newActionGroups.length + 1 : 0) * ACTION_STEP.top +
        (updateActionGroups ? updateActionGroups.length + 1 : 0) * ACTION_STEP.top +
        (deleteActionGroups ? deleteActionGroups.length + 1 : 0) * ACTION_STEP.top
      );
    }) || [];

  const totalHeight = triggersHeight.reduce((prevHeight, currentHeight) => currentHeight + prevHeight, 0) || 0;

  const totalWidth = Math.max(
    ...(triggers.map(trigger => {
      const newActionGroups = trigger.actionGroups.filter(group => group.type === WorkflowActionGroupType.New);
      const updateActionGroups = trigger.actionGroups.filter(group => group.type === WorkflowActionGroupType.Update);
      const deleteActionGroups = trigger.actionGroups.filter(group => group.type === WorkflowActionGroupType.Delete);

      return Math.max(
        ACTION_OFFSET.left + ((newActionGroups.length ?? 0) + 1) * ACTION_STEP.left,
        ACTION_OFFSET.left + ((updateActionGroups.length ?? 0) + 1) * ACTION_STEP.left,
        ACTION_OFFSET.left + ((deleteActionGroups.length ?? 0) + 1) * ACTION_STEP.left,
      );
    }) || [0]),
  );

  const renderTriggerActionGroups = (trigger: WorkflowTriggerWithActionGroups, triggerStatus = true) => {
    const newActionGroups = trigger.actionGroups.filter(group => group.type === WorkflowActionGroupType.New);
    const updateActionGroups = trigger.actionGroups.filter(group => group.type === WorkflowActionGroupType.Update);
    const deleteActionGroups = trigger.actionGroups.filter(group => group.type === WorkflowActionGroupType.Delete);

    return (
      <>
        {/** Render new actions */}
        {newActionGroups &&
          renderActionGroup(
            newActionGroups,
            TRIGGER_OFFSET.left + 5 * STEP,
            TRIGGER_OFFSET.top + 2.5 * STEP - ACTION_OFFSET.top,
            formatMessage({ id: 'settings.workflow.new' }),
            TRIGGER_OFFSET.left + 5 * STEP + 12,
            TRIGGER_OFFSET.top + 2.5 * STEP - 12 - ACTION_OFFSET.top,
            trigger.id,
            WorkflowActionGroupType.New,
            triggerStatus,
          )}

        {/** Render delete actions */}
        {deleteActionGroups &&
          renderActionGroup(
            deleteActionGroups,
            TRIGGER_OFFSET.left + 3.5 * STEP,
            3.5 * STEP - (newActionGroups ? (newActionGroups.length ?? 0) + 1 : 0) * ACTION_STEP.top,
            formatMessage({ id: 'settings.workflow.delete' }),
            TRIGGER_OFFSET.left + 2.5 * STEP,
            -12,
            trigger.id,
            WorkflowActionGroupType.Delete,
            triggerStatus,
            'vertical',
          )}

        {/** Render update actions */}
        {updateActionGroups &&
          renderActionGroup(
            updateActionGroups,
            TRIGGER_OFFSET.left + 1.5 * STEP,
            3.5 * STEP -
              (newActionGroups ? (newActionGroups.length ?? 0) + 1 : 0) * ACTION_STEP.top -
              (deleteActionGroups ? (deleteActionGroups.length ?? 0) + 1 : 0) * ACTION_STEP.top,
            formatMessage({ id: 'settings.workflow.update' }),
            TRIGGER_OFFSET.left + 0.5 * STEP,
            -12,
            trigger.id,
            WorkflowActionGroupType.Update,
            triggerStatus,
            'vertical',
          )}
      </>
    );
  };

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

        {!triggers.length ? (
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
                    icon={TriggerIcons.find(icon => icon.type === trigger.type)?.icon}
                    title={formatMessage({ id: `dictionaries.workflow_trigger.${trigger.type}` })}
                    state={DndItemState.DROPPED}
                    status={trigger.status ? WorkflowItemStatus.Active : WorkflowItemStatus.Inactive}
                    onStatusChange={() => {
                      handleToggleTriggerStatus(trigger);
                    }}
                    onDelete={() => {
                      handleShowConfirmModal('trigger', () => onRemoveTrigger(trigger.id));
                    }}
                    onShowConditions={() => {
                      handleShowTriggerConditions(trigger);
                    }}
                    conditions={trigger.conditions ? JSON.parse(trigger.conditions) : {}}
                  />
                </Box>

                <Box height={ACTION_OFFSET.top} />

                {renderTriggerActionGroups(trigger, trigger.status)}
              </Box>
            ))}
          </>
        )}

        <Box position="absolute" top={2.5 * STEP + totalHeight} left={1.5 * STEP}>
          <DropablePlaceholder
            type={WorkflowItemType.TRIGGER}
            onDrop={item => onAddWorkflowTrigger((item as Trigger).id)}
            hidePlaceholder={!triggers?.length}
          />
        </Box>
      </Box>

      {/** Show confirm dialog */}
      {confirmModal}

      {/** Show Trigger conditions dialog */}
      <TriggerConditions
        data={
          triggerCondition !== null && triggerCondition.conditions ? JSON.parse(triggerCondition.conditions) || {} : {}
        }
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
