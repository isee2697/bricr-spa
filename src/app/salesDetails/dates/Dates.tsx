import React from 'react';

import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { Header } from '../header/Header';
import { Page } from 'ui/templates';
import { useLocale } from 'hooks';

import { DatesProps } from './Dates.types';

export const Dates = ({ onSidebarOpen, isSidebarVisible }: DatesProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'sales_details.dates.title' })} />
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Box mt={3} />
      <Page withoutHeader>
        <Grid xs={12} item></Grid>
      </Page>
    </>
  );
};
