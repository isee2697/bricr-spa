import React, { useState, useCallback } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { Grid, Box } from 'ui/atoms';
import { EntityTypeProvider } from 'app/shared/entityType';
import { DmsDetailsSidebarMenu } from 'app/shared/dms/sideBarMenu/SideBarMenu';

import { DmsProps } from './Dms.types';
import { useStyles } from './Dms.styles';
import { DmsSidebarMenu } from './dmsSidebarMenu/DmsSidebarMenu';
import { DmsHeader } from './dmsHeader/DmsHeader';
import { DmsDashboard } from './dmsDashboard/DmsDashboard';
import { DmsContentBlocksContainer } from './dmsContentBlocks/DmsContentBlocksContainer';
import { DmsImageLibrary } from './dmsImageLibrary/DmsImageLibrary';
import { DmsTemplateDetailsContainer } from './dmsTemplateDetails/DmsTemplateDetailsContainer';
import { DmsContentBlockDetailsContainer } from './dmsContentBlockDetails/DmsContentBlockDetailsContainer';
import { DmsPims } from './dmsPims/DmsPims';
import { DmsTemplatesList } from './dmsTemplates/DmsTemplatesList';
import { DmsCrms } from './dmsCrms/DmsCrms';

export const Dms = ({ dms, breadcrumbs, path, entityType }: DmsProps) => {
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const { state } = useLocation<{ newlyAdded: boolean }>();
  const [showImages, setShowImages] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  const handleChangeShowImages = () => {
    setShowImages(!showImages);
    setShowAttachments(false);
  };

  const handleChangeShowAttachments = () => {
    setShowImages(false);
    setShowAttachments(!showAttachments);
  };

  return (
    <EntityTypeProvider entityType={entityType}>
      <Grid container wrap="nowrap">
        {breadcrumbs}
        <Switch>
          <Route
            path={[`${path}/templates/:type/:category/:id`, `${path}/contentBlocks/:type/:id`]}
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
                  <Route
                    path={`${path}/templates/:type/:category/:id`}
                    render={() => (
                      <DmsTemplateDetailsContainer
                        showImages={showImages}
                        onChangeShowImages={handleChangeShowImages}
                        showAttachments={showAttachments}
                        onChangeShowAttachments={handleChangeShowAttachments}
                      />
                    )}
                  />
                  <Route path={`${path}/crm/:type`} render={() => <DmsCrms dms={dms} />} />
                  <Route path={`${path}/templates/:type`} render={() => <DmsTemplatesList />} />
                  <Route exact path={`${path}/contentBlocks/:type`} render={() => <DmsContentBlocksContainer />} />
                  <Route path={`${path}/contentBlocks/:type/:id`} render={() => <DmsContentBlockDetailsContainer />} />
                  <Route path={`${path}/imageLibrary`} render={() => <DmsImageLibrary />} />
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
