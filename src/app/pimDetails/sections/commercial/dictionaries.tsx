import React from 'react';
import {
  BogSpaceType,
  TypeOfStorage,
  HorecaType,
  SocialRealEstateSpecificationType,
  HorecaSpecificationType,
  LeisureSpecificationType,
  RetailSpecificationType,
  TerrainSpecificationsType,
  WealthClassType,
  LegalFormType,
  AirTreatmentType,
  SocialRealEstateServicesType,
  OfficeServicesType,
  BusinessServicesType,
  LeisureServicesType,
  CommonRoomsType,
  SocialRealEstateSpaceType,
  TypeOfPavement,
  DestinationType,
  TermsOfCostsType,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons/square/SquareIcon';

export const BOG_SPACE_TYPES = Object.keys(BogSpaceType).map(type => ({
  value: type,
  label: `dictionaries.commercial.space_type.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const STORAGE_TYPES = Object.keys(TypeOfStorage).map(type => ({
  value: type,
  label: `dictionaries.commercial.storage_type.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const HORECA_TYPES = Object.keys(HorecaType).map(type => ({
  value: type,
  label: `dictionaries.commercial.horeca_type.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const SOCIAL_REAL_ESTATE_SPECIFICATIONS = Object.keys(SocialRealEstateSpecificationType).map(type => ({
  value: type,
  label: `dictionaries.commercial.social_specifications.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const HORECA_SPECIFICATIONS = Object.keys(HorecaSpecificationType).map(type => ({
  value: type,
  label: `dictionaries.commercial.horeca_specifications.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const LEISURE_SPECIFICATIONS = Object.keys(LeisureSpecificationType).map(type => ({
  value: type,
  label: `dictionaries.commercial.leisure_specifications.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const RETAIL_SPECIFICATIONS = Object.keys(RetailSpecificationType).map(type => ({
  value: type,
  label: `dictionaries.commercial.retail_specifications.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const TERRAIN_SPECIFICATIONS = Object.keys(TerrainSpecificationsType).map(type => ({
  value: type,
  label: `dictionaries.commercial.terrain_specifications.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const WEALTH_CLASS_TYPES = Object.keys(WealthClassType).map(type => ({
  value: type,
  label: `dictionaries.commercial.wealth_class.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const LEGAL_FORM_TYPES = Object.values(LegalFormType).map(type => ({
  value: type,
  label: `dictionaries.commercial.legal_form.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const AIR_TREATMENT_TYPES = Object.values(AirTreatmentType).map(type => ({
  value: type,
  label: `dictionaries.commercial.air_treatment.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const SOCIAL_REAL_ESTATE_SERVICES = Object.values(SocialRealEstateServicesType).map(type => ({
  value: type,
  label: `dictionaries.commercial.social_services.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const OFFICE_SERVICES = Object.values(OfficeServicesType).map(type => ({
  value: type,
  label: `dictionaries.commercial.office_services.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const BUSINESS_SERVICES = Object.values(BusinessServicesType).map(type => ({
  value: type,
  label: `dictionaries.commercial.business_services.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const LEISURE_SERVICES = Object.values(LeisureServicesType).map(type => ({
  value: type,
  label: `dictionaries.commercial.leisure_services.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const COMMON_ROOMS = Object.values(CommonRoomsType).map(type => ({
  value: type,
  label: `dictionaries.commercial.common_rooms.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const SOCIAL_ESTATE_TYPES = Object.values(SocialRealEstateSpaceType).map(type => ({
  value: type,
  label: `dictionaries.commercial.social_type.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const PAVEMENT_TYPES = Object.values(TypeOfPavement).map(type => ({
  value: type,
  label: `dictionaries.commercial.pavement.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const BOG_DESTINATION_TYPES = Object.values(DestinationType).map(type => ({
  value: type,
  label: `dictionaries.commercial.social_destination.${type}`,
  icon: <SquareIcon color="inherit" />,
}));

export const TERMS_OF_COSTS_TYPES = Object.keys(TermsOfCostsType).map(type => ({
  value: type,
  label: `dictionaries.commercial.terms_of_costs.${type}`,
  icon: <SquareIcon color="inherit" />,
}));
