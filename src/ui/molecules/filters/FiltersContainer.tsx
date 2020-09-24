import React from 'react';
import { AnyObject } from 'final-form';

import { ListPimsFilters, PropertyType } from 'api/types';
import { usePimQueryParams } from 'app/shared/usePimQueryParams/usePimQueryParams';

import { FilterContainerProps } from './Filters.types';
import { Filters } from './Filters';

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

export const FiltersContainer = ({ data, isOpened, onClose }: FilterContainerProps) => {
  const { status, setStatus, type, setType, pricingType, setPricingType, priceTypeFilter, ...rest } = usePimQueryParams(
    {},
  );

  // console.log({ status, type, pricingType, priceTypeFilter, ...rest })
  console.log(type, getPimFilterVariables(type), PropertyType);
  // let tempData = [
  //   {
  //     key: 'type',
  //     type
  //   }
  // ]

  const handleSubmit = async (body: AnyObject) => {
    setType('House');
    // console.log(body);
  };

  return <Filters data={data} isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
