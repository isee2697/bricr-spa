import React, { useState, useCallback } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { Grid, Box } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';

import { DmsProps } from './Dms.types';
import { useStyles } from './Dms.styles';
import { DmsSidebarMenu } from './dmsSidebarMenu/DmsSidebarMenu';
import { DmsHeader } from './dmsHeader/DmsHeader';
import { DmsDashboard } from './dmsDashboard/DmsDashboard';
import { DmsDocuments } from './dmsDocuments/DmsDocuments';
import { DmsTemplates } from './dmsTemplates/DmsTemplates';
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
        <DmsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />
        <Box flex={1}>
          <Grid container className={classes.content}>
            <DmsHeader onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
            {!!dms && (
              <Switch>
                <Route path={`${path}/dashboard`} render={() => <DmsDashboard dms={dms} />} />
                <Route path={`${path}/documents`} render={() => <DmsDocuments />} />
                <Route path={`${path}/templates`} render={() => <DmsTemplates />} />
                <Route path={`${path}/content-blocks`} render={() => <DmsContentBlocks />} />
                <Route path={`${path}/image-library`} render={() => <DmsImageLibrary />} />
                <Redirect to={{ pathname: `${path}/dashboard`, state }} />
              </Switch>
            )}
          </Grid>
        </Box>
      </Grid>
    </EntityTypeProvider>
  );
};
