import { Email } from '../Email.types';

export type EmailTableProps = {
  emails: Email[];
  checkedItems: string[];
  onCheckItem: (key: string) => void;
  onCheckAllItems: () => void;
};
