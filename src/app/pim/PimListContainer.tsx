import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import {
  ListPimsFilters,
  PimGeneral,
  Team,
  useGetTeamsQuery,
  useListPimsCountQuery,
  useListPimsQuery,
  useUpdatePimGeneralInfoMutation,
} from 'api/types';
import { usePagination } from 'hooks';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { usePimsSorting } from '../shared/usePimsSorting/usePimsSorting';
import { usePimQueryParams } from 'app/shared/usePimQueryParams/usePimQueryParams';

import { PimList } from './PimList';
import { PimTypes } from './dictionaries';

const EMPTY_LIST = { listPims: { items: [] } };
const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

const getPimFilterVariables = (type: string): ListPimsFilters => {
  if (type === 'purchase') {
    return {
      isPurchased: true,
    };
  }

  return { propertyTypes: PimTypes.find(pimType => pimType.name === type)?.types };
};

export const PimListContainer = () => {
  const { pathname } = useLocation();
  const type = pathname.split('/').pop() ?? 'residential';
  const { status, setStatus, priceTypeFilter } = usePimQueryParams({});
  const { data: teamsData } = useGetTeamsQuery({ fetchPolicy: 'network-only' });

  const [activeFilters, setActiveFilters] = useState(getPimFilterVariables(type));

  useEffect(() => {
    setActiveFilters(current => ({ ...current, ...getPimFilterVariables(type) }));
  }, [type, setActiveFilters]);

  const { loading: isCountLoading, data: countData } = useListPimsCountQuery({
    variables: {
      ...priceTypeFilter,
      ...activeFilters,
    },
  });

  const amounts =
    (countData && {
      actionRequired: 0,
      active: countData.activeCount.metadata?.total || 0,
      archived: countData.archivedCount.metadata?.total || 0,
    }) ??
    undefined;

  const { sorting, query: sortQuery } = usePimsSorting();

  const { pagination, query: paginationQuery } = usePagination({
    prefix: status,
    itemsCount: amounts ? amounts[status] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { loading: isListLoading, data: listData } = useListPimsQuery({
    variables: {
      ...priceTypeFilter,
      ...activeFilters,
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  const [updatePimGeneralInfo] = useUpdatePimGeneralInfoMutation();

  const handleUpdatePim = async (values: PimGeneral) => {
    try {
      const { data: result } = await updatePimGeneralInfo({
        variables: {
          input: {
            id: values.id,
            street: values.street,
            city: values.city,
            houseNumber: values.houseNumber,
            postalCode: values.postalCode,
            country: values.country,
            houseGeneral: values.houseGeneral,
            extraAddress: values.extraAddress,
            attentionNote: values.attentionNote,
            apartmentGeneral: values.apartmentGeneral,
            bogGeneral: values.bogGeneral,
            aogGeneral: values.aogGeneral,
            parkingGeneral: values.parkingGeneral,
            buildingPlotGeneral: values.buildingPlotGeneral,
            isPurchased: values.isPurchased,
          },
        },
      });

      if (!result || !result.updatePimGeneralInfo) {
        throw new Error();
      }

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <PimList
      status={status}
      onStatusChange={setStatus}
      type={type}
      onFilter={filters => setActiveFilters(filters)}
      activeFilters={activeFilters}
      isLoading={isCountLoading || isListLoading}
      amounts={amounts}
      listData={status === 'actionRequired' ? EMPTY_LIST : listData}
      sorting={sorting}
      pagination={pagination}
      teams={(teamsData?.getTeams?.items as Team[]) || []}
      accountManagers={[
        {
          id: '0001',
          email: 'accountmanager@email.com',
          firstName: 'John',
          lastName: 'Doe',
          isActive: true,
          isAdmin: true,
        },
      ]}
      onUpdatePim={handleUpdatePim}
    />
  );
};
