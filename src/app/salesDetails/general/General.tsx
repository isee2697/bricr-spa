import React from 'react';

import { Header } from '../header/Header';
import { useLocale } from 'hooks';
import { Box, Grid, NavBreadcrumb } from 'ui/atoms';
import { Page } from 'ui/templates';

import { GeneralProps } from './General.types';
import { GeneralInformation } from './sections/generalInformation/GeneralInformation';
import { PackageChoice } from './sections/packageChoice/PackageChoice';
import { PimObjectContainer } from './sections/pimObject/PimObjectContainer';

export const General = ({ isSidebarVisible, onSidebarOpen }: GeneralProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'sales_details.general.title' })} />
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Box mt={3} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <GeneralInformation />
          <Box mt={3.25} />
          <PimObjectContainer />
          <Box mt={3.25} />
          <PackageChoice />
        </Grid>
      </Page>
    </>
  );
};
