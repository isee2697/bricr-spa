import React from 'react';
import { Switch, useParams, Route, Redirect } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { Security } from 'app/shared/dms/security/Security';
import { DMS_TEMPLATE_RIGHTS as documentRightsMockData } from 'api/mocks/dms-templates';
import { GeneralPageSettings } from 'app/shared/dms/generalPageSettings/GeneralPageSettings';
import { useStateQuery } from '../../../hooks/useStateQuery/useStateQuery';
import {
  GetQuestionaireDocument,
  Questionaire,
  useGetQuestionaireQuery,
  useUpdateTemplateGeneralMutation,
} from '../../../api/types';

import { DmsTemplateConfigureSettingsDetails } from './dmsTemplateConfigureSettingsDetails/DmsTemplateConfigureSettingsDetails';
import { DmsTemplateDetailsContainerProps, DocumentType } from './DmsTemplateDetailsContainer.types';

export const DmsTemplateDetailsContainer = (props: DmsTemplateDetailsContainerProps) => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string }>();
  const { loading, data: loadedData } = useStateQuery({
    query: useGetQuestionaireQuery,
    variables: { id },
  });

  const [updateGeneral] = useUpdateTemplateGeneralMutation();

  const data = loadedData as Questionaire;

  if (loading) {
    return <Loader />;
  }

  const handleSave = async () => {
    return undefined;
  };

  const handleSaveGeneral = async (form: Questionaire) => {
    try {
      await updateGeneral({
        variables: {
          input: {
            id,
            ...form,
          },
        },
        refetchQueries: [
          {
            query: GetQuestionaireDocument,
            variables: { id },
          },
        ],
      });
    } catch {
      return { error: true };
    }

    return undefined;
  };

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'dms.templates.title' })} to={AppRoute.dms + '/templates'} />
      <Switch>
        <Route
          path={`${AppRoute.dms}/templates/:type/:category/${id}/general`}
          render={() => (
            <GeneralPageSettings
              types={Object.keys(DocumentType)}
              data={data}
              onSave={handleSaveGeneral}
              updatedBy={{
                id: '0001',
                firstName: 'Christian',
                lastName: 'van Gils',
              }}
              dateUpdated={new Date().toISOString()}
            />
          )}
        />
        <Route
          path={`${AppRoute.dms}/templates/:type/:category/${id}/configureSettings`}
          render={() => <DmsTemplateConfigureSettingsDetails template={data} />}
        />
        <Route
          path={`${AppRoute.dms}/templates/:type/:category/${id}/security`}
          render={() => (
            <Security
              title={data.templateName ?? ''}
              onSave={handleSave}
              data={documentRightsMockData}
              updatedBy={{
                id: '0001',
                firstName: 'Christian',
                lastName: 'van Gils',
              }}
              dateUpdated={new Date().toISOString()}
            />
          )}
        />
        <Redirect to={`${AppRoute.dms}/templates/:type/:category/${id}/general`} />
      </Switch>
    </>
  );
};
