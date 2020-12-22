import { DateTime } from 'luxon';

export type SignsProps = {
  onSubmit: VoidFunction;
  signs: Sign[];
};

export type Sign = {
  id: number;
  key: string;
  description?: string;
  datePlace?: DateTime;
  datePlaced?: DateTime;
  dateSold?: DateTime;
  dateRemove?: DateTime;
};
