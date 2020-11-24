import { DateTime } from 'luxon';

import { Pim } from 'api/types';
import { CrmItem } from 'app/crm/Crm.types';
import { SalesLead } from 'app/sales/salesLeads/SalesLeads.types';

export type LInkedItemsProps = {
  pimObjects?: Pim[];
  relations?: CrmItem[];
  salesOrders?: SalesLead[];
  calendars?: DateTime[];
};
