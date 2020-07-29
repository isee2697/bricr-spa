import { Profile } from 'api/types';

export type PriceType = 'Rent' | 'Sale';

export type PricesGeneralProps = {
  types: PriceType[];
  dateUpdated: string | null | undefined;
  updatedBy: Profile | null | undefined;
  onSetPrice: (values: { prices: PriceType[] }) => Promise<undefined | { error: boolean }>;
};
