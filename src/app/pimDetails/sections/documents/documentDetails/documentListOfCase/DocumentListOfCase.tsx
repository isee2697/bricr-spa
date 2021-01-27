import React, { ReactElement, useCallback, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

import { Loader, Grid, Box, IconButton, Menu, MenuItem, Typography, Button } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { MenuIcon, DeleteIcon, HistoryIcon, AddIcon, LeaveIcon } from 'ui/atoms/icons';
import { useLocale, useModalDispatch } from 'hooks';
import { Page } from 'ui/templates';
import { useStyles } from '../DocumentDetails.styles';
import { DocumentSecurity } from '../documentSecurity/DocumentSecurity';

import { DocumentListOfCaseCard, DocumentListOfCaseProps } from './DocumentListOfCase.types';
import { DocumentListOfCaseSidebarMenu } from './documentListOfCaseSidebar/DocumentListOfCaseSidebarMenu';
import { DocumentListOfCaseCommon } from './documentListOfCaseCommon/DocumentListOfCaseCommon';
import { AddLvzCardModal } from './documentListOfCaseCommon/addLvzCardModal/AddLvzCardModal';
import { AddLvzCardBody } from './documentListOfCaseCommon/addLvzCardModal/AddLvzCardModal.types';
import { AddLvzItemModal } from './documentListOfCaseCommon/addLvzItemModal/AddLvzItemModal';
import { AddLvzItemBody } from './documentListOfCaseCommon/addLvzItemModal/AddLvzItemModal.types';

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

export const DocumentListOfCase = ({ pimId, loading, error, data, breadcrumbs }: DocumentListOfCaseProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const pathname = AppRoute.pimDocumentDetails
    .replace(':id', pimId)
    .replace(':kind', data?.documentKind || '')
    .replace(':docId', data?.id || '');
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const { push } = useHistory();
  const { open, close } = useModalDispatch();
  const [cards, setCards] = useState<DocumentListOfCaseCard[]>([
    {
      id: 1,
      name: 'Outside',
    },
  ]);

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

  const handleAddNewLvzCard = async (values: AddLvzCardBody) => {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        name: values.name,
        items: [],
      },
    ]);

    close('add-lvz-card');

    return undefined;
  };

  const handleAddNewItem = async (cardId: number, values: AddLvzItemBody) => {
    setCards([
      ...cards.map(card =>
        card.id === cardId
          ? {
              ...card,
              items: [
                ...(card?.items || []),
                {
                  id: (card.items?.length || 0) + 1,
                  description: values.description,
                },
              ],
            }
          : card,
      ),
    ]);

    close('add-lvz-item');

    return true;
  };

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
        <DocumentListOfCaseSidebarMenu
          isVisible={isSidebarVisible}
          onHide={handleSidebarHide}
          title={data?.name}
          kind={data?.documentKind}
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
                  onClick={() => open('add-lvz-card')}
                >
                  {formatMessage({ id: 'pim_details.documents.add_lvz_card' })}
                </Button>
              }
            />
            <Page
              title={formatMessage({ id: 'pim_details.documents.list_of_case' })}
              titleActions={
                <Box display="flex">
                  <IconButton onClick={handleGoBack} variant="rounded" size="small">
                    <LeaveIcon />
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
            >
              <Box mt={3} width="100%">
                <Switch>
                  <Route
                    path={[AppRoute.pimDocumentDetails, 'data'].join('/')}
                    render={() => <DocumentListOfCaseCommon cards={cards} />}
                  />
                  <Route
                    path={[AppRoute.pimDocumentDetails, 'security'].join('/')}
                    render={() => <DocumentSecurity title={data.name} />}
                  />
                  <Redirect to={[pathname, 'data'].join('/')} />
                </Switch>
              </Box>
            </Page>
          </Grid>
        </Box>
      </Grid>
      <AddLvzCardModal onSubmit={handleAddNewLvzCard} />
      <AddLvzItemModal onSubmit={handleAddNewItem} />
    </>
  );
};
