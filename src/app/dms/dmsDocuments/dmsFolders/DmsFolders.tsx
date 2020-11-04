import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { AppRoute } from 'routing/AppRoute.enum';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { Page } from 'ui/templates';
import { ListPimsFilters, PropertyType, TeamRight } from 'api/types';

import { DmsFoldersProps } from './DmsFolders.types';
import { DmsPrimaryFolder } from './dmsPrimaryFolder/DmsPrimaryFolder';
import { DmsSecondaryFolder } from './dmsSecondaryFolder/DmsSecondaryFolder';
import { useStyles } from './DmsFolders.styles';

export const DmsFolders = ({ data }: DmsFoldersProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const folderPath = AppRoute.dms + '/documents/' + data.id;
  const classes = useStyles();

  const [status, setStatus] = useState(TeamRight.Residential);
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({
    propertyTypes: [PropertyType.Apartment, PropertyType.House],
  });

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  useEffect(() => {
    setActiveFilters({
      propertyTypes: [PropertyType.Apartment, PropertyType.House],
    });
  }, []);

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/documents"
        title={formatMessage({ id: 'dms.documents.title' })}
      />
      <Page showHeader withoutHeader title={data.name} titleActions={[]} classes={{ container: classes.page }}>
        <Switch>
          <Route
            path={`${folderPath}/:childId`}
            render={path => {
              const item = data.folders?.find(item => item.id === path.match.params.childId);

              return item ? (
                <DmsSecondaryFolder
                  id={item.id}
                  name={item.name}
                  isLoading={false}
                  isError={false}
                  foldersData={item.folders}
                />
              ) : (
                <Redirect to={folderPath} />
              );
            }}
          />
          <Route
            path={`${folderPath}`}
            render={() => (
              <DmsPrimaryFolder
                id={data.id}
                name={data.name}
                status={status}
                onStatusChange={setStatus}
                onFilter={handleFilterChange}
                activeFilters={activeFilters}
                isLoading={false}
                isError={false}
                foldersData={data.folders}
              />
            )}
          />
        </Switch>
      </Page>
    </>
  );
};
