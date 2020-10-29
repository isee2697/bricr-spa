export enum ExtrasItemStatus {
  Requires = 'Requires',
  Desirable = 'Desirable',
  NotSignificant = 'NotSignificant',
}

export enum ExtrasItemType {
  BathroomOnGroundFloor = 'BathroomOnGroundFloor',
  BedroomOnGroundFloor = 'BedroomOnGroundFloor',
  RoofTerrace = 'RoofTerrace',
  Balcony = 'Balcony',
  Elevator = 'Elevator',
  Monument = 'Monument',
  MonumentalBuilding = 'MonumentalBuilding',
  SwimmingPool = 'SwimmingPool',
  PermanentHabitation = 'PermanentHabitation',
  ProtectedCityOrVillageView = 'ProtectedCityOrVillageView',
  DoubleOccupancyAvailable = 'DoubleOccupancyAvailable',
  DoubleOccupancyPossible = 'DoubleOccupancyPossible',
  AccessibleToDisabledPeople = 'AccessibleToDisabledPeople',
  AccessibleToTheElderly = 'AccessibleToTheElderly',
  PartlyUpholstered = 'PartlyUpholstered',
  PartiallyRented = 'PartiallyRented',
  Furnished = 'Furnished',
  Upholstered = 'Upholstered',
  DiyHome = 'DiyHome',
}

export type ExtrasItem = {
  type: ExtrasItemType;
  status: ExtrasItemStatus;
};

export type ExtrasColumnItems = {
  [ExtrasItemStatus.Requires]: ExtrasItemType[];
  [ExtrasItemStatus.Desirable]: ExtrasItemType[];
  [ExtrasItemStatus.NotSignificant]: ExtrasItemType[];
};

export type ExtrasColumnProps = {
  isEditable: boolean;
  columnType: ExtrasItemStatus;
  items: ExtrasItemType[];
  onUpdateExtraItemStatus: (item: ExtrasItemType, status: ExtrasItemStatus) => void;
};

export type ExtrasColumnItemProps = {
  isEditable: boolean;
  item: ExtrasItemType;
  noMargin?: boolean;
};

export type ExtrasPlaceholderProps = {
  isFirst?: boolean;
};

export type ExtrasItemDragObject = {
  type: ExtrasItemStatus;
  item: ExtrasItemType;
};
