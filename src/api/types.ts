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
  UploadFileInput: any;
  PathBuilder: any;
  ServiceConfigurationInput: any;
  AbsoluteFloat: any;
  CostVat: any;
  Date: string;
  Dictionary: any;
  LabelProperty: any;
  LastEditedBy: any;
  PimOutsideInput: any;
  UpdateFeatureInputConfiguration: any;
  UpdateSpaceInputConfiguration: any;
  Upload: any;
};

export enum FilePermission {
  Public = 'public',
  Private = 'private',
}

export enum EntityWithFiles {
  Pim = 'Pim',
  Space = 'Space',
  OutsideFeature = 'OutsideFeature',
  OutsideGeneral = 'OutsideGeneral',
  OutsidePropertyRelated = 'OutsidePropertyRelated',
  RoofInformation = 'RoofInformation',
  CadastreMap = 'CadastreMap',
}

export type CreateFileInput = {
  fileName: Scalars['String'];
  fileType: Scalars['String'];
  permission: FilePermission;
  description?: Maybe<Scalars['String']>;
};

export type AddFilesInput = {
  fileIDs: Array<Scalars['ID']>;
  entity: EntityWithFiles;
  entityID: Scalars['ID'];
};

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
  entityID?: Maybe<Scalars['String']>;
  entity?: Maybe<EntityWithFiles>;
};

export type InitSendFileInput = {
  fileName?: Maybe<Scalars['String']>;
  fileType?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UploadFileResponse = {
  __typename?: 'UploadFileResponse';
  id?: Maybe<Scalars['String']>;
};

export type GetPrivateFileInput = {
  key: Scalars['ID'];
  entityID?: Maybe<Scalars['String']>;
  entity?: Maybe<EntityWithFiles>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCadastre?: Maybe<PimCadastre>;
  addCadastreMaps?: Maybe<Pim>;
  addCost: CostResult;
  addFiles: Array<File>;
  addFloorToPim: Pim;
  addMeter?: Maybe<Pim>;
  addOutsideFeature: Pim;
  addPimLabel: Pim;
  addPricing: Pim;
  addReading?: Maybe<Pim>;
  addService?: Maybe<PimWithNewService>;
  addSpaceToFloor: PimWithUpdatedSpace;
  createPim?: Maybe<Pim>;
  deleteUser?: Maybe<Scalars['String']>;
  forgotPassword?: Maybe<ForgotPasswordResponse>;
  initSendFile: File;
  login?: Maybe<LoginResponse>;
  removePim?: Maybe<Scalars['String']>;
  removePimLabel: Pim;
  resetPassword?: Maybe<ResetPasswordResponse>;
  setLinkedProperties: Pim;
  updateCadastre?: Maybe<Pim>;
  updateCadastreMap?: Maybe<Pim>;
  updateCost: CostResult;
  updateFloor: Pim;
  updateInvestment: Pim;
  updateMeter?: Maybe<Pim>;
  updateOutsideFeature: Pim;
  updatePimGeneralInfo: Pim;
  updatePimOutsideInfo: Pim;
  updatePricing: Pim;
  updateReading?: Maybe<Pim>;
  updateService?: Maybe<Pim>;
  updateSpace: Pim;
  updateSpecification: Pim;
  uploadFile?: Maybe<UploadFileResponse>;
};

export type MutationAddCadastreArgs = {
  input: AddCadastreInput;
};

export type MutationAddCadastreMapsArgs = {
  input: AddCadastreMapsInput;
};

export type MutationAddCostArgs = {
  input: AddCostInput;
};

export type MutationAddFilesArgs = {
  input: AddFilesInput;
};

export type MutationAddFloorToPimArgs = {
  input: AddNewFloorInput;
};

export type MutationAddMeterArgs = {
  input: AddMeterInput;
};

export type MutationAddOutsideFeatureArgs = {
  input: AddOutsideFeatureInput;
};

export type MutationAddPimLabelArgs = {
  input: PimLabelInput;
};

export type MutationAddPricingArgs = {
  input: AddPricingInput;
};

export type MutationAddReadingArgs = {
  input: AddReadingInput;
};

export type MutationAddServiceArgs = {
  input: AddServiceInput;
};

export type MutationAddSpaceToFloorArgs = {
  input: AddSpaceInput;
};

export type MutationCreatePimArgs = {
  input: CreatePimInput;
};

export type MutationDeleteUserArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationForgotPasswordArgs = {
  input?: Maybe<ForgotPasswordInput>;
};

export type MutationInitSendFileArgs = {
  input: InitSendFileInput;
};

export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};

export type MutationRemovePimArgs = {
  id: Scalars['String'];
};

export type MutationRemovePimLabelArgs = {
  id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
  input?: Maybe<ResetPasswordInput>;
  token: Scalars['String'];
};

export type MutationSetLinkedPropertiesArgs = {
  input: LinkedPimInput;
};

export type MutationUpdateCadastreArgs = {
  input: UpdateCadastreInput;
};

export type MutationUpdateCadastreMapArgs = {
  input: UpdateCadastreMapInput;
};

export type MutationUpdateCostArgs = {
  input: UpdateCostInput;
};

export type MutationUpdateFloorArgs = {
  input: UpdateFloorInput;
};

export type MutationUpdateInvestmentArgs = {
  input: InvestmentInput;
};

export type MutationUpdateMeterArgs = {
  input: UpdateMeterInput;
};

export type MutationUpdateOutsideFeatureArgs = {
  input: Scalars['UpdateFeatureInputConfiguration'];
};

export type MutationUpdatePimGeneralInfoArgs = {
  input: PimGeneralInput;
};

export type MutationUpdatePimOutsideInfoArgs = {
  input: Scalars['PimOutsideInput'];
};

export type MutationUpdatePricingArgs = {
  input: UpdatePricingInput;
};

export type MutationUpdateReadingArgs = {
  input: UpdateReadingInput;
};

export type MutationUpdateServiceArgs = {
  input: UpdateServiceInput;
};

export type MutationUpdateSpaceArgs = {
  input: UpdateSpaceInput;
};

export type MutationUpdateSpecificationArgs = {
  input: SpecificationInput;
};

export type MutationUploadFileArgs = {
  input: Scalars['UploadFileInput'];
  pathBuilder?: Maybe<Scalars['PathBuilder']>;
};

export enum CadastreMapType {
  Map = 'Map',
  Register = 'Register',
}

export enum CodeSizeType {
  Apartment = 'Apartment',
  Tightness = 'Tightness',
  PartLot = 'PartLot',
  InWholePlot = 'InWholePlot',
  MembershipRight = 'MembershipRight',
}

export enum LeaseholderType {
  Different = 'Different',
  Township = 'Township',
  Private = 'Private',
}

export enum CadastreType {
  CadastreMap = 'CadastreMap',
  Plot = 'Plot',
}

export enum LeaseInformationType {
  Virable = 'Virable',
  Fixed = 'Fixed',
}

export enum LeaseDurationType {
  Forever = 'Forever',
  Temporary = 'Temporary',
  Constantly = 'Constantly',
}

export enum OwnershipChoiceType {
  NoneOfThem = 'NoneOfThem',
  UseAndHabitation = 'UseAndHabitation',
  Usufruct = 'Usufruct',
}

export type CadastrePlotInput = {
  id?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  municipalCode?: Maybe<Scalars['String']>;
  sectionCode?: Maybe<Scalars['String']>;
  plot?: Maybe<Scalars['String']>;
  indexNumber?: Maybe<Scalars['String']>;
  surface?: Maybe<Scalars['Float']>;
  share?: Maybe<Scalars['String']>;
  codeSize?: Maybe<CodeSizeType>;
  ownership?: Maybe<OwnershipInput>;
  lease?: Maybe<LeaseInput>;
  boughtOff?: Maybe<BoughtOffInput>;
};

export type UpdateCadastreInput = {
  id: Scalars['String'];
  pimId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  plot?: Maybe<CadastrePlotInput>;
};

export type AddCadastreInput = {
  pimId: Scalars['String'];
  type: CadastreType;
  description?: Maybe<Scalars['String']>;
};

export type AddCadastreMapsInput = {
  pimId: Scalars['String'];
  maps: Array<NewCadastreMapInput>;
};

export type BoughtOff = {
  __typename?: 'BoughtOff';
  date?: Maybe<Scalars['Date']>;
  perpetually?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
};

export type BoughtOffInput = {
  date?: Maybe<Scalars['Date']>;
  perpetually?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
};

export type CadastrePlot = {
  __typename?: 'CadastrePlot';
  notes?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  municipalCode?: Maybe<Scalars['String']>;
  sectionCode?: Maybe<Scalars['String']>;
  plot?: Maybe<Scalars['String']>;
  indexNumber?: Maybe<Scalars['String']>;
  surface?: Maybe<Scalars['Float']>;
  share?: Maybe<Scalars['String']>;
  codeSize?: Maybe<CodeSizeType>;
  ownership?: Maybe<Ownership>;
  lease?: Maybe<Lease>;
  boughtOff?: Maybe<BoughtOff>;
};

export type CadastreMap = {
  __typename?: 'CadastreMap';
  id: Scalars['String'];
  mapName: Scalars['String'];
  file?: Maybe<File>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<CadastreMapType>;
};

export type Lease = {
  __typename?: 'Lease';
  leaseholder?: Maybe<LeaseholderType>;
  information?: Maybe<LeaseInformationType>;
  duration?: Maybe<LeaseDurationType>;
  yearlyPrice?: Maybe<Scalars['Float']>;
  endDate?: Maybe<Scalars['Date']>;
};

export type NewCadastreMapInput = {
  mapName: Scalars['String'];
  fileID: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: CadastreMapType;
};

export type LeaseInput = {
  leaseholder?: Maybe<LeaseholderType>;
  information?: Maybe<LeaseInformationType>;
  duration?: Maybe<LeaseDurationType>;
  yearlyPrice?: Maybe<Scalars['Float']>;
  endDate?: Maybe<Scalars['Date']>;
};

export type Ownership = {
  __typename?: 'Ownership';
  stressedInChargeOf?: Maybe<Array<Maybe<OwnershipChoiceType>>>;
};

export type OwnershipInput = {
  stressedInChargeOf?: Maybe<Array<Maybe<OwnershipChoiceType>>>;
};

export type Cadastre = {
  __typename?: 'Cadastre';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: CadastreType;
  maps?: Maybe<Array<CadastreMap>>;
  plot?: Maybe<CadastrePlot>;
  dateCreated?: Maybe<Scalars['Date']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Scalars['LastEditedBy']>;
};

export type PimCadastre = {
  __typename?: 'PimCadastre';
  id: Scalars['ID'];
  cadastre?: Maybe<Array<Cadastre>>;
};

export type CadastreMapInput = {
  mapName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<CadastreMapType>;
};

export type UpdateCadastreMapInput = {
  pimId: Scalars['String'];
  cadastreId: Scalars['String'];
  mapId: Scalars['String'];
  map?: Maybe<CadastreMapInput>;
  fileId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  dictionary?: Maybe<Scalars['Dictionary']>;
  getChangesHistory: Array<Event>;
  getPim?: Maybe<Pim>;
  getPimCadastre: PimCadastre;
  getPimFloors: PimFloor;
  getPimGeneral: PimGeneral;
  getPimOutside: PimOutside;
  getPimServices: PimServices;
  getPimSpecification: PimSpecification;
  getPricing: PimPrices;
  getProfile?: Maybe<Profile>;
  getPropertyTypes: Array<Scalars['String']>;
  listPims: PimSearchResult;
  me?: Maybe<Profile>;
};

export type QueryGetChangesHistoryArgs = {
  filters?: Maybe<ChangesHistoryFilters>;
};

export type QueryGetPimArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimCadastreArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimFloorsArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimGeneralArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimOutsideArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimServicesArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimSpecificationArgs = {
  id: Scalars['ID'];
};

export type QueryGetPricingArgs = {
  id: Scalars['ID'];
};

export type QueryGetProfileArgs = {
  id: Scalars['ID'];
};

export type QueryListPimsArgs = {
  filters?: Maybe<ListPimsFilters>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Array<Sort>>;
};

export enum MeterType {
  Water = 'Water',
  Gas = 'Gas',
  Electric = 'Electric',
}

export enum HotWaterSupplyType {
  CentralHeatingBoiler = 'CentralHeatingBoiler',
  Boiler = 'Boiler',
  Geyser = 'Geyser',
  SolarWaterHeater = 'SolarWaterHeater',
}

export enum HotWaterSupplyFuelType {
  Gas = 'Gas',
  Electric = 'Electric',
  Oil = 'Oil',
}

export enum HeatingSourceType {
  GeothermalHeat = 'GeothermalHeat',
  Fireplace = 'Fireplace',
  AllBurner = 'AllBurner',
  PelletStove = 'PelletStove',
  BlockHeating = 'BlockHeating',
  WoodStove = 'WoodStove',
  DistrictHeating = 'DistrictHeating',
  CentralHeatingBoiler = 'CentralHeatingBoiler',
  CoalStove = 'CoalStove',
  PartialElectricHeating = 'PartialElectricHeating',
  MotherHearth = 'MotherHearth',
  GasFire = 'GasFire',
  PossibleFireplace = 'PossibleFireplace',
  HeatRecoverySystem = 'HeatRecoverySystem',
  GasHeaters = 'GasHeaters',
  HeatPump = 'HeatPump',
  HotAirHeating = 'HotAirHeating',
  UnderfloorHeating = 'UnderfloorHeating',
  UnderfloorHeatingCompletely = 'UnderfloorHeatingCompletely',
  WallHeating = 'WallHeating',
}

export enum AdditionalServiceType {
  AirConditioning = 'AirConditioning',
  AlarmSystem = 'AlarmSystem',
  ExteriorSunProtection = 'ExteriorSunProtection',
  Skylight = 'Skylight',
  SateliteDish = 'SateliteDish',
  SlidingDoor = 'SlidingDoor',
  CableTv = 'CableTv',
  Windmill = 'Windmill',
  SolarCollector = 'SolarCollector',
  SwimmingPool = 'SwimmingPool',
  FrenchBalcony = 'FrenchBalcony',
  MechanicalVentilation = 'MechanicalVentilation',
  Elevator = 'Elevator',
  Flue = 'Flue',
  Shutters = 'Shutters',
}

export enum OwnershipType {
  Rent = 'Rent',
  Leased = 'Leased',
  Owned = 'Owned',
}

export enum ServiceType {
  HotWaterSupplies = 'HotWaterSupplies',
  HeatingSources = 'HeatingSources',
  AdditionalServices = 'AdditionalServices',
}

export type AddMeterInput = {
  pimId: Scalars['String'];
  name: Scalars['String'];
  type: MeterType;
};

export type UpdateMeterInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AddReadingInput = {
  pimId: Scalars['String'];
  meterId: Scalars['String'];
  value?: Maybe<Scalars['Int']>;
  dateOfReading?: Maybe<Scalars['Date']>;
  feedInId?: Maybe<Scalars['String']>;
};

export type UpdateReadingInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  value?: Maybe<Scalars['Int']>;
  dateOfReading?: Maybe<Scalars['Date']>;
  feedInId?: Maybe<Scalars['String']>;
};

export type AddServiceInput = {
  pimId: Scalars['String'];
  name: Scalars['String'];
  type: ServiceType;
  configuration?: Maybe<Scalars['ServiceConfigurationInput']>;
};

export type UpdateServiceInput = {
  pimId: Scalars['String'];
  serviceId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  yearOfInstallation?: Maybe<Scalars['Int']>;
  ownership?: Maybe<OwnershipType>;
  configuration?: Maybe<Scalars['ServiceConfigurationInput']>;
};

export type Reading = {
  __typename?: 'Reading';
  id: Scalars['String'];
  value?: Maybe<Scalars['Int']>;
  dateOfReading?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  feedInId?: Maybe<Scalars['String']>;
};

export type Meter = {
  __typename?: 'Meter';
  id: Scalars['String'];
  type: MeterType;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  readings?: Maybe<Array<Reading>>;
};

export type HotWaterSupplyConfiguration = {
  __typename?: 'HotWaterSupplyConfiguration';
  type: HotWaterSupplyType;
  fuel?: Maybe<HotWaterSupplyFuelType>;
};

export type HeatingSourceConfiguration = {
  __typename?: 'HeatingSourceConfiguration';
  type: HeatingSourceType;
};

export type AdditionalServiceConfiguration = {
  __typename?: 'AdditionalServiceConfiguration';
  type: AdditionalServiceType;
};

export type ServiceConfiguration =
  | HotWaterSupplyConfiguration
  | HeatingSourceConfiguration
  | AdditionalServiceConfiguration;

export type Service = {
  __typename?: 'Service';
  id: Scalars['String'];
  type: ServiceType;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  yearOfInstallation?: Maybe<Scalars['Int']>;
  configuration: ServiceConfiguration;
  ownership?: Maybe<OwnershipType>;
};

export type PimServices = {
  __typename?: 'PimServices';
  id: Scalars['String'];
  meters?: Maybe<Array<Meter>>;
  hotWaterSupplies?: Maybe<Array<Service>>;
  heatingSources?: Maybe<Array<Service>>;
  additionalServices?: Maybe<Array<Service>>;
};

export type PimWithNewService = {
  __typename?: 'PimWithNewService';
  pim: Pim;
  newService: Service;
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

export type AddCostInput = {
  id: Scalars['ID'];
  type: CostType;
  name?: Maybe<Scalars['String']>;
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

export type AddPricingInput = {
  id: Scalars['ID'];
  types: Array<PricingType>;
};

export type AddSpaceInput = {
  spaceType: SpaceType;
  extraRoomPossibility: Scalars['Boolean'];
  pimId: Scalars['String'];
  floorId: Scalars['String'];
  spaceName?: Maybe<Scalars['String']>;
};

export type Approvals = {
  __typename?: 'Approvals';
  label?: Maybe<ApprovalType>;
  notes?: Maybe<Scalars['String']>;
};

export type ApprovalsInput = {
  label?: Maybe<ApprovalType>;
  notes?: Maybe<Scalars['String']>;
};

export enum ApprovalType {
  AdaptedHome = 'AdaptedHome',
  EnergyPerformanceAdvice = 'EnergyPerformanceAdvice',
  PoliceMark = 'PoliceMark',
  GeneralHomeApproval = 'GeneralHomeApproval',
  GiwGuaranteeCertificate = 'GiwGuaranteeCertificate',
  SwkGuaranteeCertificate = 'SwkGuaranteeCertificate',
  ArchitecturalInspection = 'ArchitecturalInspection',
  HouseGuarantee = 'HouseGuarantee',
  HousingGuaranteeCertificate = 'HousingGuaranteeCertificate',
  FireSafety = 'FireSafety',
  KiwaSafeLiving = 'KiwaSafeLiving',
  QualityMarkCertificate = 'QualityMarkCertificate',
}

export enum BathroomServices {
  Bidet = 'Bidet',
  Sauna = 'Sauna',
  WashingMachineConnection = 'WashingMachineConnection',
  Shower = 'Shower',
  SteamCabin = 'SteamCabin',
  Sink = 'Sink',
  CoubleWashbasin = 'CoubleWashbasin',
  Toilet = 'Toilet',
  Washbasin = 'Washbasin',
  WalkInShower = 'WalkInShower',
  Urinal = 'Urinal',
  Whirlpool = 'Whirlpool',
  Jacuzzi = 'Jacuzzi',
  SitzBath = 'SitzBath',
  Bathtub = 'Bathtub',
}

export type BathroomSpace = {
  __typename?: 'BathroomSpace';
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<BathroomServices>>>;
  servicesNotes?: Maybe<Scalars['String']>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<SpaceMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
};

export type BedroomSpace = {
  __typename?: 'BedroomSpace';
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<SpaceMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
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

export type Cost = {
  __typename?: 'Cost';
  id: Scalars['ID'];
  serviceCosts?: Maybe<Scalars['AbsoluteFloat']>;
  paymentsFrequency?: Maybe<CostPaymentFrequency>;
  vatTaxedServiceCosts?: Maybe<Scalars['AbsoluteFloat']>;
  vatPercentage?: Maybe<Scalars['CostVat']>;
  notes?: Maybe<Scalars['String']>;
  type: CostType;
  name?: Maybe<Scalars['String']>;
};

export enum CostPaymentFrequency {
  Monthly = 'Monthly',
  Yearly = 'Yearly',
}

export type CostResult = {
  __typename?: 'CostResult';
  pim: Pim;
  cost: Cost;
};

export enum CostType {
  Service = 'Service',
  Heating = 'Heating',
  Electricity = 'Electricity',
  Water = 'Water',
  Sewage = 'Sewage',
  WaterBoard = 'WaterBoard',
  LandConsolidationInterest = 'LandConsolidationInterest',
  HomeownerAssociation = 'HomeownerAssociation',
  OzbUserPart = 'OzbUserPart',
  OzbBusinessPart = 'OzbBusinessPart',
  Custom = 'Custom',
}

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

export type Energy = {
  __typename?: 'Energy';
  label?: Maybe<EnergyType>;
  energyIndex?: Maybe<Scalars['String']>;
  endDateEnergyLabel?: Maybe<Scalars['Date']>;
  EPC?: Maybe<Scalars['String']>;
  characteristicType?: Maybe<EnergyCharasteristicType>;
  notes?: Maybe<Scalars['String']>;
};

export enum EnergyCharasteristicType {
  Beng = 'Beng',
  NaturalEnergy = 'NaturalEnergy',
  ZeroOnMeter = 'ZeroOnMeter',
}

export type EnergyInput = {
  label?: Maybe<EnergyType>;
  energyIndex?: Maybe<Scalars['String']>;
  endDateEnergyLabel?: Maybe<Scalars['Date']>;
  EPC?: Maybe<Scalars['String']>;
  characteristicType?: Maybe<EnergyCharasteristicType>;
  notes?: Maybe<Scalars['String']>;
};

export enum EnergyType {
  A = 'A',
  A1Plus = 'A1Plus',
  A2Plus = 'A2Plus',
  A3Plus = 'A3Plus',
  A4Plus = 'A4Plus',
  A5Plus = 'A5Plus',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
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

export type Floor = {
  __typename?: 'Floor';
  id: Scalars['String'];
  floorDescription?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  floorType: FloorType;
  spaces?: Maybe<Array<Space>>;
  lastEditedBy?: Maybe<Scalars['LastEditedBy']>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export enum FloorType {
  Attic = 'Attic',
  Floor = 'Floor',
  Basement = 'Basement',
  GroundFloor = 'GroundFloor',
  Loft = 'Loft',
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
  images?: Maybe<Array<File>>;
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

export enum GardenType {
  Backyard = 'Backyard',
  PatioOrAtrium = 'PatioOrAtrium',
  Place = 'Place',
  AllGroundGarden = 'AllGroundGarden',
  FrontGarden = 'FrontGarden',
  SunTerrace = 'SunTerrace',
  BackGarden = 'BackGarden',
}

export type GeneralInformation = {
  __typename?: 'GeneralInformation';
  qualityInformation?: Maybe<Array<Maybe<QualityInformations>>>;
  images?: Maybe<Array<File>>;
  notes?: Maybe<Scalars['String']>;
};

export type GeneralInformationInput = {
  qualityInformation?: Maybe<Array<Maybe<QualityInformations>>>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
};

export type HomeOfficeSpace = {
  __typename?: 'HomeOfficeSpace';
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<SpaceMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
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
  availability?: Maybe<PropertyAvailabilityInformationInput>;
  construction?: Maybe<ConstructionInformationInput>;
  floor?: Maybe<FloorType>;
  propertyConnection?: Maybe<PropertyConnection>;
  propertyDetails?: Maybe<PropertyTypeDetailed>;
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

export type Investment = {
  __typename?: 'Investment';
  netRentalIncome?: Maybe<Scalars['AbsoluteFloat']>;
  grossRentalIncome?: Maybe<Scalars['AbsoluteFloat']>;
  economicRentalValue?: Maybe<Scalars['AbsoluteFloat']>;
  averageMaturity?: Maybe<Scalars['AbsoluteFloat']>;
  rentIndexed?: Maybe<Scalars['Boolean']>;
  splitApartment?: Maybe<Scalars['Boolean']>;
  averageVacancyPercentage?: Maybe<Scalars['Float']>;
  numberOfRentableUnits?: Maybe<Scalars['Float']>;
  amountOfTenants?: Maybe<Scalars['Int']>;
  remainingTermContacts?: Maybe<Scalars['Int']>;
  vacancySquareMeters?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type InvestmentInput = {
  id: Scalars['ID'];
  netRentalIncome?: Maybe<Scalars['AbsoluteFloat']>;
  grossRentalIncome?: Maybe<Scalars['AbsoluteFloat']>;
  economicRentalValue?: Maybe<Scalars['AbsoluteFloat']>;
  averageMaturity?: Maybe<Scalars['AbsoluteFloat']>;
  rentIndexed?: Maybe<Scalars['Boolean']>;
  splitApartment?: Maybe<Scalars['Boolean']>;
  averageVacancyPercentage?: Maybe<Scalars['Float']>;
  numberOfRentableUnits?: Maybe<Scalars['Float']>;
  amountOfTenants?: Maybe<Scalars['Int']>;
  remainingTermContacts?: Maybe<Scalars['Int']>;
  vacancySquareMeters?: Maybe<Scalars['Int']>;
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

export type LinkedPim = {
  __typename?: 'LinkedPim';
  id: Scalars['ID'];
  houseNumberPrefix?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  houseNumberAddition?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  district?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  propertyType?: Maybe<PropertyType>;
  attention?: Maybe<Scalars['String']>;
  plotNumber?: Maybe<Scalars['Int']>;
  salePrice?: Maybe<Scalars['AbsoluteFloat']>;
  rentPrice?: Maybe<Scalars['AbsoluteFloat']>;
  status: PimStatus;
  images?: Maybe<Array<File>>;
};

export type LinkedPimInput = {
  pimId: Scalars['ID'];
  linkedPimIDs: Array<Scalars['ID']>;
};

export type ListPim = {
  __typename?: 'ListPim';
  id: Scalars['String'];
  houseNumberPrefix?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  houseNumberAddition?: Maybe<Scalars['String']>;
  constructionNumberPrefix?: Maybe<Scalars['String']>;
  constructionNumber?: Maybe<Scalars['String']>;
  constructionNumberAddition?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  district?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  completeness: Scalars['Float'];
  propertyType?: Maybe<PropertyType>;
  salePrice?: Maybe<Scalars['Float']>;
  rentPrice?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<File>>;
  livingArea?: Maybe<Scalars['Int']>;
  attention?: Maybe<Scalars['String']>;
  dateCreated: Scalars['Date'];
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Scalars['LastEditedBy']>;
  houseOutside?: Maybe<ListPimHouseOutside>;
  archived?: Maybe<Scalars['Boolean']>;
  status: PimStatus;
  developmentType: DevelopmentType;
};

export type ListPimHouseOutside = {
  __typename?: 'ListPimHouseOutside';
  propertyRelated?: Maybe<ListPimPropertyRelated>;
};

export type ListPimPropertyRelated = {
  __typename?: 'ListPimPropertyRelated';
  items?: Maybe<Array<Maybe<PropertyRelatedItems>>>;
};

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

export type LivingRoomSpace = {
  __typename?: 'LivingRoomSpace';
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  type?: Maybe<LivingRoomType>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<SpaceMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
  stairs?: Maybe<Scalars['Boolean']>;
};

export enum LivingRoomType {
  ThroughRoom = 'ThroughRoom',
  FormerEnSuite = 'FormerEnSuite',
  RoomAndSuite = 'RoomAndSuite',
  Conservatory = 'Conservatory',
}

export enum Location {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West',
}

export type ObligationToProvideInformation = {
  __typename?: 'ObligationToProvideInformation';
  label?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type ObligationToProvideInformationInput = {
  label?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export enum ObligationToProvideInformationType {
  Boot = 'Boot',
  BwLetter = 'BWLetter',
  SoilPollution = 'SoilPollution',
  Asbestos = 'Asbestos',
  OwnSake = 'OwnSake',
}

export type OtherSpace = {
  __typename?: 'OtherSpace';
  name?: Maybe<Scalars['String']>;
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<SpaceMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
};

export type OutsideFeature = {
  __typename?: 'OutsideFeature';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: OutsideFeatureType;
  configuration?: Maybe<OutsideFeatureConfiguration>;
  dateCreated?: Maybe<Scalars['Date']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Scalars['LastEditedBy']>;
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
  id: Scalars['ID'];
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
  houseGeneral?: Maybe<HouseGeneral>;
  houseOutside?: Maybe<HouseOutside>;
  outsideFeatures?: Maybe<Array<OutsideFeature>>;
  floors?: Maybe<Array<Floor>>;
  pricing?: Maybe<Pricing>;
  costs?: Maybe<Array<Cost>>;
  lastEditedBy?: Maybe<Scalars['LastEditedBy']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  investment?: Maybe<Investment>;
  specification?: Maybe<Specification>;
  linkedProperties?: Maybe<Array<Pim>>;
};

export type PimFloor = {
  __typename?: 'PimFloor';
  id: Scalars['String'];
  floors?: Maybe<Array<Floor>>;
};

export type PimGeneral = {
  __typename?: 'PimGeneral';
  id: Scalars['ID'];
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
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Scalars['LastEditedBy']>;
  houseGeneral?: Maybe<HouseGeneral>;
};

export type PimGeneralInput = {
  id: Scalars['ID'];
  realEstateType?: Maybe<RealEstateType>;
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
  developmentType?: Maybe<DevelopmentType>;
  status?: Maybe<PimStatus>;
  salePrice?: Maybe<Scalars['Float']>;
  rentPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  livingArea?: Maybe<Scalars['Int']>;
  attention?: Maybe<Scalars['String']>;
  houseGeneral?: Maybe<HouseGeneralInput>;
};

export type PimLabel = {
  __typename?: 'PimLabel';
  id: Scalars['ID'];
  icon?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  property: Scalars['LabelProperty'];
};

export type PimLabelInput = {
  pimId: Scalars['ID'];
  icon?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  property: Scalars['LabelProperty'];
};

export type PimListSearchResult = {
  __typename?: 'PimListSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<ListPim>>;
};

export type PimOutside = {
  __typename?: 'PimOutside';
  id: Scalars['ID'];
  houseOutside?: Maybe<HouseOutside>;
  outsideFeatures?: Maybe<Array<OutsideFeature>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Scalars['LastEditedBy']>;
};

export type PimPrices = {
  __typename?: 'PimPrices';
  id: Scalars['ID'];
  pricing?: Maybe<Pricing>;
  costs?: Maybe<Array<Cost>>;
  investment?: Maybe<Investment>;
};

export type PimSearchResult = {
  __typename?: 'PimSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<Pim>>;
};

export type PimSpecification = {
  __typename?: 'PimSpecification';
  id: Scalars['ID'];
  specification?: Maybe<Specification>;
  linkedProperties?: Maybe<Array<LinkedPim>>;
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

export type PimWithUpdatedSpace = {
  __typename?: 'PimWithUpdatedSpace';
  newSpace: Space;
  pim: Pim;
};

export type Pricing = {
  __typename?: 'Pricing';
  rent?: Maybe<RentInformations>;
  sale?: Maybe<SaleInformations>;
};

export enum PricingType {
  Sale = 'Sale',
  Rent = 'Rent',
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
  images?: Maybe<Array<File>>;
};

export type PropertyRelatedInput = {
  items?: Maybe<Array<Maybe<PropertyRelatedItems>>>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum PropertyRelatedItems {
  Balcony = 'Balcony',
  Terrace = 'Terrace',
  RoofTerrace = 'RoofTerrace',
  Porch = 'Porch',
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

export enum PurchaseMix {
  MgeConstruction = 'MgeConstruction',
  PartOfIndividualProject = 'PartOfIndividualProject',
  PurchaseGuarantee = 'PurchaseGuarantee',
  MixedFormPurchaseRent = 'MixedFormPurchaseRent',
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

export enum RentCondition {
  VatTaxed = 'VatTaxed',
  ExcludingServiceCosts = 'ExcludingServiceCosts',
  Furnished = 'Furnished',
  IncludingServiceCosts = 'IncludingServiceCosts',
  Indexed = 'Indexed',
}

export type RentInformations = {
  __typename?: 'RentInformations';
  rentalPrice?: Maybe<Scalars['AbsoluteFloat']>;
  paymentFrequency?: Maybe<RentPaymentFrequency>;
  suffix?: Maybe<Scalars['String']>;
  conditions?: Maybe<Array<RentCondition>>;
  notes?: Maybe<Scalars['String']>;
};

export type RentInformationsInput = {
  rentalPrice?: Maybe<Scalars['AbsoluteFloat']>;
  suffix?: Maybe<Scalars['String']>;
  conditions?: Maybe<Array<RentCondition>>;
  notes?: Maybe<Scalars['String']>;
  paymentFrequency?: Maybe<RentPaymentFrequency>;
};

export enum RentPaymentFrequency {
  PerMonth = 'PerMonth',
  Annual = 'Annual',
  Custom = 'Custom',
}

export type RoofInformation = {
  __typename?: 'RoofInformation';
  type?: Maybe<RoofType>;
  material?: Maybe<RoofMaterial>;
  insulation?: Maybe<RoofInsulation>;
  images?: Maybe<Array<File>>;
};

export type RoofInformationInput = {
  type?: Maybe<RoofTypeInput>;
  material?: Maybe<RoofMaterialInput>;
  insulation?: Maybe<RoofInsulationInput>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
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

export enum SaleCondition {
  VatTaxed = 'VatTaxed',
  IncludingVat = 'IncludingVat',
  ExcludingConstructionInterest = 'ExcludingConstructionInterest',
}

export type SaleGeneral = {
  __typename?: 'SaleGeneral';
  prefix?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['AbsoluteFloat']>;
  suffix?: Maybe<Scalars['String']>;
  executionSale?: Maybe<Scalars['Boolean']>;
  dateOfExecutionSale?: Maybe<Scalars['Date']>;
  conditions?: Maybe<Array<SaleCondition>>;
  purchaseMix?: Maybe<Array<PurchaseMix>>;
  notes?: Maybe<Scalars['String']>;
};

export type SaleGeneralInput = {
  prefix?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['AbsoluteFloat']>;
  suffix?: Maybe<Scalars['String']>;
  executionSale?: Maybe<Scalars['Boolean']>;
  dateOfExecutionSale?: Maybe<Scalars['Date']>;
  conditions?: Maybe<Array<SaleCondition>>;
  purchaseMix?: Maybe<Array<PurchaseMix>>;
  notes?: Maybe<Scalars['String']>;
};

export type SaleInformations = {
  __typename?: 'SaleInformations';
  general?: Maybe<SaleGeneral>;
  woz?: Maybe<SaleWoz>;
};

export type SaleInformationsInput = {
  general?: Maybe<SaleGeneralInput>;
  woz?: Maybe<SaleWozInput>;
};

export enum SalePriceSuffix {
  CostsBuyer = 'CostsBuyer',
  FreeInName = 'FreeInName',
  NoneOfThem = 'NoneOfThem',
}

export type SaleWoz = {
  __typename?: 'SaleWOZ';
  wozPrice?: Maybe<Scalars['AbsoluteFloat']>;
  referenceDateWoz?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
};

export type SaleWozInput = {
  wozPrice?: Maybe<Scalars['AbsoluteFloat']>;
  referenceDateWoz?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
};

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
  lastEditedBy?: Maybe<Scalars['LastEditedBy']>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type SpaceConfiguration =
  | KitchenSpace
  | BathroomSpace
  | LivingRoomSpace
  | BedroomSpace
  | HomeOfficeSpace
  | OtherSpace;

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

export type Specification = {
  __typename?: 'Specification';
  energy?: Maybe<Energy>;
  approvals?: Maybe<Approvals>;
  obligation?: Maybe<ObligationToProvideInformation>;
};

export type SpecificationInput = {
  pimId: Scalars['ID'];
  energy?: Maybe<EnergyInput>;
  approvals?: Maybe<ApprovalsInput>;
  obligation?: Maybe<ObligationToProvideInformationInput>;
};

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

export type UpdateCostInput = {
  id: Scalars['ID'];
  serviceCosts?: Maybe<Scalars['AbsoluteFloat']>;
  paymentsFrequency?: Maybe<CostPaymentFrequency>;
  vatTaxedServiceCosts?: Maybe<Scalars['AbsoluteFloat']>;
  vatPercentage?: Maybe<Scalars['CostVat']>;
  notes?: Maybe<Scalars['String']>;
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

export type UpdatePricingInput = {
  id: Scalars['ID'];
  rent?: Maybe<RentInformationsInput>;
  sale?: Maybe<SaleInformationsInput>;
};

export type UpdateSpaceInput = {
  pimId: Scalars['String'];
  spaceId: Scalars['String'];
  spaceName?: Maybe<Scalars['String']>;
  space?: Maybe<Scalars['UpdateSpaceInputConfiguration']>;
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

export type AddCadastreMutationVariables = {
  input: AddCadastreInput;
};

export type AddCadastreMutation = { __typename?: 'Mutation' } & {
  addCadastre?: Maybe<
    { __typename?: 'PimCadastre' } & Pick<PimCadastre, 'id'> & {
        cadastre?: Maybe<Array<{ __typename?: 'Cadastre' } & Pick<Cadastre, 'id' | 'type'>>>;
      }
  >;
};

export type UpdateCadastreMutationVariables = {
  input: UpdateCadastreInput;
};

export type UpdateCadastreMutation = { __typename?: 'Mutation' } & {
  updateCadastre?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddCadastreMapsMutationVariables = {
  input: AddCadastreMapsInput;
};

export type AddCadastreMapsMutation = { __typename?: 'Mutation' } & {
  addCadastreMaps?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateMapMutationVariables = {
  input: UpdateCadastreMapInput;
};

export type UpdateMapMutation = { __typename?: 'Mutation' } & {
  updateCadastreMap?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type InitSendFileMutationVariables = {
  input: InitSendFileInput;
};

export type InitSendFileMutation = { __typename?: 'Mutation' } & {
  initSendFile: { __typename?: 'File' } & Pick<File, 'signedUrl' | 'id'>;
};

export type UploadFileMutationVariables = {
  input: Scalars['UploadFileInput'];
  pathBuilder?: Maybe<Scalars['PathBuilder']>;
};

export type UploadFileMutation = { __typename?: 'Mutation' } & {
  uploadFile?: Maybe<{ __typename?: 'UploadFileResponse' } & Pick<UploadFileResponse, 'id'>>;
};

export type AddFilesMutationVariables = {
  input: AddFilesInput;
};

export type AddFilesMutation = { __typename?: 'Mutation' } & {
  addFiles: Array<{ __typename?: 'File' } & Pick<File, 'url'>>;
};

export type CreatePimMutationVariables = {
  input: CreatePimInput;
};

export type CreatePimMutation = { __typename?: 'Mutation' } & {
  createPim?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdatePimGeneralInfoMutationVariables = {
  input: PimGeneralInput;
};

export type UpdatePimGeneralInfoMutation = { __typename?: 'Mutation' } & {
  updatePimGeneralInfo: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddFloorToPimMutationVariables = {
  input: AddNewFloorInput;
};

export type AddFloorToPimMutation = { __typename?: 'Mutation' } & {
  addFloorToPim: { __typename?: 'Pim' } & { floors?: Maybe<Array<{ __typename?: 'Floor' } & Pick<Floor, 'id'>>> };
};

export type AddSpaceToFloorMutationVariables = {
  input: AddSpaceInput;
};

export type AddSpaceToFloorMutation = { __typename?: 'Mutation' } & {
  addSpaceToFloor: { __typename?: 'PimWithUpdatedSpace' } & { pim: { __typename?: 'Pim' } & Pick<Pim, 'id'> };
};

export type UpdateSpaceMutationVariables = {
  input: UpdateSpaceInput;
};

export type UpdateSpaceMutation = { __typename?: 'Mutation' } & {
  updateSpace: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type UpdateFloorMutationVariables = {
  input: UpdateFloorInput;
};

export type UpdateFloorMutation = { __typename?: 'Mutation' } & {
  updateFloor: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddOutsideFeatureMutationVariables = {
  input: AddOutsideFeatureInput;
};

export type AddOutsideFeatureMutation = { __typename?: 'Mutation' } & {
  addOutsideFeature: { __typename?: 'Pim' } & {
    outsideFeatures?: Maybe<Array<{ __typename?: 'OutsideFeature' } & Pick<OutsideFeature, 'id'>>>;
  };
};

export type UpdateOutsideFeatureMutationVariables = {
  input: Scalars['UpdateFeatureInputConfiguration'];
};

export type UpdateOutsideFeatureMutation = { __typename?: 'Mutation' } & {
  updateOutsideFeature: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type UpdatePimOutsideInfoMutationVariables = {
  input: Scalars['PimOutsideInput'];
};

export type UpdatePimOutsideInfoMutation = { __typename?: 'Mutation' } & {
  updatePimOutsideInfo: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddServiceMutationVariables = {
  input: AddServiceInput;
};

export type AddServiceMutation = { __typename?: 'Mutation' } & {
  addService?: Maybe<
    { __typename?: 'PimWithNewService' } & {
      pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
      newService: { __typename?: 'Service' } & Pick<Service, 'id'>;
    }
  >;
};

export type UpdateServiceMutationVariables = {
  input: UpdateServiceInput;
};

export type UpdateServiceMutation = { __typename?: 'Mutation' } & {
  updateService?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddMeterMutationVariables = {
  input: AddMeterInput;
};

export type AddMeterMutation = { __typename?: 'Mutation' } & {
  addMeter?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateMeterMutationVariables = {
  input: UpdateMeterInput;
};

export type UpdateMeterMutation = { __typename?: 'Mutation' } & {
  updateMeter?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddReadingMutationVariables = {
  input: AddReadingInput;
};

export type AddReadingMutation = { __typename?: 'Mutation' } & {
  addReading?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateReadingMutationVariables = {
  input: UpdateReadingInput;
};

export type UpdateReadingMutation = { __typename?: 'Mutation' } & {
  updateReading?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type PimCadastreQueryVariables = {
  id: Scalars['ID'];
};

export type PimCadastreQuery = { __typename?: 'Query' } & {
  getPimCadastre: { __typename?: 'PimCadastre' } & Pick<PimCadastre, 'id'> & {
      cadastre?: Maybe<
        Array<
          { __typename?: 'Cadastre' } & Pick<
            Cadastre,
            'id' | 'description' | 'type' | 'dateCreated' | 'dateUpdated' | 'lastEditedBy'
          > & {
              maps?: Maybe<
                Array<
                  { __typename?: 'CadastreMap' } & Pick<CadastreMap, 'id' | 'mapName' | 'description' | 'type'> & {
                      file?: Maybe<{ __typename?: 'File' } & Pick<File, 'key' | 'id'>>;
                    }
                >
              >;
              plot?: Maybe<
                { __typename?: 'CadastrePlot' } & Pick<
                  CadastrePlot,
                  | 'notes'
                  | 'name'
                  | 'municipalCode'
                  | 'sectionCode'
                  | 'plot'
                  | 'indexNumber'
                  | 'surface'
                  | 'share'
                  | 'codeSize'
                > & {
                    ownership?: Maybe<{ __typename?: 'Ownership' } & Pick<Ownership, 'stressedInChargeOf'>>;
                    lease?: Maybe<
                      { __typename?: 'Lease' } & Pick<
                        Lease,
                        'leaseholder' | 'information' | 'duration' | 'yearlyPrice' | 'endDate'
                      >
                    >;
                    boughtOff?: Maybe<{ __typename?: 'BoughtOff' } & Pick<BoughtOff, 'date' | 'perpetually' | 'notes'>>;
                  }
              >;
            }
        >
      >;
    };
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
                { __typename?: 'GeneralInformation' } & Pick<GeneralInformation, 'notes' | 'qualityInformation'> & {
                    images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                  }
              >;
              propertyRelated?: Maybe<
                { __typename?: 'PropertyRelated' } & Pick<PropertyRelated, 'items' | 'notes'> & {
                    images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                  }
              >;
              roofInformation?: Maybe<
                { __typename?: 'RoofInformation' } & {
                  type?: Maybe<{ __typename?: 'RoofType' } & Pick<RoofType, 'name' | 'notes'>>;
                  material?: Maybe<{ __typename?: 'RoofMaterial' } & Pick<RoofMaterial, 'name' | 'notes'>>;
                  insulation?: Maybe<{ __typename?: 'RoofInsulation' } & Pick<RoofInsulation, 'name' | 'notes'>>;
                  images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
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
                          | ({ __typename?: 'KitchenSpace' } & Pick<
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
                              })
                          | { __typename?: 'BathroomSpace' }
                          | { __typename?: 'LivingRoomSpace' }
                          | { __typename?: 'BedroomSpace' }
                          | { __typename?: 'HomeOfficeSpace' }
                          | { __typename?: 'OtherSpace' }
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
                    'mainGarden' | 'type' | 'notes' | 'quality' | 'location' | 'shape' | 'surface'
                  > & {
                      dimensions?: Maybe<
                        { __typename?: 'RectangleDimensions' } & Pick<RectangleDimensions, 'length' | 'height'>
                      >;
                      images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                    }
                >;
              }
          >
        >;
      }
  >;
};

export type PimServicesQueryVariables = {
  id: Scalars['ID'];
};

export type PimServicesQuery = { __typename?: 'Query' } & {
  getPimServices: { __typename?: 'PimServices' } & {
    meters?: Maybe<
      Array<
        { __typename?: 'Meter' } & Pick<Meter, 'id' | 'type' | 'name' | 'description'> & {
            readings?: Maybe<
              Array<
                { __typename?: 'Reading' } & Pick<
                  Reading,
                  'id' | 'value' | 'description' | 'feedInId' | 'dateOfReading'
                >
              >
            >;
          }
      >
    >;
    hotWaterSupplies?: Maybe<
      Array<
        { __typename?: 'Service' } & Pick<Service, 'id' | 'type' | 'name' | 'description' | 'yearOfInstallation'> & {
            configuration:
              | ({ __typename?: 'HotWaterSupplyConfiguration' } & Pick<HotWaterSupplyConfiguration, 'type' | 'fuel'>)
              | { __typename?: 'HeatingSourceConfiguration' }
              | { __typename?: 'AdditionalServiceConfiguration' };
          }
      >
    >;
    heatingSources?: Maybe<
      Array<
        { __typename?: 'Service' } & Pick<Service, 'id' | 'type' | 'name' | 'description' | 'yearOfInstallation'> & {
            configuration:
              | { __typename?: 'HotWaterSupplyConfiguration' }
              | ({ __typename?: 'HeatingSourceConfiguration' } & Pick<HeatingSourceConfiguration, 'type'>)
              | { __typename?: 'AdditionalServiceConfiguration' };
          }
      >
    >;
    additionalServices?: Maybe<
      Array<
        { __typename?: 'Service' } & Pick<Service, 'id' | 'type' | 'name' | 'description' | 'yearOfInstallation'> & {
            configuration:
              | { __typename?: 'HotWaterSupplyConfiguration' }
              | { __typename?: 'HeatingSourceConfiguration' }
              | ({ __typename?: 'AdditionalServiceConfiguration' } & Pick<AdditionalServiceConfiguration, 'type'>);
          }
      >
    >;
  };
};

export type MeQueryVariables = {};

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName' | 'email' | 'avatar'>>;
};

export const LoginDocument = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) @rest(type: "LoginResponse", path: "/public/auth/login", method: "POST", endpoint: "default") {
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
      @rest(type: "ForgotPasswordResponse", path: "/public/auth/reset-password", method: "POST", endpoint: "default") {
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
      @rest(
        type: "ResetPasswordResponse"
        path: "/public/auth/reset-password/{args.token}"
        method: "POST"
        endpoint: "default"
      ) {
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
export const AddCadastreDocument = gql`
  mutation AddCadastre($input: AddCadastreInput!) {
    addCadastre(input: $input) {
      id
      cadastre {
        id
        type
      }
    }
  }
`;
export function useAddCadastreMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddCadastreMutation, AddCadastreMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddCadastreMutation, AddCadastreMutationVariables>(
    AddCadastreDocument,
    baseOptions,
  );
}
export type AddCadastreMutationHookResult = ReturnType<typeof useAddCadastreMutation>;
export type AddCadastreMutationResult = ApolloReactCommon.MutationResult<AddCadastreMutation>;
export type AddCadastreMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddCadastreMutation,
  AddCadastreMutationVariables
>;
export const UpdateCadastreDocument = gql`
  mutation UpdateCadastre($input: UpdateCadastreInput!) {
    updateCadastre(input: $input) {
      id
    }
  }
`;
export function useUpdateCadastreMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCadastreMutation, UpdateCadastreMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateCadastreMutation, UpdateCadastreMutationVariables>(
    UpdateCadastreDocument,
    baseOptions,
  );
}
export type UpdateCadastreMutationHookResult = ReturnType<typeof useUpdateCadastreMutation>;
export type UpdateCadastreMutationResult = ApolloReactCommon.MutationResult<UpdateCadastreMutation>;
export type UpdateCadastreMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCadastreMutation,
  UpdateCadastreMutationVariables
>;
export const AddCadastreMapsDocument = gql`
  mutation AddCadastreMaps($input: AddCadastreMapsInput!) {
    addCadastreMaps(input: $input) {
      id
    }
  }
`;
export function useAddCadastreMapsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddCadastreMapsMutation, AddCadastreMapsMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddCadastreMapsMutation, AddCadastreMapsMutationVariables>(
    AddCadastreMapsDocument,
    baseOptions,
  );
}
export type AddCadastreMapsMutationHookResult = ReturnType<typeof useAddCadastreMapsMutation>;
export type AddCadastreMapsMutationResult = ApolloReactCommon.MutationResult<AddCadastreMapsMutation>;
export type AddCadastreMapsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddCadastreMapsMutation,
  AddCadastreMapsMutationVariables
>;
export const UpdateMapDocument = gql`
  mutation UpdateMap($input: UpdateCadastreMapInput!) {
    updateCadastreMap(input: $input) {
      id
    }
  }
`;
export function useUpdateMapMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMapMutation, UpdateMapMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateMapMutation, UpdateMapMutationVariables>(UpdateMapDocument, baseOptions);
}
export type UpdateMapMutationHookResult = ReturnType<typeof useUpdateMapMutation>;
export type UpdateMapMutationResult = ApolloReactCommon.MutationResult<UpdateMapMutation>;
export type UpdateMapMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateMapMutation,
  UpdateMapMutationVariables
>;
export const InitSendFileDocument = gql`
  mutation InitSendFile($input: InitSendFileInput!) {
    initSendFile(input: $input) @rest(type: "File!", method: "POST", path: "", endpoint: "upload") {
      signedUrl
      id
    }
  }
`;
export function useInitSendFileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<InitSendFileMutation, InitSendFileMutationVariables>,
) {
  return ApolloReactHooks.useMutation<InitSendFileMutation, InitSendFileMutationVariables>(
    InitSendFileDocument,
    baseOptions,
  );
}
export type InitSendFileMutationHookResult = ReturnType<typeof useInitSendFileMutation>;
export type InitSendFileMutationResult = ApolloReactCommon.MutationResult<InitSendFileMutation>;
export type InitSendFileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  InitSendFileMutation,
  InitSendFileMutationVariables
>;
export const UploadFileDocument = gql`
  mutation UploadFile($input: UploadFileInput!, $pathBuilder: PathBuilder) {
    uploadFile(input: $input, pathBuilder: $pathBuilder)
      @rest(type: "UploadFileResponse!", pathBuilder: $pathBuilder, method: "PUT", bodySerializer: "fileEncode") {
      id
    }
  }
`;
export function useUploadFileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UploadFileMutation, UploadFileMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument, baseOptions);
}
export type UploadFileMutationHookResult = ReturnType<typeof useUploadFileMutation>;
export type UploadFileMutationResult = ApolloReactCommon.MutationResult<UploadFileMutation>;
export type UploadFileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UploadFileMutation,
  UploadFileMutationVariables
>;
export const AddFilesDocument = gql`
  mutation AddFiles($input: AddFilesInput!) {
    addFiles(input: $input) {
      url
    }
  }
`;
export function useAddFilesMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddFilesMutation, AddFilesMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddFilesMutation, AddFilesMutationVariables>(AddFilesDocument, baseOptions);
}
export type AddFilesMutationHookResult = ReturnType<typeof useAddFilesMutation>;
export type AddFilesMutationResult = ApolloReactCommon.MutationResult<AddFilesMutation>;
export type AddFilesMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddFilesMutation,
  AddFilesMutationVariables
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
      pim {
        id
      }
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
export const AddServiceDocument = gql`
  mutation AddService($input: AddServiceInput!) {
    addService(input: $input) {
      pim {
        id
      }
      newService {
        id
      }
    }
  }
`;
export function useAddServiceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddServiceMutation, AddServiceMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddServiceMutation, AddServiceMutationVariables>(AddServiceDocument, baseOptions);
}
export type AddServiceMutationHookResult = ReturnType<typeof useAddServiceMutation>;
export type AddServiceMutationResult = ApolloReactCommon.MutationResult<AddServiceMutation>;
export type AddServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddServiceMutation,
  AddServiceMutationVariables
>;
export const UpdateServiceDocument = gql`
  mutation UpdateService($input: UpdateServiceInput!) {
    updateService(input: $input) {
      id
    }
  }
`;
export function useUpdateServiceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateServiceMutation, UpdateServiceMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateServiceMutation, UpdateServiceMutationVariables>(
    UpdateServiceDocument,
    baseOptions,
  );
}
export type UpdateServiceMutationHookResult = ReturnType<typeof useUpdateServiceMutation>;
export type UpdateServiceMutationResult = ApolloReactCommon.MutationResult<UpdateServiceMutation>;
export type UpdateServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateServiceMutation,
  UpdateServiceMutationVariables
>;
export const AddMeterDocument = gql`
  mutation AddMeter($input: AddMeterInput!) {
    addMeter(input: $input) {
      id
    }
  }
`;
export function useAddMeterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddMeterMutation, AddMeterMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddMeterMutation, AddMeterMutationVariables>(AddMeterDocument, baseOptions);
}
export type AddMeterMutationHookResult = ReturnType<typeof useAddMeterMutation>;
export type AddMeterMutationResult = ApolloReactCommon.MutationResult<AddMeterMutation>;
export type AddMeterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddMeterMutation,
  AddMeterMutationVariables
>;
export const UpdateMeterDocument = gql`
  mutation UpdateMeter($input: UpdateMeterInput!) {
    updateMeter(input: $input) {
      id
    }
  }
`;
export function useUpdateMeterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMeterMutation, UpdateMeterMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateMeterMutation, UpdateMeterMutationVariables>(
    UpdateMeterDocument,
    baseOptions,
  );
}
export type UpdateMeterMutationHookResult = ReturnType<typeof useUpdateMeterMutation>;
export type UpdateMeterMutationResult = ApolloReactCommon.MutationResult<UpdateMeterMutation>;
export type UpdateMeterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateMeterMutation,
  UpdateMeterMutationVariables
>;
export const AddReadingDocument = gql`
  mutation AddReading($input: AddReadingInput!) {
    addReading(input: $input) {
      id
    }
  }
`;
export function useAddReadingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddReadingMutation, AddReadingMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddReadingMutation, AddReadingMutationVariables>(AddReadingDocument, baseOptions);
}
export type AddReadingMutationHookResult = ReturnType<typeof useAddReadingMutation>;
export type AddReadingMutationResult = ApolloReactCommon.MutationResult<AddReadingMutation>;
export type AddReadingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddReadingMutation,
  AddReadingMutationVariables
>;
export const UpdateReadingDocument = gql`
  mutation UpdateReading($input: UpdateReadingInput!) {
    updateReading(input: $input) {
      id
    }
  }
`;
export function useUpdateReadingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateReadingMutation, UpdateReadingMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateReadingMutation, UpdateReadingMutationVariables>(
    UpdateReadingDocument,
    baseOptions,
  );
}
export type UpdateReadingMutationHookResult = ReturnType<typeof useUpdateReadingMutation>;
export type UpdateReadingMutationResult = ApolloReactCommon.MutationResult<UpdateReadingMutation>;
export type UpdateReadingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateReadingMutation,
  UpdateReadingMutationVariables
>;
export const PimCadastreDocument = gql`
  query PimCadastre($id: ID!) {
    getPimCadastre(id: $id) {
      id
      cadastre {
        id
        description
        type
        maps {
          id
          mapName
          file {
            key
            id
          }
          description
          type
        }
        plot {
          notes
          name
          municipalCode
          sectionCode
          plot
          indexNumber
          surface
          share
          codeSize
          ownership {
            stressedInChargeOf
          }
          lease {
            leaseholder
            information
            duration
            yearlyPrice
            endDate
          }
          boughtOff {
            date
            perpetually
            notes
          }
        }
        dateCreated
        dateUpdated
        lastEditedBy
      }
    }
  }
`;
export function usePimCadastreQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimCadastreQuery, PimCadastreQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimCadastreQuery, PimCadastreQueryVariables>(PimCadastreDocument, baseOptions);
}
export function usePimCadastreLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimCadastreQuery, PimCadastreQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimCadastreQuery, PimCadastreQueryVariables>(PimCadastreDocument, baseOptions);
}
export type PimCadastreQueryHookResult = ReturnType<typeof usePimCadastreQuery>;
export type PimCadastreLazyQueryHookResult = ReturnType<typeof usePimCadastreLazyQuery>;
export type PimCadastreQueryResult = ApolloReactCommon.QueryResult<PimCadastreQuery, PimCadastreQueryVariables>;
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
          images {
            url
          }
        }
        propertyRelated {
          items
          notes
          images {
            url
          }
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
          images {
            url
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
            images {
              url
            }
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
export const PimServicesDocument = gql`
  query PimServices($id: ID!) {
    getPimServices(id: $id) {
      meters {
        id
        type
        name
        description
        readings {
          id
          value
          description
          feedInId
          dateOfReading
        }
      }
      hotWaterSupplies {
        id
        type
        name
        description
        configuration {
          ... on HotWaterSupplyConfiguration {
            type
            fuel
          }
        }
        yearOfInstallation
      }
      heatingSources {
        id
        type
        name
        description
        configuration {
          ... on HeatingSourceConfiguration {
            type
          }
        }
        yearOfInstallation
      }
      additionalServices {
        id
        type
        name
        description
        configuration {
          ... on AdditionalServiceConfiguration {
            type
          }
        }
        yearOfInstallation
      }
    }
  }
`;
export function usePimServicesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimServicesQuery, PimServicesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimServicesQuery, PimServicesQueryVariables>(PimServicesDocument, baseOptions);
}
export function usePimServicesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimServicesQuery, PimServicesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimServicesQuery, PimServicesQueryVariables>(PimServicesDocument, baseOptions);
}
export type PimServicesQueryHookResult = ReturnType<typeof usePimServicesQuery>;
export type PimServicesLazyQueryHookResult = ReturnType<typeof usePimServicesLazyQuery>;
export type PimServicesQueryResult = ApolloReactCommon.QueryResult<PimServicesQuery, PimServicesQueryVariables>;
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
