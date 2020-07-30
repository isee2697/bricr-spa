import React from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router';

import { dateToYear } from 'form/fields';
import { NavBreadcrumb, Button } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import {
  GetNcpServicesDocument,
  useGetNcpServicesQuery,
  useUpdateNcpServiceMutation,
  GetObjectTypeServicesDocument,
  useGetObjectTypeServicesQuery,
  useUpdateObjectTypeServiceMutation,
  GetNcpServicesQuery,
  GetObjectTypeServicesQuery,
  useUpdateNcpServiceDescriptionMutation,
  useUpdateObjectTypeServiceDescriptionMutation,
  NcpServices,
  ObjectTypeServices,
} from 'api/types';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { ProjectDetailsHeader } from 'app/projectDetails/projectDetailsHeader/ProjectDetailsHeader';
import { EntityType, useEntityType } from 'app/shared/entityType';

import { ServiceForm } from './ServicesGeneral.types';
import { ServicesGeneral } from './ServicesGeneral';

const getQuery = (entityType: EntityType) => {
  switch (entityType) {
    case EntityType.Project:
      return useGetNcpServicesQuery;
    case EntityType.ObjectType:
      return useGetObjectTypeServicesQuery;
    default:
      throw new Error('There is no such EntityType');
  }
};

const isNcpServicesQuery = (data: GetNcpServicesQuery | GetObjectTypeServicesQuery): data is GetNcpServicesQuery =>
  data.hasOwnProperty('getNcpServices');

const isObjectTypeServicesQuery = (
  data: GetNcpServicesQuery | GetObjectTypeServicesQuery,
): data is GetObjectTypeServicesQuery => data.hasOwnProperty('getObjectTypeServices');

export const ServicesGeneralContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const { entityType } = useEntityType();
  const useQuery = getQuery(entityType);
  const { data } = useQuery({ variables: { id } });

  const [updateNcpServices] = useUpdateNcpServiceMutation();
  const [updateNcpDescription] = useUpdateNcpServiceDescriptionMutation();

  const [updateObjectTypeServices] = useUpdateObjectTypeServiceMutation();
  const [updateObjectTypeDescription] = useUpdateObjectTypeServiceDescriptionMutation();

  const onDescriptionUpdate = async (body: { description: string }) => {
    try {
      if (entityType === EntityType.Project) {
        updateNcpDescription({
          variables: {
            input: {
              id,
              servicesDescription: body.description,
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
      }

      if (entityType === EntityType.ObjectType) {
        updateObjectTypeDescription({
          variables: {
            input: {
              id,
              servicesDescription: body.description,
            },
          },
          refetchQueries: [
            {
              query: GetObjectTypeServicesDocument,
              variables: {
                id,
              },
            },
          ],
        });
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  const onEdit = async (body: ServiceForm) => {
    try {
      if (entityType === EntityType.Project) {
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
      }

      if (entityType === EntityType.ObjectType) {
        const { data } = await updateObjectTypeServices({
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
              query: GetObjectTypeServicesDocument,
              variables: {
                id,
              },
            },
          ],
        });

        if (!data) {
          throw new Error();
        }
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  if (!data) {
    return null;
  }

  return (
    <>
      {isNcpServicesQuery(data) && (
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
                <ServicesGeneral
                  isSidebarVisible={isSidebarVisible}
                  onSidebarOpen={onSidebarOpen}
                  ncpServices={data.getNcpServices as NcpServices}
                  onSave={onEdit}
                  onDescriptionUpdate={onDescriptionUpdate}
                />
              )}
            />
            <Redirect to={`${AppRoute.projectDetails}/services`} />
          </Switch>
        </>
      )}
      {isObjectTypeServicesQuery(data) && (
        <>
          <NavBreadcrumb
            urlBase={AppRoute.objectTypeDetails}
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
              path={`${AppRoute.objectTypeDetails}/services`}
              exact
              render={() => (
                <ServicesGeneral
                  isSidebarVisible={isSidebarVisible}
                  onSidebarOpen={onSidebarOpen}
                  ncpServices={data.getObjectTypeServices as ObjectTypeServices}
                  onSave={onEdit}
                  onDescriptionUpdate={onDescriptionUpdate}
                />
              )}
            />
            <Redirect to={`${AppRoute.objectTypeDetails}/services`} />
          </Switch>
        </>
      )}
    </>
  );
};
