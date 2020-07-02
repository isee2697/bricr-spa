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
  UpdateSpaceInputConfiguration: any;
  UpdateFeatureInputConfiguration: any;
  AbsoluteFloat: any;
  CostVat: any;
  ServiceConfigurationInput: any;
  Dictionary: any;
  UuidOrEnum: any;
  Date: string;
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

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  addCadastre?: Maybe<Pim>;
  addCadastreMaps?: Maybe<Pim>;
  addCost: CostResult;
  addFiles: Array<File>;
  addFloorToPim: PimWithNewFloor;
  addIdentificationNumber: PimWithNewIdentificationNumber;
  addInspection: AddInspectionResult;
  addLabel: Label;
  addMediaLink?: Maybe<PimWithNewMediaLink>;
  addMeter?: Maybe<Pim>;
  addOutsideFeature: PimWithNewOutside;
  addPictures?: Maybe<PimWithNewPictures>;
  addReading?: Maybe<Pim>;
  addService?: Maybe<PimWithNewService>;
  addSpaceToFloor: PimWithUpdatedSpace;
  addTag?: Maybe<PimWithNewTag>;
  addTextChapter?: Maybe<PimWithNewTextChapter>;
  addUsp?: Maybe<PimWithNewUsp>;
  addViewingMoment: AddViewingMomentResult;
  createPim?: Maybe<Pim>;
  deleteUser?: Maybe<Scalars['String']>;
  forgotPassword?: Maybe<ForgotPasswordResponse>;
  initSendFile: File;
  login?: Maybe<LoginResponse>;
  removeInspection: Pim;
  removeLabel: Scalars['Boolean'];
  removePim?: Maybe<Scalars['String']>;
  removeViewingMoment: Pim;
  resetPassword?: Maybe<ResetPasswordResponse>;
  setLinkedProperties: Pim;
  togglePricing: Pim;
  updateCadastre?: Maybe<Pim>;
  updateCadastreMap?: Maybe<Pim>;
  updateCost: CostResult;
  updateDescription?: Maybe<Scalars['String']>;
  updateFloor: Pim;
  updateIdentificationNumber: Pim;
  updateInsideGeneral?: Maybe<Pim>;
  updateInspection: Pim;
  updateInvestment: Pim;
  updateMediaLink?: Maybe<Pim>;
  updateMeter?: Maybe<Pim>;
  updateOutsideFeature: Pim;
  updatePicture?: Maybe<Pim>;
  updatePimGeneralInfo: Pim;
  updatePimLocation: Pim;
  updatePimOutsideInfo: Pim;
  updatePricing: Pim;
  updateReading?: Maybe<Pim>;
  updateSalesSettings: Pim;
  updateService?: Maybe<Pim>;
  updateSpace: Pim;
  updateSpecification: Pim;
  updateSpecificationAdvanced: Pim;
  updateTag?: Maybe<Pim>;
  updateTextChapter?: Maybe<Pim>;
  updateUsp?: Maybe<Pim>;
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

export type MutationAddIdentificationNumberArgs = {
  input: AddIdentificationNumberInput;
};

export type MutationAddInspectionArgs = {
  input: AddInspectionInput;
};

export type MutationAddLabelArgs = {
  input: LabelInput;
};

export type MutationAddMediaLinkArgs = {
  input: AddMediaLinkInput;
};

export type MutationAddMeterArgs = {
  input: AddMeterInput;
};

export type MutationAddOutsideFeatureArgs = {
  input: AddOutsideFeatureInput;
};

export type MutationAddPicturesArgs = {
  input: AddPicturesInput;
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

export type MutationAddTagArgs = {
  input: AddTagInput;
};

export type MutationAddTextChapterArgs = {
  input: AddTextChapterInput;
};

export type MutationAddUspArgs = {
  input: AddUspInput;
};

export type MutationAddViewingMomentArgs = {
  input: AddViewingMomentInput;
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

export type MutationRemoveInspectionArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveLabelArgs = {
  id: Scalars['ID'];
};

export type MutationRemovePimArgs = {
  id: Scalars['String'];
};

export type MutationRemoveViewingMomentArgs = {
  id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
  input?: Maybe<ResetPasswordInput>;
  token: Scalars['String'];
};

export type MutationSetLinkedPropertiesArgs = {
  input: LinkedPimInput;
};

export type MutationTogglePricingArgs = {
  input: TogglePricingInput;
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

export type MutationUpdateDescriptionArgs = {
  input: UpdateDescriptionInput;
};

export type MutationUpdateFloorArgs = {
  input: UpdateFloorInput;
};

export type MutationUpdateIdentificationNumberArgs = {
  input: UpdateIdentificationNumberInput;
};

export type MutationUpdateInsideGeneralArgs = {
  input: InsideGeneralInput;
};

export type MutationUpdateInspectionArgs = {
  input: UpdateInspectionInput;
};

export type MutationUpdateInvestmentArgs = {
  input: InvestmentInput;
};

export type MutationUpdateMediaLinkArgs = {
  input: UpdateMediaLinkInput;
};

export type MutationUpdateMeterArgs = {
  input: UpdateMeterInput;
};

export type MutationUpdateOutsideFeatureArgs = {
  input: Scalars['UpdateFeatureInputConfiguration'];
};

export type MutationUpdatePictureArgs = {
  input: UpdatePictureInput;
};

export type MutationUpdatePimGeneralInfoArgs = {
  input: PimGeneralInput;
};

export type MutationUpdatePimLocationArgs = {
  input: UpdatePimLocationInput;
};

export type MutationUpdatePimOutsideInfoArgs = {
  input: PimOutsideInput;
};

export type MutationUpdatePricingArgs = {
  input: UpdatePricingInput;
};

export type MutationUpdateReadingArgs = {
  input: UpdateReadingInput;
};

export type MutationUpdateSalesSettingsArgs = {
  input: SalesSettingsInput;
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

export type MutationUpdateSpecificationAdvancedArgs = {
  input: SpecificationAdvancedInput;
};

export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};

export type MutationUpdateTextChapterArgs = {
  input: UpdateTextChapterInput;
};

export type MutationUpdateUspArgs = {
  input: UpdateUspInput;
};

export type MutationUploadFileArgs = {
  input: Scalars['UploadFileInput'];
  pathBuilder?: Maybe<Scalars['PathBuilder']>;
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
  MediaPicture = 'MediaPicture',
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

export enum LabelProperty {
  ObligationToProvideInformation = 'ObligationToProvideInformation',
  Picture = 'Picture',
  Usp = 'Usp',
  TextChapter = 'TextChapter',
  ParkingSpecification = 'ParkingSpecification',
  MonumentSpecification = 'MonumentSpecification',
  InsideSpecification = 'InsideSpecification',
  HousingOptions = 'HousingOptions',
  SpecialTags = 'SpecialTags',
  PropertyRights = 'PropertyRights',
  HomeOwnerAssociation = 'HomeOwnerAssociation',
  LocationGoodToKnow = 'LocationGoodToKnow',
  Location = 'Location',
  CadastreMap = 'CadastreMap',
  MediaLink = 'MediaLink',
  Tag = 'Tag',
  TankInspection = 'TankInspection',
  PollutionInspection = 'PollutionInspection',
  MaintenanceInspection = 'MaintenanceInspection',
}

export type Label = {
  __typename?: 'Label';
  id: Scalars['ID'];
  icon?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  property: LabelProperty;
};

export type LabelInput = {
  pimId: Scalars['ID'];
  icon?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  property: LabelProperty;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  dictionary?: Maybe<Scalars['Dictionary']>;
  getChangesHistory: Array<Event>;
  getLabels?: Maybe<Array<Label>>;
  /** @deprecated In later version pim will be split into multiple smaller views. */
  getPim?: Maybe<Pim>;
  getPimCadastre: PimCadastre;
  getPimGeneral: PimGeneral;
  getPimInside: PimInside;
  getPimLocation: PimLocation;
  getPimMedia: PimMedia;
  getPimOutside: PimOutside;
  getPimSales: PimSales;
  getPimServices: PimServices;
  getPimSpecification: PimSpecification;
  getPricing: PimPrices;
  getProfile?: Maybe<Profile>;
  getPropertyTypes: Array<Scalars['String']>;
  listPims: PimListSearchResult;
  me?: Maybe<Profile>;
};

export type QueryGetChangesHistoryArgs = {
  filters?: Maybe<ChangesHistoryFilters>;
};

export type QueryGetLabelsArgs = {
  pimId: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty>>;
};

export type QueryGetPimArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimCadastreArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimGeneralArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimInsideArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimLocationArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimMediaArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimOutsideArgs = {
  id: Scalars['ID'];
};

export type QueryGetPimSalesArgs = {
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

export type ListPimPropertyRelated = {
  __typename?: 'ListPimPropertyRelated';
  items?: Maybe<Array<Maybe<PropertyRelatedItems>>>;
};

export type ListPimHouseOutside = {
  __typename?: 'ListPimHouseOutside';
  propertyRelated?: Maybe<ListPimPropertyRelated>;
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
  lastEditedBy?: Maybe<Profile>;
  houseOutside?: Maybe<ListPimHouseOutside>;
  archived?: Maybe<Scalars['Boolean']>;
  status: PimStatus;
  developmentType: DevelopmentType;
};

export type PimListSearchResult = {
  __typename?: 'PimListSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<ListPim>>;
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

export enum CadastreOwnershipType {
  PerpetualLeaseChargedWith = 'PerpetualLeaseChargedWith',
  PropertyChargedWith = 'PropertyChargedWith',
  AnnualLeaseholdChargedWith = 'AnnualLeaseholdChargedWith',
  LeaseholdAndBuildingChargedWith = 'LeaseholdAndBuildingChargedWith',
  BuildingChargedWith = 'BuildingChargedWith',
  Other = 'Other',
}

export enum OwnershipChoiceType {
  MembershipRight = 'MembershipRight',
  Mandeling = 'Mandeling',
  Understress = 'Understress',
  Leasehold = 'Leasehold',
  RightToRebuild = 'RightToRebuild',
  FullOwnership = 'FullOwnership',
  Usufruct = 'Usufruct',
  SeeDeed = 'SeeDeed',
  Oppresed = 'Oppresed',
  LimitedRights = 'LimitedRights',
  GroundLease = 'GroundLease',
  LeaseholdAndBuilding = 'LeaseholdAndBuilding',
  UseAndHabitation = 'UseAndHabitation',
  Building = 'Building',
  CityMayorLaw = 'CityMayorLaw',
  NoneOfThem = 'NoneOfThem',
  SharedOwnership = 'SharedOwnership',
  PerpetualLease = 'PerpetualLease',
  PerpetualSublease = 'PerpetualSublease',
  Subleasehold = 'Subleasehold',
  RightOfOverhang = 'RightOfOverhang',
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
  ownershipChoice?: Maybe<OwnershipChoiceType>;
  ownershipType?: Maybe<CadastreOwnershipType>;
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
  ownershipChoice?: Maybe<OwnershipChoiceType>;
  ownershipType?: Maybe<CadastreOwnershipType>;
  lease?: Maybe<Lease>;
  boughtOff?: Maybe<BoughtOff>;
};

export type CadastreMap = {
  __typename?: 'CadastreMap';
  id: Scalars['String'];
  mapName: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  file?: Maybe<File>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
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
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type LeaseInput = {
  leaseholder?: Maybe<LeaseholderType>;
  information?: Maybe<LeaseInformationType>;
  duration?: Maybe<LeaseDurationType>;
  yearlyPrice?: Maybe<Scalars['Float']>;
  endDate?: Maybe<Scalars['Date']>;
};

export type Cadastre = LastUpdated & {
  __typename?: 'Cadastre';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: CadastreType;
  maps?: Maybe<Array<CadastreMap>>;
  plot?: Maybe<CadastrePlot>;
  dateCreated?: Maybe<Scalars['Date']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export type PimCadastre = {
  __typename?: 'PimCadastre';
  id: Scalars['ID'];
  cadastre?: Maybe<Array<Cadastre>>;
};

export type CadastreMapInput = {
  mapName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateCadastreMapInput = {
  pimId: Scalars['String'];
  cadastreId: Scalars['String'];
  mapId: Scalars['String'];
  map?: Maybe<CadastreMapInput>;
  fileId?: Maybe<Scalars['String']>;
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
  extraAddress?: Maybe<ExtraAddressInput>;
  showExtraAddress?: Maybe<Scalars['Boolean']>;
  showIdentificationNumber?: Maybe<Scalars['Boolean']>;
};

export type PropertyAvailabilityInformation = {
  __typename?: 'PropertyAvailabilityInformation';
  availability?: Maybe<PropertyAvailability>;
  from?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
  habitation?: Maybe<PropertyHabitation>;
  currentUse?: Maybe<Scalars['String']>;
  currentDestination?: Maybe<Scalars['String']>;
};

export type ConstructionInformation = {
  __typename?: 'ConstructionInformation';
  type?: Maybe<ConstructionType>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
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

export type PropertyAvailabilityInformationInput = {
  availability?: Maybe<PropertyAvailability>;
  from?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
  habitation?: Maybe<PropertyHabitation>;
  currentUse?: Maybe<Scalars['String']>;
  currentDestination?: Maybe<Scalars['String']>;
};

export type HouseGeneralInput = {
  availability?: Maybe<PropertyAvailabilityInformationInput>;
  construction?: Maybe<ConstructionInformationInput>;
  floor?: Maybe<FloorType>;
  propertyConnection?: Maybe<PropertyConnection>;
  propertyDetails?: Maybe<PropertyTypeDetailed>;
};

export type ConstructionInformationInput = {
  type?: Maybe<ConstructionType>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
};

export type ExtraAddress = {
  __typename?: 'ExtraAddress';
  plotNumber?: Maybe<Scalars['String']>;
  plotNumberAddition?: Maybe<Scalars['String']>;
  houseNumberStart?: Maybe<Scalars['String']>;
  houseNumberEnd?: Maybe<Scalars['String']>;
};

export type ExtraAddressInput = {
  plotNumber?: Maybe<Scalars['String']>;
  plotNumberAddition?: Maybe<Scalars['String']>;
  houseNumberStart?: Maybe<Scalars['String']>;
  houseNumberEnd?: Maybe<Scalars['String']>;
};

export enum IdentificationNumberType {
  Sap = 'Sap',
  Form = 'Form',
}

export type IdentificationNumber = {
  __typename?: 'IdentificationNumber';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AddIdentificationNumberInput = {
  pimId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateIdentificationNumberInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PimGeneral = LastUpdated & {
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
  lastEditedBy?: Maybe<Profile>;
  houseGeneral?: Maybe<HouseGeneral>;
  extraAddress?: Maybe<ExtraAddress>;
  identificationNumbers?: Maybe<Array<IdentificationNumber>>;
  showExtraAddress?: Maybe<Scalars['Boolean']>;
  showIdentificationNumber?: Maybe<Scalars['Boolean']>;
};

export type PimWithNewIdentificationNumber = {
  __typename?: 'PimWithNewIdentificationNumber';
  pim: Pim;
  newIdentificationNumber: IdentificationNumber;
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

export enum WindowType {
  FloatGlass = 'FloatGlass',
  SafetyLaminatedGlass = 'SafetyLaminatedGlass',
  ObscuredGlass = 'ObscuredGlass',
  AnnealedGlass = 'AnnealedGlass',
  TintedGlass = 'TintedGlass',
  TemperedGlass = 'TemperedGlass',
  InsulatedGlass = 'InsulatedGlass',
  MirroredGlass = 'MirroredGlass',
  LowEglass = 'LowEglass',
  WiredGlass = 'WiredGlass',
  HeatStrengthenedGlass = 'HeatStrengthenedGlass',
}

export enum KitchenType {
  MainKitchen = 'MainKitchen',
  Scullery = 'Scullery',
}

export enum LivingRoomType {
  ThroughRoom = 'ThroughRoom',
  FormerEnSuite = 'FormerEnSuite',
  RoomAndSuite = 'RoomAndSuite',
  Conservatory = 'Conservatory',
}

export enum KitchenAppliances {
  Refrigerator = 'Refrigerator',
  Microwave = 'Microwave',
  Dishwasher = 'Dishwasher',
  Oven = 'Oven',
  Stove = 'Stove',
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

export type KitchenAppliance = {
  __typename?: 'KitchenAppliance';
  name: KitchenAppliances;
  quantity: Scalars['Int'];
  notes?: Maybe<Scalars['String']>;
};

export enum KitchenConstruction {
  ClosedKitchen = 'ClosedKitchen',
  EatInKitchen = 'EatInKitchen',
  HalfOpenKitchen = 'HalfOpenKitchen',
  OpenKitchen = 'OpenKitchen',
}

export type RectangleMeasurement = {
  __typename?: 'RectangleMeasurement';
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  surface?: Maybe<Scalars['Float']>;
};

export type CuboidMeasurement = {
  __typename?: 'CuboidMeasurement';
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  surface?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

export enum FloorType {
  Attic = 'Attic',
  Floor = 'Floor',
  Basement = 'Basement',
  GroundFloor = 'GroundFloor',
  Loft = 'Loft',
}

export enum SpaceType {
  Kitchen = 'Kitchen',
  Bathroom = 'Bathroom',
  LivingRoom = 'LivingRoom',
  Bedroom = 'Bedroom',
  HomeOffice = 'HomeOffice',
  Other = 'Other',
}

export enum SpaceShape {
  Rectangle = 'Rectangle',
  Square = 'Square',
  LType = 'LType',
  TType = 'TType',
  UType = 'UType',
  ZType = 'ZType',
}

export type KitchenSpace = {
  __typename?: 'KitchenSpace';
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  type?: Maybe<KitchenType>;
  constructionType?: Maybe<Array<Maybe<KitchenConstruction>>>;
  services?: Maybe<Array<Maybe<KitchenServices>>>;
  servicesNotes?: Maybe<Scalars['String']>;
  appliances?: Maybe<Array<Maybe<KitchenAppliance>>>;
  hob?: Maybe<KitchenHob>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<CuboidMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
};

export type BathroomSpace = {
  __typename?: 'BathroomSpace';
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  services?: Maybe<Array<Maybe<BathroomServices>>>;
  servicesNotes?: Maybe<Scalars['String']>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<CuboidMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
};

export type LivingRoomSpace = {
  __typename?: 'LivingRoomSpace';
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<LivingRoomType>>>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<CuboidMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
  stairs?: Maybe<Scalars['Boolean']>;
};

export type BedroomSpace = {
  __typename?: 'BedroomSpace';
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<CuboidMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
};

export type HomeOfficeSpace = {
  __typename?: 'HomeOfficeSpace';
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<CuboidMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
};

export type OtherSpace = {
  __typename?: 'OtherSpace';
  name?: Maybe<Scalars['String']>;
  constructionYear?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  shape?: Maybe<SpaceShape>;
  measurement?: Maybe<CuboidMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
};

export type Floor = LastUpdated & {
  __typename?: 'Floor';
  id: Scalars['String'];
  floorDescription?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  floorType: FloorType;
  spaces?: Maybe<Array<Space>>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type SpaceConfiguration =
  | KitchenSpace
  | BathroomSpace
  | LivingRoomSpace
  | BedroomSpace
  | HomeOfficeSpace
  | OtherSpace;

export type Space = {
  __typename?: 'Space';
  id: Scalars['String'];
  spaceType: SpaceType;
  spaceName?: Maybe<Scalars['String']>;
  extraRoomPossibility: Scalars['Boolean'];
  configuration?: Maybe<SpaceConfiguration>;
};

export type PimInside = LastUpdated & {
  __typename?: 'PimInside';
  id: Scalars['String'];
  floors?: Maybe<Array<Floor>>;
  insideGeneral?: Maybe<InsideGeneral>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export type PimWithUpdatedSpace = {
  __typename?: 'PimWithUpdatedSpace';
  newSpace: Space;
  pim: Pim;
};

export type AddNewFloorInput = {
  pimId: Scalars['String'];
  floorDescription?: Maybe<Scalars['String']>;
  floorType: FloorType;
};

export type AddSpaceInput = {
  spaceType: SpaceType;
  extraRoomPossibility: Scalars['Boolean'];
  pimId: Scalars['String'];
  floorId: Scalars['String'];
  spaceName?: Maybe<Scalars['String']>;
};

export type UpdateSpaceInput = {
  pimId: Scalars['String'];
  spaceId: Scalars['String'];
  spaceName?: Maybe<Scalars['String']>;
  space?: Maybe<Scalars['UpdateSpaceInputConfiguration']>;
};

export type UpdateFloorInput = {
  pimId: Scalars['String'];
  floorId: Scalars['String'];
  floorDescription?: Maybe<Scalars['String']>;
  floorType?: Maybe<FloorType>;
};

export type InsideWindowsInput = {
  types?: Maybe<Array<WindowType>>;
  notes?: Maybe<Scalars['String']>;
};

export type InsideWindows = {
  __typename?: 'InsideWindows';
  types?: Maybe<Array<WindowType>>;
  notes?: Maybe<Scalars['String']>;
};

export type RenovationInput = {
  yearOfRenovation?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type Renovation = {
  __typename?: 'Renovation';
  yearOfRenovation?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type ExtensionInput = {
  yearOfExtension?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type Extension = {
  __typename?: 'Extension';
  yearOfExtension?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type InsideGeneralInput = {
  pimId: Scalars['ID'];
  windows?: Maybe<InsideWindowsInput>;
  extension?: Maybe<ExtensionInput>;
  renovation?: Maybe<RenovationInput>;
  notes?: Maybe<Scalars['String']>;
};

export type InsideGeneral = LastUpdated & {
  __typename?: 'InsideGeneral';
  windows?: Maybe<InsideWindows>;
  extension?: Maybe<Extension>;
  renovation?: Maybe<Renovation>;
  notes?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export type PimWithNewFloor = {
  __typename?: 'PimWithNewFloor';
  newFloor: Floor;
  pim: Pim;
};

export enum LocationType {
  OnTheEdgeOfForest = 'OnTheEdgeOfForest',
  OnBusyRoad = 'OnBusyRoad',
  OnPark = 'OnPark',
  OnQuietRoad = 'OnQuietRoad',
  OnFairway = 'OnFairway',
  OnWater = 'OnWater',
  ShelteredLocation = 'ShelteredLocation',
  OutsideBuiltUpAreas = 'OutsideBuiltUpAreas',
  InWoodedArea = 'InWoodedArea',
  InCenter = 'InCenter',
  InResidentialArea = 'InResidentialArea',
  OpenLocation = 'OpenLocation',
}

export enum LocationGoodToKnowType {
  Restaurants = 'Restaurants',
  Subway = 'Subway',
  Recreation = 'Recreation',
  Shops = 'Shops',
  Train = 'Train',
  School = 'School',
  Highway = 'Highway',
  Sport = 'Sport',
}

export enum DistanceUnit {
  Meters = 'Meters',
  Kilometers = 'Kilometers',
}

export type GoodToKnow = {
  __typename?: 'GoodToKnow';
  type?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  units?: Maybe<DistanceUnit>;
  checked?: Maybe<Scalars['Boolean']>;
};

export type PimLocation = LastUpdated & {
  __typename?: 'PimLocation';
  id: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  map?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
  goodToKnows?: Maybe<Array<GoodToKnow>>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdatePimLocationInput = {
  id: Scalars['String'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  map?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
  goodToKnows?: Maybe<Array<GoodToKnowInput>>;
  description?: Maybe<Scalars['String']>;
};

export type GoodToKnowInput = {
  type?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  units?: Maybe<DistanceUnit>;
  checked?: Maybe<Scalars['Boolean']>;
};

export enum PictureType {
  General = 'General',
  Inside = 'Inside',
  Outside = 'Outside',
  LivingRoom = 'LivingRoom',
  Kitchen = 'Kitchen',
  Bathroom = 'Bathroom',
  Garden = 'Garden',
  Garage = 'Garage',
  Terrain = 'Terrain',
  Surroundings = 'Surroundings',
  Attic = 'Attic',
}

export enum MediaLinkType {
  YouTube = 'YouTube',
  ThreeSixtyDegree = 'ThreeSixtyDegree',
  Floorplanner = 'Floorplanner',
  FacebookTrackingCode = 'FacebookTrackingCode',
}

export enum ChapterOrUspType {
  Garden = 'Garden',
  Garage = 'Garage',
  Storage = 'Storage',
  Terrain = 'Terrain',
  ParkingLot = 'ParkingLot',
  Kitchen = 'Kitchen',
  Bathroom = 'Bathroom',
  LivingRoom = 'LivingRoom',
  Bedroom = 'Bedroom',
  HomeOffice = 'HomeOffice',
  Attic = 'Attic',
  Floor = 'Floor',
  Basement = 'Basement',
  GroundFloor = 'GroundFloor',
}

export enum TagType {
  Remote = 'Remote',
  DogLover = 'DogLover',
  Seniors = 'Seniors',
  Architecture = 'Architecture',
  N1930s = 'n1930s',
  Sports = 'Sports',
  SpecialLiving = 'SpecialLiving',
  ReadyToUse = 'ReadyToUse',
  Gardening = 'Gardening',
  NeighbourhoodAssociation = 'NeighbourhoodAssociation',
  ChildFriendly = 'ChildFriendly',
  View = 'View',
  CentralLocation = 'CentralLocation',
  Safe = 'Safe',
  Culture = 'Culture',
  LuxuriousFinisch = 'LuxuriousFinisch',
  ClubLife = 'ClubLife',
  Diy = 'DIY',
  MotorOwner = 'MotorOwner',
  Water = 'Water',
  Edological = 'Edological',
  Relaxation = 'Relaxation',
  Wellness = 'Wellness',
  HobbyAnimals = 'HobbyAnimals',
  HorseLover = 'HorseLover',
  WorkAtHome = 'WorkAtHome',
  Courtyard = 'Courtyard',
  NationWide = 'NationWide',
  Quit = 'Quit',
  Shopping = 'Shopping',
}

export type Picture = LastUpdated & {
  __typename?: 'Picture';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  file?: Maybe<File>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type TextChapter = {
  __typename?: 'TextChapter';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Usp = {
  __typename?: 'Usp';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type MediaLink = {
  __typename?: 'MediaLink';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PimMedia = LastUpdated & {
  __typename?: 'PimMedia';
  id: Scalars['String'];
  pictures?: Maybe<Array<Picture>>;
  mediaLinks?: Maybe<Array<MediaLink>>;
  textChapters?: Maybe<Array<TextChapter>>;
  usps?: Maybe<Array<Usp>>;
  tags?: Maybe<Array<Tag>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
  description?: Maybe<Scalars['String']>;
};

export type PimMediaPicturesArgs = {
  sort?: Maybe<Sort>;
};

export type NewPictureInput = {
  fileID: Scalars['String'];
};

export type AddPicturesInput = {
  pimId: Scalars['String'];
  pictures: Array<NewPictureInput>;
};

export type AddTextChapterInput = {
  pimId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type UpdateTextChapterInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type AddUspInput = {
  pimId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateUspInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AddMediaLinkInput = {
  pimId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateMediaLinkInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AddTagInput = {
  pimId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateTagInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdatePictureInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['String']>;
};

export type PimWithNewPictures = {
  __typename?: 'PimWithNewPictures';
  pim: Pim;
  newPictures?: Maybe<Array<Picture>>;
};

export type PimWithNewTextChapter = {
  __typename?: 'PimWithNewTextChapter';
  pim: Pim;
  newChapter: TextChapter;
};

export type PimWithNewUsp = {
  __typename?: 'PimWithNewUsp';
  pim: Pim;
  newUsp: Usp;
};

export type PimWithNewMediaLink = {
  __typename?: 'PimWithNewMediaLink';
  pim: Pim;
  newMediaLink: MediaLink;
};

export type PimWithNewTag = {
  __typename?: 'PimWithNewTag';
  pim: Pim;
  newTag: Tag;
};

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

export enum RoofMaterials {
  Asbestos = 'Asbestos',
  BituminousRoofing = 'BituminousRoofing',
  Plastic = 'Plastic',
  Slate = 'Slate',
  Metal = 'Metal',
  Pans = 'Pans',
  Other = 'Other',
}

export enum RoofInsulations {
  SprayFoam = 'SprayFoam',
  RigidBoards = 'RigidBoards',
  BlanketOrMatting = 'BlanketOrMatting',
  GlassRock = 'GlassRock',
  MineralWool = 'MineralWool',
  LooseFill = 'LooseFill',
  StructuralPanels = 'StructuralPanels',
}

export enum PropertyRelatedItems {
  Balcony = 'Balcony',
  Terrace = 'Terrace',
  RoofTerrace = 'RoofTerrace',
  Porch = 'Porch',
}

export enum OutsideFeatureType {
  Garden = 'Garden',
  Garage = 'Garage',
  Storage = 'Storage',
  Terrain = 'Terrain',
  ParkingLot = 'ParkingLot',
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

export enum Location {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West',
}

export enum GarageType {
  NoGarage = 'NoGarage',
  AttachmentWood = 'AttachmentWood',
  AttachmentStone = 'AttachmentStone',
  Carport = 'Carport',
  GarageWithCarport = 'GarageWithCarport',
  GaragePossible = 'GaragePossible',
  GarageBox = 'GarageBox',
  Indoor = 'Indoor',
  ParkingBasement = 'ParkingBasement',
  ParkingSpace = 'ParkingSpace',
  Basement = 'Basement',
  FreestandingWood = 'FreestandingWood',
  FreestandingStone = 'FreestandingStone',
}

export enum GarageAndStorageMaterial {
  Stone = 'Stone',
  Wood = 'Wood',
  Plastic = 'Plastic',
  Metal = 'Metal',
  Other = 'Other',
}

export enum GarageInsulation {
  RoofInsulation = 'RoofInsulation',
  DoubleGlazing = 'DoubleGlazing',
  EcoConstruction = 'EcoConstruction',
  NoCavity = 'NoCavity',
  PartlyDoubleGlazing = 'PartlyDoubleGlazing',
  WallInsulation = 'WallInsulation',
  FloorInsulation = 'FloorInsulation',
  FullyInsulated = 'FullyInsulated',
}

export enum GarageService {
  ElectricDoor = 'ElectricDoor',
  Loft = 'Loft',
  Electricity = 'Electricity',
  HeatingWater = 'HeatingWater',
}

export enum StorageType {
  StorageBox = 'StorageBox',
  Shed = 'Shed',
  TeaHouse = 'TeaHouse',
  WithAttic = 'WithAttic',
}

export enum StorageInsulation {
  NoInsulation = 'NoInsulation',
  RoofInsulation = 'RoofInsulation',
  DoubleGlazing = 'DoubleGlazing',
  EcoConstruction = 'EcoConstruction',
  NoCavity = 'NoCavity',
  PartlyDoubleGlazing = 'PartlyDoubleGlazing',
  WallInsulation = 'WallInsulation',
  FloorInsulation = 'FloorInsulation',
  FullyInsulated = 'FullyInsulated',
}

export enum StorageService {
  WithElectricDoor = 'WithElectricDoor',
  WithLoft = 'WithLoft',
  EquippedWithElectricity = 'EquippedWithElectricity',
  ProvidedWithHeating = 'ProvidedWithHeating',
  ProvidedWithWater = 'ProvidedWithWater',
}

export enum TerrainParking {
  PaidParking = 'PaidParking',
  PublicParking = 'PublicParking',
  ParkingGarage = 'ParkingGarage',
  ParkingPermits = 'ParkingPermits',
}

export enum FoundationType {
  IsolatedFooting = 'IsolatedFooting',
  CombinedFooting = 'CombinedFooting',
  WallFooting = 'WallFooting',
  SpreadLooting = 'SpreadLooting',
  RaftOrMatFoundations = 'RaftOrMatFoundations',
  PileFoundations = 'PileFoundations',
  DrilledShafts = 'DrilledShafts',
}

export enum FoundationMaterialType {
  Concrete = 'Concrete',
  Timber = 'Timber',
  Steel = 'Steel',
  Plastic = 'Plastic',
}

export enum GutterType {
  HalfRound = 'HalfRound',
  Flatbottom = 'Flatbottom',
  NoGutter = 'NoGutter',
}

export enum GutterMaterial {
  Vinyl = 'Vinyl',
  Stainless = 'Stainless',
  Aluminium = 'Aluminium',
  Copper = 'Copper',
  Zinc = 'Zinc',
  Steel = 'Steel',
}

export type RoofInformationInput = {
  type?: Maybe<RoofTypeInput>;
  material?: Maybe<RoofMaterialInput>;
  insulation?: Maybe<RoofInsulationInput>;
  gutter?: Maybe<GutterInformationsInput>;
  gutterMaterial?: Maybe<GutterMaterialInformationsInput>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  yearOfRoof?: Maybe<Scalars['Int']>;
};

export type RoofTypeInput = {
  name?: Maybe<RoofTypes>;
  notes?: Maybe<Scalars['String']>;
};

export type RoofMaterialInput = {
  name?: Maybe<RoofMaterials>;
  notes?: Maybe<Scalars['String']>;
};

export type GutterMaterialInformationsInput = {
  material?: Maybe<GutterMaterial>;
  notes?: Maybe<Scalars['String']>;
};

export type GutterMaterialInformations = {
  __typename?: 'GutterMaterialInformations';
  material?: Maybe<GutterMaterial>;
  notes?: Maybe<Scalars['String']>;
};

export type GutterInformationsInput = {
  type?: Maybe<GutterType>;
  notes?: Maybe<Scalars['String']>;
};

export type GutterInformations = {
  __typename?: 'GutterInformations';
  type?: Maybe<GutterType>;
  notes?: Maybe<Scalars['String']>;
};

export type RoofInsulationInput = {
  name?: Maybe<RoofInsulations>;
  notes?: Maybe<Scalars['String']>;
};

export type GeneralInformation = {
  __typename?: 'GeneralInformation';
  qualityInformation?: Maybe<Array<Maybe<QualityInformations>>>;
  images?: Maybe<Array<File>>;
  notes?: Maybe<Scalars['String']>;
};

export type PropertyRelated = {
  __typename?: 'PropertyRelated';
  items?: Maybe<Array<Maybe<PropertyRelatedItems>>>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<Array<File>>;
};

export type RoofType = {
  __typename?: 'RoofType';
  name?: Maybe<RoofTypes>;
  notes?: Maybe<Scalars['String']>;
};

export type RoofMaterial = {
  __typename?: 'RoofMaterial';
  name?: Maybe<RoofMaterials>;
  notes?: Maybe<Scalars['String']>;
};

export type RoofInsulation = {
  __typename?: 'RoofInsulation';
  name?: Maybe<RoofInsulations>;
  notes?: Maybe<Scalars['String']>;
};

export type RoofInformation = {
  __typename?: 'RoofInformation';
  type?: Maybe<RoofType>;
  material?: Maybe<RoofMaterial>;
  insulation?: Maybe<RoofInsulation>;
  images?: Maybe<Array<File>>;
  yearOfRoof?: Maybe<Scalars['Int']>;
  gutter?: Maybe<GutterInformations>;
  gutterMaterial?: Maybe<GutterMaterialInformations>;
};

export type FoundationTypeInformationsInput = {
  type?: Maybe<FoundationType>;
  notes?: Maybe<Scalars['String']>;
};

export type FoundationTypeInformations = {
  __typename?: 'FoundationTypeInformations';
  type?: Maybe<FoundationType>;
  notes?: Maybe<Scalars['String']>;
};

export type FoundationMaterialInformationsInput = {
  type?: Maybe<Array<FoundationMaterialType>>;
  notes?: Maybe<Scalars['String']>;
};

export type FoundationMaterialInformations = {
  __typename?: 'FoundationMaterialInformations';
  type?: Maybe<Array<FoundationMaterialType>>;
  notes?: Maybe<Scalars['String']>;
};

export type FoundationInput = {
  type?: Maybe<FoundationTypeInformationsInput>;
  material?: Maybe<FoundationMaterialInformationsInput>;
};

export type Foundation = {
  __typename?: 'Foundation';
  type?: Maybe<FoundationTypeInformations>;
  material?: Maybe<FoundationMaterialInformations>;
};

export type HouseOutsideInput = {
  generalInformation?: Maybe<GeneralInformationInput>;
  foundation?: Maybe<FoundationInput>;
  propertyRelated?: Maybe<PropertyRelatedInput>;
  roofInformation?: Maybe<RoofInformationInput>;
  notes?: Maybe<Scalars['String']>;
};

export type HouseOutside = {
  __typename?: 'HouseOutside';
  generalInformation?: Maybe<GeneralInformation>;
  foundation?: Maybe<Foundation>;
  propertyRelated?: Maybe<PropertyRelated>;
  roofInformation?: Maybe<RoofInformation>;
  notes?: Maybe<Scalars['String']>;
};

export type GardenFeature = {
  __typename?: 'GardenFeature';
  main?: Maybe<Scalars['Boolean']>;
  type?: Maybe<GardenType>;
  notes?: Maybe<Scalars['String']>;
  quality?: Maybe<GardenQualityType>;
  location?: Maybe<Array<Maybe<Location>>>;
  shape?: Maybe<GardenShapeType>;
  measurement?: Maybe<RectangleMeasurement>;
  images?: Maybe<Array<File>>;
};

export type GarageFeature = {
  __typename?: 'GarageFeature';
  main?: Maybe<Scalars['Boolean']>;
  types?: Maybe<Array<Maybe<GarageType>>>;
  attached?: Maybe<Scalars['Boolean']>;
  attic?: Maybe<Scalars['Boolean']>;
  insulations?: Maybe<Array<Maybe<GarageInsulation>>>;
  services?: Maybe<Array<Maybe<GarageService>>>;
  secondaryWindows?: Maybe<Scalars['Boolean']>;
  materials?: Maybe<Array<Maybe<GarageAndStorageMaterial>>>;
  measurement?: Maybe<CuboidMeasurement>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<Array<File>>;
};

export type StorageFeature = {
  __typename?: 'StorageFeature';
  main?: Maybe<Scalars['Boolean']>;
  attached?: Maybe<Scalars['Boolean']>;
  types?: Maybe<Array<Maybe<StorageType>>>;
  materials?: Maybe<Array<Maybe<GarageAndStorageMaterial>>>;
  insulations?: Maybe<Array<Maybe<StorageInsulation>>>;
  services?: Maybe<Array<Maybe<StorageService>>>;
  secondaryWindows?: Maybe<Scalars['Boolean']>;
  measurement?: Maybe<CuboidMeasurement>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<Array<File>>;
};

export type TerrainFeature = {
  __typename?: 'TerrainFeature';
  parking?: Maybe<TerrainParking>;
  measurement?: Maybe<RectangleMeasurement>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<Array<File>>;
};

export type ParkingLotFeature = {
  __typename?: 'ParkingLotFeature';
  number?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<Array<File>>;
};

export type OutsideFeatureConfiguration =
  | GardenFeature
  | GarageFeature
  | StorageFeature
  | TerrainFeature
  | ParkingLotFeature;

export type OutsideFeature = LastUpdated & {
  __typename?: 'OutsideFeature';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: OutsideFeatureType;
  configuration?: Maybe<OutsideFeatureConfiguration>;
  dateCreated?: Maybe<Scalars['Date']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export type PimOutside = LastUpdated & {
  __typename?: 'PimOutside';
  id: Scalars['ID'];
  houseOutside?: Maybe<HouseOutside>;
  outsideFeatures?: Maybe<Array<OutsideFeature>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export type PimOutsideInput = {
  id: Scalars['ID'];
  houseOutside?: Maybe<HouseOutsideInput>;
};

export type AddOutsideFeatureInput = {
  pimId: Scalars['String'];
  type: OutsideFeatureType;
  description?: Maybe<Scalars['String']>;
};

export type PimWithNewOutside = {
  __typename?: 'PimWithNewOutside';
  pim: Pim;
  newOutsideFeature: OutsideFeature;
};

export enum CostPaymentFrequency {
  Monthly = 'Monthly',
  Yearly = 'Yearly',
}

export enum PricingType {
  Sale = 'Sale',
  Rent = 'Rent',
}

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

export enum SalePriceSuffix {
  CostsBuyer = 'CostsBuyer',
  FreeInName = 'FreeInName',
  NoneOfThem = 'NoneOfThem',
}

export enum RentPaymentFrequency {
  PerMonth = 'PerMonth',
  Annual = 'Annual',
  Custom = 'Custom',
}

export enum SaleCondition {
  VatTaxed = 'VatTaxed',
  IncludingVat = 'IncludingVat',
  ExcludingConstructionInterest = 'ExcludingConstructionInterest',
}

export enum RentCondition {
  VatTaxed = 'VatTaxed',
  ExcludingServiceCosts = 'ExcludingServiceCosts',
  Furnished = 'Furnished',
  IncludingServiceCosts = 'IncludingServiceCosts',
  Indexed = 'Indexed',
}

export enum PurchaseMix {
  MgeConstruction = 'MgeConstruction',
  PartOfIndividualProject = 'PartOfIndividualProject',
  PurchaseGuarantee = 'PurchaseGuarantee',
  MixedFormPurchaseRent = 'MixedFormPurchaseRent',
}

export type SaleGeneralInput = {
  prefix?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['AbsoluteFloat']>;
  suffix?: Maybe<Scalars['String']>;
  executionSale?: Maybe<Scalars['Boolean']>;
  dateOfExecutionSale?: Maybe<Scalars['Date']>;
  conditions?: Maybe<SaleCondition>;
  purchaseMix?: Maybe<PurchaseMix>;
  notes?: Maybe<Scalars['String']>;
};

export type SaleGeneral = {
  __typename?: 'SaleGeneral';
  prefix?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['AbsoluteFloat']>;
  suffix?: Maybe<Scalars['String']>;
  executionSale?: Maybe<Scalars['Boolean']>;
  dateOfExecutionSale?: Maybe<Scalars['Date']>;
  conditions?: Maybe<SaleCondition>;
  purchaseMix?: Maybe<PurchaseMix>;
  notes?: Maybe<Scalars['String']>;
};

export type SaleWozInput = {
  wozPrice?: Maybe<Scalars['AbsoluteFloat']>;
  referenceDateWoz?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
};

export type SaleWoz = {
  __typename?: 'SaleWOZ';
  wozPrice?: Maybe<Scalars['AbsoluteFloat']>;
  referenceDateWoz?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
};

export type SaleInformationsInput = {
  general?: Maybe<SaleGeneralInput>;
  woz?: Maybe<SaleWozInput>;
};

export type SaleInformations = {
  __typename?: 'SaleInformations';
  general?: Maybe<SaleGeneral>;
  woz?: Maybe<SaleWoz>;
  isEnabled?: Maybe<Scalars['Boolean']>;
};

export type RentInformationsInput = {
  rentalPrice?: Maybe<Scalars['AbsoluteFloat']>;
  suffix?: Maybe<Scalars['String']>;
  conditions?: Maybe<RentCondition>;
  notes?: Maybe<Scalars['String']>;
  paymentFrequency?: Maybe<RentPaymentFrequency>;
};

export type RentInformations = {
  __typename?: 'RentInformations';
  rentalPrice?: Maybe<Scalars['AbsoluteFloat']>;
  paymentFrequency?: Maybe<RentPaymentFrequency>;
  suffix?: Maybe<Scalars['String']>;
  conditions?: Maybe<RentCondition>;
  notes?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
};

export type PimPrices = LastUpdated & {
  __typename?: 'PimPrices';
  id: Scalars['ID'];
  pricing?: Maybe<Pricing>;
  costs?: Maybe<Array<Cost>>;
  investment?: Maybe<Investment>;
  costsDescription?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export type TogglePricingInput = {
  id: Scalars['ID'];
  isRent: Scalars['Boolean'];
  isSale: Scalars['Boolean'];
};

export type UpdatePricingInput = {
  id: Scalars['ID'];
  rent?: Maybe<RentInformationsInput>;
  sale?: Maybe<SaleInformationsInput>;
  description?: Maybe<Scalars['String']>;
};

export type Pricing = LastUpdated & {
  __typename?: 'Pricing';
  rent?: Maybe<RentInformations>;
  sale?: Maybe<SaleInformations>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

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

export type UpdateCostInput = {
  id: Scalars['ID'];
  serviceCosts?: Maybe<Scalars['AbsoluteFloat']>;
  paymentsFrequency?: Maybe<CostPaymentFrequency>;
  vatTaxedServiceCosts?: Maybe<Scalars['AbsoluteFloat']>;
  vatPercentage?: Maybe<Scalars['CostVat']>;
  notes?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AddCostInput = {
  id: Scalars['ID'];
  type: CostType;
  name?: Maybe<Scalars['String']>;
};

export type CostResult = {
  __typename?: 'CostResult';
  pim: Pim;
  cost: Cost;
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
  description?: Maybe<Scalars['String']>;
};

export type Investment = LastUpdated & {
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
  description?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export enum MomentGeneralSetting {
  ScheduleOnline = 'ScheduleOnline',
  DoNotScheduleOnline = 'DoNotScheduleOnline',
}

export enum MomentScheduleDay {
  Mon = 'Mon',
  Tue = 'Tue',
  Wed = 'Wed',
  Thu = 'Thu',
  Fri = 'Fri',
  Sat = 'Sat',
  Sun = 'Sun',
}

export enum TypeOfAppointment {
  Viewing = 'Viewing',
  OnlineViewing = 'OnlineViewing',
}

export type MomentSchedule = {
  __typename?: 'MomentSchedule';
  day?: Maybe<MomentScheduleDay>;
  startAt?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['String']>;
};

export type MomentScheduleInput = {
  day?: Maybe<MomentScheduleDay>;
  startAt?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['String']>;
};

export type ViewingMoment = {
  __typename?: 'ViewingMoment';
  id: Scalars['ID'];
  typeOfAppointment?: Maybe<TypeOfAppointment>;
  schedules?: Maybe<Array<MomentSchedule>>;
  duration?: Maybe<Scalars['Int']>;
  travelTimeBefore?: Maybe<Scalars['Int']>;
  travelTimeAfter?: Maybe<Scalars['Int']>;
  accountManagersIds?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateViewingMomentInput = {
  id: Scalars['ID'];
  typeOfAppointment?: Maybe<TypeOfAppointment>;
  schedules?: Maybe<Array<MomentScheduleInput>>;
  duration?: Maybe<Scalars['Int']>;
  travelTimeBefore?: Maybe<Scalars['Int']>;
  travelTimeAfter?: Maybe<Scalars['Int']>;
  accountManagers?: Maybe<Array<Scalars['ID']>>;
};

export type AddViewingMomentInput = {
  pimId: Scalars['ID'];
};

export type SalesSettingsInput = {
  pimId: Scalars['ID'];
  generalSettings?: Maybe<MomentGeneralSetting>;
  amountOfViewings?: Maybe<Scalars['Int']>;
  moments?: Maybe<Array<UpdateViewingMomentInput>>;
};

export type SalesSettings = {
  __typename?: 'SalesSettings';
  generalSettings?: Maybe<MomentGeneralSetting>;
  amountOfViewings?: Maybe<Scalars['Int']>;
};

export type PimSales = LastUpdated & {
  __typename?: 'PimSales';
  id: Scalars['ID'];
  salesSettings?: Maybe<SalesSettings>;
  viewingMoments?: Maybe<Array<ViewingMoment>>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type AddViewingMomentResult = {
  __typename?: 'AddViewingMomentResult';
  pim: Pim;
  moment: ViewingMoment;
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

export type Meter = LastUpdated & {
  __typename?: 'Meter';
  id: Scalars['String'];
  type: MeterType;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  readings?: Maybe<Array<Reading>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export type HeatingSourceMaintenanceContract = {
  __typename?: 'HeatingSourceMaintenanceContract';
  enabled: Scalars['Boolean'];
  endDate?: Maybe<Scalars['Date']>;
};

export type HotWaterSupplyConfiguration = {
  __typename?: 'HotWaterSupplyConfiguration';
  type: HotWaterSupplyType;
  fuel?: Maybe<HotWaterSupplyFuelType>;
};

export type HeatingSourceConfiguration = {
  __typename?: 'HeatingSourceConfiguration';
  type: HeatingSourceType;
  maintenanceContract?: Maybe<HeatingSourceMaintenanceContract>;
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

export type PimServices = LastUpdated & {
  __typename?: 'PimServices';
  id: Scalars['String'];
  meters?: Maybe<Array<Meter>>;
  hotWaterSupplies?: Maybe<Array<Service>>;
  heatingSources?: Maybe<Array<Service>>;
  additionalServices?: Maybe<Array<Service>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
  description?: Maybe<Scalars['String']>;
};

export type PimWithNewService = {
  __typename?: 'PimWithNewService';
  pim: Pim;
  newService: Service;
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

export enum InspectionType {
  Tanks = 'Tanks',
  Pollution = 'Pollution',
  Maintenance = 'Maintenance',
}

export enum ParkingFacilities {
  PaidParking = 'PaidParking',
  OnSite = 'OnSite',
  ParkingGarage = 'ParkingGarage',
  OnClosedTerrain = 'OnClosedTerrain',
  PublicParking = 'PublicParking',
  ParkingPermits = 'ParkingPermits',
}

export enum MonumentType {
  Heritage = 'Heritage',
  MonumentalProperty = 'MonumentalProperty',
  ProtectedCityOrVillageView = 'ProtectedCityOrVillageView',
  NationalMonument = 'NationalMonument',
  MunciapalMonument = 'MunciapalMonument',
}

export enum InsideType {
  Furnished = 'Furnished',
  Upholstered = 'Upholstered',
  PartialyUpholstered = 'PartialyUpholstered',
}

export enum HousingType {
  PartiallyRented = 'PartiallyRented',
  DoubleOccupancyAvailable = 'DoubleOccupancyAvailable',
  DoubleOccupancyPossible = 'DoubleOccupancyPossible',
  AccessibleToDisabledPeople = 'AccessibleToDisabledPeople',
  AcessibleToTheEldery = 'AcessibleToTheEldery',
}

export enum SpecialTagsType {
  DemolitionProperty = 'DemolitionProperty',
  DoItYourselfProperty = 'DoItYourselfProperty',
  SeniorsProperty = 'SeniorsProperty',
  RuralLiving = 'RuralLiving',
  The30s = 'The30s',
  LivingNearTheWater = 'LivingNearTheWater',
  ExclusiveProperty = 'ExclusiveProperty',
  Turnkey = 'Turnkey',
  ReadyToUse = 'ReadyToUse',
  StarterProperty = 'StarterProperty',
}

export enum PropertyRightType {
  BpRights = 'BpRights',
  Easements = 'Easements',
  RightOfSuperficies = 'RightOfSuperficies',
  Cooperative = 'Cooperative',
  Horizontal = 'Horizontal',
}

export enum GoodToKnowType {
  MaintenancePlan = 'MaintenancePlan',
  ReserveFund = 'ReserveFund',
  HomeInsurance = 'HomeInsurance',
  PeriodicContribution = 'PeriodicContribution',
  Meeting = 'Meeting',
  RegistrationChamberOfCommerce = 'RegistrationChamberOfCommerce',
  ChecklistPresent = 'ChecklistPresent',
  Active = 'Active',
}

export enum TankType {
  Septic = 'Septic',
  Oil = 'Oil',
  Underground = 'Underground',
}

export enum PollutionType {
  Asbestos = 'Asbestos',
  Soil = 'Soil',
}

export enum MaintenanceType {
  Paintwork = 'Paintwork',
  ElectricityConnections = 'ElectricityConnections',
  WindowFrames = 'WindowFrames',
}

export enum EnergyCharasteristicType {
  Beng = 'Beng',
  NaturalEnergy = 'NaturalEnergy',
  ZeroOnMeter = 'ZeroOnMeter',
}

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

export enum ObligationToProvideInformationType {
  Boot = 'Boot',
  BwLetter = 'BwLetter',
  SoilPollution = 'SoilPollution',
  Asbestos = 'Asbestos',
  OwnSake = 'OwnSake',
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

export type Inspection = {
  __typename?: 'Inspection';
  id: Scalars['ID'];
  inspectionType: InspectionType;
  type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type AddInspectionInput = {
  pimId: Scalars['ID'];
  inspectionType: InspectionType;
  type: Scalars['String'];
};

export type UpdateInspectionInput = {
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
};

export type Energy = {
  __typename?: 'Energy';
  label?: Maybe<EnergyType>;
  energyIndex?: Maybe<Scalars['String']>;
  endDateEnergyLabel?: Maybe<Scalars['Date']>;
  EPC?: Maybe<Scalars['String']>;
  characteristicType?: Maybe<EnergyCharasteristicType>;
  notes?: Maybe<Scalars['String']>;
};

export type EnergyInput = {
  label?: Maybe<EnergyType>;
  energyIndex?: Maybe<Scalars['String']>;
  endDateEnergyLabel?: Maybe<Scalars['Date']>;
  EPC?: Maybe<Scalars['String']>;
  characteristicType?: Maybe<EnergyCharasteristicType>;
  notes?: Maybe<Scalars['String']>;
};

export type Approvals = {
  __typename?: 'Approvals';
  label?: Maybe<Array<ApprovalType>>;
  notes?: Maybe<Scalars['String']>;
};

export type ApprovalsInput = {
  label?: Maybe<Array<ApprovalType>>;
  notes?: Maybe<Scalars['String']>;
};

export type ObligationToProvideInformationInput = {
  label?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type ObligationToProvideInformation = {
  __typename?: 'ObligationToProvideInformation';
  label?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type SpecificationInput = {
  pimId: Scalars['ID'];
  energy?: Maybe<EnergyInput>;
  approvals?: Maybe<ApprovalsInput>;
  obligation?: Maybe<ObligationToProvideInformationInput>;
  description?: Maybe<Scalars['String']>;
};

export type Specification = LastUpdated & {
  __typename?: 'Specification';
  energy?: Maybe<Energy>;
  approvals?: Maybe<Approvals>;
  obligation?: Maybe<ObligationToProvideInformation>;
  description?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export type PimSpecification = LastUpdated & {
  __typename?: 'PimSpecification';
  id: Scalars['ID'];
  specification?: Maybe<Specification>;
  specificationAdvanced?: Maybe<SpecificationAdvanced>;
  linkedProperties?: Maybe<Array<LinkedPim>>;
  inspections?: Maybe<Array<Inspection>>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  linkedPropertiesDateUpdated?: Maybe<Scalars['Date']>;
  linkedPropertiesLastEditedBy?: Maybe<Profile>;
  linkedPropertiesDescription?: Maybe<Scalars['String']>;
  inspectionsDateUpdated?: Maybe<Scalars['Date']>;
  inspectionsLastEditedBy?: Maybe<Profile>;
  inspectionsDescription?: Maybe<Scalars['String']>;
};

export type AddInspectionResult = {
  __typename?: 'AddInspectionResult';
  inspection: Inspection;
  pim: Pim;
};

export type ParkingSpecification = {
  __typename?: 'ParkingSpecification';
  description?: Maybe<Scalars['String']>;
  parkingCapacity?: Maybe<Scalars['String']>;
  parkingFacilities?: Maybe<Array<Scalars['String']>>;
};

export type ParkingSpecificationInput = {
  description?: Maybe<Scalars['String']>;
  parkingCapacity?: Maybe<Scalars['String']>;
  parkingFacilities?: Maybe<Array<Scalars['String']>>;
};

export type MonumentSpecification = {
  __typename?: 'MonumentSpecification';
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type MonumentSpecificationInput = {
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type InsideSpecification = {
  __typename?: 'InsideSpecification';
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type InsideSpecificationInput = {
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type HousingOptions = {
  __typename?: 'HousingOptions';
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type HousingOptionsInput = {
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type SpecialTags = {
  __typename?: 'SpecialTags';
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type SpecialTagsInput = {
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type PropertyRights = {
  __typename?: 'PropertyRights';
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type PropertyRightsInput = {
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type HomeOwnerAssociation = {
  __typename?: 'HomeOwnerAssociation';
  name?: Maybe<Scalars['String']>;
  monthlyContribution?: Maybe<Scalars['AbsoluteFloat']>;
  goodToKnow?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type HomeOwnerAssociationInput = {
  name?: Maybe<Scalars['String']>;
  monthlyContribution?: Maybe<Scalars['AbsoluteFloat']>;
  goodToKnow?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type SpecificationAdvanced = LastUpdated & {
  __typename?: 'SpecificationAdvanced';
  parking?: Maybe<ParkingSpecification>;
  monument?: Maybe<MonumentSpecification>;
  inside?: Maybe<InsideSpecification>;
  housingOptions?: Maybe<HousingOptions>;
  specialTags?: Maybe<SpecialTags>;
  propertyRights?: Maybe<PropertyRights>;
  homeOwnerAssociation?: Maybe<HomeOwnerAssociation>;
  description?: Maybe<Scalars['String']>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type SpecificationAdvancedInput = {
  pimId: Scalars['String'];
  parking?: Maybe<ParkingSpecificationInput>;
  monument?: Maybe<MonumentSpecificationInput>;
  inside?: Maybe<InsideSpecificationInput>;
  housingOptions?: Maybe<HousingOptionsInput>;
  specialTags?: Maybe<SpecialTagsInput>;
  propertyRights?: Maybe<PropertyRightsInput>;
  homeOwnerAssociation?: Maybe<HomeOwnerAssociationInput>;
  description?: Maybe<Scalars['String']>;
};

export enum RealEstateType {
  Residential = 'Residential',
  Business = 'Business',
}

export enum DevelopmentType {
  New = 'New',
  Existing = 'Existing',
}

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

export enum PropertyType {
  House = 'House',
  Apartment = 'Apartment',
  Commercial = 'Commercial',
  Agricultural = 'Agricultural',
  ParkingLot = 'ParkingLot',
  BuildingPlot = 'BuildingPlot',
  Other = 'Other',
}

export enum EventEntityType {
  Pim = 'Pim',
}

export enum EventAction {
  Created = 'Created',
  Updated = 'Updated',
  Removed = 'Removed',
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

export enum PropertyConnection {
  SemiDetached = 'SemiDetached',
  FinalHouse = 'FinalHouse',
  CornerHouse = 'CornerHouse',
  TerracedHouse = 'TerracedHouse',
  DetachedHouse = 'DetachedHouse',
}

export enum PropertyAvailability {
  InConsultation = 'InConsultation',
  Immediatelly = 'Immediatelly',
  ByDate = 'ByDate',
}

export enum PropertyHabitation {
  RecreationalHome = 'RecreationalHome',
  PermanentOccupation = 'PermanentOccupation',
}

export enum SectionWithDescriptionType {
  Media = 'Media',
  Inspection = 'Inspection',
  LinkedProperties = 'LinkedProperties',
  Services = 'Services',
  PricesCosts = 'PricesCosts',
}

export type PropertyRelatedInput = {
  items?: Maybe<Array<Maybe<PropertyRelatedItems>>>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GeneralInformationInput = {
  qualityInformation?: Maybe<Array<Maybe<QualityInformations>>>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Scalars['String']>;
};

export enum ConstructionType {
  UnderConstruction = 'UnderConstruction',
  InDevelopment = 'InDevelopment',
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

export type Pim = LastUpdated & {
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
  insideGeneral?: Maybe<InsideGeneral>;
  cadastre?: Maybe<Array<Cadastre>>;
  meters?: Maybe<Array<Meter>>;
  services?: Maybe<Array<Service>>;
  servicesDescription?: Maybe<Scalars['String']>;
  pictures?: Maybe<Array<Picture>>;
  textChapters?: Maybe<Array<TextChapter>>;
  usps?: Maybe<Array<Usp>>;
  mediaLinks?: Maybe<Array<MediaLink>>;
  mediaDescription?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  pricing?: Maybe<Pricing>;
  costs?: Maybe<Array<Cost>>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  investment?: Maybe<Investment>;
  specification?: Maybe<Specification>;
  specificationAdvanced?: Maybe<SpecificationAdvanced>;
  specificationDescription?: Maybe<Scalars['String']>;
  linkedProperties?: Maybe<Array<LinkedPim>>;
  inspections?: Maybe<Array<Inspection>>;
  identificationNumbers?: Maybe<Array<IdentificationNumber>>;
  salesSettings?: Maybe<SalesSettings>;
  viewingMoments?: Maybe<Array<ViewingMoment>>;
  location?: Maybe<PimLocation>;
  linkedPropertiesDateUpdated?: Maybe<Scalars['Date']>;
  linkedPropertiesLastEditedBy?: Maybe<Profile>;
  inspectionsDateUpdated?: Maybe<Scalars['Date']>;
  inspectionsLastEditedBy?: Maybe<Profile>;
};

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

export type PimSearchResult = {
  __typename?: 'PimSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<Pim>>;
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

export type ChangesHistoryFilters = {
  entityType?: Maybe<EventEntityType>;
};

export type UpdateOutsideFeatureInput = {
  pimId: Scalars['String'];
  outsideFeatureId: Scalars['String'];
  feature?: Maybe<Scalars['UpdateFeatureInputConfiguration']>;
};

export type UpdateDescriptionInput = {
  section: SectionWithDescriptionType;
  pimId: Scalars['String'];
  description: Scalars['String'];
};

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

export type Company = {
  __typename?: 'Company';
  id: Scalars['String'];
  teams?: Maybe<Array<Team>>;
  name?: Maybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['String'];
  members?: Maybe<Array<Profile>>;
  company: Company;
  name?: Maybe<Scalars['String']>;
};

export type SearchMetadata = {
  __typename?: 'SearchMetadata';
  total: Scalars['Int'];
};

export type LastUpdated = {
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Sort = {
  column: Scalars['String'];
  direction: SortDirection;
};

export type Pagination = {
  from?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  searchAfter?: Maybe<Array<Scalars['String']>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
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

export type AddLabelMutationVariables = {
  input: LabelInput;
};

export type AddLabelMutation = { __typename?: 'Mutation' } & {
  addLabel: { __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'text' | 'icon'>;
};

export type AddCadastreMutationVariables = {
  input: AddCadastreInput;
};

export type AddCadastreMutation = { __typename?: 'Mutation' } & {
  addCadastre?: Maybe<
    { __typename?: 'Pim' } & Pick<Pim, 'id'> & {
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

export type UpdatePimGeneralInfoMutationVariables = {
  input: PimGeneralInput;
};

export type UpdatePimGeneralInfoMutation = { __typename?: 'Mutation' } & {
  updatePimGeneralInfo: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddIdentificationNumberMutationVariables = {
  input: AddIdentificationNumberInput;
};

export type AddIdentificationNumberMutation = { __typename?: 'Mutation' } & {
  addIdentificationNumber: { __typename?: 'PimWithNewIdentificationNumber' } & {
    newIdentificationNumber: { __typename?: 'IdentificationNumber' } & Pick<IdentificationNumber, 'id'>;
  };
};

export type UpdateIdentificationNumberMutationVariables = {
  input: UpdateIdentificationNumberInput;
};

export type UpdateIdentificationNumberMutation = { __typename?: 'Mutation' } & {
  updateIdentificationNumber: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddFloorToPimMutationVariables = {
  input: AddNewFloorInput;
};

export type AddFloorToPimMutation = { __typename?: 'Mutation' } & {
  addFloorToPim: { __typename?: 'PimWithNewFloor' } & { newFloor: { __typename?: 'Floor' } & Pick<Floor, 'id'> };
};

export type AddSpaceToFloorMutationVariables = {
  input: AddSpaceInput;
};

export type AddSpaceToFloorMutation = { __typename?: 'Mutation' } & {
  addSpaceToFloor: { __typename?: 'PimWithUpdatedSpace' } & {
    pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
    newSpace: { __typename?: 'Space' } & Pick<Space, 'id'>;
  };
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

export type UpdateInsideGeneralMutationVariables = {
  input: InsideGeneralInput;
};

export type UpdateInsideGeneralMutation = { __typename?: 'Mutation' } & {
  updateInsideGeneral?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdatePimLocationMutationVariables = {
  input: UpdatePimLocationInput;
};

export type UpdatePimLocationMutation = { __typename?: 'Mutation' } & {
  updatePimLocation: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddTagMutationVariables = {
  input: AddTagInput;
};

export type AddTagMutation = { __typename?: 'Mutation' } & {
  addTag?: Maybe<
    { __typename?: 'PimWithNewTag' } & {
      pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
      newTag: { __typename?: 'Tag' } & Pick<Tag, 'id'>;
    }
  >;
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput;
};

export type UpdateTagMutation = { __typename?: 'Mutation' } & {
  updateTag?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddUspMutationVariables = {
  input: AddUspInput;
};

export type AddUspMutation = { __typename?: 'Mutation' } & {
  addUsp?: Maybe<
    { __typename?: 'PimWithNewUsp' } & {
      pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
      newUsp: { __typename?: 'Usp' } & Pick<Usp, 'id'>;
    }
  >;
};

export type UpdateUspMutationVariables = {
  input: UpdateUspInput;
};

export type UpdateUspMutation = { __typename?: 'Mutation' } & {
  updateUsp?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddMediaLinkMutationVariables = {
  input: AddMediaLinkInput;
};

export type AddMediaLinkMutation = { __typename?: 'Mutation' } & {
  addMediaLink?: Maybe<
    { __typename?: 'PimWithNewMediaLink' } & {
      pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
      newMediaLink: { __typename?: 'MediaLink' } & Pick<MediaLink, 'id'>;
    }
  >;
};

export type UpdateMediaLinkMutationVariables = {
  input: UpdateMediaLinkInput;
};

export type UpdateMediaLinkMutation = { __typename?: 'Mutation' } & {
  updateMediaLink?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddTextChapterMutationVariables = {
  input: AddTextChapterInput;
};

export type AddTextChapterMutation = { __typename?: 'Mutation' } & {
  addTextChapter?: Maybe<
    { __typename?: 'PimWithNewTextChapter' } & {
      pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
      newChapter: { __typename?: 'TextChapter' } & Pick<TextChapter, 'id'>;
    }
  >;
};

export type UpdateTextChapterMutationVariables = {
  input: UpdateTextChapterInput;
};

export type UpdateTextChapterMutation = { __typename?: 'Mutation' } & {
  updateTextChapter?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddPicturesMutationVariables = {
  input: AddPicturesInput;
};

export type AddPicturesMutation = { __typename?: 'Mutation' } & {
  addPictures?: Maybe<{ __typename?: 'PimWithNewPictures' } & { pim: { __typename?: 'Pim' } & Pick<Pim, 'id'> }>;
};

export type UpdatePictureMutationVariables = {
  input: UpdatePictureInput;
};

export type UpdatePictureMutation = { __typename?: 'Mutation' } & {
  updatePicture?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddOutsideFeatureMutationVariables = {
  input: AddOutsideFeatureInput;
};

export type AddOutsideFeatureMutation = { __typename?: 'Mutation' } & {
  addOutsideFeature: { __typename?: 'PimWithNewOutside' } & {
    newOutsideFeature: { __typename?: 'OutsideFeature' } & Pick<OutsideFeature, 'id'>;
  };
};

export type UpdateOutsideFeatureMutationVariables = {
  input: Scalars['UpdateFeatureInputConfiguration'];
};

export type UpdateOutsideFeatureMutation = { __typename?: 'Mutation' } & {
  updateOutsideFeature: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type UpdatePimOutsideInfoMutationVariables = {
  input: PimOutsideInput;
};

export type UpdatePimOutsideInfoMutation = { __typename?: 'Mutation' } & {
  updatePimOutsideInfo: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type TogglePricingMutationVariables = {
  input: TogglePricingInput;
};

export type TogglePricingMutation = { __typename?: 'Mutation' } & {
  togglePricing: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddCostsMutationVariables = {
  input: AddCostInput;
};

export type AddCostsMutation = { __typename?: 'Mutation' } & {
  addCost: { __typename?: 'CostResult' } & { pim: { __typename?: 'Pim' } & Pick<Pim, 'id'> };
};

export type UpdateCostMutationVariables = {
  input: UpdateCostInput;
};

export type UpdateCostMutation = { __typename?: 'Mutation' } & {
  updateCost: { __typename?: 'CostResult' } & { pim: { __typename?: 'Pim' } & Pick<Pim, 'id'> };
};

export type UpdateInvestmentMutationVariables = {
  input: InvestmentInput;
};

export type UpdateInvestmentMutation = { __typename?: 'Mutation' } & {
  updateInvestment: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type UpdatePricingMutationVariables = {
  input: UpdatePricingInput;
};

export type UpdatePricingMutation = { __typename?: 'Mutation' } & {
  updatePricing: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
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

export type UpdateSpecificationMutationVariables = {
  input: SpecificationInput;
};

export type UpdateSpecificationMutation = { __typename?: 'Mutation' } & {
  updateSpecification: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type UpdateSpecificationAdvancedMutationVariables = {
  input: SpecificationAdvancedInput;
};

export type UpdateSpecificationAdvancedMutation = { __typename?: 'Mutation' } & {
  updateSpecificationAdvanced: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type SetLinkedPropertiesMutationVariables = {
  input: LinkedPimInput;
};

export type SetLinkedPropertiesMutation = { __typename?: 'Mutation' } & {
  setLinkedProperties: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddInspectionMutationVariables = {
  input: AddInspectionInput;
};

export type AddInspectionMutation = { __typename?: 'Mutation' } & {
  addInspection: { __typename?: 'AddInspectionResult' } & {
    inspection: { __typename?: 'Inspection' } & Pick<Inspection, 'id'>;
  };
};

export type UpdateInspectionMutationVariables = {
  input: UpdateInspectionInput;
};

export type UpdateInspectionMutation = { __typename?: 'Mutation' } & {
  updateInspection: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type CreatePimMutationVariables = {
  input: CreatePimInput;
};

export type CreatePimMutation = { __typename?: 'Mutation' } & {
  createPim?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateDescriptionMutationVariables = {
  input: UpdateDescriptionInput;
};

export type UpdateDescriptionMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'updateDescription'>;

export type GetLabelsQueryVariables = {
  pimId: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty>>;
};

export type GetLabelsQuery = { __typename?: 'Query' } & {
  getLabels?: Maybe<Array<{ __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'icon' | 'text'>>>;
};

export type CountPimsByParamsQueryVariables = {
  filters?: Maybe<ListPimsFilters>;
};

export type CountPimsByParamsQuery = { __typename?: 'Query' } & {
  listPims: { __typename?: 'PimListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type ListPimsCountQueryVariables = {};

export type ListPimsCountQuery = { __typename?: 'Query' } & {
  activeCount: { __typename?: 'PimListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  archivedCount: { __typename?: 'PimListSearchResult' } & {
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
  listPims: { __typename?: 'PimListSearchResult' } & {
    items?: Maybe<
      Array<
        { __typename?: 'ListPim' } & Pick<
          ListPim,
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

export type PimCadastreQueryVariables = {
  id: Scalars['ID'];
};

export type PimCadastreQuery = { __typename?: 'Query' } & {
  getPimCadastre: { __typename?: 'PimCadastre' } & Pick<PimCadastre, 'id'> & {
      cadastre?: Maybe<
        Array<
          { __typename?: 'Cadastre' } & Pick<
            Cadastre,
            'id' | 'description' | 'type' | 'dateCreated' | 'dateUpdated'
          > & {
              maps?: Maybe<
                Array<
                  { __typename?: 'CadastreMap' } & Pick<
                    CadastreMap,
                    'id' | 'mapName' | 'name' | 'description' | 'type'
                  > & { file?: Maybe<{ __typename?: 'File' } & Pick<File, 'key' | 'id'>> }
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
                  | 'ownershipChoice'
                  | 'ownershipType'
                > & {
                    lease?: Maybe<
                      { __typename?: 'Lease' } & Pick<
                        Lease,
                        'leaseholder' | 'information' | 'duration' | 'yearlyPrice' | 'endDate'
                      >
                    >;
                    boughtOff?: Maybe<{ __typename?: 'BoughtOff' } & Pick<BoughtOff, 'date' | 'perpetually' | 'notes'>>;
                  }
              >;
              lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
            }
        >
      >;
    };
};

export type PimGeneralQueryVariables = {
  id: Scalars['ID'];
};

export type PimGeneralQuery = { __typename?: 'Query' } & {
  getPimGeneral: { __typename?: 'PimGeneral' } & Pick<
    PimGeneral,
    | 'id'
    | 'street'
    | 'houseNumber'
    | 'postalCode'
    | 'district'
    | 'city'
    | 'state'
    | 'county'
    | 'country'
    | 'showExtraAddress'
    | 'showIdentificationNumber'
    | 'dateUpdated'
  > & {
      houseGeneral?: Maybe<
        { __typename?: 'HouseGeneral' } & Pick<HouseGeneral, 'propertyConnection' | 'propertyDetails'> & {
            construction?: Maybe<
              { __typename?: 'ConstructionInformation' } & Pick<
                ConstructionInformation,
                'type' | 'from' | 'to' | 'notes'
              >
            >;
            availability?: Maybe<
              { __typename?: 'PropertyAvailabilityInformation' } & Pick<
                PropertyAvailabilityInformation,
                'availability' | 'from' | 'notes' | 'habitation' | 'currentUse' | 'currentDestination'
              >
            >;
          }
      >;
      extraAddress?: Maybe<
        { __typename?: 'ExtraAddress' } & Pick<
          ExtraAddress,
          'plotNumber' | 'plotNumberAddition' | 'houseNumberStart' | 'houseNumberEnd'
        >
      >;
      identificationNumbers?: Maybe<
        Array<{ __typename?: 'IdentificationNumber' } & Pick<IdentificationNumber, 'id' | 'name' | 'number' | 'type'>>
      >;
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
    };
};

export type PimInsideQueryVariables = {
  id: Scalars['ID'];
};

export type PimInsideQuery = { __typename?: 'Query' } & {
  getPimInside: { __typename?: 'PimInside' } & Pick<PimInside, 'id'> & {
      floors?: Maybe<
        Array<
          { __typename?: 'Floor' } & Pick<Floor, 'id' | 'level' | 'floorType' | 'floorDescription' | 'dateUpdated'> & {
              lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
              spaces?: Maybe<
                Array<
                  { __typename?: 'Space' } & Pick<Space, 'id' | 'spaceType' | 'spaceName'> & {
                      configuration?: Maybe<
                        | ({ __typename?: 'KitchenSpace' } & Pick<
                            KitchenSpace,
                            | 'constructionYear'
                            | 'notes'
                            | 'constructionType'
                            | 'servicesNotes'
                            | 'hob'
                            | 'shape'
                            | 'serviceHeating'
                          > & { kitchenType: KitchenSpace['type']; kitchenServices: KitchenSpace['services'] } & {
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
                                { __typename?: 'CuboidMeasurement' } & Pick<
                                  CuboidMeasurement,
                                  'length' | 'width' | 'height' | 'surface' | 'volume'
                                >
                              >;
                              images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                            })
                        | ({ __typename?: 'BathroomSpace' } & Pick<
                            BathroomSpace,
                            'constructionYear' | 'shape' | 'serviceHeating'
                          > & { bathroomServices: BathroomSpace['services'] } & {
                              measurement?: Maybe<
                                { __typename?: 'CuboidMeasurement' } & Pick<
                                  CuboidMeasurement,
                                  'length' | 'width' | 'height' | 'surface' | 'volume'
                                >
                              >;
                              images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                            })
                        | ({ __typename?: 'LivingRoomSpace' } & Pick<
                            LivingRoomSpace,
                            'shape' | 'stairs' | 'serviceHeating'
                          > & { livingRoomType: LivingRoomSpace['type'] } & {
                              measurement?: Maybe<
                                { __typename?: 'CuboidMeasurement' } & Pick<
                                  CuboidMeasurement,
                                  'length' | 'width' | 'height' | 'surface' | 'volume'
                                >
                              >;
                              images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                            })
                        | ({ __typename?: 'BedroomSpace' } & Pick<
                            BedroomSpace,
                            'notes' | 'shape' | 'serviceHeating'
                          > & {
                              measurement?: Maybe<
                                { __typename?: 'CuboidMeasurement' } & Pick<
                                  CuboidMeasurement,
                                  'length' | 'width' | 'height' | 'surface' | 'volume'
                                >
                              >;
                              images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                            })
                        | ({ __typename?: 'HomeOfficeSpace' } & Pick<
                            HomeOfficeSpace,
                            'notes' | 'shape' | 'serviceHeating'
                          > & {
                              measurement?: Maybe<
                                { __typename?: 'CuboidMeasurement' } & Pick<
                                  CuboidMeasurement,
                                  'length' | 'width' | 'height' | 'surface' | 'volume'
                                >
                              >;
                              images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                            })
                        | ({ __typename?: 'OtherSpace' } & Pick<OtherSpace, 'notes' | 'shape' | 'serviceHeating'> & {
                              measurement?: Maybe<
                                { __typename?: 'CuboidMeasurement' } & Pick<
                                  CuboidMeasurement,
                                  'length' | 'width' | 'height' | 'surface' | 'volume'
                                >
                              >;
                              images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                            })
                      >;
                    }
                >
              >;
            }
        >
      >;
      insideGeneral?: Maybe<
        { __typename?: 'InsideGeneral' } & Pick<InsideGeneral, 'notes' | 'dateUpdated'> & {
            extension?: Maybe<{ __typename?: 'Extension' } & Pick<Extension, 'notes' | 'yearOfExtension'>>;
            renovation?: Maybe<{ __typename?: 'Renovation' } & Pick<Renovation, 'notes' | 'yearOfRenovation'>>;
            windows?: Maybe<{ __typename?: 'InsideWindows' } & Pick<InsideWindows, 'notes' | 'types'>>;
            lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
          }
      >;
    };
};

export type PimLocationQueryVariables = {
  id: Scalars['ID'];
};

export type PimLocationQuery = { __typename?: 'Query' } & {
  getPimLocation: { __typename?: 'PimLocation' } & Pick<
    PimLocation,
    'id' | 'latitude' | 'longitude' | 'type' | 'notes' | 'description' | 'dateUpdated'
  > & {
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
      goodToKnows?: Maybe<
        Array<{ __typename?: 'GoodToKnow' } & Pick<GoodToKnow, 'type' | 'distance' | 'units' | 'checked'>>
      >;
    };
};

export type PimMediaQueryVariables = {
  id: Scalars['ID'];
  picturesSort?: Maybe<Sort>;
};

export type PimMediaQuery = { __typename?: 'Query' } & {
  getPimMedia: { __typename?: 'PimMedia' } & Pick<PimMedia, 'id' | 'description' | 'dateUpdated'> & {
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
      pictures?: Maybe<
        Array<
          { __typename?: 'Picture' } & Pick<Picture, 'id' | 'name' | 'description' | 'type' | 'dateUpdated'> & {
              file?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'fileName'>>;
            }
        >
      >;
      mediaLinks?: Maybe<Array<{ __typename?: 'MediaLink' } & Pick<MediaLink, 'id' | 'name' | 'type' | 'url'>>>;
      textChapters?: Maybe<Array<{ __typename?: 'TextChapter' } & Pick<TextChapter, 'id' | 'name' | 'type' | 'text'>>>;
      usps?: Maybe<Array<{ __typename?: 'Usp' } & Pick<Usp, 'id' | 'name' | 'description' | 'type'>>>;
      tags?: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'id' | 'name' | 'description' | 'type'>>>;
    };
};

export type PimOutsideQueryVariables = {
  id: Scalars['ID'];
};

export type PimOutsideQuery = { __typename?: 'Query' } & {
  getPimOutside: { __typename?: 'PimOutside' } & Pick<PimOutside, 'id' | 'dateUpdated'> & {
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
      houseOutside?: Maybe<
        { __typename?: 'HouseOutside' } & Pick<HouseOutside, 'notes'> & {
            foundation?: Maybe<
              { __typename?: 'Foundation' } & {
                material?: Maybe<
                  { __typename?: 'FoundationMaterialInformations' } & Pick<
                    FoundationMaterialInformations,
                    'notes' | 'type'
                  >
                >;
                type?: Maybe<
                  { __typename?: 'FoundationTypeInformations' } & Pick<FoundationTypeInformations, 'notes' | 'type'>
                >;
              }
            >;
            generalInformation?: Maybe<
              { __typename?: 'GeneralInformation' } & Pick<GeneralInformation, 'qualityInformation' | 'notes'> & {
                  images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>>>;
                }
            >;
            propertyRelated?: Maybe<
              { __typename?: 'PropertyRelated' } & Pick<PropertyRelated, 'items' | 'notes'> & {
                  images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>>>;
                }
            >;
            roofInformation?: Maybe<
              { __typename?: 'RoofInformation' } & Pick<RoofInformation, 'yearOfRoof'> & {
                  type?: Maybe<{ __typename?: 'RoofType' } & Pick<RoofType, 'name' | 'notes'>>;
                  material?: Maybe<{ __typename?: 'RoofMaterial' } & Pick<RoofMaterial, 'name' | 'notes'>>;
                  insulation?: Maybe<{ __typename?: 'RoofInsulation' } & Pick<RoofInsulation, 'name' | 'notes'>>;
                  images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>>>;
                  gutter?: Maybe<{ __typename?: 'GutterInformations' } & Pick<GutterInformations, 'notes' | 'type'>>;
                  gutterMaterial?: Maybe<
                    { __typename?: 'GutterMaterialInformations' } & Pick<
                      GutterMaterialInformations,
                      'material' | 'notes'
                    >
                  >;
                }
            >;
          }
      >;
      outsideFeatures?: Maybe<
        Array<
          { __typename?: 'OutsideFeature' } & Pick<
            OutsideFeature,
            'id' | 'type' | 'dateCreated' | 'dateUpdated' | 'description'
          > & {
              lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
              configuration?: Maybe<
                | ({ __typename?: 'GardenFeature' } & Pick<
                    GardenFeature,
                    'main' | 'type' | 'notes' | 'quality' | 'location' | 'shape'
                  > & {
                      measurement?: Maybe<
                        { __typename?: 'RectangleMeasurement' } & Pick<
                          RectangleMeasurement,
                          'length' | 'width' | 'surface'
                        >
                      >;
                      images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                    })
                | ({ __typename?: 'GarageFeature' } & Pick<
                    GarageFeature,
                    'main' | 'notes' | 'attached' | 'attic' | 'secondaryWindows' | 'materials'
                  > & {
                      garageTypes: GarageFeature['types'];
                      garageInsulations: GarageFeature['insulations'];
                      garageServices: GarageFeature['services'];
                    } & {
                      measurement?: Maybe<
                        { __typename?: 'CuboidMeasurement' } & Pick<
                          CuboidMeasurement,
                          'length' | 'width' | 'height' | 'surface' | 'volume'
                        >
                      >;
                      images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                    })
                | ({ __typename?: 'StorageFeature' } & Pick<
                    StorageFeature,
                    'main' | 'notes' | 'attached' | 'secondaryWindows' | 'materials'
                  > & {
                      storageTypes: StorageFeature['types'];
                      storageInsulations: StorageFeature['insulations'];
                      storageServices: StorageFeature['services'];
                    } & {
                      measurement?: Maybe<
                        { __typename?: 'CuboidMeasurement' } & Pick<
                          CuboidMeasurement,
                          'length' | 'width' | 'height' | 'surface' | 'volume'
                        >
                      >;
                      images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                    })
                | ({ __typename?: 'TerrainFeature' } & Pick<TerrainFeature, 'parking' | 'notes'> & {
                      measurement?: Maybe<
                        { __typename?: 'RectangleMeasurement' } & Pick<
                          RectangleMeasurement,
                          'length' | 'width' | 'surface'
                        >
                      >;
                      images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
                    })
                | ({ __typename?: 'ParkingLotFeature' } & Pick<
                    ParkingLotFeature,
                    'number' | 'price' | 'cost' | 'notes'
                  > & { images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>> })
              >;
            }
        >
      >;
    };
};

export type PimPricingQueryVariables = {
  id: Scalars['ID'];
};

export type PimPricingQuery = { __typename?: 'Query' } & {
  getPricing: { __typename?: 'PimPrices' } & Pick<PimPrices, 'id' | 'costsDescription' | 'dateUpdated'> & {
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
      pricing?: Maybe<
        { __typename?: 'Pricing' } & Pick<Pricing, 'description' | 'dateUpdated'> & {
            lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
            rent?: Maybe<
              { __typename?: 'RentInformations' } & Pick<
                RentInformations,
                'isEnabled' | 'rentalPrice' | 'paymentFrequency' | 'suffix' | 'notes' | 'conditions'
              >
            >;
            sale?: Maybe<
              { __typename?: 'SaleInformations' } & Pick<SaleInformations, 'isEnabled'> & {
                  general?: Maybe<
                    { __typename?: 'SaleGeneral' } & Pick<
                      SaleGeneral,
                      | 'prefix'
                      | 'price'
                      | 'suffix'
                      | 'executionSale'
                      | 'dateOfExecutionSale'
                      | 'conditions'
                      | 'purchaseMix'
                      | 'notes'
                    >
                  >;
                  woz?: Maybe<{ __typename?: 'SaleWOZ' } & Pick<SaleWoz, 'wozPrice' | 'referenceDateWoz' | 'notes'>>;
                }
            >;
          }
      >;
      costs?: Maybe<
        Array<
          { __typename?: 'Cost' } & Pick<
            Cost,
            | 'id'
            | 'serviceCosts'
            | 'paymentsFrequency'
            | 'vatTaxedServiceCosts'
            | 'vatPercentage'
            | 'notes'
            | 'type'
            | 'name'
          >
        >
      >;
      investment?: Maybe<
        { __typename?: 'Investment' } & Pick<
          Investment,
          | 'description'
          | 'netRentalIncome'
          | 'grossRentalIncome'
          | 'economicRentalValue'
          | 'averageMaturity'
          | 'rentIndexed'
          | 'splitApartment'
          | 'averageVacancyPercentage'
          | 'numberOfRentableUnits'
          | 'amountOfTenants'
          | 'remainingTermContacts'
          | 'vacancySquareMeters'
          | 'notes'
          | 'dateUpdated'
        > & { lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>> }
      >;
    };
};

export type PimServicesQueryVariables = {
  id: Scalars['ID'];
};

export type PimServicesQuery = { __typename?: 'Query' } & {
  getPimServices: { __typename?: 'PimServices' } & Pick<PimServices, 'description' | 'dateUpdated'> & {
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
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
          { __typename?: 'Service' } & Pick<
            Service,
            'id' | 'type' | 'name' | 'description' | 'yearOfInstallation' | 'ownership'
          > & {
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
          { __typename?: 'Service' } & Pick<
            Service,
            'id' | 'type' | 'name' | 'description' | 'yearOfInstallation' | 'ownership'
          > & {
              configuration:
                | { __typename?: 'HotWaterSupplyConfiguration' }
                | { __typename?: 'HeatingSourceConfiguration' }
                | ({ __typename?: 'AdditionalServiceConfiguration' } & Pick<AdditionalServiceConfiguration, 'type'>);
            }
        >
      >;
    };
};

export type PimSpecificationQueryVariables = {
  id: Scalars['ID'];
};

export type PimSpecificationQuery = { __typename?: 'Query' } & {
  getPimSpecification: { __typename?: 'PimSpecification' } & Pick<
    PimSpecification,
    'linkedPropertiesDescription' | 'inspectionsDescription' | 'linkedPropertiesDateUpdated' | 'inspectionsDateUpdated'
  > & {
      linkedPropertiesLastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
      inspectionsLastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
      specification?: Maybe<
        { __typename?: 'Specification' } & Pick<Specification, 'description' | 'dateUpdated'> & {
            lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
            energy?: Maybe<
              { __typename?: 'Energy' } & Pick<
                Energy,
                'label' | 'energyIndex' | 'endDateEnergyLabel' | 'EPC' | 'characteristicType' | 'notes'
              >
            >;
            approvals?: Maybe<{ __typename?: 'Approvals' } & Pick<Approvals, 'notes' | 'label'>>;
            obligation?: Maybe<
              { __typename?: 'ObligationToProvideInformation' } & Pick<
                ObligationToProvideInformation,
                'label' | 'notes'
              >
            >;
          }
      >;
      specificationAdvanced?: Maybe<
        { __typename?: 'SpecificationAdvanced' } & Pick<SpecificationAdvanced, 'description' | 'dateUpdated'> & {
            lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
            parking?: Maybe<
              { __typename?: 'ParkingSpecification' } & Pick<
                ParkingSpecification,
                'description' | 'parkingCapacity' | 'parkingFacilities'
              >
            >;
            monument?: Maybe<{ __typename?: 'MonumentSpecification' } & Pick<MonumentSpecification, 'notes' | 'type'>>;
            inside?: Maybe<{ __typename?: 'InsideSpecification' } & Pick<InsideSpecification, 'notes' | 'type'>>;
            housingOptions?: Maybe<{ __typename?: 'HousingOptions' } & Pick<HousingOptions, 'notes' | 'type'>>;
            specialTags?: Maybe<{ __typename?: 'SpecialTags' } & Pick<SpecialTags, 'notes' | 'type'>>;
            propertyRights?: Maybe<{ __typename?: 'PropertyRights' } & Pick<PropertyRights, 'notes' | 'type'>>;
            homeOwnerAssociation?: Maybe<
              { __typename?: 'HomeOwnerAssociation' } & Pick<
                HomeOwnerAssociation,
                'name' | 'monthlyContribution' | 'goodToKnow' | 'notes'
              >
            >;
          }
      >;
      linkedProperties?: Maybe<
        Array<
          { __typename?: 'LinkedPim' } & Pick<
            LinkedPim,
            | 'id'
            | 'houseNumberPrefix'
            | 'houseNumber'
            | 'houseNumberAddition'
            | 'postalCode'
            | 'district'
            | 'city'
            | 'state'
            | 'county'
            | 'country'
            | 'propertyType'
            | 'attention'
            | 'plotNumber'
            | 'salePrice'
            | 'rentPrice'
            | 'status'
          > & { images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>> }
        >
      >;
      inspections?: Maybe<
        Array<{ __typename?: 'Inspection' } & Pick<Inspection, 'id' | 'inspectionType' | 'type' | 'description'>>
      >;
    };
};

export type PimOverallInfoQueryVariables = {
  id: Scalars['ID'];
};

export type PimOverallInfoQuery = { __typename?: 'Query' } & {
  getPimGeneral: { __typename?: 'PimGeneral' } & Pick<PimGeneral, 'street' | 'houseNumber' | 'postalCode' | 'city'>;
  getPimInside: { __typename?: 'PimInside' } & {
    floors?: Maybe<Array<{ __typename?: 'Floor' } & Pick<Floor, 'id' | 'floorType' | 'level'>>>;
  };
  getPimOutside: { __typename?: 'PimOutside' } & {
    outsideFeatures?: Maybe<Array<{ __typename?: 'OutsideFeature' } & Pick<OutsideFeature, 'id' | 'type'>>>;
  };
  getPimCadastre: { __typename?: 'PimCadastre' } & {
    cadastre?: Maybe<Array<{ __typename?: 'Cadastre' } & Pick<Cadastre, 'id' | 'type'>>>;
  };
  getPimServices: { __typename?: 'PimServices' } & {
    meters?: Maybe<Array<{ __typename?: 'Meter' } & Pick<Meter, 'id' | 'type'>>>;
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
export const AddLabelDocument = gql`
  mutation AddLabel($input: LabelInput!) {
    addLabel(input: $input) {
      id
      property
      text
      icon
    }
  }
`;
export function useAddLabelMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddLabelMutation, AddLabelMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddLabelMutation, AddLabelMutationVariables>(AddLabelDocument, baseOptions);
}
export type AddLabelMutationHookResult = ReturnType<typeof useAddLabelMutation>;
export type AddLabelMutationResult = ApolloReactCommon.MutationResult<AddLabelMutation>;
export type AddLabelMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddLabelMutation,
  AddLabelMutationVariables
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
export const AddIdentificationNumberDocument = gql`
  mutation AddIdentificationNumber($input: AddIdentificationNumberInput!) {
    addIdentificationNumber(input: $input) {
      newIdentificationNumber {
        id
      }
    }
  }
`;
export function useAddIdentificationNumberMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddIdentificationNumberMutation,
    AddIdentificationNumberMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddIdentificationNumberMutation, AddIdentificationNumberMutationVariables>(
    AddIdentificationNumberDocument,
    baseOptions,
  );
}
export type AddIdentificationNumberMutationHookResult = ReturnType<typeof useAddIdentificationNumberMutation>;
export type AddIdentificationNumberMutationResult = ApolloReactCommon.MutationResult<AddIdentificationNumberMutation>;
export type AddIdentificationNumberMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddIdentificationNumberMutation,
  AddIdentificationNumberMutationVariables
>;
export const UpdateIdentificationNumberDocument = gql`
  mutation UpdateIdentificationNumber($input: UpdateIdentificationNumberInput!) {
    updateIdentificationNumber(input: $input) {
      id
    }
  }
`;
export function useUpdateIdentificationNumberMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateIdentificationNumberMutation,
    UpdateIdentificationNumberMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateIdentificationNumberMutation, UpdateIdentificationNumberMutationVariables>(
    UpdateIdentificationNumberDocument,
    baseOptions,
  );
}
export type UpdateIdentificationNumberMutationHookResult = ReturnType<typeof useUpdateIdentificationNumberMutation>;
export type UpdateIdentificationNumberMutationResult = ApolloReactCommon.MutationResult<
  UpdateIdentificationNumberMutation
>;
export type UpdateIdentificationNumberMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateIdentificationNumberMutation,
  UpdateIdentificationNumberMutationVariables
>;
export const AddFloorToPimDocument = gql`
  mutation AddFloorToPim($input: AddNewFloorInput!) {
    addFloorToPim(input: $input) {
      newFloor {
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
      newSpace {
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
export const UpdateInsideGeneralDocument = gql`
  mutation UPDATEInsideGeneral($input: InsideGeneralInput!) {
    updateInsideGeneral(input: $input) {
      id
    }
  }
`;
export function useUpdateInsideGeneralMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateInsideGeneralMutation, UpdateInsideGeneralMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateInsideGeneralMutation, UpdateInsideGeneralMutationVariables>(
    UpdateInsideGeneralDocument,
    baseOptions,
  );
}
export type UpdateInsideGeneralMutationHookResult = ReturnType<typeof useUpdateInsideGeneralMutation>;
export type UpdateInsideGeneralMutationResult = ApolloReactCommon.MutationResult<UpdateInsideGeneralMutation>;
export type UpdateInsideGeneralMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateInsideGeneralMutation,
  UpdateInsideGeneralMutationVariables
>;
export const UpdatePimLocationDocument = gql`
  mutation UpdatePimLocation($input: UpdatePimLocationInput!) {
    updatePimLocation(input: $input) {
      id
    }
  }
`;
export function useUpdatePimLocationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePimLocationMutation, UpdatePimLocationMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdatePimLocationMutation, UpdatePimLocationMutationVariables>(
    UpdatePimLocationDocument,
    baseOptions,
  );
}
export type UpdatePimLocationMutationHookResult = ReturnType<typeof useUpdatePimLocationMutation>;
export type UpdatePimLocationMutationResult = ApolloReactCommon.MutationResult<UpdatePimLocationMutation>;
export type UpdatePimLocationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdatePimLocationMutation,
  UpdatePimLocationMutationVariables
>;
export const AddTagDocument = gql`
  mutation AddTag($input: AddTagInput!) {
    addTag(input: $input) {
      pim {
        id
      }
      newTag {
        id
      }
    }
  }
`;
export function useAddTagMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddTagMutation, AddTagMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddTagMutation, AddTagMutationVariables>(AddTagDocument, baseOptions);
}
export type AddTagMutationHookResult = ReturnType<typeof useAddTagMutation>;
export type AddTagMutationResult = ApolloReactCommon.MutationResult<AddTagMutation>;
export type AddTagMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTagMutation, AddTagMutationVariables>;
export const UpdateTagDocument = gql`
  mutation UpdateTag($input: UpdateTagInput!) {
    updateTag(input: $input) {
      id
    }
  }
`;
export function useUpdateTagMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTagMutation, UpdateTagMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateTagMutation, UpdateTagMutationVariables>(UpdateTagDocument, baseOptions);
}
export type UpdateTagMutationHookResult = ReturnType<typeof useUpdateTagMutation>;
export type UpdateTagMutationResult = ApolloReactCommon.MutationResult<UpdateTagMutation>;
export type UpdateTagMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateTagMutation,
  UpdateTagMutationVariables
>;
export const AddUspDocument = gql`
  mutation AddUsp($input: AddUspInput!) {
    addUsp(input: $input) {
      pim {
        id
      }
      newUsp {
        id
      }
    }
  }
`;
export function useAddUspMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddUspMutation, AddUspMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddUspMutation, AddUspMutationVariables>(AddUspDocument, baseOptions);
}
export type AddUspMutationHookResult = ReturnType<typeof useAddUspMutation>;
export type AddUspMutationResult = ApolloReactCommon.MutationResult<AddUspMutation>;
export type AddUspMutationOptions = ApolloReactCommon.BaseMutationOptions<AddUspMutation, AddUspMutationVariables>;
export const UpdateUspDocument = gql`
  mutation UpdateUsp($input: UpdateUspInput!) {
    updateUsp(input: $input) {
      id
    }
  }
`;
export function useUpdateUspMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUspMutation, UpdateUspMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateUspMutation, UpdateUspMutationVariables>(UpdateUspDocument, baseOptions);
}
export type UpdateUspMutationHookResult = ReturnType<typeof useUpdateUspMutation>;
export type UpdateUspMutationResult = ApolloReactCommon.MutationResult<UpdateUspMutation>;
export type UpdateUspMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateUspMutation,
  UpdateUspMutationVariables
>;
export const AddMediaLinkDocument = gql`
  mutation AddMediaLink($input: AddMediaLinkInput!) {
    addMediaLink(input: $input) {
      pim {
        id
      }
      newMediaLink {
        id
      }
    }
  }
`;
export function useAddMediaLinkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddMediaLinkMutation, AddMediaLinkMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddMediaLinkMutation, AddMediaLinkMutationVariables>(
    AddMediaLinkDocument,
    baseOptions,
  );
}
export type AddMediaLinkMutationHookResult = ReturnType<typeof useAddMediaLinkMutation>;
export type AddMediaLinkMutationResult = ApolloReactCommon.MutationResult<AddMediaLinkMutation>;
export type AddMediaLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddMediaLinkMutation,
  AddMediaLinkMutationVariables
>;
export const UpdateMediaLinkDocument = gql`
  mutation UpdateMediaLink($input: UpdateMediaLinkInput!) {
    updateMediaLink(input: $input) {
      id
    }
  }
`;
export function useUpdateMediaLinkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMediaLinkMutation, UpdateMediaLinkMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateMediaLinkMutation, UpdateMediaLinkMutationVariables>(
    UpdateMediaLinkDocument,
    baseOptions,
  );
}
export type UpdateMediaLinkMutationHookResult = ReturnType<typeof useUpdateMediaLinkMutation>;
export type UpdateMediaLinkMutationResult = ApolloReactCommon.MutationResult<UpdateMediaLinkMutation>;
export type UpdateMediaLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateMediaLinkMutation,
  UpdateMediaLinkMutationVariables
>;
export const AddTextChapterDocument = gql`
  mutation AddTextChapter($input: AddTextChapterInput!) {
    addTextChapter(input: $input) {
      pim {
        id
      }
      newChapter {
        id
      }
    }
  }
`;
export function useAddTextChapterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddTextChapterMutation, AddTextChapterMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddTextChapterMutation, AddTextChapterMutationVariables>(
    AddTextChapterDocument,
    baseOptions,
  );
}
export type AddTextChapterMutationHookResult = ReturnType<typeof useAddTextChapterMutation>;
export type AddTextChapterMutationResult = ApolloReactCommon.MutationResult<AddTextChapterMutation>;
export type AddTextChapterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddTextChapterMutation,
  AddTextChapterMutationVariables
>;
export const UpdateTextChapterDocument = gql`
  mutation UpdateTextChapter($input: UpdateTextChapterInput!) {
    updateTextChapter(input: $input) {
      id
    }
  }
`;
export function useUpdateTextChapterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTextChapterMutation, UpdateTextChapterMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateTextChapterMutation, UpdateTextChapterMutationVariables>(
    UpdateTextChapterDocument,
    baseOptions,
  );
}
export type UpdateTextChapterMutationHookResult = ReturnType<typeof useUpdateTextChapterMutation>;
export type UpdateTextChapterMutationResult = ApolloReactCommon.MutationResult<UpdateTextChapterMutation>;
export type UpdateTextChapterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateTextChapterMutation,
  UpdateTextChapterMutationVariables
>;
export const AddPicturesDocument = gql`
  mutation AddPictures($input: AddPicturesInput!) {
    addPictures(input: $input) {
      pim {
        id
      }
    }
  }
`;
export function useAddPicturesMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddPicturesMutation, AddPicturesMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddPicturesMutation, AddPicturesMutationVariables>(
    AddPicturesDocument,
    baseOptions,
  );
}
export type AddPicturesMutationHookResult = ReturnType<typeof useAddPicturesMutation>;
export type AddPicturesMutationResult = ApolloReactCommon.MutationResult<AddPicturesMutation>;
export type AddPicturesMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddPicturesMutation,
  AddPicturesMutationVariables
>;
export const UpdatePictureDocument = gql`
  mutation UpdatePicture($input: UpdatePictureInput!) {
    updatePicture(input: $input) {
      id
    }
  }
`;
export function useUpdatePictureMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePictureMutation, UpdatePictureMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdatePictureMutation, UpdatePictureMutationVariables>(
    UpdatePictureDocument,
    baseOptions,
  );
}
export type UpdatePictureMutationHookResult = ReturnType<typeof useUpdatePictureMutation>;
export type UpdatePictureMutationResult = ApolloReactCommon.MutationResult<UpdatePictureMutation>;
export type UpdatePictureMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdatePictureMutation,
  UpdatePictureMutationVariables
>;
export const AddOutsideFeatureDocument = gql`
  mutation AddOutsideFeature($input: AddOutsideFeatureInput!) {
    addOutsideFeature(input: $input) {
      newOutsideFeature {
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
  mutation UpdateOutsideFeature($input: UpdateFeatureInputConfiguration!) {
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
export const TogglePricingDocument = gql`
  mutation TogglePricing($input: TogglePricingInput!) {
    togglePricing(input: $input) {
      id
    }
  }
`;
export function useTogglePricingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<TogglePricingMutation, TogglePricingMutationVariables>,
) {
  return ApolloReactHooks.useMutation<TogglePricingMutation, TogglePricingMutationVariables>(
    TogglePricingDocument,
    baseOptions,
  );
}
export type TogglePricingMutationHookResult = ReturnType<typeof useTogglePricingMutation>;
export type TogglePricingMutationResult = ApolloReactCommon.MutationResult<TogglePricingMutation>;
export type TogglePricingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  TogglePricingMutation,
  TogglePricingMutationVariables
>;
export const AddCostsDocument = gql`
  mutation AddCosts($input: AddCostInput!) {
    addCost(input: $input) {
      pim {
        id
      }
    }
  }
`;
export function useAddCostsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddCostsMutation, AddCostsMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddCostsMutation, AddCostsMutationVariables>(AddCostsDocument, baseOptions);
}
export type AddCostsMutationHookResult = ReturnType<typeof useAddCostsMutation>;
export type AddCostsMutationResult = ApolloReactCommon.MutationResult<AddCostsMutation>;
export type AddCostsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddCostsMutation,
  AddCostsMutationVariables
>;
export const UpdateCostDocument = gql`
  mutation UpdateCost($input: UpdateCostInput!) {
    updateCost(input: $input) {
      pim {
        id
      }
    }
  }
`;
export function useUpdateCostMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCostMutation, UpdateCostMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateCostMutation, UpdateCostMutationVariables>(UpdateCostDocument, baseOptions);
}
export type UpdateCostMutationHookResult = ReturnType<typeof useUpdateCostMutation>;
export type UpdateCostMutationResult = ApolloReactCommon.MutationResult<UpdateCostMutation>;
export type UpdateCostMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCostMutation,
  UpdateCostMutationVariables
>;
export const UpdateInvestmentDocument = gql`
  mutation UpdateInvestment($input: InvestmentInput!) {
    updateInvestment(input: $input) {
      id
    }
  }
`;
export function useUpdateInvestmentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateInvestmentMutation, UpdateInvestmentMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateInvestmentMutation, UpdateInvestmentMutationVariables>(
    UpdateInvestmentDocument,
    baseOptions,
  );
}
export type UpdateInvestmentMutationHookResult = ReturnType<typeof useUpdateInvestmentMutation>;
export type UpdateInvestmentMutationResult = ApolloReactCommon.MutationResult<UpdateInvestmentMutation>;
export type UpdateInvestmentMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateInvestmentMutation,
  UpdateInvestmentMutationVariables
>;
export const UpdatePricingDocument = gql`
  mutation UpdatePricing($input: UpdatePricingInput!) {
    updatePricing(input: $input) {
      id
    }
  }
`;
export function useUpdatePricingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePricingMutation, UpdatePricingMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdatePricingMutation, UpdatePricingMutationVariables>(
    UpdatePricingDocument,
    baseOptions,
  );
}
export type UpdatePricingMutationHookResult = ReturnType<typeof useUpdatePricingMutation>;
export type UpdatePricingMutationResult = ApolloReactCommon.MutationResult<UpdatePricingMutation>;
export type UpdatePricingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdatePricingMutation,
  UpdatePricingMutationVariables
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
export const UpdateSpecificationDocument = gql`
  mutation UpdateSpecification($input: SpecificationInput!) {
    updateSpecification(input: $input) {
      id
    }
  }
`;
export function useUpdateSpecificationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSpecificationMutation, UpdateSpecificationMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateSpecificationMutation, UpdateSpecificationMutationVariables>(
    UpdateSpecificationDocument,
    baseOptions,
  );
}
export type UpdateSpecificationMutationHookResult = ReturnType<typeof useUpdateSpecificationMutation>;
export type UpdateSpecificationMutationResult = ApolloReactCommon.MutationResult<UpdateSpecificationMutation>;
export type UpdateSpecificationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateSpecificationMutation,
  UpdateSpecificationMutationVariables
>;
export const UpdateSpecificationAdvancedDocument = gql`
  mutation UpdateSpecificationAdvanced($input: SpecificationAdvancedInput!) {
    updateSpecificationAdvanced(input: $input) {
      id
    }
  }
`;
export function useUpdateSpecificationAdvancedMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateSpecificationAdvancedMutation,
    UpdateSpecificationAdvancedMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateSpecificationAdvancedMutation,
    UpdateSpecificationAdvancedMutationVariables
  >(UpdateSpecificationAdvancedDocument, baseOptions);
}
export type UpdateSpecificationAdvancedMutationHookResult = ReturnType<typeof useUpdateSpecificationAdvancedMutation>;
export type UpdateSpecificationAdvancedMutationResult = ApolloReactCommon.MutationResult<
  UpdateSpecificationAdvancedMutation
>;
export type UpdateSpecificationAdvancedMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateSpecificationAdvancedMutation,
  UpdateSpecificationAdvancedMutationVariables
>;
export const SetLinkedPropertiesDocument = gql`
  mutation SetLinkedProperties($input: LinkedPimInput!) {
    setLinkedProperties(input: $input) {
      id
    }
  }
`;
export function useSetLinkedPropertiesMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<SetLinkedPropertiesMutation, SetLinkedPropertiesMutationVariables>,
) {
  return ApolloReactHooks.useMutation<SetLinkedPropertiesMutation, SetLinkedPropertiesMutationVariables>(
    SetLinkedPropertiesDocument,
    baseOptions,
  );
}
export type SetLinkedPropertiesMutationHookResult = ReturnType<typeof useSetLinkedPropertiesMutation>;
export type SetLinkedPropertiesMutationResult = ApolloReactCommon.MutationResult<SetLinkedPropertiesMutation>;
export type SetLinkedPropertiesMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SetLinkedPropertiesMutation,
  SetLinkedPropertiesMutationVariables
>;
export const AddInspectionDocument = gql`
  mutation AddInspection($input: AddInspectionInput!) {
    addInspection(input: $input) {
      inspection {
        id
      }
    }
  }
`;
export function useAddInspectionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddInspectionMutation, AddInspectionMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddInspectionMutation, AddInspectionMutationVariables>(
    AddInspectionDocument,
    baseOptions,
  );
}
export type AddInspectionMutationHookResult = ReturnType<typeof useAddInspectionMutation>;
export type AddInspectionMutationResult = ApolloReactCommon.MutationResult<AddInspectionMutation>;
export type AddInspectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddInspectionMutation,
  AddInspectionMutationVariables
>;
export const UpdateInspectionDocument = gql`
  mutation UpdateInspection($input: UpdateInspectionInput!) {
    updateInspection(input: $input) {
      id
    }
  }
`;
export function useUpdateInspectionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateInspectionMutation, UpdateInspectionMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateInspectionMutation, UpdateInspectionMutationVariables>(
    UpdateInspectionDocument,
    baseOptions,
  );
}
export type UpdateInspectionMutationHookResult = ReturnType<typeof useUpdateInspectionMutation>;
export type UpdateInspectionMutationResult = ApolloReactCommon.MutationResult<UpdateInspectionMutation>;
export type UpdateInspectionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateInspectionMutation,
  UpdateInspectionMutationVariables
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
export const UpdateDescriptionDocument = gql`
  mutation UpdateDescription($input: UpdateDescriptionInput!) {
    updateDescription(input: $input)
  }
`;
export function useUpdateDescriptionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateDescriptionMutation, UpdateDescriptionMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateDescriptionMutation, UpdateDescriptionMutationVariables>(
    UpdateDescriptionDocument,
    baseOptions,
  );
}
export type UpdateDescriptionMutationHookResult = ReturnType<typeof useUpdateDescriptionMutation>;
export type UpdateDescriptionMutationResult = ApolloReactCommon.MutationResult<UpdateDescriptionMutation>;
export type UpdateDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateDescriptionMutation,
  UpdateDescriptionMutationVariables
>;
export const GetLabelsDocument = gql`
  query GetLabels($pimId: ID!, $properties: [LabelProperty!]) {
    getLabels(pimId: $pimId, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
export function useGetLabelsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, baseOptions);
}
export function useGetLabelsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, baseOptions);
}
export type GetLabelsQueryHookResult = ReturnType<typeof useGetLabelsQuery>;
export type GetLabelsLazyQueryHookResult = ReturnType<typeof useGetLabelsLazyQuery>;
export type GetLabelsQueryResult = ApolloReactCommon.QueryResult<GetLabelsQuery, GetLabelsQueryVariables>;
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
          name
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
          ownershipChoice
          ownershipType
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
        lastEditedBy {
          id
          firstName
          lastName
        }
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
export const PimGeneralDocument = gql`
  query PimGeneral($id: ID!) {
    getPimGeneral(id: $id) {
      id
      street
      houseNumber
      postalCode
      district
      city
      state
      county
      country
      houseGeneral {
        propertyConnection
        propertyDetails
        construction {
          type
          from
          to
          notes
        }
        availability {
          availability
          from
          notes
          habitation
          currentUse
          currentDestination
        }
      }
      extraAddress {
        plotNumber
        plotNumberAddition
        houseNumberStart
        houseNumberEnd
      }
      identificationNumbers {
        id
        name
        number
        type
      }
      showExtraAddress
      showIdentificationNumber
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
    }
  }
`;
export function usePimGeneralQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimGeneralQuery, PimGeneralQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimGeneralQuery, PimGeneralQueryVariables>(PimGeneralDocument, baseOptions);
}
export function usePimGeneralLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimGeneralQuery, PimGeneralQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimGeneralQuery, PimGeneralQueryVariables>(PimGeneralDocument, baseOptions);
}
export type PimGeneralQueryHookResult = ReturnType<typeof usePimGeneralQuery>;
export type PimGeneralLazyQueryHookResult = ReturnType<typeof usePimGeneralLazyQuery>;
export type PimGeneralQueryResult = ApolloReactCommon.QueryResult<PimGeneralQuery, PimGeneralQueryVariables>;
export const PimInsideDocument = gql`
  query PimInside($id: ID!) {
    getPimInside(id: $id) {
      id
      floors {
        id
        level
        floorType
        floorDescription
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
        spaces {
          id
          spaceType
          spaceName
          configuration {
            ... on KitchenSpace {
              constructionYear
              notes
              kitchenType: type
              constructionType
              servicesNotes
              kitchenServices: services
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
            ... on LivingRoomSpace {
              livingRoomType: type
              shape
              stairs
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
            ... on BathroomSpace {
              constructionYear
              shape
              bathroomServices: services
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
            ... on BedroomSpace {
              notes
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
            ... on HomeOfficeSpace {
              notes
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
            ... on OtherSpace {
              notes
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
      insideGeneral {
        extension {
          notes
          yearOfExtension
        }
        renovation {
          notes
          yearOfRenovation
        }
        windows {
          notes
          types
        }
        notes
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
      }
    }
  }
`;
export function usePimInsideQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimInsideQuery, PimInsideQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimInsideQuery, PimInsideQueryVariables>(PimInsideDocument, baseOptions);
}
export function usePimInsideLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimInsideQuery, PimInsideQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimInsideQuery, PimInsideQueryVariables>(PimInsideDocument, baseOptions);
}
export type PimInsideQueryHookResult = ReturnType<typeof usePimInsideQuery>;
export type PimInsideLazyQueryHookResult = ReturnType<typeof usePimInsideLazyQuery>;
export type PimInsideQueryResult = ApolloReactCommon.QueryResult<PimInsideQuery, PimInsideQueryVariables>;
export const PimLocationDocument = gql`
  query PimLocation($id: ID!) {
    getPimLocation(id: $id) {
      id
      latitude
      longitude
      type
      notes
      description
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      goodToKnows {
        type
        distance
        units
        checked
      }
    }
  }
`;
export function usePimLocationQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimLocationQuery, PimLocationQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimLocationQuery, PimLocationQueryVariables>(PimLocationDocument, baseOptions);
}
export function usePimLocationLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimLocationQuery, PimLocationQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimLocationQuery, PimLocationQueryVariables>(PimLocationDocument, baseOptions);
}
export type PimLocationQueryHookResult = ReturnType<typeof usePimLocationQuery>;
export type PimLocationLazyQueryHookResult = ReturnType<typeof usePimLocationLazyQuery>;
export type PimLocationQueryResult = ApolloReactCommon.QueryResult<PimLocationQuery, PimLocationQueryVariables>;
export const PimMediaDocument = gql`
  query PimMedia($id: ID!, $picturesSort: Sort) {
    getPimMedia(id: $id) {
      id
      description
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      pictures(sort: $picturesSort) {
        id
        name
        description
        type
        dateUpdated
        file {
          id
          key
          fileName
        }
      }
      mediaLinks {
        id
        name
        type
        url
      }
      textChapters {
        id
        name
        type
        text
      }
      usps {
        id
        name
        description
        type
      }
      tags {
        id
        name
        description
        type
      }
    }
  }
`;
export function usePimMediaQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimMediaQuery, PimMediaQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimMediaQuery, PimMediaQueryVariables>(PimMediaDocument, baseOptions);
}
export function usePimMediaLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimMediaQuery, PimMediaQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimMediaQuery, PimMediaQueryVariables>(PimMediaDocument, baseOptions);
}
export type PimMediaQueryHookResult = ReturnType<typeof usePimMediaQuery>;
export type PimMediaLazyQueryHookResult = ReturnType<typeof usePimMediaLazyQuery>;
export type PimMediaQueryResult = ApolloReactCommon.QueryResult<PimMediaQuery, PimMediaQueryVariables>;
export const PimOutsideDocument = gql`
  query PimOutside($id: ID!) {
    getPimOutside(id: $id) {
      id
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      houseOutside {
        foundation {
          material {
            notes
            type
          }
          type {
            notes
            type
          }
        }
        generalInformation {
          qualityInformation
          images {
            id
            url
          }
          notes
        }
        propertyRelated {
          items
          notes
          images {
            id
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
            id
            url
          }
          gutter {
            notes
            type
          }
          gutterMaterial {
            material
            notes
          }
          yearOfRoof
        }
        notes
      }
      outsideFeatures {
        id
        type
        dateCreated
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
        description
        configuration {
          ... on GardenFeature {
            main
            type
            notes
            quality
            location
            shape
            measurement {
              length
              width
              surface
            }
            images {
              url
            }
          }
          ... on GarageFeature {
            main
            garageTypes: types
            notes
            attached
            attic
            garageInsulations: insulations
            garageServices: services
            secondaryWindows
            materials
            measurement {
              length
              width
              height
              surface
              volume
            }
            images {
              url
            }
          }
          ... on StorageFeature {
            main
            storageTypes: types
            notes
            attached
            storageInsulations: insulations
            storageServices: services
            secondaryWindows
            materials
            measurement {
              length
              width
              height
              surface
              volume
            }
            images {
              url
            }
          }
          ... on TerrainFeature {
            parking
            notes
            measurement {
              length
              width
              surface
            }
            images {
              url
            }
          }
          ... on ParkingLotFeature {
            number
            price
            cost
            notes
            images {
              url
            }
          }
        }
      }
    }
  }
`;
export function usePimOutsideQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimOutsideQuery, PimOutsideQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimOutsideQuery, PimOutsideQueryVariables>(PimOutsideDocument, baseOptions);
}
export function usePimOutsideLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimOutsideQuery, PimOutsideQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimOutsideQuery, PimOutsideQueryVariables>(PimOutsideDocument, baseOptions);
}
export type PimOutsideQueryHookResult = ReturnType<typeof usePimOutsideQuery>;
export type PimOutsideLazyQueryHookResult = ReturnType<typeof usePimOutsideLazyQuery>;
export type PimOutsideQueryResult = ApolloReactCommon.QueryResult<PimOutsideQuery, PimOutsideQueryVariables>;
export const PimPricingDocument = gql`
  query PimPricing($id: ID!) {
    getPricing(id: $id) {
      id
      costsDescription
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      pricing {
        description
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
        rent {
          isEnabled
          rentalPrice
          paymentFrequency
          suffix
          notes
          conditions
        }
        sale {
          isEnabled
          general {
            prefix
            price
            suffix
            executionSale
            dateOfExecutionSale
            conditions
            purchaseMix
            notes
          }
          woz {
            wozPrice
            referenceDateWoz
            notes
          }
        }
      }
      costs {
        id
        serviceCosts
        paymentsFrequency
        vatTaxedServiceCosts
        vatPercentage
        notes
        type
        name
      }
      investment {
        description
        netRentalIncome
        grossRentalIncome
        economicRentalValue
        averageMaturity
        rentIndexed
        splitApartment
        averageVacancyPercentage
        numberOfRentableUnits
        amountOfTenants
        remainingTermContacts
        vacancySquareMeters
        notes
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
      }
    }
  }
`;
export function usePimPricingQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimPricingQuery, PimPricingQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimPricingQuery, PimPricingQueryVariables>(PimPricingDocument, baseOptions);
}
export function usePimPricingLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimPricingQuery, PimPricingQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimPricingQuery, PimPricingQueryVariables>(PimPricingDocument, baseOptions);
}
export type PimPricingQueryHookResult = ReturnType<typeof usePimPricingQuery>;
export type PimPricingLazyQueryHookResult = ReturnType<typeof usePimPricingLazyQuery>;
export type PimPricingQueryResult = ApolloReactCommon.QueryResult<PimPricingQuery, PimPricingQueryVariables>;
export const PimServicesDocument = gql`
  query PimServices($id: ID!) {
    getPimServices(id: $id) {
      description
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
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
        ownership
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
        ownership
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
export const PimSpecificationDocument = gql`
  query PimSpecification($id: ID!) {
    getPimSpecification(id: $id) {
      linkedPropertiesDescription
      inspectionsDescription
      linkedPropertiesDateUpdated
      linkedPropertiesLastEditedBy {
        id
        firstName
        lastName
      }
      inspectionsDateUpdated
      inspectionsLastEditedBy {
        id
        firstName
        lastName
      }
      specification {
        description
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
        energy {
          label
          energyIndex
          endDateEnergyLabel
          EPC
          characteristicType
          notes
        }
        approvals {
          notes
          label
        }
        obligation {
          label
          notes
        }
      }
      specificationAdvanced {
        description
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
        parking {
          description
          parkingCapacity
          parkingFacilities
        }
        monument {
          notes
          type
        }
        inside {
          notes
          type
        }
        housingOptions {
          notes
          type
        }
        specialTags {
          notes
          type
        }
        propertyRights {
          notes
          type
        }
        homeOwnerAssociation {
          name
          monthlyContribution
          goodToKnow
          notes
        }
      }
      linkedProperties {
        id
        houseNumberPrefix
        houseNumber
        houseNumberAddition
        postalCode
        district
        city
        state
        county
        country
        propertyType
        attention
        plotNumber
        salePrice
        rentPrice
        status
        images {
          url
        }
      }
      inspections {
        id
        inspectionType
        type
        description
      }
    }
  }
`;
export function usePimSpecificationQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimSpecificationQuery, PimSpecificationQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimSpecificationQuery, PimSpecificationQueryVariables>(
    PimSpecificationDocument,
    baseOptions,
  );
}
export function usePimSpecificationLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimSpecificationQuery, PimSpecificationQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimSpecificationQuery, PimSpecificationQueryVariables>(
    PimSpecificationDocument,
    baseOptions,
  );
}
export type PimSpecificationQueryHookResult = ReturnType<typeof usePimSpecificationQuery>;
export type PimSpecificationLazyQueryHookResult = ReturnType<typeof usePimSpecificationLazyQuery>;
export type PimSpecificationQueryResult = ApolloReactCommon.QueryResult<
  PimSpecificationQuery,
  PimSpecificationQueryVariables
>;
export const PimOverallInfoDocument = gql`
  query PimOverallInfo($id: ID!) {
    getPimGeneral(id: $id) {
      street
      houseNumber
      postalCode
      city
    }
    getPimInside(id: $id) {
      floors {
        id
        floorType
        level
      }
    }
    getPimOutside(id: $id) {
      outsideFeatures {
        id
        type
      }
    }
    getPimCadastre(id: $id) {
      cadastre {
        id
        type
      }
    }
    getPimServices(id: $id) {
      meters {
        id
        type
      }
    }
  }
`;
export function usePimOverallInfoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimOverallInfoQuery, PimOverallInfoQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimOverallInfoQuery, PimOverallInfoQueryVariables>(
    PimOverallInfoDocument,
    baseOptions,
  );
}
export function usePimOverallInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimOverallInfoQuery, PimOverallInfoQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimOverallInfoQuery, PimOverallInfoQueryVariables>(
    PimOverallInfoDocument,
    baseOptions,
  );
}
export type PimOverallInfoQueryHookResult = ReturnType<typeof usePimOverallInfoQuery>;
export type PimOverallInfoLazyQueryHookResult = ReturnType<typeof usePimOverallInfoLazyQuery>;
export type PimOverallInfoQueryResult = ApolloReactCommon.QueryResult<
  PimOverallInfoQuery,
  PimOverallInfoQueryVariables
>;
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
