import React, { useState, useCallback } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Grid, Box } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';

import { CrmRelationsDetailsProps } from './CrmRelationsDetails.type';
import { useStyles } from './CrmRelationsDetails.styles';
import { CrmRelationsDetailsSidebarMenu } from './crmRelationsDetailsSidebarMenu/CrmRelationsDetailsSidebarMenu';
import { CrmRelationsDetailsHeader } from './crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { CrmRelationsDetailsDashboard } from './crmRelationsDetailsDashboard/CrmRelationsDetailsDashboard';
import { CrmRelationsDetailsSummary } from './crmRelationsDetailsSummary/CrmRelationsDetailsSummary';
import { CrmRelationsDetailsTimeline } from './crmRelationsDetailsTimeline/CrmRelationsDetailsTimeline';
import { CrmRelationsDetailsCustomerJourneyContaienr } from './crmRelationsDetailsCustomerJourney/CrmRelationsDetailsCustomerJourneyContainer';
import { PersonalInformationGeneral } from './personalInformation/general/General';
import { ContactInformation } from './personalInformation/contactInformation/ContactInformation';
import { FamilyAndContacts } from './personalInformation/familyAndContacts/FamilyAndContacts';
import { HomeSituationContainer } from './personalInformation/homeSituation/HomeSituationContainer';

export const CrmRelationsDetails = ({ crm, breadcrumbs, path, entityType }: CrmRelationsDetailsProps) => {
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const { state } = useLocation<{ newlyAdded: boolean }>();

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <EntityTypeProvider entityType={entityType}>
      <Grid container spacing={0}>
        {breadcrumbs}
        <CrmRelationsDetailsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
        <Box flex={1}>
          <Grid container className={classes.content}>
            <CrmRelationsDetailsHeader onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
            {!!crm && (
              <Switch>
                <Route path={`${path}/dashboard`} render={() => <CrmRelationsDetailsDashboard crm={crm} />} />
                <Route path={`${path}/summary`} render={() => <CrmRelationsDetailsSummary />} />
                <Route path={`${path}/timeline`} render={() => <CrmRelationsDetailsTimeline crm={crm} />} />
                <Route
                  path={`${path}/customer_journey`}
                  render={() => <CrmRelationsDetailsCustomerJourneyContaienr crm={crm} />}
                />
                <Route path={`${path}/personal_information_general`} render={() => <PersonalInformationGeneral />} />
                <Route
                  path={`${path}/personal_information_contact_information`}
                  render={() => <ContactInformation />}
                />
                <Route path={`${path}/personal_information_family_and_contacts`} render={() => <FamilyAndContacts />} />
                <Route path={`${path}/personal_information_home_situation`} render={() => <HomeSituationContainer />} />
                <Redirect to={{ pathname: `${path}/dashboard`, state }} />
              </Switch>
            )}
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
