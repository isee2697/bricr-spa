import { useQueryParam } from 'use-query-params';

import { QuotationsTabStatus } from '../../sales/quotations/Quotations.types';

type defaultValues = {
  status?: QuotationsTabStatus;
  sortType?: string;
};

export const useSalesQuotationsQueryParams = (defaults: defaultValues) => {
  const [status = defaults.status || QuotationsTabStatus.Active, setStatus] = useQueryParam<QuotationsTabStatus>(
    'status',
  );
  const [sortType = defaults.sortType || '', setSortType] = useQueryParam<string>('sortType');

  return {
    status,
    sortType,
    setStatus,
    setSortType,
  };
};
