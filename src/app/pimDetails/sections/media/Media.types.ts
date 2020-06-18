import { PimMedia } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type MediaProps = PimDetailsSectionProps & {
  media: PimMedia;
};
