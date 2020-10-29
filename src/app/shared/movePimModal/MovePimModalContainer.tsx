import React from 'react';
import { AnyObject } from 'final-form';

import {
  ListPimsFilters,
  PropertyType,
  useListPimsQuery,
  useBulkMutation,
  BulkOperations,
  BulkEntities,
  BulkField,
  useListNcpsQuery,
} from 'api/types';
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
      return {};
  }
};

export const MovePimModalContainer = () => {
  const [bulk] = useBulkMutation();
  const { status } = usePimQueryParams({});
  const { isOpen: isModalOpen, options } = useModalState('move-pim');
  const { query: sortQuery } = usePimsSorting();

  const { query: paginationQuery } = usePagination({
    prefix: status,
    itemsCount: 0,
    perPageOptions: ['All'],
  });

  const { loading: isListLoading, data: propertyListData } = useListPimsQuery({
    variables: {
      ...getPimFilterVariables('property'),
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  const { loading: isNcListLoading, data: ncListData } = useListNcpsQuery({
    variables: {
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'network-only',
  });

  const { loading: isBogListLoading, data: bogListData } = useListPimsQuery({
    variables: {
      ...getPimFilterVariables('bog'),
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  const { loading: isReletListLoading, data: reletListData } = useListPimsQuery({
    variables: {
      ...getPimFilterVariables('mutation'),
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  const { loading: isAogListLoading, data: aogListData } = useListPimsQuery({
    variables: {
      ...getPimFilterVariables('aog'),
      archived: status === 'archived',
      ...sortQuery,
      ...paginationQuery,
    },
    fetchPolicy: 'no-cache',
  });

  let listData = {};

  if (!isListLoading && !isNcListLoading && !isBogListLoading && !isReletListLoading && !isAogListLoading) {
    listData = {
      properties: propertyListData,
      nc: ncListData,
      bog: bogListData,
      relet: reletListData,
      aog: aogListData,
    };
  }

  const handleSubmit = async (values: AnyObject) => {
    try {
      const data = values;

      await bulk({
        variables: {
          input: {
            operation: BulkOperations.SetField,
            entity: BulkEntities.Pim,
            ids: data.properties,
            field: BulkField.Security,
            value: values.teams.map((team: string) => 'team_' + team),
          },
        },
        refetchQueries: [],
      });
    } catch (error) {
      console.log(error);
    }

    return undefined;
  };

  return <MovePimModal onSubmit={handleSubmit} isOpen={isModalOpen} options={options} data={listData} />;
};
