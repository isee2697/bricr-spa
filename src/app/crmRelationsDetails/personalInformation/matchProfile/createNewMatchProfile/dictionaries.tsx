import React from 'react';

import {
  EnergyType,
  MatchCharacteristicsGeneralType,
  MatchCharacteristicsMaintenanceQuality,
  MatchCommercialCharacteristicsGeneralType,
  MatchCommercialConditions,
  MatchCommercialEstateType,
  MatchEstateType,
  MatchGardenSituation,
  MatchProfileWith,
  MatchPropertyType,
  MatchRentalPeriodType,
  MatchRequirementStatus,
  MatchRequirementType,
  MatchTags,
  PaymentFrequency,
  PaymentPeriod,
  MatchService,
} from 'api/types';
import {
  AogIcon,
  BogIcon,
  ClockIcon,
  CompassIcon,
  GraphArrowIcon,
  MutationIcon,
  NcSaleIcon,
  SaleIcon,
  SquareIcon,
  TagIcon,
} from 'ui/atoms/icons';

export const PropertyTypes = [
  {
    value: MatchPropertyType.Residential,
    icon: <SaleIcon />,
  },
  {
    value: MatchPropertyType.NewConstruction,
    icon: <NcSaleIcon />,
  },
  {
    value: MatchPropertyType.Relet,
    icon: <MutationIcon />,
  },
  {
    value: MatchPropertyType.Commercial,
    icon: <BogIcon />,
  },
  {
    value: MatchPropertyType.Agriculture,
    icon: <AogIcon />,
  },
  {
    value: MatchPropertyType.ParkingLot,
    icon: <AogIcon />,
  },
  {
    value: MatchPropertyType.BuildingPlot,
    icon: <AogIcon />,
  },
];

export const CharacteristicsGeneralTypes = Object.keys(MatchCharacteristicsGeneralType).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

export const EstateTypes = Object.keys(MatchEstateType).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

export const CommercialEstateTypes = Object.keys(MatchCommercialEstateType).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

export const CommercialCharacteristicsGeneralTypes = Object.keys(MatchCommercialCharacteristicsGeneralType).map(
  key => ({
    value: key,
    icon: <SquareIcon />,
  }),
);

export const RentalPeriodTypes = Object.keys(MatchRentalPeriodType).map(key => ({
  value: key,
  icon: <ClockIcon />,
}));

export const ProfileWithTypes = Object.keys(MatchProfileWith).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

export const CharacteristicsMaintenanceQualityTypes = Object.keys(MatchCharacteristicsMaintenanceQuality).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

export const CommercialConditionTypes = Object.keys(MatchCommercialConditions).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

export const PaymentFrequencyTypes = Object.keys(PaymentFrequency).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

export const PaymentPeriodTypes = Object.keys(PaymentPeriod).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

export const GardenSituationTypes = Object.keys(MatchGardenSituation).map(key => ({
  value: key,
  icon: <CompassIcon />,
}));

export const TagTypes = Object.keys(MatchTags).map(key => ({
  value: key,
  icon: <TagIcon />,
}));

export const RequirementTypes = Object.keys(MatchRequirementType).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

export const RequirementStatusTypes = Object.keys(MatchRequirementStatus).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

export const EnergyTypes = Object.keys(EnergyType).map(key => ({
  value: key,
}));

export const ServiceTypes = Object.keys(MatchService).map(key => ({
  value: key,
  icon: <GraphArrowIcon />,
}));
