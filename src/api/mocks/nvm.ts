import { DateTime } from 'luxon';

import { PropertyType } from 'api/types';
import { NvmItemLabel, NvmItem, NvmItemStatus } from 'app/pimNvm/PimNvm.types';

export const NVM_ITEMS: NvmItem[] = [
  {
    id: '0001',
    image: 'http://placeimg.com/104/152/arch',
    date: DateTime.local(),
    address: 'Isenburgstraat 36, Breda',
    size: 90,
    rooms: 3,
    properties: [PropertyType.Apartment],
    price: {
      original: 385000,
      new: 375500,
      perMonth: 1399,
    },
    status: NvmItemStatus.WaitForOwner,
    labels: [NvmItemLabel.Sale, NvmItemLabel.Rent],
  },
  {
    id: '0002',
    image: 'http://placeimg.com/104/152/arch',
    date: DateTime.local(),
    address: 'Van der Meerstraat 45, Amersfoort',
    size: 65,
    rooms: 2,
    properties: [PropertyType.Apartment],
    price: {
      original: 385000,
      new: 375500,
      perMonth: 1399,
    },
    status: NvmItemStatus.ProcessReactions,
    labels: [NvmItemLabel.Sale, NvmItemLabel.Rent],
  },
];
