import { Profile, Task, TaskStatus } from 'api/types';

export type TaskDetailsBoardsProps = {
  task: Task;
  user: Profile;
  members: Pick<Profile, 'id' | 'firstName' | 'lastName'>[];
  onUpdateTask: (taskId: string, task: Partial<Task>) => void;
  onAddNewSubtask: (taskId: string, title: string) => void;
  onUpdateSubtaskStatus: (taskId: string, subtaskId: string, status: TaskStatus) => void;
  onDeleteSubtask: (taskId: string, subtaskId: string) => void;
};
