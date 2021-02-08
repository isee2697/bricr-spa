import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { DmsTemplateConfigureSettingsDetailsProps } from './DmsTemplateConfigureSettingsDetails.types';
import { DefaultConfigureSettingsDetails } from './forms/generalSettings/DefaultConfigureSettingsDetails';
import { LvzPropertyContainer } from './forms/lvzProperty/LvzPropertyContainer';
import { QuestionnaireContainer } from './forms/questionnaireProperty/QuestionnaireContainer';
import { ContractContainer } from './forms/contract/ContractContainer';

export const DmsTemplateConfigureSettingsDetails = ({ template }: DmsTemplateConfigureSettingsDetailsProps) => {
  return (
    <Switch>
      <Route
        path={`${AppRoute.dms}/templates/list_of_case/:category/:id/configureSettings`}
        render={() => <LvzPropertyContainer template={template} />}
      />
      <Route
        path={`${AppRoute.dms}/templates/questionnaire/:category/:id/configureSettings`}
        render={() => <QuestionnaireContainer template={template} />}
      />
      <Route
        path={`${AppRoute.dms}/templates/contract/:category/:id/configureSettings`}
        render={() => <ContractContainer template={template} />}
      />
      <Route render={() => <DefaultConfigureSettingsDetails template={template} />} />
    </Switch>
  );
};
