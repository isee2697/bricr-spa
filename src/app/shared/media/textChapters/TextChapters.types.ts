import { Node } from 'slate';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { Maybe, TextChapter } from 'api/types';

export type TextChaptersProps = {
  options: RadioDataType[];
  onAdd: VoidFunction;
  onSave: (values: Chapter) => Promise<undefined | { error: boolean }>;
  chapters: Chapter[];
  newChapterId?: string;
  onAddCustomType: () => void;
};

export type TextChaptersContainerProps = {
  chapters?: Maybe<TextChapter[]>;
  onAddCustomType: () => void;
};

export type Chapter = TextChapter & {
  chapter: Node[];
};
