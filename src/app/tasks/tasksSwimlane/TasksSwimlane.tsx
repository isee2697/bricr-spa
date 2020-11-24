import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Grid } from 'ui/atoms';
import { Task, TaskStatus } from 'api/types';

import { TasksSwimlaneColumn } from './TasksSwimlaneColumn';
import { useStyles } from './TasksSwimlane.styles';
import { GroupTaskItem, GroupTasks, TasksSwimlaneProps } from './TasksSwimlane.types';

export const TasksSwimlane = ({
  tab,
  tasks: tasksList = [],
  tasksSummaryByStatus: { todo: todoCount, inProgress: inProgressCount, blocked: blockedCount, done: doneCount },
  onUpdateTaskStatus,
}: TasksSwimlaneProps) => {
  const groupTasks = (tasks: GroupTaskItem[]): GroupTasks => {
    return {
      [TaskStatus.ToDo]: tasks.filter((task: Task) => task.status === TaskStatus.ToDo),
      [TaskStatus.InProgress]: tasks.filter((task: Task) => task.status === TaskStatus.InProgress),
      [TaskStatus.Blocked]: tasks.filter((task: Task) => task.status === TaskStatus.Blocked),
      [TaskStatus.Done]: tasks.filter((task: Task) => task.status === TaskStatus.Done),
    };
  };

  const classes = useStyles();
  const [tasks, setTasks] = useState<GroupTasks>(groupTasks(tasksList));

  const handleUpdateTaskStatus = (id: string, status: TaskStatus) => {
    const taskItem: Task = tasksList.find(task => task.id === id) as Task;
    setTasks(
      groupTasks([
        ...tasksList.filter(task => task.id !== id),
        {
          ...taskItem,
          status,
        },
      ]),
    );
    onUpdateTaskStatus(id, status);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={3}>
          <TasksSwimlaneColumn
            tab={tab}
            columnType={TaskStatus.ToDo}
            tasks={tasks[TaskStatus.ToDo]}
            count={todoCount}
            onUpdateTaskStatus={handleUpdateTaskStatus}
          />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn
            tab={tab}
            columnType={TaskStatus.InProgress}
            tasks={tasks[TaskStatus.InProgress]}
            count={inProgressCount}
            onUpdateTaskStatus={handleUpdateTaskStatus}
          />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn
            tab={tab}
            columnType={TaskStatus.Blocked}
            tasks={tasks[TaskStatus.Blocked]}
            count={blockedCount}
            onUpdateTaskStatus={handleUpdateTaskStatus}
          />
        </Grid>
        <Grid item xs={3}>
          <TasksSwimlaneColumn
            tab={tab}
            columnType={TaskStatus.Done}
            tasks={tasks[TaskStatus.Done]}
            count={doneCount}
            onUpdateTaskStatus={handleUpdateTaskStatus}
          />
        </Grid>
      </Grid>
    </DndProvider>
  );
};
