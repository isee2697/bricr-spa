import { PimDetailsSectionProps } from '../../PimDetails.types';
import { PimMeters } from 'api/types';

export type PimMetersProps = PimDetailsSectionProps & {
  data: PimMeters;
};
