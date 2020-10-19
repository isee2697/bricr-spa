import { DateTime } from 'luxon';

export type SidebarMenuProps = {
  isVisible: boolean;
  onHide: () => void;
  currentDate: DateTime;
  onChangeDate: (date?: DateTime | null) => void;
};
