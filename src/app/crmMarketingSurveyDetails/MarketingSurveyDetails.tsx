import React, { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Box, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { CardWithBody, Page } from 'ui/templates';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { ExitIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLayout } from 'context/layout';

import { MarketingSurveyDetailsProps, MarketingSurveyDetailsStepType } from './MarketingSurveyDetails.types';
import { SidebarMenu } from './sidebarMenu/SidebarMenu';
import { General } from './sections/general/General';
import { Branding } from './sections/branding/Branding';

export const MarketingSurveyDetails = ({ path, data, breadcrumbs }: MarketingSurveyDetailsProps) => {
  const { formatMessage } = useLocale();
  const urlParams = useParams();
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();
  const [currentStep, setCurrentStep] = useState(1);
  const { push } = useHistory();

  const handleSidebarHide = useCallback(() => {
    setSidebarMenuVisible(!isSidebarMenuVisible);
  }, [isSidebarMenuVisible, setSidebarMenuVisible]);

  const handleSidebarOpen = useCallback(() => {
    setSidebarMenuVisible(!isSidebarMenuVisible);
  }, [isSidebarMenuVisible, setSidebarMenuVisible]);

  const { name } = data;

  return (
    <>
      {breadcrumbs}
      <Grid container spacing={0}>
        <SidebarMenu
          isVisible={isSidebarMenuVisible}
          onHide={handleSidebarHide}
          data={data}
          activeItem={currentStep}
          onChangeStep={setCurrentStep}
        />
        <NavBreadcrumb
          title={formatMessage({ id: 'crm.details.marketing_survey.title' })}
          to="/marketing_survey"
          urlBase={joinUrlParams(path, urlParams)}
        />
        <Grid
          item
          xs={12}
          sm={isSidebarMenuVisible ? 8 : 12}
          md={isSidebarMenuVisible ? 9 : 12}
          lg={isSidebarMenuVisible ? 10 : 12}
        >
          <Box width="100%" pl={3} pr={3} pt={4}>
            <CrmRelationsDetailsHeader
              isSidebarVisible={isSidebarMenuVisible}
              onSidebarOpen={handleSidebarOpen}
              actions={
                <IconButton
                  size="small"
                  variant="rounded"
                  onClick={() => push(joinUrlParams(`${AppRoute.crmRelationsDetails}/marketing_survey`, urlParams))}
                >
                  <ExitIcon color="inherit" />
                </IconButton>
              }
            />
            <Page title={name} titleActions={<></>}>
              {data.steps[currentStep] && (
                <CardWithBody titleId={`dictionaries.marketing_survey_step_type.${data.steps[currentStep].type}`}>
                  {data.steps[currentStep].type === MarketingSurveyDetailsStepType.General && (
                    <General data={data.steps[currentStep]} />
                  )}
                  {data.steps[currentStep].type === MarketingSurveyDetailsStepType.Branding && (
                    <Branding data={data.steps[currentStep]} />
                  )}
                </CardWithBody>
              )}
            </Page>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
