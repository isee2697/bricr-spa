import { ListPimsQuery } from 'api/types';

export type DmsPimsProps = {
  pims: ListPimsQuery;
  type: string;
  isLoading: boolean;
};

export type DmsPimsContainerProps = {
  type: string;
};
