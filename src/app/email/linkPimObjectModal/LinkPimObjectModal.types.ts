import { ListPim, Pim } from 'api/types';

export type LinkPimObjectModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (pims: string[]) => Promise<void>;
  pims: Pim[];
  loading: boolean;
};

export type LinkPimObjectModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (pims: string[]) => Promise<void>;
};

export type PimListItem = Pick<ListPim, 'id' | 'street' | 'houseNumber' | 'city' | 'postalCode'>;
