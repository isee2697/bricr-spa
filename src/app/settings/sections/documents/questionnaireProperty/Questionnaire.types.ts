import { PromiseFunction } from 'app/shared/types';

import { AddQuestionnaireGroupBody } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal.types';

export type QuestionnaireProps = {
  groups: QuestionnaireGroup[];
  onAddQuestionnaireGroup: PromiseFunction<AddQuestionnaireGroupBody>;
};

export type QuestionnaireGroup = {
  id: string;
  name: string;
};
