import React, { useState } from 'react';
import { AnyObject } from 'final-form';

import { ListPimsFilters, PropertyType, useListPimsCountQuery, useListPimsQuery } from 'api/types';
import { useModalState, usePagination } from 'hooks';
import { usePimsSorting } from 'app/shared/usePimsSorting/usePimsSorting';
import { usePimQueryParams } from 'app/shared/usePimQueryParams/usePimQueryParams';

import { MovePimModal } from './MovePimModal';

const getPimFilterVariables = (type: string): ListPimsFilters => {
  switch (type) {
    case 'property':
      return {
        propertyTypes: [PropertyType.Apartment, PropertyType.House],
      };
    case 'bog':
      return { propertyTypes: [PropertyType.Commercial] };
    case 'aog':
      return { propertyTypes: [PropertyType.Agricultural] };
    case 'parkinglot':
      return { propertyTypes: [PropertyType.ParkingLot] };
    case 'plot':
      return { propertyTypes: [PropertyType.BuildingPlot] };
    default:
      return {
        propertyTypes: [
          PropertyType.Apartment,
          PropertyType.House,
          PropertyType.Commercial,
          PropertyType.Agricultural,
          PropertyType.ParkingLot,
          PropertyType.BuildingPlot,
        ],
      };
  }
};

export const MovePimModalContainer = () => {
  const { status, setStatus, type, setType, pricingType, setPricingType, priceTypeFilter } = usePimQueryParams({});
  const { isOpen: isModalOpen, options } = useModalState('move-pim');
  const [activeFilters, setActiveFilters] = useState(getPimFilterVariables(''));

  const handleSubmit = async (values: AnyObject) => {
    return undefined;
  };

  const { sorting, query: sortQuery } = usePimsSorting();

  const { pagination, query: paginationQuery } = usePagination({
    prefix: status,
    itemsCount: 0,
    perPageOptions: ['All'],
  });

  const { loading: isListLoading, error: listError, data: propertyListData } = useListPimsQuery({
    variables: {
      ...getPimFilterVariables('property'),
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  const { loading: isBogListLoading, error: listBogError, data: bogListData } = useListPimsQuery({
    variables: {
      ...getPimFilterVariables('bog'),
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });
  const { loading: isAogListLoading, error: listAogError, data: aogListData } = useListPimsQuery({
    variables: {
      ...getPimFilterVariables('aog'),
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });
  const { loading: isParkinglotListLoading, error: listParkinglotError, data: parkinglotListData } = useListPimsQuery({
    variables: {
      ...getPimFilterVariables('parkinglot'),
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });
  const { loading: isPlotListLoading, error: listPlotError, data: plotListData } = useListPimsQuery({
    variables: {
      ...getPimFilterVariables('plot'),
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  let listData = {};

  if (!isListLoading && !isBogListLoading && !isAogListLoading && !isParkinglotListLoading && !isPlotListLoading) {
    listData = {
      propertyListData,
      bogListData,
      aogListData,
      parkinglotListData,
      plotListData,
    };
  }

  return <MovePimModal onSubmit={handleSubmit} isOpen={isModalOpen} options={options} data={listData} />;
};
