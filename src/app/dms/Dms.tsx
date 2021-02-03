import React, { useState, useCallback } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { Grid, Box } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';

import { DmsProps } from './Dms.types';
import { useStyles } from './Dms.styles';
import { DmsSidebarMenu } from './dmsSidebarMenu/DmsSidebarMenu';
import { DmsHeader } from './dmsHeader/DmsHeader';
import { DmsDashboard } from './dmsDashboard/DmsDashboard';
import { DmsTemplatesContainer } from './dmsTemplates/DmsTemplatesContainer';
import { DmsContentBlocksContainer } from './dmsContentBlocks/DmsContentBlocksContainer';
import { DmsImageLibrary } from './dmsImageLibrary/DmsImageLibrary';
import { DmsTemplateDetailsContainer } from './dmsTemplateDetails/DmsTemplateDetailsContainer';
import { DmsDetailsSidebarMenu } from './dmsDetailsSidebarMenu/dmsDetailsSidebarMenu';
import { DmsContentBlockDetailsContainer } from './dmsContentBlockDetails/DmsContentBlockDetailsContainer';
import { DmsPims } from './dmsPims/DmsPims';

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
      <Grid container wrap="nowrap">
        {breadcrumbs}
        <Switch>
          <Route
            path={[`${path}/templates/:id`, `${path}/content-blocks/:id`]}
            render={() => <DmsDetailsSidebarMenu onHide={handleSidebarHide} isVisible={isSidebarVisible} />}
          />
          <Route
            render={() => (
              <DmsSidebarMenu
                onHide={handleSidebarHide}
                isVisible={isSidebarVisible}
                onAddFolder={(name: string) => {
                  // TODO: add new folder
                }}
              />
            )}
          />
        </Switch>
        <Box flex={1}>
          <Grid container className={classes.contentWrapper}>
            <DmsHeader onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
            <Box className={classes.content}>
              {!!dms && (
                <Switch>
                  <Route path={`${path}/dashboard`} render={() => <DmsDashboard dms={dms} />} />
                  <Route path={`${path}/pim/:type`} render={() => <DmsPims dms={dms} />} />
                  <Route path={`${path}/templatesEmail`} render={() => <></>} />
                  <Route path={`${path}/contentBlocks`} render={() => <></>} />
                  <Route path={`${path}/imageLibrary`} render={() => <></>} />
                  <Route exact path={`${path}/templates`} render={() => <DmsTemplatesContainer />} />
                  <Route path={`${path}/templates/:id`} render={() => <DmsTemplateDetailsContainer />} />
                  <Route exact path={`${path}/content-blocks`} render={() => <DmsContentBlocksContainer />} />
                  <Route path={`${path}/content-blocks/:id`} render={() => <DmsContentBlockDetailsContainer />} />
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
