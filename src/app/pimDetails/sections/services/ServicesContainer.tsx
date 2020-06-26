import React, { useState } from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { AddIcon } from 'ui/atoms/icons';
import { PimServices, PimServicesDocument, usePimServicesQuery, useUpdateServiceMutation } from 'api/types';
import { dateToYear } from 'form/fields';
import { ServiceForm } from 'app/pimDetails/sections/services/Services.types';

import { MetersContainer } from './meters/MetersContainer';
import { Services } from './Services';
import { AddMeterModalContainer } from './addMeterModal/AddMeterModalContainer';

export const ServicesContainer = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const [isMeterModalOpen, setIsMeterModalOpen] = useState(false);
  const { data } = usePimServicesQuery({ variables: { id } });
  const [updateService] = useUpdateServiceMutation();

  const onEdit = async (body: ServiceForm) => {
    try {
      const { data } = await updateService({
        variables: {
          input: {
            pimId: id,
            serviceId: body.id,
            name: body.name,
            description: body.description,
            yearOfInstallation: dateToYear(body.yearOfInstallation),
            ownership: body.ownership,
            configuration: body.configuration,
          },
        },
        refetchQueries: [
          {
            query: PimServicesDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!data) {
        throw new Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  if (!data || !data.getPimServices) {
    return null;
  }

  const pimServices = data?.getPimServices as PimServices;

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
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
          default
          path={`${AppRoute.pimDetails}/services`}
          exact
          render={() => (
            <Services
              isSidebarVisible={isSidebarVisible}
              onOpenSidebar={onOpenSidebar}
              title={title}
              pimServices={pimServices}
              onSave={onEdit}
            />
          )}
        />
        <Route
          path={`${AppRoute.pimDetails}/services/:meterType`}
          exact
          render={path => (
            <MetersContainer
              type={path.match.params.meterType}
              isSidebarVisible={isSidebarVisible}
              onOpenSidebar={onOpenSidebar}
              pimServices={pimServices}
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
