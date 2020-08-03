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
  Dictionary: any;
  UuidOrEnum: any;
  Date: string;
  ServiceConfigurationInput: any;
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
  addAllocationCriteria: AddAllocationCriteriaResult;
  addBogSpace: PimWithNewBogSpace;
  addCadastre?: Maybe<PimWithNewCadastre>;
  addCadastreMaps?: Maybe<Pim>;
  addCost: CostResult;
  addFiles: Array<File>;
  addFloorToPim: PimWithNewFloor;
  addIdentificationNumberNcp: NcpWithNewIdentificationNumber;
  addIdentificationNumberObjectType: ObjectTypeWithNewIdentificationNumber;
  addIdentificationNumberPim: PimWithNewIdentificationNumber;
  addInspection: AddInspectionResult;
  addLabel: Label;
  addMediaLink?: Maybe<PimWithNewMediaLink>;
  addNcpCost: NcpPricesResult;
  addNcpIdentificationNumber: NcpCharacteristics;
  addNcpLabel: Label;
  addNcpMediaLink?: Maybe<NcpMedia>;
  addNcpPictures?: Maybe<NcpMedia>;
  addNcpService: NcpWithNewService;
  addNcpTag?: Maybe<NcpMedia>;
  addNcpTextChapter?: Maybe<NcpMedia>;
  addNcpUsps?: Maybe<NcpMedia>;
  addObjectTypeCost: ObjectTypePricesResult;
  addObjectTypeLabel: Label;
  addObjectTypeMediaLink?: Maybe<ObjectTypeMedia>;
  addObjectTypePictures?: Maybe<ObjectTypeMedia>;
  addObjectTypeService: ObjectTypeWithNewService;
  addObjectTypeTag?: Maybe<ObjectTypeMedia>;
  addObjectTypeTextChapter?: Maybe<ObjectTypeMedia>;
  addObjectTypeUsps?: Maybe<ObjectTypeMedia>;
  addOutsideFeature: PimWithNewOutside;
  addPictures?: Maybe<PimWithNewPictures>;
  addPimMeter?: Maybe<Pim>;
  addPimReading?: Maybe<Pim>;
  addPimService?: Maybe<PimWithNewService>;
  addProjectPhase: ProjectPhase;
  addSpaceToFloor: PimWithUpdatedSpace;
  addTag?: Maybe<PimWithNewTag>;
  addTextChapter?: Maybe<PimWithNewTextChapter>;
  addUsp?: Maybe<PimWithNewUsp>;
  addViewingMoment: AddViewingMomentResult;
  createNcp: NcpGeneral;
  createObjectType: ObjectTypeGeneral;
  createPim?: Maybe<Pim>;
  deleteUser?: Maybe<Scalars['String']>;
  forgotPassword?: Maybe<ForgotPasswordResponse>;
  initSendFile: File;
  linkNcpToProjectPhase: ProjectPhase;
  login?: Maybe<LoginResponse>;
  removeAllocationCriteria: Pim;
  removeFiles: Array<Maybe<File>>;
  removeInspection: Pim;
  removeLabel: Scalars['Boolean'];
  removeNcpLabel: Scalars['Boolean'];
  removeObjectTypeLabel: Scalars['Boolean'];
  removePim?: Maybe<Scalars['String']>;
  removeProjectPhase?: Maybe<Scalars['Boolean']>;
  removeViewingMoment: Pim;
  resetPassword?: Maybe<ResetPasswordResponse>;
  setLinkedProperties: Pim;
  setNcpCharacteristics: NcpCharacteristics;
  setNcpLinkedPims: NcpLinkedPims;
  setObjectTypeCharacteristicsSections: ObjectTypeCharacteristics;
  setObjectTypeLinkedPims: ObjectTypeLinkedPims;
  toggleNcpPricing: NcpPricesResult;
  toggleObjectTypePricing: ObjectTypePricesResult;
  togglePricing: Pim;
  updateAllocationCriteria: Pim;
  updateBogSpace: Pim;
  updateCadastre?: Maybe<Pim>;
  updateCadastreMap?: Maybe<Pim>;
  updateCost: CostResult;
  updateDescription?: Maybe<Scalars['String']>;
  updateFloor: Pim;
  updateIdentificationNumberNcp: NcpCharacteristics;
  updateIdentificationNumberObjectType: ObjectTypeCharacteristics;
  updateIdentificationNumberPim: Pim;
  updateInsideGeneral?: Maybe<Pim>;
  updateInspection: Pim;
  updateInvestment: Pim;
  updateLinkedPropertiesListDescription?: Maybe<ObjectTypeGeneral>;
  updateMediaLink?: Maybe<Pim>;
  updateNcp: NcpGeneral;
  updateNcpCharacteristics: NcpCharacteristics;
  updateNcpCost: NcpPricesResult;
  updateNcpCostsDetails: NcpPricesResult;
  updateNcpInterests: NcpPricesResult;
  updateNcpLinkedPropertiesListDescription?: Maybe<NcpGeneral>;
  updateNcpMediaDescription?: Maybe<NcpMedia>;
  updateNcpMediaLink?: Maybe<NcpMedia>;
  updateNcpPicture?: Maybe<NcpMedia>;
  updateNcpPricing: NcpPricesResult;
  updateNcpService: NcpServices;
  updateNcpServiceDescription: NcpServices;
  updateNcpTag?: Maybe<NcpMedia>;
  updateNcpTextChapter?: Maybe<NcpMedia>;
  updateNcpUsps?: Maybe<NcpMedia>;
  updateObjectTypeCharacteristics: ObjectTypeCharacteristics;
  updateObjectTypeCost: ObjectTypePricesResult;
  updateObjectTypeCostsDetails: ObjectTypePricesResult;
  updateObjectTypeMediaDescription?: Maybe<ObjectTypeMedia>;
  updateObjectTypeMediaLink?: Maybe<ObjectTypeMedia>;
  updateObjectTypePicture?: Maybe<ObjectTypeMedia>;
  updateObjectTypePricing: ObjectTypePricesResult;
  updateObjectTypeService: ObjectTypeServices;
  updateObjectTypeServiceDescription: ObjectTypeServices;
  updateObjectTypeTag?: Maybe<ObjectTypeMedia>;
  updateObjectTypeTextChapter?: Maybe<ObjectTypeMedia>;
  updateObjectTypeUsps?: Maybe<ObjectTypeMedia>;
  updateObjectTypesListDescription?: Maybe<NcpGeneral>;
  updateOutsideFeature: Pim;
  updatePicture?: Maybe<Pim>;
  updatePimGeneralInfo: Pim;
  updatePimLocation: Pim;
  updatePimMeter?: Maybe<Pim>;
  updatePimOutsideInfo: Pim;
  updatePimReading?: Maybe<Pim>;
  updatePimService?: Maybe<Pim>;
  updatePricing: Pim;
  updateProjectPhase: ProjectPhase;
  updateSalesSettings: Pim;
  updateSpace: Pim;
  updateSpecification: Pim;
  updateSpecificationAdvanced: Pim;
  updateTag?: Maybe<Pim>;
  updateTextChapter?: Maybe<Pim>;
  updateUsp?: Maybe<Pim>;
  uploadFile?: Maybe<UploadFileResponse>;
};

export type MutationAddAllocationCriteriaArgs = {
  input: AddAllocationCriteriaInput;
};

export type MutationAddBogSpaceArgs = {
  input: AddBogSpaceInput;
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

export type MutationAddIdentificationNumberNcpArgs = {
  input: AddIdentificationNumberInput;
};

export type MutationAddIdentificationNumberObjectTypeArgs = {
  input: AddIdentificationNumberInput;
};

export type MutationAddIdentificationNumberPimArgs = {
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

export type MutationAddNcpCostArgs = {
  input: AddCommonCostInput;
};

export type MutationAddNcpIdentificationNumberArgs = {
  input: AddIdentificationNumberInput;
};

export type MutationAddNcpLabelArgs = {
  input: LabelInput;
};

export type MutationAddNcpMediaLinkArgs = {
  input: CommonAddMediaLinkInput;
};

export type MutationAddNcpPicturesArgs = {
  input: CommonAddPicturesInput;
};

export type MutationAddNcpServiceArgs = {
  input: AddServiceInput;
};

export type MutationAddNcpTagArgs = {
  input: CommonAddTagInput;
};

export type MutationAddNcpTextChapterArgs = {
  input: CommonAddTextChapterInput;
};

export type MutationAddNcpUspsArgs = {
  input: CommonAddUspsInput;
};

export type MutationAddObjectTypeCostArgs = {
  input: AddCommonCostInput;
};

export type MutationAddObjectTypeLabelArgs = {
  input: LabelInput;
};

export type MutationAddObjectTypeMediaLinkArgs = {
  input: CommonAddMediaLinkInput;
};

export type MutationAddObjectTypePicturesArgs = {
  input: CommonAddPicturesInput;
};

export type MutationAddObjectTypeServiceArgs = {
  input: AddServiceInput;
};

export type MutationAddObjectTypeTagArgs = {
  input: CommonAddTagInput;
};

export type MutationAddObjectTypeTextChapterArgs = {
  input: CommonAddTextChapterInput;
};

export type MutationAddObjectTypeUspsArgs = {
  input: CommonAddUspsInput;
};

export type MutationAddOutsideFeatureArgs = {
  input: AddOutsideFeatureInput;
};

export type MutationAddPicturesArgs = {
  input: AddPicturesInput;
};

export type MutationAddPimMeterArgs = {
  input: AddMeterInput;
};

export type MutationAddPimReadingArgs = {
  input: AddReadingInput;
};

export type MutationAddPimServiceArgs = {
  input: AddServiceInput;
};

export type MutationAddProjectPhaseArgs = {
  input: CreateProjectPhaseInput;
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

export type MutationCreateNcpArgs = {
  input: CreateNcpInput;
};

export type MutationCreateObjectTypeArgs = {
  input: CreateObjectTypeInput;
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

export type MutationLinkNcpToProjectPhaseArgs = {
  input: LinkNcpToProjectPhaseInput;
};

export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};

export type MutationRemoveAllocationCriteriaArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveFilesArgs = {
  input: RemoveFilesInput;
};

export type MutationRemoveInspectionArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveLabelArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveNcpLabelArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveObjectTypeLabelArgs = {
  id: Scalars['ID'];
};

export type MutationRemovePimArgs = {
  id: Scalars['String'];
};

export type MutationRemoveProjectPhaseArgs = {
  id: Scalars['ID'];
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

export type MutationSetNcpCharacteristicsArgs = {
  input: SetCharacteristicsSectionsInput;
};

export type MutationSetNcpLinkedPimsArgs = {
  input: SetLinkedPimsInput;
};

export type MutationSetObjectTypeCharacteristicsSectionsArgs = {
  input: SetCharacteristicsSectionsInput;
};

export type MutationSetObjectTypeLinkedPimsArgs = {
  input: SetLinkedPimsInput;
};

export type MutationToggleNcpPricingArgs = {
  input: ToggleCommonPricingInput;
};

export type MutationToggleObjectTypePricingArgs = {
  input: ToggleCommonPricingInput;
};

export type MutationTogglePricingArgs = {
  input: TogglePricingInput;
};

export type MutationUpdateAllocationCriteriaArgs = {
  input: AllocationCriteriaInput;
};

export type MutationUpdateBogSpaceArgs = {
  input: UpdateBogSpaceInput;
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

export type MutationUpdateIdentificationNumberNcpArgs = {
  input: UpdateIdentificationNumberInput;
};

export type MutationUpdateIdentificationNumberObjectTypeArgs = {
  input: UpdateIdentificationNumberInput;
};

export type MutationUpdateIdentificationNumberPimArgs = {
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

export type MutationUpdateLinkedPropertiesListDescriptionArgs = {
  input: UpdateLinkedPropertiesListDescription;
};

export type MutationUpdateMediaLinkArgs = {
  input: UpdateMediaLinkInput;
};

export type MutationUpdateNcpArgs = {
  input: UpdateNcpInput;
};

export type MutationUpdateNcpCharacteristicsArgs = {
  input: NcpCharacteristicsInput;
};

export type MutationUpdateNcpCostArgs = {
  input: UpdateCommonCostInput;
};

export type MutationUpdateNcpCostsDetailsArgs = {
  input: UpdateCommonCostsDetailsInput;
};

export type MutationUpdateNcpInterestsArgs = {
  input: InterestsInput;
};

export type MutationUpdateNcpLinkedPropertiesListDescriptionArgs = {
  input: UpdateLinkedPropertiesListDescription;
};

export type MutationUpdateNcpMediaDescriptionArgs = {
  input: CommonUpdateMediaDescriptionInput;
};

export type MutationUpdateNcpMediaLinkArgs = {
  input: CommonUpdateMediaLinkInput;
};

export type MutationUpdateNcpPictureArgs = {
  input: CommonUpdatePictureInput;
};

export type MutationUpdateNcpPricingArgs = {
  input: UpdateCommonPricingInput;
};

export type MutationUpdateNcpServiceArgs = {
  input: UpdateServiceInput;
};

export type MutationUpdateNcpServiceDescriptionArgs = {
  input: ServiceDescriptionInput;
};

export type MutationUpdateNcpTagArgs = {
  input: CommonUpdateTagInput;
};

export type MutationUpdateNcpTextChapterArgs = {
  input: CommonUpdateTextChapterInput;
};

export type MutationUpdateNcpUspsArgs = {
  input: CommonUpdateUspsInput;
};

export type MutationUpdateObjectTypeCharacteristicsArgs = {
  input: ObjectTypeCharacteristicsInput;
};

export type MutationUpdateObjectTypeCostArgs = {
  input: UpdateCommonCostInput;
};

export type MutationUpdateObjectTypeCostsDetailsArgs = {
  input: UpdateCommonCostsDetailsInput;
};

export type MutationUpdateObjectTypeMediaDescriptionArgs = {
  input: CommonUpdateMediaDescriptionInput;
};

export type MutationUpdateObjectTypeMediaLinkArgs = {
  input: CommonUpdateMediaLinkInput;
};

export type MutationUpdateObjectTypePictureArgs = {
  input: CommonUpdatePictureInput;
};

export type MutationUpdateObjectTypePricingArgs = {
  input: UpdateCommonPricingInput;
};

export type MutationUpdateObjectTypeServiceArgs = {
  input: UpdateServiceInput;
};

export type MutationUpdateObjectTypeServiceDescriptionArgs = {
  input: ServiceDescriptionInput;
};

export type MutationUpdateObjectTypeTagArgs = {
  input: CommonUpdateTagInput;
};

export type MutationUpdateObjectTypeTextChapterArgs = {
  input: CommonUpdateTextChapterInput;
};

export type MutationUpdateObjectTypeUspsArgs = {
  input: CommonUpdateUspsInput;
};

export type MutationUpdateObjectTypesListDescriptionArgs = {
  input: UpdateObjectTypesListDescription;
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

export type MutationUpdatePimMeterArgs = {
  input: UpdateMeterInput;
};

export type MutationUpdatePimOutsideInfoArgs = {
  input: PimOutsideInput;
};

export type MutationUpdatePimReadingArgs = {
  input: UpdateReadingInput;
};

export type MutationUpdatePimServiceArgs = {
  input: UpdateServiceInput;
};

export type MutationUpdatePricingArgs = {
  input: UpdatePricingInput;
};

export type MutationUpdateProjectPhaseArgs = {
  input: UpdateProjectPhaseInput;
};

export type MutationUpdateSalesSettingsArgs = {
  input: SalesSettingsInput;
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

export enum CharacteristicsSections {
  Measurements = 'Measurements',
  ClientInformation = 'ClientInformation',
  InvoiceDetails = 'InvoiceDetails',
  IdentificationNumber = 'IdentificationNumber',
  Energy = 'Energy',
  Phase = 'Phase',
  AccountManagers = 'AccountManagers',
  ProjectMarketing = 'ProjectMarketing',
  AttentionField = 'AttentionField',
  ObjectTypes = 'ObjectTypes',
}

export type HasCharacteristicsSections = {
  characteristicsSections?: Maybe<Array<CharacteristicsSections>>;
};

export type SetCharacteristicsSectionsInput = {
  id: Scalars['ID'];
  sections?: Maybe<Array<CharacteristicsSections>>;
};

export type ProjectMarketingInput = {
  emailAddress?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  firstColor?: Maybe<Scalars['String']>;
  secondColor?: Maybe<Scalars['String']>;
  mainLogoId?: Maybe<Scalars['String']>;
};

export type ProjectMarketing = {
  __typename?: 'ProjectMarketing';
  logos?: Maybe<Array<File>>;
  mainLogoId?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  firstColor?: Maybe<Scalars['String']>;
  secondColor?: Maybe<Scalars['String']>;
};

export type MeasurementsInput = {
  volumeFrom?: Maybe<Scalars['AbsoluteFloat']>;
  volumeTo?: Maybe<Scalars['AbsoluteFloat']>;
  livingSpaceFrom?: Maybe<Scalars['AbsoluteFloat']>;
  livingSpaceTo?: Maybe<Scalars['AbsoluteFloat']>;
  plotAreaFrom?: Maybe<Scalars['AbsoluteFloat']>;
  plotAreaTo?: Maybe<Scalars['AbsoluteFloat']>;
  calculateAutomatically?: Maybe<Scalars['Boolean']>;
};

export type Measurements = {
  __typename?: 'Measurements';
  volumeFrom?: Maybe<Scalars['AbsoluteFloat']>;
  volumeTo?: Maybe<Scalars['AbsoluteFloat']>;
  livingSpaceFrom?: Maybe<Scalars['AbsoluteFloat']>;
  livingSpaceTo?: Maybe<Scalars['AbsoluteFloat']>;
  plotAreaFrom?: Maybe<Scalars['AbsoluteFloat']>;
  plotAreaTo?: Maybe<Scalars['AbsoluteFloat']>;
  calculateAutomatically?: Maybe<Scalars['Boolean']>;
};

export type InvoiceDetailsInput = {
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  additionalNumber?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  projectInvoiceNumber?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type InvoiceDetails = {
  __typename?: 'InvoiceDetails';
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  additionalNumber?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  projectInvoiceNumber?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export enum CommonCostType {
  Kitchen = 'Kitchen',
  Tiles = 'Tiles',
  Bathroom = 'Bathroom',
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

export type CommonCost = {
  __typename?: 'CommonCost';
  id: Scalars['ID'];
  serviceCostsFrom?: Maybe<Scalars['AbsoluteFloat']>;
  serviceCostsTill?: Maybe<Scalars['AbsoluteFloat']>;
  paymentsFrequency?: Maybe<CostPaymentFrequency>;
  vatTaxedServiceCostsFrom?: Maybe<Scalars['AbsoluteFloat']>;
  vatTaxedServiceCostsTill?: Maybe<Scalars['AbsoluteFloat']>;
  vatPercentage?: Maybe<Scalars['CostVat']>;
  notes?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export type CommonCosts = LastUpdated & {
  __typename?: 'CommonCosts';
  costs?: Maybe<Array<CommonCost>>;
  description?: Maybe<Scalars['String']>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type AddCommonCostInput = {
  id: Scalars['ID'];
  type: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UpdateCommonCostInput = {
  id: Scalars['ID'];
  serviceCostsFrom?: Maybe<Scalars['AbsoluteFloat']>;
  serviceCostsTill?: Maybe<Scalars['AbsoluteFloat']>;
  paymentsFrequency?: Maybe<CostPaymentFrequency>;
  vatTaxedServiceCostsFrom?: Maybe<Scalars['AbsoluteFloat']>;
  vatTaxedServiceCostsTill?: Maybe<Scalars['AbsoluteFloat']>;
  vatPercentage?: Maybe<Scalars['CostVat']>;
  notes?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateCommonCostsDetailsInput = {
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
};

export type CostsDetails = LastUpdated & {
  __typename?: 'CostsDetails';
  description?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
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

export enum FilePermission {
  Public = 'public',
  Private = 'private',
}

export enum EntityWithFiles {
  Pim = 'Pim',
  Ncp = 'Ncp',
  ObjectType = 'ObjectType',
  Space = 'Space',
  BogSpace = 'BogSpace',
  OutsideFeature = 'OutsideFeature',
  OutsideGeneral = 'OutsideGeneral',
  OutsidePropertyRelated = 'OutsidePropertyRelated',
  RoofInformation = 'RoofInformation',
  CadastreMap = 'CadastreMap',
  MediaPicture = 'MediaPicture',
  NcpMediaPicture = 'NcpMediaPicture',
  ObjectTypeMediaPicture = 'ObjectTypeMediaPicture',
  NcpProjectMarketing = 'NcpProjectMarketing',
  ObjectTypeProjectMarketing = 'ObjectTypeProjectMarketing',
  ProjectPhase = 'ProjectPhase',
}

export enum EntityWithMultipleFiles {
  Pim = 'Pim',
  Ncp = 'Ncp',
  ObjectType = 'ObjectType',
  Space = 'Space',
  BogSpace = 'BogSpace',
  OutsideFeature = 'OutsideFeature',
  OutsideGeneral = 'OutsideGeneral',
  OutsidePropertyRelated = 'OutsidePropertyRelated',
  RoofInformation = 'RoofInformation',
  NcpProjectMarketing = 'NcpProjectMarketing',
  ObjectTypeProjectMarketing = 'ObjectTypeProjectMarketing',
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

export type RemoveFilesInput = {
  fileIDs: Array<Scalars['ID']>;
  entity: EntityWithMultipleFiles;
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
  dateCreated?: Maybe<Scalars['Date']>;
};

export type AddIdentificationNumberInput = {
  parentId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateIdentificationNumberInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
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
  Cost = 'Cost',
}

export type Label = {
  __typename?: 'Label';
  id: Scalars['ID'];
  icon?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  property: LabelProperty;
  dateCreated?: Maybe<Scalars['Date']>;
};

export type LabelInput = {
  parentId: Scalars['ID'];
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
  getMyTeamMembers: ProfileSearchResult;
  getNcp: NcpGeneral;
  getNcpCharacteristics: NcpCharacteristics;
  getNcpLabels?: Maybe<Array<Label>>;
  getNcpLinkedPims: NcpLinkedPims;
  getNcpMedia: NcpMedia;
  getNcpPrices: NcpPricesResult;
  getNcpServices: NcpServices;
  getNcpWithSameAddress: NcpSearchResult;
  getObjectTypeCharacteristics: ObjectTypeCharacteristics;
  getObjectTypeGeneral: ObjectTypeGeneral;
  getObjectTypeLabels?: Maybe<Array<Label>>;
  getObjectTypeLinkedPims: ObjectTypeLinkedPims;
  getObjectTypeMedia: ObjectTypeMedia;
  getObjectTypePrices: ObjectTypePricesResult;
  getObjectTypeServices: ObjectTypeServices;
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
  getPimsGeneralWithSameAddress: GeneralPimSearchResult;
  getPricing: PimPrices;
  getProfile?: Maybe<Profile>;
  getProjectPhases: ProjectPhaseSearchResult;
  getPropertyTypes: Array<Scalars['String']>;
  listNcps: NcpListSearchResult;
  listObjectTypes: ObjectTypeListSearchResult;
  listPims: PimListSearchResult;
  me?: Maybe<Profile>;
};

export type QueryGetChangesHistoryArgs = {
  filters?: Maybe<ChangesHistoryFilters>;
};

export type QueryGetLabelsArgs = {
  parentId: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty>>;
};

export type QueryGetMyTeamMembersArgs = {
  pagination?: Maybe<Pagination>;
  search?: Maybe<Scalars['String']>;
};

export type QueryGetNcpArgs = {
  id: Scalars['ID'];
};

export type QueryGetNcpCharacteristicsArgs = {
  id: Scalars['ID'];
};

export type QueryGetNcpLabelsArgs = {
  parentId: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty>>;
};

export type QueryGetNcpLinkedPimsArgs = {
  id: Scalars['ID'];
};

export type QueryGetNcpMediaArgs = {
  id: Scalars['ID'];
};

export type QueryGetNcpPricesArgs = {
  id: Scalars['ID'];
};

export type QueryGetNcpServicesArgs = {
  id: Scalars['ID'];
};

export type QueryGetNcpWithSameAddressArgs = {
  input: NcpWithSameAddressInput;
};

export type QueryGetObjectTypeCharacteristicsArgs = {
  id: Scalars['ID'];
};

export type QueryGetObjectTypeGeneralArgs = {
  id: Scalars['ID'];
};

export type QueryGetObjectTypeLabelsArgs = {
  parentId: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty>>;
};

export type QueryGetObjectTypeLinkedPimsArgs = {
  id: Scalars['ID'];
};

export type QueryGetObjectTypeMediaArgs = {
  id: Scalars['ID'];
};

export type QueryGetObjectTypePricesArgs = {
  id: Scalars['ID'];
};

export type QueryGetObjectTypeServicesArgs = {
  id: Scalars['ID'];
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

export type QueryGetPimsGeneralWithSameAddressArgs = {
  input: PimWithSameAddressInput;
};

export type QueryGetPricingArgs = {
  id: Scalars['ID'];
};

export type QueryGetProfileArgs = {
  id: Scalars['ID'];
};

export type QueryGetProjectPhasesArgs = {
  filters?: Maybe<ProjectPhaseFilters>;
  pagination: Pagination;
};

export type QueryListNcpsArgs = {
  filters?: Maybe<ListNcpsFilters>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Array<Sort>>;
};

export type QueryListObjectTypesArgs = {
  filters: ListObjectTypesFilters;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Array<Sort>>;
};

export type QueryListPimsArgs = {
  filters?: Maybe<ListPimsFilters>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Array<Sort>>;
};

export type LinkedPimFilters = {
  archived?: Maybe<Scalars['Boolean']>;
};

export type EntityLinkedWithPims = {
  id: Scalars['ID'];
  linkedProperties: PimListSearchResult;
  linkedPropertiesIds?: Maybe<Array<Scalars['ID']>>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type EntityLinkedWithPimsLinkedPropertiesArgs = {
  filters?: Maybe<LinkedPimFilters>;
  sort?: Maybe<Array<Sort>>;
  pagination: Pagination;
};

export type SetLinkedPimsInput = {
  id: Scalars['ID'];
  linkedProperties?: Maybe<Array<Scalars['ID']>>;
};

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

export type LinkedPimSearchResult = {
  __typename?: 'LinkedPimSearchResult';
  metadata: SearchMetadata;
  items?: Maybe<Array<LinkedPim>>;
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
  linkedObjectTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PimListSearchResult = {
  __typename?: 'PimListSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<ListPim>>;
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

export type CommonMedia = LastUpdated & {
  __typename?: 'CommonMedia';
  id: Scalars['String'];
  pictures?: Maybe<Array<Picture>>;
  mediaLinks?: Maybe<Array<MediaLink>>;
  textChapters?: Maybe<Array<TextChapter>>;
  usps?: Maybe<Array<Usp>>;
  tags?: Maybe<Array<Tag>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
  mediaDescription?: Maybe<Scalars['String']>;
};

export type CommonMediaPicturesArgs = {
  sort?: Maybe<Sort>;
};

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
  dateCreated?: Maybe<Scalars['Date']>;
};

export type Usp = {
  __typename?: 'Usp';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export type MediaLink = {
  __typename?: 'MediaLink';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export type CommonNewPictureInput = {
  fileID: Scalars['String'];
};

export type CommonAddPicturesInput = {
  parentId: Scalars['String'];
  pictures: Array<NewPictureInput>;
};

export type CommonAddTextChapterInput = {
  parentId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type CommonUpdateTextChapterInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type CommonAddUspsInput = {
  parentId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CommonUpdateUspsInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommonAddMediaLinkInput = {
  parentId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommonUpdateMediaLinkInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommonAddTagInput = {
  parentId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommonUpdateTagInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommonUpdatePictureInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['String']>;
};

export type CommonUpdateMediaDescriptionInput = {
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type NcpCharacteristicsInput = {
  id: Scalars['ID'];
  projectMarketing?: Maybe<ProjectMarketingInput>;
  measurements?: Maybe<MeasurementsInput>;
  energy?: Maybe<EnergyInput>;
  accountManagersIds?: Maybe<Array<Scalars['ID']>>;
  attentionNote?: Maybe<Scalars['String']>;
  invoiceDetails?: Maybe<InvoiceDetailsInput>;
  characteristicsDescription?: Maybe<Scalars['String']>;
};

export type NcpCharacteristics = LastUpdated &
  HasCharacteristicsSections & {
    __typename?: 'NcpCharacteristics';
    id: Scalars['ID'];
    characteristicsSections?: Maybe<Array<CharacteristicsSections>>;
    projectMarketing?: Maybe<ProjectMarketing>;
    measurements?: Maybe<Measurements>;
    energy?: Maybe<Energy>;
    accountManagers?: Maybe<Array<Profile>>;
    accountManagersIds?: Maybe<Array<Scalars['ID']>>;
    identificationNumbers?: Maybe<Array<IdentificationNumber>>;
    attentionNote?: Maybe<Scalars['String']>;
    invoiceDetails?: Maybe<InvoiceDetails>;
    lastEditedBy?: Maybe<Profile>;
    dateUpdated?: Maybe<Scalars['Date']>;
    characteristicsDescription?: Maybe<Scalars['String']>;
  };

export type NcpWithNewIdentificationNumber = {
  __typename?: 'NcpWithNewIdentificationNumber';
  ncp: NcpGeneral;
  newIdentificationNumber: IdentificationNumber;
};

export enum NcpType {
  Houses = 'Houses',
  Apartments = 'Apartments',
  BuildingPlots = 'BuildingPlots',
}

export enum ProgressStatus {
  Concept = 'Concept',
  InPreparation = 'InPreparation',
  InPresale = 'InPresale',
  InProgress = 'InProgress',
  Delivered = 'Delivered',
}

export enum ProjectRisk {
  Low = 'Low',
  Middle = 'Middle',
  High = 'High',
}

export type CreateNcpInput = {
  type: NcpType;
  name: Scalars['String'];
  additionalName?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  houseNumber: Scalars['String'];
  zipCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  additionalHouseNumber?: Maybe<Scalars['String']>;
};

export type UpdateNcpInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  additionalName?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  houseNumber: Scalars['String'];
  additionalHouseNumber?: Maybe<Scalars['String']>;
  zipCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  automaticallyCalculateQuantity?: Maybe<Scalars['Boolean']>;
  objectTypesCount?: Maybe<Scalars['Int']>;
  properties?: Maybe<Scalars['Int']>;
  progressStatus?: Maybe<ProgressStatus>;
  startConstruction?: Maybe<Scalars['Date']>;
  noteStartConstruction?: Maybe<Scalars['String']>;
  startSale?: Maybe<Scalars['Date']>;
  noteStartSale?: Maybe<Scalars['String']>;
  startDelivery?: Maybe<Scalars['Date']>;
  noteStartDelivery?: Maybe<Scalars['String']>;
  startConstructionAfterPresalePercentage?: Maybe<Scalars['Int']>;
  projectRisk?: Maybe<ProjectRisk>;
  notes?: Maybe<Scalars['String']>;
};

export type NcpGeneral = LastUpdated & {
  __typename?: 'NcpGeneral';
  id: Scalars['ID'];
  type: NcpType;
  dateCreated?: Maybe<Scalars['Date']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
  name: Scalars['String'];
  additionalName?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  houseNumber: Scalars['String'];
  additionalHouseNumber?: Maybe<Scalars['String']>;
  zipCode: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  archived: Scalars['Boolean'];
  automaticallyCalculateQuantity?: Maybe<Scalars['Boolean']>;
  properties?: Maybe<Scalars['Int']>;
  objectTypesCount?: Maybe<Scalars['Int']>;
  progressStatus?: Maybe<ProgressStatus>;
  startConstruction?: Maybe<Scalars['Date']>;
  noteStartConstruction?: Maybe<Scalars['String']>;
  startSale?: Maybe<Scalars['Date']>;
  noteStartSale?: Maybe<Scalars['String']>;
  startDelivery?: Maybe<Scalars['Date']>;
  noteStartDelivery?: Maybe<Scalars['String']>;
  startConstructionAfterPresalePercentage?: Maybe<Scalars['Int']>;
  projectRisk?: Maybe<ProjectRisk>;
  notes?: Maybe<Scalars['String']>;
  objectTypesListDescription?: Maybe<Scalars['String']>;
  objectTypesListLastUpdatedBy?: Maybe<Profile>;
  objectTypesListLastUpdatedOn?: Maybe<Scalars['Date']>;
  linkedPropertiesListDescription?: Maybe<Scalars['String']>;
  linkedPropertiesListLastUpdatedBy?: Maybe<Profile>;
  linkedPropertiesListLastUpdatedOn?: Maybe<Scalars['Date']>;
};

export type NcpSearchResult = {
  __typename?: 'NcpSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<NcpGeneral>>;
};

export type NcpWithSameAddressInput = {
  ncpId?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type NcpLinkedPims = EntityLinkedWithPims & {
  __typename?: 'NcpLinkedPims';
  id: Scalars['ID'];
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
  linkedProperties: PimListSearchResult;
  linkedPropertiesIds?: Maybe<Array<Scalars['ID']>>;
  description?: Maybe<Scalars['String']>;
};

export type NcpLinkedPimsLinkedPropertiesArgs = {
  filters?: Maybe<LinkedPimFilters>;
  sort?: Maybe<Array<Sort>>;
  pagination: Pagination;
};

export type ListNcpsFilters = {
  archived?: Maybe<Scalars['Boolean']>;
};

export type ListNcp = {
  __typename?: 'ListNcp';
  id: Scalars['ID'];
  dateCreated: Scalars['Date'];
  dateUpdated?: Maybe<Scalars['Date']>;
  archived: Scalars['Boolean'];
  areaRangeFrom?: Maybe<Scalars['AbsoluteFloat']>;
  areaRangeTo?: Maybe<Scalars['AbsoluteFloat']>;
  numberOfRoomsFrom?: Maybe<Scalars['Int']>;
  numberOfRoomsTo?: Maybe<Scalars['Int']>;
  logoPicture?: Maybe<File>;
  mainPicture?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  salePriceFrom?: Maybe<Scalars['AbsoluteFloat']>;
  salePriceTo?: Maybe<Scalars['AbsoluteFloat']>;
  rentPriceFrom?: Maybe<Scalars['AbsoluteFloat']>;
  rentPriceTo?: Maybe<Scalars['AbsoluteFloat']>;
  saleLabel?: Maybe<Scalars['String']>;
  rentLabel?: Maybe<Scalars['String']>;
  partOfPhase?: Maybe<Scalars['Int']>;
  soldNumber?: Maybe<Scalars['Int']>;
  rentNumber?: Maybe<Scalars['Int']>;
  completeness: Scalars['Float'];
  available?: Maybe<Scalars['Int']>;
  underOption?: Maybe<Scalars['Int']>;
  soldOrRent?: Maybe<Scalars['Int']>;
  matches?: Maybe<Scalars['Int']>;
  interests?: Maybe<Scalars['Int']>;
  candidates?: Maybe<Scalars['Int']>;
  optants?: Maybe<Scalars['Int']>;
  properties?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  attentionNote?: Maybe<Scalars['String']>;
  objectTypesCount?: Maybe<Scalars['Int']>;
};

export type UpdateObjectTypesListDescription = {
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type NcpListSearchResult = {
  __typename?: 'NcpListSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<ListNcp>>;
};

export type NcpMedia = LastUpdated & {
  __typename?: 'NcpMedia';
  id: Scalars['String'];
  pictures?: Maybe<Array<Picture>>;
  mediaLinks?: Maybe<Array<MediaLink>>;
  textChapters?: Maybe<Array<TextChapter>>;
  usps?: Maybe<Array<Usp>>;
  tags?: Maybe<Array<Tag>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
  mediaDescription?: Maybe<Scalars['String']>;
};

export type NcpMediaPicturesArgs = {
  sort?: Maybe<Sort>;
};

export type NcpPrices = {
  __typename?: 'NcpPrices';
  id: Scalars['ID'];
  pricing?: Maybe<CommonPricing>;
  costs?: Maybe<Array<CommonCost>>;
  costsDetails?: Maybe<CostsDetails>;
  interests?: Maybe<Interests>;
};

export type NcpPricesResult = {
  __typename?: 'NcpPricesResult';
  id: Scalars['ID'];
  pricing?: Maybe<CommonPricing>;
  costs?: Maybe<CommonCosts>;
  interests?: Maybe<Interests>;
};

export type InterestsInput = {
  id: Scalars['ID'];
  groundInterest?: Maybe<Scalars['AbsoluteFloat']>;
  buildingInterest?: Maybe<Scalars['AbsoluteFloat']>;
  rentedagen?: Maybe<Scalars['AbsoluteFloat']>;
  suspensiveCondition?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Interests = LastUpdated & {
  __typename?: 'Interests';
  groundInterest?: Maybe<Scalars['AbsoluteFloat']>;
  buildingInterest?: Maybe<Scalars['AbsoluteFloat']>;
  rentedagen?: Maybe<Scalars['AbsoluteFloat']>;
  suspensiveCondition?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export type NcpServices = LastUpdated &
  Services & {
    __typename?: 'NcpServices';
    id: Scalars['ID'];
    hotWaterSupplies?: Maybe<Array<Service>>;
    heatingSources?: Maybe<Array<Service>>;
    additionalServices?: Maybe<Array<Service>>;
    dateUpdated?: Maybe<Scalars['Date']>;
    lastEditedBy?: Maybe<Profile>;
    servicesDescription?: Maybe<Scalars['String']>;
  };

export type NcpWithNewService = {
  __typename?: 'NcpWithNewService';
  ncp: NcpServices;
  newService: Service;
};

export enum TypeOfObjectType {
  House = 'House',
  Apartament = 'Apartament',
  BuildingPlot = 'BuildingPlot',
}

export type ObjectTypeCharacteristicsInput = {
  id: Scalars['ID'];
  projectMarketing?: Maybe<ProjectMarketingInput>;
  measurements?: Maybe<MeasurementsInput>;
  energy?: Maybe<EnergyInput>;
  accountManagersIds?: Maybe<Array<Scalars['ID']>>;
  attentionNote?: Maybe<Scalars['String']>;
  characteristicsDescription?: Maybe<Scalars['String']>;
  type?: Maybe<TypeOfObjectType>;
  automaticallySetObjectTypes?: Maybe<Scalars['Boolean']>;
};

export type ObjectTypeCharacteristics = LastUpdated &
  HasCharacteristicsSections & {
    __typename?: 'ObjectTypeCharacteristics';
    id: Scalars['ID'];
    characteristicsSections?: Maybe<Array<CharacteristicsSections>>;
    projectMarketing?: Maybe<ProjectMarketing>;
    measurements?: Maybe<Measurements>;
    energy?: Maybe<Energy>;
    accountManagers?: Maybe<Array<Profile>>;
    accountManagersIds?: Maybe<Array<Scalars['ID']>>;
    identificationNumbers?: Maybe<Array<IdentificationNumber>>;
    attentionNote?: Maybe<Scalars['String']>;
    lastEditedBy?: Maybe<Profile>;
    dateUpdated?: Maybe<Scalars['Date']>;
    characteristicsDescription?: Maybe<Scalars['String']>;
    type?: Maybe<TypeOfObjectType>;
    automaticallySetObjectTypes?: Maybe<Scalars['Boolean']>;
  };

export type ObjectTypeWithNewIdentificationNumber = {
  __typename?: 'ObjectTypeWithNewIdentificationNumber';
  objectType: ObjectTypeCharacteristics;
  newIdentificationNumber: IdentificationNumber;
};

export type ObjectTypeGeneral = LastUpdated & {
  __typename?: 'ObjectTypeGeneral';
  id: Scalars['ID'];
  name: Scalars['String'];
  archived?: Maybe<Scalars['Boolean']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  dateCreated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
  ncpId: Scalars['ID'];
  linkedPropertiesListDescription?: Maybe<Scalars['String']>;
  linkedPropertiesListLastUpdatedBy?: Maybe<Profile>;
  linkedPropertiesListLastUpdatedOn?: Maybe<Scalars['Date']>;
};

export type CreateObjectTypeInput = {
  name: Scalars['String'];
  ncpId: Scalars['ID'];
};

export type ObjectTypeLinkedPims = EntityLinkedWithPims & {
  __typename?: 'ObjectTypeLinkedPims';
  id: Scalars['ID'];
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
  linkedProperties: PimListSearchResult;
  linkedPropertiesIds?: Maybe<Array<Scalars['ID']>>;
  description?: Maybe<Scalars['String']>;
};

export type ObjectTypeLinkedPimsLinkedPropertiesArgs = {
  filters?: Maybe<LinkedPimFilters>;
  sort?: Maybe<Array<Sort>>;
  pagination: Pagination;
};

export type UpdateLinkedPropertiesListDescription = {
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type ListObjectTypesFilters = {
  archived?: Maybe<Scalars['Boolean']>;
  ncpId: Scalars['ID'];
};

export type ListObjectTypes = {
  __typename?: 'ListObjectTypes';
  id: Scalars['ID'];
  ncpId: Scalars['ID'];
  dateCreated: Scalars['Date'];
  dateUpdated?: Maybe<Scalars['Date']>;
  archived?: Maybe<Scalars['Boolean']>;
  areaRangeFrom?: Maybe<Scalars['AbsoluteFloat']>;
  areaRangeTo?: Maybe<Scalars['AbsoluteFloat']>;
  numberOfRoomsFrom?: Maybe<Scalars['Int']>;
  numberOfRoomsTo?: Maybe<Scalars['Int']>;
  mainPicture?: Maybe<File>;
  name?: Maybe<Scalars['String']>;
  salePriceFrom?: Maybe<Scalars['AbsoluteFloat']>;
  salePriceTo?: Maybe<Scalars['AbsoluteFloat']>;
  rentPriceFrom?: Maybe<Scalars['AbsoluteFloat']>;
  rentPriceTo?: Maybe<Scalars['AbsoluteFloat']>;
  underOption?: Maybe<Scalars['Int']>;
  soldOrRent?: Maybe<Scalars['Int']>;
  saleLabel?: Maybe<Scalars['String']>;
  rentLabel?: Maybe<Scalars['String']>;
  partOfPhase?: Maybe<Scalars['Int']>;
  completeness: Scalars['Float'];
  matches?: Maybe<Scalars['Int']>;
  interests?: Maybe<Scalars['Int']>;
  propertiesConnected?: Maybe<Scalars['Int']>;
  propertiesAvailable?: Maybe<Scalars['Int']>;
  attentionNote?: Maybe<Scalars['String']>;
};

export type ObjectTypeListSearchResult = {
  __typename?: 'ObjectTypeListSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<ListObjectTypes>>;
};

export type ObjectTypeMedia = {
  __typename?: 'ObjectTypeMedia';
  id: Scalars['String'];
  pictures?: Maybe<Array<Picture>>;
  mediaLinks?: Maybe<Array<MediaLink>>;
  textChapters?: Maybe<Array<TextChapter>>;
  usps?: Maybe<Array<Usp>>;
  tags?: Maybe<Array<Tag>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
  mediaDescription?: Maybe<Scalars['String']>;
};

export type ObjectTypeMediaPicturesArgs = {
  sort?: Maybe<Sort>;
};

export type ObjectTypePricing = LastUpdated & {
  __typename?: 'ObjectTypePricing';
  rent?: Maybe<CommonRentInformations>;
  sale?: Maybe<CommonSaleInformations>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type ObjectTypePrices = {
  __typename?: 'ObjectTypePrices';
  id: Scalars['ID'];
  pricing?: Maybe<CommonPricing>;
  costs?: Maybe<Array<CommonCost>>;
  costsDetails?: Maybe<CostsDetails>;
};

export type ObjectTypePricesResult = {
  __typename?: 'ObjectTypePricesResult';
  id: Scalars['ID'];
  pricing?: Maybe<CommonPricing>;
  costs?: Maybe<CommonCosts>;
};

export type ObjectTypeServices = LastUpdated &
  Services & {
    __typename?: 'ObjectTypeServices';
    id: Scalars['ID'];
    hotWaterSupplies?: Maybe<Array<Service>>;
    heatingSources?: Maybe<Array<Service>>;
    additionalServices?: Maybe<Array<Service>>;
    dateUpdated?: Maybe<Scalars['Date']>;
    lastEditedBy?: Maybe<Profile>;
    servicesDescription?: Maybe<Scalars['String']>;
  };

export type ObjectTypeWithNewService = {
  __typename?: 'ObjectTypeWithNewService';
  objectType: ObjectTypeServices;
  newService: Service;
};

export enum BogSpaceType {
  BusinessSpace = 'BusinessSpace',
  OfficeSpace = 'OfficeSpace',
  RetailSpace = 'RetailSpace',
  Leissure = 'Leissure',
  HorecaSpace = 'HorecaSpace',
  SocialRealEstateSpace = 'SocialRealEstateSpace',
  Terrain = 'Terrain',
  Storage = 'Storage',
}

export enum AirTreatmentType {
  Airco = 'Airco',
  MechanicalVentilation = 'MechanicalVentilation',
  TopCooling = 'TopCooling',
}

export enum SpecificationType {
  TakeoverOfPersonel = 'TakeoverOfPersonel',
  CateringAllowed = 'CateringAllowed',
  IndustryLimitation = 'IndustryLimitation',
  PublicOrientedServices = 'PublicOrientedServices',
  Retail = 'Retail',
  Showroom = 'Showroom',
  AnnualPitches = 'AnnualPitches',
  ResidentialObjectAvailable = 'ResidentialObjectAvailable',
  ReturnService = 'ReturnService',
  CateringArea = 'CateringArea',
  Terrace = 'Terrace',
  Luxery = 'Luxery',
}

export enum BogServicesType {
  Electra = 'Electra',
  Reception = 'Reception',
  SanitaryBlocks = 'SanitaryBlocks',
  SwimmingPool = 'SwimmingPool',
  SewageSystem = 'SewageSystem',
  CateringAvailable = 'CateringAvailable',
  CampShop = 'CampShop',
  ConcreteFloor = 'ConcreteFloor',
  SkyLights = 'SkyLights',
  Pantry = 'Pantry',
  Heating = 'Heating',
  LoadingDocks = 'LoadingDocks',
  Sprinkler = 'Sprinkler',
  PowerFlow = 'PowerFlow',
  OverheadDoors = 'OverheadDoors',
  Toilet = 'Toilet',
  RecessedLuminaires = 'RecessedLuminaires',
  Elevators = 'Elevators',
  OpenableWindows = 'OpenableWindows',
  CableTrays = 'CableTrays',
  SuspendedCeiling = 'SuspendedCeiling',
  RoomLayout = 'RoomLayout',
  FlexDesk = 'FlexDesk',
}

export enum WealthClassType {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

export enum TermsOfCostsType {
  Monthly = 'Monthly',
  Yearly = 'Yearly',
}

export enum CommonRoomsType {
  Canteen = 'Canteen',
  Pantry = 'Pantry',
  Kitchen = 'Kitchen',
  FrontDesk = 'FrontDesk',
  Sanitary = 'Sanitary',
  ConferenceRoom = 'ConferenceRoom',
}

export enum HorecaType {
  Snackbar = 'Snackbar',
  ConferenceRoomCenter = 'ConferenceRoomCenter',
  Restaurant = 'Restaurant',
  Bistro = 'Bistro',
  Disco = 'Disco',
  Hotel = 'Hotel',
  Cafe = 'Cafe',
  EatCafe = 'EatCafe',
  PancakeHouse = 'PancakeHouse',
  Cafeteria = 'Cafeteria',
  Restaria = 'Restaria',
  Lunchroom = 'Lunchroom',
  Fastfood = 'Fastfood',
  RoadHouse = 'RoadHouse',
  IceCreamParlour = 'IceCreamParlour',
  SandwichShop = 'SandwichShop',
}

export enum LegalFormType {
  Bv = 'BV',
  Cv = 'CV',
  Cooperation = 'Cooperation',
  Proprietorship = 'Proprietorship',
  Partnership = 'Partnership',
  Nv = 'NV',
  Vof = 'VOF',
  Foundation = 'Foundation',
  Association = 'Association',
}

export type RetailMeasurements = {
  __typename?: 'RetailMeasurements';
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  salesFloorArea?: Maybe<Scalars['AbsoluteFloat']>;
  frontWidth?: Maybe<Scalars['AbsoluteFloat']>;
  inUnitsFrom?: Maybe<Scalars['AbsoluteFloat']>;
  amountOfFloors?: Maybe<Scalars['Int']>;
};

export type RetailMeasurementsInput = {
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  salesFloorArea?: Maybe<Scalars['AbsoluteFloat']>;
  frontWidth?: Maybe<Scalars['AbsoluteFloat']>;
  inUnitsFrom?: Maybe<Scalars['AbsoluteFloat']>;
  amountOfFloors?: Maybe<Scalars['Int']>;
};

export type LeisureMeasurements = {
  __typename?: 'LeisureMeasurements';
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  numberOfPitches?: Maybe<Scalars['Int']>;
  numberOfStays?: Maybe<Scalars['Int']>;
  capacityOfPersons?: Maybe<Scalars['Int']>;
};

export type LeisureMeasurementsInput = {
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  numberOfPitches?: Maybe<Scalars['Int']>;
  numberOfStays?: Maybe<Scalars['Int']>;
  capacityOfPersons?: Maybe<Scalars['Int']>;
};

export type HorecaMeasurements = {
  __typename?: 'HorecaMeasurements';
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  salesFloorArea?: Maybe<Scalars['AbsoluteFloat']>;
  amountOfFloors?: Maybe<Scalars['Int']>;
  amountOfRooms?: Maybe<Scalars['Int']>;
  currentNumberOfSeats?: Maybe<Scalars['Int']>;
  housingArea?: Maybe<Scalars['AbsoluteFloat']>;
};

export type HorecaMeasurementsInput = {
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  salesFloorArea?: Maybe<Scalars['AbsoluteFloat']>;
  amountOfFloors?: Maybe<Scalars['Int']>;
  amountOfRooms?: Maybe<Scalars['Int']>;
  currentNumberOfSeats?: Maybe<Scalars['Int']>;
  housingArea?: Maybe<Scalars['AbsoluteFloat']>;
};

export type BusinessSpaceMeasurements = {
  __typename?: 'BusinessSpaceMeasurements';
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  freeHeight?: Maybe<Scalars['AbsoluteFloat']>;
  freeSpan?: Maybe<Scalars['AbsoluteFloat']>;
  floorLoad?: Maybe<Scalars['AbsoluteFloat']>;
  inUnitsFrom?: Maybe<Scalars['AbsoluteFloat']>;
  amountOfFloors?: Maybe<Scalars['Int']>;
};

export type BusinessSpaceMeasurementsInput = {
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  freeHeight?: Maybe<Scalars['AbsoluteFloat']>;
  freeSpan?: Maybe<Scalars['AbsoluteFloat']>;
  floorLoad?: Maybe<Scalars['AbsoluteFloat']>;
  inUnitsFrom?: Maybe<Scalars['AbsoluteFloat']>;
  amountOfFloors?: Maybe<Scalars['Int']>;
};

export type OfficeSpaceMeasurements = {
  __typename?: 'OfficeSpaceMeasurements';
  length?: Maybe<Scalars['AbsoluteFloat']>;
  width?: Maybe<Scalars['AbsoluteFloat']>;
  height?: Maybe<Scalars['AbsoluteFloat']>;
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  volume?: Maybe<Scalars['AbsoluteFloat']>;
  measurementsCertificateAvailable?: Maybe<Scalars['Boolean']>;
  inUnitsFrom?: Maybe<Scalars['AbsoluteFloat']>;
  amountOfFloors?: Maybe<Scalars['Int']>;
};

export type OfficeSpaceMeasurementsInput = {
  length?: Maybe<Scalars['AbsoluteFloat']>;
  width?: Maybe<Scalars['AbsoluteFloat']>;
  height?: Maybe<Scalars['AbsoluteFloat']>;
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  volume?: Maybe<Scalars['AbsoluteFloat']>;
  measurementsCertificateAvailable?: Maybe<Scalars['Boolean']>;
  inUnitsFrom?: Maybe<Scalars['AbsoluteFloat']>;
  amountOfFloors?: Maybe<Scalars['Int']>;
};

export type GoodWillPrices = {
  __typename?: 'GoodWillPrices';
  priceInventoryGoodwill?: Maybe<Scalars['AbsoluteFloat']>;
  vatRate?: Maybe<Scalars['AbsoluteFloat']>;
  priceInventoryGoodwillVat?: Maybe<Scalars['AbsoluteFloat']>;
  priceInventoryGoodwillIncludedVat?: Maybe<Scalars['AbsoluteFloat']>;
  notes?: Maybe<Scalars['String']>;
};

export type GoodWillPricesInput = {
  priceInventoryGoodwill?: Maybe<Scalars['AbsoluteFloat']>;
  vatRate?: Maybe<Scalars['AbsoluteFloat']>;
  priceInventoryGoodwillVat?: Maybe<Scalars['AbsoluteFloat']>;
  priceInventoryGoodwillIncludedVat?: Maybe<Scalars['AbsoluteFloat']>;
  notes?: Maybe<Scalars['String']>;
};

export type HorecaPrices = {
  __typename?: 'HorecaPrices';
  priceInventoryGoodwill?: Maybe<Scalars['AbsoluteFloat']>;
  vatRate?: Maybe<Scalars['AbsoluteFloat']>;
  priceInventoryGoodwillVat?: Maybe<Scalars['AbsoluteFloat']>;
  priceInventoryGoodwillIncludedVat?: Maybe<Scalars['AbsoluteFloat']>;
  revenueLastFiscalYear?: Maybe<Scalars['AbsoluteFloat']>;
  rentalIncomeHomeYear?: Maybe<Scalars['AbsoluteFloat']>;
  notes?: Maybe<Scalars['String']>;
};

export type HorecaPricesInput = {
  priceInventoryGoodwill?: Maybe<Scalars['AbsoluteFloat']>;
  vatRate?: Maybe<Scalars['AbsoluteFloat']>;
  priceInventoryGoodwillVat?: Maybe<Scalars['AbsoluteFloat']>;
  priceInventoryGoodwillIncludedVat?: Maybe<Scalars['AbsoluteFloat']>;
  revenueLastFiscalYear?: Maybe<Scalars['AbsoluteFloat']>;
  rentalIncomeHomeYear?: Maybe<Scalars['AbsoluteFloat']>;
  notes?: Maybe<Scalars['String']>;
};

export type BogPrices = {
  __typename?: 'BogPrices';
  price?: Maybe<Scalars['AbsoluteFloat']>;
  vateRate?: Maybe<Scalars['AbsoluteFloat']>;
  priceVat?: Maybe<Scalars['AbsoluteFloat']>;
  priceIncVat?: Maybe<Scalars['AbsoluteFloat']>;
};

export type BogPricesInput = {
  price?: Maybe<Scalars['AbsoluteFloat']>;
  vateRate?: Maybe<Scalars['AbsoluteFloat']>;
  priceVat?: Maybe<Scalars['AbsoluteFloat']>;
  priceIncVat?: Maybe<Scalars['AbsoluteFloat']>;
};

export type RetailerAssociationContribution = {
  __typename?: 'RetailerAssociationContribution';
  contribution?: Maybe<Scalars['AbsoluteFloat']>;
  termsOfCosts?: Maybe<Scalars['String']>;
  vatPercentage?: Maybe<Scalars['AbsoluteFloat']>;
  vatTaxedContribution?: Maybe<Scalars['AbsoluteFloat']>;
  notes?: Maybe<Scalars['String']>;
};

export type RetailerAssociationContributionInput = {
  contribution?: Maybe<Scalars['AbsoluteFloat']>;
  termsOfCosts?: Maybe<Scalars['String']>;
  vatPercentage?: Maybe<Scalars['AbsoluteFloat']>;
  vatTaxedContribution?: Maybe<Scalars['AbsoluteFloat']>;
  notes?: Maybe<Scalars['String']>;
};

export type RetailSpace = {
  __typename?: 'RetailSpace';
  measurements?: Maybe<RetailMeasurements>;
  airTreatment?: Maybe<Array<Scalars['String']>>;
  specification?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<GoodWillPrices>;
  wealthClass?: Maybe<Scalars['String']>;
  retailerAssociationContribution?: Maybe<RetailerAssociationContribution>;
  commonRooms?: Maybe<Array<Scalars['String']>>;
};

export type RetailSpaceInput = {
  measurements?: Maybe<RetailMeasurementsInput>;
  airTreatment?: Maybe<Array<Scalars['String']>>;
  specification?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<GoodWillPricesInput>;
  wealthClass?: Maybe<Scalars['String']>;
  retailerAssociationContribution?: Maybe<RetailerAssociationContributionInput>;
  commonRooms?: Maybe<Array<Scalars['String']>>;
};

export type LeisureSpace = {
  __typename?: 'LeisureSpace';
  measurements?: Maybe<LeisureMeasurements>;
  specification?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<GoodWillPrices>;
  services?: Maybe<Array<Scalars['String']>>;
};

export type LeisureSpaceInput = {
  measurements?: Maybe<LeisureMeasurementsInput>;
  specification?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<GoodWillPricesInput>;
  services?: Maybe<Array<Scalars['String']>>;
};

export type HorecaSpace = {
  __typename?: 'HorecaSpace';
  measurements?: Maybe<HorecaMeasurements>;
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
  specification?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<HorecaPrices>;
  wealthClass?: Maybe<Scalars['String']>;
  legalForm?: Maybe<Scalars['String']>;
};

export type HorecaSpaceInput = {
  measurements?: Maybe<HorecaMeasurementsInput>;
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
  specification?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<HorecaPricesInput>;
  wealthClass?: Maybe<Scalars['String']>;
  legalForm?: Maybe<Scalars['String']>;
};

export type BusinessSpace = {
  __typename?: 'BusinessSpace';
  measurements?: Maybe<BusinessSpaceMeasurements>;
  airTreatment?: Maybe<Array<Scalars['String']>>;
  services?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<BogPrices>;
};

export type BusinessSpaceInput = {
  measurements?: Maybe<BusinessSpaceMeasurementsInput>;
  airTreatment?: Maybe<Array<Scalars['String']>>;
  services?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<BogPricesInput>;
};

export type OfficeSpace = {
  __typename?: 'OfficeSpace';
  measurements?: Maybe<OfficeSpaceMeasurements>;
  airTreatment?: Maybe<Array<Scalars['String']>>;
  services?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<BogPrices>;
  turnKey?: Maybe<Scalars['Boolean']>;
  commonRooms?: Maybe<Array<Scalars['String']>>;
};

export type OfficeSpaceInput = {
  measurements?: Maybe<OfficeSpaceMeasurementsInput>;
  airTreatment?: Maybe<Array<Scalars['String']>>;
  services?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<BogPricesInput>;
  turnKey?: Maybe<Scalars['Boolean']>;
  commonRooms?: Maybe<Array<Scalars['String']>>;
};

export type BogSpace = LastUpdated & {
  __typename?: 'BogSpace';
  id: Scalars['ID'];
  type: BogSpaceType;
  name?: Maybe<Scalars['String']>;
  retailSpaceConfiguration?: Maybe<RetailSpace>;
  leisureSpaceConfiguration?: Maybe<LeisureSpace>;
  horecaSpaceConfiguration?: Maybe<HorecaSpace>;
  businessSpaceConfiguration?: Maybe<BusinessSpace>;
  officeSpaceConfiguration?: Maybe<OfficeSpace>;
  images?: Maybe<Array<File>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<Profile>;
};

export type UpdateBogSpaceInput = {
  pimId: Scalars['ID'];
  spaceId: Scalars['ID'];
  spaceName?: Maybe<Scalars['String']>;
  retailSpaceConfiguration?: Maybe<RetailSpaceInput>;
  leisureSpaceConfiguration?: Maybe<LeisureSpaceInput>;
  horecaSpaceConfiguration?: Maybe<HorecaSpaceInput>;
  businessSpaceConfiguration?: Maybe<BusinessSpaceInput>;
  officeSpaceConfiguration?: Maybe<OfficeSpaceInput>;
};

export type AddBogSpaceInput = {
  id: Scalars['ID'];
  type: BogSpaceType;
  name?: Maybe<Scalars['String']>;
};

export type PimWithNewBogSpace = {
  __typename?: 'PimWithNewBogSpace';
  newSpace: BogSpace;
  pim: Pim;
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
  dateCreated?: Maybe<Scalars['Date']>;
};

export type CadastreMap = {
  __typename?: 'CadastreMap';
  id: Scalars['String'];
  mapName: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  file?: Maybe<File>;
  description?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
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

export type PimWithNewCadastre = {
  __typename?: 'PimWithNewCadastre';
  pim?: Maybe<Pim>;
  cadastre?: Maybe<Cadastre>;
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

export enum GeneralBogType {
  BusinessSpace = 'BusinessSpace',
  Offices = 'Offices',
  RetailSpace = 'RetailSpace',
  SocialRealEstate = 'SocialRealEstate',
  Horeca = 'Horeca',
}

export enum GeneralCharacteristicsBog {
  Leissure = 'Leissure',
  BuildingPlot = 'BuildingPlot',
  Investment = 'Investment',
  PavedOutsideArea = 'PavedOutsideArea',
  LogisticsFunction = 'LogisticsFunction',
}

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
  bogGeneral?: Maybe<BogGeneralInput>;
  extraAddress?: Maybe<ExtraAddressInput>;
  showExtraAddress?: Maybe<Scalars['Boolean']>;
  showIdentificationNumber?: Maybe<Scalars['Boolean']>;
  apartmentGeneral?: Maybe<ApartmentGeneralInput>;
};

export enum ApartmentType {
  OneBedroomApartment = 'OneBedroomApartment',
  TwoBedroomApartment = 'TwoBedroomApartment',
  ThreeBedroomApartment = 'ThreeBedroomApartment',
  FourBedroomApartment = 'FourBedroomApartment',
  FiveBedroomApartment = 'FiveBedroomApartment',
}

export enum CharacteristicsApartment {
  CorridorApartment = 'CorridorApartment',
  ServiceApartment = 'ServiceApartment',
  NursingApartment = 'NursingApartment',
  CallFloor = 'CallFloor',
  DormRoom = 'DormRoom',
  OpenPorch = 'OpenPorch',
  PorchApartment = 'PorchApartment',
  GalleryApartment = 'GalleryApartment',
  Mezzanine = 'Mezzanine',
  Penthouse = 'Penthouse',
  Maisonette = 'Maisonette',
  UpstairsApartment = 'UpstairsApartment',
  DownstairsApartment = 'DownstairsApartment',
  DoubleUpstairsApartment = 'DoubleUpstairsApartment',
  DoubleDownstairsApartment = 'DoubleDownstairsApartment',
}

export type ApartmentPropertyDetailsInput = {
  groundfloorApartmentStartsOnFloor?: Maybe<Scalars['Int']>;
  amountOfTotalFloors?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  apartmentType?: Maybe<Scalars['String']>;
  characteristicsApartment?: Maybe<Scalars['String']>;
};

export type ApartmentPropertyDetails = {
  __typename?: 'ApartmentPropertyDetails';
  groundfloorApartmentStartsOnFloor?: Maybe<Scalars['Int']>;
  amountOfTotalFloors?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  apartmentType?: Maybe<Scalars['String']>;
  characteristicsApartment?: Maybe<Scalars['String']>;
};

export type ApartmentGeneralInput = {
  availability?: Maybe<PropertyAvailabilityInformationInput>;
  construction?: Maybe<ConstructionInformationInput>;
  propertyDetails?: Maybe<ApartmentPropertyDetailsInput>;
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

export type ApartmentGeneral = {
  __typename?: 'ApartmentGeneral';
  availability?: Maybe<PropertyAvailabilityInformation>;
  construction?: Maybe<ConstructionInformation>;
  propertyDetails?: Maybe<ApartmentPropertyDetails>;
};

export type HouseGeneral = {
  __typename?: 'HouseGeneral';
  availability?: Maybe<PropertyAvailabilityInformation>;
  construction?: Maybe<ConstructionInformation>;
  floor?: Maybe<FloorType>;
  propertyConnection?: Maybe<PropertyConnection>;
  propertyDetails?: Maybe<PropertyTypeDetailed>;
};

export type BogGeneralInput = {
  type?: Maybe<GeneralBogType>;
  characteristics?: Maybe<GeneralCharacteristicsBog>;
  startsOnFloor?: Maybe<Scalars['Int']>;
  totalFloors?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type BogGeneral = {
  __typename?: 'BogGeneral';
  type?: Maybe<GeneralBogType>;
  characteristics?: Maybe<GeneralCharacteristicsBog>;
  startsOnFloor?: Maybe<Scalars['Int']>;
  totalFloors?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
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
  bogGeneral?: Maybe<BogGeneral>;
  extraAddress?: Maybe<ExtraAddress>;
  identificationNumbers?: Maybe<Array<IdentificationNumber>>;
  showExtraAddress?: Maybe<Scalars['Boolean']>;
  showIdentificationNumber?: Maybe<Scalars['Boolean']>;
  apartmentGeneral?: Maybe<ApartmentGeneral>;
};

export type PimWithNewIdentificationNumber = {
  __typename?: 'PimWithNewIdentificationNumber';
  pim: Pim;
  newIdentificationNumber: IdentificationNumber;
};

export type GeneralPimSearchResult = {
  __typename?: 'GeneralPimSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<PimGeneral>>;
};

export type PimWithSameAddressInput = {
  pimId?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
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
  dateCreated?: Maybe<Scalars['Date']>;
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
  dateCreated?: Maybe<Scalars['Date']>;
};

export type PimInside = LastUpdated & {
  __typename?: 'PimInside';
  id: Scalars['String'];
  floors?: Maybe<Array<Floor>>;
  bogSpaces?: Maybe<Array<BogSpace>>;
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
  type: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export type AddCostInput = {
  id: Scalars['ID'];
  type: Scalars['String'];
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
  dateCreated?: Maybe<Scalars['Date']>;
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

export enum AllocationCriteriaType {
  MatchProfile = 'MatchProfile',
  Allocation = 'Allocation',
}

export enum PropertyPublishedExternally {
  Yes = 'Yes',
  No = 'No',
}

export enum CriteriaOrder {
  JointIncome = 'JointIncome',
  MinimalAmountOfMissingDocuments = 'MinimalAmountOfMissingDocuments',
  NumberOfPreferenceInterest = 'NumberOfPreferenceInterest',
  DateOfRegistrationInterest = 'DateOfRegistrationInterest',
  AdditionalWork = 'AdditionalWork',
}

export enum HomeSituation {
  LivingIn = 'LivingIn',
  OwnerOccupiedHome = 'OwnerOccupiedHome',
  SocialHousing = 'SocialHousing',
  FreeSectorRentalHome = 'FreeSectorRentalHome',
}

export enum TypeOfEmployment {
  IncomeFromEquity = 'IncomeFromEquity',
  SalariedEmployment = 'SalariedEmployment',
  Entrepreneur = 'Entrepreneur',
  Benefits = 'Benefits',
  None = 'None',
}

export enum PersonRole {
  Reservation = 'Reservation',
  Candidate = 'Candidate',
  Optant = 'Optant',
  Tenant = 'Tenant',
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
  dateCreated?: Maybe<Scalars['Date']>;
  accountManagers?: Maybe<Array<Profile>>;
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

export type AddAllocationCriteriaInput = {
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
  allocationCriterias?: Maybe<Array<AllocationCriteria>>;
};

export type AddViewingMomentResult = {
  __typename?: 'AddViewingMomentResult';
  pim: Pim;
  moment: ViewingMoment;
};

export type AddAllocationCriteriaResult = {
  __typename?: 'AddAllocationCriteriaResult';
  pim: Pim;
  criteria: AllocationCriteria;
};

export type PersonCapitalInput = {
  deductMonthlyObligations?: Maybe<Scalars['AbsoluteFloat']>;
  availableCapitalCount?: Maybe<Scalars['AbsoluteFloat']>;
};

export type PersonCapital = {
  __typename?: 'PersonCapital';
  deductMonthlyObligations?: Maybe<Scalars['AbsoluteFloat']>;
  availableCapitalCount?: Maybe<Scalars['AbsoluteFloat']>;
};

export type AllocationCriteriaInput = {
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<AllocationCriteriaType>;
  note?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  candidatesAssignedPerProperty?: Maybe<Scalars['Int']>;
  minJointAnnualIncome?: Maybe<Scalars['AbsoluteFloat']>;
  monthlyRentByMinJointIncome?: Maybe<Scalars['AbsoluteFloat']>;
  maxJointAnnualIncome?: Maybe<Scalars['AbsoluteFloat']>;
  monthlyRentByMaxJointIncome?: Maybe<Scalars['AbsoluteFloat']>;
  publishedExternally?: Maybe<PropertyPublishedExternally>;
  minNumberPreferenceInterest?: Maybe<Scalars['Int']>;
  registrationFrom?: Maybe<Scalars['Date']>;
  registrationTo?: Maybe<Scalars['Date']>;
  assignOnlyPeopleWithPropertyInterest?: Maybe<Scalars['Boolean']>;
  acceptedMissingDocuments?: Maybe<Scalars['Int']>;
  onlyAcceptedDocuments?: Maybe<Scalars['Boolean']>;
  criteriaOrder: Array<CriteriaOrder>;
  lowestIncomePercentage?: Maybe<Scalars['AbsoluteFloat']>;
  incomeDistributionThreshold?: Maybe<Scalars['AbsoluteFloat']>;
  fictitiousIncomeCalculation?: Maybe<Scalars['AbsoluteFloat']>;
  firstPersonFromCouple?: Maybe<PersonCapitalInput>;
  secondPersonFromCouple?: Maybe<PersonCapitalInput>;
  minimalAgeFirstPersonCouple?: Maybe<Scalars['Int']>;
  minimalAgePartner?: Maybe<Scalars['Int']>;
  homeSituation?: Maybe<Array<HomeSituation>>;
  numberOfAdults?: Maybe<Scalars['Int']>;
  numberOfChildren?: Maybe<Scalars['Int']>;
  currentResidence?: Maybe<Scalars['String']>;
  typeOfEmploymentFirstPersonInCouple?: Maybe<Array<TypeOfEmployment>>;
  typeOfEmploymentSecondPersonInCouple?: Maybe<Array<TypeOfEmployment>>;
  assignToPersonsWithRole?: Maybe<Array<PersonRole>>;
  assignPeopleAboveMaxJointIncome?: Maybe<Scalars['Boolean']>;
  segmentationProfileIds?: Maybe<Array<Scalars['ID']>>;
};

export type AllocationCriteria = {
  __typename?: 'AllocationCriteria';
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<AllocationCriteriaType>;
  note?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  candidatesAssignedPerProperty?: Maybe<Scalars['Int']>;
  minJointAnnualIncome?: Maybe<Scalars['AbsoluteFloat']>;
  monthlyRentByMinJointIncome?: Maybe<Scalars['AbsoluteFloat']>;
  maxJointAnnualIncome?: Maybe<Scalars['AbsoluteFloat']>;
  monthlyRentByMaxJointIncome?: Maybe<Scalars['AbsoluteFloat']>;
  publishedExternally?: Maybe<PropertyPublishedExternally>;
  minNumberPreferenceInterest?: Maybe<Scalars['Int']>;
  registrationFrom?: Maybe<Scalars['Date']>;
  registrationTo?: Maybe<Scalars['Date']>;
  assignOnlyPeopleWithPropertyInterest?: Maybe<Scalars['Boolean']>;
  acceptedMissingDocuments?: Maybe<Scalars['Int']>;
  onlyAcceptedDocuments?: Maybe<Scalars['Boolean']>;
  criteriaOrder: Array<CriteriaOrder>;
  lowestIncomePercentage?: Maybe<Scalars['AbsoluteFloat']>;
  incomeDistributionThreshold?: Maybe<Scalars['AbsoluteFloat']>;
  fictitiousIncomeCalculation?: Maybe<Scalars['AbsoluteFloat']>;
  firstPersonFromCouple?: Maybe<PersonCapital>;
  secondPersonFromCouple?: Maybe<PersonCapital>;
  minimalAgeFirstPersonCouple?: Maybe<Scalars['Int']>;
  minimalAgePartner?: Maybe<Scalars['Int']>;
  homeSituation?: Maybe<Array<HomeSituation>>;
  numberOfAdults?: Maybe<Scalars['Int']>;
  numberOfChildren?: Maybe<Scalars['Int']>;
  currentResidence?: Maybe<Scalars['String']>;
  typeOfEmploymentFirstPersonInCouple?: Maybe<Array<TypeOfEmployment>>;
  typeOfEmploymentSecondPersonInCouple?: Maybe<Array<TypeOfEmployment>>;
  assignToPersonsWithRole?: Maybe<Array<PersonRole>>;
  assignPeopleAboveMaxJointIncome?: Maybe<Scalars['Boolean']>;
  segmentationProfiles?: Maybe<Array<Profile>>;
  segmentationProfileIds?: Maybe<Array<Scalars['String']>>;
};

export type PimServices = LastUpdated &
  Services & {
    __typename?: 'PimServices';
    id: Scalars['String'];
    meters?: Maybe<Array<Meter>>;
    metersMeta?: Maybe<MetersMeta>;
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
  dateCreated?: Maybe<Scalars['Date']>;
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

export type PimSpecification = {
  __typename?: 'PimSpecification';
  id: Scalars['ID'];
  specification?: Maybe<Specification>;
  specificationAdvanced?: Maybe<SpecificationAdvanced>;
  linkedProperties?: Maybe<Array<LinkedPim>>;
  inspections?: Maybe<Array<Inspection>>;
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
  Meters = 'Meters',
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
  bogGeneral?: Maybe<BogGeneral>;
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
  metersMeta?: Maybe<MetersMeta>;
  allocationCriterias?: Maybe<Array<AllocationCriteria>>;
  apartmentGeneral?: Maybe<ApartmentGeneral>;
  bogSpaces?: Maybe<Array<BogSpace>>;
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
  meterType?: Maybe<MeterType>;
};

export enum CommonPricingType {
  Sale = 'Sale',
  Rent = 'Rent',
}

export type CommonPricing = LastUpdated & {
  __typename?: 'CommonPricing';
  rent?: Maybe<CommonRentInformations>;
  sale?: Maybe<CommonSaleInformations>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type CommonSaleInformationsInput = {
  minPrice?: Maybe<Scalars['AbsoluteFloat']>;
  maxPrice?: Maybe<Scalars['AbsoluteFloat']>;
  calculateAutomatically?: Maybe<Scalars['Boolean']>;
};

export type CommonSaleInformations = {
  __typename?: 'CommonSaleInformations';
  minPrice?: Maybe<Scalars['AbsoluteFloat']>;
  maxPrice?: Maybe<Scalars['AbsoluteFloat']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  calculateAutomatically?: Maybe<Scalars['Boolean']>;
};

export type CommonRentInformationsInput = {
  minPrice?: Maybe<Scalars['AbsoluteFloat']>;
  maxPrice?: Maybe<Scalars['AbsoluteFloat']>;
  calculateAutomatically?: Maybe<Scalars['Boolean']>;
};

export type CommonRentInformations = {
  __typename?: 'CommonRentInformations';
  minPrice?: Maybe<Scalars['AbsoluteFloat']>;
  maxPrice?: Maybe<Scalars['AbsoluteFloat']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  calculateAutomatically?: Maybe<Scalars['Boolean']>;
};

export type ToggleCommonPricingInput = {
  id: Scalars['ID'];
  isRent: Scalars['Boolean'];
  isSale: Scalars['Boolean'];
};

export type UpdateCommonPricingInput = {
  id: Scalars['ID'];
  rent?: Maybe<CommonRentInformationsInput>;
  sale?: Maybe<CommonSaleInformationsInput>;
  description?: Maybe<Scalars['String']>;
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

export type ProfileSearchResult = {
  __typename?: 'ProfileSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<Profile>>;
};

export type ProjectPhase = {
  __typename?: 'ProjectPhase';
  id: Scalars['ID'];
  name: Scalars['String'];
  logo?: Maybe<File>;
  ncpIds?: Maybe<Array<Scalars['ID']>>;
};

export type CreateProjectPhaseInput = {
  name: Scalars['String'];
  logoId?: Maybe<Scalars['ID']>;
  ncpId?: Maybe<Scalars['ID']>;
};

export type UpdateProjectPhaseInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  logoId?: Maybe<Scalars['ID']>;
  ncpIds?: Maybe<Array<Scalars['ID']>>;
};

export type ProjectPhaseFilters = {
  name?: Maybe<Scalars['String']>;
  ncpId?: Maybe<Scalars['ID']>;
};

export type ProjectPhaseSearchResult = {
  __typename?: 'ProjectPhaseSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<ProjectPhase>>;
};

export type LinkNcpToProjectPhaseInput = {
  ncpId: Scalars['ID'];
  projectPhaseId: Scalars['ID'];
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
  parentId: Scalars['String'];
  name: Scalars['String'];
  type: MeterType;
};

export type UpdateMeterInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AddReadingInput = {
  parentId: Scalars['ID'];
  meterId: Scalars['ID'];
  value?: Maybe<Scalars['Int']>;
  dateOfReading?: Maybe<Scalars['Date']>;
  feedInId?: Maybe<Scalars['String']>;
};

export type UpdateReadingInput = {
  parentId: Scalars['ID'];
  id: Scalars['ID'];
  value?: Maybe<Scalars['Int']>;
  dateOfReading?: Maybe<Scalars['Date']>;
  feedInId?: Maybe<Scalars['String']>;
};

export type AddServiceInput = {
  parentId: Scalars['ID'];
  name: Scalars['String'];
  type: ServiceType;
  configuration?: Maybe<Scalars['ServiceConfigurationInput']>;
};

export type UpdateServiceInput = {
  parentId: Scalars['ID'];
  serviceId: Scalars['ID'];
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
  dateCreated?: Maybe<Scalars['Date']>;
};

export type Meter = LastUpdated & {
  __typename?: 'Meter';
  id: Scalars['String'];
  type: MeterType;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  readings?: Maybe<Array<Reading>>;
  dateCreated?: Maybe<Scalars['Date']>;
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
  dateCreated?: Maybe<Scalars['Date']>;
};

export type ServiceDescriptionInput = {
  id: Scalars['ID'];
  servicesDescription?: Maybe<Scalars['String']>;
};

export type Services = {
  hotWaterSupplies?: Maybe<Array<Service>>;
  heatingSources?: Maybe<Array<Service>>;
  additionalServices?: Maybe<Array<Service>>;
};

export type MetersSharedData = {
  __typename?: 'MetersSharedData';
  description?: Maybe<Scalars['String']>;
  lastEditedBy?: Maybe<Profile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type MetersMeta = {
  __typename?: 'MetersMeta';
  Water?: Maybe<MetersSharedData>;
  Gas?: Maybe<MetersSharedData>;
  Electric?: Maybe<MetersSharedData>;
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

export type RemoveFilesMutationVariables = {
  input: RemoveFilesInput;
};

export type RemoveFilesMutation = { __typename?: 'Mutation' } & {
  removeFiles: Array<Maybe<{ __typename?: 'File' } & Pick<File, 'id'>>>;
};

export type AddIdentificationNumberPimMutationVariables = {
  input: AddIdentificationNumberInput;
};

export type AddIdentificationNumberPimMutation = { __typename?: 'Mutation' } & {
  addIdentificationNumberPim: { __typename?: 'PimWithNewIdentificationNumber' } & {
    newIdentificationNumber: { __typename?: 'IdentificationNumber' } & Pick<IdentificationNumber, 'id'>;
  };
};

export type UpdateIdentificationNumberPimMutationVariables = {
  input: UpdateIdentificationNumberInput;
};

export type UpdateIdentificationNumberPimMutation = { __typename?: 'Mutation' } & {
  updateIdentificationNumberPim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddIdentificationNumberNcpMutationVariables = {
  input: AddIdentificationNumberInput;
};

export type AddIdentificationNumberNcpMutation = { __typename?: 'Mutation' } & {
  addIdentificationNumberNcp: { __typename?: 'NcpWithNewIdentificationNumber' } & {
    newIdentificationNumber: { __typename?: 'IdentificationNumber' } & Pick<IdentificationNumber, 'id'>;
  };
};

export type UpdateIdentificationNumberNcpMutationVariables = {
  input: UpdateIdentificationNumberInput;
};

export type UpdateIdentificationNumberNcpMutation = { __typename?: 'Mutation' } & {
  updateIdentificationNumberNcp: { __typename?: 'NcpCharacteristics' } & Pick<NcpCharacteristics, 'id'>;
};

export type AddIdentificationNumberObjectTypeMutationVariables = {
  input: AddIdentificationNumberInput;
};

export type AddIdentificationNumberObjectTypeMutation = { __typename?: 'Mutation' } & {
  addIdentificationNumberObjectType: { __typename?: 'ObjectTypeWithNewIdentificationNumber' } & {
    newIdentificationNumber: { __typename?: 'IdentificationNumber' } & Pick<IdentificationNumber, 'id'>;
  };
};

export type UpdateIdentificationNumberObjectTypeMutationVariables = {
  input: UpdateIdentificationNumberInput;
};

export type UpdateIdentificationNumberObjectTypeMutation = { __typename?: 'Mutation' } & {
  updateIdentificationNumberObjectType: { __typename?: 'ObjectTypeCharacteristics' } & Pick<
    ObjectTypeCharacteristics,
    'id'
  >;
};

export type AddLabelMutationVariables = {
  input: LabelInput;
};

export type AddLabelMutation = { __typename?: 'Mutation' } & {
  addLabel: { __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'text' | 'icon'>;
};

export type UpdateNcpCharacteristicsMutationVariables = {
  input: NcpCharacteristicsInput;
};

export type UpdateNcpCharacteristicsMutation = { __typename?: 'Mutation' } & {
  updateNcpCharacteristics: { __typename?: 'NcpCharacteristics' } & Pick<NcpCharacteristics, 'id'> & {
      measurements?: Maybe<
        { __typename?: 'Measurements' } & Pick<
          Measurements,
          | 'volumeFrom'
          | 'volumeTo'
          | 'livingSpaceFrom'
          | 'livingSpaceTo'
          | 'plotAreaFrom'
          | 'plotAreaTo'
          | 'calculateAutomatically'
        >
      >;
    };
};

export type SetNcpCharacteristicsMutationVariables = {
  input: SetCharacteristicsSectionsInput;
};

export type SetNcpCharacteristicsMutation = { __typename?: 'Mutation' } & {
  setNcpCharacteristics: { __typename?: 'NcpCharacteristics' } & Pick<NcpCharacteristics, 'id'>;
};

export type CreateNcpMutationVariables = {
  input: CreateNcpInput;
};

export type CreateNcpMutation = { __typename?: 'Mutation' } & {
  createNcp: { __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id'>;
};

export type UpdateNcpMutationVariables = {
  input: UpdateNcpInput;
};

export type UpdateNcpMutation = { __typename?: 'Mutation' } & {
  updateNcp: { __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id'>;
};

export type AddNcpLabelMutationVariables = {
  input: LabelInput;
};

export type AddNcpLabelMutation = { __typename?: 'Mutation' } & {
  addNcpLabel: { __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'text' | 'icon'>;
};

export type UpdateNcpMediaDescriptionMutationVariables = {
  input: CommonUpdateMediaDescriptionInput;
};

export type UpdateNcpMediaDescriptionMutation = { __typename?: 'Mutation' } & {
  updateNcpMediaDescription?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type AddNcpPicturesMutationVariables = {
  input: CommonAddPicturesInput;
};

export type AddNcpPicturesMutation = { __typename?: 'Mutation' } & {
  addNcpPictures?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type UpdateNcpPictureMutationVariables = {
  input: CommonUpdatePictureInput;
};

export type UpdateNcpPictureMutation = { __typename?: 'Mutation' } & {
  updateNcpPicture?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type AddNcpMediaLinkMutationVariables = {
  input: CommonAddMediaLinkInput;
};

export type AddNcpMediaLinkMutation = { __typename?: 'Mutation' } & {
  addNcpMediaLink?: Maybe<
    { __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'> & {
        mediaLinks?: Maybe<Array<{ __typename?: 'MediaLink' } & Pick<MediaLink, 'id'>>>;
      }
  >;
};

export type UpdateNcpMediaLinkMutationVariables = {
  input: CommonUpdateMediaLinkInput;
};

export type UpdateNcpMediaLinkMutation = { __typename?: 'Mutation' } & {
  updateNcpMediaLink?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type AddNcpTextChapterMutationVariables = {
  input: CommonAddTextChapterInput;
};

export type AddNcpTextChapterMutation = { __typename?: 'Mutation' } & {
  addNcpTextChapter?: Maybe<
    { __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'> & {
        textChapters?: Maybe<Array<{ __typename?: 'TextChapter' } & Pick<TextChapter, 'id'>>>;
      }
  >;
};

export type UpdateNcpTextChapterMutationVariables = {
  input: CommonUpdateTextChapterInput;
};

export type UpdateNcpTextChapterMutation = { __typename?: 'Mutation' } & {
  updateNcpTextChapter?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type AddNcpUspsMutationVariables = {
  input: CommonAddUspsInput;
};

export type AddNcpUspsMutation = { __typename?: 'Mutation' } & {
  addNcpUsps?: Maybe<
    { __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'> & {
        usps?: Maybe<Array<{ __typename?: 'Usp' } & Pick<Usp, 'id'>>>;
      }
  >;
};

export type UpdateNcpUspsMutationVariables = {
  input: CommonUpdateUspsInput;
};

export type UpdateNcpUspsMutation = { __typename?: 'Mutation' } & {
  updateNcpUsps?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type AddNcpTagMutationVariables = {
  input: CommonAddTagInput;
};

export type AddNcpTagMutation = { __typename?: 'Mutation' } & {
  addNcpTag?: Maybe<
    { __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'> & {
        tags?: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'id'>>>;
      }
  >;
};

export type UpdateNcpTagMutationVariables = {
  input: CommonUpdateTagInput;
};

export type UpdateNcpTagMutation = { __typename?: 'Mutation' } & {
  updateNcpTag?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type ToggleNcpPricingMutationVariables = {
  input: ToggleCommonPricingInput;
};

export type ToggleNcpPricingMutation = { __typename?: 'Mutation' } & {
  toggleNcpPricing: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type UpdateNcpPricingMutationVariables = {
  input: UpdateCommonPricingInput;
};

export type UpdateNcpPricingMutation = { __typename?: 'Mutation' } & {
  updateNcpPricing: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type AddNcpCostMutationVariables = {
  input: AddCommonCostInput;
};

export type AddNcpCostMutation = { __typename?: 'Mutation' } & {
  addNcpCost: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type UpdateNcpCostMutationVariables = {
  input: UpdateCommonCostInput;
};

export type UpdateNcpCostMutation = { __typename?: 'Mutation' } & {
  updateNcpCost: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type UpdateNcpCostsDetailsMutationVariables = {
  input: UpdateCommonCostsDetailsInput;
};

export type UpdateNcpCostsDetailsMutation = { __typename?: 'Mutation' } & {
  updateNcpCostsDetails: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type UpdateNcpInterestsMutationVariables = {
  input: InterestsInput;
};

export type UpdateNcpInterestsMutation = { __typename?: 'Mutation' } & {
  updateNcpInterests: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type UpdateNcpLinkedPropertiesListDescriptionMutationVariables = {
  input: UpdateLinkedPropertiesListDescription;
};

export type UpdateNcpLinkedPropertiesListDescriptionMutation = { __typename?: 'Mutation' } & {
  updateNcpLinkedPropertiesListDescription?: Maybe<{ __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id'>>;
};

export type AddNcpServiceMutationVariables = {
  input: AddServiceInput;
};

export type AddNcpServiceMutation = { __typename?: 'Mutation' } & {
  addNcpService: { __typename?: 'NcpWithNewService' } & {
    ncp: { __typename?: 'NcpServices' } & Pick<NcpServices, 'id'>;
    newService: { __typename?: 'Service' } & Pick<Service, 'id'>;
  };
};

export type UpdateNcpServiceMutationVariables = {
  input: UpdateServiceInput;
};

export type UpdateNcpServiceMutation = { __typename?: 'Mutation' } & {
  updateNcpService: { __typename?: 'NcpServices' } & Pick<NcpServices, 'id' | 'dateUpdated' | 'servicesDescription'> & {
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
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
    };
};

export type UpdateNcpServiceDescriptionMutationVariables = {
  input: ServiceDescriptionInput;
};

export type UpdateNcpServiceDescriptionMutation = { __typename?: 'Mutation' } & {
  updateNcpServiceDescription: { __typename?: 'NcpServices' } & Pick<NcpServices, 'id'>;
};

export type UpdateObjectTypeCharacteristicsMutationVariables = {
  input: ObjectTypeCharacteristicsInput;
};

export type UpdateObjectTypeCharacteristicsMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeCharacteristics: { __typename?: 'ObjectTypeCharacteristics' } & Pick<
    ObjectTypeCharacteristics,
    'id'
  > & {
      measurements?: Maybe<
        { __typename?: 'Measurements' } & Pick<
          Measurements,
          | 'volumeFrom'
          | 'volumeTo'
          | 'livingSpaceFrom'
          | 'livingSpaceTo'
          | 'plotAreaFrom'
          | 'plotAreaTo'
          | 'calculateAutomatically'
        >
      >;
    };
};

export type SetObjectTypeCharacteristicsSectionsMutationVariables = {
  input: SetCharacteristicsSectionsInput;
};

export type SetObjectTypeCharacteristicsSectionsMutation = { __typename?: 'Mutation' } & {
  setObjectTypeCharacteristicsSections: { __typename?: 'ObjectTypeCharacteristics' } & Pick<
    ObjectTypeCharacteristics,
    'id'
  >;
};

export type CreateObjectTypeMutationVariables = {
  input: CreateObjectTypeInput;
};

export type CreateObjectTypeMutation = { __typename?: 'Mutation' } & {
  createObjectType: { __typename?: 'ObjectTypeGeneral' } & Pick<
    ObjectTypeGeneral,
    'name' | 'dateUpdated' | 'ncpId' | 'id'
  > & { lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>> };
};

export type AddObjectTypeLabelMutationVariables = {
  input: LabelInput;
};

export type AddObjectTypeLabelMutation = { __typename?: 'Mutation' } & {
  addObjectTypeLabel: { __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'text' | 'icon'>;
};

export type UpdateObjectTypesListDescriptionMutationVariables = {
  input: UpdateObjectTypesListDescription;
};

export type UpdateObjectTypesListDescriptionMutation = { __typename?: 'Mutation' } & {
  updateObjectTypesListDescription?: Maybe<{ __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id'>>;
};

export type UpdateObjectTypeMediaDescriptionMutationVariables = {
  input: CommonUpdateMediaDescriptionInput;
};

export type UpdateObjectTypeMediaDescriptionMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeMediaDescription?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type AddObjectTypePicturesMutationVariables = {
  input: CommonAddPicturesInput;
};

export type AddObjectTypePicturesMutation = { __typename?: 'Mutation' } & {
  addObjectTypePictures?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type UpdateObjectTypePictureMutationVariables = {
  input: CommonUpdatePictureInput;
};

export type UpdateObjectTypePictureMutation = { __typename?: 'Mutation' } & {
  updateObjectTypePicture?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type AddObjectTypeMediaLinkMutationVariables = {
  input: CommonAddMediaLinkInput;
};

export type AddObjectTypeMediaLinkMutation = { __typename?: 'Mutation' } & {
  addObjectTypeMediaLink?: Maybe<
    { __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'> & {
        mediaLinks?: Maybe<Array<{ __typename?: 'MediaLink' } & Pick<MediaLink, 'id'>>>;
      }
  >;
};

export type UpdateObjectTypeMediaLinkMutationVariables = {
  input: CommonUpdateMediaLinkInput;
};

export type UpdateObjectTypeMediaLinkMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeMediaLink?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type AddObjectTypeTextChapterMutationVariables = {
  input: CommonAddTextChapterInput;
};

export type AddObjectTypeTextChapterMutation = { __typename?: 'Mutation' } & {
  addObjectTypeTextChapter?: Maybe<
    { __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'> & {
        textChapters?: Maybe<Array<{ __typename?: 'TextChapter' } & Pick<TextChapter, 'id'>>>;
      }
  >;
};

export type UpdateObjectTypeTextChapterMutationVariables = {
  input: CommonUpdateTextChapterInput;
};

export type UpdateObjectTypeTextChapterMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeTextChapter?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type AddObjectTypeUspsMutationVariables = {
  input: CommonAddUspsInput;
};

export type AddObjectTypeUspsMutation = { __typename?: 'Mutation' } & {
  addObjectTypeUsps?: Maybe<
    { __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'> & {
        usps?: Maybe<Array<{ __typename?: 'Usp' } & Pick<Usp, 'id'>>>;
      }
  >;
};

export type UpdateObjectTypeUspsMutationVariables = {
  input: CommonUpdateUspsInput;
};

export type UpdateObjectTypeUspsMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeUsps?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type AddObjectTypeTagMutationVariables = {
  input: CommonAddTagInput;
};

export type AddObjectTypeTagMutation = { __typename?: 'Mutation' } & {
  addObjectTypeTag?: Maybe<
    { __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'> & {
        tags?: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'id'>>>;
      }
  >;
};

export type UpdateObjectTypeTagMutationVariables = {
  input: CommonUpdateTagInput;
};

export type UpdateObjectTypeTagMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeTag?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type ToggleObjectTypePricingMutationVariables = {
  input: ToggleCommonPricingInput;
};

export type ToggleObjectTypePricingMutation = { __typename?: 'Mutation' } & {
  toggleObjectTypePricing: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'>;
};

export type UpdateObjectTypePricingMutationVariables = {
  input: UpdateCommonPricingInput;
};

export type UpdateObjectTypePricingMutation = { __typename?: 'Mutation' } & {
  updateObjectTypePricing: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'>;
};

export type AddObjectTypeCostMutationVariables = {
  input: AddCommonCostInput;
};

export type AddObjectTypeCostMutation = { __typename?: 'Mutation' } & {
  addObjectTypeCost: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'>;
};

export type UpdateObjectTypeCostMutationVariables = {
  input: UpdateCommonCostInput;
};

export type UpdateObjectTypeCostMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeCost: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'>;
};

export type UpdateObjectTypeCostsDetailsMutationVariables = {
  input: UpdateCommonCostsDetailsInput;
};

export type UpdateObjectTypeCostsDetailsMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeCostsDetails: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'>;
};

export type SetObjectTypeLinkedPimsMutationVariables = {
  input: SetLinkedPimsInput;
};

export type SetObjectTypeLinkedPimsMutation = { __typename?: 'Mutation' } & {
  setObjectTypeLinkedPims: { __typename?: 'ObjectTypeLinkedPims' } & {
    linkedProperties: { __typename?: 'PimListSearchResult' } & {
      items?: Maybe<Array<{ __typename?: 'ListPim' } & Pick<ListPim, 'id'>>>;
    };
  };
};

export type UpdateLinkedPropertiesListDescriptionMutationVariables = {
  input: UpdateLinkedPropertiesListDescription;
};

export type UpdateLinkedPropertiesListDescriptionMutation = { __typename?: 'Mutation' } & {
  updateLinkedPropertiesListDescription?: Maybe<{ __typename?: 'ObjectTypeGeneral' } & Pick<ObjectTypeGeneral, 'id'>>;
};

export type AddObjectTypeServiceMutationVariables = {
  input: AddServiceInput;
};

export type AddObjectTypeServiceMutation = { __typename?: 'Mutation' } & {
  addObjectTypeService: { __typename?: 'ObjectTypeWithNewService' } & {
    objectType: { __typename?: 'ObjectTypeServices' } & Pick<ObjectTypeServices, 'id'>;
    newService: { __typename?: 'Service' } & Pick<Service, 'id'>;
  };
};

export type UpdateObjectTypeServiceMutationVariables = {
  input: UpdateServiceInput;
};

export type UpdateObjectTypeServiceMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeService: { __typename?: 'ObjectTypeServices' } & Pick<
    ObjectTypeServices,
    'id' | 'dateUpdated' | 'servicesDescription'
  > & {
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
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
    };
};

export type UpdateObjectTypeServiceDescriptionMutationVariables = {
  input: ServiceDescriptionInput;
};

export type UpdateObjectTypeServiceDescriptionMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeServiceDescription: { __typename?: 'ObjectTypeServices' } & Pick<ObjectTypeServices, 'id'>;
};

export type AddCadastreMutationVariables = {
  input: AddCadastreInput;
};

export type AddCadastreMutation = { __typename?: 'Mutation' } & {
  addCadastre?: Maybe<
    { __typename?: 'PimWithNewCadastre' } & {
      pim?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
      cadastre?: Maybe<{ __typename?: 'Cadastre' } & Pick<Cadastre, 'id' | 'type'>>;
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
  addPimService?: Maybe<
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
  updatePimService?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddMeterMutationVariables = {
  input: AddMeterInput;
};

export type AddMeterMutation = { __typename?: 'Mutation' } & {
  addPimMeter?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateMeterMutationVariables = {
  input: UpdateMeterInput;
};

export type UpdateMeterMutation = { __typename?: 'Mutation' } & {
  updatePimMeter?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddReadingMutationVariables = {
  input: AddReadingInput;
};

export type AddReadingMutation = { __typename?: 'Mutation' } & {
  addPimReading?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateReadingMutationVariables = {
  input: UpdateReadingInput;
};

export type UpdateReadingMutation = { __typename?: 'Mutation' } & {
  updatePimReading?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
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

export type AddProjectPhaseMutationVariables = {
  input: CreateProjectPhaseInput;
};

export type AddProjectPhaseMutation = { __typename?: 'Mutation' } & {
  addProjectPhase: { __typename?: 'ProjectPhase' } & Pick<ProjectPhase, 'id'>;
};

export type LinkNcpToProjectPhaseMutationVariables = {
  input: LinkNcpToProjectPhaseInput;
};

export type LinkNcpToProjectPhaseMutation = { __typename?: 'Mutation' } & {
  linkNcpToProjectPhase: { __typename?: 'ProjectPhase' } & Pick<ProjectPhase, 'id'>;
};

export type GetLabelsQueryVariables = {
  id: Scalars['ID'];
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

export type NcpCharacteristicsQueryVariables = {
  id: Scalars['ID'];
};

export type NcpCharacteristicsQuery = { __typename?: 'Query' } & {
  getNcpCharacteristics: { __typename?: 'NcpCharacteristics' } & Pick<
    NcpCharacteristics,
    | 'id'
    | 'characteristicsSections'
    | 'accountManagersIds'
    | 'attentionNote'
    | 'dateUpdated'
    | 'characteristicsDescription'
  > & {
      projectMarketing?: Maybe<
        { __typename?: 'ProjectMarketing' } & Pick<
          ProjectMarketing,
          'emailAddress' | 'website' | 'firstColor' | 'secondColor' | 'mainLogoId'
        > & { logos?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>>> }
      >;
      measurements?: Maybe<
        { __typename?: 'Measurements' } & Pick<
          Measurements,
          | 'volumeFrom'
          | 'volumeTo'
          | 'livingSpaceFrom'
          | 'livingSpaceTo'
          | 'plotAreaFrom'
          | 'plotAreaTo'
          | 'calculateAutomatically'
        >
      >;
      energy?: Maybe<
        { __typename?: 'Energy' } & Pick<
          Energy,
          'label' | 'energyIndex' | 'endDateEnergyLabel' | 'EPC' | 'characteristicType' | 'notes'
        >
      >;
      accountManagers?: Maybe<Array<{ __typename?: 'Profile' } & Pick<Profile, 'id'>>>;
      identificationNumbers?: Maybe<
        Array<
          { __typename?: 'IdentificationNumber' } & Pick<
            IdentificationNumber,
            'id' | 'name' | 'number' | 'type' | 'dateCreated'
          >
        >
      >;
      invoiceDetails?: Maybe<
        { __typename?: 'InvoiceDetails' } & Pick<
          InvoiceDetails,
          | 'street'
          | 'houseNumber'
          | 'additionalNumber'
          | 'zipCode'
          | 'city'
          | 'country'
          | 'projectInvoiceNumber'
          | 'contactPerson'
          | 'description'
        >
      >;
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
    };
};

export type NcpGeneralQueryVariables = {
  id: Scalars['ID'];
};

export type NcpGeneralQuery = { __typename?: 'Query' } & {
  getNcp: { __typename?: 'NcpGeneral' } & Pick<
    NcpGeneral,
    | 'id'
    | 'type'
    | 'dateCreated'
    | 'dateUpdated'
    | 'name'
    | 'additionalName'
    | 'street'
    | 'houseNumber'
    | 'additionalHouseNumber'
    | 'zipCode'
    | 'city'
    | 'country'
    | 'objectTypesCount'
    | 'automaticallyCalculateQuantity'
    | 'properties'
    | 'progressStatus'
    | 'startConstruction'
    | 'noteStartConstruction'
    | 'startSale'
    | 'noteStartSale'
    | 'startDelivery'
    | 'noteStartDelivery'
    | 'startConstructionAfterPresalePercentage'
    | 'projectRisk'
    | 'notes'
    | 'archived'
  > & { lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>> };
};

export type NcpWithSameAddressQueryVariables = {
  input: NcpWithSameAddressInput;
};

export type NcpWithSameAddressQuery = { __typename?: 'Query' } & {
  getNcpWithSameAddress: { __typename?: 'NcpSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    items?: Maybe<Array<{ __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id'>>>;
  };
};

export type NcpGeneralOverallInfoQueryVariables = {
  id: Scalars['ID'];
};

export type NcpGeneralOverallInfoQuery = { __typename?: 'Query' } & {
  project: { __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id' | 'name'>;
  objectTypes: { __typename?: 'ObjectTypeListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  linkedProperties: { __typename?: 'NcpLinkedPims' } & {
    linkedProperties: { __typename?: 'PimListSearchResult' } & {
      metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    };
  };
};

export type GetNcpLabelsQueryVariables = {
  id: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty>>;
};

export type GetNcpLabelsQuery = { __typename?: 'Query' } & {
  getNcpLabels?: Maybe<Array<{ __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'icon' | 'text'>>>;
};

export type ListNcpsCountQueryVariables = {};

export type ListNcpsCountQuery = { __typename?: 'Query' } & {
  activeCount: { __typename?: 'NcpListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  archivedCount: { __typename?: 'NcpListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type ListNcpsQueryVariables = {
  archived: Scalars['Boolean'];
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
};

export type ListNcpsQuery = { __typename?: 'Query' } & {
  listNcps: { __typename?: 'NcpListSearchResult' } & {
    items?: Maybe<
      Array<
        { __typename?: 'ListNcp' } & Pick<
          ListNcp,
          | 'id'
          | 'dateCreated'
          | 'dateUpdated'
          | 'archived'
          | 'areaRangeFrom'
          | 'areaRangeTo'
          | 'numberOfRoomsFrom'
          | 'numberOfRoomsTo'
          | 'name'
          | 'salePriceFrom'
          | 'salePriceTo'
          | 'rentPriceFrom'
          | 'rentPriceTo'
          | 'saleLabel'
          | 'rentLabel'
          | 'partOfPhase'
          | 'soldNumber'
          | 'rentNumber'
          | 'completeness'
          | 'available'
          | 'underOption'
          | 'soldOrRent'
          | 'matches'
          | 'interests'
          | 'candidates'
          | 'optants'
          | 'properties'
          | 'objectTypesCount'
          | 'attentionNote'
        > & {
            logoPicture?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
            mainPicture?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
          }
      >
    >;
  };
};

export type NcpMediaQueryVariables = {
  id: Scalars['ID'];
  picturesSort?: Maybe<Sort>;
};

export type NcpMediaQuery = { __typename?: 'Query' } & {
  getNcpMedia: { __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id' | 'mediaDescription' | 'dateUpdated'> & {
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

export type NcpPricesPricingQueryVariables = {
  id: Scalars['ID'];
};

export type NcpPricesPricingQuery = { __typename?: 'Query' } & {
  getNcpPrices: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'> & {
      pricing?: Maybe<
        { __typename?: 'CommonPricing' } & Pick<CommonPricing, 'dateUpdated' | 'description'> & {
            rent?: Maybe<
              { __typename?: 'CommonRentInformations' } & Pick<
                CommonRentInformations,
                'minPrice' | 'maxPrice' | 'isEnabled' | 'calculateAutomatically'
              >
            >;
            sale?: Maybe<
              { __typename?: 'CommonSaleInformations' } & Pick<
                CommonSaleInformations,
                'minPrice' | 'maxPrice' | 'isEnabled' | 'calculateAutomatically'
              >
            >;
            lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
          }
      >;
    };
};

export type NcpPricesCostsQueryVariables = {
  id: Scalars['ID'];
};

export type NcpPricesCostsQuery = { __typename?: 'Query' } & {
  getNcpPrices: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'> & {
      costs?: Maybe<
        { __typename?: 'CommonCosts' } & Pick<CommonCosts, 'description' | 'dateUpdated'> & {
            costs?: Maybe<
              Array<
                { __typename?: 'CommonCost' } & Pick<
                  CommonCost,
                  | 'id'
                  | 'serviceCostsFrom'
                  | 'serviceCostsTill'
                  | 'paymentsFrequency'
                  | 'vatTaxedServiceCostsFrom'
                  | 'vatTaxedServiceCostsTill'
                  | 'vatPercentage'
                  | 'notes'
                  | 'type'
                  | 'name'
                  | 'dateCreated'
                >
              >
            >;
            lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
          }
      >;
    };
};

export type NcpPricesInterestsQueryVariables = {
  id: Scalars['ID'];
};

export type NcpPricesInterestsQuery = { __typename?: 'Query' } & {
  getNcpPrices: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'> & {
      interests?: Maybe<
        { __typename?: 'Interests' } & Pick<
          Interests,
          | 'groundInterest'
          | 'buildingInterest'
          | 'rentedagen'
          | 'suspensiveCondition'
          | 'description'
          | 'dateCreated'
          | 'dateUpdated'
        > & { lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>> }
      >;
    };
};

export type ListNcpLinkedPimsCountQueryVariables = {
  id: Scalars['ID'];
};

export type ListNcpLinkedPimsCountQuery = { __typename?: 'Query' } & {
  activeCount: { __typename?: 'NcpLinkedPims' } & {
    linkedProperties: { __typename?: 'PimListSearchResult' } & {
      metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    };
  };
  archivedCount: { __typename?: 'NcpLinkedPims' } & {
    linkedProperties: { __typename?: 'PimListSearchResult' } & {
      metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    };
  };
};

export type NcpLinkedPimsQueryVariables = {
  id: Scalars['ID'];
  archived?: Maybe<Scalars['Boolean']>;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
};

export type NcpLinkedPimsQuery = { __typename?: 'Query' } & {
  getNcpLinkedPims: { __typename?: 'NcpLinkedPims' } & Pick<
    NcpLinkedPims,
    'linkedPropertiesIds' | 'description' | 'dateUpdated'
  > & {
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
      linkedProperties: { __typename?: 'PimListSearchResult' } & {
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
              | 'postalCode'
              | 'country'
              | 'status'
              | 'developmentType'
              | 'linkedObjectTypeIds'
            > & { images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>> }
          >
        >;
      };
    };
};

export type GetNcpServicesQueryVariables = {
  id: Scalars['ID'];
};

export type GetNcpServicesQuery = { __typename?: 'Query' } & {
  getNcpServices: { __typename?: 'NcpServices' } & Pick<NcpServices, 'id' | 'dateUpdated' | 'servicesDescription'> & {
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
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
    };
};

export type ObjectTypeCharacteristicsQueryVariables = {
  id: Scalars['ID'];
};

export type ObjectTypeCharacteristicsQuery = { __typename?: 'Query' } & {
  getObjectTypeCharacteristics: { __typename?: 'ObjectTypeCharacteristics' } & Pick<
    ObjectTypeCharacteristics,
    | 'id'
    | 'characteristicsSections'
    | 'accountManagersIds'
    | 'attentionNote'
    | 'dateUpdated'
    | 'characteristicsDescription'
    | 'type'
    | 'automaticallySetObjectTypes'
  > & {
      projectMarketing?: Maybe<
        { __typename?: 'ProjectMarketing' } & Pick<
          ProjectMarketing,
          'emailAddress' | 'website' | 'firstColor' | 'secondColor' | 'mainLogoId'
        > & { logos?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>>> }
      >;
      measurements?: Maybe<
        { __typename?: 'Measurements' } & Pick<
          Measurements,
          | 'volumeFrom'
          | 'volumeTo'
          | 'livingSpaceFrom'
          | 'livingSpaceTo'
          | 'plotAreaFrom'
          | 'plotAreaTo'
          | 'calculateAutomatically'
        >
      >;
      energy?: Maybe<
        { __typename?: 'Energy' } & Pick<
          Energy,
          'label' | 'energyIndex' | 'endDateEnergyLabel' | 'EPC' | 'characteristicType' | 'notes'
        >
      >;
      accountManagers?: Maybe<Array<{ __typename?: 'Profile' } & Pick<Profile, 'id'>>>;
      identificationNumbers?: Maybe<
        Array<
          { __typename?: 'IdentificationNumber' } & Pick<
            IdentificationNumber,
            'id' | 'name' | 'number' | 'type' | 'dateCreated'
          >
        >
      >;
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
    };
};

export type GetObjectTypeGeneralQueryVariables = {
  id: Scalars['ID'];
};

export type GetObjectTypeGeneralQuery = { __typename?: 'Query' } & {
  getObjectTypeGeneral: { __typename?: 'ObjectTypeGeneral' } & Pick<
    ObjectTypeGeneral,
    'id' | 'name' | 'dateUpdated' | 'ncpId'
  > & { lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>> };
};

export type ObjectTypeOverallInfoQueryVariables = {
  id: Scalars['ID'];
  projectId: Scalars['ID'];
};

export type ObjectTypeOverallInfoQuery = { __typename?: 'Query' } & {
  objectType: { __typename?: 'ObjectTypeGeneral' } & Pick<ObjectTypeGeneral, 'id' | 'name'>;
  project: { __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id' | 'name'>;
  linkedProperty: { __typename?: 'ObjectTypeLinkedPims' } & {
    linkedProperties: { __typename?: 'PimListSearchResult' } & {
      metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    };
  };
};

export type GetObjectTypeLabelsQueryVariables = {
  id: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty>>;
};

export type GetObjectTypeLabelsQuery = { __typename?: 'Query' } & {
  getObjectTypeLabels?: Maybe<Array<{ __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'icon' | 'text'>>>;
};

export type ListObjectTypesCountQueryVariables = {
  ncpId: Scalars['ID'];
};

export type ListObjectTypesCountQuery = { __typename?: 'Query' } & {
  activeCount: { __typename?: 'ObjectTypeListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  archivedCount: { __typename?: 'ObjectTypeListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type ListObjectTypesQueryVariables = {
  ncpId: Scalars['ID'];
  archived?: Maybe<Scalars['Boolean']>;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
};

export type ListObjectTypesQuery = { __typename?: 'Query' } & {
  listObjectTypes: { __typename?: 'ObjectTypeListSearchResult' } & {
    items?: Maybe<
      Array<
        { __typename?: 'ListObjectTypes' } & Pick<
          ListObjectTypes,
          | 'id'
          | 'ncpId'
          | 'dateCreated'
          | 'dateUpdated'
          | 'archived'
          | 'areaRangeFrom'
          | 'areaRangeTo'
          | 'numberOfRoomsFrom'
          | 'numberOfRoomsTo'
          | 'name'
          | 'salePriceFrom'
          | 'salePriceTo'
          | 'rentPriceFrom'
          | 'rentPriceTo'
          | 'saleLabel'
          | 'rentLabel'
          | 'partOfPhase'
          | 'completeness'
          | 'matches'
          | 'interests'
          | 'propertiesConnected'
          | 'propertiesAvailable'
          | 'underOption'
          | 'soldOrRent'
          | 'attentionNote'
        > & { mainPicture?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>> }
      >
    >;
  };
};

export type ObjectTypeListDescriptionQueryVariables = {
  id: Scalars['ID'];
};

export type ObjectTypeListDescriptionQuery = { __typename?: 'Query' } & {
  getNcp: { __typename?: 'NcpGeneral' } & Pick<
    NcpGeneral,
    'objectTypesListDescription' | 'objectTypesListLastUpdatedOn'
  > & {
      objectTypesListLastUpdatedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
    };
};

export type ObjectTypeMediaQueryVariables = {
  id: Scalars['ID'];
  picturesSort?: Maybe<Sort>;
};

export type ObjectTypeMediaQuery = { __typename?: 'Query' } & {
  getObjectTypeMedia: { __typename?: 'ObjectTypeMedia' } & Pick<
    ObjectTypeMedia,
    'id' | 'mediaDescription' | 'dateUpdated'
  > & {
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

export type ObjectTypePricesPricingQueryVariables = {
  id: Scalars['ID'];
};

export type ObjectTypePricesPricingQuery = { __typename?: 'Query' } & {
  getObjectTypePrices: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'> & {
      pricing?: Maybe<
        { __typename?: 'CommonPricing' } & Pick<CommonPricing, 'dateUpdated' | 'description'> & {
            rent?: Maybe<
              { __typename?: 'CommonRentInformations' } & Pick<
                CommonRentInformations,
                'minPrice' | 'maxPrice' | 'isEnabled' | 'calculateAutomatically'
              >
            >;
            sale?: Maybe<
              { __typename?: 'CommonSaleInformations' } & Pick<
                CommonSaleInformations,
                'minPrice' | 'maxPrice' | 'isEnabled' | 'calculateAutomatically'
              >
            >;
            lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
          }
      >;
    };
};

export type ObjectTypePricesCostsQueryVariables = {
  id: Scalars['ID'];
};

export type ObjectTypePricesCostsQuery = { __typename?: 'Query' } & {
  getObjectTypePrices: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'> & {
      costs?: Maybe<
        { __typename?: 'CommonCosts' } & Pick<CommonCosts, 'description' | 'dateUpdated'> & {
            costs?: Maybe<
              Array<
                { __typename?: 'CommonCost' } & Pick<
                  CommonCost,
                  | 'id'
                  | 'serviceCostsFrom'
                  | 'serviceCostsTill'
                  | 'paymentsFrequency'
                  | 'vatTaxedServiceCostsFrom'
                  | 'vatTaxedServiceCostsTill'
                  | 'vatPercentage'
                  | 'notes'
                  | 'type'
                  | 'name'
                  | 'dateCreated'
                >
              >
            >;
            lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
          }
      >;
    };
};

export type GetObjectTypeServicesQueryVariables = {
  id: Scalars['ID'];
};

export type GetObjectTypeServicesQuery = { __typename?: 'Query' } & {
  getObjectTypeServices: { __typename?: 'ObjectTypeServices' } & Pick<
    ObjectTypeServices,
    'id' | 'dateUpdated' | 'servicesDescription'
  > & {
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
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
    };
};

export type ListObjectTypeLinkedPimsCountQueryVariables = {
  id: Scalars['ID'];
};

export type ListObjectTypeLinkedPimsCountQuery = { __typename?: 'Query' } & {
  activeCount: { __typename?: 'ObjectTypeLinkedPims' } & {
    linkedProperties: { __typename?: 'PimListSearchResult' } & {
      metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    };
  };
  archivedCount: { __typename?: 'ObjectTypeLinkedPims' } & {
    linkedProperties: { __typename?: 'PimListSearchResult' } & {
      metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    };
  };
};

export type ObjectTypeLinkedPimsQueryVariables = {
  id: Scalars['ID'];
  archived?: Maybe<Scalars['Boolean']>;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
};

export type ObjectTypeLinkedPimsQuery = { __typename?: 'Query' } & {
  getObjectTypeLinkedPims: { __typename?: 'ObjectTypeLinkedPims' } & Pick<
    ObjectTypeLinkedPims,
    'linkedPropertiesIds' | 'description' | 'dateUpdated'
  > & {
      lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
      linkedProperties: { __typename?: 'PimListSearchResult' } & {
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
              | 'postalCode'
              | 'country'
              | 'status'
              | 'developmentType'
              | 'linkedObjectTypeIds'
            > & { images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>> }
          >
        >;
      };
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
                  > & { file?: Maybe<{ __typename?: 'File' } & Pick<File, 'key' | 'id' | 'fileName'>> }
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

export type PimWithSameAddressQueryVariables = {
  input: PimWithSameAddressInput;
};

export type PimWithSameAddressQuery = { __typename?: 'Query' } & {
  getPimsGeneralWithSameAddress: { __typename?: 'GeneralPimSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    items?: Maybe<Array<{ __typename?: 'PimGeneral' } & Pick<PimGeneral, 'id'>>>;
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
      metersMeta?: Maybe<
        { __typename?: 'MetersMeta' } & {
          Water?: Maybe<
            { __typename?: 'MetersSharedData' } & Pick<MetersSharedData, 'description' | 'dateUpdated'> & {
                lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
              }
          >;
          Gas?: Maybe<
            { __typename?: 'MetersSharedData' } & Pick<MetersSharedData, 'description' | 'dateUpdated'> & {
                lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
              }
          >;
          Electric?: Maybe<
            { __typename?: 'MetersSharedData' } & Pick<MetersSharedData, 'description' | 'dateUpdated'> & {
                lastEditedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
              }
          >;
        }
      >;
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

export type ProjectPhasesQueryVariables = {
  name?: Maybe<Scalars['String']>;
  ncpId?: Maybe<Scalars['ID']>;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
};

export type ProjectPhasesQuery = { __typename?: 'Query' } & {
  getProjectPhases: { __typename?: 'ProjectPhaseSearchResult' } & {
    items?: Maybe<
      Array<
        { __typename?: 'ProjectPhase' } & Pick<ProjectPhase, 'id' | 'name' | 'ncpIds'> & {
            logo?: Maybe<
              { __typename?: 'File' } & Pick<
                File,
                | 'id'
                | 'fileName'
                | 'description'
                | 'status'
                | 'fileType'
                | 'permission'
                | 'key'
                | 'createdAt'
                | 'signedUrl'
                | 'url'
                | 'bucket'
                | 'entityID'
                | 'entity'
              >
            >;
          }
      >
    >;
  };
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
export const RemoveFilesDocument = gql`
  mutation RemoveFiles($input: RemoveFilesInput!) {
    removeFiles(input: $input) {
      id
    }
  }
`;
export function useRemoveFilesMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveFilesMutation, RemoveFilesMutationVariables>,
) {
  return ApolloReactHooks.useMutation<RemoveFilesMutation, RemoveFilesMutationVariables>(
    RemoveFilesDocument,
    baseOptions,
  );
}
export type RemoveFilesMutationHookResult = ReturnType<typeof useRemoveFilesMutation>;
export type RemoveFilesMutationResult = ApolloReactCommon.MutationResult<RemoveFilesMutation>;
export type RemoveFilesMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveFilesMutation,
  RemoveFilesMutationVariables
>;
export const AddIdentificationNumberPimDocument = gql`
  mutation AddIdentificationNumberPim($input: AddIdentificationNumberInput!) {
    addIdentificationNumberPim(input: $input) {
      newIdentificationNumber {
        id
      }
    }
  }
`;
export function useAddIdentificationNumberPimMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddIdentificationNumberPimMutation,
    AddIdentificationNumberPimMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddIdentificationNumberPimMutation, AddIdentificationNumberPimMutationVariables>(
    AddIdentificationNumberPimDocument,
    baseOptions,
  );
}
export type AddIdentificationNumberPimMutationHookResult = ReturnType<typeof useAddIdentificationNumberPimMutation>;
export type AddIdentificationNumberPimMutationResult = ApolloReactCommon.MutationResult<
  AddIdentificationNumberPimMutation
>;
export type AddIdentificationNumberPimMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddIdentificationNumberPimMutation,
  AddIdentificationNumberPimMutationVariables
>;
export const UpdateIdentificationNumberPimDocument = gql`
  mutation UpdateIdentificationNumberPim($input: UpdateIdentificationNumberInput!) {
    updateIdentificationNumberPim(input: $input) {
      id
    }
  }
`;
export function useUpdateIdentificationNumberPimMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateIdentificationNumberPimMutation,
    UpdateIdentificationNumberPimMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateIdentificationNumberPimMutation,
    UpdateIdentificationNumberPimMutationVariables
  >(UpdateIdentificationNumberPimDocument, baseOptions);
}
export type UpdateIdentificationNumberPimMutationHookResult = ReturnType<
  typeof useUpdateIdentificationNumberPimMutation
>;
export type UpdateIdentificationNumberPimMutationResult = ApolloReactCommon.MutationResult<
  UpdateIdentificationNumberPimMutation
>;
export type UpdateIdentificationNumberPimMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateIdentificationNumberPimMutation,
  UpdateIdentificationNumberPimMutationVariables
>;
export const AddIdentificationNumberNcpDocument = gql`
  mutation AddIdentificationNumberNcp($input: AddIdentificationNumberInput!) {
    addIdentificationNumberNcp(input: $input) {
      newIdentificationNumber {
        id
      }
    }
  }
`;
export function useAddIdentificationNumberNcpMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddIdentificationNumberNcpMutation,
    AddIdentificationNumberNcpMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddIdentificationNumberNcpMutation, AddIdentificationNumberNcpMutationVariables>(
    AddIdentificationNumberNcpDocument,
    baseOptions,
  );
}
export type AddIdentificationNumberNcpMutationHookResult = ReturnType<typeof useAddIdentificationNumberNcpMutation>;
export type AddIdentificationNumberNcpMutationResult = ApolloReactCommon.MutationResult<
  AddIdentificationNumberNcpMutation
>;
export type AddIdentificationNumberNcpMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddIdentificationNumberNcpMutation,
  AddIdentificationNumberNcpMutationVariables
>;
export const UpdateIdentificationNumberNcpDocument = gql`
  mutation UpdateIdentificationNumberNcp($input: UpdateIdentificationNumberInput!) {
    updateIdentificationNumberNcp(input: $input) {
      id
    }
  }
`;
export function useUpdateIdentificationNumberNcpMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateIdentificationNumberNcpMutation,
    UpdateIdentificationNumberNcpMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateIdentificationNumberNcpMutation,
    UpdateIdentificationNumberNcpMutationVariables
  >(UpdateIdentificationNumberNcpDocument, baseOptions);
}
export type UpdateIdentificationNumberNcpMutationHookResult = ReturnType<
  typeof useUpdateIdentificationNumberNcpMutation
>;
export type UpdateIdentificationNumberNcpMutationResult = ApolloReactCommon.MutationResult<
  UpdateIdentificationNumberNcpMutation
>;
export type UpdateIdentificationNumberNcpMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateIdentificationNumberNcpMutation,
  UpdateIdentificationNumberNcpMutationVariables
>;
export const AddIdentificationNumberObjectTypeDocument = gql`
  mutation AddIdentificationNumberObjectType($input: AddIdentificationNumberInput!) {
    addIdentificationNumberObjectType(input: $input) {
      newIdentificationNumber {
        id
      }
    }
  }
`;
export function useAddIdentificationNumberObjectTypeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddIdentificationNumberObjectTypeMutation,
    AddIdentificationNumberObjectTypeMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    AddIdentificationNumberObjectTypeMutation,
    AddIdentificationNumberObjectTypeMutationVariables
  >(AddIdentificationNumberObjectTypeDocument, baseOptions);
}
export type AddIdentificationNumberObjectTypeMutationHookResult = ReturnType<
  typeof useAddIdentificationNumberObjectTypeMutation
>;
export type AddIdentificationNumberObjectTypeMutationResult = ApolloReactCommon.MutationResult<
  AddIdentificationNumberObjectTypeMutation
>;
export type AddIdentificationNumberObjectTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddIdentificationNumberObjectTypeMutation,
  AddIdentificationNumberObjectTypeMutationVariables
>;
export const UpdateIdentificationNumberObjectTypeDocument = gql`
  mutation UpdateIdentificationNumberObjectType($input: UpdateIdentificationNumberInput!) {
    updateIdentificationNumberObjectType(input: $input) {
      id
    }
  }
`;
export function useUpdateIdentificationNumberObjectTypeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateIdentificationNumberObjectTypeMutation,
    UpdateIdentificationNumberObjectTypeMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateIdentificationNumberObjectTypeMutation,
    UpdateIdentificationNumberObjectTypeMutationVariables
  >(UpdateIdentificationNumberObjectTypeDocument, baseOptions);
}
export type UpdateIdentificationNumberObjectTypeMutationHookResult = ReturnType<
  typeof useUpdateIdentificationNumberObjectTypeMutation
>;
export type UpdateIdentificationNumberObjectTypeMutationResult = ApolloReactCommon.MutationResult<
  UpdateIdentificationNumberObjectTypeMutation
>;
export type UpdateIdentificationNumberObjectTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateIdentificationNumberObjectTypeMutation,
  UpdateIdentificationNumberObjectTypeMutationVariables
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
export const UpdateNcpCharacteristicsDocument = gql`
  mutation UpdateNcpCharacteristics($input: NcpCharacteristicsInput!) {
    updateNcpCharacteristics(input: $input) {
      id
      measurements {
        volumeFrom
        volumeTo
        livingSpaceFrom
        livingSpaceTo
        plotAreaFrom
        plotAreaTo
        calculateAutomatically
      }
    }
  }
`;
export function useUpdateNcpCharacteristicsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateNcpCharacteristicsMutation,
    UpdateNcpCharacteristicsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateNcpCharacteristicsMutation, UpdateNcpCharacteristicsMutationVariables>(
    UpdateNcpCharacteristicsDocument,
    baseOptions,
  );
}
export type UpdateNcpCharacteristicsMutationHookResult = ReturnType<typeof useUpdateNcpCharacteristicsMutation>;
export type UpdateNcpCharacteristicsMutationResult = ApolloReactCommon.MutationResult<UpdateNcpCharacteristicsMutation>;
export type UpdateNcpCharacteristicsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpCharacteristicsMutation,
  UpdateNcpCharacteristicsMutationVariables
>;
export const SetNcpCharacteristicsDocument = gql`
  mutation SetNcpCharacteristics($input: SetCharacteristicsSectionsInput!) {
    setNcpCharacteristics(input: $input) {
      id
    }
  }
`;
export function useSetNcpCharacteristicsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SetNcpCharacteristicsMutation,
    SetNcpCharacteristicsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<SetNcpCharacteristicsMutation, SetNcpCharacteristicsMutationVariables>(
    SetNcpCharacteristicsDocument,
    baseOptions,
  );
}
export type SetNcpCharacteristicsMutationHookResult = ReturnType<typeof useSetNcpCharacteristicsMutation>;
export type SetNcpCharacteristicsMutationResult = ApolloReactCommon.MutationResult<SetNcpCharacteristicsMutation>;
export type SetNcpCharacteristicsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SetNcpCharacteristicsMutation,
  SetNcpCharacteristicsMutationVariables
>;
export const CreateNcpDocument = gql`
  mutation CreateNcp($input: CreateNcpInput!) {
    createNcp(input: $input) {
      id
    }
  }
`;
export function useCreateNcpMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateNcpMutation, CreateNcpMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateNcpMutation, CreateNcpMutationVariables>(CreateNcpDocument, baseOptions);
}
export type CreateNcpMutationHookResult = ReturnType<typeof useCreateNcpMutation>;
export type CreateNcpMutationResult = ApolloReactCommon.MutationResult<CreateNcpMutation>;
export type CreateNcpMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateNcpMutation,
  CreateNcpMutationVariables
>;
export const UpdateNcpDocument = gql`
  mutation updateNcp($input: UpdateNcpInput!) {
    updateNcp(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNcpMutation, UpdateNcpMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateNcpMutation, UpdateNcpMutationVariables>(UpdateNcpDocument, baseOptions);
}
export type UpdateNcpMutationHookResult = ReturnType<typeof useUpdateNcpMutation>;
export type UpdateNcpMutationResult = ApolloReactCommon.MutationResult<UpdateNcpMutation>;
export type UpdateNcpMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpMutation,
  UpdateNcpMutationVariables
>;
export const AddNcpLabelDocument = gql`
  mutation AddNcpLabel($input: LabelInput!) {
    addNcpLabel(input: $input) {
      id
      property
      text
      icon
    }
  }
`;
export function useAddNcpLabelMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddNcpLabelMutation, AddNcpLabelMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddNcpLabelMutation, AddNcpLabelMutationVariables>(
    AddNcpLabelDocument,
    baseOptions,
  );
}
export type AddNcpLabelMutationHookResult = ReturnType<typeof useAddNcpLabelMutation>;
export type AddNcpLabelMutationResult = ApolloReactCommon.MutationResult<AddNcpLabelMutation>;
export type AddNcpLabelMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddNcpLabelMutation,
  AddNcpLabelMutationVariables
>;
export const UpdateNcpMediaDescriptionDocument = gql`
  mutation UpdateNcpMediaDescription($input: CommonUpdateMediaDescriptionInput!) {
    updateNcpMediaDescription(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpMediaDescriptionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateNcpMediaDescriptionMutation,
    UpdateNcpMediaDescriptionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateNcpMediaDescriptionMutation, UpdateNcpMediaDescriptionMutationVariables>(
    UpdateNcpMediaDescriptionDocument,
    baseOptions,
  );
}
export type UpdateNcpMediaDescriptionMutationHookResult = ReturnType<typeof useUpdateNcpMediaDescriptionMutation>;
export type UpdateNcpMediaDescriptionMutationResult = ApolloReactCommon.MutationResult<
  UpdateNcpMediaDescriptionMutation
>;
export type UpdateNcpMediaDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpMediaDescriptionMutation,
  UpdateNcpMediaDescriptionMutationVariables
>;
export const AddNcpPicturesDocument = gql`
  mutation AddNcpPictures($input: CommonAddPicturesInput!) {
    addNcpPictures(input: $input) {
      id
    }
  }
`;
export function useAddNcpPicturesMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddNcpPicturesMutation, AddNcpPicturesMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddNcpPicturesMutation, AddNcpPicturesMutationVariables>(
    AddNcpPicturesDocument,
    baseOptions,
  );
}
export type AddNcpPicturesMutationHookResult = ReturnType<typeof useAddNcpPicturesMutation>;
export type AddNcpPicturesMutationResult = ApolloReactCommon.MutationResult<AddNcpPicturesMutation>;
export type AddNcpPicturesMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddNcpPicturesMutation,
  AddNcpPicturesMutationVariables
>;
export const UpdateNcpPictureDocument = gql`
  mutation UpdateNcpPicture($input: CommonUpdatePictureInput!) {
    updateNcpPicture(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpPictureMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNcpPictureMutation, UpdateNcpPictureMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateNcpPictureMutation, UpdateNcpPictureMutationVariables>(
    UpdateNcpPictureDocument,
    baseOptions,
  );
}
export type UpdateNcpPictureMutationHookResult = ReturnType<typeof useUpdateNcpPictureMutation>;
export type UpdateNcpPictureMutationResult = ApolloReactCommon.MutationResult<UpdateNcpPictureMutation>;
export type UpdateNcpPictureMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpPictureMutation,
  UpdateNcpPictureMutationVariables
>;
export const AddNcpMediaLinkDocument = gql`
  mutation AddNcpMediaLink($input: CommonAddMediaLinkInput!) {
    addNcpMediaLink(input: $input) {
      id
      mediaLinks {
        id
      }
    }
  }
`;
export function useAddNcpMediaLinkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddNcpMediaLinkMutation, AddNcpMediaLinkMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddNcpMediaLinkMutation, AddNcpMediaLinkMutationVariables>(
    AddNcpMediaLinkDocument,
    baseOptions,
  );
}
export type AddNcpMediaLinkMutationHookResult = ReturnType<typeof useAddNcpMediaLinkMutation>;
export type AddNcpMediaLinkMutationResult = ApolloReactCommon.MutationResult<AddNcpMediaLinkMutation>;
export type AddNcpMediaLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddNcpMediaLinkMutation,
  AddNcpMediaLinkMutationVariables
>;
export const UpdateNcpMediaLinkDocument = gql`
  mutation UpdateNcpMediaLink($input: CommonUpdateMediaLinkInput!) {
    updateNcpMediaLink(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpMediaLinkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNcpMediaLinkMutation, UpdateNcpMediaLinkMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateNcpMediaLinkMutation, UpdateNcpMediaLinkMutationVariables>(
    UpdateNcpMediaLinkDocument,
    baseOptions,
  );
}
export type UpdateNcpMediaLinkMutationHookResult = ReturnType<typeof useUpdateNcpMediaLinkMutation>;
export type UpdateNcpMediaLinkMutationResult = ApolloReactCommon.MutationResult<UpdateNcpMediaLinkMutation>;
export type UpdateNcpMediaLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpMediaLinkMutation,
  UpdateNcpMediaLinkMutationVariables
>;
export const AddNcpTextChapterDocument = gql`
  mutation AddNcpTextChapter($input: CommonAddTextChapterInput!) {
    addNcpTextChapter(input: $input) {
      id
      textChapters {
        id
      }
    }
  }
`;
export function useAddNcpTextChapterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddNcpTextChapterMutation, AddNcpTextChapterMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddNcpTextChapterMutation, AddNcpTextChapterMutationVariables>(
    AddNcpTextChapterDocument,
    baseOptions,
  );
}
export type AddNcpTextChapterMutationHookResult = ReturnType<typeof useAddNcpTextChapterMutation>;
export type AddNcpTextChapterMutationResult = ApolloReactCommon.MutationResult<AddNcpTextChapterMutation>;
export type AddNcpTextChapterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddNcpTextChapterMutation,
  AddNcpTextChapterMutationVariables
>;
export const UpdateNcpTextChapterDocument = gql`
  mutation UpdateNcpTextChapter($input: CommonUpdateTextChapterInput!) {
    updateNcpTextChapter(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpTextChapterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateNcpTextChapterMutation,
    UpdateNcpTextChapterMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateNcpTextChapterMutation, UpdateNcpTextChapterMutationVariables>(
    UpdateNcpTextChapterDocument,
    baseOptions,
  );
}
export type UpdateNcpTextChapterMutationHookResult = ReturnType<typeof useUpdateNcpTextChapterMutation>;
export type UpdateNcpTextChapterMutationResult = ApolloReactCommon.MutationResult<UpdateNcpTextChapterMutation>;
export type UpdateNcpTextChapterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpTextChapterMutation,
  UpdateNcpTextChapterMutationVariables
>;
export const AddNcpUspsDocument = gql`
  mutation AddNcpUsps($input: CommonAddUspsInput!) {
    addNcpUsps(input: $input) {
      id
      usps {
        id
      }
    }
  }
`;
export function useAddNcpUspsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddNcpUspsMutation, AddNcpUspsMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddNcpUspsMutation, AddNcpUspsMutationVariables>(AddNcpUspsDocument, baseOptions);
}
export type AddNcpUspsMutationHookResult = ReturnType<typeof useAddNcpUspsMutation>;
export type AddNcpUspsMutationResult = ApolloReactCommon.MutationResult<AddNcpUspsMutation>;
export type AddNcpUspsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddNcpUspsMutation,
  AddNcpUspsMutationVariables
>;
export const UpdateNcpUspsDocument = gql`
  mutation UpdateNcpUsps($input: CommonUpdateUspsInput!) {
    updateNcpUsps(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpUspsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNcpUspsMutation, UpdateNcpUspsMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateNcpUspsMutation, UpdateNcpUspsMutationVariables>(
    UpdateNcpUspsDocument,
    baseOptions,
  );
}
export type UpdateNcpUspsMutationHookResult = ReturnType<typeof useUpdateNcpUspsMutation>;
export type UpdateNcpUspsMutationResult = ApolloReactCommon.MutationResult<UpdateNcpUspsMutation>;
export type UpdateNcpUspsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpUspsMutation,
  UpdateNcpUspsMutationVariables
>;
export const AddNcpTagDocument = gql`
  mutation AddNcpTag($input: CommonAddTagInput!) {
    addNcpTag(input: $input) {
      id
      tags {
        id
      }
    }
  }
`;
export function useAddNcpTagMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddNcpTagMutation, AddNcpTagMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddNcpTagMutation, AddNcpTagMutationVariables>(AddNcpTagDocument, baseOptions);
}
export type AddNcpTagMutationHookResult = ReturnType<typeof useAddNcpTagMutation>;
export type AddNcpTagMutationResult = ApolloReactCommon.MutationResult<AddNcpTagMutation>;
export type AddNcpTagMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddNcpTagMutation,
  AddNcpTagMutationVariables
>;
export const UpdateNcpTagDocument = gql`
  mutation UpdateNcpTag($input: CommonUpdateTagInput!) {
    updateNcpTag(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpTagMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNcpTagMutation, UpdateNcpTagMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateNcpTagMutation, UpdateNcpTagMutationVariables>(
    UpdateNcpTagDocument,
    baseOptions,
  );
}
export type UpdateNcpTagMutationHookResult = ReturnType<typeof useUpdateNcpTagMutation>;
export type UpdateNcpTagMutationResult = ApolloReactCommon.MutationResult<UpdateNcpTagMutation>;
export type UpdateNcpTagMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpTagMutation,
  UpdateNcpTagMutationVariables
>;
export const ToggleNcpPricingDocument = gql`
  mutation ToggleNcpPricing($input: ToggleCommonPricingInput!) {
    toggleNcpPricing(input: $input) {
      id
    }
  }
`;
export function useToggleNcpPricingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleNcpPricingMutation, ToggleNcpPricingMutationVariables>,
) {
  return ApolloReactHooks.useMutation<ToggleNcpPricingMutation, ToggleNcpPricingMutationVariables>(
    ToggleNcpPricingDocument,
    baseOptions,
  );
}
export type ToggleNcpPricingMutationHookResult = ReturnType<typeof useToggleNcpPricingMutation>;
export type ToggleNcpPricingMutationResult = ApolloReactCommon.MutationResult<ToggleNcpPricingMutation>;
export type ToggleNcpPricingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ToggleNcpPricingMutation,
  ToggleNcpPricingMutationVariables
>;
export const UpdateNcpPricingDocument = gql`
  mutation UpdateNcpPricing($input: UpdateCommonPricingInput!) {
    updateNcpPricing(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpPricingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNcpPricingMutation, UpdateNcpPricingMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateNcpPricingMutation, UpdateNcpPricingMutationVariables>(
    UpdateNcpPricingDocument,
    baseOptions,
  );
}
export type UpdateNcpPricingMutationHookResult = ReturnType<typeof useUpdateNcpPricingMutation>;
export type UpdateNcpPricingMutationResult = ApolloReactCommon.MutationResult<UpdateNcpPricingMutation>;
export type UpdateNcpPricingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpPricingMutation,
  UpdateNcpPricingMutationVariables
>;
export const AddNcpCostDocument = gql`
  mutation AddNcpCost($input: AddCommonCostInput!) {
    addNcpCost(input: $input) {
      id
    }
  }
`;
export function useAddNcpCostMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddNcpCostMutation, AddNcpCostMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddNcpCostMutation, AddNcpCostMutationVariables>(AddNcpCostDocument, baseOptions);
}
export type AddNcpCostMutationHookResult = ReturnType<typeof useAddNcpCostMutation>;
export type AddNcpCostMutationResult = ApolloReactCommon.MutationResult<AddNcpCostMutation>;
export type AddNcpCostMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddNcpCostMutation,
  AddNcpCostMutationVariables
>;
export const UpdateNcpCostDocument = gql`
  mutation UpdateNcpCost($input: UpdateCommonCostInput!) {
    updateNcpCost(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpCostMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNcpCostMutation, UpdateNcpCostMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateNcpCostMutation, UpdateNcpCostMutationVariables>(
    UpdateNcpCostDocument,
    baseOptions,
  );
}
export type UpdateNcpCostMutationHookResult = ReturnType<typeof useUpdateNcpCostMutation>;
export type UpdateNcpCostMutationResult = ApolloReactCommon.MutationResult<UpdateNcpCostMutation>;
export type UpdateNcpCostMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpCostMutation,
  UpdateNcpCostMutationVariables
>;
export const UpdateNcpCostsDetailsDocument = gql`
  mutation UpdateNcpCostsDetails($input: UpdateCommonCostsDetailsInput!) {
    updateNcpCostsDetails(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpCostsDetailsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateNcpCostsDetailsMutation,
    UpdateNcpCostsDetailsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateNcpCostsDetailsMutation, UpdateNcpCostsDetailsMutationVariables>(
    UpdateNcpCostsDetailsDocument,
    baseOptions,
  );
}
export type UpdateNcpCostsDetailsMutationHookResult = ReturnType<typeof useUpdateNcpCostsDetailsMutation>;
export type UpdateNcpCostsDetailsMutationResult = ApolloReactCommon.MutationResult<UpdateNcpCostsDetailsMutation>;
export type UpdateNcpCostsDetailsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpCostsDetailsMutation,
  UpdateNcpCostsDetailsMutationVariables
>;
export const UpdateNcpInterestsDocument = gql`
  mutation UpdateNcpInterests($input: InterestsInput!) {
    updateNcpInterests(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpInterestsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNcpInterestsMutation, UpdateNcpInterestsMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateNcpInterestsMutation, UpdateNcpInterestsMutationVariables>(
    UpdateNcpInterestsDocument,
    baseOptions,
  );
}
export type UpdateNcpInterestsMutationHookResult = ReturnType<typeof useUpdateNcpInterestsMutation>;
export type UpdateNcpInterestsMutationResult = ApolloReactCommon.MutationResult<UpdateNcpInterestsMutation>;
export type UpdateNcpInterestsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpInterestsMutation,
  UpdateNcpInterestsMutationVariables
>;
export const UpdateNcpLinkedPropertiesListDescriptionDocument = gql`
  mutation UpdateNcpLinkedPropertiesListDescription($input: UpdateLinkedPropertiesListDescription!) {
    updateNcpLinkedPropertiesListDescription(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpLinkedPropertiesListDescriptionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateNcpLinkedPropertiesListDescriptionMutation,
    UpdateNcpLinkedPropertiesListDescriptionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateNcpLinkedPropertiesListDescriptionMutation,
    UpdateNcpLinkedPropertiesListDescriptionMutationVariables
  >(UpdateNcpLinkedPropertiesListDescriptionDocument, baseOptions);
}
export type UpdateNcpLinkedPropertiesListDescriptionMutationHookResult = ReturnType<
  typeof useUpdateNcpLinkedPropertiesListDescriptionMutation
>;
export type UpdateNcpLinkedPropertiesListDescriptionMutationResult = ApolloReactCommon.MutationResult<
  UpdateNcpLinkedPropertiesListDescriptionMutation
>;
export type UpdateNcpLinkedPropertiesListDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpLinkedPropertiesListDescriptionMutation,
  UpdateNcpLinkedPropertiesListDescriptionMutationVariables
>;
export const AddNcpServiceDocument = gql`
  mutation AddNcpService($input: AddServiceInput!) {
    addNcpService(input: $input) {
      ncp {
        id
      }
      newService {
        id
      }
    }
  }
`;
export function useAddNcpServiceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddNcpServiceMutation, AddNcpServiceMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddNcpServiceMutation, AddNcpServiceMutationVariables>(
    AddNcpServiceDocument,
    baseOptions,
  );
}
export type AddNcpServiceMutationHookResult = ReturnType<typeof useAddNcpServiceMutation>;
export type AddNcpServiceMutationResult = ApolloReactCommon.MutationResult<AddNcpServiceMutation>;
export type AddNcpServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddNcpServiceMutation,
  AddNcpServiceMutationVariables
>;
export const UpdateNcpServiceDocument = gql`
  mutation UpdateNcpService($input: UpdateServiceInput!) {
    updateNcpService(input: $input) {
      id
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
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
      servicesDescription
    }
  }
`;
export function useUpdateNcpServiceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNcpServiceMutation, UpdateNcpServiceMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateNcpServiceMutation, UpdateNcpServiceMutationVariables>(
    UpdateNcpServiceDocument,
    baseOptions,
  );
}
export type UpdateNcpServiceMutationHookResult = ReturnType<typeof useUpdateNcpServiceMutation>;
export type UpdateNcpServiceMutationResult = ApolloReactCommon.MutationResult<UpdateNcpServiceMutation>;
export type UpdateNcpServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpServiceMutation,
  UpdateNcpServiceMutationVariables
>;
export const UpdateNcpServiceDescriptionDocument = gql`
  mutation UpdateNcpServiceDescription($input: ServiceDescriptionInput!) {
    updateNcpServiceDescription(input: $input) {
      id
    }
  }
`;
export function useUpdateNcpServiceDescriptionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateNcpServiceDescriptionMutation,
    UpdateNcpServiceDescriptionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateNcpServiceDescriptionMutation,
    UpdateNcpServiceDescriptionMutationVariables
  >(UpdateNcpServiceDescriptionDocument, baseOptions);
}
export type UpdateNcpServiceDescriptionMutationHookResult = ReturnType<typeof useUpdateNcpServiceDescriptionMutation>;
export type UpdateNcpServiceDescriptionMutationResult = ApolloReactCommon.MutationResult<
  UpdateNcpServiceDescriptionMutation
>;
export type UpdateNcpServiceDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateNcpServiceDescriptionMutation,
  UpdateNcpServiceDescriptionMutationVariables
>;
export const UpdateObjectTypeCharacteristicsDocument = gql`
  mutation UpdateObjectTypeCharacteristics($input: ObjectTypeCharacteristicsInput!) {
    updateObjectTypeCharacteristics(input: $input) {
      id
      measurements {
        volumeFrom
        volumeTo
        livingSpaceFrom
        livingSpaceTo
        plotAreaFrom
        plotAreaTo
        calculateAutomatically
      }
    }
  }
`;
export function useUpdateObjectTypeCharacteristicsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypeCharacteristicsMutation,
    UpdateObjectTypeCharacteristicsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateObjectTypeCharacteristicsMutation,
    UpdateObjectTypeCharacteristicsMutationVariables
  >(UpdateObjectTypeCharacteristicsDocument, baseOptions);
}
export type UpdateObjectTypeCharacteristicsMutationHookResult = ReturnType<
  typeof useUpdateObjectTypeCharacteristicsMutation
>;
export type UpdateObjectTypeCharacteristicsMutationResult = ApolloReactCommon.MutationResult<
  UpdateObjectTypeCharacteristicsMutation
>;
export type UpdateObjectTypeCharacteristicsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypeCharacteristicsMutation,
  UpdateObjectTypeCharacteristicsMutationVariables
>;
export const SetObjectTypeCharacteristicsSectionsDocument = gql`
  mutation SetObjectTypeCharacteristicsSections($input: SetCharacteristicsSectionsInput!) {
    setObjectTypeCharacteristicsSections(input: $input) {
      id
    }
  }
`;
export function useSetObjectTypeCharacteristicsSectionsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SetObjectTypeCharacteristicsSectionsMutation,
    SetObjectTypeCharacteristicsSectionsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    SetObjectTypeCharacteristicsSectionsMutation,
    SetObjectTypeCharacteristicsSectionsMutationVariables
  >(SetObjectTypeCharacteristicsSectionsDocument, baseOptions);
}
export type SetObjectTypeCharacteristicsSectionsMutationHookResult = ReturnType<
  typeof useSetObjectTypeCharacteristicsSectionsMutation
>;
export type SetObjectTypeCharacteristicsSectionsMutationResult = ApolloReactCommon.MutationResult<
  SetObjectTypeCharacteristicsSectionsMutation
>;
export type SetObjectTypeCharacteristicsSectionsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SetObjectTypeCharacteristicsSectionsMutation,
  SetObjectTypeCharacteristicsSectionsMutationVariables
>;
export const CreateObjectTypeDocument = gql`
  mutation CreateObjectType($input: CreateObjectTypeInput!) {
    createObjectType(input: $input) {
      name
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      ncpId
      id
    }
  }
`;
export function useCreateObjectTypeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateObjectTypeMutation, CreateObjectTypeMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateObjectTypeMutation, CreateObjectTypeMutationVariables>(
    CreateObjectTypeDocument,
    baseOptions,
  );
}
export type CreateObjectTypeMutationHookResult = ReturnType<typeof useCreateObjectTypeMutation>;
export type CreateObjectTypeMutationResult = ApolloReactCommon.MutationResult<CreateObjectTypeMutation>;
export type CreateObjectTypeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateObjectTypeMutation,
  CreateObjectTypeMutationVariables
>;
export const AddObjectTypeLabelDocument = gql`
  mutation AddObjectTypeLabel($input: LabelInput!) {
    addObjectTypeLabel(input: $input) {
      id
      property
      text
      icon
    }
  }
`;
export function useAddObjectTypeLabelMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddObjectTypeLabelMutation, AddObjectTypeLabelMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddObjectTypeLabelMutation, AddObjectTypeLabelMutationVariables>(
    AddObjectTypeLabelDocument,
    baseOptions,
  );
}
export type AddObjectTypeLabelMutationHookResult = ReturnType<typeof useAddObjectTypeLabelMutation>;
export type AddObjectTypeLabelMutationResult = ApolloReactCommon.MutationResult<AddObjectTypeLabelMutation>;
export type AddObjectTypeLabelMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddObjectTypeLabelMutation,
  AddObjectTypeLabelMutationVariables
>;
export const UpdateObjectTypesListDescriptionDocument = gql`
  mutation UpdateObjectTypesListDescription($input: UpdateObjectTypesListDescription!) {
    updateObjectTypesListDescription(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypesListDescriptionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypesListDescriptionMutation,
    UpdateObjectTypesListDescriptionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateObjectTypesListDescriptionMutation,
    UpdateObjectTypesListDescriptionMutationVariables
  >(UpdateObjectTypesListDescriptionDocument, baseOptions);
}
export type UpdateObjectTypesListDescriptionMutationHookResult = ReturnType<
  typeof useUpdateObjectTypesListDescriptionMutation
>;
export type UpdateObjectTypesListDescriptionMutationResult = ApolloReactCommon.MutationResult<
  UpdateObjectTypesListDescriptionMutation
>;
export type UpdateObjectTypesListDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypesListDescriptionMutation,
  UpdateObjectTypesListDescriptionMutationVariables
>;
export const UpdateObjectTypeMediaDescriptionDocument = gql`
  mutation UpdateObjectTypeMediaDescription($input: CommonUpdateMediaDescriptionInput!) {
    updateObjectTypeMediaDescription(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypeMediaDescriptionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypeMediaDescriptionMutation,
    UpdateObjectTypeMediaDescriptionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateObjectTypeMediaDescriptionMutation,
    UpdateObjectTypeMediaDescriptionMutationVariables
  >(UpdateObjectTypeMediaDescriptionDocument, baseOptions);
}
export type UpdateObjectTypeMediaDescriptionMutationHookResult = ReturnType<
  typeof useUpdateObjectTypeMediaDescriptionMutation
>;
export type UpdateObjectTypeMediaDescriptionMutationResult = ApolloReactCommon.MutationResult<
  UpdateObjectTypeMediaDescriptionMutation
>;
export type UpdateObjectTypeMediaDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypeMediaDescriptionMutation,
  UpdateObjectTypeMediaDescriptionMutationVariables
>;
export const AddObjectTypePicturesDocument = gql`
  mutation addObjectTypePictures($input: CommonAddPicturesInput!) {
    addObjectTypePictures(input: $input) {
      id
    }
  }
`;
export function useAddObjectTypePicturesMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddObjectTypePicturesMutation,
    AddObjectTypePicturesMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddObjectTypePicturesMutation, AddObjectTypePicturesMutationVariables>(
    AddObjectTypePicturesDocument,
    baseOptions,
  );
}
export type AddObjectTypePicturesMutationHookResult = ReturnType<typeof useAddObjectTypePicturesMutation>;
export type AddObjectTypePicturesMutationResult = ApolloReactCommon.MutationResult<AddObjectTypePicturesMutation>;
export type AddObjectTypePicturesMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddObjectTypePicturesMutation,
  AddObjectTypePicturesMutationVariables
>;
export const UpdateObjectTypePictureDocument = gql`
  mutation UpdateObjectTypePicture($input: CommonUpdatePictureInput!) {
    updateObjectTypePicture(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypePictureMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypePictureMutation,
    UpdateObjectTypePictureMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateObjectTypePictureMutation, UpdateObjectTypePictureMutationVariables>(
    UpdateObjectTypePictureDocument,
    baseOptions,
  );
}
export type UpdateObjectTypePictureMutationHookResult = ReturnType<typeof useUpdateObjectTypePictureMutation>;
export type UpdateObjectTypePictureMutationResult = ApolloReactCommon.MutationResult<UpdateObjectTypePictureMutation>;
export type UpdateObjectTypePictureMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypePictureMutation,
  UpdateObjectTypePictureMutationVariables
>;
export const AddObjectTypeMediaLinkDocument = gql`
  mutation AddObjectTypeMediaLink($input: CommonAddMediaLinkInput!) {
    addObjectTypeMediaLink(input: $input) {
      id
      mediaLinks {
        id
      }
    }
  }
`;
export function useAddObjectTypeMediaLinkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddObjectTypeMediaLinkMutation,
    AddObjectTypeMediaLinkMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddObjectTypeMediaLinkMutation, AddObjectTypeMediaLinkMutationVariables>(
    AddObjectTypeMediaLinkDocument,
    baseOptions,
  );
}
export type AddObjectTypeMediaLinkMutationHookResult = ReturnType<typeof useAddObjectTypeMediaLinkMutation>;
export type AddObjectTypeMediaLinkMutationResult = ApolloReactCommon.MutationResult<AddObjectTypeMediaLinkMutation>;
export type AddObjectTypeMediaLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddObjectTypeMediaLinkMutation,
  AddObjectTypeMediaLinkMutationVariables
>;
export const UpdateObjectTypeMediaLinkDocument = gql`
  mutation UpdateObjectTypeMediaLink($input: CommonUpdateMediaLinkInput!) {
    updateObjectTypeMediaLink(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypeMediaLinkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypeMediaLinkMutation,
    UpdateObjectTypeMediaLinkMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateObjectTypeMediaLinkMutation, UpdateObjectTypeMediaLinkMutationVariables>(
    UpdateObjectTypeMediaLinkDocument,
    baseOptions,
  );
}
export type UpdateObjectTypeMediaLinkMutationHookResult = ReturnType<typeof useUpdateObjectTypeMediaLinkMutation>;
export type UpdateObjectTypeMediaLinkMutationResult = ApolloReactCommon.MutationResult<
  UpdateObjectTypeMediaLinkMutation
>;
export type UpdateObjectTypeMediaLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypeMediaLinkMutation,
  UpdateObjectTypeMediaLinkMutationVariables
>;
export const AddObjectTypeTextChapterDocument = gql`
  mutation AddObjectTypeTextChapter($input: CommonAddTextChapterInput!) {
    addObjectTypeTextChapter(input: $input) {
      id
      textChapters {
        id
      }
    }
  }
`;
export function useAddObjectTypeTextChapterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddObjectTypeTextChapterMutation,
    AddObjectTypeTextChapterMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddObjectTypeTextChapterMutation, AddObjectTypeTextChapterMutationVariables>(
    AddObjectTypeTextChapterDocument,
    baseOptions,
  );
}
export type AddObjectTypeTextChapterMutationHookResult = ReturnType<typeof useAddObjectTypeTextChapterMutation>;
export type AddObjectTypeTextChapterMutationResult = ApolloReactCommon.MutationResult<AddObjectTypeTextChapterMutation>;
export type AddObjectTypeTextChapterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddObjectTypeTextChapterMutation,
  AddObjectTypeTextChapterMutationVariables
>;
export const UpdateObjectTypeTextChapterDocument = gql`
  mutation UpdateObjectTypeTextChapter($input: CommonUpdateTextChapterInput!) {
    updateObjectTypeTextChapter(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypeTextChapterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypeTextChapterMutation,
    UpdateObjectTypeTextChapterMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateObjectTypeTextChapterMutation,
    UpdateObjectTypeTextChapterMutationVariables
  >(UpdateObjectTypeTextChapterDocument, baseOptions);
}
export type UpdateObjectTypeTextChapterMutationHookResult = ReturnType<typeof useUpdateObjectTypeTextChapterMutation>;
export type UpdateObjectTypeTextChapterMutationResult = ApolloReactCommon.MutationResult<
  UpdateObjectTypeTextChapterMutation
>;
export type UpdateObjectTypeTextChapterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypeTextChapterMutation,
  UpdateObjectTypeTextChapterMutationVariables
>;
export const AddObjectTypeUspsDocument = gql`
  mutation AddObjectTypeUsps($input: CommonAddUspsInput!) {
    addObjectTypeUsps(input: $input) {
      id
      usps {
        id
      }
    }
  }
`;
export function useAddObjectTypeUspsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddObjectTypeUspsMutation, AddObjectTypeUspsMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddObjectTypeUspsMutation, AddObjectTypeUspsMutationVariables>(
    AddObjectTypeUspsDocument,
    baseOptions,
  );
}
export type AddObjectTypeUspsMutationHookResult = ReturnType<typeof useAddObjectTypeUspsMutation>;
export type AddObjectTypeUspsMutationResult = ApolloReactCommon.MutationResult<AddObjectTypeUspsMutation>;
export type AddObjectTypeUspsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddObjectTypeUspsMutation,
  AddObjectTypeUspsMutationVariables
>;
export const UpdateObjectTypeUspsDocument = gql`
  mutation UpdateObjectTypeUsps($input: CommonUpdateUspsInput!) {
    updateObjectTypeUsps(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypeUspsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypeUspsMutation,
    UpdateObjectTypeUspsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateObjectTypeUspsMutation, UpdateObjectTypeUspsMutationVariables>(
    UpdateObjectTypeUspsDocument,
    baseOptions,
  );
}
export type UpdateObjectTypeUspsMutationHookResult = ReturnType<typeof useUpdateObjectTypeUspsMutation>;
export type UpdateObjectTypeUspsMutationResult = ApolloReactCommon.MutationResult<UpdateObjectTypeUspsMutation>;
export type UpdateObjectTypeUspsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypeUspsMutation,
  UpdateObjectTypeUspsMutationVariables
>;
export const AddObjectTypeTagDocument = gql`
  mutation AddObjectTypeTag($input: CommonAddTagInput!) {
    addObjectTypeTag(input: $input) {
      id
      tags {
        id
      }
    }
  }
`;
export function useAddObjectTypeTagMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddObjectTypeTagMutation, AddObjectTypeTagMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddObjectTypeTagMutation, AddObjectTypeTagMutationVariables>(
    AddObjectTypeTagDocument,
    baseOptions,
  );
}
export type AddObjectTypeTagMutationHookResult = ReturnType<typeof useAddObjectTypeTagMutation>;
export type AddObjectTypeTagMutationResult = ApolloReactCommon.MutationResult<AddObjectTypeTagMutation>;
export type AddObjectTypeTagMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddObjectTypeTagMutation,
  AddObjectTypeTagMutationVariables
>;
export const UpdateObjectTypeTagDocument = gql`
  mutation UpdateObjectTypeTag($input: CommonUpdateTagInput!) {
    updateObjectTypeTag(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypeTagMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateObjectTypeTagMutation, UpdateObjectTypeTagMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateObjectTypeTagMutation, UpdateObjectTypeTagMutationVariables>(
    UpdateObjectTypeTagDocument,
    baseOptions,
  );
}
export type UpdateObjectTypeTagMutationHookResult = ReturnType<typeof useUpdateObjectTypeTagMutation>;
export type UpdateObjectTypeTagMutationResult = ApolloReactCommon.MutationResult<UpdateObjectTypeTagMutation>;
export type UpdateObjectTypeTagMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypeTagMutation,
  UpdateObjectTypeTagMutationVariables
>;
export const ToggleObjectTypePricingDocument = gql`
  mutation ToggleObjectTypePricing($input: ToggleCommonPricingInput!) {
    toggleObjectTypePricing(input: $input) {
      id
    }
  }
`;
export function useToggleObjectTypePricingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ToggleObjectTypePricingMutation,
    ToggleObjectTypePricingMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<ToggleObjectTypePricingMutation, ToggleObjectTypePricingMutationVariables>(
    ToggleObjectTypePricingDocument,
    baseOptions,
  );
}
export type ToggleObjectTypePricingMutationHookResult = ReturnType<typeof useToggleObjectTypePricingMutation>;
export type ToggleObjectTypePricingMutationResult = ApolloReactCommon.MutationResult<ToggleObjectTypePricingMutation>;
export type ToggleObjectTypePricingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ToggleObjectTypePricingMutation,
  ToggleObjectTypePricingMutationVariables
>;
export const UpdateObjectTypePricingDocument = gql`
  mutation UpdateObjectTypePricing($input: UpdateCommonPricingInput!) {
    updateObjectTypePricing(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypePricingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypePricingMutation,
    UpdateObjectTypePricingMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateObjectTypePricingMutation, UpdateObjectTypePricingMutationVariables>(
    UpdateObjectTypePricingDocument,
    baseOptions,
  );
}
export type UpdateObjectTypePricingMutationHookResult = ReturnType<typeof useUpdateObjectTypePricingMutation>;
export type UpdateObjectTypePricingMutationResult = ApolloReactCommon.MutationResult<UpdateObjectTypePricingMutation>;
export type UpdateObjectTypePricingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypePricingMutation,
  UpdateObjectTypePricingMutationVariables
>;
export const AddObjectTypeCostDocument = gql`
  mutation AddObjectTypeCost($input: AddCommonCostInput!) {
    addObjectTypeCost(input: $input) {
      id
    }
  }
`;
export function useAddObjectTypeCostMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddObjectTypeCostMutation, AddObjectTypeCostMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddObjectTypeCostMutation, AddObjectTypeCostMutationVariables>(
    AddObjectTypeCostDocument,
    baseOptions,
  );
}
export type AddObjectTypeCostMutationHookResult = ReturnType<typeof useAddObjectTypeCostMutation>;
export type AddObjectTypeCostMutationResult = ApolloReactCommon.MutationResult<AddObjectTypeCostMutation>;
export type AddObjectTypeCostMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddObjectTypeCostMutation,
  AddObjectTypeCostMutationVariables
>;
export const UpdateObjectTypeCostDocument = gql`
  mutation UpdateObjectTypeCost($input: UpdateCommonCostInput!) {
    updateObjectTypeCost(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypeCostMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypeCostMutation,
    UpdateObjectTypeCostMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateObjectTypeCostMutation, UpdateObjectTypeCostMutationVariables>(
    UpdateObjectTypeCostDocument,
    baseOptions,
  );
}
export type UpdateObjectTypeCostMutationHookResult = ReturnType<typeof useUpdateObjectTypeCostMutation>;
export type UpdateObjectTypeCostMutationResult = ApolloReactCommon.MutationResult<UpdateObjectTypeCostMutation>;
export type UpdateObjectTypeCostMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypeCostMutation,
  UpdateObjectTypeCostMutationVariables
>;
export const UpdateObjectTypeCostsDetailsDocument = gql`
  mutation UpdateObjectTypeCostsDetails($input: UpdateCommonCostsDetailsInput!) {
    updateObjectTypeCostsDetails(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypeCostsDetailsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypeCostsDetailsMutation,
    UpdateObjectTypeCostsDetailsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateObjectTypeCostsDetailsMutation,
    UpdateObjectTypeCostsDetailsMutationVariables
  >(UpdateObjectTypeCostsDetailsDocument, baseOptions);
}
export type UpdateObjectTypeCostsDetailsMutationHookResult = ReturnType<typeof useUpdateObjectTypeCostsDetailsMutation>;
export type UpdateObjectTypeCostsDetailsMutationResult = ApolloReactCommon.MutationResult<
  UpdateObjectTypeCostsDetailsMutation
>;
export type UpdateObjectTypeCostsDetailsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypeCostsDetailsMutation,
  UpdateObjectTypeCostsDetailsMutationVariables
>;
export const SetObjectTypeLinkedPimsDocument = gql`
  mutation SetObjectTypeLinkedPims($input: SetLinkedPimsInput!) {
    setObjectTypeLinkedPims(input: $input) {
      linkedProperties(pagination: { from: 0 }) {
        items {
          id
        }
      }
    }
  }
`;
export function useSetObjectTypeLinkedPimsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SetObjectTypeLinkedPimsMutation,
    SetObjectTypeLinkedPimsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<SetObjectTypeLinkedPimsMutation, SetObjectTypeLinkedPimsMutationVariables>(
    SetObjectTypeLinkedPimsDocument,
    baseOptions,
  );
}
export type SetObjectTypeLinkedPimsMutationHookResult = ReturnType<typeof useSetObjectTypeLinkedPimsMutation>;
export type SetObjectTypeLinkedPimsMutationResult = ApolloReactCommon.MutationResult<SetObjectTypeLinkedPimsMutation>;
export type SetObjectTypeLinkedPimsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SetObjectTypeLinkedPimsMutation,
  SetObjectTypeLinkedPimsMutationVariables
>;
export const UpdateLinkedPropertiesListDescriptionDocument = gql`
  mutation UpdateLinkedPropertiesListDescription($input: UpdateLinkedPropertiesListDescription!) {
    updateLinkedPropertiesListDescription(input: $input) {
      id
    }
  }
`;
export function useUpdateLinkedPropertiesListDescriptionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateLinkedPropertiesListDescriptionMutation,
    UpdateLinkedPropertiesListDescriptionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateLinkedPropertiesListDescriptionMutation,
    UpdateLinkedPropertiesListDescriptionMutationVariables
  >(UpdateLinkedPropertiesListDescriptionDocument, baseOptions);
}
export type UpdateLinkedPropertiesListDescriptionMutationHookResult = ReturnType<
  typeof useUpdateLinkedPropertiesListDescriptionMutation
>;
export type UpdateLinkedPropertiesListDescriptionMutationResult = ApolloReactCommon.MutationResult<
  UpdateLinkedPropertiesListDescriptionMutation
>;
export type UpdateLinkedPropertiesListDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateLinkedPropertiesListDescriptionMutation,
  UpdateLinkedPropertiesListDescriptionMutationVariables
>;
export const AddObjectTypeServiceDocument = gql`
  mutation AddObjectTypeService($input: AddServiceInput!) {
    addObjectTypeService(input: $input) {
      objectType {
        id
      }
      newService {
        id
      }
    }
  }
`;
export function useAddObjectTypeServiceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AddObjectTypeServiceMutation,
    AddObjectTypeServiceMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AddObjectTypeServiceMutation, AddObjectTypeServiceMutationVariables>(
    AddObjectTypeServiceDocument,
    baseOptions,
  );
}
export type AddObjectTypeServiceMutationHookResult = ReturnType<typeof useAddObjectTypeServiceMutation>;
export type AddObjectTypeServiceMutationResult = ApolloReactCommon.MutationResult<AddObjectTypeServiceMutation>;
export type AddObjectTypeServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddObjectTypeServiceMutation,
  AddObjectTypeServiceMutationVariables
>;
export const UpdateObjectTypeServiceDocument = gql`
  mutation UpdateObjectTypeService($input: UpdateServiceInput!) {
    updateObjectTypeService(input: $input) {
      id
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
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
      servicesDescription
    }
  }
`;
export function useUpdateObjectTypeServiceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypeServiceMutation,
    UpdateObjectTypeServiceMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateObjectTypeServiceMutation, UpdateObjectTypeServiceMutationVariables>(
    UpdateObjectTypeServiceDocument,
    baseOptions,
  );
}
export type UpdateObjectTypeServiceMutationHookResult = ReturnType<typeof useUpdateObjectTypeServiceMutation>;
export type UpdateObjectTypeServiceMutationResult = ApolloReactCommon.MutationResult<UpdateObjectTypeServiceMutation>;
export type UpdateObjectTypeServiceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypeServiceMutation,
  UpdateObjectTypeServiceMutationVariables
>;
export const UpdateObjectTypeServiceDescriptionDocument = gql`
  mutation UpdateObjectTypeServiceDescription($input: ServiceDescriptionInput!) {
    updateObjectTypeServiceDescription(input: $input) {
      id
    }
  }
`;
export function useUpdateObjectTypeServiceDescriptionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateObjectTypeServiceDescriptionMutation,
    UpdateObjectTypeServiceDescriptionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateObjectTypeServiceDescriptionMutation,
    UpdateObjectTypeServiceDescriptionMutationVariables
  >(UpdateObjectTypeServiceDescriptionDocument, baseOptions);
}
export type UpdateObjectTypeServiceDescriptionMutationHookResult = ReturnType<
  typeof useUpdateObjectTypeServiceDescriptionMutation
>;
export type UpdateObjectTypeServiceDescriptionMutationResult = ApolloReactCommon.MutationResult<
  UpdateObjectTypeServiceDescriptionMutation
>;
export type UpdateObjectTypeServiceDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateObjectTypeServiceDescriptionMutation,
  UpdateObjectTypeServiceDescriptionMutationVariables
>;
export const AddCadastreDocument = gql`
  mutation AddCadastre($input: AddCadastreInput!) {
    addCadastre(input: $input) {
      pim {
        id
      }
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
    addPimService(input: $input) {
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
    updatePimService(input: $input) {
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
    addPimMeter(input: $input) {
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
    updatePimMeter(input: $input) {
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
    addPimReading(input: $input) {
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
    updatePimReading(input: $input) {
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
export const AddProjectPhaseDocument = gql`
  mutation AddProjectPhase($input: CreateProjectPhaseInput!) {
    addProjectPhase(input: $input) {
      id
    }
  }
`;
export function useAddProjectPhaseMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddProjectPhaseMutation, AddProjectPhaseMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddProjectPhaseMutation, AddProjectPhaseMutationVariables>(
    AddProjectPhaseDocument,
    baseOptions,
  );
}
export type AddProjectPhaseMutationHookResult = ReturnType<typeof useAddProjectPhaseMutation>;
export type AddProjectPhaseMutationResult = ApolloReactCommon.MutationResult<AddProjectPhaseMutation>;
export type AddProjectPhaseMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddProjectPhaseMutation,
  AddProjectPhaseMutationVariables
>;
export const LinkNcpToProjectPhaseDocument = gql`
  mutation LinkNcpToProjectPhase($input: LinkNcpToProjectPhaseInput!) {
    linkNcpToProjectPhase(input: $input) {
      id
    }
  }
`;
export function useLinkNcpToProjectPhaseMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LinkNcpToProjectPhaseMutation,
    LinkNcpToProjectPhaseMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<LinkNcpToProjectPhaseMutation, LinkNcpToProjectPhaseMutationVariables>(
    LinkNcpToProjectPhaseDocument,
    baseOptions,
  );
}
export type LinkNcpToProjectPhaseMutationHookResult = ReturnType<typeof useLinkNcpToProjectPhaseMutation>;
export type LinkNcpToProjectPhaseMutationResult = ApolloReactCommon.MutationResult<LinkNcpToProjectPhaseMutation>;
export type LinkNcpToProjectPhaseMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LinkNcpToProjectPhaseMutation,
  LinkNcpToProjectPhaseMutationVariables
>;
export const GetLabelsDocument = gql`
  query GetLabels($id: ID!, $properties: [LabelProperty!]) {
    getLabels(parentId: $id, properties: $properties) {
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
export const NcpCharacteristicsDocument = gql`
  query NcpCharacteristics($id: ID!) {
    getNcpCharacteristics(id: $id) {
      id
      characteristicsSections
      projectMarketing {
        logos {
          id
          url
        }
        emailAddress
        website
        firstColor
        secondColor
        mainLogoId
      }
      measurements {
        volumeFrom
        volumeTo
        livingSpaceFrom
        livingSpaceTo
        plotAreaFrom
        plotAreaTo
        calculateAutomatically
      }
      energy {
        label
        energyIndex
        endDateEnergyLabel
        EPC
        characteristicType
        notes
      }
      accountManagers {
        id
      }
      accountManagersIds
      identificationNumbers {
        id
        name
        number
        type
        dateCreated
      }
      attentionNote
      invoiceDetails {
        street
        houseNumber
        additionalNumber
        zipCode
        city
        country
        projectInvoiceNumber
        contactPerson
        description
      }
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
      characteristicsDescription
    }
  }
`;
export function useNcpCharacteristicsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpCharacteristicsQuery, NcpCharacteristicsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpCharacteristicsQuery, NcpCharacteristicsQueryVariables>(
    NcpCharacteristicsDocument,
    baseOptions,
  );
}
export function useNcpCharacteristicsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpCharacteristicsQuery, NcpCharacteristicsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpCharacteristicsQuery, NcpCharacteristicsQueryVariables>(
    NcpCharacteristicsDocument,
    baseOptions,
  );
}
export type NcpCharacteristicsQueryHookResult = ReturnType<typeof useNcpCharacteristicsQuery>;
export type NcpCharacteristicsLazyQueryHookResult = ReturnType<typeof useNcpCharacteristicsLazyQuery>;
export type NcpCharacteristicsQueryResult = ApolloReactCommon.QueryResult<
  NcpCharacteristicsQuery,
  NcpCharacteristicsQueryVariables
>;
export const NcpGeneralDocument = gql`
  query NcpGeneral($id: ID!) {
    getNcp(id: $id) {
      id
      type
      dateCreated
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      name
      additionalName
      street
      houseNumber
      additionalHouseNumber
      zipCode
      city
      country
      objectTypesCount
      automaticallyCalculateQuantity
      properties
      progressStatus
      startConstruction
      noteStartConstruction
      startSale
      noteStartSale
      startDelivery
      noteStartDelivery
      startConstructionAfterPresalePercentage
      projectRisk
      notes
      archived
    }
  }
`;
export function useNcpGeneralQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpGeneralQuery, NcpGeneralQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpGeneralQuery, NcpGeneralQueryVariables>(NcpGeneralDocument, baseOptions);
}
export function useNcpGeneralLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpGeneralQuery, NcpGeneralQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpGeneralQuery, NcpGeneralQueryVariables>(NcpGeneralDocument, baseOptions);
}
export type NcpGeneralQueryHookResult = ReturnType<typeof useNcpGeneralQuery>;
export type NcpGeneralLazyQueryHookResult = ReturnType<typeof useNcpGeneralLazyQuery>;
export type NcpGeneralQueryResult = ApolloReactCommon.QueryResult<NcpGeneralQuery, NcpGeneralQueryVariables>;
export const NcpWithSameAddressDocument = gql`
  query NcpWithSameAddress($input: NcpWithSameAddressInput!) {
    getNcpWithSameAddress(input: $input) {
      metadata {
        total
      }
      items {
        id
      }
    }
  }
`;
export function useNcpWithSameAddressQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpWithSameAddressQuery, NcpWithSameAddressQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpWithSameAddressQuery, NcpWithSameAddressQueryVariables>(
    NcpWithSameAddressDocument,
    baseOptions,
  );
}
export function useNcpWithSameAddressLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpWithSameAddressQuery, NcpWithSameAddressQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpWithSameAddressQuery, NcpWithSameAddressQueryVariables>(
    NcpWithSameAddressDocument,
    baseOptions,
  );
}
export type NcpWithSameAddressQueryHookResult = ReturnType<typeof useNcpWithSameAddressQuery>;
export type NcpWithSameAddressLazyQueryHookResult = ReturnType<typeof useNcpWithSameAddressLazyQuery>;
export type NcpWithSameAddressQueryResult = ApolloReactCommon.QueryResult<
  NcpWithSameAddressQuery,
  NcpWithSameAddressQueryVariables
>;
export const NcpGeneralOverallInfoDocument = gql`
  query NcpGeneralOverallInfo($id: ID!) {
    project: getNcp(id: $id) {
      id
      name
    }
    objectTypes: listObjectTypes(filters: { ncpId: $id, archived: false }) {
      metadata {
        total
      }
    }
    linkedProperties: getNcpLinkedPims(id: $id) {
      linkedProperties(filters: { archived: false }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
  }
`;
export function useNcpGeneralOverallInfoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpGeneralOverallInfoQuery, NcpGeneralOverallInfoQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpGeneralOverallInfoQuery, NcpGeneralOverallInfoQueryVariables>(
    NcpGeneralOverallInfoDocument,
    baseOptions,
  );
}
export function useNcpGeneralOverallInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpGeneralOverallInfoQuery, NcpGeneralOverallInfoQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpGeneralOverallInfoQuery, NcpGeneralOverallInfoQueryVariables>(
    NcpGeneralOverallInfoDocument,
    baseOptions,
  );
}
export type NcpGeneralOverallInfoQueryHookResult = ReturnType<typeof useNcpGeneralOverallInfoQuery>;
export type NcpGeneralOverallInfoLazyQueryHookResult = ReturnType<typeof useNcpGeneralOverallInfoLazyQuery>;
export type NcpGeneralOverallInfoQueryResult = ApolloReactCommon.QueryResult<
  NcpGeneralOverallInfoQuery,
  NcpGeneralOverallInfoQueryVariables
>;
export const GetNcpLabelsDocument = gql`
  query GetNcpLabels($id: ID!, $properties: [LabelProperty!]) {
    getNcpLabels(parentId: $id, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
export function useGetNcpLabelsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetNcpLabelsQuery, GetNcpLabelsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetNcpLabelsQuery, GetNcpLabelsQueryVariables>(GetNcpLabelsDocument, baseOptions);
}
export function useGetNcpLabelsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetNcpLabelsQuery, GetNcpLabelsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetNcpLabelsQuery, GetNcpLabelsQueryVariables>(
    GetNcpLabelsDocument,
    baseOptions,
  );
}
export type GetNcpLabelsQueryHookResult = ReturnType<typeof useGetNcpLabelsQuery>;
export type GetNcpLabelsLazyQueryHookResult = ReturnType<typeof useGetNcpLabelsLazyQuery>;
export type GetNcpLabelsQueryResult = ApolloReactCommon.QueryResult<GetNcpLabelsQuery, GetNcpLabelsQueryVariables>;
export const ListNcpsCountDocument = gql`
  query ListNcpsCount {
    activeCount: listNcps(filters: { archived: false }) {
      metadata {
        total
      }
    }
    archivedCount: listNcps(filters: { archived: true }) {
      metadata {
        total
      }
    }
  }
`;
export function useListNcpsCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListNcpsCountQuery, ListNcpsCountQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListNcpsCountQuery, ListNcpsCountQueryVariables>(ListNcpsCountDocument, baseOptions);
}
export function useListNcpsCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListNcpsCountQuery, ListNcpsCountQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListNcpsCountQuery, ListNcpsCountQueryVariables>(
    ListNcpsCountDocument,
    baseOptions,
  );
}
export type ListNcpsCountQueryHookResult = ReturnType<typeof useListNcpsCountQuery>;
export type ListNcpsCountLazyQueryHookResult = ReturnType<typeof useListNcpsCountLazyQuery>;
export type ListNcpsCountQueryResult = ApolloReactCommon.QueryResult<ListNcpsCountQuery, ListNcpsCountQueryVariables>;
export const ListNcpsDocument = gql`
  query ListNcps($archived: Boolean!, $sortColumn: String!, $sortDirection: SortDirection!, $from: Int!, $limit: Int) {
    listNcps(
      filters: { archived: $archived }
      pagination: { from: $from, limit: $limit }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        dateCreated
        dateUpdated
        archived
        areaRangeFrom
        areaRangeTo
        numberOfRoomsFrom
        numberOfRoomsTo
        logoPicture {
          url
        }
        mainPicture {
          url
        }
        name
        salePriceFrom
        salePriceTo
        rentPriceFrom
        rentPriceTo
        saleLabel
        rentLabel
        partOfPhase
        soldNumber
        rentNumber
        completeness
        available
        underOption
        soldOrRent
        matches
        interests
        candidates
        optants
        properties
        objectTypesCount
        attentionNote
      }
    }
  }
`;
export function useListNcpsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListNcpsQuery, ListNcpsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListNcpsQuery, ListNcpsQueryVariables>(ListNcpsDocument, baseOptions);
}
export function useListNcpsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListNcpsQuery, ListNcpsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListNcpsQuery, ListNcpsQueryVariables>(ListNcpsDocument, baseOptions);
}
export type ListNcpsQueryHookResult = ReturnType<typeof useListNcpsQuery>;
export type ListNcpsLazyQueryHookResult = ReturnType<typeof useListNcpsLazyQuery>;
export type ListNcpsQueryResult = ApolloReactCommon.QueryResult<ListNcpsQuery, ListNcpsQueryVariables>;
export const NcpMediaDocument = gql`
  query NcpMedia($id: ID!, $picturesSort: Sort) {
    getNcpMedia(id: $id) {
      id
      mediaDescription
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
export function useNcpMediaQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpMediaQuery, NcpMediaQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpMediaQuery, NcpMediaQueryVariables>(NcpMediaDocument, baseOptions);
}
export function useNcpMediaLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpMediaQuery, NcpMediaQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpMediaQuery, NcpMediaQueryVariables>(NcpMediaDocument, baseOptions);
}
export type NcpMediaQueryHookResult = ReturnType<typeof useNcpMediaQuery>;
export type NcpMediaLazyQueryHookResult = ReturnType<typeof useNcpMediaLazyQuery>;
export type NcpMediaQueryResult = ApolloReactCommon.QueryResult<NcpMediaQuery, NcpMediaQueryVariables>;
export const NcpPricesPricingDocument = gql`
  query NcpPricesPricing($id: ID!) {
    getNcpPrices(id: $id) {
      id
      pricing {
        rent {
          minPrice
          maxPrice
          isEnabled
          calculateAutomatically
        }
        sale {
          minPrice
          maxPrice
          isEnabled
          calculateAutomatically
        }
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateUpdated
        description
      }
    }
  }
`;
export function useNcpPricesPricingQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpPricesPricingQuery, NcpPricesPricingQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpPricesPricingQuery, NcpPricesPricingQueryVariables>(
    NcpPricesPricingDocument,
    baseOptions,
  );
}
export function useNcpPricesPricingLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpPricesPricingQuery, NcpPricesPricingQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpPricesPricingQuery, NcpPricesPricingQueryVariables>(
    NcpPricesPricingDocument,
    baseOptions,
  );
}
export type NcpPricesPricingQueryHookResult = ReturnType<typeof useNcpPricesPricingQuery>;
export type NcpPricesPricingLazyQueryHookResult = ReturnType<typeof useNcpPricesPricingLazyQuery>;
export type NcpPricesPricingQueryResult = ApolloReactCommon.QueryResult<
  NcpPricesPricingQuery,
  NcpPricesPricingQueryVariables
>;
export const NcpPricesCostsDocument = gql`
  query NcpPricesCosts($id: ID!) {
    getNcpPrices(id: $id) {
      id
      costs {
        costs {
          id
          serviceCostsFrom
          serviceCostsTill
          paymentsFrequency
          vatTaxedServiceCostsFrom
          vatTaxedServiceCostsTill
          vatPercentage
          notes
          type
          name
          dateCreated
        }
        description
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateUpdated
      }
    }
  }
`;
export function useNcpPricesCostsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpPricesCostsQuery, NcpPricesCostsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpPricesCostsQuery, NcpPricesCostsQueryVariables>(
    NcpPricesCostsDocument,
    baseOptions,
  );
}
export function useNcpPricesCostsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpPricesCostsQuery, NcpPricesCostsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpPricesCostsQuery, NcpPricesCostsQueryVariables>(
    NcpPricesCostsDocument,
    baseOptions,
  );
}
export type NcpPricesCostsQueryHookResult = ReturnType<typeof useNcpPricesCostsQuery>;
export type NcpPricesCostsLazyQueryHookResult = ReturnType<typeof useNcpPricesCostsLazyQuery>;
export type NcpPricesCostsQueryResult = ApolloReactCommon.QueryResult<
  NcpPricesCostsQuery,
  NcpPricesCostsQueryVariables
>;
export const NcpPricesInterestsDocument = gql`
  query NcpPricesInterests($id: ID!) {
    getNcpPrices(id: $id) {
      id
      interests {
        groundInterest
        buildingInterest
        rentedagen
        suspensiveCondition
        description
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
export function useNcpPricesInterestsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpPricesInterestsQuery, NcpPricesInterestsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpPricesInterestsQuery, NcpPricesInterestsQueryVariables>(
    NcpPricesInterestsDocument,
    baseOptions,
  );
}
export function useNcpPricesInterestsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpPricesInterestsQuery, NcpPricesInterestsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpPricesInterestsQuery, NcpPricesInterestsQueryVariables>(
    NcpPricesInterestsDocument,
    baseOptions,
  );
}
export type NcpPricesInterestsQueryHookResult = ReturnType<typeof useNcpPricesInterestsQuery>;
export type NcpPricesInterestsLazyQueryHookResult = ReturnType<typeof useNcpPricesInterestsLazyQuery>;
export type NcpPricesInterestsQueryResult = ApolloReactCommon.QueryResult<
  NcpPricesInterestsQuery,
  NcpPricesInterestsQueryVariables
>;
export const ListNcpLinkedPimsCountDocument = gql`
  query ListNcpLinkedPimsCount($id: ID!) {
    activeCount: getNcpLinkedPims(id: $id) {
      linkedProperties(filters: { archived: false }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
    archivedCount: getNcpLinkedPims(id: $id) {
      linkedProperties(filters: { archived: true }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
  }
`;
export function useListNcpLinkedPimsCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListNcpLinkedPimsCountQuery, ListNcpLinkedPimsCountQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListNcpLinkedPimsCountQuery, ListNcpLinkedPimsCountQueryVariables>(
    ListNcpLinkedPimsCountDocument,
    baseOptions,
  );
}
export function useListNcpLinkedPimsCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ListNcpLinkedPimsCountQuery,
    ListNcpLinkedPimsCountQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ListNcpLinkedPimsCountQuery, ListNcpLinkedPimsCountQueryVariables>(
    ListNcpLinkedPimsCountDocument,
    baseOptions,
  );
}
export type ListNcpLinkedPimsCountQueryHookResult = ReturnType<typeof useListNcpLinkedPimsCountQuery>;
export type ListNcpLinkedPimsCountLazyQueryHookResult = ReturnType<typeof useListNcpLinkedPimsCountLazyQuery>;
export type ListNcpLinkedPimsCountQueryResult = ApolloReactCommon.QueryResult<
  ListNcpLinkedPimsCountQuery,
  ListNcpLinkedPimsCountQueryVariables
>;
export const NcpLinkedPimsDocument = gql`
  query NcpLinkedPims(
    $id: ID!
    $archived: Boolean
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    getNcpLinkedPims(id: $id) {
      linkedPropertiesIds
      description
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      linkedProperties(
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
          postalCode
          country
          status
          developmentType
          linkedObjectTypeIds
        }
      }
    }
  }
`;
export function useNcpLinkedPimsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpLinkedPimsQuery, NcpLinkedPimsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpLinkedPimsQuery, NcpLinkedPimsQueryVariables>(NcpLinkedPimsDocument, baseOptions);
}
export function useNcpLinkedPimsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpLinkedPimsQuery, NcpLinkedPimsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpLinkedPimsQuery, NcpLinkedPimsQueryVariables>(
    NcpLinkedPimsDocument,
    baseOptions,
  );
}
export type NcpLinkedPimsQueryHookResult = ReturnType<typeof useNcpLinkedPimsQuery>;
export type NcpLinkedPimsLazyQueryHookResult = ReturnType<typeof useNcpLinkedPimsLazyQuery>;
export type NcpLinkedPimsQueryResult = ApolloReactCommon.QueryResult<NcpLinkedPimsQuery, NcpLinkedPimsQueryVariables>;
export const GetNcpServicesDocument = gql`
  query GetNcpServices($id: ID!) {
    getNcpServices(id: $id) {
      id
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
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      servicesDescription
    }
  }
`;
export function useGetNcpServicesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetNcpServicesQuery, GetNcpServicesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetNcpServicesQuery, GetNcpServicesQueryVariables>(
    GetNcpServicesDocument,
    baseOptions,
  );
}
export function useGetNcpServicesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetNcpServicesQuery, GetNcpServicesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetNcpServicesQuery, GetNcpServicesQueryVariables>(
    GetNcpServicesDocument,
    baseOptions,
  );
}
export type GetNcpServicesQueryHookResult = ReturnType<typeof useGetNcpServicesQuery>;
export type GetNcpServicesLazyQueryHookResult = ReturnType<typeof useGetNcpServicesLazyQuery>;
export type GetNcpServicesQueryResult = ApolloReactCommon.QueryResult<
  GetNcpServicesQuery,
  GetNcpServicesQueryVariables
>;
export const ObjectTypeCharacteristicsDocument = gql`
  query ObjectTypeCharacteristics($id: ID!) {
    getObjectTypeCharacteristics(id: $id) {
      id
      characteristicsSections
      projectMarketing {
        logos {
          id
          url
        }
        emailAddress
        website
        firstColor
        secondColor
        mainLogoId
      }
      measurements {
        volumeFrom
        volumeTo
        livingSpaceFrom
        livingSpaceTo
        plotAreaFrom
        plotAreaTo
        calculateAutomatically
      }
      energy {
        label
        energyIndex
        endDateEnergyLabel
        EPC
        characteristicType
        notes
      }
      accountManagers {
        id
      }
      accountManagersIds
      identificationNumbers {
        id
        name
        number
        type
        dateCreated
      }
      attentionNote
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
      characteristicsDescription
      type
      automaticallySetObjectTypes
    }
  }
`;
export function useObjectTypeCharacteristicsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ObjectTypeCharacteristicsQuery,
    ObjectTypeCharacteristicsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<ObjectTypeCharacteristicsQuery, ObjectTypeCharacteristicsQueryVariables>(
    ObjectTypeCharacteristicsDocument,
    baseOptions,
  );
}
export function useObjectTypeCharacteristicsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ObjectTypeCharacteristicsQuery,
    ObjectTypeCharacteristicsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ObjectTypeCharacteristicsQuery, ObjectTypeCharacteristicsQueryVariables>(
    ObjectTypeCharacteristicsDocument,
    baseOptions,
  );
}
export type ObjectTypeCharacteristicsQueryHookResult = ReturnType<typeof useObjectTypeCharacteristicsQuery>;
export type ObjectTypeCharacteristicsLazyQueryHookResult = ReturnType<typeof useObjectTypeCharacteristicsLazyQuery>;
export type ObjectTypeCharacteristicsQueryResult = ApolloReactCommon.QueryResult<
  ObjectTypeCharacteristicsQuery,
  ObjectTypeCharacteristicsQueryVariables
>;
export const GetObjectTypeGeneralDocument = gql`
  query GetObjectTypeGeneral($id: ID!) {
    getObjectTypeGeneral(id: $id) {
      id
      name
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      ncpId
    }
  }
`;
export function useGetObjectTypeGeneralQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetObjectTypeGeneralQuery, GetObjectTypeGeneralQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetObjectTypeGeneralQuery, GetObjectTypeGeneralQueryVariables>(
    GetObjectTypeGeneralDocument,
    baseOptions,
  );
}
export function useGetObjectTypeGeneralLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetObjectTypeGeneralQuery, GetObjectTypeGeneralQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetObjectTypeGeneralQuery, GetObjectTypeGeneralQueryVariables>(
    GetObjectTypeGeneralDocument,
    baseOptions,
  );
}
export type GetObjectTypeGeneralQueryHookResult = ReturnType<typeof useGetObjectTypeGeneralQuery>;
export type GetObjectTypeGeneralLazyQueryHookResult = ReturnType<typeof useGetObjectTypeGeneralLazyQuery>;
export type GetObjectTypeGeneralQueryResult = ApolloReactCommon.QueryResult<
  GetObjectTypeGeneralQuery,
  GetObjectTypeGeneralQueryVariables
>;
export const ObjectTypeOverallInfoDocument = gql`
  query ObjectTypeOverallInfo($id: ID!, $projectId: ID!) {
    objectType: getObjectTypeGeneral(id: $id) {
      id
      name
    }
    project: getNcp(id: $projectId) {
      id
      name
    }
    linkedProperty: getObjectTypeLinkedPims(id: $id) {
      linkedProperties(filters: { archived: false }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
  }
`;
export function useObjectTypeOverallInfoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ObjectTypeOverallInfoQuery, ObjectTypeOverallInfoQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ObjectTypeOverallInfoQuery, ObjectTypeOverallInfoQueryVariables>(
    ObjectTypeOverallInfoDocument,
    baseOptions,
  );
}
export function useObjectTypeOverallInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ObjectTypeOverallInfoQuery, ObjectTypeOverallInfoQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ObjectTypeOverallInfoQuery, ObjectTypeOverallInfoQueryVariables>(
    ObjectTypeOverallInfoDocument,
    baseOptions,
  );
}
export type ObjectTypeOverallInfoQueryHookResult = ReturnType<typeof useObjectTypeOverallInfoQuery>;
export type ObjectTypeOverallInfoLazyQueryHookResult = ReturnType<typeof useObjectTypeOverallInfoLazyQuery>;
export type ObjectTypeOverallInfoQueryResult = ApolloReactCommon.QueryResult<
  ObjectTypeOverallInfoQuery,
  ObjectTypeOverallInfoQueryVariables
>;
export const GetObjectTypeLabelsDocument = gql`
  query GetObjectTypeLabels($id: ID!, $properties: [LabelProperty!]) {
    getObjectTypeLabels(parentId: $id, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
export function useGetObjectTypeLabelsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetObjectTypeLabelsQuery, GetObjectTypeLabelsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetObjectTypeLabelsQuery, GetObjectTypeLabelsQueryVariables>(
    GetObjectTypeLabelsDocument,
    baseOptions,
  );
}
export function useGetObjectTypeLabelsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetObjectTypeLabelsQuery, GetObjectTypeLabelsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetObjectTypeLabelsQuery, GetObjectTypeLabelsQueryVariables>(
    GetObjectTypeLabelsDocument,
    baseOptions,
  );
}
export type GetObjectTypeLabelsQueryHookResult = ReturnType<typeof useGetObjectTypeLabelsQuery>;
export type GetObjectTypeLabelsLazyQueryHookResult = ReturnType<typeof useGetObjectTypeLabelsLazyQuery>;
export type GetObjectTypeLabelsQueryResult = ApolloReactCommon.QueryResult<
  GetObjectTypeLabelsQuery,
  GetObjectTypeLabelsQueryVariables
>;
export const ListObjectTypesCountDocument = gql`
  query ListObjectTypesCount($ncpId: ID!) {
    activeCount: listObjectTypes(filters: { ncpId: $ncpId, archived: null }) {
      metadata {
        total
      }
    }
    archivedCount: listObjectTypes(filters: { ncpId: $ncpId, archived: true }) {
      metadata {
        total
      }
    }
  }
`;
export function useListObjectTypesCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListObjectTypesCountQuery, ListObjectTypesCountQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListObjectTypesCountQuery, ListObjectTypesCountQueryVariables>(
    ListObjectTypesCountDocument,
    baseOptions,
  );
}
export function useListObjectTypesCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListObjectTypesCountQuery, ListObjectTypesCountQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListObjectTypesCountQuery, ListObjectTypesCountQueryVariables>(
    ListObjectTypesCountDocument,
    baseOptions,
  );
}
export type ListObjectTypesCountQueryHookResult = ReturnType<typeof useListObjectTypesCountQuery>;
export type ListObjectTypesCountLazyQueryHookResult = ReturnType<typeof useListObjectTypesCountLazyQuery>;
export type ListObjectTypesCountQueryResult = ApolloReactCommon.QueryResult<
  ListObjectTypesCountQuery,
  ListObjectTypesCountQueryVariables
>;
export const ListObjectTypesDocument = gql`
  query ListObjectTypes(
    $ncpId: ID!
    $archived: Boolean
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    listObjectTypes(
      filters: { ncpId: $ncpId, archived: $archived }
      pagination: { from: $from, limit: $limit }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        ncpId
        dateCreated
        dateUpdated
        archived
        areaRangeFrom
        areaRangeTo
        numberOfRoomsFrom
        numberOfRoomsTo
        mainPicture {
          url
        }
        name
        salePriceFrom
        salePriceTo
        rentPriceFrom
        rentPriceTo
        saleLabel
        rentLabel
        partOfPhase
        completeness
        matches
        interests
        propertiesConnected
        propertiesAvailable
        underOption
        soldOrRent
        attentionNote
      }
    }
  }
`;
export function useListObjectTypesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListObjectTypesQuery, ListObjectTypesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListObjectTypesQuery, ListObjectTypesQueryVariables>(
    ListObjectTypesDocument,
    baseOptions,
  );
}
export function useListObjectTypesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListObjectTypesQuery, ListObjectTypesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListObjectTypesQuery, ListObjectTypesQueryVariables>(
    ListObjectTypesDocument,
    baseOptions,
  );
}
export type ListObjectTypesQueryHookResult = ReturnType<typeof useListObjectTypesQuery>;
export type ListObjectTypesLazyQueryHookResult = ReturnType<typeof useListObjectTypesLazyQuery>;
export type ListObjectTypesQueryResult = ApolloReactCommon.QueryResult<
  ListObjectTypesQuery,
  ListObjectTypesQueryVariables
>;
export const ObjectTypeListDescriptionDocument = gql`
  query ObjectTypeListDescription($id: ID!) {
    getNcp(id: $id) {
      objectTypesListDescription
      objectTypesListLastUpdatedBy {
        id
        firstName
        lastName
      }
      objectTypesListLastUpdatedOn
    }
  }
`;
export function useObjectTypeListDescriptionQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ObjectTypeListDescriptionQuery,
    ObjectTypeListDescriptionQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<ObjectTypeListDescriptionQuery, ObjectTypeListDescriptionQueryVariables>(
    ObjectTypeListDescriptionDocument,
    baseOptions,
  );
}
export function useObjectTypeListDescriptionLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ObjectTypeListDescriptionQuery,
    ObjectTypeListDescriptionQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ObjectTypeListDescriptionQuery, ObjectTypeListDescriptionQueryVariables>(
    ObjectTypeListDescriptionDocument,
    baseOptions,
  );
}
export type ObjectTypeListDescriptionQueryHookResult = ReturnType<typeof useObjectTypeListDescriptionQuery>;
export type ObjectTypeListDescriptionLazyQueryHookResult = ReturnType<typeof useObjectTypeListDescriptionLazyQuery>;
export type ObjectTypeListDescriptionQueryResult = ApolloReactCommon.QueryResult<
  ObjectTypeListDescriptionQuery,
  ObjectTypeListDescriptionQueryVariables
>;
export const ObjectTypeMediaDocument = gql`
  query ObjectTypeMedia($id: ID!, $picturesSort: Sort) {
    getObjectTypeMedia(id: $id) {
      id
      mediaDescription
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
export function useObjectTypeMediaQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ObjectTypeMediaQuery, ObjectTypeMediaQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ObjectTypeMediaQuery, ObjectTypeMediaQueryVariables>(
    ObjectTypeMediaDocument,
    baseOptions,
  );
}
export function useObjectTypeMediaLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ObjectTypeMediaQuery, ObjectTypeMediaQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ObjectTypeMediaQuery, ObjectTypeMediaQueryVariables>(
    ObjectTypeMediaDocument,
    baseOptions,
  );
}
export type ObjectTypeMediaQueryHookResult = ReturnType<typeof useObjectTypeMediaQuery>;
export type ObjectTypeMediaLazyQueryHookResult = ReturnType<typeof useObjectTypeMediaLazyQuery>;
export type ObjectTypeMediaQueryResult = ApolloReactCommon.QueryResult<
  ObjectTypeMediaQuery,
  ObjectTypeMediaQueryVariables
>;
export const ObjectTypePricesPricingDocument = gql`
  query ObjectTypePricesPricing($id: ID!) {
    getObjectTypePrices(id: $id) {
      id
      pricing {
        rent {
          minPrice
          maxPrice
          isEnabled
          calculateAutomatically
        }
        sale {
          minPrice
          maxPrice
          isEnabled
          calculateAutomatically
        }
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateUpdated
        description
      }
    }
  }
`;
export function useObjectTypePricesPricingQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ObjectTypePricesPricingQuery, ObjectTypePricesPricingQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ObjectTypePricesPricingQuery, ObjectTypePricesPricingQueryVariables>(
    ObjectTypePricesPricingDocument,
    baseOptions,
  );
}
export function useObjectTypePricesPricingLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ObjectTypePricesPricingQuery,
    ObjectTypePricesPricingQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ObjectTypePricesPricingQuery, ObjectTypePricesPricingQueryVariables>(
    ObjectTypePricesPricingDocument,
    baseOptions,
  );
}
export type ObjectTypePricesPricingQueryHookResult = ReturnType<typeof useObjectTypePricesPricingQuery>;
export type ObjectTypePricesPricingLazyQueryHookResult = ReturnType<typeof useObjectTypePricesPricingLazyQuery>;
export type ObjectTypePricesPricingQueryResult = ApolloReactCommon.QueryResult<
  ObjectTypePricesPricingQuery,
  ObjectTypePricesPricingQueryVariables
>;
export const ObjectTypePricesCostsDocument = gql`
  query ObjectTypePricesCosts($id: ID!) {
    getObjectTypePrices(id: $id) {
      id
      costs {
        costs {
          id
          serviceCostsFrom
          serviceCostsTill
          paymentsFrequency
          vatTaxedServiceCostsFrom
          vatTaxedServiceCostsTill
          vatPercentage
          notes
          type
          name
          dateCreated
        }
        description
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateUpdated
      }
    }
  }
`;
export function useObjectTypePricesCostsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ObjectTypePricesCostsQuery, ObjectTypePricesCostsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ObjectTypePricesCostsQuery, ObjectTypePricesCostsQueryVariables>(
    ObjectTypePricesCostsDocument,
    baseOptions,
  );
}
export function useObjectTypePricesCostsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ObjectTypePricesCostsQuery, ObjectTypePricesCostsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ObjectTypePricesCostsQuery, ObjectTypePricesCostsQueryVariables>(
    ObjectTypePricesCostsDocument,
    baseOptions,
  );
}
export type ObjectTypePricesCostsQueryHookResult = ReturnType<typeof useObjectTypePricesCostsQuery>;
export type ObjectTypePricesCostsLazyQueryHookResult = ReturnType<typeof useObjectTypePricesCostsLazyQuery>;
export type ObjectTypePricesCostsQueryResult = ApolloReactCommon.QueryResult<
  ObjectTypePricesCostsQuery,
  ObjectTypePricesCostsQueryVariables
>;
export const GetObjectTypeServicesDocument = gql`
  query GetObjectTypeServices($id: ID!) {
    getObjectTypeServices(id: $id) {
      id
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
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      servicesDescription
    }
  }
`;
export function useGetObjectTypeServicesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetObjectTypeServicesQuery, GetObjectTypeServicesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetObjectTypeServicesQuery, GetObjectTypeServicesQueryVariables>(
    GetObjectTypeServicesDocument,
    baseOptions,
  );
}
export function useGetObjectTypeServicesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetObjectTypeServicesQuery, GetObjectTypeServicesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetObjectTypeServicesQuery, GetObjectTypeServicesQueryVariables>(
    GetObjectTypeServicesDocument,
    baseOptions,
  );
}
export type GetObjectTypeServicesQueryHookResult = ReturnType<typeof useGetObjectTypeServicesQuery>;
export type GetObjectTypeServicesLazyQueryHookResult = ReturnType<typeof useGetObjectTypeServicesLazyQuery>;
export type GetObjectTypeServicesQueryResult = ApolloReactCommon.QueryResult<
  GetObjectTypeServicesQuery,
  GetObjectTypeServicesQueryVariables
>;
export const ListObjectTypeLinkedPimsCountDocument = gql`
  query ListObjectTypeLinkedPimsCount($id: ID!) {
    activeCount: getObjectTypeLinkedPims(id: $id) {
      linkedProperties(filters: { archived: false }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
    archivedCount: getObjectTypeLinkedPims(id: $id) {
      linkedProperties(filters: { archived: true }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
  }
`;
export function useListObjectTypeLinkedPimsCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ListObjectTypeLinkedPimsCountQuery,
    ListObjectTypeLinkedPimsCountQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<ListObjectTypeLinkedPimsCountQuery, ListObjectTypeLinkedPimsCountQueryVariables>(
    ListObjectTypeLinkedPimsCountDocument,
    baseOptions,
  );
}
export function useListObjectTypeLinkedPimsCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ListObjectTypeLinkedPimsCountQuery,
    ListObjectTypeLinkedPimsCountQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ListObjectTypeLinkedPimsCountQuery, ListObjectTypeLinkedPimsCountQueryVariables>(
    ListObjectTypeLinkedPimsCountDocument,
    baseOptions,
  );
}
export type ListObjectTypeLinkedPimsCountQueryHookResult = ReturnType<typeof useListObjectTypeLinkedPimsCountQuery>;
export type ListObjectTypeLinkedPimsCountLazyQueryHookResult = ReturnType<
  typeof useListObjectTypeLinkedPimsCountLazyQuery
>;
export type ListObjectTypeLinkedPimsCountQueryResult = ApolloReactCommon.QueryResult<
  ListObjectTypeLinkedPimsCountQuery,
  ListObjectTypeLinkedPimsCountQueryVariables
>;
export const ObjectTypeLinkedPimsDocument = gql`
  query ObjectTypeLinkedPims(
    $id: ID!
    $archived: Boolean
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    getObjectTypeLinkedPims(id: $id) {
      linkedPropertiesIds
      description
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      linkedProperties(
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
          postalCode
          country
          status
          developmentType
          linkedObjectTypeIds
        }
      }
    }
  }
`;
export function useObjectTypeLinkedPimsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ObjectTypeLinkedPimsQuery, ObjectTypeLinkedPimsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ObjectTypeLinkedPimsQuery, ObjectTypeLinkedPimsQueryVariables>(
    ObjectTypeLinkedPimsDocument,
    baseOptions,
  );
}
export function useObjectTypeLinkedPimsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ObjectTypeLinkedPimsQuery, ObjectTypeLinkedPimsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ObjectTypeLinkedPimsQuery, ObjectTypeLinkedPimsQueryVariables>(
    ObjectTypeLinkedPimsDocument,
    baseOptions,
  );
}
export type ObjectTypeLinkedPimsQueryHookResult = ReturnType<typeof useObjectTypeLinkedPimsQuery>;
export type ObjectTypeLinkedPimsLazyQueryHookResult = ReturnType<typeof useObjectTypeLinkedPimsLazyQuery>;
export type ObjectTypeLinkedPimsQueryResult = ApolloReactCommon.QueryResult<
  ObjectTypeLinkedPimsQuery,
  ObjectTypeLinkedPimsQueryVariables
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
          name
          file {
            key
            id
            fileName
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
export const PimWithSameAddressDocument = gql`
  query PimWithSameAddress($input: PimWithSameAddressInput!) {
    getPimsGeneralWithSameAddress(input: $input) {
      metadata {
        total
      }
      items {
        id
      }
    }
  }
`;
export function usePimWithSameAddressQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimWithSameAddressQuery, PimWithSameAddressQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimWithSameAddressQuery, PimWithSameAddressQueryVariables>(
    PimWithSameAddressDocument,
    baseOptions,
  );
}
export function usePimWithSameAddressLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimWithSameAddressQuery, PimWithSameAddressQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimWithSameAddressQuery, PimWithSameAddressQueryVariables>(
    PimWithSameAddressDocument,
    baseOptions,
  );
}
export type PimWithSameAddressQueryHookResult = ReturnType<typeof usePimWithSameAddressQuery>;
export type PimWithSameAddressLazyQueryHookResult = ReturnType<typeof usePimWithSameAddressLazyQuery>;
export type PimWithSameAddressQueryResult = ApolloReactCommon.QueryResult<
  PimWithSameAddressQuery,
  PimWithSameAddressQueryVariables
>;
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
      metersMeta {
        Water {
          description
          lastEditedBy {
            id
            firstName
            lastName
          }
          dateUpdated
        }
        Gas {
          description
          lastEditedBy {
            id
            firstName
            lastName
          }
          dateUpdated
        }
        Electric {
          description
          lastEditedBy {
            id
            firstName
            lastName
          }
          dateUpdated
        }
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
export const ProjectPhasesDocument = gql`
  query ProjectPhases($name: String, $ncpId: ID, $from: Int!, $limit: Int) {
    getProjectPhases(filters: { name: $name, ncpId: $ncpId }, pagination: { from: $from, limit: $limit }) {
      items {
        id
        name
        logo {
          id
          fileName
          description
          status
          fileType
          permission
          key
          createdAt
          signedUrl
          url
          bucket
          entityID
          entity
        }
        ncpIds
      }
    }
  }
`;
export function useProjectPhasesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ProjectPhasesQuery, ProjectPhasesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ProjectPhasesQuery, ProjectPhasesQueryVariables>(ProjectPhasesDocument, baseOptions);
}
export function useProjectPhasesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProjectPhasesQuery, ProjectPhasesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ProjectPhasesQuery, ProjectPhasesQueryVariables>(
    ProjectPhasesDocument,
    baseOptions,
  );
}
export type ProjectPhasesQueryHookResult = ReturnType<typeof useProjectPhasesQuery>;
export type ProjectPhasesLazyQueryHookResult = ReturnType<typeof useProjectPhasesLazyQuery>;
export type ProjectPhasesQueryResult = ApolloReactCommon.QueryResult<ProjectPhasesQuery, ProjectPhasesQueryVariables>;
