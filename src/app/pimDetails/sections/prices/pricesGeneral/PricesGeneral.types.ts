import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { SetPriceForm } from 'app/pimDetails/sections/prices/setPricesModal/SetPricesModal.types';
import { RentInformations, SaleInformations } from 'api/types';

export type PriceType = 'Rent' | 'Sale';

export type PricesGeneralProps = PimDetailsSectionProps & {
  onSave: (values: SetPriceForm) => Promise<undefined | { error: boolean }>;
  rent?: RentInformations;
  sale?: SaleInformations;
};

export type PricesGeneralContainerProps = PimDetailsSectionProps & {
  rent?: RentInformations;
  sale?: SaleInformations;
};
