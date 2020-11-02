import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { Page } from 'ui/templates';
import { ListPimsFilters, PropertyType, TeamRight } from 'api/types';

import { DmsFoldersProps } from './DmsFolders.types';
import { DmsPrimaryFolder } from './dmsPrimaryFolder/DmsPrimaryFolder';
import { DmsSecondaryFolder } from './dmsSecondaryFolder/DmsSecondaryFolder';
import { useStyles } from './DmsFolders.styles';

export const DmsFolders = ({ data }: DmsFoldersProps) => {
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
      <NavBreadcrumb urlBase={AppRoute.dms + '/documents/'} to={data.id} title={data.name} />
      <Page withoutHeader classes={{ container: classes.page }}>
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
