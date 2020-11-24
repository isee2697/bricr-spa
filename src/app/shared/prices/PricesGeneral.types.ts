import { LastUpdatedProfile } from 'api/types';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

export type PriceType = 'Rent' | 'Sale';

export type PricesGeneralProps = ProjectDetailsProps & {
  types: PriceType[];
  dateUpdated: string | null | undefined;
  updatedBy: LastUpdatedProfile | null | undefined;
  onSetPrice: (values: { prices: PriceType[] }) => Promise<undefined | { error: boolean }>;
};
