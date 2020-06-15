import { PriceType } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneral.types';

export type SetPricesModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  initialValues: PriceType[];
  onSubmit: (values: SetPriceForm) => Promise<undefined | { error: boolean }>;
};

export type SetPriceForm = {
  prices: PriceType[];
};
