import { useQueryParam } from 'use-query-params';

import { CheckListStatus } from 'app/pimDetails/sections/documents/checklist/CheckList.types';

export const usePimDocumentsCheckListQueryParams = () => {
  const [status = CheckListStatus.CheckListBroker, setStatus] = useQueryParam<CheckListStatus>('status');

  return {
    status,
    setStatus,
  };
};
