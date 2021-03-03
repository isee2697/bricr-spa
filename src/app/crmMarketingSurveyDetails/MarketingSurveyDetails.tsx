import React, { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Page } from 'ui/templates';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { ExitIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { MarketingSurveyDetailsProps, MarketingSurveyDetailsStepType } from './MarketingSurveyDetails.types';
import { SidebarMenu } from './sidebarMenu/SidebarMenu';
import { General } from './sections/general/General';
import { Branding } from './sections/branding/Branding';

export const MarketingSurveyDetails = ({ path, data, breadcrumbs }: MarketingSurveyDetailsProps) => {
  const { formatMessage } = useLocale();
  const urlParams = useParams();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const { push } = useHistory();

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  const { name } = data;

  return (
    <>
      {breadcrumbs}
      <Grid container spacing={0}>
        <SidebarMenu
          isVisible={isSidebarVisible}
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
          sm={isSidebarVisible ? 8 : 12}
          md={isSidebarVisible ? 9 : 12}
          lg={isSidebarVisible ? 10 : 12}
        >
          <Box width="100%" pl={3} pr={3} pt={4}>
            <CrmRelationsDetailsHeader
              isSidebarVisible={isSidebarVisible}
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
                <Card>
                  <CardHeader
                    title={formatMessage({
                      id: `dictionaries.marketing_survey_step_type.${data.steps[currentStep].type}`,
                    })}
                  />
                  <CardContent>
                    {data.steps[currentStep].type === MarketingSurveyDetailsStepType.General && (
                      <General data={data.steps[currentStep]} />
                    )}
                    {data.steps[currentStep].type === MarketingSurveyDetailsStepType.Branding && (
                      <Branding data={data.steps[currentStep]} />
                    )}
                  </CardContent>
                </Card>
              )}
            </Page>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
