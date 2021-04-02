import { NylasAccountItem } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

import { AddNewAccountBody } from './addNewAccountModal/AddNewAccountModal.types';

export type CalendarSettingsProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
  onAddNewAccount: PromiseFunction<AddNewAccountBody>;
};

export type CalendarSettingsContainerProps = {
  onSidebarClose: VoidFunction;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  accounts: NylasAccountItem[];
};
