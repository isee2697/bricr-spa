import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Loader, Grid, Box, IconButton } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { UploadIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { useStyles } from '../DocumentDetails.styles';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { ListOptionsMenu } from 'ui/molecules';

import { DocumentUploadedProps } from './DocumentUploaded.types';
import { DocumentUploadedSidebarMenu } from './DocumentUploadedSidebar/DocumentUploadedSidebarMenu';
import { DocumentUploadedFlow } from './documentUploadedFlow/DocumentUploadedFlow';

export const DocumentUploaded = ({ pimId, loading, error, data, breadcrumbs }: DocumentUploadedProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const { push } = useHistory();

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
        <DocumentUploadedSidebarMenu
          isVisible={isSidebarVisible}
          onHide={handleSidebarHide}
          data={data}
          title={data.name}
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
                    <ListOptionsMenu id={pimId} onDeleteClick={() => {}} hideEditButton>
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
            />
            <DocumentUploadedFlow title={data.name} />
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
