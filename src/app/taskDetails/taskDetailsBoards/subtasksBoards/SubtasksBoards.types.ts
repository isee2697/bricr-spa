import { Task, TaskStatus } from 'api/types';

export enum SubtasksBoardsTab {
  Subtasks = 0,
}

export type SubtasksBoardsProps = {
  task: Task;
  onAddNewSubtask: (taskId: string, title: string) => void;
  onUpdateSubtaskStatus: (taskId: string, subtaskId: string, status: TaskStatus) => void;
  onDeleteSubtask: (taskId: string, subtaskId: string) => void;
};

export type SubtasksProps = {
  title: string;
  isCompleted?: boolean;
  isLoading: boolean;
  onUpdateSubtaskStatus: () => void;
  onDeleteSubtask: () => void;
};
