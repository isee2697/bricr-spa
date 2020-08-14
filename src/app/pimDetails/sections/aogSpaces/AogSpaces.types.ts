import { PimDetailsSectionProps } from '../../PimDetails.types';
import { AogSpace, AogSpaceType, PimAogSpacesQuery, PimInside } from '../../../../api/types';
export type AogSpacesContainerProps = PimDetailsSectionProps & {
  type: AogSpaceType;
};

export type AogSpacesDataProps = {
  data: AogSpace[];
};

export type AogSpacesProps = AogSpacesContainerProps & {
  data: PimInside;
};
