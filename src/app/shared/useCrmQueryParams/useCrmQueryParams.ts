import { useQueryParam } from 'use-query-params';

import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

type defaultValues = {
  status?: ActionTabStatus;
};

export const useCrmQueryParams = (defaults: defaultValues) => {
  const [status = defaults.status || 'active', setStatus] = useQueryParam<ActionTabStatus>('active');

  return {
    status,
    setStatus,
  };
};
