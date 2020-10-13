import { DateTime } from 'luxon';
import { InsideGeneral, LastUpdatedProfile } from 'api/types';

export type InsideGeneralBody = Partial<InsideGeneral> & {
  extension: {
    yearOfExtension: DateTime;
  };
  renovation: {
    yearOfRenovation: DateTime;
  };
};

export type InsideGeneralProps = {
  dateUpdated?: string | null;
  updatedBy?: LastUpdatedProfile | null;
};
