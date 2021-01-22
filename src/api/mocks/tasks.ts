import { Task, TaskLabel, TaskPriority, TaskStatus } from 'api/types';

export const TASKS: Task[] = [
  {
    id: '0001',
    assignee: '0001',
    label: TaskLabel.Business,
    priority: TaskPriority.High,
    status: TaskStatus.ToDo,
    taskIndex: 1,
    startDate: new Date().toISOString(),
    deadline: new Date().toISOString(),
    title: 'Test task 1',
  },
  {
    id: '0002',
    assignee: '0002',
    label: TaskLabel.Business,
    priority: TaskPriority.High,
    status: TaskStatus.ToDo,
    taskIndex: 2,
    startDate: new Date().toISOString(),
    deadline: new Date().toISOString(),
    title: 'Test task 2',
  },
];
