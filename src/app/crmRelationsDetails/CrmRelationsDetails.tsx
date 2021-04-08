import React, { useState, useCallback } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { Grid, Box } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';

import { CrmRelationsDetailsProps } from './CrmRelationsDetails.type';
import { useStyles } from './CrmRelationsDetails.styles';
import { CrmRelationsDetailsSidebarMenu } from './crmRelationsDetailsSidebarMenu/CrmRelationsDetailsSidebarMenu';
import { CrmRelationsDetailsDashboard } from './crmRelationsDetailsDashboard/CrmRelationsDetailsDashboard';
import { CrmRelationsDetailsSummary } from './crmRelationsDetailsSummary/CrmRelationsDetailsSummary';
import { CrmRelationsDetailsTimeline } from './crmRelationsDetailsTimeline/CrmRelationsDetailsTimeline';
import { CrmRelationsDetailsCustomerJourneyContainer } from './crmRelationsDetailsCustomerJourney/CrmRelationsDetailsCustomerJourneyContainer';
import { FamilyAndContactsContainer } from './personalInformation/familyAndContacts/FamilyAndContactsContainer';
import { HomeSituationContainer } from './personalInformation/homeSituation/HomeSituationContainer';
import { PersonalInformationGeneralContainer } from './personalInformation/general/GeneralContainer';
import { ContactInformationContainer } from './personalInformation/contactInformation/ContactInformationContainer';
import { MatchProfileContainer } from './personalInformation/matchProfile/MatchProfileContainer';
import { DocumentsContainer } from './documents/DocumentsContainer';
import { MarketingNewLetterContainer } from './marketingNewLetters/MarketingNewLettersContainer';
import { OrdersContainer } from './orders/OrdersContainer';
import { LinkedBusinessesContainer } from './linkedBusinesses/LinkedBusinessesContainer';
import { MarketingTargetGroupsContainer } from './marketingTargetGroups/MarketingTargetGroupsContainer';
import { MarketingCrossSellContainer } from './marketingCrossSell/MarketingCrossSellContainer';
import { DashboardContainer } from './sales/dashboard/DashboardContainer';
import { AcquisitionsContainer } from './sales/acquisitions/AcquisitionsContainer';
import { QuotationsContainer } from './sales/quotations/QuotationsContainer';
import { InvoicesContainer } from './sales/invoices/InvoicesContainer';
import { OrdersContainer as SalesOrdersContainer } from './sales/orders/OrdersContainer';
import { MarketingSurveyContainer } from './marketingSurvey/MarketingSurveyContainer';
import { FinancialProfileContainer } from './personalInformation/financialProfile/FinancialProfileContainer';
import { BrokersContainer } from './professionalContacts/brokers/BrokersContainer';
import { NotaryContainer } from './professionalContacts/notary/NotaryContainer';
import { PurchaseContainer } from './professionalContacts/purchase/PurchaseContainer';
import { AppraiserContainer } from './professionalContacts/appraiser/AppraiserContainer';
import { OthersContainer } from './professionalContacts/others/OthersContainer';
import { MarketingOpenHouseContainer } from './marketingOpenHouse/MarketingOpenHouseContainer';
import { MarketingOpenHouseVisitedContainer } from './marketingOpenHouseVisited/MarketingOpenHouseVisitedContainer';
import { MarketingOpenHouseOrganizedContainer } from './marketingOpenHouseOrganized/MarketingOpenHouseOrganizedContainer';

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
      <Grid container spacing={0} wrap="nowrap">
        {breadcrumbs}
        <CrmRelationsDetailsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} crm={crm} />
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
                  exact={true}
                  path={`${path}/customer_journey/:role`}
                  render={() => (
                    <CrmRelationsDetailsCustomerJourneyContainer
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                      crm={crm}
                    />
                  )}
                />
                <Route
                  path={`${path}/customer_journey`}
                  render={() => (
                    <CrmRelationsDetailsCustomerJourneyContainer
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
                    <FamilyAndContactsContainer onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
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
                    <MatchProfileContainer
                      path={`${path}/personal_information_match_profile`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                      crm={crm}
                    />
                  )}
                />
                <Route
                  path={`${path}/personal_information_financial_profile`}
                  render={() => <FinancialProfileContainer />}
                />
                <Route
                  path={`${path}/personal_information_business_contacts`}
                  render={() => (
                    <LinkedBusinessesContainer
                      path={`${path}/personal_information_business_contacts`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/sales`}
                  render={() => (
                    <DashboardContainer
                      path={`${path}/sales`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/acquisition`}
                  render={() => (
                    <AcquisitionsContainer
                      path={`${path}/acquisition`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/sales_orders`}
                  render={() => (
                    <SalesOrdersContainer
                      path={`${path}/sales_orders`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/quotation`}
                  render={() => (
                    <QuotationsContainer
                      path={`${path}/quotation`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/invoices`}
                  render={() => (
                    <InvoicesContainer
                      path={`${path}/invoices`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/documents`}
                  render={() => (
                    <DocumentsContainer
                      path={`${path.replace(':id', crm.id)}/documents`}
                      title={`${crm.firstName} ${crm.lastName}`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/marketing_news_letter`}
                  render={() => (
                    <MarketingNewLetterContainer
                      path={`${path}/marketing_news_letter`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/orders`}
                  render={() => (
                    <OrdersContainer
                      path={`${path}/orders`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/marketing_target_groups`}
                  render={() => (
                    <MarketingTargetGroupsContainer
                      path={`${path}/marketing_target_groups`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/marketing_cross_sell`}
                  render={() => (
                    <MarketingCrossSellContainer
                      path={`${path}/marketing_cross_sell`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  exact
                  path={`${path}/marketing_survey`}
                  render={() => (
                    <MarketingSurveyContainer
                      path={`${path}/marketing_survey`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/professional_contacts_brokers`}
                  render={() => (
                    <BrokersContainer
                      path={`${path}/professional_contacts_brokers`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  exact
                  path={`${path}/marketing_open_house`}
                  render={() => (
                    <MarketingOpenHouseContainer
                      path={`${path}/marketing_open_house`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/professional_contacts_notary`}
                  render={() => (
                    <NotaryContainer
                      path={`${path}/professional_contacts_notary`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/marketing_open_house/visited/:openHouseId`}
                  render={() => (
                    <MarketingOpenHouseVisitedContainer
                      title={`${crm.firstName} ${crm.lastName}`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/professional_contacts_purchase`}
                  render={() => (
                    <PurchaseContainer
                      path={`${path}/professional_contacts_purchase`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/professional_contacts_appraiser`}
                  render={() => (
                    <AppraiserContainer
                      path={`${path}/professional_contacts_appraiser`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/professional_contacts_others`}
                  render={() => (
                    <OthersContainer
                      path={`${path}/professional_contacts_others`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route
                  path={`${path}/marketing_open_house/organized/:openHouseId`}
                  render={() => (
                    <MarketingOpenHouseOrganizedContainer
                      path={`${path}/marketing_open_house/organized/:openHouseId`}
                      onSidebarOpen={handleSidebarOpen}
                      isSidebarVisible={isSidebarVisible}
                    />
                  )}
                />
                <Route path={`${path}/marketing_open_house/organized/:openHouseId`} render={() => <>Organized</>} />
                <Redirect to={{ pathname: `${path}/dashboard`, state }} />
              </Switch>
            )}
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
