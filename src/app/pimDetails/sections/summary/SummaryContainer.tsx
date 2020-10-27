import React from 'react';
import { useParams } from 'react-router-dom';

import {
  PimServices,
  usePimInfoQuery,
  usePimLocationQuery,
  usePimOutsideQuery,
  usePimPricingQuery,
  usePimServicesQuery,
  usePimSpecificationQuery,
} from 'api/types';
import { Loader } from 'ui/atoms';
import { PimDetailsSectionProps } from '../../PimDetails.types';

import { Summary } from './Summary';
import { PimSummary } from './Summary.types';

export const SummaryContainer = (props: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();

  const { data: pimInfo } = usePimInfoQuery({ variables: { id } });
  const { data: pimOutsideInfo } = usePimOutsideQuery({ variables: { id } });
  const { data: pimLocationInfo } = usePimLocationQuery({ variables: { id } });
  const { data: pimServicesInfo } = usePimServicesQuery({ variables: { id } });
  const { data: pimSpecificationInfo } = usePimSpecificationQuery({ variables: { id } });
  const { data: pimPricingInfo } = usePimPricingQuery({ variables: { id } });

  if (
    !pimInfo ||
    !pimInfo.getPim ||
    !pimOutsideInfo ||
    !pimOutsideInfo.getPimOutside ||
    !pimLocationInfo ||
    !pimLocationInfo.getPimLocation ||
    !pimServicesInfo ||
    !pimServicesInfo.getPimServices ||
    !pimSpecificationInfo ||
    !pimSpecificationInfo.getPimSpecification ||
    !pimPricingInfo ||
    !pimPricingInfo.getPricing
  ) {
    return <Loader />;
  }

  const {
    street,
    houseNumber,
    houseNumberAddition,
    houseNumberPrefix,
    constructionNumber,
    constructionNumberAddition,
    constructionNumberPrefix,
    city,
    floors = [],
    houseGeneral,
    houseOutside,
    cadastre,
    pictures = [],
    insideGeneral,
    mainPicture,
  } = pimInfo.getPim;
  const { outsideFeatures } = pimOutsideInfo.getPimOutside;
  const { specificationAdvanced, inspections } = pimSpecificationInfo.getPimSpecification;
  const { costs, pricing } = pimPricingInfo.getPricing;

  const summary: PimSummary = {
    address: `${street} ${houseNumberPrefix ?? ''}${houseNumber}${houseNumberAddition ?? ''}${
      constructionNumber
        ? ` (${constructionNumberPrefix ?? ''}${constructionNumber}${constructionNumberAddition ?? ''})`
        : ''
    }, ${city}`,
    image: mainPicture
      ? mainPicture.file?.url || undefined
      : (pictures &&
          pictures.length > 0 &&
          (pictures.find(picture => picture.isMainPicture) || pictures[0]).file?.url) ||
        undefined,
    floors: floors || [],
    general: houseGeneral || undefined,
    outside: houseOutside || undefined,
    outsideFeatures: outsideFeatures || [],
    cadastre: cadastre || [],
    services: pimServicesInfo.getPimServices as PimServices,
    pricing: pricing || undefined,
    location: pimLocationInfo.getPimLocation,
    specification: specificationAdvanced || undefined,
    inspections: inspections || [],
    insideGeneral: insideGeneral || undefined,
    costs: costs || [],
  };

  return <Summary summary={summary} {...props} />;
};
