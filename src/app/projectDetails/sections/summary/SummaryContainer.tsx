import React from 'react';
import { useParams } from 'react-router-dom';

import { ProjectDetailsProps } from '../../ProjectDetails.types';
import {
  SortDirection,
  useListObjectTypesQuery,
  useNcpCharacteristicsQuery,
  useNcpGeneralQuery,
  useNcpMediaQuery,
  useNcpPricesPricingQuery,
} from 'api/types';
import { Loader } from 'ui/atoms';

import { Summary } from './Summary';
import { ProjectDetailsSummary } from './Summary.types';

export const SummaryContainer = ({ isSidebarVisible, onSidebarOpen }: ProjectDetailsProps) => {
  const { id } = useParams<{ id: string }>();

  const { data: ncpGeneralInfo } = useNcpGeneralQuery({ variables: { id }, fetchPolicy: 'no-cache' });
  const { data: ncpPricingInfo } = useNcpPricesPricingQuery({ variables: { id }, fetchPolicy: 'no-cache' });
  const { data: ncpObjecttypesInfo } = useListObjectTypesQuery({
    variables: { ncpId: id, sortDirection: SortDirection.Desc, from: 0, sortColumn: 'dateCreated' },
    fetchPolicy: 'no-cache',
  });
  const { data: ncpMediaInfo } = useNcpMediaQuery({ variables: { id }, fetchPolicy: 'no-cache' });
  const { data: ncpCharacteristicsInfo } = useNcpCharacteristicsQuery({ variables: { id }, fetchPolicy: 'no-cache' });

  if (
    !ncpGeneralInfo ||
    !ncpGeneralInfo.getNcp ||
    !ncpPricingInfo ||
    !ncpPricingInfo.getNcpPrices ||
    !ncpObjecttypesInfo ||
    !ncpObjecttypesInfo.listObjectTypes ||
    !ncpMediaInfo ||
    !ncpMediaInfo.getNcpMedia ||
    !ncpCharacteristicsInfo ||
    !ncpCharacteristicsInfo.getNcpCharacteristics
  ) {
    return <Loader />;
  }

  const { pricing } = ncpPricingInfo.getNcpPrices;
  const { items } = ncpObjecttypesInfo.listObjectTypes;
  const { energy } = ncpCharacteristicsInfo.getNcpCharacteristics;

  const summary: ProjectDetailsSummary = {
    image: 'https://img.freepik.com/free-photo/light-trails-modern-building_1417-6693.jpg?size=626&ext=jpg',
    pricing: pricing || undefined,
    objecttypes: items || [],
    energy: energy || undefined,
  };

  return <Summary isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} summary={summary} />;
};
