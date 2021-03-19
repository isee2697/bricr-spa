import {
  MarketingNewsLetterItem,
  MarketingNewsLetterEventType,
  YesNo,
} from 'app/crmRelationsDetails/marketingNewLetters/MarketingNewLetter.types';

export const MARKETING_NEWSLETTER: MarketingNewsLetterItem = {
  id: '0001',
  name: 'Interest property residential',
  sent: new Date().toISOString(),
  bounced: YesNo.Yes,
  opened: YesNo.No,
  event: MarketingNewsLetterEventType.ClickThrough,
};

export const MARKETING_NEWSLETTERS: MarketingNewsLetterItem[] = [
  { ...MARKETING_NEWSLETTER },
  { ...MARKETING_NEWSLETTER, id: '0002', bounced: YesNo.No, event: MarketingNewsLetterEventType.FormFilledIn },
  { ...MARKETING_NEWSLETTER, id: '0003', opened: YesNo.Yes, event: MarketingNewsLetterEventType.FormFilledIn },
];
