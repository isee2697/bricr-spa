import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { AddIcon } from 'ui/atoms/icons';
import { Meter, MetersMeta } from 'api/types';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';

import { MeterTypeContainer } from './metersType/MeterTypeContainer';
import { AddMeterModalContainer } from './addMeterModal/AddMeterModalContainer';
import { MetersInfoContainer } from './info/MetersInfoContainer';
import { PimMetersProps } from './Meters.types';

export const Meters = ({ title, isSidebarVisible, onSidebarOpen, data }: PimMetersProps) => {
  const { formatMessage } = useLocale();
  const [isMeterModalOpen, setIsMeterModalOpen] = useState(false);
  const [isMeterAdded, setMeterAdded] = useState(false);

  const onAddMeter = () => {
    setMeterAdded(true);
  };

  const meters = data?.meters || ([] as Meter[]);
  const meterMeta = data?.metersMeta as MetersMeta;

  return (
    <>
      <NavBreadcrumb
        urlBase={AppRoute.pimDetails}
        to="/meters"
        title={formatMessage({ id: 'pim_details.meters.title' })}
      />
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddIcon color="inherit" />}
            onClick={() => setIsMeterModalOpen(true)}
            size="small"
          >
            {formatMessage({ id: 'pim_details.services.add_new_meter' })}
          </Button>
        }
      />
      <Switch>
        <Route
          path={`${AppRoute.pimDetails}/meters/:meterType`}
          exact
          render={path => (
            <MeterTypeContainer
              isMeterAdded={isMeterAdded}
              type={path.match.params.meterType}
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={onSidebarOpen}
              pimMeters={meters}
              pimMetersMeta={meterMeta}
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
        <Route
          path={`${AppRoute.pimDetails}/meters`}
          exact
          render={() => (
            <MetersInfoContainer description={meterMeta?.description || undefined} hasMeters={meters.length > 0} />
          )}
        />
      </Switch>
      <AddMeterModalContainer
        isOpened={isMeterModalOpen}
        onClose={() => setIsMeterModalOpen(false)}
        onAddMeter={onAddMeter}
      />
    </>
  );
};
