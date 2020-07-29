import { PriceType } from 'app/pimDetails/sections/prices/pricesGeneral/PricesGeneral.types';
import { RentInformations, SaleInformations } from 'api/types';

export type PriceProps = {
  types: PriceType[];
};

export type PriceForm = {
  rent: RentInformations;
  sale: SaleInformations;
  description?: string;
};

export type PropertyTypeProps = {
  isInitExpanded: boolean;
};
