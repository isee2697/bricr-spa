import React from 'react';

import { SALES_QUOTATIONS } from 'api/mocks/sales';
import { useSalesQuotationsQueryParams } from 'app/shared/useSalesQuotationsQueryParams/useSalesQuotationsQueryParams';

import { Quotations } from './Quotations';
import { QuotationsContainerProps, QuotationsTabStatus, SalesQuotationStepAction } from './Quotations.types';

export const QuotationsContainer = (props: QuotationsContainerProps) => {
  const { status, sortType, setStatus, setSortType } = useSalesQuotationsQueryParams({});

  return (
    <Quotations
      {...props}
      status={status}
      sortType={sortType}
      onChangeStatus={setStatus}
      onChangeSortType={setSortType}
      quotations={SALES_QUOTATIONS.filter(
        quotation =>
          quotation.steps?.findIndex(
            step =>
              (status === QuotationsTabStatus.Active && step.action === SalesQuotationStepAction.Pending) ||
              (status === QuotationsTabStatus.Accepted && step.action === SalesQuotationStepAction.Accepted) ||
              (status === QuotationsTabStatus.Declined && step.action === SalesQuotationStepAction.Declined),
          ) >= 0,
      )}
    />
  );
};
