import { Node } from 'slate';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type TextChaptersProps = {
  options: RadioDataType[];
  onAdd: VoidFunction;
  onSave: () => Promise<undefined | { error: boolean }>;
  chapters: Chapter[];
};

type Chapter = {
  name: string;
  chapter: Node[];
};
