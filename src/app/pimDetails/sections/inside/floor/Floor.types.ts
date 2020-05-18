import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Floor } from 'api/types';

export type FloorProps = PimDetailsSectionProps & {
  floor: Floor;
};
