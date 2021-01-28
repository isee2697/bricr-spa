import React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import {
  PimServices,
  PimServicesDocument,
  SectionWithDescriptionType,
  usePimServicesQuery,
  useUpdateDescriptionMutation,
  useUpdateServiceMutation,
} from 'api/types';
import { dateToYear } from 'form/fields';
import { ServiceForm } from 'app/pimDetails/sections/services/Services.types';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';

import { Services } from './Services';

export const ServicesContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const { data } = usePimServicesQuery({ variables: { id } });
  const [updatePimService] = useUpdateServiceMutation();
  const [updateDescription] = useUpdateDescriptionMutation();

  const onDescriptionUpdate = async (body: { description: string }) => {
    try {
      updateDescription({
        variables: {
          input: {
            ...body,
            pimId: id,
            section: SectionWithDescriptionType.Services,
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

      return undefined;
    } catch {
      return { error: true };
    }
  };

  const onEdit = async (body: ServiceForm) => {
    try {
      const { data } = await updatePimService({
        variables: {
          input: {
            parentId: id,
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
      <NavBreadcrumb
        urlBase={AppRoute.pimDetails}
        to="/services"
        title={formatMessage({ id: 'pim_details.services.title' })}
      />
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <Switch>
        <Route
          default
          path={`${AppRoute.pimDetails}/services`}
          exact
          render={() => (
            <Services
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={onSidebarOpen}
              title={title}
              pimServices={pimServices}
              onSave={onEdit}
              onDescriptionUpdate={onDescriptionUpdate}
            />
          )}
        />
        <Redirect to={`${AppRoute.pimDetails}/services`} />
      </Switch>
    </>
  );
};

export default ServicesContainer;
