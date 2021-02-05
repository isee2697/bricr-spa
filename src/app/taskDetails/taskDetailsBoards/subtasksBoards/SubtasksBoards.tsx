import React, { useState } from 'react';

import { Box, Card, CardContent, Collapse, IconButton, ProgressFilling, Tab, Tabs, Typography } from 'ui/atoms';
import { TaskDetailsBoardsResultTab } from '../taskDetailsBoardsResult/TaskDetailsBoardsResult.types';
import { useLocale, useModalDispatch } from 'hooks';
import { AddIcon, ArrowDownIcon, ArrowUpIcon, DeleteIcon } from 'ui/atoms/icons';
import { AddSubtaskModal } from '../addSubtaskModal/AddSubtaskModal';
import { AddSubtaskBody } from '../addSubtaskModal/AddSubtaskModal.types';
import { Subtask, TaskStatus } from 'api/types';

import { useStyles } from './SubtasksBoards.styles';
import { SubtasksBoardsProps, SubtasksBoardsTab } from './SubtasksBoards.types';
import { SubTask as SubTaskComponent } from './SubTask';
export const SubtasksBoards = ({
  task,
  onAddNewSubtask,
  onUpdateSubtaskStatus,
  onDeleteSubtask,
}: SubtasksBoardsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(SubtasksBoardsTab.Subtasks);
  const { open, close } = useModalDispatch();
  const [showTodos, setShowTodos] = useState(true);
  const [showCompleted, setShowCompleted] = useState(true);
  const [loading, setLoading] = useState<string[]>([]);

  const handleSubTaskStatus = async (taskId: string, subtaskId: string, status: TaskStatus) => {
    setLoading(current => [...current, subtaskId]);
    await onUpdateSubtaskStatus(taskId, subtaskId, status);

    if (status === TaskStatus.Done && !showCompleted) {
      setShowCompleted(true);
    } else if (!showTodos) {
      setShowTodos(true);
    }

    setLoading(current => current.filter(id => id !== subtaskId));
  };

  const handleAddSubtask = async (values: AddSubtaskBody) => {
    await onAddNewSubtask(task.id, values.title);

    setShowTodos(true);

    close('add-subtask');

    return undefined;
  };

  return (
    <>
      <Card className={classes.root}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex">
            <Tabs
              value={activeTab}
              onChange={(e, value) => setActiveTab(value)}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab
                value={TaskDetailsBoardsResultTab.ResultIntern}
                label={formatMessage({ id: 'tasks.details.subtasks' })}
                className={classes.tab}
              />
            </Tabs>
            <Box mt={2} ml={1}>
              <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                {formatMessage({ id: 'tasks.details.subtasks.completed_percentage' }, { percentage: 33 })}
              </Typography>
              <ProgressFilling
                progress={
                  task.subTasks && task.subTasks?.length > 0
                    ? task.subTasks.filter(subtask => subtask.status === TaskStatus.Done).length / task.subTasks?.length
                    : 0
                }
              />
            </Box>
          </Box>
          <Box mr={1}>
            <IconButton
              size="small"
              variant="circle"
              color="primary"
              className={classes.addButton}
              onClick={() => open('add-subtask')}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
        <CardContent className={classes.content}>
          <Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              onClick={() => setShowTodos(!showTodos)}
            >
              <Typography variant="h4" className={classes.fontWeightBold}>
                {formatMessage({ id: 'tasks.details.subtasks.still_todo' })}
              </Typography>
              {showTodos ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </Box>
            <Collapse in={showTodos}>
              {(task.subTasks || [])
                .filter((subtask: Subtask) => subtask.status === TaskStatus.ToDo)
                .map((subtask: Subtask) => (
                  <SubTaskComponent
                    key={subtask.id}
                    isLoading={loading.includes(subtask.id)}
                    onUpdateSubtaskStatus={() => handleSubTaskStatus(task.id, subtask.id, TaskStatus.Done)}
                    onDeleteSubtask={() => onDeleteSubtask(task.id, subtask.id)}
                    title={subtask.title}
                  />
                ))}
            </Collapse>
          </Box>
          <Box mt={3}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              onClick={() => setShowCompleted(!showCompleted)}
            >
              <Typography variant="h4" className={classes.fontWeightBold}>
                {formatMessage({ id: 'tasks.details.subtasks.completed' })}
              </Typography>
              {showCompleted ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </Box>
            <Collapse in={showCompleted}>
              {(task.subTasks || [])
                .filter((subtask: Subtask) => subtask.status === TaskStatus.Done)
                .map((subtask: Subtask) => (
                  <SubTaskComponent
                    key={subtask.id}
                    isCompleted
                    isLoading={loading.includes(subtask.id)}
                    onUpdateSubtaskStatus={() => handleSubTaskStatus(task.id, subtask.id, TaskStatus.Done)}
                    onDeleteSubtask={() => onDeleteSubtask(task.id, subtask.id)}
                    title={subtask.title}
                  />
                ))}
            </Collapse>
          </Box>
        </CardContent>
      </Card>
      <AddSubtaskModal onAddSubtask={handleAddSubtask} />
    </>
  );
};
