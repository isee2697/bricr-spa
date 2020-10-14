import React, { useEffect, useState } from 'react';

import { useCrmRelationsCustomerJourneyQueryParams } from '../../shared/useCrmRelationsCustomerJourneyQueryParams/useCrmRelationsCustomerJourneyQueryParams';
import {
  CRM_RELATIONS_CUSTOMER_JOURNEY_BIDDINGS,
  CRM_RELATIONS_CUSTOMER_JOURNEY_CANDIDATES,
  CRM_RELATIONS_CUSTOMER_JOURNEY_INTERESTS,
  CRM_RELATIONS_CUSTOMER_JOURNEY_MATCHING,
  CRM_RELATIONS_CUSTOMER_JOURNEY_OPTANTS,
  CRM_RELATIONS_CUSTOMER_JOURNEY_VIEWINGS,
} from 'api/mocks/crm-relation';

import { CrmRelationsDetailsCustomerJourney } from './CrmRelationsDetailsCustomerJourney';
import {
  CrmRelationsDetailsCustomerJourneyContainerProps,
  CrmRelationsDetailsCustomerJourneyTab,
  CrmRelationsDetailsCustomerJourneyType,
} from './CrmRelationsDetailsCustomerJourney.types';

export const CrmRelationsDetailsCustomerJourneyContaienr = ({
  crm,
}: CrmRelationsDetailsCustomerJourneyContainerProps) => {
  const { status, setStatus } = useCrmRelationsCustomerJourneyQueryParams({});
  const [data, setData] = useState<CrmRelationsDetailsCustomerJourneyType[]>(CRM_RELATIONS_CUSTOMER_JOURNEY_MATCHING);

  useEffect(() => {
    switch (status) {
      case CrmRelationsDetailsCustomerJourneyTab.Matches:
        setData(CRM_RELATIONS_CUSTOMER_JOURNEY_MATCHING);
        break;
      case CrmRelationsDetailsCustomerJourneyTab.Interests:
        setData(CRM_RELATIONS_CUSTOMER_JOURNEY_INTERESTS);
        break;
      case CrmRelationsDetailsCustomerJourneyTab.Viewings:
        setData(CRM_RELATIONS_CUSTOMER_JOURNEY_VIEWINGS);
        break;
      case CrmRelationsDetailsCustomerJourneyTab.Biddings:
        setData(CRM_RELATIONS_CUSTOMER_JOURNEY_BIDDINGS);
        break;
      case CrmRelationsDetailsCustomerJourneyTab.Candidate:
        setData(CRM_RELATIONS_CUSTOMER_JOURNEY_CANDIDATES);
        break;
      case CrmRelationsDetailsCustomerJourneyTab.Optant:
        setData(CRM_RELATIONS_CUSTOMER_JOURNEY_OPTANTS);
        break;
      default:
        setData(CRM_RELATIONS_CUSTOMER_JOURNEY_MATCHING);
    }
  }, [status]);

  return <CrmRelationsDetailsCustomerJourney crm={crm} status={status} onStatusChange={setStatus} items={data} />;
};
