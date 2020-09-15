import { LastUpdatedProfile } from 'api/types';

export type LastUpdatedProps = {
  dateUpdated?: string | null;
  updatedBy?: LastUpdatedProfile | null;
  className?: string;
  withIcon?: boolean;
};
