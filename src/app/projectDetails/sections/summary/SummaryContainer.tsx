import React from 'react';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';

import { ProjectDetailsProps } from '../../ProjectDetails.types';
import { SortDirection, useNcpOverallInfoQuery } from 'api/types';
import { Loader } from 'ui/atoms';

import { Summary } from './Summary';
import { ProjectDetailsSummary } from './Summary.types';

export const SummaryContainer = ({ isSidebarVisible, onSidebarOpen }: ProjectDetailsProps) => {
  const { id } = useParams<{ id: string }>();

  const { data: ncpOverallInfo } = useNcpOverallInfoQuery({
    variables: { id, sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  });

  if (
    !ncpOverallInfo ||
    !ncpOverallInfo.getNcp ||
    !ncpOverallInfo.getNcpPrices ||
    !ncpOverallInfo.getNcpMedia ||
    !ncpOverallInfo.getNcpCharacteristics ||
    !ncpOverallInfo.listObjectTypes ||
    !ncpOverallInfo.getProjectPhases
  ) {
    return <Loader />;
  }

  const { startSale, startDelivery, properties, objectTypesCount } = ncpOverallInfo.getNcp;
  const { pricing } = ncpOverallInfo.getNcpPrices;
  const { items: objectTypes } = ncpOverallInfo.listObjectTypes;
  const { energy, projectMarketing, measurements } = ncpOverallInfo.getNcpCharacteristics;
  const { pictures = [], mainPictureId } = ncpOverallInfo.getNcpMedia;
  const { costs } = ncpOverallInfo.getNcpPrices;
  const { interests } = ncpOverallInfo.getNcpPrices;
  const { items: phases } = ncpOverallInfo.getProjectPhases;

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
    objectTypes: objectTypes || [],
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
