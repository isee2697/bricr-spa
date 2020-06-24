import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Floor } from 'api/types';

export type FloorProps = {
  floor: Floor;
  count?: number;
  onSave(values: { description: string }): Promise<undefined | { error: boolean }>;
};

export type FloorContainerProps = PimDetailsSectionProps & {
  floor: Floor;
  count?: number;
};
