import { DmsTemplateItem } from 'app/dms/dmsTemplates/DmsTemplates.types';
import { PromiseFunction } from 'app/shared/types';

import { AddQuestionnaireGroupBody } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal.types';

export type QuestionnaireContainerProps = {
  template: DmsTemplateItem;
};

export type QuestionnaireProps = {
  template: DmsTemplateItem;
  groups: QuestionnaireGroup[];
  onAddQuestionnaireGroup: PromiseFunction<AddQuestionnaireGroupBody>;
};

export type QuestionnaireGroup = {
  id: string;
  name: string;
};
