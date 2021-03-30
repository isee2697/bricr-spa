import { Questionaire } from 'api/types';

export type DmsTemplatesItemProps = {
  template: Questionaire;
  onStatusChange: (status: boolean) => void;
  category: string;
};
