import { Profile, Task } from 'api/types';

export type TaskDetailsBoardsActionsProps = {
  task: Task;
  user: Profile;
  members: Pick<Profile, 'id' | 'firstName' | 'lastName'>[];
  onUpdateTask: (taskId: string, task: Partial<Task>) => void;
};
