import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { useEntityType } from 'app/shared/entityType';
import { Grid, IconButton, NavBreadcrumb, Typography } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Page } from 'ui/templates';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './FinancialProfile.styles';
import { IncomeInformation } from './incomeInformation/IncomeInformation';
import { BankAccounts } from './bankAccounts/BankAccounts';
import { FinancialObligations } from './financialObligations/FInancialObligations';

export const FinancialProfile = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.personal_information_financial_profile.title' })}
        to="/personal_information_financial_profile"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Page withoutHeader>
        <Grid xs={12} item container className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            {formatMessage({ id: 'crm.details.personal_information_financial_profile.title' })}
          </Typography>

          <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
            <HelpIcon />
          </IconButton>

          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Grid>

        <IncomeInformation />
        <FinancialObligations />
        <BankAccounts />
      </Page>
    </>
  );
};
