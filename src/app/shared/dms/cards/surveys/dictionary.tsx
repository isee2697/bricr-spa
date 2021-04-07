import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { SurveyItemStatus } from '../../cardItems/surveyItem/SurveyItem.types';

export const SurveyTabs: ActionTab[] = Object.keys(SurveyItemStatus).map(status => ({
  value: status,
  label: `dms.surveys.tab.${status}`,
  hasBadge: status === SurveyItemStatus.ActionRequired,
}));
