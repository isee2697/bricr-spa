import React from 'react';
import arrayMutators from 'final-form-arrays';
import { Redirect, Route, Switch } from 'react-router';

import { AutosaveForm } from 'ui/organisms';
import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsSectionProps } from '../../PimDetails.types';

import { Specification } from './Specification';
import { Advanced } from './advanced/Advanced';

export const SpecificationContainer = ({ title, isSidebarVisible, onOpenSidebar, pim }: PimDetailsSectionProps) => {
  const handleSave = () => Promise.resolve({ error: false });

  return (
    <AutosaveForm
      initialValues={pim || undefined}
      onSave={handleSave}
      subscription={{}}
      mutators={{ ...arrayMutators }}
    >
      <Switch>
        <Route
          default
          path={`${AppRoute.pimDetails}/specification`}
          exact
          render={() => (
            <Specification title={title} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} />
          )}
        />
        <Route path={`${AppRoute.pimDetails}/specification/advanced`} exact render={() => <Advanced />} />
        <Redirect to={`${AppRoute.pimDetails}/services`} />
      </Switch>
    </AutosaveForm>
  );
};
