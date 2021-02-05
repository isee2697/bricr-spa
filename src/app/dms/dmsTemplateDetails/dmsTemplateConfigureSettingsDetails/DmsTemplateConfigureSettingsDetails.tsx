import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { DmsTemplateConfigureSettingsDetailsProps } from './DmsTemplateConfigureSettingsDetails.types';
import { DefaultConfigureSettingsDetails } from './forms/generalSettings/DefaultConfigureSettingsDetails';
import { LvzPropertyContainer } from './forms/lvzProperty/LvzPropertyContainer';

export const DmsTemplateConfigureSettingsDetails = ({ template }: DmsTemplateConfigureSettingsDetailsProps) => {
  return (
    <Switch>
      <Route
        path={`${AppRoute.dms}/templates/list_of_case/:category/:id/configureSettings`}
        render={() => <LvzPropertyContainer template={template} />}
      />
      <Route render={() => <DefaultConfigureSettingsDetails template={template} />} />
    </Switch>
  );
};
