import { PimDetailsSectionProps } from '../../../PimDetails.types';
import { Floor, FloorType, PimServices, Space } from 'api/types';
import { PimSummary } from '../Summary.types';

export type SummaryInsideContainerProps = PimDetailsSectionProps & {
  summary: PimSummary;
};

export type PimInsideFloor = {
  id: string;
  floorType: FloorType;
  level: number;
  spaces?: Space[];
};

export type PimSummaryInside = {
  address: string;
  image?: string;
  groundFloors?: PimInsideFloor[];
  floors?: PimInsideFloor[];
};

export type SummaryInsideProps = PimDetailsSectionProps & {
  summary: PimSummary;
};
