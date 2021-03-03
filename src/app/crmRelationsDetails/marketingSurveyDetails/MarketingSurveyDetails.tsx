import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { IconButton, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Page } from 'ui/templates';
import { ExitIcon } from 'ui/atoms/icons';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AppRoute } from 'routing/AppRoute.enum';

import { MarketingSurveyDetailsProps } from './MarketingSurveyDetails.types';

export const MarketingSurveyDetails = ({ path, onSidebarOpen, isSidebarVisible }: MarketingSurveyDetailsProps) => {
  const { formatMessage } = useLocale();
  const urlParams = useParams();
  const { push } = useHistory();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.marketing_survey.title' })}
        to="/marketing_survey"
        urlBase={joinUrlParams(path, urlParams)}
      />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <IconButton
            size="small"
            variant="rounded"
            onClick={() => push(joinUrlParams(`${AppRoute.crmRelationsDetails}/marketing_survey`, urlParams))}
          >
            <ExitIcon />
          </IconButton>
        }
      />
      <Page withoutHeader>
        <></>
      </Page>
    </>
  );
};
