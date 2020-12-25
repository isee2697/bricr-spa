import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { useEntityType } from 'app/shared/entityType';
import { Grid, IconButton, NavBreadcrumb, Typography } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Page } from 'ui/templates';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';
import { Header } from 'app/crmBusinessesDetails/header/Header';

import { useStyles } from './FinancialProfile.styles';
import { BankAccounts } from './bankAccounts/BankAccounts';
import { FinancialProfileProps } from './FinancialProfile.types';
import { AnnualFigures } from './annualFigures/AnnualFigures';

export const FinancialProfile = ({ onSidebarOpen, isSidebarVisible }: FinancialProfileProps) => {
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
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
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

        <AnnualFigures />
        <BankAccounts />
      </Page>
    </>
  );
};
