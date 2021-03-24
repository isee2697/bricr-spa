import { ListNcp } from 'api/types';

export type DmsNcpsProps = {
  ncps: ListNcp[];
  type: string;
  isLoading: boolean;
};

export type DmsNcpsContainerProps = {
  type: string;
};
