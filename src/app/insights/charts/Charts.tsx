import React from 'react';

import { useLocale } from 'hooks';
import { NavBreadcrumb, Box } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';

import { ChartsHeader } from './header/Header';
import { CreateNewChartModalContainer } from './createNewChartModal/CreateNewChartModalContainer';
import { ChartTable } from './chartTable/ChartTable';

export const Charts = () => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.insights.charts' })} to={`${AppRoute.insights}/charts`} />
      <ChartsHeader count={4} />
      <Box mt={4} />
      <ChartTable />
      <CreateNewChartModalContainer />
    </>
  );
};
