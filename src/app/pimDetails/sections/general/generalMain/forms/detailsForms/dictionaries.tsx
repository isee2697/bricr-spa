import React from 'react';
import {
  ApartmentType,
  CharacteristicsApartment,
  PropertyTypeDetailed,
  PropertyConnection,
  GeneralBogType,
  GeneralCharacteristicsBog,
  AogGeneralType,
  AdditionalPositionNotArgaic,
  TypeOfParkingType,
  ParkingLotSpecificationsType,
  ParkingMaterialType,
  ParkingInsulationType,
  SoilType,
} from 'api/types';
import {
  AogIcon,
  BogIcon,
  CalendarIcon,
  ComplexBuildingIcon,
  EditIcon,
  FolderIcon,
  SquareIcon,
  FilterIcon,
  MailIcon,
  MutationIcon,
  BellIcon,
  SiteIcon,
  BuildingIcon,
  PinIcon,
  SaleIcon,
  SeeIcon,
  UploadIcon,
  WarningIcon,
} from 'ui/atoms/icons';

export const SOIL_TYPES = Object.keys(SoilType).map(value => ({
  label: `dictionaries.soil_type.${value}`,
  icon: <AogIcon />,
  value,
}));
export const AGRICULTURAL_TYPES = Object.keys(AogGeneralType).map(value => ({
  label: `dictionaries.aog_details.type.${value}`,
  icon: <AogIcon />,
  value,
}));

export const ADDITIONAL_POSITION = Object.keys(AdditionalPositionNotArgaic).map(value => ({
  label: `dictionaries.aog_details.addtional_position.${value}`,
  icon: <AogIcon />,
  value,
}));

export const HOUSE_TYPES = [
  {
    label: 'dictionaries.property_details.SingleFamily',
    icon: <AogIcon />,
    value: PropertyTypeDetailed.SingleFamily,
  },
  {
    label: 'dictionaries.property_details.DykeHouse',
    icon: <BogIcon />,
    value: PropertyTypeDetailed.DykeHouse,
  },
  {
    label: 'dictionaries.property_details.CourtHouse',
    icon: <CalendarIcon />,
    value: PropertyTypeDetailed.CourtHouse,
  },
  {
    label: 'dictionaries.property_details.DriveInHome',
    icon: <ComplexBuildingIcon />,
    value: PropertyTypeDetailed.DriveInHome,
  },
  {
    label: 'dictionaries.property_details.SplitLevel',
    icon: <EditIcon />,
    value: PropertyTypeDetailed.SplitLevel,
  },
  {
    label: 'dictionaries.property_details.QuadrantHouse',
    icon: <FolderIcon />,
    value: PropertyTypeDetailed.QuadrantHouse,
  },
  {
    label: 'dictionaries.property_details.PatioHouse',
    icon: <FilterIcon />,
    value: PropertyTypeDetailed.PatioHouse,
  },
  {
    label: 'dictionaries.property_details.Villa',
    icon: <MailIcon />,
    value: PropertyTypeDetailed.Villa,
  },
  {
    label: 'dictionaries.property_details.CanalHouse',
    icon: <MutationIcon />,
    value: PropertyTypeDetailed.CanalHouse,
  },
  {
    label: 'dictionaries.property_details.WaterHouse',
    icon: <BellIcon />,
    value: PropertyTypeDetailed.WaterHouse,
  },
  {
    label: 'dictionaries.property_details.Bungalow',
    icon: <SiteIcon />,
    value: PropertyTypeDetailed.Bungalow,
  },
  {
    label: 'dictionaries.property_details.SemiBungalow',
    icon: <BuildingIcon />,
    value: PropertyTypeDetailed.SemiBungalow,
  },
  {
    label: 'dictionaries.property_details.StiltHouse',
    icon: <PinIcon />,
    value: PropertyTypeDetailed.StiltHouse,
  },
  {
    label: 'dictionaries.property_details.BusinessOrServiceHome',
    icon: <SaleIcon />,
    value: PropertyTypeDetailed.BusinessOrServiceHome,
  },
  {
    label: 'dictionaries.property_details.Estate',
    icon: <SeeIcon />,
    value: PropertyTypeDetailed.Estate,
  },
  {
    label: 'dictionaries.property_details.CountryHouse',
    icon: <UploadIcon />,
    value: PropertyTypeDetailed.CountryHouse,
  },
  {
    label: 'dictionaries.property_details.Mansion',
    icon: <WarningIcon />,
    value: PropertyTypeDetailed.Mansion,
  },
];

export const HOUSE_CONNECTIONS = [
  {
    label: 'dictionaries.property_connections.SemiDetached',
    icon: <AogIcon />,
    value: PropertyConnection.SemiDetached,
  },
  {
    label: 'dictionaries.property_connections.FinalHouse',
    icon: <BogIcon />,
    value: PropertyConnection.FinalHouse,
  },
  {
    label: 'dictionaries.property_connections.CornerHouse',
    icon: <EditIcon />,
    value: PropertyConnection.CornerHouse,
  },
  {
    label: 'dictionaries.property_connections.TerracedHouse',
    icon: <CalendarIcon />,
    value: PropertyConnection.TerracedHouse,
  },
  {
    label: 'dictionaries.property_connections.DetachedHouse',
    icon: <ComplexBuildingIcon />,
    value: PropertyConnection.DetachedHouse,
  },
];

export const APARTMENT_TYPES = [
  {
    label: 'dictionaries.apartment_types.OneBedroomApartment',
    icon: <AogIcon />,
    value: ApartmentType.OneBedroomApartment,
  },
  {
    label: 'dictionaries.apartment_types.TwoBedroomApartment',
    icon: <BogIcon />,
    value: ApartmentType.TwoBedroomApartment,
  },
  {
    label: 'dictionaries.apartment_types.ThreeBedroomApartment',
    icon: <CalendarIcon />,
    value: ApartmentType.ThreeBedroomApartment,
  },
  {
    label: 'dictionaries.apartment_types.FourBedroomApartment',
    icon: <ComplexBuildingIcon />,
    value: ApartmentType.FourBedroomApartment,
  },
  {
    label: 'dictionaries.apartment_types.FiveBedroomApartment',
    icon: <EditIcon />,
    value: ApartmentType.FiveBedroomApartment,
  },
];

export const APARTMENT_CHARACTERISTICS = Object.keys(CharacteristicsApartment).map(value => ({
  label: `dictionaries.apartment_characteristics.${value}`,
  icon: <AogIcon />,
  value,
}));

export const BOG_TYPES = Object.keys(GeneralBogType).map(value => ({
  label: `dictionaries.bog_details.bog_type.${value}`,
  icon: <BogIcon />,
  value,
}));

export const BOG_CHARACTERISTICS = Object.keys(GeneralCharacteristicsBog).map(value => ({
  label: `dictionaries.bog_details.bog_characteristics_type.${value}`,
  icon: <BogIcon />,
  value,
}));

export const PARKING_TYPES = Object.keys(TypeOfParkingType).map(value => ({
  label: `dictionaries.parking_lot.type.${value}`,
  icon: <BogIcon />,
  value,
}));

export const PARKING_MATERIALS = Object.keys(ParkingMaterialType).map(value => ({
  label: `dictionaries.outside_garage.material.${value}`,
  icon: <SquareIcon />,
  value,
}));

export const PARKING_SPECIFICATIONS = Object.keys(ParkingLotSpecificationsType).map(value => ({
  label: `dictionaries.parking_lot.specification.${value}`,
  icon: <SquareIcon />,
  value,
}));

export const PARKING_INSULATION = Object.keys(ParkingInsulationType).map(value => ({
  label: `dictionaries.parking_lot.insulation.${value}`,
  icon: <SquareIcon />,
  value,
}));
