import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type FloorProps = PimDetailsSectionProps & {
  spaces: string[];
  type: string;
};
