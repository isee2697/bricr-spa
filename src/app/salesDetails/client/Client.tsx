import React from 'react';

import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Header } from '../header/Header';
import { Page } from 'ui/templates';

import { ClientProps } from './Client.types';
import { ClientContainer as ClientContainerSection } from './sections/client/ClientContainer';
import { MyBricr } from './sections/myBricr/MyBricr';

export const Client = ({ isSidebarVisible, onSidebarOpen }: ClientProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'sales_details.client.title' })} />
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Box mt={3} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <ClientContainerSection />
          <Box mt={3} />
          <MyBricr />
        </Grid>
      </Page>
    </>
  );
};
