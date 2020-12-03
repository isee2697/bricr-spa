import React, { ReactElement, useCallback, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { Loader, Grid, Box, IconButton, Menu, MenuItem, Typography } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { UploadIcon, MenuIcon, DeleteIcon, HistoryIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { useStyles } from '../DocumentDetails.styles';
import { DocumentSecurity } from '../documentSecurity/DocumentSecurity';

import { DocumentQuestionnaireProps } from './DocumentQuestionnaire.types';
import { DocumentQuestionnaireSidebarMenu } from './documentQuestionnaireSidebar/DocumentQuestionnaireSidebarMenu';
import { DocumentQuestionnaireFlow } from './documentQuestionnaireFlow/DocumentQuestionnaireFlow';

type SubMenuItemType = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactElement;
};

const SubMenuItem = ({ title, onClick, icon }: SubMenuItemType) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.menuItem}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {icon ?? <HistoryIcon classes={{ root: classes.menuIcon }} />}
      <Box ml={2}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </MenuItem>
  );
};

export const DocumentQuestionnaire = ({ pimId, loading, error, data, breadcrumbs }: DocumentQuestionnaireProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const { push } = useHistory();
  const [currentStep, setCurrentStep] = useState(3);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  const handleGoBack = useCallback(() => {
    if (pimId) {
      push(AppRoute.pimDetails.replace(':id', pimId) + '/documents');
    }
  }, [push, pimId]);

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
                <Box display="flex">
                  <IconButton onClick={handleGoBack} variant="rounded" size="small">
                    <UploadIcon />
                  </IconButton>
                  <Box ml={3.5}>
                    <IconButton
                      className="menu-icon"
                      variant="rounded"
                      size="small"
                      selected={Boolean(menuEl)}
                      onClick={onMenuClick}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id={data.id}
                      open={Boolean(menuEl)}
                      onClose={onMenuClose}
                      anchorEl={menuEl}
                      placement="bottom-end"
                    >
                      <SubMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.generate_pdf',
                        })}
                        onClick={() => {
                          onMenuClose();
                        }}
                      />
                      <SubMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.send',
                        })}
                        onClick={() => {
                          onMenuClose();
                        }}
                      />
                      <SubMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.save_as_draft',
                        })}
                        onClick={() => {
                          onMenuClose();
                        }}
                      />
                      <SubMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.copy',
                        })}
                        onClick={() => {
                          onMenuClose();
                        }}
                      />
                      <SubMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.archive',
                        })}
                        onClick={() => {
                          onMenuClose();
                        }}
                      />
                      <SubMenuItem
                        title={formatMessage({
                          id: 'common.delete',
                        })}
                        onClick={() => {
                          onMenuClose();
                        }}
                        icon={<DeleteIcon color="secondary" />}
                      />
                    </Menu>
                  </Box>
                </Box>
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
    </>
  );
};
