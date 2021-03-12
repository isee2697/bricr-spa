import React from 'react';
import { useHistory } from 'react-router';

import { CrmType, Entities, useSearchLazyQuery } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { Search } from './Search';

export const SearchContainer = () => {
  const { push } = useHistory();
  const [search, { data, loading }] = useSearchLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const handleSearch = async (keyword: string) => {
    search({
      variables: {
        input: {
          keyword,
        },
      },
    });
  };

  const handleClick = (type: Entities, id: string) => {
    let route: AppRoute | null = null;

    switch (type) {
      case Entities.Pim:
        route = AppRoute.pimDetails;

      case Entities.Crm:
        const crm = data?.search?.crms?.find(crm => crm.id === id);
        route = AppRoute.crmRelationsDetails;

        if (crm && crm.type === CrmType.Business) {
          route = AppRoute.crmBusinessesDetails;
        }

      case Entities.Sales:
        const sale = data?.search?.sales?.find(s => s.id === id);
        route = AppRoute.salesDetails;
        route.replace(':type', sale?.type ?? '');
      case Entities.Ncp:
        route = AppRoute.projectDetails;
      case Entities.Team:
        route = AppRoute.teams;
    }

    if (route) {
      push(route.replace(':id', id));
    }
  };

  return (
    <Search
      results={data?.search || { users: [], crms: [], pims: [], emails: [], teams: [] }}
      onSearch={handleSearch}
      loading={loading}
      onClick={handleClick}
    />
  );
};
