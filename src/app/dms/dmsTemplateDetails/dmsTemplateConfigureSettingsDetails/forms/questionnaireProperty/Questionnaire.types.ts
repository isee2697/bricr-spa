import { PromiseFunction } from 'app/shared/types';
import { TemplateItem } from '../../DmsTemplateConfigureSettingsDetails.types';

import { AddQuestionnaireGroupBody } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal.types';

export type QuestionnaireContainerProps = {
  template: TemplateItem;
};

export type QuestionnaireProps = {
  template: TemplateItem;
  groups: QuestionnaireGroup[];
  onAddQuestionnaireGroup: PromiseFunction<AddQuestionnaireGroupBody>;
};

export type QuestionnaireGroup = {
  id: string;
  name: string;
};
