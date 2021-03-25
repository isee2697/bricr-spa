import { Sales } from 'api/types';

export type DmsSalesProps = {
  sales: Sales[];
  isLoading: boolean;
  type: string;
};

export type DmsSalesContainerProps = {
  type: string;
};
