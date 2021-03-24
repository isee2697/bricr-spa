import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { AppRoute } from 'routing/AppRoute.enum';
import { NavBreadcrumb } from 'ui/atoms/navBreadcrumb/NavBreadcrumb';
import { ListPimsFilters } from 'api/types';
import { PimTypes } from 'app/pim/dictionaries';
import { SecondaryFolder } from 'app/shared/dms/secondaryFolder/SecondaryFolder';
import { PrimaryFolder } from 'app/shared/dms/primaryFolder/PrimaryFolder';

import { FoldersProps } from './Folders.types';

const getPimFilterVariables = (type: string): ListPimsFilters => {
  return { propertyTypes: PimTypes.find(pimType => pimType.name === type)?.types };
};

export const Folders = ({ entityItems, entityType, type, onAddFolder, isLoading }: FoldersProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const folderPath = `${AppRoute.dms}/${entityType}/${type}`;

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
          path={`${folderPath}/:entityId`}
          render={path => {
            const item = entityItems.find(item => item.id === path.match.params.entityId);

            return item ? (
              <SecondaryFolder
                id={item.id}
                name={item.name}
                isLoading={false}
                isError={false}
                foldersData={[]}
                type={type}
                entityType={entityType}
                onAddFolder={onAddFolder}
              />
            ) : (
              <Redirect to={folderPath} />
            );
          }}
        />
        <Route
          path={folderPath}
          render={() => (
            <PrimaryFolder
              onFilter={handleFilterChange}
              activeFilters={activeFilters}
              isLoading={isLoading}
              isError={false}
              entityItems={entityItems}
              type={type}
              entityType={entityType}
            />
          )}
        />
      </Switch>
    </>
  );
};
