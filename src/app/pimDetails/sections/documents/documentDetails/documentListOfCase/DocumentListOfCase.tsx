import React, { useCallback, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';

import { Loader, Grid, Box, IconButton, Button } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { ExitIcon, AddIcon } from 'ui/atoms/icons';
import { useLocale, useModalDispatch } from 'hooks';
import { Page } from 'ui/templates';
import { useStyles } from '../DocumentDetails.styles';
import { DocumentSecurity } from '../documentSecurity/DocumentSecurity';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { DocumentListOfCaseCard, DocumentListOfCaseProps } from './DocumentListOfCase.types';
import { DocumentListOfCaseSidebarMenu } from './documentListOfCaseSidebar/DocumentListOfCaseSidebarMenu';
import { DocumentListOfCaseCommon } from './documentListOfCaseCommon/DocumentListOfCaseCommon';
import { AddLvzCardModal } from './documentListOfCaseCommon/addLvzCardModal/AddLvzCardModal';
import { AddLvzCardBody } from './documentListOfCaseCommon/addLvzCardModal/AddLvzCardModal.types';
import { AddLvzItemModal } from './documentListOfCaseCommon/addLvzItemModal/AddLvzItemModal';
import { AddLvzItemBody } from './documentListOfCaseCommon/addLvzItemModal/AddLvzItemModal.types';

export const DocumentListOfCase = ({ pimId, loading, error, data, breadcrumbs }: DocumentListOfCaseProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const pathname = AppRoute.pimDocumentDetails
    .replace(':id', pimId)
    .replace(':kind', data?.documentKind || '')
    .replace(':docId', data?.id || '');
  const { push } = useHistory();
  const { open, close } = useModalDispatch();
  const [cards, setCards] = useState<DocumentListOfCaseCard[]>([
    {
      id: 1,
      name: 'Outside',
    },
  ]);

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
                    <ExitIcon />
                  </IconButton>
                  <Box ml={2.5}>
                    <ListOptionsMenu id={data.id} onDeleteClick={() => {}} hideEditButton>
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.generate_pdf',
                        })}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.send',
                        })}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.save_as_draft',
                        })}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.copy',
                        })}
                      />
                      <ListOptionsMenuItem
                        title={formatMessage({
                          id: 'pim_details.documents.menu.archive',
                        })}
                      />
                    </ListOptionsMenu>
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
