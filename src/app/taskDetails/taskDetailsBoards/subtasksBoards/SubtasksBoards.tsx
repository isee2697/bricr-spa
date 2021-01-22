import React, { useState } from 'react';

import { Box, Card, CardContent, IconButton, Tab, Tabs, Typography, Collapse, Checkbox } from 'ui/atoms';
import { TaskDetailsBoardsResultTab } from '../taskDetailsBoardsResult/TaskDetailsBoardsResult.types';
import { useLocale, useModalDispatch } from 'hooks';
import { AddIcon, ArrowDownIcon, ArrowUpIcon, DeleteIcon } from 'ui/atoms/icons';
import { AddSubtaskModal } from '../addSubtaskModal/AddSubtaskModal';
import { AddSubtaskBody } from '../addSubtaskModal/AddSubtaskModal.types';
import { TaskStatus, Subtask } from 'api/types';

import { useStyles } from './SubtasksBoards.styles';
import { SubtasksBoardsProps, SubtasksBoardsTab } from './SubtasksBoards.types';

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

  const handleAddSubtask = async (values: AddSubtaskBody) => {
    onAddNewSubtask(task.id, values.title);

    close('add-subtask');

    return undefined;
  };

  return (
    <>
      <Card className={classes.root}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Tabs
            value={activeTab}
            onChange={(e, value) => setActiveTab(value)}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              value={TaskDetailsBoardsResultTab.ResultIntern}
              label={formatMessage({ id: 'tasks.details.subtasks' })}
            />
          </Tabs>
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
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box ml={-1} display="flex" alignItems="center">
                      <Checkbox
                        color="primary"
                        checked={false}
                        onChange={() => onUpdateSubtaskStatus(task.id, subtask.id, TaskStatus.Done)}
                      />
                      <Typography variant="h5">{subtask.title}</Typography>
                    </Box>
                    <IconButton variant="rounded" size="small" onClick={() => onDeleteSubtask(task.id, subtask.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
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
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box ml={-1} display="flex" alignItems="center">
                      <Checkbox
                        color="primary"
                        checked
                        onChange={() => onUpdateSubtaskStatus(task.id, subtask.id, TaskStatus.ToDo)}
                      />
                      <Typography variant="h5" className={classes.completedSubtask}>
                        {subtask.title}
                      </Typography>
                    </Box>
                    <IconButton variant="rounded" size="small" onClick={() => onDeleteSubtask(task.id, subtask.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
            </Collapse>
          </Box>
        </CardContent>
      </Card>
      <AddSubtaskModal onAddSubtask={handleAddSubtask} />
    </>
  );
};
