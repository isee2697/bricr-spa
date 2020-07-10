import React from 'react';

import { SquareIcon } from 'ui/atoms/icons';
import {
  ApprovalType,
  GoodToKnowType,
  HousingType,
  InsideType,
  MaintenanceType,
  MonumentType,
  ObligationToProvideInformationType,
  ParkingFacilities,
  PollutionType,
  PropertyRightType,
  SpecialTagsType,
  TankType,
} from 'api/types';

export const approvals = Object.keys(ApprovalType).map(value => ({
  label: `dictionaries.specification.approvals.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const obligation = Object.keys(ObligationToProvideInformationType).map(value => ({
  label: `dictionaries.specification.obligation.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const parking = Object.keys(ParkingFacilities).map(value => ({
  label: `dictionaries.specification.advanced_parking.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const advancedMonument = Object.keys(MonumentType).map(value => ({
  label: `dictionaries.specification.monument_type.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const advancedInside = Object.keys(InsideType).map(value => ({
  label: `dictionaries.specification.inside_type.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const advancedOptions = Object.keys(HousingType).map(value => ({
  label: `dictionaries.specification.housing_type.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const advancedTags = Object.keys(SpecialTagsType).map(value => ({
  label: `dictionaries.specification.special_type.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const advancedProperty = Object.keys(PropertyRightType).map(value => ({
  label: `dictionaries.specification.business_type.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const goodToKnow = Object.keys(GoodToKnowType).map(value => ({
  label: `dictionaries.specification.good_to_know.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const inspectionTank = Object.keys(TankType).map(value => ({
  label: `dictionaries.inspection_tanks.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const inspectionPollution = Object.keys(PollutionType).map(value => ({
  label: `dictionaries.inspection_pollution.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));

export const inspectionMaintenance = Object.keys(MaintenanceType).map(value => ({
  label: `dictionaries.inspection_maintenance.${value}`,
  icon: <SquareIcon color="inherit" />,
  value,
}));
