import { GenderType } from 'api/types';
import {
  MarketingOpenHouseItem,
  MarketingOpenHouseResult,
  MarketingOpenHouseStatus,
  MarketingOpenHouseVisitStatus,
} from 'app/crmRelationsDetails/marketingOpenHouse/MarketingOpenHouse.types';
import { MarketingOpenHouseOrganizedItem } from 'app/crmRelationsDetails/marketingOpenHouseOrganized/MarketingOpenHouseOrganized.types';

export const MARKETING_OPEN_HOUSE: MarketingOpenHouseItem = {
  id: '0001',
  property: 'Isenburgstraat 36, Breda',
  date: new Date().toISOString(),
  status: MarketingOpenHouseStatus.Checked,
  visitStatus: MarketingOpenHouseVisitStatus.Visited,
  visitors: 8,
  checked: 4,
  price: 245000000,
};

export const MARKETING_OPEN_HOUSES: MarketingOpenHouseItem[] = [
  { ...MARKETING_OPEN_HOUSE, result: MarketingOpenHouseResult.ThumbsDownn },
  {
    ...MARKETING_OPEN_HOUSE,
    id: '0002',
    status: MarketingOpenHouseStatus.Pending,
  },
  {
    ...MARKETING_OPEN_HOUSE,
    id: '0003',
    status: MarketingOpenHouseStatus.Checked,
    result: MarketingOpenHouseResult.ThumbsUp,
  },
  {
    ...MARKETING_OPEN_HOUSE,
    id: '0004',
    visitStatus: MarketingOpenHouseVisitStatus.Organized,
    result: MarketingOpenHouseResult.ThumbsUp,
  },
];

export const MARKETING_OPEN_HOUSE_ORGANIZED_ITEMS: MarketingOpenHouseOrganizedItem[] = [
  {
    id: '0001',
    gender: GenderType.Male,
    name: 'Christian van Gils',
    result: MarketingOpenHouseResult.ThumbsUp,
    information: 'Ja daar zien we ons wel wonen, dus we komen terug voor tweede keer.',
  },
  {
    id: '0002',
    gender: GenderType.Female,
    name: 'Simone van Gils',
    result: MarketingOpenHouseResult.ThumbsDownn,
    information: 'Nee wordt hem niet',
  },
];
