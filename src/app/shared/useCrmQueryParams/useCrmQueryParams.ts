import { useQueryParam } from 'use-query-params';

import { CrmStatus } from 'api/types';

type defaultValues = {
  status?: CrmStatus;
};

export const useCrmQueryParams = (defaults: defaultValues) => {
  const [status = defaults.status || CrmStatus.Active, setStatus] = useQueryParam<CrmStatus>(CrmStatus.Active);

  return {
    status,
    setStatus,
  };
};
