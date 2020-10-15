import React from 'react';
import { DateTime } from 'luxon';
import { useParams } from 'react-router-dom';

import { PimServices, usePimInfoQuery, usePimLocationQuery, usePimOutsideQuery, usePimServicesQuery } from 'api/types';
import { Loader } from 'ui/atoms';
import { PimDetailsSectionProps } from '../../PimDetails.types';

import { Summary } from './Summary';
import { PimSummary, PricingAcceptance, PricingPaymentsFrequency } from './Summary.types';

export const SummaryContainer = (props: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();

  const { data: pimInfo } = usePimInfoQuery({ variables: { id } });
  const { data: pimOutsideInfo } = usePimOutsideQuery({ variables: { id } });
  const { data: pimLocationInfo } = usePimLocationQuery({ variables: { id } });
  const { data: pimServicesInfo } = usePimServicesQuery({ variables: { id } });

  if (
    !pimInfo ||
    !pimInfo.getPim ||
    !pimOutsideInfo ||
    !pimOutsideInfo.getPimOutside ||
    !pimLocationInfo ||
    !pimLocationInfo.getPimLocation ||
    !pimServicesInfo ||
    !pimServicesInfo.getPimServices
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
  } = pimInfo.getPim;
  const { outsideFeatures } = pimOutsideInfo.getPimOutside;

  const summary: PimSummary = {
    address: `${street} ${houseNumberPrefix ?? ''}${houseNumber}${houseNumberAddition ?? ''}${
      constructionNumber
        ? ` (${constructionNumberPrefix ?? ''}${constructionNumber}${constructionNumberAddition ?? ''})`
        : ''
    }, ${city}`,
    image:
      (pictures && pictures.length > 0 && (pictures.find(picture => picture.isMainPicture) || pictures[0]).file?.url) ||
      undefined,
    floors: floors || [],
    general: houseGeneral || undefined,
    outside: houseOutside || undefined,
    outsideFeatures: outsideFeatures || [],
    cadastre: cadastre || [],
    services: pimServicesInfo.getPimServices as PimServices,
    pricing: {
      askingPrice: 25000,
      acceptance: PricingAcceptance.InConstruction,
      perDate: DateTime.local(),
      wozValue: 24500,
      referenceDate: DateTime.local(),
      realEstateTaxUser: 675000,
      realEstateTaxUserPaymentsFrequency: PricingPaymentsFrequency.PerYear,
      realEstateTaxBusiness: 1275,
      realEstateTaxBusinessPaymentsFrequency: PricingPaymentsFrequency.PerYear,
    },
    location: pimLocationInfo.getPimLocation,
  };

  return <Summary summary={summary} {...props} />;
};
