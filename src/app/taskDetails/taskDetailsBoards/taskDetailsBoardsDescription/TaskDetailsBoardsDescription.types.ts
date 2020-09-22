import { Task } from 'api/types';
import { Chapter } from 'app/shared/media/textChapters/TextChapters.types';

export type TaskDetailsBoardsDescriptionProps = {
  task: Task;
  onSave: (values: Chapter) => Promise<undefined | { error: boolean }>;
};
