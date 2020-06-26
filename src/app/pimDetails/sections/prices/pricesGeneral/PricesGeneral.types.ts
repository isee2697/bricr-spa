import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { SetPriceForm } from 'app/pimDetails/sections/prices/setPricesModal/SetPricesModal.types';
import { Profile, RentInformations, SaleInformations } from 'api/types';

export type PriceType = 'Rent' | 'Sale';

export type PricesGeneralProps = PricesGeneralContainerProps & {
  onSave: (values: SetPriceForm) => Promise<undefined | { error: boolean }>;
};

export type PricesGeneralContainerProps = PimDetailsSectionProps & {
  rent?: RentInformations;
  sale?: SaleInformations;
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
};
