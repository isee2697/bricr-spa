import { useQueryParam } from 'use-query-params';
import { CrmRelationsDetailsCustomerJourneyTab } from '../../crmRelationsDetails/crmRelationsDetailsCustomerJourney/CrmRelationsDetailsCustomerJourney.types';

type defaultValues = {
  status?: CrmRelationsDetailsCustomerJourneyTab;
};

export const useCrmRelationsCustomerJourneyQueryParams = (defaults: defaultValues) => {
  const [status = defaults.status || CrmRelationsDetailsCustomerJourneyTab.Matches, setStatus] = useQueryParam<
    CrmRelationsDetailsCustomerJourneyTab
  >(CrmRelationsDetailsCustomerJourneyTab.Matches);

  return {
    status,
    setStatus,
  };
};
