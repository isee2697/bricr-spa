import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { AppRoute } from 'routing/AppRoute.enum';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { ListPimsFilters } from 'api/types';
import { PimTypes } from 'app/pim/dictionaries';

import { DmsFoldersProps } from './DmsFolders.types';
import { DmsPrimaryFolder } from './dmsPrimaryFolder/DmsPrimaryFolder';
import { DmsSecondaryFolder } from './dmsSecondaryFolder/DmsSecondaryFolder';

const getPimFilterVariables = (type: string): ListPimsFilters => {
  return { propertyTypes: PimTypes.find(pimType => pimType.name === type)?.types };
};

export const DmsFolders = ({ data, category, type }: DmsFoldersProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const folderPath = `${AppRoute.dms}/${category}/${type}`;

  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>(getPimFilterVariables(type));

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  useEffect(() => {
    setActiveFilters(current => ({ ...current, ...getPimFilterVariables(type) }));
  }, [type]);

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/documents"
        title={formatMessage({ id: 'dms.documents.title' })}
      />
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
                category={category}
                type={type}
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
              onFilter={handleFilterChange}
              activeFilters={activeFilters}
              isLoading={false}
              isError={false}
              foldersData={data.folders}
              category={category}
              type={type}
            />
          )}
        />
      </Switch>
    </>
  );
};
