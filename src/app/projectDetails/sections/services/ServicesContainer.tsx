import React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router';

import { dateToYear } from 'form/fields';
import { NavBreadcrumb, Button } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import {
  PimServices,
  GetNcpServicesDocument,
  SectionWithDescriptionType,
  useGetNcpServicesQuery,
  useUpdateDescriptionMutation,
  useUpdateNcpServiceMutation,
} from 'api/types';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { ServiceForm } from './Services.types';
import { Services } from './Services';

export const ServicesContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const { data } = useGetNcpServicesQuery({ variables: { id } });
  const [updateNcpServices] = useUpdateNcpServiceMutation();
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
            query: GetNcpServicesDocument,
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
      const { data } = await updateNcpServices({
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
            query: GetNcpServicesDocument,
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

  if (!data || !data.getNcpServices) {
    return null;
  }
  const ncpServices = data?.getNcpServices as PimServices;

  return (
    <>
      <NavBreadcrumb
        urlBase={AppRoute.projectDetails}
        to="/services"
        title={formatMessage({ id: 'pim_details.services.title' })}
      />
      <ProjectDetailsHeader
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddIcon color="inherit" />}
            onClick={() => {}}
            size="small"
          >
            {formatMessage({ id: 'pim_details.services.add_new_meter' })}
          </Button>
        }
      />
      <Switch>
        <Route
          default
          path={`${AppRoute.projectDetails}/services`}
          exact
          render={() => (
            <Services
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={onSidebarOpen}
              ncpServices={ncpServices}
              onSave={onEdit}
              onDescriptionUpdate={onDescriptionUpdate}
            />
          )}
        />
        <Redirect to={`${AppRoute.projectDetails}/services`} />
      </Switch>
    </>
  );
};
