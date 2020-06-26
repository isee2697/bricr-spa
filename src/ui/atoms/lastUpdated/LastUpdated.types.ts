import { Profile } from 'api/types';

export type LastUpdatedProps = {
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
  className?: string;
  withIcon?: boolean;
};
