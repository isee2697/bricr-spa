import React, { useState, useCallback } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { Grid, Box } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';

import { DmsProps } from './Dms.types';
import { useStyles } from './Dms.styles';
import { DmsSidebarMenu } from './dmsSidebarMenu/DmsSidebarMenu';
import { DmsHeader } from './dmsHeader/DmsHeader';
import { DmsDashboard } from './dmsDashboard/DmsDashboard';
import { DmsDocumentsContainer } from './dmsDocuments/DmsDocumentsContainer';
import { DmsTemplatesContainer } from './dmsTemplates/DmsTemplatesContainer';
import { DmsContentBlocks } from './dmsContentBlocks/DmsContentBlocks';
import { DmsImageLibrary } from './dmsImageLibrary/DmsImageLibrary';

export const Dms = ({ dms, breadcrumbs, path, entityType }: DmsProps) => {
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const { state } = useLocation<{ newlyAdded: boolean }>();

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  return (
    <EntityTypeProvider entityType={entityType}>
      <Grid container spacing={0}>
        {breadcrumbs}
        <DmsSidebarMenu
          onHide={handleSidebarHide}
          isVisible={isSidebarVisible}
          onAddFolder={(name: string) => {
            // TODO: add new folder
          }}
        />
        <Box flex={1}>
          <Grid container className={classes.contentWrapper}>
            <DmsHeader onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
            <Box className={classes.content}>
              {!!dms && (
                <Switch>
                  <Route path={`${path}/dashboard`} render={() => <DmsDashboard dms={dms} />} />
                  <Route path={`${path}/documents`} render={() => <DmsDocumentsContainer dms={dms} />} />
                  <Route path={`${path}/templates`} render={() => <DmsTemplatesContainer />} />
                  <Route path={`${path}/content-blocks`} render={() => <DmsContentBlocks />} />
                  <Route path={`${path}/image-library`} render={() => <DmsImageLibrary />} />
                  <Redirect to={{ pathname: `${path}/dashboard`, state }} />
                </Switch>
              )}
            </Box>
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
