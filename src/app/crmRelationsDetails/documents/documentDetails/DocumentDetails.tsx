import React, { ReactNode, useCallback, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Loader, Grid, Box, Button } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { UploadModal } from 'ui/organisms';

import { DocumentSecurity } from './documentSecurity/DocumentSettings';
import { DocumentDetailsProps } from './DocumentDetails.types';
import { DocumentDetailsSidebarMenu } from './documentDetailsSidebar/DocumentDetailsSidebarMenu';
import { ActualDocument } from './actualDocument/ActualDocument';

export const DocumentDetails = ({ loading, data, breadcrumbs }: DocumentDetailsProps) => {
  const { formatMessage } = useLocale();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const [dialog, setDialog] = useState<ReactNode | null>(null);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  const handleShowAddFolder = () =>
    setDialog(
      <UploadModal
        isOpened={true}
        onClose={() => setDialog(null)}
        onUpload={files => {
          setDialog(null);
        }}
      />,
    );

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return null;
  }

  return (
    <Grid container spacing={0} wrap="nowrap">
      {breadcrumbs}
      <DocumentDetailsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} title={data.name} />
      <Box flex={1} padding={3}>
        <CrmRelationsDetailsHeader
          onSidebarOpen={handleSidebarOpen}
          isSidebarVisible={isSidebarVisible}
          actions={
            <Button
              size="small"
              color="primary"
              variant="contained"
              startIcon={<AddIcon color="inherit" />}
              onClick={handleShowAddFolder}
            >
              {formatMessage({ id: 'crm.details.documents.generate_document' })}
            </Button>
          }
        />
        <Page withoutHeader>
          <Switch>
            <Route
              path={[AppRoute.crmRelationsDocumentDetails, 'actual-document'].join('/')}
              render={() => <ActualDocument document={data} />}
            />
            <Route
              path={[AppRoute.crmRelationsDocumentDetails, 'document-settings'].join('/')}
              render={() => <DocumentSecurity title={data.name} />}
            />
            <Route
              path={[AppRoute.crmRelationsDocumentDetails, 'previous-versions'].join('/')}
              render={() => <DocumentSecurity title={data.name} />}
            />
            <Route
              path={[AppRoute.crmRelationsDocumentDetails, 'audit-trail'].join('/')}
              render={() => <DocumentSecurity title={data.name} />}
            />
            <Redirect to={[AppRoute.crmRelationsDocumentDetails, 'actual-document'].join('/')} />
          </Switch>
        </Page>
      </Box>

      {dialog}
    </Grid>
  );
};
