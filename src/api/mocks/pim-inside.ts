import { WindowType } from 'api/types';

import { PIM_DETAILS_1 } from './pim';

export const PIM_INSIDE_1 = {
  id: PIM_DETAILS_1.id,
  floors: PIM_DETAILS_1.floors,
  insideGeneral: {
    notes: 'My general notes',
    windows: {
      notes: 'My notes',
      types: [WindowType.FloatGlass],
    },
    extension: {
      notes: 'My extension notes',
      yearOfExtension: 2020,
    },
    renovation: {
      notes: 'Renovation notes',
      yearOfRenovation: 1998,
    },
  },
};
