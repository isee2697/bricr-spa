import { PriceType } from '../Prices.types';

export type SetPricesModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  initialValues: PriceType[];
  onSubmit: (body: { prices: PriceType[] }) => Promise<undefined | { error: boolean }>;
};
