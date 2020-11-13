import { ListPim } from 'api/types';

export type LinkPimObjectModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: VoidFunction;
};

export type PimListItem = Pick<ListPim, 'id' | 'street' | 'houseNumber' | 'city' | 'postalCode'>;
