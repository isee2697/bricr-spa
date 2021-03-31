import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useCrmRelationsCustomerJourneyQueryParams } from 'app/shared/useCrmRelationsCustomerJourneyQueryParams/useCrmRelationsCustomerJourneyQueryParams';
import {
  CRM_RELATIONS_CUSTOMER_JOURNEY_BIDDINGS,
  CRM_RELATIONS_CUSTOMER_JOURNEY_CANDIDATES,
  CRM_RELATIONS_CUSTOMER_JOURNEY_INTERESTS,
  CRM_RELATIONS_CUSTOMER_JOURNEY_MATCHING,
  CRM_RELATIONS_CUSTOMER_JOURNEY_OPTANTS,
  CRM_RELATIONS_CUSTOMER_JOURNEY_VIEWINGS,
  CRM_RELATIONS_CUSTOMER_JOURNEY_BUYER,
} from 'api/mocks/crm-relation';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Grid, Typography } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { ListPimsFilters } from 'api/types';

import {
  CrmRelationsDetailsCustomerJourneyContainerProps,
  CrmRelationsDetailsCustomerJourneyTab,
  CrmRelationsDetailsCustomerJourneyType,
} from './CrmRelationsDetailsCustomerJourney.types';
import { CrmRelationsDetailsCustomerJourney } from './CrmRelationsDetailsCustomerJourney';
import { useStyles } from './CrmRelationsDetailsCustomerJourney.styles';

export const CrmRelationsDetailsCustomerJourneyContainer = ({
  crm,
  isSidebarVisible,
  onSidebarOpen,
}: CrmRelationsDetailsCustomerJourneyContainerProps) => {
  const classes = useStyles();
  const { status, setStatus } = useCrmRelationsCustomerJourneyQueryParams({
    status: CrmRelationsDetailsCustomerJourneyTab.Buyer,
  });
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({});
  const [data, setData] = useState<CrmRelationsDetailsCustomerJourneyType[]>(CRM_RELATIONS_CUSTOMER_JOURNEY_MATCHING);
  const [isOwner] = useState(true);

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
      case CrmRelationsDetailsCustomerJourneyTab.Buyer:
        setData(CRM_RELATIONS_CUSTOMER_JOURNEY_BUYER);
        break;
      default:
        setData(CRM_RELATIONS_CUSTOMER_JOURNEY_MATCHING);
    }
  }, [status]);

  const { firstName, lastName } = crm;

  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />

      <Grid xs={12} item container className={classes.header}>
        <Typography variant="h1" className={classes.title}>
          {firstName} {lastName}
        </Typography>
      </Grid>

      <Switch>
        <Route
          exact
          path={`${AppRoute.crmRelationsDetails}/customer_journey`}
          render={() => (
            <CrmRelationsDetailsCustomerJourney
              crm={crm}
              status={status}
              onStatusChange={setStatus}
              onFilter={filters => setActiveFilters(filters)}
              activeFilters={activeFilters}
              items={data}
              isOwner={isOwner}
            />
          )}
        />
        <Route
          render={() => <Redirect to={`${AppRoute.crmRelationsDetails.replace(':id', crm.id)}/customer_journey`} />}
        />
      </Switch>
    </>
  );
};
