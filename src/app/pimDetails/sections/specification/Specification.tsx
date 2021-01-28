import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Grid } from 'ui/atoms';
import { PimDetailsHeader } from '../../pimDetailsHeader/PimDetailsHeader';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';

import { SpecificationGeneralContainer } from './specificationGeneral/SpecificationGeneralContainer';
import { AdvancedContainer } from './advanced/AdvancedContainer';
import { LinkedPropertyContainer } from './linkedProperty/LinkedPropertyContainer';
import { InspectionContainer } from './inspection/InspectionContainer';

export const Specification = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();

  return (
    <>
      <NavBreadcrumb
        urlBase={baseUrl}
        to="/specification"
        title={formatMessage({ id: 'pim_details.specification.title' })}
      />
      <Grid xs={12} item>
        <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      </Grid>
      <Switch>
        <Route default path={`${baseUrl}/specification`} exact render={() => <SpecificationGeneralContainer />} />
        <Route path={`${baseUrl}/specification/advanced`} exact render={() => <AdvancedContainer />} />
        <Route path={`${baseUrl}/specification/linked-property`} exact render={() => <LinkedPropertyContainer />} />
        <Route path={`${baseUrl}/specification/inspection`} exact render={() => <InspectionContainer />} />
        <Redirect to={`${baseUrl}/specification`} />
      </Switch>
    </>
  );
};

export default Specification;
