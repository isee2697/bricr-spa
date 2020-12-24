import React, { useCallback, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { EntityTypeProvider } from 'app/shared/entityType';
import { Grid, Box } from 'ui/atoms';

import { CrmBusinessesDetailsProps } from './CrmBusinessesDetails.types';
import { useStyles } from './CrmBusinessesDetails.styles';
import { CrmBusinessDetailsSidebarMenu } from './sidebarMenu/SidebarMenu';
import { CrmBusinessDetailsDashboard } from './dashboard/Dashboard';
import { BusinessJourneyContainer } from './businessJourney/BusinessJourneyContainer';
import { PersonalInformationGeneralContainer } from './personalInformation/general/GeneralContainer';
import { ContactInformationContainer } from './personalInformation/contactInformation/ContactInformationContainer';
import { ContactsContainer } from './personalInformation/contacts/ContactsContainer';
import { FinancialProfile } from './personalInformation/financialProfile/FinancialProfile';

export const CrmBusinessesDetails = ({ crm, breadcrumbs, path, entityType }: CrmBusinessesDetailsProps) => {
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <EntityTypeProvider entityType={entityType}>
      <Grid container spacing={0} wrap="nowrap">
        {breadcrumbs}
        <CrmBusinessDetailsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
        <Box flex={1}>
          <Grid container className={classes.content}>
            {!!crm && (
              <Switch>
                <Route
                  path={`${path}/dashboard`}
                  render={() => (
                    <CrmBusinessDetailsDashboard
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                      crm={crm}
                    />
                  )}
                />
                <Route
                  path={`${path}/business_journey`}
                  render={() => (
                    <BusinessJourneyContainer
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
                  path={`${path}/personal_information_contacts`}
                  render={() => (
                    <ContactsContainer onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
                  )}
                />
                <Route
                  path={`${path}/personal_information_financial_profile`}
                  render={() => (
                    <FinancialProfile onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
                  )}
                />
                <Redirect to={`${path}/dashboard`} />
              </Switch>
            )}
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
