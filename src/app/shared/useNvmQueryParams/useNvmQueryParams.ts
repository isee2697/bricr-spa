import { useQueryParam } from 'use-query-params';

import { PimNvmTab } from 'app/pimNvm/PimNvm.types';

const defaultValues = {
  tab: PimNvmTab.NvmSearch,
};

export const useNvmQueryParams = (defaults = defaultValues) => {
  const [tab = defaults.tab || PimNvmTab.NvmSearch, setTab] = useQueryParam<PimNvmTab>('tab');

  return {
    tab,
    setTab,
  };
};
