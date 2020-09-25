import { Profile, Task } from 'api/types';

export type TaskDetailsBoardsProps = {
  task: Task;
  user: Profile;
  members: Pick<Profile, 'id' | 'firstName' | 'lastName'>[];
  onUpdateTask: (taskId: string, task: Pick<Task, 'status'>) => void;
};
