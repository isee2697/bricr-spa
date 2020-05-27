import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  Dictionary: any;
  PimGeneralInput: any;
  PimOutsideInput: any;
  UpdateFeatureInputConfiguration: any;
  UpdateSpaceInputConfiguration: any;
  Upload: any;
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type ForgotPasswordInput = {
  username: Scalars['String'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  error?: Maybe<Scalars['String']>;
  stack?: Maybe<Scalars['String']>;
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  error?: Maybe<Scalars['String']>;
  stack?: Maybe<Scalars['String']>;
};

export type AddFilesInput = {
  fileIDs: Array<Scalars['ID']>;
  entity: EntityWithFiles;
  entityID: Scalars['ID'];
};

export type AddNewFloorInput = {
  pimId: Scalars['String'];
  floorDescription?: Maybe<Scalars['String']>;
  floorType: FloorType;
};

export type AddOutsideFeatureInput = {
  pimId: Scalars['String'];
  type: OutsideFeatureType;
  description?: Maybe<Scalars['String']>;
};

export type AddSpaceInput = {
  spaceType: SpaceType;
  extraRoomPossibility: Scalars['Boolean'];
  pimId: Scalars['String'];
  floorId: Scalars['String'];
  spaceName?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type ChangesHistoryFilters = {
  entityType?: Maybe<EventEntityType>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['String'];
  teams?: Maybe<Array<Team>>;
  name?: Maybe<Scalars['String']>;
};

export type ConstructionInformation = {
  __typename?: 'ConstructionInformation';
  type?: Maybe<ConstructionType>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
};

export type ConstructionInformationInput = {
  type?: Maybe<ConstructionType>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
};

export enum ConstructionType {
  UnderConstruction = 'UnderConstruction',
  InDevelopment = 'InDevelopment',
}

export type CreateFileInput = {
  fileName: Scalars['String'];
  fileType: Scalars['String'];
  permission: FilePermission;
  description?: Maybe<Scalars['String']>;
};

export type CreatePimInput = {
  realEstateType: RealEstateType;
  street: Scalars['String'];
  houseNumberPrefix?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  houseNumberAddition?: Maybe<Scalars['String']>;
  constructionNumberPrefix?: Maybe<Scalars['String']>;
  constructionNumber?: Maybe<Scalars['String']>;
  constructionNumberAddition?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  district?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  developmentType: DevelopmentType;
  status: PimStatus;
  salePrice?: Maybe<Scalars['Float']>;
  rentPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  livingArea?: Maybe<Scalars['Int']>;
  propertyType?: Maybe<PropertyType>;
  attention?: Maybe<Scalars['String']>;
};

export enum DevelopmentType {
  New = 'New',
  Existing = 'Existing',
}

export enum EntityWithFiles {
  Pim = 'Pim',
  Space = 'Space',
}

export type Event = {
  __typename?: 'Event';
  id: Scalars['String'];
  entityType: EventEntityType;
  relatedEntityId?: Maybe<Scalars['String']>;
  action: EventAction;
  timestamp: Scalars['Date'];
  data?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export enum EventAction {
  Created = 'Created',
  Updated = 'Updated',
  Removed = 'Removed',
}

export enum EventEntityType {
  Pim = 'Pim',
}

export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  fileName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
  fileType: Scalars['String'];
  permission: FilePermission;
  key: Scalars['ID'];
  createdAt?: Maybe<Scalars['Date']>;
  signedUrl?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  bucket?: Maybe<Scalars['String']>;
};

export enum FilePermission {
  Public = 'public',
  Private = 'private',
}

export type Floor = {
  __typename?: 'Floor';
  id: Scalars['String'];
  floorDescription?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  floorType: FloorType;
  spaces?: Maybe<Array<Space>>;
};

export enum FloorType {
  Attic = 'Attic',
  Floor = 'Floor',
  Basement = 'Basement',
  GroundFloor = 'GroundFloor',
  Loft = 'Loft',
}

export enum CadastreMapType {
  Register = 'Register',
  Map = 'Map',
  Other = 'Other',
}

export enum GardenType {
  Backyard = 'Backyard',
  PatioOrAtrium = 'PatioOrAtrium',
  Place = 'Place',
  AllGroundGarden = 'AllGroundGarden',
  FrontGarden = 'FrontGarden',
  SunTerrace = 'SunTerrace',
  BackGarden = 'BackGarden',
}

export type GardenDimensions = RectangleDimensions;

export type GardenFeature = {
  __typename?: 'GardenFeature';
  mainGarden?: Maybe<Scalars['Boolean']>;
  type?: Maybe<GardenType>;
  notes?: Maybe<Scalars['String']>;
  quality?: Maybe<GardenQualityType>;
  location?: Maybe<Array<Maybe<Location>>>;
  shape?: Maybe<GardenShapeType>;
  dimensions?: Maybe<GardenDimensions>;
  surface?: Maybe<Scalars['Float']>;
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum GardenQualityType {
  ToBeConstructed = 'ToBeConstructed',
  BeautifullyConstructed = 'BeautifullyConstructed',
  Normal = 'Normal',
  Neglected = 'Neglected',
  TakenCareOf = 'TakenCareOf',
}

export enum GardenShapeType {
  Square = 'Square',
  Rectangle = 'Rectangle',
  LShape = 'LShape',
  UShape = 'UShape',
  TShape = 'TShape',
}

export type GeneralInformation = {
  __typename?: 'GeneralInformation';
  qualityInformation?: Maybe<Array<Maybe<QualityInformations>>>;
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
};

export type GeneralInformationInput = {
  qualityInformation?: Maybe<Array<Maybe<QualityInformations>>>;
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
};

export type HouseGeneral = {
  __typename?: 'HouseGeneral';
  availability?: Maybe<PropertyAvailabilityInformation>;
  construction?: Maybe<ConstructionInformation>;
  floor?: Maybe<FloorType>;
  propertyConnection?: Maybe<PropertyConnection>;
  propertyDetails?: Maybe<PropertyTypeDetailed>;
};

export type HouseGeneralInput = {
  id: Scalars['ID'];
  availability?: Maybe<PropertyAvailabilityInformationInput>;
  construction?: Maybe<ConstructionInformationInput>;
  floor?: Maybe<FloorType>;
  propertyConnection?: Maybe<PropertyConnection>;
  propertyDetails?: Maybe<PropertyTypeDetailed>;
  street: Scalars['String'];
  city: Scalars['String'];
  houseNumber: Scalars['String'];
  postalCode: Scalars['String'];
};

export type HouseOutside = {
  __typename?: 'HouseOutside';
  generalInformation?: Maybe<GeneralInformation>;
  propertyRelated?: Maybe<PropertyRelated>;
  roofInformation?: Maybe<RoofInformation>;
  notes?: Maybe<Scalars['String']>;
};

export type HouseOutsideInput = {
  id: Scalars['ID'];
  generalInformation?: Maybe<GeneralInformationInput>;
  propertyRelated?: Maybe<PropertyRelatedInput>;
  roofInformation?: Maybe<RoofInformationInput>;
  notes?: Maybe<Scalars['String']>;
};

export type KitchenAppliance = {
  __typename?: 'KitchenAppliance';
  name: KitchenAppliances;
  quantity: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
};

export enum KitchenAppliances {
  Refrigerator = 'Refrigerator',
  Microwave = 'Microwave',
  Dishwasher = 'Dishwasher',
  Oven = 'Oven',
  Stove = 'Stove',
}

export enum KitchenConstruction {
  ClosedKitchen = 'ClosedKitchen',
  EatInKitchen = 'EatInKitchen',
  HalfOpenKitchen = 'HalfOpenKitchen',
  OpenKitchen = 'OpenKitchen',
}

export enum KitchenHob {
  GasHob = 'GasHob',
  InductionHob = 'InductionHob',
  ElectricHob = 'ElectricHob',
  CeramicHob = 'CeramicHob',
  HalogenHob = 'HalogenHob',
}

export enum KitchenServices {
  KitchenIsland = 'KitchenIsland',
  WashIsland = 'WashIsland',
}

export type KitchenSpace = {
  __typename?: 'KitchenSpace';
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  type?: Maybe<KitchenType>;
  constructionType?: Maybe<KitchenConstruction>;
  services?: Maybe<Array<Maybe<KitchenServices>>>;
  servicesNotes?: Maybe<Scalars['String']>;
  appliances?: Maybe<Array<Maybe<KitchenAppliance>>>;
  hob?: Maybe<KitchenHob>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<SpaceMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
};

export enum KitchenType {
  MainKitchen = 'MainKitchen',
  Scullery = 'Scullery',
}

export type ListPimsFilters = {
  developmentType?: Maybe<DevelopmentType>;
  status?: Maybe<PimStatus>;
  houseNumberPrefix?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  houseNumberAddition?: Maybe<Scalars['String']>;
  constructionNumberPrefix?: Maybe<Scalars['String']>;
  constructionNumber?: Maybe<Scalars['String']>;
  constructionNumberAddition?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['Boolean']>;
};

export enum Location {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West',
}

export type OutsideFeature = {
  __typename?: 'OutsideFeature';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: OutsideFeatureType;
  configuration?: Maybe<OutsideFeatureConfiguration>;
};

export type OutsideFeatureConfiguration = GardenFeature;

export enum OutsideFeatureType {
  Garden = 'Garden',
  Garage = 'Garage',
  Storage = 'Storage',
  Terrain = 'Terrain',
  ParkingLot = 'ParkingLot',
}

export type Pagination = {
  from?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  searchAfter?: Maybe<Array<Scalars['String']>>;
};

export type Pim = {
  __typename?: 'Pim';
  id: Scalars['String'];
  realEstateType: RealEstateType;
  street: Scalars['String'];
  houseNumberPrefix?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  houseNumberAddition?: Maybe<Scalars['String']>;
  constructionNumberPrefix?: Maybe<Scalars['String']>;
  constructionNumber?: Maybe<Scalars['String']>;
  constructionNumberAddition?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  district?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  developmentType: DevelopmentType;
  status: PimStatus;
  salePrice?: Maybe<Scalars['Float']>;
  rentPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<File>>;
  livingArea?: Maybe<Scalars['Int']>;
  propertyType?: Maybe<PropertyType>;
  attention?: Maybe<Scalars['String']>;
  completeness: Scalars['Float'];
  archived: Scalars['Boolean'];
  dateCreated: Scalars['Date'];
  updatedBy?: Maybe<Scalars['String']>;
  houseGeneral?: Maybe<HouseGeneral>;
  houseOutside?: Maybe<HouseOutside>;
  floors?: Maybe<Array<Floor>>;
  outsideFeatures?: Maybe<Array<OutsideFeature>>;
  cadastralMaps?: Maybe<Array<CadastreMap>>;
  services?: Maybe<Services>;
};

export type PimGeneral = HouseGeneral;

export type PimOutside = HouseOutside;

export type PimSearchResult = {
  __typename?: 'PimSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<Pim>>;
};

export enum PimStatus {
  Prospect = 'Prospect',
  Available = 'Available',
  Option = 'Option',
  Bid = 'Bid',
  SoldWithReservation = 'SoldWithReservation',
  RentedWithReservation = 'RentedWithReservation',
  Sold = 'Sold',
  Rented = 'Rented',
}

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<ProfileTeam>>;
};

export type ProfileTeam = {
  __typename?: 'ProfileTeam';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export enum PropertyAvailability {
  InConsultation = 'InConsultation',
  Immediatelly = 'Immediatelly',
  ByDate = 'ByDate',
}

export type PropertyAvailabilityInformation = {
  __typename?: 'PropertyAvailabilityInformation';
  availability?: Maybe<PropertyAvailability>;
  from?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
  habitation?: Maybe<PropertyHabitation>;
  currentUse?: Maybe<Scalars['String']>;
  currentDestination?: Maybe<Scalars['String']>;
};

export type CadastreMap = {
  __typename?: 'CadastreMap';
  id: Scalars['String'];
  type?: Maybe<CadastreMapType>;
  file?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type BaseService = {
  __typename?: 'BaseService';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export enum MeterType {
  Gas = 'Gas',
  Water = 'Water',
  Electricity = 'Electricity',
}

export type Meters = {
  __typename?: 'Meters';
  id: Scalars['String'];
  type: MeterType;
  name?: Maybe<Scalars['String']>;
  counter?: Maybe<Scalars['Float']>;
};

export type Services = {
  __typename?: 'Services';
  heating?: Maybe<Array<Maybe<BaseService>>>;
  hotWater?: Maybe<Array<Maybe<BaseService>>>;
  additional?: Maybe<Array<Maybe<BaseService>>>;
  meters?: Maybe<Array<Meters>>;
};

export type PropertyAvailabilityInformationInput = {
  availability?: Maybe<PropertyAvailability>;
  from?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
  habitation?: Maybe<PropertyHabitation>;
  currentUse?: Maybe<Scalars['String']>;
  currentDestination?: Maybe<Scalars['String']>;
};

export enum PropertyConnection {
  SemiDetached = 'SemiDetached',
  FinalHouse = 'FinalHouse',
  CornerHouse = 'CornerHouse',
  TerracedHouse = 'TerracedHouse',
  DetachedHouse = 'DetachedHouse',
}

export enum PropertyHabitation {
  RecreationalHome = 'RecreationalHome',
  PermanentOccupation = 'PermanentOccupation',
}

export type PropertyRelated = {
  __typename?: 'PropertyRelated';
  items?: Maybe<Array<Maybe<PropertyRelatedItems>>>;
  notes?: Maybe<Scalars['String']>;
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PropertyRelatedInput = {
  items?: Maybe<Array<Maybe<PropertyRelatedItems>>>;
  notes?: Maybe<Scalars['String']>;
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum PropertyRelatedItems {
  Balcony = 'Balcony',
  Terrace = 'Terrace',
  RoofTerrace = 'RoofTerrace',
  Porch = 'Porch',
}

export enum PropertySpaces {
  Kitchen = 'Kitchen',
}

export enum PropertyType {
  House = 'House',
  Apartment = 'Apartment',
  Commercial = 'Commercial',
  Agricultural = 'Agricultural',
  ParkingLot = 'ParkingLot',
  BuildingPlot = 'BuildingPlot',
  Other = 'Other',
}

export enum PropertyTypeDetailed {
  SingleFamily = 'SingleFamily',
  DykeHouse = 'DykeHouse',
  CourtHouse = 'CourtHouse',
  DriveInHome = 'DriveInHome',
  SplitLevel = 'SplitLevel',
  QuadrantHouse = 'QuadrantHouse',
  PatioHouse = 'PatioHouse',
  Villa = 'Villa',
  CanalHouse = 'CanalHouse',
  WaterHouse = 'WaterHouse',
  Bungalow = 'Bungalow',
  SemiBungalow = 'SemiBungalow',
  StiltHouse = 'StiltHouse',
  BusinessOrServiceHome = 'BusinessOrServiceHome',
  Estate = 'Estate',
  CountryHouse = 'CountryHouse',
  Mansion = 'Mansion',
}

export enum QualityInformations {
  Simple = 'Simple',
  Normal = 'Normal',
  Luxury = 'Luxury',
  Excellent = 'Excellent',
  GoodToStickOut = 'GoodToStickOut',
  Good = 'Good',
  ReasonableToGood = 'ReasonableToGood',
  Fair = 'Fair',
  ModerateToFairRedelijik = 'ModerateToFairRedelijik',
  Moderate = 'Moderate',
  BadToModerate = 'BadToModerate',
  Bad = 'Bad',
}

export enum RealEstateType {
  Residential = 'Residential',
  Business = 'Business',
}

export type RectangleDimensions = {
  __typename?: 'RectangleDimensions';
  length?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
};

export type RoofInformation = {
  __typename?: 'RoofInformation';
  type?: Maybe<RoofType>;
  material?: Maybe<RoofMaterial>;
  insulation?: Maybe<RoofInsulation>;
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RoofInformationInput = {
  type?: Maybe<RoofTypeInput>;
  material?: Maybe<RoofMaterialInput>;
  insulation?: Maybe<RoofInsulationInput>;
  pictures?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RoofInsulation = {
  __typename?: 'RoofInsulation';
  name?: Maybe<RoofInsulations>;
  notes?: Maybe<Scalars['String']>;
};

export type RoofInsulationInput = {
  name?: Maybe<RoofInsulations>;
  notes?: Maybe<Scalars['String']>;
};

export enum RoofInsulations {
  SprayFoam = 'SprayFoam',
  RigidBoards = 'RigidBoards',
  BlanketOrMatting = 'BlanketOrMatting',
  GlassRock = 'GlassRock',
  MineralWool = 'MineralWool',
  LooseFill = 'LooseFill',
  StructuralPanels = 'StructuralPanels',
}

export type RoofMaterial = {
  __typename?: 'RoofMaterial';
  name?: Maybe<RoofMaterials>;
  notes?: Maybe<Scalars['String']>;
};

export type RoofMaterialInput = {
  name?: Maybe<RoofMaterials>;
  notes?: Maybe<Scalars['String']>;
};

export enum RoofMaterials {
  Asbestos = 'Asbestos',
  BituminousRoofing = 'BituminousRoofing',
  Plastic = 'Plastic',
  Slate = 'Slate',
  Metal = 'Metal',
  Pans = 'Pans',
  Other = 'Other',
}

export type RoofType = {
  __typename?: 'RoofType';
  name?: Maybe<RoofTypes>;
  notes?: Maybe<Scalars['String']>;
};

export type RoofTypeInput = {
  name?: Maybe<RoofTypes>;
  notes?: Maybe<Scalars['String']>;
};

export enum RoofTypes {
  TransverseRoof = 'TransverseRoof',
  ClassRoof = 'ClassRoof',
  MansardRoof = 'MansardRoof',
  FlatRoof = 'FlatRoof',
  HippedRoof = 'HippedRoof',
  TentRoof = 'TentRoof',
  SaddleRoof = 'SaddleRoof',
  CompositeRoof = 'CompositeRoof',
}

export type SearchMetadata = {
  __typename?: 'SearchMetadata';
  total: Scalars['Int'];
};

export type Sort = {
  column: Scalars['String'];
  direction: SortDirection;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Space = {
  __typename?: 'Space';
  id: Scalars['String'];
  spaceType: SpaceType;
  spaceName?: Maybe<Scalars['String']>;
  extraRoomPossibility: Scalars['Boolean'];
  configuration?: Maybe<SpaceConfiguration>;
};

export type SpaceConfiguration = KitchenSpace;

export type SpaceMeasurement = {
  __typename?: 'SpaceMeasurement';
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  surface?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

export enum SpaceServiceHeating {
  GeothermalHeat = 'GeothermalHeat',
  NoHeating = 'NoHeating',
  Fireplace = 'Fireplace',
  MultiBurner = 'MultiBurner',
  HotAirHeating = 'HotAirHeating',
  PelletStove = 'PelletStove',
  ElectricHeating = 'ElectricHeating',
  DistrictHeating = 'DistrictHeating',
  GasFireplace = 'GasFireplace',
  CoalStove = 'CoalStove',
  WallHeating = 'WallHeating',
  HeatPump = 'HeatPump',
  MotherFireplace = 'MotherFireplace',
  GasHeaters = 'GasHeaters',
  BlockHeatingWoodStove = 'BlockHeatingWoodStove',
  CentralHeatingBoiler = 'CentralHeatingBoiler',
  UnderfloorHeatingEntirely = 'UnderfloorHeatingEntirely',
  PossibilityForFireplaceHeat = 'PossibilityForFireplaceHeat',
  UnderfloorHeatingPartly = 'UnderfloorHeatingPartly',
  RecoveryInstalation = 'RecoveryInstalation',
}

export enum SpaceShape {
  Rectangle = 'Rectangle',
  Square = 'Square',
  LType = 'LType',
  TType = 'TType',
  UType = 'UType',
  ZType = 'ZType',
}

export enum SpaceType {
  Kitchen = 'Kitchen',
  Bathroom = 'Bathroom',
  LivingRoom = 'LivingRoom',
  Bedroom = 'Bedroom',
  HomeOffice = 'HomeOffice',
  Other = 'Other',
}

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['String'];
  members?: Maybe<Array<Profile>>;
  company: Company;
  name?: Maybe<Scalars['String']>;
};

export type UpdateFloorInput = {
  pimId: Scalars['String'];
  floorId: Scalars['String'];
  floorDescription?: Maybe<Scalars['String']>;
  floorType?: Maybe<FloorType>;
};

export type UpdateOutsideFeatureInput = {
  pimId: Scalars['String'];
  outsideFeatureId: Scalars['String'];
  feature?: Maybe<Scalars['UpdateFeatureInputConfiguration']>;
};

export type UpdateSpaceInput = {
  pimId: Scalars['String'];
  spaceId: Scalars['String'];
  spaceName?: Maybe<Scalars['String']>;
  space?: Maybe<Scalars['UpdateSpaceInputConfiguration']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Profile>;
  getProfile?: Maybe<Profile>;
  listPims: PimSearchResult;
  getPim?: Maybe<Pim>;
  getPropertyTypes: Array<Scalars['String']>;
  getChangesHistory: Array<Event>;
  dictionary?: Maybe<Scalars['Dictionary']>;
};

export type QueryGetProfileArgs = {
  id: Scalars['ID'];
};

export type QueryListPimsArgs = {
  filters?: Maybe<ListPimsFilters>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Array<Sort>>;
};

export type QueryGetPimArgs = {
  id: Scalars['ID'];
};

export type QueryGetChangesHistoryArgs = {
  filters?: Maybe<ChangesHistoryFilters>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<LoginResponse>;
  forgotPassword?: Maybe<ForgotPasswordResponse>;
  resetPassword?: Maybe<ResetPasswordResponse>;
  deleteUser?: Maybe<Scalars['String']>;
  createPim?: Maybe<Pim>;
  removePim?: Maybe<Scalars['String']>;
  updatePimGeneralInfo?: Maybe<Pim>;
  updatePimOutsideInfo?: Maybe<Pim>;
  addFloorToPim?: Maybe<Pim>;
  addSpaceToFloor?: Maybe<Pim>;
  updateSpace?: Maybe<Pim>;
  updateFloor?: Maybe<Pim>;
  addOutsideFeature?: Maybe<Pim>;
  updateOutsideFeature?: Maybe<Pim>;
  addFiles: Array<File>;
};

export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};

export type MutationForgotPasswordArgs = {
  input?: Maybe<ForgotPasswordInput>;
};

export type MutationResetPasswordArgs = {
  input?: Maybe<ResetPasswordInput>;
  token: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationCreatePimArgs = {
  input: CreatePimInput;
};

export type MutationRemovePimArgs = {
  id: Scalars['String'];
};

export type MutationUpdatePimGeneralInfoArgs = {
  input: Scalars['PimGeneralInput'];
};

export type MutationUpdatePimOutsideInfoArgs = {
  input: Scalars['PimOutsideInput'];
};

export type MutationAddFloorToPimArgs = {
  input: AddNewFloorInput;
};

export type MutationAddSpaceToFloorArgs = {
  input: AddSpaceInput;
};

export type MutationUpdateSpaceArgs = {
  input: UpdateSpaceInput;
};

export type MutationUpdateFloorArgs = {
  input: UpdateFloorInput;
};

export type MutationAddOutsideFeatureArgs = {
  input: AddOutsideFeatureInput;
};

export type MutationUpdateOutsideFeatureArgs = {
  input: Scalars['UpdateFeatureInputConfiguration'];
};

export type MutationAddFilesArgs = {
  input: AddFilesInput;
};

export type LoginMutationVariables = {
  input?: Maybe<LoginInput>;
};

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'LoginResponse' } & Pick<LoginResponse, 'accessToken' | 'refreshToken'>>;
};

export type ForgotPasswordMutationVariables = {
  input?: Maybe<ForgotPasswordInput>;
};

export type ForgotPasswordMutation = { __typename?: 'Mutation' } & {
  forgotPassword?: Maybe<{ __typename?: 'ForgotPasswordResponse' } & Pick<ForgotPasswordResponse, 'error'>>;
};

export type ResetPasswordMutationVariables = {
  input?: Maybe<ResetPasswordInput>;
  token: Scalars['String'];
};

export type ResetPasswordMutation = { __typename?: 'Mutation' } & {
  resetPassword?: Maybe<{ __typename?: 'ResetPasswordResponse' } & Pick<ResetPasswordResponse, 'error'>>;
};

export type CreatePimMutationVariables = {
  input: CreatePimInput;
};

export type CreatePimMutation = { __typename?: 'Mutation' } & {
  createPim?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdatePimGeneralInfoMutationVariables = {
  input: Scalars['PimGeneralInput'];
};

export type UpdatePimGeneralInfoMutation = { __typename?: 'Mutation' } & {
  updatePimGeneralInfo?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddFloorToPimMutationVariables = {
  input: AddNewFloorInput;
};

export type AddFloorToPimMutation = { __typename?: 'Mutation' } & {
  addFloorToPim?: Maybe<
    { __typename?: 'Pim' } & { floors?: Maybe<Array<{ __typename?: 'Floor' } & Pick<Floor, 'id'>>> }
  >;
};

export type AddSpaceToFloorMutationVariables = {
  input: AddSpaceInput;
};

export type AddSpaceToFloorMutation = { __typename?: 'Mutation' } & {
  addSpaceToFloor?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateSpaceMutationVariables = {
  input: UpdateSpaceInput;
};

export type UpdateSpaceMutation = { __typename?: 'Mutation' } & {
  updateSpace?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateFloorMutationVariables = {
  input: UpdateFloorInput;
};

export type UpdateFloorMutation = { __typename?: 'Mutation' } & {
  updateFloor?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddOutsideFeatureMutationVariables = {
  input: AddOutsideFeatureInput;
};

export type AddOutsideFeatureMutation = { __typename?: 'Mutation' } & {
  addOutsideFeature?: Maybe<
    { __typename?: 'Pim' } & {
      outsideFeatures?: Maybe<Array<{ __typename?: 'OutsideFeature' } & Pick<OutsideFeature, 'id'>>>;
    }
  >;
};

export type UpdateOutsideFeatureMutationVariables = {
  input: Scalars['UpdateFeatureInputConfiguration'];
};

export type UpdateOutsideFeatureMutation = { __typename?: 'Mutation' } & {
  updateOutsideFeature?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdatePimOutsideInfoMutationVariables = {
  input: Scalars['PimOutsideInput'];
};

export type UpdatePimOutsideInfoMutation = { __typename?: 'Mutation' } & {
  updatePimOutsideInfo?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type CountPimsByParamsQueryVariables = {
  filters?: Maybe<ListPimsFilters>;
};

export type CountPimsByParamsQuery = { __typename?: 'Query' } & {
  listPims: { __typename?: 'PimSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type ListPimsCountQueryVariables = {};

export type ListPimsCountQuery = { __typename?: 'Query' } & {
  activeCount: { __typename?: 'PimSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  archivedCount: { __typename?: 'PimSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type ListPimsQueryVariables = {
  archived: Scalars['Boolean'];
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
};

export type ListPimsQuery = { __typename?: 'Query' } & {
  listPims: { __typename?: 'PimSearchResult' } & {
    items?: Maybe<
      Array<
        { __typename?: 'Pim' } & Pick<
          Pim,
          | 'id'
          | 'street'
          | 'houseNumberPrefix'
          | 'houseNumber'
          | 'houseNumberAddition'
          | 'constructionNumberPrefix'
          | 'constructionNumber'
          | 'constructionNumberAddition'
          | 'city'
          | 'dateCreated'
          | 'livingArea'
          | 'propertyType'
          | 'salePrice'
          | 'rentPrice'
          | 'completeness'
          | 'archived'
        > & { images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>> }
      >
    >;
  };
};

export type PimDetailsQueryVariables = {
  id: Scalars['ID'];
};

export type PimDetailsQuery = { __typename?: 'Query' } & {
  getPim?: Maybe<
    { __typename?: 'Pim' } & Pick<
      Pim,
      | 'id'
      | 'realEstateType'
      | 'street'
      | 'houseNumber'
      | 'constructionNumberPrefix'
      | 'constructionNumber'
      | 'constructionNumberAddition'
      | 'postalCode'
      | 'district'
      | 'city'
      | 'state'
      | 'county'
      | 'country'
      | 'developmentType'
      | 'status'
      | 'salePrice'
      | 'rentPrice'
      | 'description'
      | 'livingArea'
      | 'propertyType'
      | 'attention'
      | 'completeness'
      | 'archived'
      | 'dateCreated'
    > & {
        images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
        houseGeneral?: Maybe<
          { __typename?: 'HouseGeneral' } & Pick<HouseGeneral, 'floor' | 'propertyConnection' | 'propertyDetails'> & {
              availability?: Maybe<
                { __typename?: 'PropertyAvailabilityInformation' } & Pick<
                  PropertyAvailabilityInformation,
                  'availability' | 'from' | 'notes' | 'habitation' | 'currentUse' | 'currentDestination'
                >
              >;
              construction?: Maybe<
                { __typename?: 'ConstructionInformation' } & Pick<
                  ConstructionInformation,
                  'type' | 'from' | 'to' | 'notes'
                >
              >;
            }
        >;
        houseOutside?: Maybe<
          { __typename?: 'HouseOutside' } & Pick<HouseOutside, 'notes'> & {
              generalInformation?: Maybe<
                { __typename?: 'GeneralInformation' } & Pick<
                  GeneralInformation,
                  'notes' | 'qualityInformation' | 'pictures'
                >
              >;
              propertyRelated?: Maybe<
                { __typename?: 'PropertyRelated' } & Pick<PropertyRelated, 'items' | 'notes' | 'pictures'>
              >;
              roofInformation?: Maybe<
                { __typename?: 'RoofInformation' } & {
                  type?: Maybe<{ __typename?: 'RoofType' } & Pick<RoofType, 'name' | 'notes'>>;
                  material?: Maybe<{ __typename?: 'RoofMaterial' } & Pick<RoofMaterial, 'name' | 'notes'>>;
                  insulation?: Maybe<{ __typename?: 'RoofInsulation' } & Pick<RoofInsulation, 'name' | 'notes'>>;
                }
              >;
            }
        >;
        floors?: Maybe<
          Array<
            { __typename?: 'Floor' } & Pick<Floor, 'id' | 'level' | 'floorType' | 'floorDescription'> & {
                spaces?: Maybe<
                  Array<
                    { __typename?: 'Space' } & Pick<Space, 'id' | 'spaceType' | 'spaceName'> & {
                        configuration?: Maybe<
                          { __typename?: 'KitchenSpace' } & Pick<
                            KitchenSpace,
                            | 'constructionYear'
                            | 'notes'
                            | 'type'
                            | 'constructionType'
                            | 'servicesNotes'
                            | 'services'
                            | 'hob'
                            | 'shape'
                            | 'serviceHeating'
                          > & {
                              appliances?: Maybe<
                                Array<
                                  Maybe<
                                    { __typename?: 'KitchenAppliance' } & Pick<
                                      KitchenAppliance,
                                      'name' | 'quantity' | 'notes'
                                    >
                                  >
                                >
                              >;
                              measurement?: Maybe<
                                { __typename?: 'SpaceMeasurement' } & Pick<
                                  SpaceMeasurement,
                                  'length' | 'width' | 'height' | 'surface' | 'volume'
                                >
                              >;
                              images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                            }
                        >;
                      }
                  >
                >;
              }
          >
        >;
        outsideFeatures?: Maybe<
          Array<
            { __typename?: 'OutsideFeature' } & Pick<OutsideFeature, 'id' | 'description' | 'type'> & {
                configuration?: Maybe<
                  { __typename?: 'GardenFeature' } & Pick<
                    GardenFeature,
                    'mainGarden' | 'type' | 'notes' | 'quality' | 'location' | 'shape' | 'surface' | 'pictures'
                  > & {
                      dimensions?: Maybe<
                        { __typename?: 'RectangleDimensions' } & Pick<RectangleDimensions, 'length' | 'height'>
                      >;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type MeQueryVariables = {};

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName' | 'email' | 'avatar'>>;
};

export const LoginDocument = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) @rest(type: "LoginResponse", path: "/public/auth/login", method: "POST") {
      accessToken
      refreshToken
    }
  }
`;
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($input: ForgotPasswordInput) {
    forgotPassword(input: $input)
      @rest(type: "ForgotPasswordResponse", path: "/public/auth/reset-password", method: "POST") {
      error
    }
  }
`;
export function useForgotPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>,
) {
  return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(
    ForgotPasswordDocument,
    baseOptions,
  );
}
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation ResetPassword($input: ResetPasswordInput, $token: String!) {
    resetPassword(input: $input, token: $token)
      @rest(type: "ResetPasswordResponse", path: "/public/auth/reset-password/{args.token}", method: "POST") {
      error
    }
  }
`;
export function useResetPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>,
) {
  return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(
    ResetPasswordDocument,
    baseOptions,
  );
}
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const CreatePimDocument = gql`
  mutation CreatePim($input: CreatePimInput!) {
    createPim(input: $input) {
      id
    }
  }
`;
export function useCreatePimMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePimMutation, CreatePimMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreatePimMutation, CreatePimMutationVariables>(CreatePimDocument, baseOptions);
}
export type CreatePimMutationHookResult = ReturnType<typeof useCreatePimMutation>;
export type CreatePimMutationResult = ApolloReactCommon.MutationResult<CreatePimMutation>;
export type CreatePimMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreatePimMutation,
  CreatePimMutationVariables
>;
export const UpdatePimGeneralInfoDocument = gql`
  mutation UpdatePimGeneralInfo($input: PimGeneralInput!) {
    updatePimGeneralInfo(input: $input) {
      id
    }
  }
`;
export function useUpdatePimGeneralInfoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdatePimGeneralInfoMutation,
    UpdatePimGeneralInfoMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdatePimGeneralInfoMutation, UpdatePimGeneralInfoMutationVariables>(
    UpdatePimGeneralInfoDocument,
    baseOptions,
  );
}
export type UpdatePimGeneralInfoMutationHookResult = ReturnType<typeof useUpdatePimGeneralInfoMutation>;
export type UpdatePimGeneralInfoMutationResult = ApolloReactCommon.MutationResult<UpdatePimGeneralInfoMutation>;
export type UpdatePimGeneralInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdatePimGeneralInfoMutation,
  UpdatePimGeneralInfoMutationVariables
>;
export const AddFloorToPimDocument = gql`
  mutation AddFloorToPim($input: AddNewFloorInput!) {
    addFloorToPim(input: $input) {
      floors {
        id
      }
    }
  }
`;
export function useAddFloorToPimMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddFloorToPimMutation, AddFloorToPimMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddFloorToPimMutation, AddFloorToPimMutationVariables>(
    AddFloorToPimDocument,
    baseOptions,
  );
}
export type AddFloorToPimMutationHookResult = ReturnType<typeof useAddFloorToPimMutation>;
export type AddFloorToPimMutationResult = ApolloReactCommon.MutationResult<AddFloorToPimMutation>;
export type AddFloorToPimMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddFloorToPimMutation,
  AddFloorToPimMutationVariables
>;
export const AddSpaceToFloorDocument = gql`
  mutation AddSpaceToFloor($input: AddSpaceInput!) {
    addSpaceToFloor(input: $input) {
      id
    }
  }
`;
export function useAddSpaceToFloorMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddSpaceToFloorMutation, AddSpaceToFloorMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddSpaceToFloorMutation, AddSpaceToFloorMutationVariables>(
    AddSpaceToFloorDocument,
    baseOptions,
  );
}
export type AddSpaceToFloorMutationHookResult = ReturnType<typeof useAddSpaceToFloorMutation>;
export type AddSpaceToFloorMutationResult = ApolloReactCommon.MutationResult<AddSpaceToFloorMutation>;
export type AddSpaceToFloorMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddSpaceToFloorMutation,
  AddSpaceToFloorMutationVariables
>;
export const UpdateSpaceDocument = gql`
  mutation UpdateSpace($input: UpdateSpaceInput!) {
    updateSpace(input: $input) {
      id
    }
  }
`;
export function useUpdateSpaceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSpaceMutation, UpdateSpaceMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateSpaceMutation, UpdateSpaceMutationVariables>(
    UpdateSpaceDocument,
    baseOptions,
  );
}
export type UpdateSpaceMutationHookResult = ReturnType<typeof useUpdateSpaceMutation>;
export type UpdateSpaceMutationResult = ApolloReactCommon.MutationResult<UpdateSpaceMutation>;
export type UpdateSpaceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateSpaceMutation,
  UpdateSpaceMutationVariables
>;
export const UpdateFloorDocument = gql`
  mutation UpdateFloor($input: UpdateFloorInput!) {
    updateFloor(input: $input) {
      id
    }
  }
`;
export function useUpdateFloorMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateFloorMutation, UpdateFloorMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateFloorMutation, UpdateFloorMutationVariables>(
    UpdateFloorDocument,
    baseOptions,
  );
}
export type UpdateFloorMutationHookResult = ReturnType<typeof useUpdateFloorMutation>;
export type UpdateFloorMutationResult = ApolloReactCommon.MutationResult<UpdateFloorMutation>;
export type UpdateFloorMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateFloorMutation,
  UpdateFloorMutationVariables
>;
export const AddOutsideFeatureDocument = gql`
  mutation AddOutsideFeature($input: AddOutsideFeatureInput!) {
    addOutsideFeature(input: $input) {
      outsideFeatures {
        id
      }
    }
  }
`;
export function useAddOutsideFeatureMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddOutsideFeatureMutation, AddOutsideFeatureMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddOutsideFeatureMutation, AddOutsideFeatureMutationVariables>(
    AddOutsideFeatureDocument,
    baseOptions,
  );
}
export type AddOutsideFeatureMutationHookResult = ReturnType<typeof useAddOutsideFeatureMutation>;
export type AddOutsideFeatureMutationResult = ApolloReactCommon.MutationResult<AddOutsideFeatureMutation>;
export type AddOutsideFeatureMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddOutsideFeatureMutation,
  AddOutsideFeatureMutationVariables
>;
export const UpdateOutsideFeatureDocument = gql`
  mutation updateOutsideFeature($input: UpdateFeatureInputConfiguration!) {
    updateOutsideFeature(input: $input) {
      id
    }
  }
`;
export function useUpdateOutsideFeatureMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateOutsideFeatureMutation,
    UpdateOutsideFeatureMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateOutsideFeatureMutation, UpdateOutsideFeatureMutationVariables>(
    UpdateOutsideFeatureDocument,
    baseOptions,
  );
}
export type UpdateOutsideFeatureMutationHookResult = ReturnType<typeof useUpdateOutsideFeatureMutation>;
export type UpdateOutsideFeatureMutationResult = ApolloReactCommon.MutationResult<UpdateOutsideFeatureMutation>;
export type UpdateOutsideFeatureMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateOutsideFeatureMutation,
  UpdateOutsideFeatureMutationVariables
>;
export const UpdatePimOutsideInfoDocument = gql`
  mutation UpdatePimOutsideInfo($input: PimOutsideInput!) {
    updatePimOutsideInfo(input: $input) {
      id
    }
  }
`;
export function useUpdatePimOutsideInfoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdatePimOutsideInfoMutation,
    UpdatePimOutsideInfoMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdatePimOutsideInfoMutation, UpdatePimOutsideInfoMutationVariables>(
    UpdatePimOutsideInfoDocument,
    baseOptions,
  );
}
export type UpdatePimOutsideInfoMutationHookResult = ReturnType<typeof useUpdatePimOutsideInfoMutation>;
export type UpdatePimOutsideInfoMutationResult = ApolloReactCommon.MutationResult<UpdatePimOutsideInfoMutation>;
export type UpdatePimOutsideInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdatePimOutsideInfoMutation,
  UpdatePimOutsideInfoMutationVariables
>;
export const CountPimsByParamsDocument = gql`
  query CountPimsByParams($filters: ListPimsFilters) {
    listPims(filters: $filters) {
      metadata {
        total
      }
    }
  }
`;
export function useCountPimsByParamsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CountPimsByParamsQuery, CountPimsByParamsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<CountPimsByParamsQuery, CountPimsByParamsQueryVariables>(
    CountPimsByParamsDocument,
    baseOptions,
  );
}
export function useCountPimsByParamsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CountPimsByParamsQuery, CountPimsByParamsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<CountPimsByParamsQuery, CountPimsByParamsQueryVariables>(
    CountPimsByParamsDocument,
    baseOptions,
  );
}
export type CountPimsByParamsQueryHookResult = ReturnType<typeof useCountPimsByParamsQuery>;
export type CountPimsByParamsLazyQueryHookResult = ReturnType<typeof useCountPimsByParamsLazyQuery>;
export type CountPimsByParamsQueryResult = ApolloReactCommon.QueryResult<
  CountPimsByParamsQuery,
  CountPimsByParamsQueryVariables
>;
export const ListPimsCountDocument = gql`
  query ListPimsCount {
    activeCount: listPims(filters: { archived: false }) {
      metadata {
        total
      }
    }
    archivedCount: listPims(filters: { archived: true }) {
      metadata {
        total
      }
    }
  }
`;
export function useListPimsCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListPimsCountQuery, ListPimsCountQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListPimsCountQuery, ListPimsCountQueryVariables>(ListPimsCountDocument, baseOptions);
}
export function useListPimsCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListPimsCountQuery, ListPimsCountQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListPimsCountQuery, ListPimsCountQueryVariables>(
    ListPimsCountDocument,
    baseOptions,
  );
}
export type ListPimsCountQueryHookResult = ReturnType<typeof useListPimsCountQuery>;
export type ListPimsCountLazyQueryHookResult = ReturnType<typeof useListPimsCountLazyQuery>;
export type ListPimsCountQueryResult = ApolloReactCommon.QueryResult<ListPimsCountQuery, ListPimsCountQueryVariables>;
export const ListPimsDocument = gql`
  query ListPims($archived: Boolean!, $sortColumn: String!, $sortDirection: SortDirection!, $from: Int!, $limit: Int) {
    listPims(
      filters: { archived: $archived }
      pagination: { from: $from, limit: $limit }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        street
        houseNumberPrefix
        houseNumber
        houseNumberAddition
        constructionNumberPrefix
        constructionNumber
        constructionNumberAddition
        city
        dateCreated
        livingArea
        propertyType
        images {
          url
        }
        salePrice
        rentPrice
        completeness
        archived
      }
    }
  }
`;
export function useListPimsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListPimsQuery, ListPimsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListPimsQuery, ListPimsQueryVariables>(ListPimsDocument, baseOptions);
}
export function useListPimsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListPimsQuery, ListPimsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListPimsQuery, ListPimsQueryVariables>(ListPimsDocument, baseOptions);
}
export type ListPimsQueryHookResult = ReturnType<typeof useListPimsQuery>;
export type ListPimsLazyQueryHookResult = ReturnType<typeof useListPimsLazyQuery>;
export type ListPimsQueryResult = ApolloReactCommon.QueryResult<ListPimsQuery, ListPimsQueryVariables>;
export const PimDetailsDocument = gql`
  query PimDetails($id: ID!) {
    getPim(id: $id) {
      id
      realEstateType
      street
      houseNumber
      constructionNumberPrefix
      constructionNumber
      constructionNumberAddition
      postalCode
      district
      city
      state
      county
      country
      developmentType
      status
      salePrice
      rentPrice
      description
      images {
        url
      }
      livingArea
      propertyType
      attention
      completeness
      archived
      dateCreated
      houseGeneral {
        availability {
          availability
          from
          notes
          habitation
          currentUse
          currentDestination
        }
        construction {
          type
          from
          to
          notes
        }
        floor
        propertyConnection
        propertyDetails
      }
      houseOutside {
        generalInformation {
          notes
          qualityInformation
          pictures
        }
        propertyRelated {
          items
          notes
          pictures
        }
        roofInformation {
          type {
            name
            notes
          }
          material {
            name
            notes
          }
          insulation {
            name
            notes
          }
        }
        notes
      }
      floors {
        id
        level
        floorType
        floorDescription
        spaces {
          id
          spaceType
          spaceName
          configuration {
            ... on KitchenSpace {
              constructionYear
              notes
              type
              constructionType
              servicesNotes
              services
              appliances {
                name
                quantity
                notes
              }
              hob
              shape
              measurement {
                length
                width
                height
                surface
                volume
              }
              serviceHeating
              images {
                url
              }
            }
          }
        }
      }
      outsideFeatures {
        id
        description
        type
        configuration {
          ... on GardenFeature {
            mainGarden
            type
            notes
            quality
            location
            shape
            dimensions {
              ... on RectangleDimensions {
                length
                height
              }
            }
            surface
            pictures
          }
        }
      }
    }
  }
`;
export function usePimDetailsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimDetailsQuery, PimDetailsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimDetailsQuery, PimDetailsQueryVariables>(PimDetailsDocument, baseOptions);
}
export function usePimDetailsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimDetailsQuery, PimDetailsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimDetailsQuery, PimDetailsQueryVariables>(PimDetailsDocument, baseOptions);
}
export type PimDetailsQueryHookResult = ReturnType<typeof usePimDetailsQuery>;
export type PimDetailsLazyQueryHookResult = ReturnType<typeof usePimDetailsLazyQuery>;
export type PimDetailsQueryResult = ApolloReactCommon.QueryResult<PimDetailsQuery, PimDetailsQueryVariables>;
export const MeDocument = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      avatar
    }
  }
`;
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
