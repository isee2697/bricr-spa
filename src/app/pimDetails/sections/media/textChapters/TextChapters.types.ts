import { Node } from 'slate';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { Maybe, TextChapter } from 'api/types';

export type TextChaptersProps = {
  options: RadioDataType[];
  onAdd: VoidFunction;
  onSave: (values: Chapter) => Promise<undefined | { error: boolean }>;
  chapters: Chapter[];
  newChapterId: string | null;
};

export type TextChaptersContainerProps = {
  chapters?: Maybe<TextChapter[]>;
};

export type Chapter = TextChapter & {
  chapter: Node[];
};
