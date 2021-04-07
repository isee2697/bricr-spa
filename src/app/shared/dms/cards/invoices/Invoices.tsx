import React, { useState } from 'react';

import { DmsFolderViewType } from 'api/types';
import { Box, IconButton } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { ActionTabs } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { EmptyStateFilter } from 'ui/organisms/emptyStateFilter/EmptyStateFilter';
import { CardWithBody } from 'ui/templates';
import { InvoiceItem } from '../../cardItems/invoiceItem/InvoiceItem';
import { InvoiceItemStatus } from '../../cardItems/invoiceItem/InvoiceItem.types';

import { InvoiceTabs } from './dictionary';
import { InvoicesProps } from './Invoices.types';

export const Invoices = ({ invoices }: InvoicesProps) => {
  const [status, setStatus] = useState<InvoiceItemStatus>(InvoiceItemStatus.ActionRequired);
  const tabs: ActionTab[] = InvoiceTabs.map(tab => ({
    ...tab,
    amount: invoices.filter(invoice => invoice.status === tab.value).length,
  }));

  return (
    <CardWithBody
      titleId="dms.invoices.title"
      titleActions={
        <IconButton color="primary" size="small" variant="circle">
          <AddIcon />
        </IconButton>
      }
    >
      <ActionTabs tabs={tabs} status={status} onStatusChange={setStatus} />
      <Box>
        {invoices.filter(invoice => invoice.status === status).length === 0 && (
          <EmptyStateFilter type={DmsFolderViewType.Invoices} />
        )}
        {invoices
          .filter(invoice => invoice.status === status)
          .map((invoice, index) => (
            <Box mb={2}>
              <InvoiceItem key={index} item={invoice} />
            </Box>
          ))}
      </Box>
    </CardWithBody>
  );
};
