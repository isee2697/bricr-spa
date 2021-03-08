import React from 'react';

import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Box, Grid } from 'ui/atoms';

import { CrmRelationsDetailsSummaryProps } from './CrmRelationsDetailsSummary.types';
import { PersonalInformation } from './sections/personalInformation/PersonalInformation';
import { ContactInformation } from './sections/contactInformation/ContactInformation';
import { BusinessContacts } from './sections/businessContacts/BusinessContacts';
import { FinancialProfile } from './sections/financialProfile/FinancialProfile';
import { FamilyAndContacts } from './sections/familyAndContacts/FamilyAndContacts';
import { HomeSituation } from './sections/homeSituation/HomeSituation';
import { MatchProfile } from './sections/matchProfile/MatchProfile';

export const CrmRelationsDetailsSummary = ({
  crm,
  onSidebarOpen,
  isSidebarVisible,
}: CrmRelationsDetailsSummaryProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page title={formatMessage({ id: 'crm.details.summary.title' })} titleActions={<></>}>
        <Box>
          <PersonalInformation crm={crm} />
          <Box mt={3} />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ContactInformation crm={crm} />
              <Box mt={3} />
              <FinancialProfile crm={crm} />
            </Grid>
            <Grid item xs={6}>
              <FamilyAndContacts crm={crm} />
              <Box mt={3} />
              <HomeSituation crm={crm} />
              <Box mt={3} />
              <MatchProfile crm={crm} />
              <Box mt={3} />
              <BusinessContacts crm={crm} />
            </Grid>
          </Grid>
        </Box>
      </Page>
    </>
  );
};
