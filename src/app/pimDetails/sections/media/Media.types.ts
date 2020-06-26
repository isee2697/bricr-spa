import { PimMedia } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type MediaProps = PimDetailsSectionProps & {
  media: PimMedia;
  onDescriptionUpdate(values: unknown): Promise<undefined | { error: boolean }>;
  description: string;
};
