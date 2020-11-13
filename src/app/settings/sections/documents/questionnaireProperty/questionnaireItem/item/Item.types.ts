import { QuestionnaireGroupItem } from '../QuestionnaireItem.types';
import { PromiseFunction } from 'app/shared/types';

export type QuestionnaireItemSubItemProps = {
  index: number;
  item: QuestionnaireGroupItem;
  onSave: PromiseFunction<QuestionnaireGroupItem>;
};
