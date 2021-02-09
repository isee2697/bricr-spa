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
import { GraphArrowIcon, SquareIcon } from 'ui/atoms/icons';

export const PropertyTypes = Object.keys(MatchPropertyType).map(key => ({
  value: key,
  icon: <SquareIcon />,
}));

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
  icon: <SquareIcon />,
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
  icon: <SquareIcon />,
}));

export const TagTypes = Object.keys(MatchTags).map(key => ({
  value: key,
  icon: <SquareIcon />,
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
