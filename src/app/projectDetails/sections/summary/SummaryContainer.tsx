import React from 'react';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';

import { ProjectDetailsProps } from '../../ProjectDetails.types';
import {
  SortDirection,
  useListObjectTypesQuery,
  useNcpCharacteristicsQuery,
  useNcpGeneralQuery,
  useNcpMediaQuery,
  useNcpPricesCostsQuery,
  useNcpPricesInterestsQuery,
  useNcpPricesPricingQuery,
  useProjectPhasesQuery,
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
  const { data: ncpCostsInfo } = useNcpPricesCostsQuery({ variables: { id }, fetchPolicy: 'no-cache' });
  const { data: ncpInterestsInfo } = useNcpPricesInterestsQuery({ variables: { id }, fetchPolicy: 'no-cache' });
  const { data: ncpPhaseInfo } = useProjectPhasesQuery({ variables: { ncpId: id, from: 0 }, fetchPolicy: 'no-cache' });

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
    !ncpCharacteristicsInfo.getNcpCharacteristics ||
    !ncpCostsInfo ||
    !ncpCostsInfo.getNcpPrices ||
    !ncpInterestsInfo ||
    !ncpInterestsInfo.getNcpPrices ||
    !ncpPhaseInfo ||
    !ncpPhaseInfo.getProjectPhases
  ) {
    return <Loader />;
  }

  const { startSale, startDelivery, properties, objectTypesCount } = ncpGeneralInfo.getNcp;
  const { pricing } = ncpPricingInfo.getNcpPrices;
  const { items: objectTypes } = ncpObjecttypesInfo.listObjectTypes;
  const { energy, projectMarketing, measurements } = ncpCharacteristicsInfo.getNcpCharacteristics;
  const { pictures = [], mainPictureId } = ncpMediaInfo.getNcpMedia;
  const { costs } = ncpCostsInfo.getNcpPrices;
  const { interests } = ncpInterestsInfo.getNcpPrices;
  const { items: phases } = ncpPhaseInfo.getProjectPhases;

  const mainPicture =
    pictures && pictures.length > 0
      ? mainPictureId
        ? pictures.find(picture => picture.id === mainPictureId)?.file?.url
        : pictures[0]?.file?.url
      : undefined;

  const summary: ProjectDetailsSummary = {
    image: mainPicture || undefined,
    pricing: pricing || undefined,
    costs: costs || undefined,
    interests: interests || undefined,
    objecttypes: objectTypes || [],
    energy: energy || undefined,
    projectMarketing: projectMarketing || undefined,
    phases: phases || [],
    startSale: startSale ? DateTime.fromISO(startSale) : undefined,
    startDelivery: startDelivery ? DateTime.fromISO(startDelivery) : undefined,
    properties: properties || 0,
    objectTypesCount: objectTypesCount || 0,
    measurements: measurements || undefined,
  };

  return <Summary isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} summary={summary} />;
};
