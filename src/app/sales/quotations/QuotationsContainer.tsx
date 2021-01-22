import React from 'react';
import { useQueryParam } from 'use-query-params';

import { SALES_QUOTATIONS } from 'api/mocks/sales';
import { useSalesQuotationsQueryParams } from 'app/shared/useSalesQuotationsQueryParams/useSalesQuotationsQueryParams';

import { Quotations } from './Quotations';
import { QuotationsContainerProps, QuotationsTabStatus, SalesQuotationStepAction } from './Quotations.types';

export const QuotationsContainer = (props: QuotationsContainerProps) => {
  const { status, sortType, setStatus, setSortType } = useSalesQuotationsQueryParams({});
  const [viewMode = 'list', setViewMode] = useQueryParam<'list' | 'table'>('viewMode');

  return (
    <Quotations
      {...props}
      status={status}
      sortType={sortType}
      onChangeStatus={setStatus}
      onChangeSortType={setSortType}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
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
