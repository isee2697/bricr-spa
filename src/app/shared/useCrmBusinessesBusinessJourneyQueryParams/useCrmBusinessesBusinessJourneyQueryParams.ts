import { useQueryParam } from 'use-query-params';

import { BusinessJourneyTab } from 'app/crmBusinessesDetails/businessJourney/BusinessJourney.types';

type defaultValues = {
  status?: BusinessJourneyTab;
};

export const useCrmBusinessesBusinessJourneyQueryParams = (defaults: defaultValues) => {
  const [status = defaults.status || BusinessJourneyTab.Matches, setStatus] = useQueryParam<BusinessJourneyTab>(
    BusinessJourneyTab.Matches,
  );

  return {
    status,
    setStatus,
  };
};
