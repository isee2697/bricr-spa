import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Grid, IconButton, Typography } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';
import { useCrmBusinessesBusinessJourneyQueryParams } from 'app/shared/useCrmBusinessesBusinessJourneyQueryParams/useCrmBusinessesBusinessJourneyQueryParams';
import { Header } from '../header/Header';
import {
  CRM_BUSINESS_BUSINESS_JOURNEY_BIDDINGS,
  CRM_BUSINESS_BUSINESS_JOURNEY_CANDIDATES,
  CRM_BUSINESS_BUSINESS_JOURNEY_INTERESTS,
  CRM_BUSINESS_BUSINESS_JOURNEY_MATCHING,
  CRM_BUSINESS_BUSINESS_JOURNEY_OPTANTS,
  CRM_BUSINESS_BUSINESS_JOURNEY_VIEWINGS,
} from 'api/mocks/crm-business';

import { BusinessJourneyContainerProps, BusinessJourneyTab, BusinessJourneyType } from './BusinessJourney.types';
import { BusinessJourney } from './BusinessJourney';
import { useStyles } from './BusinessJourney.styles';
import { BusinessJourneyYourNewHome } from './yourNewHome/YourNewHome';

export const BusinessJourneyContainer = ({ crm, isSidebarVisible, onSidebarOpen }: BusinessJourneyContainerProps) => {
  const classes = useStyles();
  const { status, setStatus } = useCrmBusinessesBusinessJourneyQueryParams({});
  const [data, setData] = useState<BusinessJourneyType[]>(CRM_BUSINESS_BUSINESS_JOURNEY_MATCHING);

  useEffect(() => {
    switch (status) {
      case BusinessJourneyTab.Matches:
        setData(CRM_BUSINESS_BUSINESS_JOURNEY_MATCHING);
        break;
      case BusinessJourneyTab.Interests:
        setData(CRM_BUSINESS_BUSINESS_JOURNEY_INTERESTS);
        break;
      case BusinessJourneyTab.Viewings:
        setData(CRM_BUSINESS_BUSINESS_JOURNEY_VIEWINGS);
        break;
      case BusinessJourneyTab.Biddings:
        setData(CRM_BUSINESS_BUSINESS_JOURNEY_BIDDINGS);
        break;
      case BusinessJourneyTab.Candidate:
        setData(CRM_BUSINESS_BUSINESS_JOURNEY_CANDIDATES);
        break;
      case BusinessJourneyTab.Optant:
        setData(CRM_BUSINESS_BUSINESS_JOURNEY_OPTANTS);
        break;
      default:
        setData(CRM_BUSINESS_BUSINESS_JOURNEY_MATCHING);
    }
  }, [status]);

  const { firstName, insertion, lastName } = crm;

  return (
    <>
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />

      <Grid xs={12} item container className={classes.header}>
        <Typography variant="h1" className={classes.title}>
          {firstName} {insertion} {lastName}
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
          path={`${AppRoute.crmBusinessesDetails}/business_journey`}
          render={() => <BusinessJourney crm={crm} status={status} onStatusChange={setStatus} items={data} />}
        />
        <Route
          exact
          path={`${AppRoute.crmBusinessesDetails}/business_journey/your_new_home`}
          render={() => <BusinessJourneyYourNewHome />}
        />
        <Redirect to={`${AppRoute.crmBusinessesDetails}/business_journey`} />
      </Switch>
    </>
  );
};
