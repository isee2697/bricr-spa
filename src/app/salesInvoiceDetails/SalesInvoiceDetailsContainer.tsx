import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';

import { SalesInvoiceDetails } from './SalesInvoiceDetails';

export const SalesInvoiceDetailsContainer = () => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();

  const breadcrumbs = (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'header.links.sales_invoice_details' })}
        to={`${AppRoute.sales}/invoices`}
      />
      <NavBreadcrumb
        title={formatMessage({ id: 'sales.invoice.status.paid' })}
        urlBase={AppRoute.salesInvoiceDetails.replace(':id', id)}
      />
    </>
  );

  return <SalesInvoiceDetails breadcrumbs={breadcrumbs} />;
};

export default SalesInvoiceDetailsContainer;
