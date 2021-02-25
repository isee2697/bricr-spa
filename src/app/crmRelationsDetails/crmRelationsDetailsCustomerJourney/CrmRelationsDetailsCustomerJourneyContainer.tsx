import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { useCrmRelationsCustomerJourneyQueryParams } from 'app/shared/useCrmRelationsCustomerJourneyQueryParams/useCrmRelationsCustomerJourneyQueryParams';
import {
  CRM_RELATIONS_CUSTOMER_JOURNEY_BIDDINGS,
  CRM_RELATIONS_CUSTOMER_JOURNEY_CANDIDATES,
  CRM_RELATIONS_CUSTOMER_JOURNEY_INTERESTS,
  CRM_RELATIONS_CUSTOMER_JOURNEY_MATCHING,
  CRM_RELATIONS_CUSTOMER_JOURNEY_OPTANTS,
  CRM_RELATIONS_CUSTOMER_JOURNEY_VIEWINGS,
} from 'api/mocks/crm-relation';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Grid, IconButton, Typography } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';

import {
  CrmRelationsDetailsCustomerJourneyContainerProps,
  CrmRelationsDetailsCustomerJourneyTab,
  CrmRelationsDetailsCustomerJourneyType,
} from './CrmRelationsDetailsCustomerJourney.types';
import { CrmRelationsDetailsCustomerJourney } from './CrmRelationsDetailsCustomerJourney';
import { useStyles } from './CrmRelationsDetailsCustomerJourney.styles';
import { CrmRelationsDetailsCustomerJourneyYourNewHome } from './yourNewHome/YourNewHome';

export const CrmRelationsDetailsCustomerJourneyContainer = ({
  crm,
  isSidebarVisible,
  onSidebarOpen,
}: CrmRelationsDetailsCustomerJourneyContainerProps) => {
  const classes = useStyles();
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

  const { firstName, lastName } = crm;

  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />

      <Grid xs={12} item container className={classes.header}>
        <Typography variant="h1" className={classes.title}>
          {firstName} {lastName}
        </Typography>

        <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
          <HelpIcon />
        </IconButton>

        <IconButton variant="rounded" size="small" onClick={() => {}}>
          <MenuIcon />
        </IconButton>
      </Grid>

      <Switch>
        <Route
          exact
          path={`${AppRoute.crmRelationsDetails}/customer_journey`}
          render={() => (
            <CrmRelationsDetailsCustomerJourney crm={crm} status={status} onStatusChange={setStatus} items={data} />
          )}
        />
        <Route
          exact
          path={`${AppRoute.crmRelationsDetails}/customer_journey/your_new_home`}
          render={() => <CrmRelationsDetailsCustomerJourneyYourNewHome />}
        />
      </Switch>
    </>
  );
};
