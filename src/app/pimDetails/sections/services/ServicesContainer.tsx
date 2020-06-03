import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { AddIcon } from 'ui/atoms/icons';

import { Meters } from './meters/Meters';
import { Services } from './Services';
import { AddMeterModalContainer } from './addMeterModal/AddMeterModalContainer';

export const ServicesContainer = ({ title, isSidebarVisible, onOpenSidebar, pim }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const [isMeterModalOpen, setIsMeterModalOpen] = useState(false);
  const handleSave = () => Promise.resolve({ error: false });

  if (!pim) {
    return null;
  }

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        action={
          <Box display="flex">
            <Button
              color="primary"
              variant="contained"
              startIcon={<AddIcon color="inherit" />}
              onClick={() => setIsMeterModalOpen(true)}
              size="small"
            >
              {formatMessage({ id: 'pim_details.services.add_new_meter' })}
            </Button>
          </Box>
        }
      />
      <Switch>
        <Route
          default
          path={`${AppRoute.pimDetails}/services`}
          exact
          render={() => (
            <Services
              isSidebarVisible={isSidebarVisible}
              onOpenSidebar={onOpenSidebar}
              title={title}
              pim={pim}
              onSave={handleSave}
            />
          )}
        />
        <Route
          path={`${AppRoute.pimDetails}/services/:meterType`}
          exact
          render={path => (
            <Meters
              type={path.match.params.meterType}
              isSidebarVisible={isSidebarVisible}
              onOpenSidebar={onOpenSidebar}
              pim={pim}
              onSave={handleSave}
              linkedPerson={{
                name: 'Christian van Gils',
                avatar: 'https://source.unsplash.com/featured/?person',
                office: 'Vesteging Weert',
                company: 'Hendriks Makelaardij',
                phone: '06-48764044',
                email: 'christian@cubiceyes.com',
                onChangeClick: () => {},
              }}
            />
          )}
        />
        <Redirect to={`${AppRoute.pimDetails}/services`} />
      </Switch>
      <AddMeterModalContainer isOpened={isMeterModalOpen} onClose={() => setIsMeterModalOpen(false)} />
    </>
  );
};