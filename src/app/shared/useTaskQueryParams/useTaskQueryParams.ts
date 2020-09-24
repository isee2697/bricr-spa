import { useQueryParam } from 'use-query-params';

import { TasksTab } from '../../tasks/Tasks.types';

type defaultValues = {
  tab?: TasksTab;
};

export const useTaskQueryParams = (defaults: defaultValues) => {
  const [tab = defaults.tab || TasksTab.Today, setTab] = useQueryParam<TasksTab>(TasksTab.Today);

  return {};
};
