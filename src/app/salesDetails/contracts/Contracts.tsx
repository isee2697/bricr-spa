import React from 'react';

import { useLocale } from 'hooks';
import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { Header } from '../header/Header';
import { Page } from 'ui/templates';

import { ContractsProps } from './Contracts.types';
import { Contracts as ContractsSection } from './sections/contracts/Contracts';

export const Contracts = ({ isSidebarVisible, onSidebarOpen }: ContractsProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'sales_details.contracts.title' })} />
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Box mt={3} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <ContractsSection />
        </Grid>
      </Page>
    </>
  );
};
