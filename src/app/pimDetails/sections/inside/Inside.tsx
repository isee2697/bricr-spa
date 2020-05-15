import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Button, Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { InfoSection } from 'ui/molecules';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddNewFloorModalContainer } from './addNewFloorModal/AddNewFloorModalContainer';
import { Floor } from './floor/Floor';

/**
 * @TODO - add redirect when at least one floor exist
 */
export const Inside = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const isAddFloorModalOpen = useModalState('add-new-floor');
  const { close, open } = useModalDispatch();

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        action={
          <Button
            color="primary"
            startIcon={<AddIcon color="inherit" />}
            variant="contained"
            onClick={() => {
              open('add-new-floor');
            }}
            size="small"
          >
            {formatMessage({ id: AppMessages['pim_details.add_new_floor'] })}
          </Button>
        }
      />
      <Switch>
        <Route
          path={`${AppRoute.pimDetails}/inside`}
          exact
          render={() => (
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Inside" />
                <CardContent>
                  <InfoSection emoji="🤔">
                    <Typography variant="h3">
                      {formatMessage({ id: AppMessages['pim_details.inside.empty'] })}
                    </Typography>
                    <Typography variant="h3">
                      {formatMessage({ id: AppMessages['pim_details.inside.empty_description'] })}
                    </Typography>
                  </InfoSection>
                </CardContent>
              </Card>
            </Grid>
          )}
        />
        <Route
          path={`${AppRoute.pimDetails}/inside/attic`}
          exact
          render={() => (
            <Floor type="Attic" spaces={['1', '2']} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} />
          )}
        />
        <Route
          path={`${AppRoute.pimDetails}/inside/groundfloor`}
          exact
          render={() => (
            <Floor type="GroundFloor" spaces={[]} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} />
          )}
        />
        <Route
          path={`${AppRoute.pimDetails}/inside/basement`}
          exact
          render={() => (
            <Floor type="Basement" spaces={[]} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} />
          )}
        />
      </Switch>

      <AddNewFloorModalContainer isOpened={isAddFloorModalOpen} onClose={() => close('add-new-floor')} />
    </>
  );
};
