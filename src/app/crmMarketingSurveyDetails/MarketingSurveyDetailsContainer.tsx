import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Loader, NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useStateQuery } from 'hooks/useStateQuery/useStateQuery';
import { CrmGeneral, useGetCrmGeneralQuery } from 'api/types';
import { MARKETING_SURVEY_DETAIL_STEPS as mockData } from 'api/mocks/marketingSurvey';

import { MarketingSurveyDetails } from './MarketingSurveyDetails';
import { MarketingSurveyDetailsContainerProps } from './MarketingSurveyDetails.types';

export const MarketingSurveyDetailsContainer = (props: MarketingSurveyDetailsContainerProps) => {
  const { formatMessage } = useLocale();
  const { id } = useParams<{ id: string; surveyId: string }>();

  const { loading, data } = useStateQuery({
    query: useGetCrmGeneralQuery,
    variables: { id },
  });

  if (loading) {
    return <Loader />;
  }
  const { firstName, lastName } = data as CrmGeneral;

  const title = `${firstName || ''} ${lastName || ''}`;

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'header.links.crm' })} to={AppRoute.crm} />
      <NavBreadcrumb title={formatMessage({ id: `crm.type.relations` })} to={`${AppRoute.crm}?type=relations`} />
      <NavBreadcrumb title={title} urlBase={AppRoute.crmRelationsDetails} />
    </>
  );

  return <MarketingSurveyDetails {...props} data={mockData} breadcrumbs={breadcrumbs} />;
};

export default MarketingSurveyDetailsContainer;
