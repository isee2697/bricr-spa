import React, { useMemo } from 'react';
import { Redirect, Route, Switch, useParams } from 'react-router';

import { dateToYear } from 'form/fields';
import { NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import {
  GetNcpServicesDocument,
  GetObjectTypeServicesDocument,
  NcpServices,
  ObjectTypeServices,
  useGetNcpServicesQuery,
  useGetObjectTypeServicesQuery,
  useUpdateNcpServiceDescriptionMutation,
  useUpdateNcpServiceMutation,
  useUpdateObjectTypeServiceDescriptionMutation,
  useUpdateObjectTypeServiceMutation,
} from 'api/types';
import { useLocale } from 'hooks';
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

const routeUrlBaseMap: Record<EntityType, AppRoute> = {
  [EntityType.Project]: AppRoute.projectDetails,
  [EntityType.ObjectType]: AppRoute.objectTypeDetails,
  [EntityType.Property]: AppRoute.pimDetails,
  [EntityType.LinkedProperty]: AppRoute.linkedPropertyDetails,
  [EntityType.CrmRelations]: AppRoute.crmRelationsDetails,
  [EntityType.CrmBusinesses]: AppRoute.crmBusinessesDetails,
  [EntityType.Dms]: AppRoute.dms,
};

export const ServicesGeneralContainer = ({
  isSidebarVisible,
  onSidebarOpen,
}: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const { entityType } = useEntityType();
  const useQuery = getQuery(entityType);
  const { data } = useQuery({ variables: { id } });
  const dataResult = useMemo<ObjectTypeServices | NcpServices | undefined>(
    () =>
      data
        ? (Object.values(data)[0] as ObjectTypeServices | NcpServices)
        : undefined,
    [data]
  );

  const [updateNcpServices] = useUpdateNcpServiceMutation();
  const [updateNcpDescription] = useUpdateNcpServiceDescriptionMutation();

  const [updateObjectTypeServices] = useUpdateObjectTypeServiceMutation();
  const [
    updateObjectTypeDescription,
  ] = useUpdateObjectTypeServiceDescriptionMutation();

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

  if (!dataResult) {
    return null;
  }

  return (
    <>
      <NavBreadcrumb
        urlBase={routeUrlBaseMap[entityType]}
        to='/services'
        title={formatMessage({ id: 'pim_details.services.title' })}
      />
      <ProjectDetailsHeader
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
      />
      <Switch>
        <Route
          default
          path={`${routeUrlBaseMap[entityType]}/services`}
          exact
          render={() => (
            <ServicesGeneral
              isSidebarVisible={isSidebarVisible}
              onSidebarOpen={onSidebarOpen}
              ncpServices={dataResult}
              onSave={onEdit}
              onDescriptionUpdate={onDescriptionUpdate}
            />
          )}
        />
        <Redirect to={`${routeUrlBaseMap[entityType]}/services`} />
      </Switch>
    </>
  );
};
