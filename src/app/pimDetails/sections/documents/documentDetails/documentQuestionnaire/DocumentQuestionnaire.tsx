import React, { useCallback, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Loader, Grid, Box, Button } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale, useModalDispatch } from 'hooks';
import { useStyles } from '../DocumentDetails.styles';
import { DocumentSecurity } from '../documentSecurity/DocumentSecurity';

import { DocumentQuestionnaireProps } from './DocumentQuestionnaire.types';
import { DocumentQuestionnaireSidebarMenu } from './documentQuestionnaireSidebar/DocumentQuestionnaireSidebarMenu';
import { DocumentQuestionnaireFlow } from './documentQuestionnaireFlow/DocumentQuestionnaireFlow';
import { AddQuestionnaireGroupModal } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal';
import { AddQuestionnaireItemModal } from './addQuestionnaireItemModal/AddQuestionnaireItemModal';

export const DocumentQuestionnaire = ({
  pimId,
  loading,
  error,
  data,
  breadcrumbs,
  onAddNewDocumentQuestionnaireGroup,
  onAddNewDocumentQuestionnaireItem,
}: DocumentQuestionnaireProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const [currentStep, setCurrentStep] = useState(3);
  const { open } = useModalDispatch();

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!pimId || !data) {
    return null;
  }

  return (
    <>
      {breadcrumbs}
      <Grid container spacing={0}>
        <DocumentQuestionnaireSidebarMenu
          isVisible={isSidebarVisible}
          onHide={handleSidebarHide}
          data={data}
          activeItem={currentStep}
          onChangeStep={setCurrentStep}
        />
        <Box flex={1}>
          <Grid container className={classes.content}>
            <PimDetailsHeader
              title={data?.name}
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={handleSidebarOpen}
              action={
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon color="inherit" />}
                  onClick={() => open('add_questionnaire_group')}
                >
                  {formatMessage({ id: 'pim_details.documents.add_questionnaire_group' })}
                </Button>
              }
            />
            <Switch>
              <Route
                path={[AppRoute.pimDocumentDetails, 'security'].join('/')}
                render={() => <DocumentSecurity title={data.name} />}
              />
              <Route
                path={AppRoute.pimDocumentDetails}
                render={() => (
                  <DocumentQuestionnaireFlow
                    stepInfo={data.steps[currentStep]}
                    stepIndex={currentStep}
                    documentKind={data.documentKind}
                  />
                )}
              />
            </Switch>
          </Grid>
        </Box>
      </Grid>
      <AddQuestionnaireGroupModal onSubmit={onAddNewDocumentQuestionnaireGroup} />
      <AddQuestionnaireItemModal onSubmit={onAddNewDocumentQuestionnaireItem} />
    </>
  );
};
