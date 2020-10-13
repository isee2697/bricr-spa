import React from 'react';
import { PimDetailsSectionProps } from '../../../PimDetails.types';
import { Picture, usePimInfoQuery, usePimInsideQuery, usePimServicesQuery } from 'api/types';
import { useParams } from 'react-router-dom';
import { Loader } from 'ui/atoms';

import { SummaryInside } from './SummaryInside';
import { PimSummaryInside, SummaryInsideContainerProps } from './SummaryInside.types';

export const SummaryInsideContainer = ({ summary, ...props }: SummaryInsideContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { data: pimInsideData } = usePimInsideQuery({ variables: { id } });
  const { data: pimServicesData } = usePimServicesQuery({ variables: { id } });

  if (!pimInsideData || !pimServicesData) {
    return <Loader />;
  }

  const {
    getPimInside: { floors, insideGeneral },
  } = pimInsideData;
  const {
    getPimServices: { heatingSources, hotWaterSupplies, additionalServices },
  } = pimServicesData;

  return (
    <SummaryInside
      floors={floors || []}
      heatingSources={heatingSources || []}
      hotWaterSupplies={hotWaterSupplies || []}
      additionalServices={additionalServices || []}
      summaryInside={summary}
      {...props}
    />
  );
};
