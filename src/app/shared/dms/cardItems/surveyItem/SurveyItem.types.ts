import { Profile } from 'api/types';
import { SurveyStep } from '../surveyItemStepper/SurveyItemStepper.types';

export type SurveyItemProps = {
  item: SurveyItemType;
};

export type SurveyItemType = {
  owners: Profile[];
  steps: SurveyStep[];
  status: SurveyItemStatus;
};

export enum SurveyItemStatus {
  ActionRequired = 'ActionRequired',
  Active = 'Active',
  Archive = 'Archive',
}
