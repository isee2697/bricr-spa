import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { SetPriceForm } from 'app/shared/prices/setPricesModal/SetPricesModal.types';
import { LastUpdatedProfile, RentInformations, SaleInformations } from 'api/types';
import { PriceForm } from 'app/pimDetails/sections/prices/price/Price.types';

export type PriceType = 'Rent' | 'Sale';

export type PricesGeneralProps = PricesGeneralContainerProps & {
  onSetPrice: (values: SetPriceForm) => Promise<undefined | { error: boolean }>;
  onSave: (values: PriceForm) => Promise<undefined | { error: boolean }>;
  initialValues: PriceForm;
};

export type PricesGeneralContainerProps = PimDetailsSectionProps & {
  rent?: RentInformations;
  sale?: SaleInformations;
  dateUpdated?: string | null;
  updatedBy?: LastUpdatedProfile | null;
  description: string;
};
