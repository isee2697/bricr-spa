import { CrmStatus, Profile } from 'api/types';
import { QuestionairesItemStep } from '../questionaireItemStepper/QuestionairesItemStepper.types';

export type QuestionairesItemProps = {
  item: QuestionairesItemType;
};

export type QuestionairesItemType = {
  owners: Profile[];
  steps: QuestionairesItemStep[];
  type: string;
  version?: string;
  status: CrmStatus;
};
