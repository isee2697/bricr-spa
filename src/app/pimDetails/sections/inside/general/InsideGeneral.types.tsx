import { DateTime } from 'luxon';

import { InsideGeneral } from 'api/types';

export type InsideGeneralBody = Partial<InsideGeneral> & {
  extension: {
    yearOfExtension: DateTime;
  };
  renovation: {
    yearOfRenovation: DateTime;
  };
};
