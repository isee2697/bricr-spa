import { CrmStatus } from 'api/types';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

export const QuestionaireTabs: ActionTab[] = Object.keys(CrmStatus).map(status => ({
  value: status,
  label: `dms.questionaires.tab.${status}`,
  hasBadge: status === CrmStatus.ActionRequired,
}));
