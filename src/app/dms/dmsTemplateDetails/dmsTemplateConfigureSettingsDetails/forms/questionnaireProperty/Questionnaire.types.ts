import { Groups } from 'api/types';
import { PromiseFunction } from 'app/shared/types';
import { TemplateItem } from '../../DmsTemplateConfigureSettingsDetails.types';

import { AddQuestionnaireGroupBody } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal.types';

export type QuestionnaireContainerProps = {
  template: TemplateItem;
};

export type QuestionnaireProps = {
  isLoading: boolean;
  template: TemplateItem;
  groups: Groups[];
  onAddQuestionnaireGroup: PromiseFunction<AddQuestionnaireGroupBody>;
};

export type QuestionnaireGroup = {
  id: string;
  name: string;
};
