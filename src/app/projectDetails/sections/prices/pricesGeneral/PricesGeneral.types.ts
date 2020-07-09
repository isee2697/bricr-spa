export type PriceType = 'Rent' | 'Sale';

export type PricesGeneralProps = {
  types: PriceType[];
  onSetPrice: (values: { prices: PriceType[] }) => Promise<undefined | { error: boolean }>;
};
