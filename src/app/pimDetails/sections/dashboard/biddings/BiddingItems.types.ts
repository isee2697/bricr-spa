import { DateTime } from 'luxon';

export type Counter = {
  id: string;
  offer: number;
  offerDate: DateTime;
  counterOffer: number;
  counterOfferDate: DateTime;
  conditions: {
    takeOverListOfCases: boolean;
    technicalBuildingInspection: boolean;
    reservationOfFunding: boolean;
  };
  status: 'counter' | 'pending';
  statusUpdateDate: DateTime;
};

export type BiddingItemsProps = {
  counters: Counter[];
};
