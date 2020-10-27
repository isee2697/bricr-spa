import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { Page } from 'ui/templates';
import { ListPimsFilters, PropertyType, TeamRight } from 'api/types';

import { DmsFoldersProps } from './DmsFolders.types';
import { DmsPrimaryFolder } from './dmsPrimaryFolder/DmsPrimaryFolder';
import { DmsSecondaryFolder } from './dmsSecondaryFolder/DmsSecondaryFolder';

export const DmsFolders = ({ data }: DmsFoldersProps) => {
  const path = AppRoute.dms + '/documents/' + data.id;

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
      <Page withoutHeader>
        <NavBreadcrumb urlBase={AppRoute.dms + '/documents/'} to={data.id} title={data.name} />
        <Switch>
          <Route path={`${path}/:childId`} render={path => <DmsSecondaryFolder />} />
          <Route
            path={`${path}`}
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
