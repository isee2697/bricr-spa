import { DateTime } from 'luxon';

import { PropertyConnection } from '../types';
import { OrdersData } from 'app/crmRelationsDetails/orders/list/List.types';

export const CRM_ORDERS: OrdersData = {
  sale: {
    image: 'http://placeimg.com/176/112/arch',
    date: DateTime.local(),
    name: 'Waterlooplein 887, Geldrop',
    size: 89,
    rooms: 3,
    properties: [PropertyConnection.DetachedHouse],
    priceOriginal: 776000,
    price: 790000,
    priceBeneficial: 1399,
    matchStrength: 0.6,
  },
  appraisal: {
    image: 'http://placeimg.com/176/112/arch',
    date: DateTime.local(),
    name: 'Waterlooplein 887, Geldrop',
    size: 89,
    rooms: 3,
    properties: [PropertyConnection.DetachedHouse],
    priceOriginal: 776000,
    price: 790000,
    priceBeneficial: 1399,
    matchStrength: 0.6,
  },
};
