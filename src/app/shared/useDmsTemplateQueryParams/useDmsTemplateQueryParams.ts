import { useQueryParam } from 'use-query-params';

import { ActiveTabStatus } from 'app/dms/dmsTemplates/DmsTemplates.types';

type defaultValues = {
  status?: ActiveTabStatus;
};

export const useDmsTemplateQueryParams = (defaults?: defaultValues) => {
  const [status = defaults?.status || 'active', setStatus] = useQueryParam<ActiveTabStatus>('active');

  return {
    status,
    setStatus,
  };
};
