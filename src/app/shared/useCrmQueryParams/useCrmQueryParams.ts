import { useQueryParam } from 'use-query-params';

import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';
import { CrmType } from 'app/crm/Crm.types';

type defaultValues = {
  status?: ActionTabStatus;
  type?: CrmType;
};

export const useCrmQueryParams = (defaults: defaultValues) => {
  const [status = defaults.status || 'active', setStatus] = useQueryParam<ActionTabStatus>('active');
  const [type = defaults.type || CrmType.Relations, setType] = useQueryParam<CrmType>('type');

  return {
    status,
    type,
    setStatus,
    setType,
  };
};
