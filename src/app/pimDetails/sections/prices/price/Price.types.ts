import { PriceType } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneral.types';
import { RentInformations, SaleInformations } from 'api/types';

export type PriceProps = {
  types: PriceType[];
};

export type PriceContainerProps = {
  types: PriceType[];
  pimId?: string;
  rent?: RentInformations;
  sale?: SaleInformations;
};

export type PriceForm = {
  rent: RentInformations;
  sale: SaleInformations;
};
