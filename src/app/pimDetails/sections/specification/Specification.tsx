import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Grid } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsHeader } from '../../pimDetailsHeader/PimDetailsHeader';
import { PimDetailsSectionProps } from '../../PimDetails.types';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { useLocale } from 'hooks';

import { SpecificationGeneralContainer } from './specificationGeneral/SpecificationGeneralContainer';
import { AdvancedContainer } from './advanced/AdvancedContainer';
import { LinkedPropertyContainer } from './linkedProperty/LinkedPropertyContainer';
import { InspectionContainer } from './inspection/InspectionContainer';

export const Specification = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <NavBreadcrumb
        urlBase={AppRoute.pimDetails}
        to="/specification"
        title={formatMessage({ id: 'pim_details.specification.title' })}
      />
      <Grid xs={12} item>
        <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      </Grid>
      <Switch>
        <Route
          default
          path={`${AppRoute.pimDetails}/specification`}
          exact
          render={() => <SpecificationGeneralContainer />}
        />
        <Route path={`${AppRoute.pimDetails}/specification/advanced`} exact render={() => <AdvancedContainer />} />
        <Route
          path={`${AppRoute.pimDetails}/specification/linked-property`}
          exact
          render={() => <LinkedPropertyContainer />}
        />
        <Route path={`${AppRoute.pimDetails}/specification/inspection`} exact render={() => <InspectionContainer />} />
        <Redirect to={`${AppRoute.pimDetails}/specification`} />
      </Switch>
    </>
  );
};
