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
import { FamilyAndContacts } from './personalInformation/familyAndContacts/FamilyAndContacts';
import { FinancialProfile } from './personalInformation/financialProfile/FinancialProfile';
import { HomeSituationContainer } from './personalInformation/homeSituation/HomeSituationContainer';
import { PersonalInformationGeneralContainer } from './personalInformation/general/GeneralContainer';
import { ContactInformationContainer } from './personalInformation/contactInformation/ContactInformationContainer';
import { MatchProfile } from './personalInformation/matchProfile/MatchProfile';

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
            {!!crm && (
              <Switch>
                <Route
                  path={`${path}/dashboard`}
                  render={() => (
                    <CrmRelationsDetailsDashboard
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                      crm={crm}
                    />
                  )}
                />
                <Route
                  path={`${path}/summary`}
                  render={() => (
                    <CrmRelationsDetailsSummary
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                      crm={crm}
                    />
                  )}
                />
                <Route
                  path={`${path}/timeline`}
                  render={() => (
                    <CrmRelationsDetailsTimeline
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                      crm={crm}
                    />
                  )}
                />
                <Route
                  path={`${path}/customer_journey`}
                  render={() => (
                    <CrmRelationsDetailsCustomerJourneyContaienr
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                      crm={crm}
                    />
                  )}
                />
                <Route
                  path={`${path}/personal_information_general`}
                  render={() => (
                    <PersonalInformationGeneralContainer
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/personal_information_contact_information`}
                  render={() => (
                    <ContactInformationContainer
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/personal_information_family_and_contacts`}
                  render={() => (
                    <FamilyAndContacts onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
                  )}
                />
                <Route
                  path={`${path}/personal_information_home_situation`}
                  render={() => (
                    <HomeSituationContainer onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
                  )}
                />
                <Route
                  path={`${path}/personal_information_match_profile`}
                  render={() => (
                    <MatchProfile
                      path={`${path}/personal_information_match_profile`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route path={`${path}/personal_information_family_and_contacts`} render={() => <FamilyAndContacts />} />
                <Route path={`${path}/personal_information_financial_profile`} render={() => <FinancialProfile />} />
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
