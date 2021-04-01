import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AbsoluteFloat: any;
  BulkFieldValue: any;
  CostVat: any;
  Date: string;
  Dictionary: any;
  EventData: any;
  PathBuilder: any;
  ServiceConfigurationInput: any;
  UpdateFeatureInputConfiguration: any;
  UpdateSpaceInputConfiguration: any;
  UploadFileInput: any;
  UuidOrEnum: any;
};

export type AddAllocateInput = {
  objectId: Scalars['String'];
  name: Scalars['String'];
};

export type AddAllocationCriteriaInput = {
  pimId: Scalars['ID'];
};

export type AddAllocationCriteriaResult = {
  __typename?: 'AddAllocationCriteriaResult';
  pim: Pim;
  criteria: AllocationCriteria;
};

export type AddAogSpaceInput = {
  id: Scalars['ID'];
  type: AogSpaceType;
  name?: Maybe<Scalars['String']>;
};

export type AddAppointmentInput = {
  accountId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  from: Scalars['Date'];
  to: Scalars['Date'];
  alternativeTerms?: Maybe<Array<AppointmentTermInput>>;
  allDay?: Maybe<Scalars['Boolean']>;
  confirmedDate?: Maybe<Scalars['Boolean']>;
  repeatAppointment?: Maybe<AppointmentRepeat>;
  description?: Maybe<Scalars['String']>;
  assignedPimIds?: Maybe<Array<Scalars['String']>>;
  agreementType?: Maybe<Array<Maybe<AppointmentMeetingType>>>;
  invitedPersons?: Maybe<Array<Scalars['String']>>;
  isInsideOffice?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  outsideLocation?: Maybe<Scalars['String']>;
  travelTimeBefore?: Maybe<Scalars['Int']>;
  travelTimeAfter?: Maybe<Scalars['Int']>;
  type: CalendarTypes;
  appointmentType?: Maybe<AppointmentType>;
  taskLabel?: Maybe<TaskLabel>;
};

export type AddBogSpaceInput = {
  id: Scalars['ID'];
  type: BogSpaceType;
  name?: Maybe<Scalars['String']>;
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

export type AddCommonCostInput = {
  id: Scalars['ID'];
  type: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type AddCostInput = {
  id: Scalars['ID'];
  type: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type AddFilesInput = {
  fileIDs: Array<Scalars['ID']>;
  entity: EntityWithFiles;
  entityID: Scalars['ID'];
};

export type AddIdentificationNumberInput = {
  parentId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AddInspectionInput = {
  pimId: Scalars['ID'];
  inspectionType: InspectionType;
  type: Scalars['String'];
};

export type AddInspectionResult = {
  __typename?: 'AddInspectionResult';
  inspection: Inspection;
  pim: Pim;
};

export type AddMatchProfileInput = {
  crmId: Scalars['ID'];
  propertyType?: Maybe<MatchPropertyType>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  matchDuration?: Maybe<DateRange>;
  matchWith?: Maybe<Array<MatchProfileWith>>;
  description?: Maybe<Scalars['String']>;
  estateType?: Maybe<MatchEstateType>;
  commercialEstateType?: Maybe<MatchCommercialEstateType>;
  characteristics?: Maybe<MatchCharacteristicsInput>;
  commercialCharacteristics?: Maybe<MatchCommercialCharacteristicsInput>;
  pricing?: Maybe<MatchPricingInput>;
  outside?: Maybe<MatchOutsidePricingInput>;
  garden?: Maybe<MatchGardenInput>;
  tags?: Maybe<Array<MatchTags>>;
  measurements?: Maybe<MatchMeasurementsInput>;
  revenue?: Maybe<IntRangeInput>;
  exploitation?: Maybe<IntRangeInput>;
  requirements?: Maybe<Array<MatchRequirementInput>>;
  locations?: Maybe<Array<MatchProfileLocationInput>>;
};

export type AddMediaLinkInput = {
  pimId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AddMeterInput = {
  parentId: Scalars['String'];
  name: Scalars['String'];
  type: MeterType;
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

export type AddPicturesInput = {
  pimId: Scalars['String'];
  pictures: Array<NewPictureInput>;
};

export type AddReadingInput = {
  parentId: Scalars['ID'];
  meterId: Scalars['ID'];
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

export type AddSpaceInput = {
  spaceType: SpaceType;
  extraRoomPossibility: Scalars['Boolean'];
  pimId: Scalars['String'];
  floorId: Scalars['String'];
  spaceName?: Maybe<Scalars['String']>;
};

export type AddSubtaskInput = {
  title: Scalars['String'];
};

export type AddTagInput = {
  pimId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type AddTeamInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  teamRights?: Maybe<Array<TeamRight>>;
};

export type AddTextChapterInput = {
  pimId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type AddUserToTeamInput = {
  teamId: Scalars['ID'];
  userId: Scalars['ID'];
  permissions: PermissionsInTeamInput;
  notes?: Maybe<Scalars['String']>;
};

export type AddUspInput = {
  pimId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AddViewingMomentInput = {
  pimId: Scalars['ID'];
};

export type AddViewingMomentResult = {
  __typename?: 'AddViewingMomentResult';
  pim: Pim;
  moment: ViewingMoment;
};

export enum AdditionalPositionNotArgaic {
  OtherCompany = 'OtherCompany',
  Horeca = 'Horeca',
  Recreation = 'Recreation',
  Living = 'Living',
  CareFunction = 'CareFunction',
  CaravanStorage = 'CaravanStorage',
}

export type AdditionalServiceConfiguration = {
  __typename?: 'AdditionalServiceConfiguration';
  type: AdditionalServiceType;
};

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

export enum AdminSettings {
  General = 'General',
  Users = 'Users',
  Teams = 'Teams',
  Options = 'Options',
  Workflows = 'Workflows',
  Matching = 'Matching',
  Pim = 'PIM',
  Crm = 'CRM',
  Sales = 'SALES',
  Email = 'Email',
  Documents = 'Documents',
  Calendar = 'Calendar',
  Marketing = 'Marketing',
  KpiTargets = 'KPITargets',
  Notifications = 'Notifications',
  Tasks = 'Tasks',
  Billing = 'Billing',
}

export enum AirTreatmentType {
  AirCondition = 'AirCondition',
  MechanicalVentilation = 'MechanicalVentilation',
  TopCooling = 'TopCooling',
}

export type Allocate = {
  __typename?: 'Allocate';
  id: Scalars['ID'];
  companyId: Scalars['ID'];
  objectId: Scalars['ID'];
  name: Scalars['String'];
  version: Scalars['Date'];
  note?: Maybe<Scalars['String']>;
  criteria?: Maybe<AllocateCriteria>;
  people?: Maybe<AllocatePeople>;
  home?: Maybe<AllocateHome>;
  assignToRole?: Maybe<AllocateAssignRole>;
};

export enum AllocateAssignRole {
  Reservation = 'Reservation',
  Candidate = 'Candidate',
  Optant = 'Optant',
  Tenant = 'Tenant',
}

export type AllocateCriteria = {
  __typename?: 'AllocateCriteria';
  type?: Maybe<Array<AllocateType>>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  amountAssignedCandidates?: Maybe<Scalars['Int']>;
  rentalePriceCalculation?: Maybe<AllocateRentalPriceCalculation>;
  isPublishedExternally?: Maybe<Scalars['Boolean']>;
  interestDetails?: Maybe<AllocateInterestDetails>;
  documents?: Maybe<AllocateCriteriaDocuments>;
  criteriaOrder?: Maybe<Array<AllocateCriteriaOrder>>;
};

export type AllocateCriteriaDocuments = {
  __typename?: 'AllocateCriteriaDocuments';
  acceptedMissingDocumentsNumber?: Maybe<Scalars['Int']>;
  onlyAcceptedDocuments?: Maybe<Scalars['Boolean']>;
};

export type AllocateCriteriaDocumentsInput = {
  acceptedMissingDocumentsNumber?: Maybe<Scalars['Int']>;
  onlyAcceptedDocuments?: Maybe<Scalars['Boolean']>;
};

export type AllocateCriteriaInput = {
  type?: Maybe<Array<AllocateType>>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  amountAssignedCandidates?: Maybe<Scalars['Int']>;
  rentalePriceCalculation?: Maybe<AllocateRentalPriceCalculationInput>;
  isPublishedExternally?: Maybe<Scalars['Boolean']>;
  interestDetails?: Maybe<AllocateInterestDetailsInput>;
  documents?: Maybe<AllocateCriteriaDocumentsInput>;
  criteriaOrder?: Maybe<Array<AllocateCriteriaOrderInput>>;
};

export type AllocateCriteriaOrder = {
  __typename?: 'AllocateCriteriaOrder';
  name?: Maybe<AllocateCriteriaType>;
  order?: Maybe<Scalars['Int']>;
  checked?: Maybe<Scalars['Boolean']>;
};

export type AllocateCriteriaOrderInput = {
  name?: Maybe<AllocateCriteriaType>;
  order?: Maybe<Scalars['Int']>;
  checked?: Maybe<Scalars['Boolean']>;
};

export enum AllocateCriteriaType {
  JointIncome = 'JointIncome',
  MinimalAmountOfMissingDocuments = 'MinimalAmountOfMissingDocuments',
  NumberOfPreferenceInterest = 'NumberOfPreferenceInterest',
  DateOfRegistrationInterest = 'DateOfRegistrationInterest',
  AdditionalWork = 'AdditionalWork',
}

export enum AllocateEmploymentType {
  Equity = 'Equity',
  SalariedEmployment = 'SalariedEmployment',
  Entrepreneur = 'Entrepreneur',
  Benefits = 'Benefits',
}

export type AllocateHome = {
  __typename?: 'AllocateHome';
  amountChildren?: Maybe<Scalars['Int']>;
  amountAdults?: Maybe<Scalars['Int']>;
  situation?: Maybe<AllocateHomeSituation>;
  hasCurrentResidence?: Maybe<Scalars['Boolean']>;
};

export type AllocateHomeInput = {
  amountChildren?: Maybe<Scalars['Int']>;
  amountAdults?: Maybe<Scalars['Int']>;
  situation?: Maybe<AllocateHomeSituation>;
  hasCurrentResidence?: Maybe<Scalars['Boolean']>;
};

export enum AllocateHomeSituation {
  LivingIn = 'LivingIn',
  OwnerOccupiedHome = 'OwnerOccupiedHome',
  SocialHosuing = 'SocialHosuing',
  FreeSecotorRental = 'FreeSecotorRental',
}

export type AllocateInput = {
  note?: Maybe<Scalars['String']>;
  criteria?: Maybe<AllocateCriteriaInput>;
  people?: Maybe<AllocatePeopleInput>;
  home?: Maybe<AllocateHomeInput>;
  assignToRole?: Maybe<AllocateAssignRole>;
};

export type AllocateInterestDetails = {
  __typename?: 'AllocateInterestDetails';
  minNumberOfPreferences?: Maybe<Scalars['Int']>;
  registrationForm?: Maybe<Scalars['Date']>;
  registrationTo?: Maybe<Scalars['Date']>;
  assignOnlyWithInterest?: Maybe<Scalars['Boolean']>;
};

export type AllocateInterestDetailsInput = {
  minNumberOfPreferences?: Maybe<Scalars['Int']>;
  registrationForm?: Maybe<Scalars['Date']>;
  registrationTo?: Maybe<Scalars['Date']>;
  assignOnlyWithInterest?: Maybe<Scalars['Boolean']>;
};

export type AllocatePeople = {
  __typename?: 'AllocatePeople';
  jointIncome?: Maybe<AllocatePeopleJointIncome>;
  income?: Maybe<AllocatePeopleIncome>;
  partnerIncome?: Maybe<AllocatePeopleIncome>;
};

export type AllocatePeopleIncome = {
  __typename?: 'AllocatePeopleIncome';
  availableCapitalCount?: Maybe<Scalars['Int']>;
  deductMonthlyObligations?: Maybe<Scalars['Int']>;
  minAge?: Maybe<Scalars['Int']>;
  employementType?: Maybe<AllocateEmploymentType>;
};

export type AllocatePeopleIncomeInput = {
  availableCapitalCount?: Maybe<Scalars['Int']>;
  deductMonthlyObligations?: Maybe<Scalars['Int']>;
  minAge?: Maybe<Scalars['Int']>;
  employementType?: Maybe<AllocateEmploymentType>;
};

export type AllocatePeopleInput = {
  jointIncome?: Maybe<AllocatePeopleJointIncomeInput>;
  income?: Maybe<AllocatePeopleIncomeInput>;
  partnerIncome?: Maybe<AllocatePeopleIncomeInput>;
};

export type AllocatePeopleJointIncome = {
  __typename?: 'AllocatePeopleJointIncome';
  lowestPercentage?: Maybe<Scalars['Int']>;
  distributionThreshold?: Maybe<Scalars['Int']>;
  ficitousCalculation?: Maybe<Scalars['Int']>;
  includePension?: Maybe<Scalars['Int']>;
};

export type AllocatePeopleJointIncomeInput = {
  lowestPercentage?: Maybe<Scalars['Int']>;
  distributionThreshold?: Maybe<Scalars['Int']>;
  ficitousCalculation?: Maybe<Scalars['Int']>;
  includePension?: Maybe<Scalars['Int']>;
};

export type AllocateRentalPriceCalculation = {
  __typename?: 'AllocateRentalPriceCalculation';
  minJointIncome?: Maybe<Scalars['Int']>;
  maxJointIncome?: Maybe<Scalars['Int']>;
  minRentByIncome?: Maybe<Scalars['Int']>;
  maxRentByIcome?: Maybe<Scalars['Int']>;
};

export type AllocateRentalPriceCalculationInput = {
  minJointIncome?: Maybe<Scalars['Int']>;
  maxJointIncome?: Maybe<Scalars['Int']>;
  minRentByIncome?: Maybe<Scalars['Int']>;
  maxRentByIcome?: Maybe<Scalars['Int']>;
};

export enum AllocateType {
  MatchProfile = 'MatchProfile',
  Allocation = 'Allocation',
}

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

export enum AllocationCriteriaType {
  MatchProfile = 'MatchProfile',
  Allocation = 'Allocation',
}

export type Animals = {
  __typename?: 'Animals';
  type?: Maybe<Scalars['String']>;
  numberOfSameAnimals?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  specifications?: Maybe<Array<AogSpecifications>>;
};

export type AnimalsInput = {
  type?: Maybe<Scalars['String']>;
  numberOfSameAnimals?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  specifications?: Maybe<Array<AogSpecificationsInput>>;
};

export enum AnimalsType {
  Geese = 'Geese',
  Ducks = 'Ducks',
  Ostriches = 'Ostriches',
  LayingHens = 'LayingHens',
  Cows = 'Cows',
  Horses = 'Horses',
  Eels = 'Eels',
  Sheep = 'Sheep',
  Fish = 'Fish',
  VealCalves = 'VealCalves',
  Broilers = 'Broilers',
  MeatBulls = 'MeatBulls',
  Worms = 'Worms',
}

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID'];
  answersId?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Options>>>;
  comment?: Maybe<Scalars['String']>;
};

export type AnswerInput = {
  options?: Maybe<Array<Maybe<OptionsInput>>>;
  comment?: Maybe<Scalars['String']>;
};

export type Answers = {
  __typename?: 'Answers';
  id: Scalars['ID'];
  templateId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  entities?: Maybe<Array<Maybe<Entity>>>;
};

export type AnswersInput = {
  templateId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  entities?: Maybe<Array<Maybe<EntityInput>>>;
};

export type AogGeneral = {
  __typename?: 'AogGeneral';
  generalType?: Maybe<Scalars['String']>;
  additionalPosition?: Maybe<Array<Scalars['String']>>;
  houseLot?: Maybe<AogHouseLot>;
  specifications?: Maybe<Array<AogSpecifications>>;
};

export type AogGeneralInput = {
  generalType?: Maybe<Scalars['String']>;
  additionalPosition?: Maybe<Array<Scalars['String']>>;
  houseLot?: Maybe<AogHouseLotInput>;
  specifications?: Maybe<Array<AogSpecificationsInput>>;
};

export enum AogGeneralType {
  ArableFarm = 'ArableFarm',
  TreeNursery = 'TreeNursery',
  MushroomCultivation = 'MushroomCultivation',
  FruitGrowing = 'FruitGrowing',
  Goats = 'Goats',
  GlassGarden = 'GlassGarden',
  YoungCattleRearing = 'YoungCattleRearing',
  Turkeys = 'Turkeys',
  Ducks = 'Ducks',
  Geese = 'Geese',
  Ostriches = 'Ostriches',
  LayingHens = 'LayingHens',
  RidingSchool = 'RidingSchool',
  PensionStorage = 'PensionStorage',
  DairyFarm = 'DairyFarm',
  HorseHusbandry = 'HorseHusbandry',
  EalFarm = 'EalFarm',
  SheepFarm = 'SheepFarm',
  FishFarm = 'FishFarm',
  MeatCalf = 'MeatCalf',
  Broiler = 'Broiler',
  BeefBull = 'BeefBull',
  FatteningPig = 'FatteningPig',
  OpenFieldGarden = 'OpenFieldGarden',
  WarnFarm = 'WarnFarm',
  SawsAndFatteningPigFarm = 'SawsAndFatteningPigFarm',
  SowFarm = 'SowFarm',
  SucklerCowFarm = 'SucklerCowFarm',
  LooseGround = 'LooseGround',
}

export type AogHouseLot = {
  __typename?: 'AogHouseLot';
  length?: Maybe<Scalars['AbsoluteFloat']>;
  width?: Maybe<Scalars['AbsoluteFloat']>;
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  amountOfHouses?: Maybe<Scalars['Int']>;
};

export type AogHouseLotInput = {
  length?: Maybe<Scalars['AbsoluteFloat']>;
  width?: Maybe<Scalars['AbsoluteFloat']>;
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  amountOfHouses?: Maybe<Scalars['Int']>;
};

export enum AogSoilType {
  Clay = 'Clay',
  Peat = 'Peat',
  Gravel = 'Gravel',
  Sand = 'Sand',
  Loam = 'Loam',
}

export type AogSpace = LastUpdated & {
  __typename?: 'AogSpace';
  id: Scalars['ID'];
  type: AogSpaceType;
  name?: Maybe<Scalars['String']>;
  groundConfiguration?: Maybe<GroundSpace>;
  buildingsConfiguration?: Maybe<BuildingsSpace>;
  installationsConfiguration?: Maybe<Installations>;
  animalsConfiguration?: Maybe<Animals>;
  images?: Maybe<Array<File>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export enum AogSpaceType {
  Ground = 'Ground',
  Buildings = 'Buildings',
  Installations = 'Installations',
  Animals = 'Animals',
}

export type AogSpecifications = {
  __typename?: 'AogSpecifications';
  type?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type AogSpecificationsInput = {
  type?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export enum AogSpecificationsType {
  EnvironmentalPermit = 'EnvironmentalPermit',
  Drainage = 'Drainage',
  ProductionRights = 'ProductionRights',
}

export type ApartmentGeneral = {
  __typename?: 'ApartmentGeneral';
  availability?: Maybe<PropertyAvailabilityInformation>;
  construction?: Maybe<ConstructionInformation>;
  propertyDetails?: Maybe<ApartmentPropertyDetails>;
};

export type ApartmentGeneralInput = {
  availability?: Maybe<PropertyAvailabilityInformationInput>;
  construction?: Maybe<ConstructionInformationInput>;
  propertyDetails?: Maybe<ApartmentPropertyDetailsInput>;
};

export type ApartmentPropertyDetails = {
  __typename?: 'ApartmentPropertyDetails';
  groundfloorApartmentStartsOnFloor?: Maybe<Scalars['Int']>;
  amountOfTotalFloors?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  apartmentType?: Maybe<Scalars['String']>;
  characteristicsApartment?: Maybe<Scalars['String']>;
};

export type ApartmentPropertyDetailsInput = {
  groundfloorApartmentStartsOnFloor?: Maybe<Scalars['Int']>;
  amountOfTotalFloors?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  apartmentType?: Maybe<Scalars['String']>;
  characteristicsApartment?: Maybe<Scalars['String']>;
};

export enum ApartmentType {
  OneBedroomApartment = 'OneBedroomApartment',
  TwoBedroomApartment = 'TwoBedroomApartment',
  ThreeBedroomApartment = 'ThreeBedroomApartment',
  FourBedroomApartment = 'FourBedroomApartment',
  FiveBedroomApartment = 'FiveBedroomApartment',
}

export type Appointment = {
  __typename?: 'Appointment';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  from: Scalars['Date'];
  to: Scalars['Date'];
  alternativeTerms?: Maybe<Array<AppointmentTerm>>;
  allDay?: Maybe<Scalars['Boolean']>;
  confirmedDate?: Maybe<Scalars['Boolean']>;
  repeatAppointment?: Maybe<AppointmentRepeat>;
  description?: Maybe<Scalars['String']>;
  assignedPimIds?: Maybe<Array<Scalars['String']>>;
  agreementType?: Maybe<Array<Maybe<AppointmentMeetingType>>>;
  invitedPersons?: Maybe<Array<Scalars['String']>>;
  isInsideOffice?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  outsideLocation?: Maybe<Scalars['String']>;
  travelTimeBefore?: Maybe<Scalars['Int']>;
  travelTimeAfter?: Maybe<Scalars['Int']>;
  state?: Maybe<AppointmentState>;
  type: CalendarTypes;
  appointmentType?: Maybe<AppointmentType>;
  taskLabel?: Maybe<TaskLabel>;
  isConfirmed?: Maybe<Scalars['Boolean']>;
};

export enum AppointmentAddressType {
  LinkedPersonAddress = 'LinkedPersonAddress',
  NewAcquisitionAddress = 'NewAcquisitionAddress',
}

export type AppointmentLocation = {
  __typename?: 'AppointmentLocation';
  id: Scalars['ID'];
  availablePlaces?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  suggest?: Maybe<Scalars['Boolean']>;
};

export enum AppointmentMeetingType {
  ExternalAgreement = 'ExternalAgreement',
  Collegial = 'Collegial',
  CompleteArgeement = 'CompleteArgeement',
  RedirectAppointment = 'RedirectAppointment',
  FollowUpJob = 'FollowUpJob',
}

export enum AppointmentRepeat {
  NoRepeat = 'NoRepeat',
  Daily = 'Daily',
  WorkDays = 'WorkDays',
  Weekly = 'Weekly',
  Monthly = 'Monthly',
  Hourly = 'Hourly',
  Yearly = 'Yearly',
}

export type AppointmentSearch = {
  accountId: Scalars['ID'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  selectedUser?: Maybe<Scalars['String']>;
  selectedGroup?: Maybe<Scalars['String']>;
  selectedAppointmentType?: Maybe<AppointmentType>;
  selectTaskType?: Maybe<Array<TaskLabel>>;
};

export enum AppointmentState {
  Pencil = 'Pencil',
  Confirmed = 'Confirmed',
  Completed = 'Completed',
  Unconfirmed = 'Unconfirmed',
}

export type AppointmentTerm = {
  __typename?: 'AppointmentTerm';
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
};

export type AppointmentTermInput = {
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
};

export enum AppointmentType {
  Aquisition = 'Aquisition',
  SigningContract = 'SigningContract',
  Openhouse = 'Openhouse',
  Purchase = 'Purchase',
  Inspection = 'Inspection',
  PersonalShowing = 'PersonalShowing',
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

export type Approvals = {
  __typename?: 'Approvals';
  label?: Maybe<Array<ApprovalType>>;
  notes?: Maybe<Scalars['String']>;
};

export type ApprovalsInput = {
  label?: Maybe<Array<ApprovalType>>;
  notes?: Maybe<Scalars['String']>;
};

export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  AccessToken: Scalars['String'];
  RefreshToken: Scalars['String'];
};

export enum BankAccountPurposeType {
  AutomaticIncasso = 'AutomaticIncasso',
  ServiceCosts = 'ServiceCosts',
  FirstInvoice = 'FirstInvoice',
}

export enum BankType {
  Ing = 'Ing',
  Rabobank = 'Rabobank',
  AbnAmro = 'AbnAmro',
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
  measurement?: Maybe<CuboidMeasurement>;
  serviceHeating?: Maybe<Array<Maybe<SpaceServiceHeating>>>;
  images?: Maybe<Array<File>>;
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

export type Billing = {
  __typename?: 'Billing';
  url: Scalars['String'];
};

export type BillingResponse = {
  url: Scalars['String'];
};

export type BogGeneral = {
  __typename?: 'BogGeneral';
  type?: Maybe<GeneralBogType>;
  characteristics?: Maybe<GeneralCharacteristicsBog>;
  startsOnFloor?: Maybe<Scalars['Int']>;
  totalFloors?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type BogGeneralInput = {
  type?: Maybe<GeneralBogType>;
  characteristics?: Maybe<GeneralCharacteristicsBog>;
  startsOnFloor?: Maybe<Scalars['Int']>;
  totalFloors?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type BogPrices = {
  __typename?: 'BogPrices';
  price?: Maybe<Scalars['AbsoluteFloat']>;
  vatRate?: Maybe<Scalars['AbsoluteFloat']>;
  priceVat?: Maybe<Scalars['AbsoluteFloat']>;
  priceIncVat?: Maybe<Scalars['AbsoluteFloat']>;
};

export type BogPricesInput = {
  price?: Maybe<Scalars['AbsoluteFloat']>;
  vatRate?: Maybe<Scalars['AbsoluteFloat']>;
  priceVat?: Maybe<Scalars['AbsoluteFloat']>;
  priceIncVat?: Maybe<Scalars['AbsoluteFloat']>;
};

export type BogSpace = LastUpdated & {
  __typename?: 'BogSpace';
  id: Scalars['ID'];
  type: BogSpaceType;
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  retailSpaceConfiguration?: Maybe<RetailSpace>;
  leisureSpaceConfiguration?: Maybe<LeisureSpace>;
  horecaSpaceConfiguration?: Maybe<HorecaSpace>;
  businessSpaceConfiguration?: Maybe<BusinessSpace>;
  officeSpaceConfiguration?: Maybe<OfficeSpace>;
  socialRealEstateSpaceConfiguration?: Maybe<SocialRealEstateSpace>;
  terrainConfiguration?: Maybe<Terrain>;
  storageConfiguration?: Maybe<Storage>;
  images?: Maybe<Array<File>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export enum BogSpaceType {
  BusinessSpace = 'BusinessSpace',
  OfficeSpace = 'OfficeSpace',
  RetailSpace = 'RetailSpace',
  Leisure = 'Leisure',
  HorecaSpace = 'HorecaSpace',
  SocialRealEstateSpace = 'SocialRealEstateSpace',
  Terrain = 'Terrain',
  Storage = 'Storage',
}

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

export enum BricrPlans {
  Professional = 'Professional',
  EnterPrise = 'EnterPrise',
  Start = 'Start',
}

export type BuildingMeasurements = {
  __typename?: 'BuildingMeasurements';
  length?: Maybe<Scalars['AbsoluteFloat']>;
  width?: Maybe<Scalars['AbsoluteFloat']>;
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  height?: Maybe<Scalars['AbsoluteFloat']>;
  volume?: Maybe<Scalars['AbsoluteFloat']>;
  constructionYear?: Maybe<Scalars['Int']>;
};

export type BuildingMeasurementsInput = {
  length?: Maybe<Scalars['AbsoluteFloat']>;
  width?: Maybe<Scalars['AbsoluteFloat']>;
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  height?: Maybe<Scalars['AbsoluteFloat']>;
  volume?: Maybe<Scalars['AbsoluteFloat']>;
  constructionYear?: Maybe<Scalars['Int']>;
};

export type BuildingPlotGeneral = {
  __typename?: 'BuildingPlotGeneral';
  availability?: Maybe<PropertyAvailabilityInformation>;
  construction?: Maybe<ConstructionInformation>;
  propertyDetails?: Maybe<BuildingPlotPropertyDetails>;
};

export type BuildingPlotGeneralInput = {
  availability?: Maybe<PropertyAvailabilityInformationInput>;
  construction?: Maybe<ConstructionInformationInput>;
  propertyDetails?: Maybe<BuildingPlotPropertyDetailsInput>;
};

export type BuildingPlotPropertyDetails = {
  __typename?: 'BuildingPlotPropertyDetails';
  plotReadyForConstruction?: Maybe<Scalars['Boolean']>;
  buildingPlotNumber?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  soilType?: Maybe<Scalars['String']>;
  measurements?: Maybe<RectangleMeasurement>;
};

export type BuildingPlotPropertyDetailsInput = {
  plotReadyForConstruction?: Maybe<Scalars['Boolean']>;
  buildingPlotNumber?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  measurements?: Maybe<RectangleMeasurementInput>;
  soilType?: Maybe<Scalars['String']>;
};

export enum BuildingType {
  Sheds = 'Sheds',
  RidingHalls = 'RidingHalls',
  Canteen = 'Canteen',
  StorageShed = 'StorageShed',
  MachineShed = 'MachineShed',
  GlassCurb = 'GlassCurb',
  ManureSilo = 'ManureSilo',
  HorseBoxes = 'HorseBoxes',
  CageHouse = 'CageHouse',
  Cubicles = 'Cubicles',
  FatteningPigsty = 'FatteningPigsty',
  BreedingPigsty = 'BreedingPigsty',
  PigletStable = 'PigletStable',
}

export type BuildingsSpace = {
  __typename?: 'BuildingsSpace';
  buildingType?: Maybe<Scalars['String']>;
  numberOfSameBuilding?: Maybe<Scalars['Int']>;
  buildingTypeNotes?: Maybe<Scalars['String']>;
  measurements?: Maybe<BuildingMeasurements>;
};

export type BuildingsSpaceInput = {
  buildingType?: Maybe<Scalars['String']>;
  numberOfSameBuilding?: Maybe<Scalars['Int']>;
  buildingTypeNotes?: Maybe<Scalars['String']>;
  measurements?: Maybe<BuildingMeasurementsInput>;
};

export type BulkCreateSalesCrm = {
  __typename?: 'BulkCreateSalesCrm';
  cyclusId: Scalars['ID'];
  crmIds?: Maybe<Array<Scalars['ID']>>;
};

export type BulkCreateSalesPim = {
  __typename?: 'BulkCreateSalesPim';
  cyclusId: Scalars['ID'];
  pimIds?: Maybe<Array<Scalars['ID']>>;
};

export type BulkDeleteNotificationsInput = {
  ids: Array<Scalars['ID']>;
};

export enum BulkEntities {
  Pim = 'Pim',
  ObjectType = 'ObjectType',
  Ncp = 'Ncp',
  Crm = 'Crm',
}

export enum BulkField {
  City = 'City',
  Status = 'Status',
  RentPrice = 'RentPrice',
  SalePrice = 'SalePrice',
  Security = 'Security',
  Result = 'Result',
}

export type BulkOperationInput = {
  operation: BulkOperations;
  ids: Array<Scalars['ID']>;
  entity: BulkEntities;
  field?: Maybe<BulkField>;
  value?: Maybe<Scalars['BulkFieldValue']>;
};

export type BulkOperationResult = {
  __typename?: 'BulkOperationResult';
  undoIds: Array<Scalars['ID']>;
};

export enum BulkOperations {
  SetField = 'SetField',
  Delete = 'Delete',
  Archive = 'Archive',
}

export type BulkReadNotificationsInput = {
  ids: Array<Scalars['ID']>;
};

export enum BusinessServicesType {
  ConcreteFloor = 'ConcreteFloor',
  Skylights = 'Skylights',
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
}

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

export type Cadastre = LastUpdated & {
  __typename?: 'Cadastre';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  mapsDescription?: Maybe<Scalars['String']>;
  type: CadastreType;
  maps?: Maybe<Array<CadastreMap>>;
  plot?: Maybe<CadastrePlot>;
  dateCreated?: Maybe<Scalars['Date']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
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

export type CadastreMapInput = {
  mapName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum CadastreMapType {
  Map = 'Map',
  Register = 'Register',
}

export enum CadastreOwnershipType {
  PerpetualLeaseChargedWith = 'PerpetualLeaseChargedWith',
  PropertyChargedWith = 'PropertyChargedWith',
  AnnualLeaseholdChargedWith = 'AnnualLeaseholdChargedWith',
  LeaseholdAndBuildingChargedWith = 'LeaseholdAndBuildingChargedWith',
  BuildingChargedWith = 'BuildingChargedWith',
  Other = 'Other',
}

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

export enum CadastreType {
  CadastreMap = 'CadastreMap',
  Plot = 'Plot',
}

export type CalendarGroup = {
  __typename?: 'CalendarGroup';
  id: Scalars['ID'];
  name: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Profile>>;
};

export enum CalendarTypes {
  Meeting = 'Meeting',
  Appointment = 'Appointment',
  Birthday = 'Birthday',
  Travel = 'Travel',
  Private = 'Private',
  Task = 'Task',
}

export type ChangesHistoryFilters = {
  entityType?: Maybe<EventEntityType>;
  relatedEntityId?: Maybe<Scalars['ID']>;
};

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
  Funda = 'Funda',
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

export type CheckCompanyRegistereInput = {
  name: Scalars['String'];
};

export type CheckRegisteredResponse = {
  __typename?: 'CheckRegisteredResponse';
  suggestions?: Maybe<Array<Scalars['String']>>;
  taken: Scalars['Boolean'];
};

export type CloneMatchProfileInput = {
  id: Scalars['ID'];
};

export enum CodeSizeType {
  Apartment = 'Apartment',
  Tightness = 'Tightness',
  PartLot = 'PartLot',
  InWholePlot = 'InWholePlot',
  MembershipRight = 'MembershipRight',
}

export type CommonAddMediaLinkInput = {
  parentId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommonAddPicturesInput = {
  parentId: Scalars['String'];
  pictures: Array<NewPictureInput>;
};

export type CommonAddTagInput = {
  parentId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommonAddTextChapterInput = {
  parentId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type CommonAddUspsInput = {
  parentId: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

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

export type CommonCosts = LastUpdated & {
  __typename?: 'CommonCosts';
  costs?: Maybe<Array<CommonCost>>;
  description?: Maybe<Scalars['String']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type CommonMedia = LastUpdated & {
  __typename?: 'CommonMedia';
  id: Scalars['String'];
  pictures?: Maybe<Array<Picture>>;
  mediaLinks?: Maybe<Array<MediaLink>>;
  textChapters?: Maybe<Array<TextChapter>>;
  usps?: Maybe<Array<Usp>>;
  tags?: Maybe<Array<Tag>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  mediaDescription?: Maybe<Scalars['String']>;
};

export type CommonMediaPicturesArgs = {
  sort?: Maybe<Sort>;
};

export type CommonNewPictureInput = {
  fileID: Scalars['String'];
  isMainPicture?: Maybe<Scalars['Boolean']>;
};

export type CommonPricing = LastUpdated & {
  __typename?: 'CommonPricing';
  rent?: Maybe<CommonRentInformations>;
  sale?: Maybe<CommonSaleInformations>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export enum CommonPricingType {
  Sale = 'Sale',
  Rent = 'Rent',
}

export type CommonRentInformations = {
  __typename?: 'CommonRentInformations';
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

export enum CommonRoomsType {
  Canteen = 'Canteen',
  Pantry = 'Pantry',
  Kitchen = 'Kitchen',
  FrontDesk = 'FrontDesk',
  Sanitary = 'Sanitary',
  ConferenceRoom = 'ConferenceRoom',
}

export type CommonSaleInformations = {
  __typename?: 'CommonSaleInformations';
  minPrice?: Maybe<Scalars['AbsoluteFloat']>;
  maxPrice?: Maybe<Scalars['AbsoluteFloat']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
  calculateAutomatically?: Maybe<Scalars['Boolean']>;
};

export type CommonSaleInformationsInput = {
  minPrice?: Maybe<Scalars['AbsoluteFloat']>;
  maxPrice?: Maybe<Scalars['AbsoluteFloat']>;
  calculateAutomatically?: Maybe<Scalars['Boolean']>;
};

export type CommonUpdateMediaDescriptionInput = {
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type CommonUpdateMediaLinkInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommonUpdatePictureInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['String']>;
  isMainPicture?: Maybe<Scalars['Boolean']>;
};

export type CommonUpdateTagInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CommonUpdateTextChapterInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type CommonUpdateUspsInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  teams?: Maybe<Array<Team>>;
  users?: Maybe<Array<Profile>>;
  name?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressSecondLine?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  floor?: Maybe<Scalars['Int']>;
  chamberOfCommerce?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
};

export type ConfirmProfileInvite = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
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

export enum ContactAddressType {
  HomeAddress = 'HomeAddress',
  SalesAddress = 'SalesAddress',
  MailingAddress = 'MailingAddress',
  VisitingAddress = 'VisitingAddress',
  BillingAddress = 'BillingAddress',
  FutureAddress = 'FutureAddress',
  PreviousAddress = 'PreviousAddress',
  SecondAddress = 'SecondAddress',
  Custom = 'Custom',
}

export enum ContactEmailAddressType {
  MainAddress = 'MainAddress',
  AddressForMatches = 'AddressForMatches',
  AddressForInvoices = 'AddressForInvoices',
  Private = 'Private',
  Business = 'Business',
  PreviousAddress = 'PreviousAddress',
  Custom = 'Custom',
}

export enum ContactPhoneNumberType {
  MainNumber = 'MainNumber',
  MobileNumber = 'MobileNumber',
  PrivateNumber = 'PrivateNumber',
  BusinessNumber = 'BusinessNumber',
  FaxNumber = 'FaxNumber',
  Custom = 'Custom',
}

export enum ContactSocialMediaType {
  Facebook = 'Facebook',
  Twitter = 'Twitter',
  LinkedIn = 'LinkedIn',
  Custom = 'Custom',
}

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

export type CostsDetails = LastUpdated & {
  __typename?: 'CostsDetails';
  description?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export type CreateCompanyInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  space: Scalars['String'];
  amountUsers?: Maybe<Scalars['Int']>;
  amountProperties?: Maybe<Scalars['Int']>;
  plan?: Maybe<BricrPlans>;
};

export type CreateCrmInput = {
  type: CrmType;
  firstName?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type CreateDmsFolderInput = {
  entityId: Scalars['ID'];
  foldername: Scalars['String'];
  entityType: DmsEntityType;
  type: DmsFolderType;
  order?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export type CreateEmailAddressInput = {
  profileId: Scalars['String'];
  emailAddress: Scalars['String'];
  emailAddressType?: Maybe<EmailAddressType>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export type CreateFileInput = {
  fileName: Scalars['String'];
  fileType: Scalars['String'];
  permission: FilePermission;
  description?: Maybe<Scalars['String']>;
};

export type CreateHistoryDataInput = {
  __typename?: 'CreateHistoryDataInput';
  data: Scalars['String'];
};

export type CreateHistoryInput = {
  __typename?: 'CreateHistoryInput';
  entity: Entities;
  entityId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  data: Scalars['String'];
  oldData: Scalars['String'];
  userId: Scalars['String'];
  companyId: Scalars['String'];
};

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
  projectType?: Maybe<ProjectType>;
};

export type CreateNotificationInput = {
  type: NotificationType;
  receiver: Scalars['ID'];
  description: Scalars['String'];
  linkedEntity?: Maybe<LinkedEntityInput>;
};

export type CreateObjectTypeInput = {
  name: Scalars['String'];
  ncpId: Scalars['ID'];
};

export type CreatePhoneNumberInput = {
  profileId: Scalars['String'];
  phoneNumber: Scalars['String'];
  phoneNumberType?: Maybe<PhoneNumberType>;
  isPublic?: Maybe<Scalars['Boolean']>;
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
  attentionNote?: Maybe<Scalars['String']>;
};

export type CreateProfileInput = {
  gender?: Maybe<GenderType>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  functionDescription?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  adminSettings?: Maybe<Array<AdminSettings>>;
  language?: Maybe<Scalars['String']>;
};

export type CreateProjectPhaseInput = {
  name: Scalars['String'];
  logoId?: Maybe<Scalars['ID']>;
  ncpId?: Maybe<Scalars['ID']>;
};

export type CreateSales = {
  __typename?: 'CreateSales';
  label: SalesLabel;
  type: SalesType;
  extraInfo?: Maybe<Scalars['String']>;
};

export type CreateSalesAccountContact = {
  __typename?: 'CreateSalesAccountContact';
  cyclusId: Scalars['ID'];
  userId: Scalars['ID'];
  role: SalesRole;
};

export type CreateSalesAddress = {
  __typename?: 'CreateSalesAddress';
  cyclusId: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  extraInfo?: Maybe<Scalars['String']>;
};

export type CreateSalesBrokerage = {
  __typename?: 'CreateSalesBrokerage';
  cyclusId: Scalars['ID'];
  type: Scalars['Int'];
  percentage?: Maybe<Scalars['Int']>;
  fixedAmount?: Maybe<Scalars['Int']>;
  amountValues?: Maybe<Scalars['String']>;
  vatPercentage?: Maybe<Scalars['Int']>;
  reservationRate?: Maybe<Scalars['String']>;
  partialCommission?: Maybe<Scalars['Int']>;
  bonusPercentage?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type CreateSalesCrm = {
  __typename?: 'CreateSalesCrm';
  cyclusId: Scalars['ID'];
  crmId: Scalars['ID'];
};

export type CreateSalesEntity = {
  __typename?: 'CreateSalesEntity';
  cyclusId: Scalars['ID'];
  entityType: Entities;
  entityId: Scalars['ID'];
};

export type CreateSalesFile = {
  __typename?: 'CreateSalesFile';
  cyclusId: Scalars['ID'];
  documentId: Scalars['ID'];
  label: Scalars['String'];
};

export type CreateSalesInput = {
  label: SalesLabel;
  type: SalesType;
  extraInfo?: Maybe<Scalars['String']>;
};

export type CreateSalesPackage = {
  __typename?: 'CreateSalesPackage';
  cyclusId: Scalars['ID'];
  package: Scalars['String'];
};

export type CreateSalesPim = {
  __typename?: 'CreateSalesPim';
  cyclusId: Scalars['ID'];
  pimId: Scalars['ID'];
};

export type CreateSalesStatusChange = {
  __typename?: 'CreateSalesStatusChange';
  cyclusId: Scalars['ID'];
  label: SalesLabel;
  status: SalesStatus;
  historyId: Scalars['ID'];
};

export type CreateSocialMediaLinkInput = {
  profileId: Scalars['String'];
  socialMediaLink: Scalars['String'];
  socialMediaLinkType?: Maybe<SocialMediaLinkType>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export type CreateTaskInput = {
  title: Scalars['String'];
  assignee: Scalars['ID'];
  startDate?: Maybe<Scalars['Date']>;
  deadline?: Maybe<Scalars['Date']>;
  priority: TaskPriority;
  label: Scalars['String'];
};

export type CreateWorkflowActionInput = {
  companyId: Scalars['ID'];
  workflowTriggerId: Scalars['ID'];
  workflowActionGroupType?: Maybe<WorkflowActionGroupType>;
  workflowActionGroupId?: Maybe<Scalars['ID']>;
  type: WorkflowActionType;
};

export type CreateWorkflowSectionInput = {
  __typename?: 'CreateWorkflowSectionInput';
  companyId: Scalars['ID'];
  workflowTemplateId: Scalars['ID'];
  name: Scalars['String'];
  startpoint: WorkflowSectionStartpoint;
  startpointOutside?: Maybe<Scalars['ID']>;
  endpoint: WorkflowSectionEndpoint;
  endpointOutside?: Maybe<Scalars['ID']>;
};

export type CreateWorkflowTemplateInput = {
  __typename?: 'CreateWorkflowTemplateInput';
  companyId: Scalars['ID'];
  name: Scalars['String'];
  icon: Scalars['String'];
};

export type CreateWorkflowTriggerInput = {
  __typename?: 'CreateWorkflowTriggerInput';
  companyId: Scalars['ID'];
  workflowSectionId: Scalars['ID'];
  type: WorkflowTriggerType;
};

export enum CriteriaOrder {
  JointIncome = 'JointIncome',
  MinimalAmountOfMissingDocuments = 'MinimalAmountOfMissingDocuments',
  NumberOfPreferenceInterest = 'NumberOfPreferenceInterest',
  DateOfRegistrationInterest = 'DateOfRegistrationInterest',
  AdditionalWork = 'AdditionalWork',
}

export type CrmAddress = {
  __typename?: 'CrmAddress';
  id: Scalars['ID'];
  type: ContactAddressType;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['Int']>;
  addition?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  extraInformation?: Maybe<Scalars['String']>;
  availableFrom?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
};

export type CrmAddressInput = {
  type: ContactAddressType;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['Int']>;
  addition?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  extraInformation?: Maybe<Scalars['String']>;
  availableFrom?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
};

export type CrmBankAccount = {
  __typename?: 'CrmBankAccount';
  id: Scalars['ID'];
  type: Scalars['String'];
  accountNumber?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swift?: Maybe<Scalars['String']>;
  purpose?: Maybe<Scalars['String']>;
};

export type CrmBankAccountInput = {
  type: Scalars['String'];
  accountNumber?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  swift?: Maybe<Scalars['String']>;
  purpose?: Maybe<Scalars['String']>;
};

export type CrmContact = {
  __typename?: 'CrmContact';
  type: Scalars['String'];
  contact: LinkedCrm;
};

export type CrmContactInformation = LastUpdated & {
  __typename?: 'CrmContactInformation';
  id: Scalars['ID'];
  contactInfoDescription?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<CrmAddress>>;
  phoneNumbers?: Maybe<Array<CrmPhoneNumber>>;
  emailAddresses?: Maybe<Array<CrmEmailAddress>>;
  socialMedia?: Maybe<Array<CrmSocialMedia>>;
  dateCreated: Scalars['Date'];
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type CrmContactInput = {
  type: Scalars['String'];
  contactId: Scalars['ID'];
};

export type CrmEmailAddress = {
  __typename?: 'CrmEmailAddress';
  id: Scalars['ID'];
  type: ContactEmailAddressType;
  email?: Maybe<Scalars['String']>;
  availableFrom?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
};

export type CrmEmailAddressInput = {
  type: ContactEmailAddressType;
  email?: Maybe<Scalars['String']>;
  availableFrom?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
};

export type CrmEmployerIncome = {
  __typename?: 'CrmEmployerIncome';
  profession?: Maybe<EmployerIncomeProfession>;
  employer?: Maybe<LinkedCrm>;
  employerInformation?: Maybe<CrmEmployerInformation>;
  employmentType?: Maybe<Scalars['String']>;
  grossIncome?: Maybe<Scalars['Int']>;
  grossIncomePeriod?: Maybe<PeriodType>;
  holidayBonus?: Maybe<Scalars['Boolean']>;
  fixedThirteenthMonth?: Maybe<Scalars['Boolean']>;
  irregularityAllowance?: Maybe<Scalars['Int']>;
  irregularityAllowancePeriod?: Maybe<PeriodType>;
  profitDistribution?: Maybe<Scalars['Int']>;
  profitDistributionPeriod?: Maybe<PeriodType>;
  commission?: Maybe<Scalars['Int']>;
  commissionPeriod?: Maybe<PeriodType>;
  overtime?: Maybe<Scalars['Int']>;
  overtimePeriod?: Maybe<PeriodType>;
};

export type CrmEmployerIncomeInput = {
  profession?: Maybe<EmployerIncomeProfession>;
  employerId?: Maybe<Scalars['ID']>;
  employerInformation?: Maybe<CrmEmployerInformationInput>;
  employmentType?: Maybe<Scalars['String']>;
  grossIncome?: Maybe<Scalars['Int']>;
  grossIncomePeriod?: Maybe<PeriodType>;
  holidayBonus?: Maybe<Scalars['Boolean']>;
  fixedThirteenthMonth?: Maybe<Scalars['Boolean']>;
  irregularityAllowance?: Maybe<Scalars['Int']>;
  irregularityAllowancePeriod?: Maybe<PeriodType>;
  profitDistribution?: Maybe<Scalars['Int']>;
  profitDistributionPeriod?: Maybe<PeriodType>;
  commission?: Maybe<Scalars['Int']>;
  commissionPeriod?: Maybe<PeriodType>;
  overtime?: Maybe<Scalars['Int']>;
  overtimePeriod?: Maybe<PeriodType>;
};

export type CrmEmployerInformation = {
  __typename?: 'CrmEmployerInformation';
  name?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['Int']>;
  addition?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

export type CrmEmployerInformationInput = {
  name?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['Int']>;
  addition?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

export type CrmEntrepreneurIncome = {
  __typename?: 'CrmEntrepreneurIncome';
  entrepreneurType?: Maybe<EntrepreneurType>;
  companyCar?: Maybe<Scalars['Boolean']>;
  companyBike?: Maybe<Scalars['Boolean']>;
  pastPensionAge?: Maybe<Scalars['Boolean']>;
  smeProfitExemption?: Maybe<Scalars['Boolean']>;
  incomePerYear?: Maybe<Scalars['Int']>;
  workingHoursPerMonth?: Maybe<Scalars['Int']>;
  yearsAsIndependent?: Maybe<Scalars['Int']>;
};

export type CrmEntrepreneurIncomeInput = {
  entrepreneurType?: Maybe<EntrepreneurType>;
  companyCar?: Maybe<Scalars['Boolean']>;
  companyBike?: Maybe<Scalars['Boolean']>;
  pastPensionAge?: Maybe<Scalars['Boolean']>;
  smeProfitExemption?: Maybe<Scalars['Boolean']>;
  incomePerYear?: Maybe<Scalars['Int']>;
  workingHoursPerMonth?: Maybe<Scalars['Int']>;
  yearsAsIndependent?: Maybe<Scalars['Int']>;
};

export type CrmEquityIncome = {
  __typename?: 'CrmEquityIncome';
  income?: Maybe<Scalars['Int']>;
};

export type CrmEquityIncomeInput = {
  income?: Maybe<Scalars['Int']>;
};

export type CrmFamilyContacts = {
  __typename?: 'CrmFamilyContacts';
  id: Scalars['ID'];
  maritalStatus?: Maybe<Scalars['String']>;
  maritalStatusDate?: Maybe<Scalars['Date']>;
  maritalStatusInformation?: Maybe<Scalars['String']>;
  familyCompositionChildren?: Maybe<Scalars['Int']>;
  familyCompositionAdults?: Maybe<Scalars['Int']>;
  familyCompositionInformation?: Maybe<Scalars['String']>;
  partners?: Maybe<Array<CrmPartner>>;
  contacts?: Maybe<Array<CrmContact>>;
};

export type CrmFinancial = {
  __typename?: 'CrmFinancial';
  id: Scalars['ID'];
  financialInfo?: Maybe<Scalars['String']>;
  income?: Maybe<Array<CrmIncome>>;
  financialObligations?: Maybe<Array<CrmFinancialObligation>>;
  bankAccounts?: Maybe<Array<CrmBankAccount>>;
};

export type CrmFinancialObligation = {
  __typename?: 'CrmFinancialObligation';
  id: Scalars['ID'];
  type: Scalars['String'];
  financialObligation?: Maybe<Scalars['Int']>;
  information?: Maybe<Scalars['String']>;
};

export type CrmFinancialObligationInput = {
  type: Scalars['String'];
  financialObligation?: Maybe<Scalars['Int']>;
  information?: Maybe<Scalars['String']>;
};

export type CrmGeneral = LastUpdated & {
  __typename?: 'CrmGeneral';
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  extraNames?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  avatar?: Maybe<File>;
  gender?: Maybe<GenderType>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  dateOfDeath?: Maybe<Scalars['Date']>;
  isPassedAway?: Maybe<Scalars['Boolean']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  identification?: Maybe<IdentificationType>;
  identificationNumber?: Maybe<Scalars['String']>;
  identificationIssueCity?: Maybe<Scalars['String']>;
  identificationIssueDate?: Maybe<Scalars['Date']>;
  identificationExpirationDate?: Maybe<Scalars['Date']>;
  preferredTitlePrefix?: Maybe<Scalars['String']>;
  preferredTitleSuffix?: Maybe<Scalars['String']>;
  preferredLetterSalutation?: Maybe<Scalars['String']>;
  preferredTitleInformation?: Maybe<Scalars['String']>;
  identificationNumbers?: Maybe<Array<CrmIdentificationNumber>>;
  status?: Maybe<CrmStatus>;
  dateCreated: Scalars['Date'];
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  completeness: Scalars['Float'];
};

export type CrmHomeSituation = {
  __typename?: 'CrmHomeSituation';
  id: Scalars['ID'];
  currentHomeSituation?: Maybe<Scalars['String']>;
  currentHomeStatus?: Maybe<Scalars['String']>;
  currentHomeSalesValue?: Maybe<Scalars['Int']>;
  currentHomeMortgage?: Maybe<Scalars['Int']>;
  currentHomeInformation?: Maybe<Scalars['String']>;
  reasonToMove?: Maybe<Array<Scalars['String']>>;
  movingDate?: Maybe<Scalars['Date']>;
  movingInformation?: Maybe<Scalars['String']>;
};

export type CrmIdentificationNumber = {
  __typename?: 'CrmIdentificationNumber';
  type: IdentificationNumberType;
  number?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CrmIdentificationNumberInput = {
  type: IdentificationNumberType;
  number?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CrmIncome = {
  __typename?: 'CrmIncome';
  id: Scalars['ID'];
  type: IncomeType;
  information?: Maybe<Scalars['String']>;
  employerIncome?: Maybe<CrmEmployerIncome>;
  equityIncome?: Maybe<CrmEquityIncome>;
  pensionIncome?: Maybe<CrmPensionIncome>;
  socialBenefitIncome?: Maybe<CrmSocialBenefitIncome>;
  entrepreneurIncome?: Maybe<CrmEntrepreneurIncome>;
};

export type CrmIncomeInput = {
  type: IncomeType;
  information?: Maybe<Scalars['String']>;
  employerIncome?: Maybe<CrmEmployerIncomeInput>;
  equityIncome?: Maybe<CrmEquityIncomeInput>;
  pensionIncome?: Maybe<CrmPensionIncomeInput>;
  socialBenefitIncome?: Maybe<CrmSocialBenefitIncomeInput>;
  entrepreneurIncome?: Maybe<CrmEntrepreneurIncomeInput>;
};

export type CrmListItem = {
  __typename?: 'CrmListItem';
  id: Scalars['ID'];
  type: CrmType;
  firstName?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<GenderType>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  maritalStatus?: Maybe<Scalars['String']>;
  familyCompositionChildren?: Maybe<Scalars['Int']>;
  familyCompositionAdults?: Maybe<Scalars['Int']>;
  currentHomeSituation?: Maybe<Scalars['String']>;
  partners?: Maybe<Array<CrmPartner>>;
  phoneNumber?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<CrmAddress>>;
  email?: Maybe<Scalars['String']>;
  avatar?: Maybe<File>;
  status?: Maybe<CrmStatus>;
  matchProfilesFrom?: Maybe<Scalars['Date']>;
  matchProfilesTo?: Maybe<Scalars['Date']>;
  sales?: Maybe<Array<Sales>>;
  dateCreated: Scalars['Date'];
  dateUpdated?: Maybe<Scalars['Date']>;
  completeness: Scalars['Float'];
};

export type CrmListSearchResult = {
  __typename?: 'CrmListSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<CrmListItem>>;
};

export type CrmPartner = {
  __typename?: 'CrmPartner';
  isDivorced?: Maybe<Scalars['Boolean']>;
  partner: LinkedCrm;
};

export type CrmPartnerInput = {
  id: Scalars['ID'];
  isDivorced?: Maybe<Scalars['Boolean']>;
  isPassedAway?: Maybe<Scalars['Boolean']>;
  dateOfDeath?: Maybe<Scalars['Date']>;
};

export type CrmPensionIncome = {
  __typename?: 'CrmPensionIncome';
  aowBenefit?: Maybe<Scalars['Int']>;
  aowBenefitPeriod?: Maybe<PeriodType>;
  retirementBenefit?: Maybe<Scalars['Int']>;
  retirementBenefitPeriod?: Maybe<PeriodType>;
};

export type CrmPensionIncomeInput = {
  aowBenefit?: Maybe<Scalars['Int']>;
  aowBenefitPeriod?: Maybe<PeriodType>;
  retirementBenefit?: Maybe<Scalars['Int']>;
  retirementBenefitPeriod?: Maybe<PeriodType>;
};

export type CrmPhoneNumber = {
  __typename?: 'CrmPhoneNumber';
  id: Scalars['ID'];
  type: ContactPhoneNumberType;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  availableFrom?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
};

export type CrmPhoneNumberInput = {
  type: ContactPhoneNumberType;
  countryCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  availableFrom?: Maybe<Scalars['Date']>;
  note?: Maybe<Scalars['String']>;
};

export type CrmSocialBenefitIncome = {
  __typename?: 'CrmSocialBenefitIncome';
  income?: Maybe<Scalars['Int']>;
  incomePeriod?: Maybe<PeriodType>;
  socialBenefitType?: Maybe<Scalars['String']>;
};

export type CrmSocialBenefitIncomeInput = {
  income?: Maybe<Scalars['Int']>;
  incomePeriod?: Maybe<PeriodType>;
  socialBenefitType?: Maybe<Scalars['String']>;
};

export type CrmSocialMedia = {
  __typename?: 'CrmSocialMedia';
  id: Scalars['ID'];
  type: ContactSocialMediaType;
  url?: Maybe<Scalars['String']>;
};

export type CrmSocialMediaInput = {
  type: ContactSocialMediaType;
  url?: Maybe<Scalars['String']>;
};

export enum CrmStatus {
  ActionRequired = 'ActionRequired',
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum CrmType {
  Relation = 'Relation',
  Business = 'Business',
}

export type CrmWithSameInfoInput = {
  firstName?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type CuboidMeasurement = {
  __typename?: 'CuboidMeasurement';
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  surface?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

export enum CultivationTypes {
  FlowerBulbs = 'FlowerBulbs',
  Fruit = 'Fruit',
  Plants = 'Plants',
  Vegetables = 'Vegetables',
  Flowers = 'Flowers',
  Trees = 'Trees',
}

export enum CurrentHomeSituationType {
  LiveIn = 'LiveIn',
  HomeForSale = 'HomeForSale',
  SocialHousing = 'SocialHousing',
  FreeSectorRentalHome = 'FreeSectorRentalHome',
  StudentHouse = 'StudentHouse',
}

export enum CurrentHomeStatusType {
  HouseSold = 'HouseSold',
  AvailableForSale = 'AvailableForSale',
}

export type DateRange = {
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
};

export enum DateRangeType {
  ThirtyDays = 'ThirtyDays',
  TwoWeeks = 'TwoWeeks',
  OneWeek = 'OneWeek',
  ThreeDays = 'ThreeDays',
}

export type DeleteDmsFolderInput = {
  entityId: Scalars['ID'];
  id: Scalars['ID'];
};

export type DeleteEntityInput = {
  entityType: EventParentType;
  entityIds: Array<Scalars['String']>;
};

export type DeleteNotificationInput = {
  id: Scalars['ID'];
};

export type DeleteResult = {
  __typename?: 'DeleteResult';
  successful?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  undoId?: Maybe<Scalars['String']>;
};

export enum DestinationType {
  Socially = 'Socially',
  Living = 'Living',
}

export enum DevelopmentType {
  New = 'New',
  Existing = 'Existing',
}

export enum DistanceUnit {
  Meters = 'Meters',
  Kilometers = 'Kilometers',
}

export enum DmsCrmFolderType {
  Personal = 'Personal',
  Emails = 'Emails',
  ContractsPrint = 'ContractsPrint',
  Surveys = 'Surveys',
  Invoices = 'Invoices',
}

export enum DmsEntityType {
  Pim = 'Pim',
  Ncp = 'Ncp',
  Crm = 'Crm',
  Sales = 'Sales',
}

export type DmsFolder = {
  __typename?: 'DmsFolder';
  entityId: Scalars['ID'];
  id: Scalars['ID'];
  companyId: Scalars['ID'];
  foldername: Scalars['String'];
  entityType: DmsEntityType;
  type: DmsFolderType;
  order?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export enum DmsFolderType {
  Custom = 'Custom',
  Default = 'Default',
}

export enum DmsPimFolderType {
  Aquisition = 'Aquisition',
  Quotation = 'Quotation',
  SalesOrder = 'SalesOrder',
  Property = 'Property',
  Drawing = 'Drawing',
  Questionaires = 'Questionaires',
  ListOfItems = 'ListOfItems',
  Publication = 'Publication',
  Contracts = 'Contracts',
  Internal = 'Internal',
}

export type DraftAppointment = {
  __typename?: 'DraftAppointment';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  alternativeTerms?: Maybe<Array<AppointmentTerm>>;
  allDay?: Maybe<Scalars['Boolean']>;
  confirmedDate?: Maybe<Scalars['Boolean']>;
  repeatAppointment?: Maybe<AppointmentRepeat>;
  description?: Maybe<Scalars['String']>;
  assignedPimIds?: Maybe<Array<Scalars['String']>>;
  agreementType?: Maybe<Array<Maybe<AppointmentMeetingType>>>;
  invitedPersons?: Maybe<Array<Scalars['String']>>;
  isInsideOffice?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  outsideLocation?: Maybe<Scalars['String']>;
  travelTimeBefore?: Maybe<Scalars['Int']>;
  travelTimeAfter?: Maybe<Scalars['Int']>;
  state?: Maybe<AppointmentState>;
  type?: Maybe<CalendarTypes>;
  appointmentType?: Maybe<AppointmentType>;
  taskLabel?: Maybe<TaskLabel>;
};

export type DraftAppointmentInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  alternativeTerms?: Maybe<Array<AppointmentTermInput>>;
  allDay?: Maybe<Scalars['Boolean']>;
  confirmedDate?: Maybe<Scalars['Boolean']>;
  repeatAppointment?: Maybe<AppointmentRepeat>;
  description?: Maybe<Scalars['String']>;
  assignedPimIds?: Maybe<Array<Scalars['String']>>;
  agreementType?: Maybe<Array<Maybe<AppointmentMeetingType>>>;
  invitedPersons?: Maybe<Array<Scalars['String']>>;
  isInsideOffice?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  outsideLocation?: Maybe<Scalars['String']>;
  travelTimeBefore?: Maybe<Scalars['Int']>;
  travelTimeAfter?: Maybe<Scalars['Int']>;
  type?: Maybe<CalendarTypes>;
  appointmentType?: Maybe<AppointmentType>;
  taskLabel?: Maybe<TaskLabel>;
};

export type Email = {
  __typename?: 'Email';
  id: Scalars['ID'];
  folder: EmailFolder;
  from: Array<EmailAndName>;
  to: Array<EmailAndName>;
  cc?: Maybe<Array<EmailAndName>>;
  bcc?: Maybe<Array<EmailAndName>>;
  subject: Scalars['String'];
  body: Scalars['String'];
  date: Scalars['Date'];
  unread?: Maybe<Scalars['Boolean']>;
  files?: Maybe<Array<EmailAttachment>>;
  thread_id?: Maybe<Scalars['String']>;
  threads?: Maybe<EmailThread>;
  threadMessages?: Maybe<Array<ThreadMessage>>;
};

export type EmailAddress = {
  __typename?: 'EmailAddress';
  id: Scalars['String'];
  emailAddress: Scalars['String'];
  emailAddressType?: Maybe<EmailAddressType>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export enum EmailAddressType {
  Business = 'Business',
  Private = 'Private',
}

export type EmailAndName = {
  __typename?: 'EmailAndName';
  email: Scalars['String'];
  name: Scalars['String'];
};

export type EmailAndNameInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type EmailAttachment = {
  __typename?: 'EmailAttachment';
  contentDisposition: Scalars['String'];
  contentType: Scalars['String'];
  filename: Scalars['String'];
  id: Scalars['String'];
  size: Scalars['Int'];
};

export type EmailFolder = {
  __typename?: 'EmailFolder';
  id: Scalars['ID'];
  nylasFolderId: Scalars['ID'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type EmailFolderListItem = {
  __typename?: 'EmailFolderListItem';
  folder: EmailFolder;
  numberOfUnreadEmails: Scalars['Int'];
};

export type EmailListItem = {
  __typename?: 'EmailListItem';
  id: Scalars['ID'];
  folder: EmailFolder;
  from: Array<EmailAndName>;
  to: Array<EmailAndName>;
  subject: Scalars['String'];
  date: Scalars['Date'];
  unread?: Maybe<Scalars['Boolean']>;
  thread_id?: Maybe<Scalars['String']>;
  threads?: Maybe<EmailThread>;
  threadMessages?: Maybe<Array<ThreadMessage>>;
  files?: Maybe<Array<EmailAttachment>>;
};

export type EmailThread = {
  __typename?: 'EmailThread';
  id: Scalars['ID'];
  message_ids: Array<Scalars['String']>;
  participants: Array<EmailAndName>;
};

export enum EmployerIncomeProfession {
  Designer = 'Designer',
}

export enum EmploymentType {
  FixedTerm = 'FixedTerm',
  Indefinitely = 'Indefinitely',
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

export enum Entities {
  Team = 'team',
  Pim = 'pim',
  ListPim = 'listPim',
  GeneralPim = 'generalPim',
  PimCadastre = 'pimCadastre',
  PimPrices = 'pimPrices',
  PimOutside = 'pimOutside',
  PimInside = 'pimInside',
  Profile = 'profile',
  PimServices = 'pimServices',
  PimMedia = 'pimMedia',
  PimSpecification = 'pimSpecification',
  PimSales = 'pimSales',
  Label = 'label',
  NcpLabel = 'ncpLabel',
  TaskLabel = 'taskLabel',
  PimLocation = 'pimLocation',
  Event = 'event',
  NcpGeneral = 'ncpGeneral',
  ListNcp = 'listNcp',
  Ncp = 'ncp',
  NcpCharacteristics = 'ncpCharacteristics',
  NcpPrices = 'ncpPrices',
  NcpMedia = 'ncpMedia',
  NcpServices = 'ncpServices',
  NcpLinkedPims = 'ncpLinkedPims',
  ProjectPhase = 'projectPhase',
  ObjectType = 'objectType',
  ObjectTypeGeneral = 'objectTypeGeneral',
  ObjectTypePrices = 'objectTypePrices',
  ObjectTypeMedia = 'objectTypeMedia',
  ObjectTypeLinkedPims = 'objectTypeLinkedPims',
  ObjectTypeCharacteristics = 'objectTypeCharacteristics',
  ObjectTypeServices = 'objectTypeServices',
  ObjectTypesList = 'objectTypesList',
  ObjectTypeLabel = 'objectTypeLabel',
  Company = 'company',
  Task = 'task',
  Notification = 'notification',
  Crm = 'crm',
  CrmList = 'crmList',
  CrmGeneral = 'crmGeneral',
  Plan = 'plan',
  CrmFamilyContacts = 'crmFamilyContacts',
  CrmHomeSituation = 'crmHomeSituation',
  CrmFinancial = 'crmFinancial',
  CrmContactInformation = 'crmContactInformation',
  CrmMatchProfile = 'crmMatchProfile',
  AddOn = 'addOn',
  TiaraMutation = 'tiaraMutation',
  Email = 'email',
  Users = 'users',
  Sales = 'sales',
}

export type Entity = {
  __typename?: 'Entity';
  type?: Maybe<Scalars['String']>;
  subType?: Maybe<Scalars['String']>;
};

export type EntityInput = {
  type?: Maybe<Scalars['String']>;
  subType?: Maybe<Scalars['String']>;
};

export type EntityLinkedWithPims = {
  id: Scalars['ID'];
  linkedProperties: PimListSearchResult;
  linkedPropertiesIds?: Maybe<Array<Scalars['ID']>>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type EntityLinkedWithPimsLinkedPropertiesArgs = {
  filters?: Maybe<LinkedPimFilters>;
  sort?: Maybe<Array<Sort>>;
  pagination: Pagination;
};

export enum EntityWithFiles {
  Pim = 'Pim',
  Ncp = 'Ncp',
  ObjectType = 'ObjectType',
  Space = 'Space',
  BogSpace = 'BogSpace',
  AogSpace = 'AogSpace',
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
  Profile = 'Profile',
  Crm = 'Crm',
  Company = 'Company',
}

export enum EntityWithMultipleFiles {
  Pim = 'Pim',
  Ncp = 'Ncp',
  ObjectType = 'ObjectType',
  Space = 'Space',
  BogSpace = 'BogSpace',
  AogSpace = 'AogSpace',
  OutsideFeature = 'OutsideFeature',
  OutsideGeneral = 'OutsideGeneral',
  OutsidePropertyRelated = 'OutsidePropertyRelated',
  RoofInformation = 'RoofInformation',
  NcpProjectMarketing = 'NcpProjectMarketing',
  ObjectTypeProjectMarketing = 'ObjectTypeProjectMarketing',
}

export enum EntrepreneurType {
  IbEntrepreneur = 'IbEntrepreneur',
  Dga = 'Dga',
}

export type Event = {
  __typename?: 'Event';
  id: Scalars['String'];
  entityType: EventEntityType;
  relatedEntityId?: Maybe<Scalars['String']>;
  action: EventAction;
  timestamp: Scalars['Date'];
  data?: Maybe<Scalars['EventData']>;
  emittedBy?: Maybe<Profile>;
  parentType?: Maybe<EventParentType>;
  parentId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export enum EventAction {
  Created = 'Created',
  Removed = 'Removed',
  Updated = 'Updated',
}

export enum EventEntityType {
  AllocationCriteria = 'AllocationCriteria',
  AogSpace = 'AogSpace',
  BogSpace = 'BogSpace',
  Cadastre = 'Cadastre',
  CadastreMap = 'CadastreMap',
  Cost = 'Cost',
  Crm = 'Crm',
  Floor = 'Floor',
  Inspection = 'Inspection',
  MediaLinks = 'MediaLinks',
  Meter = 'Meter',
  Ncp = 'Ncp',
  ObjectType = 'ObjectType',
  OutsideFeature = 'OutsideFeature',
  Pim = 'Pim',
  PimCost = 'PimCost',
  ProjectPhase = 'ProjectPhase',
  Reading = 'Reading',
  Service = 'Service',
  Space = 'Space',
  Tags = 'Tags',
  TextChapters = 'TextChapters',
  Usps = 'Usps',
  ViewingMoment = 'ViewingMoment',
}

export enum EventParentType {
  Pim = 'Pim',
  ObjectType = 'ObjectType',
  Ncp = 'Ncp',
}

export type Extension = {
  __typename?: 'Extension';
  yearOfExtension?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type ExtensionInput = {
  yearOfExtension?: Maybe<Scalars['Int']>;
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

export enum FenceTypes {
  Wood = 'Wood',
  Plastic = 'Plastic',
  PlasticBand = 'PlasticBand',
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
  entityID?: Maybe<Scalars['String']>;
  entity?: Maybe<EntityWithFiles>;
};

export enum FilePermission {
  Public = 'public',
  Private = 'private',
}

export enum FinancialObligationType {
  Obligation1 = 'Obligation1',
  Obligation2 = 'Obligation2',
  Obligation3 = 'Obligation3',
}

export type Floor = LastUpdated & {
  __typename?: 'Floor';
  id: Scalars['String'];
  floorDescription?: Maybe<Scalars['String']>;
  level: Scalars['Int'];
  floorType: FloorType;
  spaces?: Maybe<Array<Space>>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export enum FloorType {
  Attic = 'Attic',
  Floor = 'Floor',
  Basement = 'Basement',
  GroundFloor = 'GroundFloor',
  Loft = 'Loft',
}

export type ForgotPasswordInput = {
  username: Scalars['String'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  error?: Maybe<Scalars['String']>;
  stack?: Maybe<Scalars['String']>;
};

export type Foundation = {
  __typename?: 'Foundation';
  type?: Maybe<FoundationTypeInformations>;
  material?: Maybe<FoundationMaterialInformations>;
};

export type FoundationInput = {
  type?: Maybe<FoundationTypeInformationsInput>;
  material?: Maybe<FoundationMaterialInformationsInput>;
};

export type FoundationMaterialInformations = {
  __typename?: 'FoundationMaterialInformations';
  type?: Maybe<Array<FoundationMaterialType>>;
  notes?: Maybe<Scalars['String']>;
};

export type FoundationMaterialInformationsInput = {
  type?: Maybe<Array<FoundationMaterialType>>;
  notes?: Maybe<Scalars['String']>;
};

export enum FoundationMaterialType {
  Concrete = 'Concrete',
  Timber = 'Timber',
  Steel = 'Steel',
  Plastic = 'Plastic',
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

export type FoundationTypeInformations = {
  __typename?: 'FoundationTypeInformations';
  type?: Maybe<FoundationType>;
  notes?: Maybe<Scalars['String']>;
};

export type FoundationTypeInformationsInput = {
  type?: Maybe<FoundationType>;
  notes?: Maybe<Scalars['String']>;
};

export enum GarageAndStorageMaterial {
  Stone = 'Stone',
  Wood = 'Wood',
  Plastic = 'Plastic',
  Metal = 'Metal',
  Other = 'Other',
}

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

export enum GenderType {
  Male = 'Male',
  Female = 'Female',
  GenderNeutral = 'GenderNeutral',
}

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

export type GeneralPimSearchResult = {
  __typename?: 'GeneralPimSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<PimGeneral>>;
};

export type GetBulkDetailsInput = {
  ids: Array<Scalars['ID']>;
  field: BulkField;
  entity: BulkEntities;
};

export type GetBulkResult = {
  __typename?: 'GetBulkResult';
  id: Scalars['ID'];
  value?: Maybe<Scalars['BulkFieldValue']>;
};

export type GetPrivateFileInput = {
  key: Scalars['ID'];
  entityID?: Maybe<Scalars['String']>;
  entity?: Maybe<EntityWithFiles>;
};

export type GoodToKnow = {
  __typename?: 'GoodToKnow';
  type?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  units?: Maybe<DistanceUnit>;
  checked?: Maybe<Scalars['Boolean']>;
};

export type GoodToKnowInput = {
  type?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Int']>;
  units?: Maybe<DistanceUnit>;
  checked?: Maybe<Scalars['Boolean']>;
};

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

export type GroundMeasurements = {
  __typename?: 'GroundMeasurements';
  length?: Maybe<Scalars['AbsoluteFloat']>;
  width?: Maybe<Scalars['AbsoluteFloat']>;
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  fullBuiltWidth?: Maybe<Scalars['AbsoluteFloat']>;
  currentNumberOfSeats?: Maybe<Scalars['Int']>;
  housingArea?: Maybe<Scalars['AbsoluteFloat']>;
};

export type GroundMeasurementsInput = {
  length?: Maybe<Scalars['AbsoluteFloat']>;
  width?: Maybe<Scalars['AbsoluteFloat']>;
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  fullBuiltWidth?: Maybe<Scalars['AbsoluteFloat']>;
  currentNumberOfSeats?: Maybe<Scalars['Int']>;
  housingArea?: Maybe<Scalars['AbsoluteFloat']>;
};

export type GroundSpace = {
  __typename?: 'GroundSpace';
  typeOfLooseGround?: Maybe<Scalars['String']>;
  soilType?: Maybe<Array<Scalars['String']>>;
  soilTypeNotes?: Maybe<Scalars['String']>;
  measurements?: Maybe<GroundMeasurements>;
  specifications?: Maybe<Array<AogSpecifications>>;
  cultivationTypes?: Maybe<Array<Scalars['String']>>;
  fenceTypes?: Maybe<Array<Scalars['String']>>;
};

export type GroundSpaceInput = {
  typeOfLooseGround?: Maybe<Scalars['String']>;
  soilType?: Maybe<Array<Scalars['String']>>;
  soilTypeNotes?: Maybe<Scalars['String']>;
  measurements?: Maybe<GroundMeasurementsInput>;
  specifications?: Maybe<Array<AogSpecificationsInput>>;
  cultivationTypes?: Maybe<Array<Scalars['String']>>;
  fenceTypes?: Maybe<Array<Scalars['String']>>;
};

export type Groups = {
  __typename?: 'Groups';
  id: Scalars['ID'];
  templateId: Scalars['ID'];
  groupName: Scalars['String'];
  copyFromId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  entity?: Maybe<Entity>;
};

export type GroupsInput = {
  templateId: Scalars['ID'];
  groupName: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  entity?: Maybe<EntityInput>;
};

export type GutterInformations = {
  __typename?: 'GutterInformations';
  type?: Maybe<GutterType>;
  notes?: Maybe<Scalars['String']>;
};

export type GutterInformationsInput = {
  type?: Maybe<GutterType>;
  notes?: Maybe<Scalars['String']>;
};

export enum GutterMaterial {
  Vinyl = 'Vinyl',
  Stainless = 'Stainless',
  Aluminium = 'Aluminium',
  Copper = 'Copper',
  Zinc = 'Zinc',
  Steel = 'Steel',
}

export type GutterMaterialInformations = {
  __typename?: 'GutterMaterialInformations';
  material?: Maybe<GutterMaterial>;
  notes?: Maybe<Scalars['String']>;
};

export type GutterMaterialInformationsInput = {
  material?: Maybe<GutterMaterial>;
  notes?: Maybe<Scalars['String']>;
};

export enum GutterType {
  HalfRound = 'HalfRound',
  Flatbottom = 'Flatbottom',
  NoGutter = 'NoGutter',
}

export type HasCharacteristicsSections = {
  characteristicsSections?: Maybe<Array<CharacteristicsSections>>;
};

export type HeatingSourceConfiguration = {
  __typename?: 'HeatingSourceConfiguration';
  type: HeatingSourceType;
  maintenanceContract?: Maybe<HeatingSourceMaintenanceContract>;
};

export type HeatingSourceMaintenanceContract = {
  __typename?: 'HeatingSourceMaintenanceContract';
  enabled: Scalars['Boolean'];
  endDate?: Maybe<Scalars['Date']>;
};

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

export type History = {
  __typename?: 'History';
  id: Scalars['String'];
  entity: Entities;
  entityId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  data: Scalars['String'];
  oldData: Scalars['String'];
  createdAt: Scalars['Date'];
  userId: Scalars['String'];
  companyId: Scalars['String'];
};

export type HistoryData = {
  __typename?: 'HistoryData';
  id: Scalars['String'];
  data: Scalars['String'];
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

export enum HomeSituation {
  LivingIn = 'LivingIn',
  OwnerOccupiedHome = 'OwnerOccupiedHome',
  SocialHousing = 'SocialHousing',
  FreeSectorRentalHome = 'FreeSectorRentalHome',
}

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

export type HorecaSpace = {
  __typename?: 'HorecaSpace';
  measurements?: Maybe<HorecaMeasurements>;
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
  specifications?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<HorecaPrices>;
  wealthClass?: Maybe<Scalars['String']>;
  legalForm?: Maybe<Scalars['String']>;
};

export type HorecaSpaceInput = {
  measurements?: Maybe<HorecaMeasurementsInput>;
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
  specifications?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<HorecaPricesInput>;
  wealthClass?: Maybe<Scalars['String']>;
  legalForm?: Maybe<Scalars['String']>;
};

export enum HorecaSpecificationType {
  TakeoverPersonnel = 'TakeoverPersonnel',
  CateringArea = 'CateringArea',
  ResidentialObjectAvailable = 'ResidentialObjectAvailable',
  Terrace = 'Terrace',
  Luxery = 'Luxery',
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
  FastFood = 'FastFood',
  RoadHouse = 'RoadHouse',
  IceCreamParlour = 'IceCreamParlour',
  SandwichShop = 'SandwichShop',
}

export type HotWaterSupplyConfiguration = {
  __typename?: 'HotWaterSupplyConfiguration';
  type: HotWaterSupplyType;
  fuel?: Maybe<HotWaterSupplyFuelType>;
};

export enum HotWaterSupplyFuelType {
  Gas = 'Gas',
  Electric = 'Electric',
  Oil = 'Oil',
}

export enum HotWaterSupplyType {
  CentralHeatingBoiler = 'CentralHeatingBoiler',
  Boiler = 'Boiler',
  Geyser = 'Geyser',
  SolarWaterHeater = 'SolarWaterHeater',
}

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
  foundation?: Maybe<Foundation>;
  propertyRelated?: Maybe<PropertyRelated>;
  roofInformation?: Maybe<RoofInformation>;
  notes?: Maybe<Scalars['String']>;
};

export type HouseOutsideInput = {
  generalInformation?: Maybe<GeneralInformationInput>;
  foundation?: Maybe<FoundationInput>;
  propertyRelated?: Maybe<PropertyRelatedInput>;
  roofInformation?: Maybe<RoofInformationInput>;
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

export enum HousingType {
  PartiallyRented = 'PartiallyRented',
  DoubleOccupancyAvailable = 'DoubleOccupancyAvailable',
  DoubleOccupancyPossible = 'DoubleOccupancyPossible',
  AccessibleToDisabledPeople = 'AccessibleToDisabledPeople',
  AcessibleToTheEldery = 'AcessibleToTheEldery',
}

export type IdentificationNumber = {
  __typename?: 'IdentificationNumber';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export enum IdentificationNumberType {
  Sap = 'Sap',
  Form = 'Form',
}

export enum IdentificationType {
  Passport = 'Passport',
  DriverLicense = 'DriverLicense',
  IdCard = 'IdCard',
  ResidencePermit = 'ResidencePermit',
}

export enum IncomeType {
  Employer = 'Employer',
  Equity = 'Equity',
  Pension = 'Pension',
  SocialBenefit = 'SocialBenefit',
  Entrepreneur = 'Entrepreneur',
}

export type InitSendFileInput = {
  fileName?: Maybe<Scalars['String']>;
  fileType?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type InsideGeneral = LastUpdated & {
  __typename?: 'InsideGeneral';
  windows?: Maybe<InsideWindows>;
  extension?: Maybe<Extension>;
  renovation?: Maybe<Renovation>;
  notes?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export type InsideGeneralInput = {
  pimId: Scalars['ID'];
  windows?: Maybe<InsideWindowsInput>;
  extension?: Maybe<ExtensionInput>;
  renovation?: Maybe<RenovationInput>;
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

export enum InsideType {
  Furnished = 'Furnished',
  Upholstered = 'Upholstered',
  PartialyUpholstered = 'PartialyUpholstered',
}

export type InsideWindows = {
  __typename?: 'InsideWindows';
  types?: Maybe<Array<WindowType>>;
  notes?: Maybe<Scalars['String']>;
};

export type InsideWindowsInput = {
  types?: Maybe<Array<WindowType>>;
  notes?: Maybe<Scalars['String']>;
};

export type Inspection = {
  __typename?: 'Inspection';
  id: Scalars['ID'];
  inspectionType: InspectionType;
  type: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export enum InspectionType {
  Tanks = 'Tanks',
  Pollution = 'Pollution',
  Maintenance = 'Maintenance',
}

export type Installations = {
  __typename?: 'Installations';
  type?: Maybe<Scalars['String']>;
  numberOfSameInstallations?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type InstallationsInput = {
  type?: Maybe<Scalars['String']>;
  numberOfSameInstallations?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export enum InstallationsType {
  RotaryStableMilkingSystem = 'RotaryStableMilkingSystem',
  MilkingParlorSystem = 'MilkingParlorSystem',
  MilkingRobot = 'MilkingRobot',
  HerringBoneStable = 'HerringBoneStable',
  SideBySideMilkingSystem = 'SideBySideMilkingSystem',
}

export type IntRange = {
  __typename?: 'IntRange';
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
};

export type IntRangeInput = {
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
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
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export type InterestsInput = {
  id: Scalars['ID'];
  groundInterest?: Maybe<Scalars['AbsoluteFloat']>;
  buildingInterest?: Maybe<Scalars['AbsoluteFloat']>;
  rentedagen?: Maybe<Scalars['AbsoluteFloat']>;
  suspensiveCondition?: Maybe<Scalars['String']>;
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
  lastEditedBy?: Maybe<LastUpdatedProfile>;
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

export type KikInfoInput = {
  pimId: Scalars['ID'];
  infoType: KikInfoType;
};

export enum KikInfoType {
  CadastralPlot = 'CadastralPlot',
  CadastralMap = 'CadastralMap',
}

export type KikSettings = {
  __typename?: 'KikSettings';
  username: Scalars['String'];
};

export type KikSettingsInput = {
  username: Scalars['String'];
  password: Scalars['String'];
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

export enum KitchenType {
  MainKitchen = 'MainKitchen',
  Scullery = 'Scullery',
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
  Task = 'Task',
  ReasonToMove = 'ReasonToMove',
}

export type LastUpdated = {
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export type LastUpdatedProfile = {
  __typename?: 'LastUpdatedProfile';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Lease = {
  __typename?: 'Lease';
  leaseholder?: Maybe<LeaseholderType>;
  information?: Maybe<LeaseInformationType>;
  duration?: Maybe<LeaseDurationType>;
  yearlyPrice?: Maybe<Scalars['Float']>;
  endDate?: Maybe<Scalars['Date']>;
};

export enum LeaseDurationType {
  Forever = 'Forever',
  Temporary = 'Temporary',
  Constantly = 'Constantly',
}

export enum LeaseInformationType {
  Virable = 'Virable',
  Fixed = 'Fixed',
}

export type LeaseInput = {
  leaseholder?: Maybe<LeaseholderType>;
  information?: Maybe<LeaseInformationType>;
  duration?: Maybe<LeaseDurationType>;
  yearlyPrice?: Maybe<Scalars['Float']>;
  endDate?: Maybe<Scalars['Date']>;
};

export enum LeaseholderType {
  Different = 'Different',
  Township = 'Township',
  Private = 'Private',
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

export enum LeisureServicesType {
  Electric = 'Electric',
  Reception = 'Reception',
  SanitaryBlocks = 'SanitaryBlocks',
  SwimmingPool = 'SwimmingPool',
  SewageSystem = 'SewageSystem',
  CateringAvailable = 'CateringAvailable',
  CampShop = 'CampShop',
}

export type LeisureSpace = {
  __typename?: 'LeisureSpace';
  measurements?: Maybe<LeisureMeasurements>;
  specifications?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<GoodWillPrices>;
  services?: Maybe<Array<Scalars['String']>>;
};

export type LeisureSpaceInput = {
  measurements?: Maybe<LeisureMeasurementsInput>;
  specifications?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<GoodWillPricesInput>;
  services?: Maybe<Array<Scalars['String']>>;
};

export enum LeisureSpecificationType {
  TakeoverPersonnel = 'TakeoverPersonnel',
  AnnualPitches = 'AnnualPitches',
  ResidentialObjectAvailable = 'ResidentialObjectAvailable',
  ReturnServices = 'ReturnServices',
}

export type LinkNcpToProjectPhaseInput = {
  ncpId: Scalars['ID'];
  projectPhaseId: Scalars['ID'];
};

export type LinkSalesCrmsInput = {
  cyclusId: Scalars['String'];
  crmIds: Array<Scalars['String']>;
};

export type LinkSalesCrmsListPaginationMeta = {
  __typename?: 'LinkSalesCrmsListPaginationMeta';
  total: Scalars['Int'];
  page: Scalars['Int'];
  limit: Scalars['Int'];
};

export type LinkSalesCrmsListResult = {
  __typename?: 'LinkSalesCrmsListResult';
  meta: LinkSalesCrmsListPaginationMeta;
  salesCrmsItems?: Maybe<Array<CrmListItem>>;
};

export type LinkSalesPimsInput = {
  cyclusId: Scalars['String'];
  pimIds: Array<Scalars['String']>;
};

export type LinkSalesPimsListPaginationMeta = {
  __typename?: 'LinkSalesPimsListPaginationMeta';
  total: Scalars['Int'];
  page: Scalars['Int'];
  limit: Scalars['Int'];
};

export type LinkSalesPimsListResult = {
  __typename?: 'LinkSalesPimsListResult';
  meta: LinkSalesPimsListPaginationMeta;
  salesPimsItems?: Maybe<Array<ListPim>>;
};

export type LinkedCrm = {
  __typename?: 'LinkedCrm';
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  extraNames?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  avatar?: Maybe<File>;
  isPassedAway?: Maybe<Scalars['Boolean']>;
  dateOfDeath?: Maybe<Scalars['Date']>;
};

export type LinkedEntity = {
  __typename?: 'LinkedEntity';
  id: Scalars['ID'];
  type?: Maybe<Entities>;
};

export type LinkedEntityInput = {
  id: Scalars['ID'];
  type?: Maybe<Entities>;
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

export type LinkedPimFilters = {
  archived?: Maybe<Scalars['Boolean']>;
};

export type LinkedPimInput = {
  pimId: Scalars['ID'];
  linkedPimIDs: Array<Scalars['ID']>;
};

export type LinkedPimSearchResult = {
  __typename?: 'LinkedPimSearchResult';
  metadata: SearchMetadata;
  items?: Maybe<Array<LinkedPim>>;
};

export type ListCrmFilters = {
  city?: Maybe<Scalars['String']>;
  type?: Maybe<CrmType>;
  status?: Maybe<CrmStatus>;
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
  mainPicture?: Maybe<Picture>;
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
  city?: Maybe<Scalars['String']>;
  projectType?: Maybe<ProjectType>;
};

export type ListNcpsFilters = {
  archived?: Maybe<Scalars['Boolean']>;
  pricingType?: Maybe<PricingType>;
  projectType?: Maybe<ProjectType>;
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
  mainPicture?: Maybe<Picture>;
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

export type ListObjectTypesFilters = {
  archived?: Maybe<Scalars['Boolean']>;
  ncpId: Scalars['ID'];
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
  pictures?: Maybe<Array<Picture>>;
  livingArea?: Maybe<Scalars['Int']>;
  attentionNote?: Maybe<Scalars['String']>;
  dateCreated: Scalars['Date'];
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  houseOutside?: Maybe<ListPimHouseOutside>;
  archived?: Maybe<Scalars['Boolean']>;
  status: PimStatus;
  developmentType: DevelopmentType;
  linkedObjectTypeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  mainPicture?: Maybe<Picture>;
  isPurchased?: Maybe<Scalars['Boolean']>;
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
  propertyTypes?: Maybe<Array<Maybe<PropertyType>>>;
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
  pricingType?: Maybe<PricingType>;
  isPurchased?: Maybe<Scalars['Boolean']>;
};

export type ListQuestionairesFilters = {
  type?: Maybe<Scalars['String']>;
  templateStatus?: Maybe<TemplateStatus>;
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

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  error?: Maybe<Scalars['String']>;
  AuthenticationResult: AuthenticationResult;
};

export enum LooseGroundType {
  ForestPlot = 'ForestPlot',
  ArableLand = 'ArableLand',
  Grassland = 'Grassland',
}

export enum MaintenanceType {
  Paintwork = 'Paintwork',
  ElectricityConnections = 'ElectricityConnections',
  WindowFrames = 'WindowFrames',
}

export enum MaritalStatusType {
  Single = 'Single',
  MarriedCommunityOfProperty = 'MarriedCommunityOfProperty',
  MarriedPrenuptialAgreements = 'MarriedPrenuptialAgreements',
  RegisteredPartner = 'RegisteredPartner',
  Unmarried = 'Unmarried',
  LivingTogether = 'LivingTogether',
  Widow = 'Widow',
  Widower = 'Widower',
}

export type MatchCharacteristics = {
  __typename?: 'MatchCharacteristics';
  general?: Maybe<MatchCharacteristicsGeneralType>;
  property?: Maybe<MatchCharacteristicsProperty>;
};

export enum MatchCharacteristicsGeneralType {
  SemiDetached = 'SemiDetached',
  FinalHouse = 'FinalHouse',
  CornerHouse = 'CornerHouse',
  TerracedHouse = 'TerracedHouse',
  DetachedHouse = 'DetachedHouse',
  Recreation = 'Recreation',
}

export type MatchCharacteristicsInput = {
  general?: Maybe<MatchCharacteristicsGeneralType>;
  property?: Maybe<MatchCharacteristicsPropertyInput>;
};

export enum MatchCharacteristicsMaintenanceQuality {
  Good = 'Good',
  Poor = 'Poor',
  Regular = 'Regular',
  Bad = 'Bad',
  Terrible = 'Terrible',
  Perfect = 'Perfect',
}

export type MatchCharacteristicsProperty = {
  __typename?: 'MatchCharacteristicsProperty';
  minAmountRooms?: Maybe<Scalars['Int']>;
  minAmountBedrooms?: Maybe<Scalars['Int']>;
  minAmountFloors?: Maybe<Scalars['Int']>;
  residentialLayerFrom?: Maybe<Scalars['Int']>;
  residentialLayerTo?: Maybe<Scalars['Int']>;
  constructionYearFrom?: Maybe<Scalars['Int']>;
  constructionYearTo?: Maybe<Scalars['Int']>;
  maintenanceQuality?: Maybe<MatchCharacteristicsMaintenanceQuality>;
};

export type MatchCharacteristicsPropertyInput = {
  minAmountRooms?: Maybe<Scalars['Int']>;
  minAmountBedrooms?: Maybe<Scalars['Int']>;
  minAmountFloors?: Maybe<Scalars['Int']>;
  residentialLayerFrom?: Maybe<Scalars['Int']>;
  residentialLayerTo?: Maybe<Scalars['Int']>;
  constructionYearFrom?: Maybe<Scalars['Int']>;
  constructionYearTo?: Maybe<Scalars['Int']>;
  maintenanceQuality?: Maybe<MatchCharacteristicsMaintenanceQuality>;
};

export type MatchCommercialCharacteristics = {
  __typename?: 'MatchCommercialCharacteristics';
  general?: Maybe<MatchCommercialCharacteristicsGeneralType>;
  property?: Maybe<MatchCommercialCharacteristicsProperty>;
};

export enum MatchCommercialCharacteristicsGeneralType {
  Leissure = 'Leissure',
  Logistic = 'Logistic',
  PracticeRoom = 'PracticeRoom',
}

export type MatchCommercialCharacteristicsInput = {
  general?: Maybe<MatchCommercialCharacteristicsGeneralType>;
  property?: Maybe<MatchCommercialCharacteristicsPropertyInput>;
};

export type MatchCommercialCharacteristicsProperty = {
  __typename?: 'MatchCommercialCharacteristicsProperty';
  minFreeHeight?: Maybe<Scalars['Int']>;
  minFreeSpan?: Maybe<Scalars['Int']>;
  minFloorLoad?: Maybe<Scalars['Int']>;
  minAmountOfFloors?: Maybe<Scalars['Int']>;
  minParkingLots?: Maybe<Scalars['Int']>;
  engergyLabel?: Maybe<EnergyType>;
  constructionYearFrom?: Maybe<Scalars['Int']>;
  constructionYearTo?: Maybe<Scalars['Int']>;
  maintenanceQuality?: Maybe<MatchCharacteristicsMaintenanceQuality>;
};

export type MatchCommercialCharacteristicsPropertyInput = {
  minFreeHeight?: Maybe<Scalars['Int']>;
  minFreeSpan?: Maybe<Scalars['Int']>;
  minFloorLoad?: Maybe<Scalars['Int']>;
  minAmountOfFloors?: Maybe<Scalars['Int']>;
  minParkingLots?: Maybe<Scalars['Int']>;
  engergyLabel?: Maybe<EnergyType>;
  constructionYearFrom?: Maybe<Scalars['Int']>;
  constructionYearTo?: Maybe<Scalars['Int']>;
  maintenanceQuality?: Maybe<MatchCharacteristicsMaintenanceQuality>;
};

export enum MatchCommercialConditions {
  VatTaxed = 'VatTaxed',
  Indexed = 'Indexed',
  FurnishedIncludingServiceCost = 'FurnishedIncludingServiceCost',
  PavedOutsideTerrain = 'PavedOutsideTerrain',
  CompanyResidence = 'CompanyResidence',
  Camping = 'Camping',
  Investment = 'Investment',
}

export enum MatchCommercialEstateType {
  BusinessSpace = 'BusinessSpace',
  Offices = 'Offices',
  RetailSpace = 'RetailSpace',
  SocialRealEstate = 'SocialRealEstate',
  CateringIndustry = 'CateringIndustry',
  Terrain = 'Terrain',
}

export enum MatchEstateType {
  SignleFamily = 'SignleFamily',
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

export type MatchGarden = {
  __typename?: 'MatchGarden';
  situation?: Maybe<Array<MatchGardenSituation>>;
  outdoorSpacesMin?: Maybe<Scalars['Float']>;
  outdoorSpacesMax?: Maybe<Scalars['Float']>;
  volumeMin?: Maybe<Scalars['Float']>;
  volumeMax?: Maybe<Scalars['Float']>;
};

export type MatchGardenInput = {
  situation?: Maybe<Array<MatchGardenSituation>>;
  outdoorSpacesMin?: Maybe<Scalars['Float']>;
  outdoorSpacesMax?: Maybe<Scalars['Float']>;
  volumeMin?: Maybe<Scalars['Float']>;
  volumeMax?: Maybe<Scalars['Float']>;
};

export enum MatchGardenSituation {
  North = 'North',
  East = 'East',
  South = 'South',
  West = 'West',
}

export type MatchMeasurements = {
  __typename?: 'MatchMeasurements';
  surfaceFromMin?: Maybe<Scalars['Float']>;
  surfaceToMin?: Maybe<Scalars['Float']>;
  livingAreaFromMin?: Maybe<Scalars['Float']>;
  livingAreaToMin?: Maybe<Scalars['Float']>;
  businessSpaceSurfaceFromMin?: Maybe<Scalars['Float']>;
  businessSpaceSurfaceToMin?: Maybe<Scalars['Float']>;
  practiceRoomSurfaceToMax?: Maybe<Scalars['Float']>;
  practiceRoomSurfaceToMin?: Maybe<Scalars['Float']>;
  plotSurfaceFromMin?: Maybe<Scalars['Float']>;
  plotSurfaceToMin?: Maybe<Scalars['Float']>;
};

export type MatchMeasurementsInput = {
  surfaceFromMin?: Maybe<Scalars['Float']>;
  surfaceToMin?: Maybe<Scalars['Float']>;
  livingAreaFromMin?: Maybe<Scalars['Float']>;
  livingAreaToMin?: Maybe<Scalars['Float']>;
  businessSpaceSurfaceFromMin?: Maybe<Scalars['Float']>;
  businessSpaceSurfaceToMin?: Maybe<Scalars['Float']>;
  practiceRoomSurfaceToMax?: Maybe<Scalars['Float']>;
  practiceRoomSurfaceToMin?: Maybe<Scalars['Float']>;
  plotSurfaceFromMin?: Maybe<Scalars['Float']>;
  plotSurfaceToMin?: Maybe<Scalars['Float']>;
};

export type MatchOutsidePricing = {
  __typename?: 'MatchOutsidePricing';
  minGarage?: Maybe<Scalars['Int']>;
};

export type MatchOutsidePricingInput = {
  minGarage?: Maybe<Scalars['Int']>;
};

export type MatchPricing = {
  __typename?: 'MatchPricing';
  buyFrom?: Maybe<Scalars['Float']>;
  buyTo?: Maybe<Scalars['Float']>;
  rentFrom?: Maybe<Scalars['Float']>;
  rentTo?: Maybe<Scalars['Float']>;
  rentFrequency?: Maybe<PaymentFrequency>;
  rentalPeriod?: Maybe<PaymentPeriod>;
  preferredStartDate?: Maybe<Scalars['Date']>;
};

export type MatchPricingInput = {
  buyFrom?: Maybe<Scalars['Float']>;
  buyTo?: Maybe<Scalars['Float']>;
  rentFrom?: Maybe<Scalars['Float']>;
  rentTo?: Maybe<Scalars['Float']>;
  rentFrequency?: Maybe<PaymentFrequency>;
  rentalPeriod?: Maybe<PaymentPeriod>;
  preferredStartDate?: Maybe<Scalars['Date']>;
};

export type MatchProfile = {
  __typename?: 'MatchProfile';
  id: Scalars['ID'];
  crmId: Scalars['ID'];
  companyId: Scalars['ID'];
  propertyType?: Maybe<MatchPropertyType>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  matchDuration?: Maybe<MatchProfileDateRange>;
  matchWith?: Maybe<Array<MatchProfileWith>>;
  description?: Maybe<Scalars['String']>;
  estateType?: Maybe<MatchEstateType>;
  commercialEstateType?: Maybe<MatchCommercialEstateType>;
  characteristics?: Maybe<MatchCharacteristics>;
  commercialCharacteristics?: Maybe<MatchCommercialCharacteristics>;
  pricing?: Maybe<MatchPricing>;
  outside?: Maybe<MatchOutsidePricing>;
  garden?: Maybe<MatchGarden>;
  conditions?: Maybe<Array<MatchCommercialConditions>>;
  services?: Maybe<Array<MatchService>>;
  tags?: Maybe<Array<MatchTags>>;
  measurements?: Maybe<MatchMeasurements>;
  revenue?: Maybe<IntRange>;
  exploitation?: Maybe<IntRange>;
  requirements?: Maybe<Array<MatchRequirement>>;
  locations?: Maybe<Array<MatchProfileLocation>>;
  isActive: Scalars['Boolean'];
  createdAt: Scalars['Date'];
};

export type MatchProfileDateRange = {
  __typename?: 'MatchProfileDateRange';
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
};

export type MatchProfileLocation = {
  __typename?: 'MatchProfileLocation';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Float']>;
};

export type MatchProfileLocationInput = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['Int']>;
  radius?: Maybe<Scalars['Float']>;
};

export enum MatchProfileWith {
  OwnPortfolio = 'OwnPortfolio',
  ExternalNvm = 'ExternalNvm',
}

export enum MatchPropertyType {
  Residential = 'Residential',
  NewConstruction = 'NewConstruction',
  Relet = 'Relet',
  Commercial = 'Commercial',
  Agriculture = 'Agriculture',
  ParkingLot = 'ParkingLot',
  BuildingPlot = 'BuildingPlot',
}

export enum MatchRentalPeriodType {
  ThreeToSixMonths = 'ThreeToSixMonths',
  SixToTwelveMonths = 'SixToTwelveMonths',
  TwelveToTwentyfourMonths = 'TwelveToTwentyfourMonths',
  TwentyfourToThirtysixMonths = 'TwentyfourToThirtysixMonths',
  Indeterminate = 'Indeterminate',
}

export type MatchRequirement = {
  __typename?: 'MatchRequirement';
  key: MatchRequirementType;
  status: MatchRequirementStatus;
};

export type MatchRequirementInput = {
  key: MatchRequirementType;
  status: MatchRequirementStatus;
};

export enum MatchRequirementStatus {
  Required = 'Required',
  Desirable = 'Desirable',
  NotSignificant = 'NotSignificant',
}

export enum MatchRequirementType {
  BathroomOnGroundFloor = 'BathroomOnGroundFloor',
  RoofTerrace = 'RoofTerrace',
  Balcony = 'Balcony',
  Elevator = 'Elevator',
  Monument = 'Monument',
  MonumentalBuilding = 'MonumentalBuilding',
  SwimmingPool = 'SwimmingPool',
  PermanentHabitation = 'PermanentHabitation',
  ProtectedCityOrVillageView = 'ProtectedCityOrVillageView',
  DoubleOccupancyAvailable = 'DoubleOccupancyAvailable',
  AccessibleToDisabledPeople = 'AccessibleToDisabledPeople',
  AccssibleToTheElderly = 'AccssibleToTheElderly',
  PartlyUpholstered = 'PartlyUpholstered',
  PartiallyRented = 'PartiallyRented',
  Furnished = 'Furnished',
  Upholsterd = 'Upholsterd',
  DiyHome = 'DiyHome',
}

export type MatchRevenueAndExploitation = {
  __typename?: 'MatchRevenueAndExploitation';
  revenueFrom?: Maybe<Scalars['Int']>;
  revenueTo?: Maybe<Scalars['Int']>;
  exploitationFrom?: Maybe<Scalars['Int']>;
  exploitationTo?: Maybe<Scalars['Int']>;
};

export enum MatchService {
  ConcreteFloor = 'ConcreteFloor',
  Skylights = 'Skylights',
  PaymentFrequencyHeating = 'PaymentFrequencyHeating',
  LoadingDocks = 'LoadingDocks',
  Sprinkler = 'Sprinkler',
  PowerFlow = 'PowerFlow',
  OverheadDoors = 'OverheadDoors',
  ToiletRecessedLuminaries = 'ToiletRecessedLuminaries',
  Elevators = 'Elevators',
  OpenableWindows = 'OpenableWindows',
}

export enum MatchTags {
  Seniors = 'Seniors',
  DiyHouse = 'DiyHouse',
  ReadyToMoveIn = 'ReadyToMoveIn',
  Starter = 'Starter',
  Rural = 'Rural',
  Thirties = 'Thirties',
  Exclusive = 'Exclusive',
  ByWater = 'ByWater',
  ChildFriendly = 'ChildFriendly',
}

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

export type MeasurementsInput = {
  volumeFrom?: Maybe<Scalars['AbsoluteFloat']>;
  volumeTo?: Maybe<Scalars['AbsoluteFloat']>;
  livingSpaceFrom?: Maybe<Scalars['AbsoluteFloat']>;
  livingSpaceTo?: Maybe<Scalars['AbsoluteFloat']>;
  plotAreaFrom?: Maybe<Scalars['AbsoluteFloat']>;
  plotAreaTo?: Maybe<Scalars['AbsoluteFloat']>;
  calculateAutomatically?: Maybe<Scalars['Boolean']>;
};

export type MediaLink = {
  __typename?: 'MediaLink';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export enum MediaLinkType {
  YouTube = 'YouTube',
  ThreeSixtyDegree = 'ThreeSixtyDegree',
  Floorplanner = 'Floorplanner',
  FacebookTrackingCode = 'FacebookTrackingCode',
}

export type Meter = LastUpdated & {
  __typename?: 'Meter';
  id: Scalars['String'];
  type: MeterType;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  readings?: Maybe<Array<Reading>>;
  dateCreated?: Maybe<Scalars['Date']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export enum MeterType {
  Water = 'Water',
  Gas = 'Gas',
  Electric = 'Electric',
}

export type MetersMeta = LastUpdated & {
  __typename?: 'MetersMeta';
  description?: Maybe<Scalars['String']>;
  Water?: Maybe<MetersSharedData>;
  Gas?: Maybe<MetersSharedData>;
  Electric?: Maybe<MetersSharedData>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export type MetersSharedData = {
  __typename?: 'MetersSharedData';
  description?: Maybe<Scalars['String']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export enum MomentGeneralSetting {
  ScheduleOnline = 'ScheduleOnline',
  DoNotScheduleOnline = 'DoNotScheduleOnline',
}

export type MomentSchedule = {
  __typename?: 'MomentSchedule';
  day?: Maybe<MomentScheduleDay>;
  startAt?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['String']>;
};

export enum MomentScheduleDay {
  Mon = 'Mon',
  Tue = 'Tue',
  Wed = 'Wed',
  Thu = 'Thu',
  Fri = 'Fri',
  Sat = 'Sat',
  Sun = 'Sun',
}

export type MomentScheduleInput = {
  day?: Maybe<MomentScheduleDay>;
  startAt?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['String']>;
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

export enum MonumentType {
  Heritage = 'Heritage',
  MonumentalProperty = 'MonumentalProperty',
  ProtectedCityOrVillageView = 'ProtectedCityOrVillageView',
  NationalMonument = 'NationalMonument',
  MunciapalMonument = 'MunciapalMonument',
}

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  addAllocate?: Maybe<Allocate>;
  addAllocationCriteria: AddAllocationCriteriaResult;
  addAogSpace: PimWithNewAogSpace;
  addAppointment: Appointment;
  addBogSpace: PimWithNewBogSpace;
  addCadastre?: Maybe<PimWithNewCadastre>;
  addCadastreMaps?: Maybe<Pim>;
  addCost: CostResult;
  addCrmLabel: Label;
  addFiles: Array<File>;
  addFloorToPim: PimWithNewFloor;
  addIdentificationNumberNcp: NcpWithNewIdentificationNumber;
  addIdentificationNumberObjectType: ObjectTypeWithNewIdentificationNumber;
  addIdentificationNumberPim: PimWithNewIdentificationNumber;
  addInspection: AddInspectionResult;
  addLabel: Label;
  addMatchProfile?: Maybe<MatchProfile>;
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
  addSubtask: Task;
  addTag?: Maybe<PimWithNewTag>;
  addTaskLabel: Label;
  addTeam?: Maybe<Team>;
  addTextChapter?: Maybe<PimWithNewTextChapter>;
  addUserToTeam?: Maybe<Team>;
  addUsp?: Maybe<PimWithNewUsp>;
  addViewingMoment: AddViewingMomentResult;
  authorizeNylasAccount?: Maybe<Scalars['Boolean']>;
  authorizeNylasAccountWithToken?: Maybe<NylasAccount>;
  bulk: BulkOperationResult;
  bulkDeleteNotifications?: Maybe<Scalars['Boolean']>;
  bulkReadNotifications?: Maybe<Scalars['Boolean']>;
  cloneMatchProfile?: Maybe<MatchProfile>;
  confirmAppointment: Appointment;
  confirmProfileInvite: Profile;
  createCompany: Company;
  createCrm: CrmGeneral;
  createDmsFolder: DmsFolder;
  createEmailAddress: Profile;
  createNcp: NcpGeneral;
  createNotification?: Maybe<Notification>;
  createObjectType: ObjectTypeGeneral;
  createPhoneNumber: Profile;
  createPim?: Maybe<Pim>;
  createProfile: Profile;
  createQuestion?: Maybe<Question>;
  createQuestionaire?: Maybe<Questionaire>;
  createQuestionaireGroup?: Maybe<Groups>;
  createSales?: Maybe<Sales>;
  createSocialMediaLink: Profile;
  createTask: Task;
  deactivateProfile: Profile;
  deleteAllocate?: Maybe<Scalars['Boolean']>;
  deleteDmsFolder: Scalars['Boolean'];
  deleteEntity: Array<DeleteResult>;
  deleteMatchProfile?: Maybe<Scalars['Boolean']>;
  deleteNotification?: Maybe<Scalars['Boolean']>;
  deleteQuestionaireGroup?: Maybe<Scalars['Boolean']>;
  deleteSubtask?: Maybe<Task>;
  draftAppointment: DraftAppointment;
  forgotPassword?: Maybe<ForgotPasswordResponse>;
  initSendFile: File;
  linkNcpToProjectPhase: ProjectPhase;
  linkSalesCrms?: Maybe<Array<CrmListItem>>;
  linkSalesPims?: Maybe<Array<ListPim>>;
  login?: Maybe<LoginResponse>;
  reactivateProfile: Profile;
  readNotification?: Maybe<Scalars['Boolean']>;
  removeAllocationCriteria: Pim;
  removeCrmLabel: Scalars['Boolean'];
  removeFiles: Array<Maybe<File>>;
  removeInspection: Pim;
  removeLabel: Scalars['Boolean'];
  removeNcpLabel: Scalars['Boolean'];
  removeObjectTypeLabel: Scalars['Boolean'];
  removePim?: Maybe<Scalars['String']>;
  removeProjectPhase?: Maybe<Scalars['Boolean']>;
  removeTaskLabel: Scalars['Boolean'];
  removeTeam?: Maybe<Scalars['String']>;
  removeUserFromTeam?: Maybe<Team>;
  removeViewingMoment: Pim;
  resetPassword?: Maybe<ResetPasswordResponse>;
  sendEmail: Scalars['Boolean'];
  setLinkedProperties: Pim;
  setNcpCharacteristics: NcpCharacteristics;
  setNcpLinkedPims: NcpLinkedPims;
  setObjectTypeCharacteristicsSections: ObjectTypeCharacteristics;
  setObjectTypeLinkedPims: ObjectTypeLinkedPims;
  tiaraSendMessage?: Maybe<Scalars['Boolean']>;
  toggleNcpPricing: NcpPricesResult;
  toggleObjectTypePricing: ObjectTypePricesResult;
  togglePricing: Pim;
  undoEntity: Array<UndoResult>;
  updateAllocate?: Maybe<Allocate>;
  updateAllocationCriteria: Pim;
  updateAogSpace: AogSpace;
  updateBogSpace: BogSpace;
  updateCadastre?: Maybe<Pim>;
  updateCadastreMap?: Maybe<Pim>;
  updateCompanyDetails: Company;
  updateCost: CostResult;
  updateCrmContactInformation?: Maybe<CrmContactInformation>;
  updateCrmFamilyContacts?: Maybe<CrmFamilyContacts>;
  updateCrmFinancial?: Maybe<CrmFinancial>;
  updateCrmGeneral?: Maybe<CrmGeneral>;
  updateCrmHomeSituation?: Maybe<CrmHomeSituation>;
  updateDescription?: Maybe<Scalars['String']>;
  updateDmsFolder: DmsFolder;
  updateEmail?: Maybe<Email>;
  updateEmailAddress: Profile;
  updateFloor: Pim;
  updateIdentificationNumberNcp: NcpCharacteristics;
  updateIdentificationNumberObjectType: ObjectTypeCharacteristics;
  updateIdentificationNumberPim: Pim;
  updateInsideGeneral?: Maybe<Pim>;
  updateInspection: Pim;
  updateInvestment: Pim;
  updateKikInfo: Scalars['Boolean'];
  updateKikSettings: Scalars['Boolean'];
  updateLinkedPropertiesListDescription?: Maybe<ObjectTypeGeneral>;
  updateMatchProfile?: Maybe<MatchProfile>;
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
  updatePhoneNumber: Profile;
  updatePicture?: Maybe<Pim>;
  updatePimGeneralInfo: Pim;
  updatePimLocation: Pim;
  updatePimMeter?: Maybe<Pim>;
  updatePimOutsideInfo: Pim;
  updatePimReading?: Maybe<Pim>;
  updatePimService?: Maybe<Pim>;
  updatePricing: Pim;
  updateProfile: Profile;
  updateProjectPhase: ProjectPhase;
  updateQuestion?: Maybe<Question>;
  updateQuestionaire?: Maybe<Questionaire>;
  updateQuestionaireGroup?: Maybe<Groups>;
  updateSalesSettings: Pim;
  updateSocialMediaLink: Profile;
  updateSpace: Pim;
  updateSpecification: Pim;
  updateSpecificationAdvanced: Pim;
  updateSubtaskStatus?: Maybe<Task>;
  updateTag?: Maybe<Pim>;
  updateTask?: Maybe<Task>;
  updateTeam?: Maybe<Team>;
  updateTemplateGeneral?: Maybe<Questionaire>;
  updateTextChapter?: Maybe<Pim>;
  updateUserInTeam?: Maybe<Team>;
  updateUsp?: Maybe<Pim>;
  updateWorkflowAction: WorkflowAction;
  updateWorkflowTrigger: WorkflowTrigger;
  uploadFile?: Maybe<UploadFileResponse>;
  verifyUser?: Maybe<VerifyUserResponse>;
};

export type MutationAddAllocateArgs = {
  input: AddAllocateInput;
};

export type MutationAddAllocationCriteriaArgs = {
  input: AddAllocationCriteriaInput;
};

export type MutationAddAogSpaceArgs = {
  input: AddAogSpaceInput;
};

export type MutationAddAppointmentArgs = {
  input: AddAppointmentInput;
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

export type MutationAddCrmLabelArgs = {
  input: LabelInput;
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

export type MutationAddMatchProfileArgs = {
  input: AddMatchProfileInput;
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

export type MutationAddSubtaskArgs = {
  taskId: Scalars['String'];
  input: AddSubtaskInput;
};

export type MutationAddTagArgs = {
  input: AddTagInput;
};

export type MutationAddTaskLabelArgs = {
  input: LabelInput;
};

export type MutationAddTeamArgs = {
  input: AddTeamInput;
};

export type MutationAddTextChapterArgs = {
  input: AddTextChapterInput;
};

export type MutationAddUserToTeamArgs = {
  input: AddUserToTeamInput;
};

export type MutationAddUspArgs = {
  input: AddUspInput;
};

export type MutationAddViewingMomentArgs = {
  input: AddViewingMomentInput;
};

export type MutationAuthorizeNylasAccountArgs = {
  input: NylasAuthorizationInput;
  isCalendarConnected?: Maybe<Scalars['Boolean']>;
  isEmailConnected?: Maybe<Scalars['Boolean']>;
};

export type MutationAuthorizeNylasAccountWithTokenArgs = {
  input: NylasAddAccountInput;
};

export type MutationBulkArgs = {
  input: BulkOperationInput;
};

export type MutationBulkDeleteNotificationsArgs = {
  input: BulkDeleteNotificationsInput;
};

export type MutationBulkReadNotificationsArgs = {
  input: BulkReadNotificationsInput;
};

export type MutationCloneMatchProfileArgs = {
  input: CloneMatchProfileInput;
};

export type MutationConfirmAppointmentArgs = {
  accountId: Scalars['String'];
  appointmentId: Scalars['ID'];
};

export type MutationConfirmProfileInviteArgs = {
  input: ConfirmProfileInvite;
};

export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};

export type MutationCreateCrmArgs = {
  input: CreateCrmInput;
};

export type MutationCreateDmsFolderArgs = {
  input: CreateDmsFolderInput;
};

export type MutationCreateEmailAddressArgs = {
  input: CreateEmailAddressInput;
};

export type MutationCreateNcpArgs = {
  input: CreateNcpInput;
};

export type MutationCreateNotificationArgs = {
  input: CreateNotificationInput;
};

export type MutationCreateObjectTypeArgs = {
  input: CreateObjectTypeInput;
};

export type MutationCreatePhoneNumberArgs = {
  input: CreatePhoneNumberInput;
};

export type MutationCreatePimArgs = {
  input: CreatePimInput;
};

export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};

export type MutationCreateQuestionArgs = {
  input: QuestionInput;
};

export type MutationCreateQuestionaireArgs = {
  input: QuestionaireInput;
};

export type MutationCreateQuestionaireGroupArgs = {
  input: GroupsInput;
};

export type MutationCreateSalesArgs = {
  input: CreateSalesInput;
};

export type MutationCreateSocialMediaLinkArgs = {
  input: CreateSocialMediaLinkInput;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};

export type MutationDeactivateProfileArgs = {
  id: Scalars['String'];
};

export type MutationDeleteAllocateArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteDmsFolderArgs = {
  input: DeleteDmsFolderInput;
};

export type MutationDeleteEntityArgs = {
  input: DeleteEntityInput;
};

export type MutationDeleteMatchProfileArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteNotificationArgs = {
  input: DeleteNotificationInput;
};

export type MutationDeleteQuestionaireGroupArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteSubtaskArgs = {
  subtaskId: Scalars['ID'];
};

export type MutationDraftAppointmentArgs = {
  input: DraftAppointmentInput;
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

export type MutationLinkSalesCrmsArgs = {
  input: LinkSalesCrmsInput;
};

export type MutationLinkSalesPimsArgs = {
  input: LinkSalesPimsInput;
};

export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};

export type MutationReactivateProfileArgs = {
  id: Scalars['String'];
};

export type MutationReadNotificationArgs = {
  input: ReadNotificationInput;
};

export type MutationRemoveAllocationCriteriaArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveCrmLabelArgs = {
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

export type MutationRemoveTaskLabelArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveTeamArgs = {
  id: Scalars['String'];
};

export type MutationRemoveUserFromTeamArgs = {
  input: RemoveUserFromTeamInput;
};

export type MutationRemoveViewingMomentArgs = {
  id: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
  input?: Maybe<ResetPasswordInput>;
};

export type MutationSendEmailArgs = {
  accountId: Scalars['String'];
  input: SendEmailInput;
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

export type MutationTiaraSendMessageArgs = {
  input: TiaraSendMessageInput;
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

export type MutationUndoEntityArgs = {
  input: UndoEntityInput;
};

export type MutationUpdateAllocateArgs = {
  id: Scalars['ID'];
  input: AllocateInput;
};

export type MutationUpdateAllocationCriteriaArgs = {
  input: AllocationCriteriaInput;
};

export type MutationUpdateAogSpaceArgs = {
  input: UpdateAogSpaceInput;
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

export type MutationUpdateCompanyDetailsArgs = {
  input: UpdateCompanyInput;
};

export type MutationUpdateCostArgs = {
  input: UpdateCostInput;
};

export type MutationUpdateCrmContactInformationArgs = {
  input: UpdateCrmContactInformationInput;
};

export type MutationUpdateCrmFamilyContactsArgs = {
  input: UpdateCrmFamilyContactsInput;
};

export type MutationUpdateCrmFinancialArgs = {
  input: UpdateCrmFinancialInput;
};

export type MutationUpdateCrmGeneralArgs = {
  input: UpdateCrmGeneralInput;
};

export type MutationUpdateCrmHomeSituationArgs = {
  input: UpdateCrmHomeSituationInput;
};

export type MutationUpdateDescriptionArgs = {
  input: UpdateDescriptionInput;
};

export type MutationUpdateDmsFolderArgs = {
  input: UpdateDmsFolderInput;
};

export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput;
};

export type MutationUpdateEmailAddressArgs = {
  input: UpdateEmailAddressInput;
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

export type MutationUpdateKikInfoArgs = {
  input: KikInfoInput;
};

export type MutationUpdateKikSettingsArgs = {
  input: KikSettingsInput;
};

export type MutationUpdateLinkedPropertiesListDescriptionArgs = {
  input: UpdateLinkedPropertiesListDescription;
};

export type MutationUpdateMatchProfileArgs = {
  id: Scalars['ID'];
  input: UpdateMatchProfileInput;
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

export type MutationUpdatePhoneNumberArgs = {
  input: UpdatePhoneNumberInput;
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

export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};

export type MutationUpdateProjectPhaseArgs = {
  input: UpdateProjectPhaseInput;
};

export type MutationUpdateQuestionArgs = {
  questionId: Scalars['ID'];
  input: UpdateQuestionInput;
};

export type MutationUpdateQuestionaireArgs = {
  input: UpdateQuestionaireInput;
};

export type MutationUpdateQuestionaireGroupArgs = {
  id: Scalars['ID'];
  input: UpdateGroupsInput;
};

export type MutationUpdateSalesSettingsArgs = {
  input: SalesSettingsInput;
};

export type MutationUpdateSocialMediaLinkArgs = {
  input: UpdateSocialMediaLinkInput;
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

export type MutationUpdateSubtaskStatusArgs = {
  subtaskId: Scalars['ID'];
  status: TaskStatus;
};

export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};

export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};

export type MutationUpdateTemplateGeneralArgs = {
  input: TemplateGeneralInput;
};

export type MutationUpdateTextChapterArgs = {
  input: UpdateTextChapterInput;
};

export type MutationUpdateUserInTeamArgs = {
  input: UpdateUserInTeamInput;
};

export type MutationUpdateUspArgs = {
  input: UpdateUspInput;
};

export type MutationUpdateWorkflowActionArgs = {
  id: Scalars['ID'];
  input: UpdateWorkflowActionInput;
};

export type MutationUpdateWorkflowTriggerArgs = {
  id: Scalars['ID'];
  input: UpdateWorkflowTriggerInput;
};

export type MutationUploadFileArgs = {
  input: Scalars['UploadFileInput'];
  pathBuilder?: Maybe<Scalars['PathBuilder']>;
};

export type MutationVerifyUserArgs = {
  input?: Maybe<VerifyUserInput>;
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
    lastEditedBy?: Maybe<LastUpdatedProfile>;
    dateUpdated?: Maybe<Scalars['Date']>;
    characteristicsDescription?: Maybe<Scalars['String']>;
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

export type NcpGeneral = LastUpdated & {
  __typename?: 'NcpGeneral';
  id: Scalars['ID'];
  type: NcpType;
  dateCreated?: Maybe<Scalars['Date']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
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
  projectType?: Maybe<ProjectType>;
};

export type NcpLinkedPims = EntityLinkedWithPims & {
  __typename?: 'NcpLinkedPims';
  id: Scalars['ID'];
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  linkedProperties: PimListSearchResult;
  linkedPropertiesIds?: Maybe<Array<Scalars['ID']>>;
  description?: Maybe<Scalars['String']>;
};

export type NcpLinkedPimsLinkedPropertiesArgs = {
  filters?: Maybe<LinkedPimFilters>;
  sort?: Maybe<Array<Sort>>;
  pagination: Pagination;
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
  mainPictureId?: Maybe<Scalars['String']>;
  mediaLinks?: Maybe<Array<MediaLink>>;
  textChapters?: Maybe<Array<TextChapter>>;
  usps?: Maybe<Array<Usp>>;
  tags?: Maybe<Array<Tag>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
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

export type NcpSearchResult = {
  __typename?: 'NcpSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<NcpGeneral>>;
};

export type NcpServices = LastUpdated &
  Services & {
    __typename?: 'NcpServices';
    id: Scalars['ID'];
    hotWaterSupplies?: Maybe<Array<Service>>;
    heatingSources?: Maybe<Array<Service>>;
    additionalServices?: Maybe<Array<Service>>;
    dateUpdated?: Maybe<Scalars['Date']>;
    lastEditedBy?: Maybe<LastUpdatedProfile>;
    servicesDescription?: Maybe<Scalars['String']>;
  };

export enum NcpType {
  Houses = 'Houses',
  Apartments = 'Apartments',
  BuildingPlots = 'BuildingPlots',
}

export type NcpWithNewIdentificationNumber = {
  __typename?: 'NcpWithNewIdentificationNumber';
  ncp: NcpGeneral;
  newIdentificationNumber: IdentificationNumber;
};

export type NcpWithNewService = {
  __typename?: 'NcpWithNewService';
  ncp: NcpServices;
  newService: Service;
};

export type NcpWithSameAddressInput = {
  ncpId?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type NewCadastreMapInput = {
  mapName: Scalars['String'];
  fileID: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type NewPictureInput = {
  fileID: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['ID'];
  receiver: Profile;
  createdBy?: Maybe<Profile>;
  linkedEntity?: Maybe<LinkedEntity>;
  type: NotificationType;
  description: Scalars['String'];
  isRead: Scalars['Boolean'];
  isDeleted: Scalars['Boolean'];
  dateCreated: Scalars['Date'];
};

export type NotificationAdded = {
  __typename?: 'NotificationAdded';
  notification: Notification;
};

export type NotificationSearchResult = {
  __typename?: 'NotificationSearchResult';
  items?: Maybe<Array<Notification>>;
};

export enum NotificationType {
  TaskAssigned = 'TaskAssigned',
  InvitedToProject = 'InvitedToProject',
  RemovedUserFromProject = 'RemovedUserFromProject',
  AcceptedInviteToProject = 'AcceptedInviteToProject',
  TiaraMutationUpdate = 'TiaraMutationUpdate',
}

export type NylasAccount = {
  __typename?: 'NylasAccount';
  id: Scalars['ID'];
  userId: Scalars['ID'];
  accountId: Scalars['ID'];
  accessToken: Scalars['String'];
  newAccount: Scalars['Boolean'];
  isCalendarConnected?: Maybe<Scalars['Boolean']>;
  isEmailConnected?: Maybe<Scalars['Boolean']>;
};

export type NylasAccountAuthOptions = {
  loginHint: Scalars['String'];
  redirectURI?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Scalars['String']>>;
};

export type NylasAccountItem = {
  __typename?: 'NylasAccountItem';
  id: Scalars['ID'];
  email: Scalars['String'];
  provider: Scalars['String'];
  billingState: Scalars['String'];
  syncState: Scalars['String'];
  isCalendarConnected?: Maybe<Scalars['Boolean']>;
  isEmailConnected?: Maybe<Scalars['Boolean']>;
};

export type NylasAddAccountInput = {
  nylasToken: Scalars['String'];
  isCalendarConnected?: Maybe<Scalars['Boolean']>;
  isEmailConnected?: Maybe<Scalars['Boolean']>;
};

export type NylasAuthorizationInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  provider: NylasProviderType;
  username: Scalars['String'];
  password: Scalars['String'];
};

export enum NylasProviderType {
  Exchange = 'Exchange',
  Gmail = 'Gmail',
  Outlook = 'Outlook',
}

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
    lastEditedBy?: Maybe<LastUpdatedProfile>;
    dateUpdated?: Maybe<Scalars['Date']>;
    characteristicsDescription?: Maybe<Scalars['String']>;
    type?: Maybe<TypeOfObjectType>;
    automaticallySetObjectTypes?: Maybe<Scalars['Boolean']>;
  };

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

export type ObjectTypeGeneral = LastUpdated & {
  __typename?: 'ObjectTypeGeneral';
  id: Scalars['ID'];
  name: Scalars['String'];
  archived?: Maybe<Scalars['Boolean']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  dateCreated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  ncpId: Scalars['ID'];
  linkedPropertiesListDescription?: Maybe<Scalars['String']>;
  linkedPropertiesListLastUpdatedBy?: Maybe<Profile>;
  linkedPropertiesListLastUpdatedOn?: Maybe<Scalars['Date']>;
};

export type ObjectTypeLinkedPims = EntityLinkedWithPims & {
  __typename?: 'ObjectTypeLinkedPims';
  id: Scalars['ID'];
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  linkedProperties: PimListSearchResult;
  linkedPropertiesIds?: Maybe<Array<Scalars['ID']>>;
  description?: Maybe<Scalars['String']>;
};

export type ObjectTypeLinkedPimsLinkedPropertiesArgs = {
  filters?: Maybe<LinkedPimFilters>;
  sort?: Maybe<Array<Sort>>;
  pagination: Pagination;
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
  mainPictureId?: Maybe<Scalars['String']>;
  mediaLinks?: Maybe<Array<MediaLink>>;
  textChapters?: Maybe<Array<TextChapter>>;
  usps?: Maybe<Array<Usp>>;
  tags?: Maybe<Array<Tag>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  mediaDescription?: Maybe<Scalars['String']>;
};

export type ObjectTypeMediaPicturesArgs = {
  sort?: Maybe<Sort>;
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

export type ObjectTypePricing = LastUpdated & {
  __typename?: 'ObjectTypePricing';
  rent?: Maybe<CommonRentInformations>;
  sale?: Maybe<CommonSaleInformations>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export type ObjectTypeServices = LastUpdated &
  Services & {
    __typename?: 'ObjectTypeServices';
    id: Scalars['ID'];
    hotWaterSupplies?: Maybe<Array<Service>>;
    heatingSources?: Maybe<Array<Service>>;
    additionalServices?: Maybe<Array<Service>>;
    dateUpdated?: Maybe<Scalars['Date']>;
    lastEditedBy?: Maybe<LastUpdatedProfile>;
    servicesDescription?: Maybe<Scalars['String']>;
  };

export type ObjectTypeWithNewIdentificationNumber = {
  __typename?: 'ObjectTypeWithNewIdentificationNumber';
  objectType: ObjectTypeCharacteristics;
  newIdentificationNumber: IdentificationNumber;
};

export type ObjectTypeWithNewService = {
  __typename?: 'ObjectTypeWithNewService';
  objectType: ObjectTypeServices;
  newService: Service;
};

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
  BwLetter = 'BwLetter',
  SoilPollution = 'SoilPollution',
  Asbestos = 'Asbestos',
  OwnSake = 'OwnSake',
}

export enum OfficeServicesType {
  CableTrays = 'CableTrays',
  Skylights = 'Skylights',
  Pantry = 'Pantry',
  Heating = 'Heating',
  SuspendedCeiling = 'SuspendedCeiling',
  Sprinkler = 'Sprinkler',
  PowerFlow = 'PowerFlow',
  OverheadDoors = 'OverheadDoors',
  Toilet = 'Toilet',
  RecessedLuminaires = 'RecessedLuminaires',
  Elevators = 'Elevators',
  OpenableWindows = 'OpenableWindows',
  RoomLayout = 'RoomLayout',
  FlexDesk = 'FlexDesk',
}

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

export type Options = {
  __typename?: 'Options';
  name?: Maybe<Scalars['String']>;
};

export type OptionsInput = {
  name?: Maybe<Scalars['String']>;
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

export type OutsideFeature = LastUpdated & {
  __typename?: 'OutsideFeature';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: OutsideFeatureType;
  configuration?: Maybe<OutsideFeatureConfiguration>;
  dateCreated?: Maybe<Scalars['Date']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export type OutsideFeatureConfiguration =
  | GardenFeature
  | GarageFeature
  | StorageFeature
  | TerrainFeature
  | ParkingLotFeature;

export enum OutsideFeatureType {
  Garden = 'Garden',
  Garage = 'Garage',
  Storage = 'Storage',
  Terrain = 'Terrain',
  ParkingLot = 'ParkingLot',
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

export enum OwnershipType {
  Rent = 'Rent',
  Leased = 'Leased',
  Owned = 'Owned',
}

export type Pagination = {
  from?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  searchAfter?: Maybe<Array<Scalars['String']>>;
};

export enum ParkingFacilities {
  PaidParking = 'PaidParking',
  OnSite = 'OnSite',
  ParkingGarage = 'ParkingGarage',
  OnClosedTerrain = 'OnClosedTerrain',
  PublicParking = 'PublicParking',
  ParkingPermits = 'ParkingPermits',
}

export type ParkingInsulation = {
  __typename?: 'ParkingInsulation';
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type ParkingInsulationInput = {
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export enum ParkingInsulationType {
  Roof = 'Roof',
  Wall = 'Wall',
  Floor = 'Floor',
  NoCavity = 'NoCavity',
  DoubleGalzing = 'DoubleGalzing',
  EcoConstruction = 'EcoConstruction',
  PartlyDoubleGalzing = 'PartlyDoubleGalzing',
  SecondaryWindows = 'SecondaryWindows',
}

export type ParkingLotFeature = {
  __typename?: 'ParkingLotFeature';
  number?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<Array<File>>;
};

export type ParkingLotGeneral = {
  __typename?: 'ParkingLotGeneral';
  type?: Maybe<TypeOfParking>;
  measurements?: Maybe<ParkingMeasurements>;
  specifications?: Maybe<ParkingLotSpecifications>;
  material?: Maybe<ParkingMaterial>;
  insulation?: Maybe<ParkingInsulation>;
};

export type ParkingLotGeneralInput = {
  type?: Maybe<TypeOfParkingInput>;
  measurements?: Maybe<ParkingMeasurementsInput>;
  specifications?: Maybe<ParkingLotSpecificationsInput>;
  material?: Maybe<ParkingMaterialInput>;
  insulation?: Maybe<ParkingInsulationInput>;
};

export type ParkingLotSpecifications = {
  __typename?: 'ParkingLotSpecifications';
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type ParkingLotSpecificationsInput = {
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export enum ParkingLotSpecificationsType {
  OnEnclosedGrounds = 'OnEnclosedGrounds',
  OnOwnProperty = 'OnOwnProperty',
  ParkingPermit = 'ParkingPermit',
  Indoor = 'Indoor',
  WithAttic = 'WithAttic',
  Freestanding = 'Freestanding',
  ElectricDoor = 'ElectricDoor',
  Water = 'Water',
  Heating = 'Heating',
}

export type ParkingMaterial = {
  __typename?: 'ParkingMaterial';
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type ParkingMaterialInput = {
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export enum ParkingMaterialType {
  Wood = 'Wood',
  Stone = 'Stone',
  Plastic = 'Plastic',
  Metal = 'Metal',
}

export type ParkingMeasurements = {
  __typename?: 'ParkingMeasurements';
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  surface?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

export type ParkingMeasurementsInput = {
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  surface?: Maybe<Scalars['Float']>;
  capacity?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
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

export enum PaymentFrequency {
  Yearly = 'Yearly',
  Monthly = 'Monthly',
}

export enum PaymentPeriod {
  HalfYear = 'HalfYear',
  OneYear = 'OneYear',
  TwoYear = 'TwoYear',
  ThreeYear = 'ThreeYear',
  Undetermined = 'Undetermined',
}

export enum PeriodType {
  PerMonth = 'PerMonth',
  PerWeek = 'PerWeek',
  PerFourWeeks = 'PerFourWeeks',
  PerYear = 'PerYear',
}

export type PermissionsInTeamInput = {
  createPermission: Scalars['Boolean'];
  readPermission: Scalars['Boolean'];
  updatePermission: Scalars['Boolean'];
  deletePermission: Scalars['Boolean'];
};

export type PersonCapital = {
  __typename?: 'PersonCapital';
  deductMonthlyObligations?: Maybe<Scalars['AbsoluteFloat']>;
  availableCapitalCount?: Maybe<Scalars['AbsoluteFloat']>;
};

export type PersonCapitalInput = {
  deductMonthlyObligations?: Maybe<Scalars['AbsoluteFloat']>;
  availableCapitalCount?: Maybe<Scalars['AbsoluteFloat']>;
};

export enum PersonRole {
  Reservation = 'Reservation',
  Candidate = 'Candidate',
  Optant = 'Optant',
  Tenant = 'Tenant',
}

export type PhoneNumber = {
  __typename?: 'PhoneNumber';
  id: Scalars['String'];
  phoneNumber: Scalars['String'];
  phoneNumberType?: Maybe<PhoneNumberType>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export enum PhoneNumberType {
  Business = 'Business',
  Private = 'Private',
}

export type Picture = LastUpdated & {
  __typename?: 'Picture';
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  file?: Maybe<File>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  isMainPicture?: Maybe<Scalars['Boolean']>;
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
  attentionNote?: Maybe<Scalars['String']>;
  completeness: Scalars['Float'];
  archived: Scalars['Boolean'];
  dateCreated: Scalars['Date'];
  houseGeneral?: Maybe<HouseGeneral>;
  parkingGeneral?: Maybe<ParkingLotGeneral>;
  bogGeneral?: Maybe<BogGeneral>;
  aogGeneral?: Maybe<AogGeneral>;
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
  lastEditedBy?: Maybe<LastUpdatedProfile>;
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
  linkedPropertieslastEditedBy?: Maybe<LastUpdatedProfile>;
  inspectionsDateUpdated?: Maybe<Scalars['Date']>;
  inspectionslastEditedBy?: Maybe<LastUpdatedProfile>;
  metersMeta?: Maybe<MetersMeta>;
  allocationCriterias?: Maybe<Array<AllocationCriteria>>;
  apartmentGeneral?: Maybe<ApartmentGeneral>;
  buildingPlotGeneral?: Maybe<BuildingPlotGeneral>;
  bogSpaces?: Maybe<Array<BogSpace>>;
  aogSpaces?: Maybe<Array<AogSpace>>;
  mainPicture?: Maybe<Picture>;
  isPurchased?: Maybe<Scalars['Boolean']>;
};

export type PimCadastre = {
  __typename?: 'PimCadastre';
  id: Scalars['ID'];
  cadastre?: Maybe<Array<Cadastre>>;
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
  propertyType: PropertyType;
  attentionNote?: Maybe<Scalars['String']>;
  showAttentionNote?: Maybe<Scalars['Boolean']>;
  completeness: Scalars['Float'];
  archived: Scalars['Boolean'];
  dateCreated: Scalars['Date'];
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  houseGeneral?: Maybe<HouseGeneral>;
  bogGeneral?: Maybe<BogGeneral>;
  parkingGeneral?: Maybe<ParkingLotGeneral>;
  aogGeneral?: Maybe<AogGeneral>;
  extraAddress?: Maybe<ExtraAddress>;
  identificationNumbers?: Maybe<Array<IdentificationNumber>>;
  showExtraAddress?: Maybe<Scalars['Boolean']>;
  showIdentificationNumber?: Maybe<Scalars['Boolean']>;
  apartmentGeneral?: Maybe<ApartmentGeneral>;
  buildingPlotGeneral?: Maybe<BuildingPlotGeneral>;
  isPurchased?: Maybe<Scalars['Boolean']>;
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
  houseGeneral?: Maybe<HouseGeneralInput>;
  bogGeneral?: Maybe<BogGeneralInput>;
  parkingGeneral?: Maybe<ParkingLotGeneralInput>;
  aogGeneral?: Maybe<AogGeneralInput>;
  extraAddress?: Maybe<ExtraAddressInput>;
  showExtraAddress?: Maybe<Scalars['Boolean']>;
  showIdentificationNumber?: Maybe<Scalars['Boolean']>;
  apartmentGeneral?: Maybe<ApartmentGeneralInput>;
  buildingPlotGeneral?: Maybe<BuildingPlotGeneralInput>;
  attentionNote?: Maybe<Scalars['String']>;
  showAttentionNote?: Maybe<Scalars['Boolean']>;
  isPurchased?: Maybe<Scalars['Boolean']>;
};

export type PimInside = LastUpdated & {
  __typename?: 'PimInside';
  id: Scalars['String'];
  floors?: Maybe<Array<Floor>>;
  bogSpaces?: Maybe<Array<BogSpace>>;
  bogSpacesDescription?: Maybe<Scalars['String']>;
  aogSpaces?: Maybe<Array<AogSpace>>;
  aogAnimalsDescription?: Maybe<Scalars['String']>;
  aogBuildingsDescription?: Maybe<Scalars['String']>;
  aogInstallationsDescription?: Maybe<Scalars['String']>;
  aogGroundsDescription?: Maybe<Scalars['String']>;
  insideGeneral?: Maybe<InsideGeneral>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export type PimListSearchResult = {
  __typename?: 'PimListSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<ListPim>>;
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
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
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
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  description?: Maybe<Scalars['String']>;
};

export type PimMediaPicturesArgs = {
  sort?: Maybe<Sort>;
};

export type PimMeters = LastUpdated & {
  __typename?: 'PimMeters';
  id: Scalars['String'];
  meters?: Maybe<Array<Meter>>;
  metersMeta?: Maybe<MetersMeta>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export type PimOutside = LastUpdated & {
  __typename?: 'PimOutside';
  id: Scalars['ID'];
  houseOutside?: Maybe<HouseOutside>;
  outsideFeatures?: Maybe<Array<OutsideFeature>>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export type PimOutsideInput = {
  id: Scalars['ID'];
  houseOutside?: Maybe<HouseOutsideInput>;
};

export type PimPrices = LastUpdated & {
  __typename?: 'PimPrices';
  id: Scalars['ID'];
  pricing?: Maybe<Pricing>;
  costs?: Maybe<Array<Cost>>;
  investment?: Maybe<Investment>;
  costsDescription?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
};

export type PimSales = LastUpdated & {
  __typename?: 'PimSales';
  id: Scalars['ID'];
  salesSettings?: Maybe<SalesSettings>;
  viewingMoments?: Maybe<Array<ViewingMoment>>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  allocationCriterias?: Maybe<Array<AllocationCriteria>>;
};

export type PimSearchResult = {
  __typename?: 'PimSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<Pim>>;
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
    lastEditedBy?: Maybe<LastUpdatedProfile>;
    description?: Maybe<Scalars['String']>;
  };

export type PimSpecification = {
  __typename?: 'PimSpecification';
  id: Scalars['ID'];
  specification?: Maybe<Specification>;
  specificationAdvanced?: Maybe<SpecificationAdvanced>;
  linkedProperties?: Maybe<Array<LinkedPim>>;
  inspections?: Maybe<Array<Inspection>>;
  linkedPropertiesDateUpdated?: Maybe<Scalars['Date']>;
  linkedPropertiesLastEditedBy?: Maybe<LastUpdatedProfile>;
  linkedPropertiesDescription?: Maybe<Scalars['String']>;
  inspectionsDateUpdated?: Maybe<Scalars['Date']>;
  inspectionsLastEditedBy?: Maybe<LastUpdatedProfile>;
  inspectionsDescription?: Maybe<Scalars['String']>;
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

export type PimWithNewAogSpace = {
  __typename?: 'PimWithNewAogSpace';
  newSpace?: Maybe<AogSpace>;
  pim?: Maybe<Pim>;
};

export type PimWithNewBogSpace = {
  __typename?: 'PimWithNewBogSpace';
  newSpace: BogSpace;
  pim: Pim;
};

export type PimWithNewCadastre = {
  __typename?: 'PimWithNewCadastre';
  pim?: Maybe<Pim>;
  cadastre?: Maybe<Cadastre>;
};

export type PimWithNewFloor = {
  __typename?: 'PimWithNewFloor';
  newFloor: Floor;
  pim: Pim;
};

export type PimWithNewIdentificationNumber = {
  __typename?: 'PimWithNewIdentificationNumber';
  pim: Pim;
  newIdentificationNumber: IdentificationNumber;
};

export type PimWithNewMediaLink = {
  __typename?: 'PimWithNewMediaLink';
  pim: Pim;
  newMediaLink: MediaLink;
};

export type PimWithNewOutside = {
  __typename?: 'PimWithNewOutside';
  pim: Pim;
  newOutsideFeature: OutsideFeature;
};

export type PimWithNewPictures = {
  __typename?: 'PimWithNewPictures';
  pim: Pim;
  newPictures?: Maybe<Array<Picture>>;
};

export type PimWithNewService = {
  __typename?: 'PimWithNewService';
  pim: Pim;
  newService: Service;
};

export type PimWithNewTag = {
  __typename?: 'PimWithNewTag';
  pim: Pim;
  newTag: Tag;
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

export type PimWithSameAddressInput = {
  pimId?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type PimWithUpdatedSpace = {
  __typename?: 'PimWithUpdatedSpace';
  newSpace: Space;
  pim: Pim;
};

export enum PollutionType {
  Asbestos = 'Asbestos',
  Soil = 'Soil',
}

export enum PreferredLanguageType {
  Dutch = 'Dutch',
  English = 'English',
  Polish = 'Polish',
  German = 'German',
  French = 'French',
  Italian = 'Italian',
  Spanish = 'Spanish',
  Portuguese = 'Portuguese',
}

export enum PreferredLetterSalutationType {
  Family = 'Family',
  Lord = 'Lord',
  Mylady = 'Mylady',
  LordMylady = 'LordMylady',
}

export enum PreferredTitlePrefixType {
  Dr = 'Dr',
  Mr = 'Mr',
  Ir = 'Ir',
  Ing = 'Ing',
  Drs = 'Drs',
}

export enum PreferredTitleSuffixType {
  Msc = 'Msc',
  Ma = 'MA',
  Mre = 'MRE',
  Mba = 'MBA',
  Bc = 'Bc',
}

export type Pricing = LastUpdated & {
  __typename?: 'Pricing';
  rent?: Maybe<RentInformations>;
  sale?: Maybe<SaleInformations>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
};

export enum PricingType {
  Sale = 'Sale',
  Rent = 'Rent',
}

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  gender?: Maybe<GenderType>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  functionDescription?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  teams?: Maybe<Array<ProfileTeam>>;
  emailAddresses?: Maybe<Array<EmailAddress>>;
  phoneNumbers?: Maybe<Array<PhoneNumber>>;
  socialMediaLinks?: Maybe<Array<SocialMediaLink>>;
  company?: Maybe<Company>;
  adminSettings?: Maybe<Array<AdminSettings>>;
  isAdmin: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  initials?: Maybe<Scalars['String']>;
  costUnit?: Maybe<Scalars['String']>;
  hideOnMemos?: Maybe<Scalars['Boolean']>;
  isAccountmanager?: Maybe<Scalars['Boolean']>;
  image?: Maybe<File>;
  language?: Maybe<Scalars['String']>;
};

export type ProfileFilters = {
  isActive?: Maybe<Scalars['Boolean']>;
};

export type ProfileSearchResult = {
  __typename?: 'ProfileSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<Profile>>;
};

export type ProfileTeam = {
  __typename?: 'ProfileTeam';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  createPermission: Scalars['Boolean'];
  readPermission: Scalars['Boolean'];
  updatePermission: Scalars['Boolean'];
  deletePermission: Scalars['Boolean'];
};

export enum ProgressStatus {
  Concept = 'Concept',
  InPreparation = 'InPreparation',
  InPresale = 'InPresale',
  InProgress = 'InProgress',
  Delivered = 'Delivered',
}

export type ProjectMarketing = {
  __typename?: 'ProjectMarketing';
  logos?: Maybe<Array<File>>;
  mainLogoId?: Maybe<Scalars['String']>;
  emailAddress?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  firstColor?: Maybe<Scalars['String']>;
  secondColor?: Maybe<Scalars['String']>;
};

export type ProjectMarketingInput = {
  emailAddress?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  firstColor?: Maybe<Scalars['String']>;
  secondColor?: Maybe<Scalars['String']>;
  mainLogoId?: Maybe<Scalars['String']>;
};

export type ProjectPhase = {
  __typename?: 'ProjectPhase';
  id: Scalars['ID'];
  name: Scalars['String'];
  logo?: Maybe<File>;
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

export enum ProjectRisk {
  Low = 'Low',
  Middle = 'Middle',
  High = 'High',
}

export enum ProjectType {
  Commercial = 'Commercial',
  Relet = 'Relet',
  NewConstruction = 'NewConstruction',
}

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

export enum PropertyPublishedExternally {
  Yes = 'Yes',
  No = 'No',
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

export enum PropertyRightType {
  BpRights = 'BpRights',
  Easements = 'Easements',
  RightOfSuperficies = 'RightOfSuperficies',
  Cooperative = 'Cooperative',
  Horizontal = 'Horizontal',
}

export type PropertyRights = {
  __typename?: 'PropertyRights';
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type PropertyRightsInput = {
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

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

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  checkCompanyRegistered: CheckRegisteredResponse;
  crmList: CrmListSearchResult;
  dictionary?: Maybe<Scalars['Dictionary']>;
  getAllProfiles: ProfileSearchResult;
  getAllocate?: Maybe<Allocate>;
  getAppointment: Appointment;
  getBilling?: Maybe<Billing>;
  getBulkDetails?: Maybe<Array<GetBulkResult>>;
  getChangesHistory: Array<Event>;
  getCompanyDetails: Company;
  getCrmContactInformation?: Maybe<CrmContactInformation>;
  getCrmFamilyContacts?: Maybe<CrmFamilyContacts>;
  getCrmFinancial?: Maybe<CrmFinancial>;
  getCrmGeneral?: Maybe<CrmGeneral>;
  getCrmHomeSituation?: Maybe<CrmHomeSituation>;
  getCrmLabels?: Maybe<Array<Label>>;
  getCrmWithSameInfo: CrmListSearchResult;
  getDmsFolder?: Maybe<DmsFolder>;
  getEmail?: Maybe<Email>;
  getKikSettings?: Maybe<KikSettings>;
  getLabels?: Maybe<Array<Label>>;
  getMatchProfile?: Maybe<MatchProfile>;
  getMyTeamMembers: ProfileSearchResult;
  getNcp: NcpGeneral;
  getNcpCharacteristics: NcpCharacteristics;
  getNcpLabels?: Maybe<Array<Label>>;
  getNcpLinkedPims: NcpLinkedPims;
  getNcpMedia: NcpMedia;
  getNcpPrices: NcpPricesResult;
  getNcpServices: NcpServices;
  getNcpWithSameAddress: NcpSearchResult;
  getNotifications?: Maybe<NotificationSearchResult>;
  getNylasAuthUrl?: Maybe<Scalars['String']>;
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
  getPimMeters: PimMeters;
  getPimOutside: PimOutside;
  getPimSales: PimSales;
  getPimServices: PimServices;
  getPimSpecification: PimSpecification;
  getPimsGeneralWithSameAddress: GeneralPimSearchResult;
  getPricing: PimPrices;
  getProfile?: Maybe<Profile>;
  getProjectPhases: ProjectPhaseSearchResult;
  getPropertyTypes: Array<Scalars['String']>;
  getQuestionaire?: Maybe<Questionaire>;
  getQuestionaireGroup?: Maybe<Groups>;
  getQuestionaires: TemplatesResponse;
  getSalesCrmsList: LinkSalesCrmsListResult;
  getSalesList?: Maybe<SalesSearchResult>;
  getSalesPimsList: LinkSalesPimsListResult;
  getTask?: Maybe<Task>;
  getTaskLabels?: Maybe<Array<Label>>;
  getTasks?: Maybe<TaskSearchResult>;
  getTasksFullSummary?: Maybe<TaskFullSummaryResult>;
  getTasksSummaryByStatus?: Maybe<TaskSummaryByStatusResult>;
  getTeamDetails?: Maybe<Team>;
  getTeams?: Maybe<TeamSearchResult>;
  getTiaraMutations?: Maybe<Array<TiaraMutation>>;
  getTiaraValidation: TiaraValidation;
  getUndoId: Scalars['ID'];
  listAllocates?: Maybe<Array<Allocate>>;
  listCalendar?: Maybe<Array<Appointment>>;
  listDmsFolders?: Maybe<Array<DmsFolder>>;
  listEmail?: Maybe<Array<EmailListItem>>;
  listEmailFolders?: Maybe<Array<EmailFolderListItem>>;
  listMatchProfiles?: Maybe<Array<MatchProfile>>;
  listNcps: NcpListSearchResult;
  listNylasAccount?: Maybe<Array<NylasAccountItem>>;
  listObjectTypes: ObjectTypeListSearchResult;
  listPims: PimListSearchResult;
  listQuestionaireGroups?: Maybe<Array<Groups>>;
  listQuestions?: Maybe<Array<Question>>;
  me?: Maybe<Profile>;
  search?: Maybe<SearchResult>;
};

export type QueryCheckCompanyRegisteredArgs = {
  name: Scalars['String'];
};

export type QueryCrmListArgs = {
  filters?: Maybe<ListCrmFilters>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Array<Sort>>;
};

export type QueryGetAllProfilesArgs = {
  filters?: Maybe<ProfileFilters>;
  pagination?: Maybe<Pagination>;
  search?: Maybe<Scalars['String']>;
};

export type QueryGetAllocateArgs = {
  id: Scalars['ID'];
};

export type QueryGetAppointmentArgs = {
  appointmentId: Scalars['ID'];
};

export type QueryGetBulkDetailsArgs = {
  input: GetBulkDetailsInput;
};

export type QueryGetChangesHistoryArgs = {
  filters?: Maybe<ChangesHistoryFilters>;
};

export type QueryGetCrmContactInformationArgs = {
  id: Scalars['ID'];
};

export type QueryGetCrmFamilyContactsArgs = {
  id: Scalars['ID'];
};

export type QueryGetCrmFinancialArgs = {
  id: Scalars['ID'];
};

export type QueryGetCrmGeneralArgs = {
  id: Scalars['ID'];
};

export type QueryGetCrmHomeSituationArgs = {
  id: Scalars['ID'];
};

export type QueryGetCrmLabelsArgs = {
  parentId: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty>>;
};

export type QueryGetCrmWithSameInfoArgs = {
  input: CrmWithSameInfoInput;
};

export type QueryGetDmsFolderArgs = {
  folderId: Scalars['ID'];
};

export type QueryGetEmailArgs = {
  accountId: Scalars['String'];
  emailId: Scalars['String'];
};

export type QueryGetLabelsArgs = {
  parentId: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty>>;
};

export type QueryGetMatchProfileArgs = {
  id: Scalars['ID'];
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

export type QueryGetNylasAuthUrlArgs = {
  input: NylasAccountAuthOptions;
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

export type QueryGetPimMetersArgs = {
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

export type QueryGetQuestionaireArgs = {
  id: Scalars['ID'];
};

export type QueryGetQuestionaireGroupArgs = {
  id: Scalars['ID'];
};

export type QueryGetQuestionairesArgs = {
  filters: ListQuestionairesFilters;
  pagination?: Maybe<Pagination>;
  search?: Maybe<Scalars['String']>;
};

export type QueryGetSalesCrmsListArgs = {
  id: Scalars['ID'];
};

export type QueryGetSalesListArgs = {
  label: SalesLabel;
  status: SalesStatus;
  sort?: Maybe<Array<Sort>>;
};

export type QueryGetSalesPimsListArgs = {
  id: Scalars['ID'];
};

export type QueryGetTaskArgs = {
  id: Scalars['ID'];
};

export type QueryGetTaskLabelsArgs = {
  parentId: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty>>;
};

export type QueryGetTasksArgs = {
  filters?: Maybe<TaskFilters>;
  sort?: Maybe<Array<Sort>>;
};

export type QueryGetTasksFullSummaryArgs = {
  filters?: Maybe<TaskFullSummaryFilters>;
};

export type QueryGetTasksSummaryByStatusArgs = {
  filters?: Maybe<TaskSummaryByStatusFilters>;
};

export type QueryGetTeamDetailsArgs = {
  id: Scalars['ID'];
};

export type QueryGetTeamsArgs = {
  pagination?: Maybe<Pagination>;
  search?: Maybe<Scalars['String']>;
};

export type QueryGetTiaraMutationsArgs = {
  entityId: Scalars['ID'];
  entity?: Maybe<TiaraEntities>;
};

export type QueryGetTiaraValidationArgs = {
  entityId: Scalars['ID'];
  entity?: Maybe<TiaraEntities>;
};

export type QueryGetUndoIdArgs = {
  filters?: Maybe<UndoIdQueryFilters>;
};

export type QueryListAllocatesArgs = {
  objectId: Scalars['ID'];
};

export type QueryListCalendarArgs = {
  input: AppointmentSearch;
};

export type QueryListDmsFoldersArgs = {
  entityId: Scalars['ID'];
};

export type QueryListEmailArgs = {
  accountId: Scalars['String'];
  folderId?: Maybe<Scalars['ID']>;
  unread?: Maybe<Scalars['Boolean']>;
};

export type QueryListEmailFoldersArgs = {
  accountId: Scalars['String'];
};

export type QueryListMatchProfilesArgs = {
  crmId: Scalars['ID'];
};

export type QueryListNcpsArgs = {
  filters?: Maybe<ListNcpsFilters>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Array<Sort>>;
};

export type QueryListNylasAccountArgs = {
  isCalendarConnected?: Maybe<Scalars['Boolean']>;
  isEmailConnected?: Maybe<Scalars['Boolean']>;
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

export type QueryListQuestionaireGroupsArgs = {
  templateId: Scalars['ID'];
};

export type QueryListQuestionsArgs = {
  groupId: Scalars['ID'];
};

export type QuerySearchArgs = {
  input: SearchInput;
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
  name: Scalars['String'];
  groupId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  type?: Maybe<QuestionType>;
  required?: Maybe<Scalars['Boolean']>;
  commentEnabled?: Maybe<Scalars['Boolean']>;
  showOn?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<Maybe<Options>>>;
  entity?: Maybe<Entity>;
};

export type QuestionInput = {
  groupId: Scalars['ID'];
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  type?: Maybe<QuestionType>;
  required?: Maybe<Scalars['Boolean']>;
  commentEnabled?: Maybe<Scalars['Boolean']>;
  showOn?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<Maybe<OptionsInput>>>;
  entity?: Maybe<EntityInput>;
};

export enum QuestionType {
  Text = 'text',
  Radio = 'radio',
  Checkbox = 'checkbox',
  Multiplechoice = 'multiplechoice',
  Number = 'number',
  Email = 'email',
  Price = 'price',
  Singlelinetext = 'singlelinetext',
  Multiplelinetext = 'multiplelinetext',
}

export type Questionaire = {
  __typename?: 'Questionaire';
  id: Scalars['ID'];
  companyId?: Maybe<Scalars['String']>;
  type?: Maybe<TemplateType>;
  templateName?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['Boolean']>;
  copyFromId?: Maybe<Scalars['String']>;
  entity?: Maybe<Entity>;
  templateStatus?: Maybe<TemplateStatus>;
  meta: TemplateMeta;
  settings?: Maybe<TemplateSettings>;
  labels?: Maybe<Array<Scalars['String']>>;
  tags?: Maybe<Array<TemplatTag>>;
  permissions?: Maybe<Array<TemplateSecurity>>;
};

export type QuestionaireInput = {
  templateName?: Maybe<Scalars['String']>;
  type?: Maybe<TemplateType>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['Boolean']>;
  copyFromId?: Maybe<Scalars['String']>;
  entity?: Maybe<EntityInput>;
  templateStatus?: Maybe<TemplateStatus>;
};

export type ReadNotificationInput = {
  id: Scalars['ID'];
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

export enum RealEstateType {
  Residential = 'Residential',
  Business = 'Business',
}

export enum ReasonToMoveType {
  Health = 'Health',
  Age = 'Age',
  HousingCosts = 'HousingCosts',
  ResidentialEnvironment = 'ResidentialEnvironment',
  LiveTogether = 'LiveTogether',
  ChangeOfIncome = 'ChangeOfIncome',
  HouseholdComposition = 'HouseholdComposition',
  Work = 'Work',
  Study = 'Study',
  LivingOnYourOwn = 'LivingOnYourOwn',
  Wedding = 'Wedding',
}

export type RectangleMeasurement = {
  __typename?: 'RectangleMeasurement';
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  surface?: Maybe<Scalars['Float']>;
};

export type RectangleMeasurementInput = {
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  surface?: Maybe<Scalars['Float']>;
};

export type RemoveFilesInput = {
  fileIDs: Array<Scalars['ID']>;
  entity: EntityWithMultipleFiles;
  entityID: Scalars['ID'];
};

export type RemoveUserFromTeamInput = {
  teamId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type Renovation = {
  __typename?: 'Renovation';
  yearOfRenovation?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type RenovationInput = {
  yearOfRenovation?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
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
  conditions?: Maybe<RentCondition>;
  notes?: Maybe<Scalars['String']>;
  isEnabled?: Maybe<Scalars['Boolean']>;
};

export type RentInformationsInput = {
  rentalPrice?: Maybe<Scalars['AbsoluteFloat']>;
  suffix?: Maybe<Scalars['String']>;
  conditions?: Maybe<RentCondition>;
  notes?: Maybe<Scalars['String']>;
  paymentFrequency?: Maybe<RentPaymentFrequency>;
};

export enum RentPaymentFrequency {
  PerMonth = 'PerMonth',
  Annual = 'Annual',
  Custom = 'Custom',
}

export type ResetPasswordInput = {
  password: Scalars['String'];
  username: Scalars['String'];
  code: Scalars['String'];
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  error?: Maybe<Scalars['String']>;
  stack?: Maybe<Scalars['String']>;
};

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

export type RetailSpace = {
  __typename?: 'RetailSpace';
  measurements?: Maybe<RetailMeasurements>;
  airTreatment?: Maybe<Array<Scalars['String']>>;
  specifications?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<GoodWillPrices>;
  wealthClass?: Maybe<Scalars['String']>;
  retailerAssociationContribution?: Maybe<RetailerAssociationContribution>;
  commonRooms?: Maybe<Array<Scalars['String']>>;
};

export type RetailSpaceInput = {
  measurements?: Maybe<RetailMeasurementsInput>;
  airTreatment?: Maybe<Array<Scalars['String']>>;
  specifications?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<GoodWillPricesInput>;
  wealthClass?: Maybe<Scalars['String']>;
  retailerAssociationContribution?: Maybe<RetailerAssociationContributionInput>;
  commonRooms?: Maybe<Array<Scalars['String']>>;
};

export enum RetailSpecificationType {
  TakeoverPersonnel = 'TakeoverPersonnel',
  CateringAllowed = 'CateringAllowed',
  IndustryLimitation = 'IndustryLimitation',
  PublicOrientedServices = 'PublicOrientedServices',
  Retail = 'Retail',
  Showroom = 'Showroom',
}

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

export type RoofInformationInput = {
  type?: Maybe<RoofTypeInput>;
  material?: Maybe<RoofMaterialInput>;
  insulation?: Maybe<RoofInsulationInput>;
  gutter?: Maybe<GutterInformationsInput>;
  gutterMaterial?: Maybe<GutterMaterialInformationsInput>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  yearOfRoof?: Maybe<Scalars['Int']>;
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
  conditions?: Maybe<SaleCondition>;
  purchaseMix?: Maybe<PurchaseMix>;
  notes?: Maybe<Scalars['String']>;
};

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

export type SaleInformations = {
  __typename?: 'SaleInformations';
  general?: Maybe<SaleGeneral>;
  woz?: Maybe<SaleWoz>;
  isEnabled?: Maybe<Scalars['Boolean']>;
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

export type Sales = {
  __typename?: 'Sales';
  id: Scalars['String'];
  label: SalesLabel;
  status: SalesStatus;
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  name?: Maybe<Scalars['String']>;
  type: SalesType;
  extraInfo?: Maybe<Scalars['String']>;
  attentionNote?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};

export type SalesAccountContact = {
  __typename?: 'SalesAccountContact';
  id: Scalars['ID'];
  cyclusId: Scalars['ID'];
  userId: Scalars['ID'];
  role: SalesRole;
};

export type SalesAddress = {
  __typename?: 'SalesAddress';
  cyclusId: Scalars['ID'];
  country: Scalars['String'];
  city: Scalars['String'];
  zipCode: Scalars['String'];
  street: Scalars['String'];
  houseNumber: Scalars['String'];
  extraInfo?: Maybe<Scalars['String']>;
};

export type SalesBrokerage = {
  __typename?: 'SalesBrokerage';
  cyclusId: Scalars['ID'];
  type: SalesBrokerageType;
  percentage?: Maybe<Scalars['Int']>;
  fixedAmount?: Maybe<Scalars['Int']>;
  amountValues?: Maybe<Scalars['String']>;
  vatPercentage?: Maybe<Scalars['Int']>;
  reservationRate?: Maybe<Scalars['String']>;
  partialCommission?: Maybe<Scalars['Int']>;
  bonusPercentage?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export enum SalesBrokerageType {
  Percentage = 'Percentage',
  Fixed = 'Fixed',
}

export type SalesClient = {
  __typename?: 'SalesClient';
  id: Scalars['ID'];
  cyclusId: Scalars['ID'];
  crmId: Scalars['ID'];
};

export type SalesEntity = {
  __typename?: 'SalesEntity';
  cyclusId: Scalars['ID'];
  entityType: Entities;
  entityId: Scalars['ID'];
};

export type SalesFile = {
  __typename?: 'SalesFile';
  cyclusId: Scalars['ID'];
  documentId: Scalars['ID'];
  label: Scalars['String'];
};

export type SalesFilters = {
  label: SalesLabel;
  status: SalesStatus;
};

export enum SalesLabel {
  Lead = 'Lead',
  Acquisition = 'Acquisition',
  Quotation = 'Quotation',
  Order = 'Order',
  Invoice = 'Invoice',
}

export type SalesPackage = {
  __typename?: 'SalesPackage';
  cyclusId: Scalars['ID'];
  package: Scalars['String'];
};

export type SalesPim = {
  __typename?: 'SalesPim';
  id: Scalars['ID'];
  cyclusId: Scalars['ID'];
  pimId: Scalars['ID'];
};

export enum SalesRole {
  Accountant = 'Accountant',
  Concierge = 'Concierge',
  Gardener = 'Gardener',
}

export type SalesSearchResult = {
  __typename?: 'SalesSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<Sales>>;
};

export type SalesSettings = {
  __typename?: 'SalesSettings';
  generalSettings?: Maybe<MomentGeneralSetting>;
  amountOfViewings?: Maybe<Scalars['Int']>;
};

export type SalesSettingsInput = {
  pimId: Scalars['ID'];
  generalSettings?: Maybe<MomentGeneralSetting>;
  amountOfViewings?: Maybe<Scalars['Int']>;
  moments?: Maybe<Array<UpdateViewingMomentInput>>;
};

export enum SalesStatus {
  ActionRequired = 'ActionRequired',
  Active = 'Active',
  Inactive = 'Inactive',
  Complete = 'Complete',
}

export type SalesStatusChange = {
  __typename?: 'SalesStatusChange';
  id: Scalars['ID'];
  cyclusId: Scalars['ID'];
  status: SalesStatus;
  createdAt: Scalars['Date'];
  historyId: Scalars['ID'];
};

export enum SalesType {
  Taxation = 'Taxation',
  Inspection = 'Inspection',
  SaleOrder = 'SaleOrder',
}

export type SearchInput = {
  keyword: Scalars['String'];
  types?: Maybe<Array<Entities>>;
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};

export type SearchMetadata = {
  __typename?: 'SearchMetadata';
  total: Scalars['Int'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  users?: Maybe<Array<Profile>>;
  emails?: Maybe<Array<Profile>>;
  crms?: Maybe<Array<CrmListItem>>;
  pims?: Maybe<Array<Pim>>;
  teams?: Maybe<Array<Team>>;
  ncps?: Maybe<Array<ListNcp>>;
  sales?: Maybe<Array<Sales>>;
};

export enum SectionWithDescriptionType {
  Media = 'Media',
  Inspection = 'Inspection',
  LinkedProperties = 'LinkedProperties',
  Services = 'Services',
  PricesCosts = 'PricesCosts',
  Meters = 'Meters',
  BogSpaces = 'BogSpaces',
  AogAnimals = 'AogAnimals',
  AogBuildings = 'AogBuildings',
  AogInstallations = 'AogInstallations',
  AogGrounds = 'AogGrounds',
  MetersMetaInfo = 'MetersMetaInfo',
}

export type Security = {
  __typename?: 'Security';
  message: MessageType;
  path?: Maybe<PathType>;
  type?: Maybe<Scalars['String']>;
  context?: Maybe<ContextType>;
};

export type SendEmailInput = {
  from: Array<EmailAndNameInput>;
  to: Array<EmailAndNameInput>;
  cc?: Maybe<Array<EmailAndNameInput>>;
  bcc?: Maybe<Array<EmailAndNameInput>>;
  subject: Scalars['String'];
  body: Scalars['String'];
};

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

export type ServiceConfiguration =
  | HotWaterSupplyConfiguration
  | HeatingSourceConfiguration
  | AdditionalServiceConfiguration;

export type ServiceDescriptionInput = {
  id: Scalars['ID'];
  servicesDescription?: Maybe<Scalars['String']>;
};

export enum ServiceType {
  HotWaterSupplies = 'HotWaterSupplies',
  HeatingSources = 'HeatingSources',
  AdditionalServices = 'AdditionalServices',
}

export type Services = {
  hotWaterSupplies?: Maybe<Array<Service>>;
  heatingSources?: Maybe<Array<Service>>;
  additionalServices?: Maybe<Array<Service>>;
};

export type SetCharacteristicsSectionsInput = {
  id: Scalars['ID'];
  sections?: Maybe<Array<CharacteristicsSections>>;
};

export type SetLinkedPimsInput = {
  id: Scalars['ID'];
  linkedProperties?: Maybe<Array<Scalars['ID']>>;
};

export enum SocialBenefitType {
  SocialBenefit = 'SocialBenefit',
  Wajong = 'Wajong',
  WiaWao = 'WiaWao',
  IoawIow = 'IoawIow',
}

export type SocialMediaLink = {
  __typename?: 'SocialMediaLink';
  id: Scalars['String'];
  socialMediaLink: Scalars['String'];
  socialMediaLinkType?: Maybe<SocialMediaLinkType>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export enum SocialMediaLinkType {
  LinkedIn = 'LinkedIn',
  Twitter = 'Twitter',
  Facebook = 'Facebook',
  Pinterest = 'Pinterest',
  Instagram = 'Instagram',
  WhatsApp = 'WhatsApp',
  PersonalWebsite = 'PersonalWebsite',
}

export enum SocialRealEstateServicesType {
  SanitaryShared = 'SanitaryShared',
  SanitaryIndividually = 'SanitaryIndividually',
  Elevator = 'Elevator',
  Swimmingpool = 'Swimmingpool',
  Daycare = 'Daycare',
  PrivateParkingFacilities = 'PrivateParkingFacilities',
  OutdoorSpaceAvailable = 'OutdoorSpaceAvailable',
  OutOfSchoolChildcare = 'OutOfSchoolChildcare',
  FireAlarmSystem = 'FireAlarmSystem',
}

export type SocialRealEstateSpace = {
  __typename?: 'SocialRealEstateSpace';
  measurements?: Maybe<SocialRealEstateSpaceMeasurements>;
  type?: Maybe<Scalars['String']>;
  notesAboutType?: Maybe<Scalars['String']>;
  destinationType?: Maybe<Array<Scalars['String']>>;
  specifications?: Maybe<Array<Scalars['String']>>;
  services?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<SocialRealEstateSpacePrices>;
};

export type SocialRealEstateSpaceInput = {
  measurements?: Maybe<SocialRealEstateSpaceMeasurementsInput>;
  type?: Maybe<Scalars['String']>;
  notesAboutType?: Maybe<Scalars['String']>;
  destinationType?: Maybe<Array<Scalars['String']>>;
  specifications?: Maybe<Array<Scalars['String']>>;
  services?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<SocialRealEstateSpacePricesInput>;
};

export type SocialRealEstateSpaceMeasurements = {
  __typename?: 'SocialRealEstateSpaceMeasurements';
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  numberOfCareUnits?: Maybe<Scalars['Int']>;
  numberOfSeats?: Maybe<Scalars['Int']>;
};

export type SocialRealEstateSpaceMeasurementsInput = {
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  numberOfCareUnits?: Maybe<Scalars['Int']>;
  numberOfSeats?: Maybe<Scalars['Int']>;
};

export type SocialRealEstateSpacePrices = {
  __typename?: 'SocialRealEstateSpacePrices';
  vatRate?: Maybe<Scalars['AbsoluteFloat']>;
  notes?: Maybe<Scalars['String']>;
};

export type SocialRealEstateSpacePricesInput = {
  vatRate?: Maybe<Scalars['AbsoluteFloat']>;
  notes?: Maybe<Scalars['String']>;
};

export enum SocialRealEstateSpaceType {
  Cultural = 'Cultural',
  Education = 'Education',
  Religious = 'Religious',
  Sport = 'Sport',
  Care = 'Care',
}

export enum SocialRealEstateSpecificationType {
  PracticeSpace = 'PracticeSpace',
  RedesignationPossible = 'RedesignationPossible',
  HousingAvailable = 'HousingAvailable',
  ReturnServices = 'ReturnServices',
}

export enum SoilType {
  Clay = 'Clay',
  Peat = 'Peat',
  Sand = 'Sand',
  Loam = 'Loam',
}

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
  dateCreated?: Maybe<Scalars['Date']>;
};

export type SpaceConfiguration =
  | KitchenSpace
  | BathroomSpace
  | LivingRoomSpace
  | BedroomSpace
  | HomeOfficeSpace
  | OtherSpace;

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

export type SpecialTags = {
  __typename?: 'SpecialTags';
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

export type SpecialTagsInput = {
  type?: Maybe<Array<Scalars['String']>>;
  notes?: Maybe<Scalars['String']>;
};

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

export type Specification = LastUpdated & {
  __typename?: 'Specification';
  energy?: Maybe<Energy>;
  approvals?: Maybe<Approvals>;
  obligation?: Maybe<ObligationToProvideInformation>;
  description?: Maybe<Scalars['String']>;
  dateUpdated?: Maybe<Scalars['Date']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
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
  lastEditedBy?: Maybe<LastUpdatedProfile>;
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

export type SpecificationInput = {
  pimId: Scalars['ID'];
  energy?: Maybe<EnergyInput>;
  approvals?: Maybe<ApprovalsInput>;
  obligation?: Maybe<ObligationToProvideInformationInput>;
  description?: Maybe<Scalars['String']>;
};

export type Storage = {
  __typename?: 'Storage';
  measurements?: Maybe<StorageMeasurements>;
  type?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
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

export type StorageInput = {
  measurements?: Maybe<StorageMeasurementsInput>;
  type?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

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

export type StorageMeasurements = {
  __typename?: 'StorageMeasurements';
  length?: Maybe<Scalars['AbsoluteFloat']>;
  width?: Maybe<Scalars['AbsoluteFloat']>;
  height?: Maybe<Scalars['AbsoluteFloat']>;
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  volume?: Maybe<Scalars['AbsoluteFloat']>;
};

export type StorageMeasurementsInput = {
  length?: Maybe<Scalars['AbsoluteFloat']>;
  width?: Maybe<Scalars['AbsoluteFloat']>;
  height?: Maybe<Scalars['AbsoluteFloat']>;
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  volume?: Maybe<Scalars['AbsoluteFloat']>;
};

export enum StorageService {
  WithElectricDoor = 'WithElectricDoor',
  WithLoft = 'WithLoft',
  EquippedWithElectricity = 'EquippedWithElectricity',
  ProvidedWithHeating = 'ProvidedWithHeating',
  ProvidedWithWater = 'ProvidedWithWater',
}

export enum StorageType {
  StorageBox = 'StorageBox',
  Shed = 'Shed',
  TeaHouse = 'TeaHouse',
  WithAttic = 'WithAttic',
}

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
  notificationAdded: NotificationAdded;
};

export type Subtask = LastUpdated & {
  __typename?: 'Subtask';
  id: Scalars['ID'];
  title: Scalars['String'];
  status: TaskStatus;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

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

export enum TankType {
  Septic = 'Septic',
  Oil = 'Oil',
  Underground = 'Underground',
}

export type Task = LastUpdated & {
  __typename?: 'Task';
  id: Scalars['ID'];
  taskIndex: Scalars['Int'];
  title: Scalars['String'];
  assignee: Scalars['ID'];
  startDate?: Maybe<Scalars['Date']>;
  deadline?: Maybe<Scalars['Date']>;
  priority: TaskPriority;
  label: Scalars['String'];
  status: TaskStatus;
  description?: Maybe<Scalars['String']>;
  originalEstimate?: Maybe<Scalars['Int']>;
  subTasks?: Maybe<Array<Subtask>>;
  logs?: Maybe<Array<TaskLog>>;
  resultIntern?: Maybe<Scalars['String']>;
  resultClient?: Maybe<Scalars['String']>;
  lastEditedBy?: Maybe<LastUpdatedProfile>;
  dateUpdated?: Maybe<Scalars['Date']>;
};

export type TaskFilters = {
  search?: Maybe<Scalars['String']>;
  assignees?: Maybe<Array<Scalars['ID']>>;
  startDates?: Maybe<Array<DateRange>>;
  deadlines?: Maybe<Array<DateRange>>;
};

export type TaskFullSummaryFilters = {
  assignees?: Maybe<Array<Scalars['ID']>>;
};

export type TaskFullSummaryResult = {
  __typename?: 'TaskFullSummaryResult';
  today: Scalars['Int'];
  nextWeek: Scalars['Int'];
  future: Scalars['Int'];
  overdue: Scalars['Int'];
};

export enum TaskLabel {
  FollowUp = 'FollowUp',
  Business = 'Business',
  Private = 'Private',
}

export type TaskLog = {
  __typename?: 'TaskLog';
  timeSpent: Scalars['Int'];
  dateStarted?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
};

export type TaskLogInput = {
  timeSpent: Scalars['Int'];
  dateStarted?: Maybe<Scalars['Date']>;
  notes?: Maybe<Scalars['String']>;
};

export enum TaskPriority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

export type TaskSearchResult = {
  __typename?: 'TaskSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<Task>>;
};

export enum TaskStatus {
  ToDo = 'ToDo',
  InProgress = 'InProgress',
  Blocked = 'Blocked',
  Done = 'Done',
}

export type TaskSummaryByStatusFilters = {
  search?: Maybe<Scalars['String']>;
  assignees?: Maybe<Array<Scalars['ID']>>;
  startDates?: Maybe<Array<DateRange>>;
  deadlines?: Maybe<Array<DateRange>>;
};

export type TaskSummaryByStatusResult = {
  __typename?: 'TaskSummaryByStatusResult';
  todo: Scalars['Int'];
  inProgress: Scalars['Int'];
  blocked: Scalars['Int'];
  done: Scalars['Int'];
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  profileMembers?: Maybe<Array<TeamMember>>;
  company: Company;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  teamRights?: Maybe<Array<TeamRight>>;
  isInitTeam?: Maybe<Scalars['Boolean']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  user: Profile;
  createPermission: Scalars['Boolean'];
  readPermission: Scalars['Boolean'];
  updatePermission: Scalars['Boolean'];
  deletePermission: Scalars['Boolean'];
};

export enum TeamRight {
  Residential = 'Residential',
  Commercial = 'Commercial',
  Agricultural = 'Agricultural',
  ParkingLot = 'ParkingLot',
  BuildingPlot = 'BuildingPlot',
  Ncp = 'NCP',
  Crm = 'CRM',
  Sales = 'Sales',
  Documents = 'Documents',
}

export type TeamSearchResult = {
  __typename?: 'TeamSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<Team>>;
};

export type TemplatTag = {
  __typename?: 'TemplatTag';
  name: Scalars['String'];
  amount?: Maybe<Scalars['Int']>;
};

export enum TemplateDocumentType {
  Sale = 'Sale',
  Rent = 'Rent',
}

export type TemplateGeneralInput = {
  templateName?: Maybe<Scalars['String']>;
  settings?: Maybe<TemplateSettingsInput>;
  securities?: Maybe<Array<TemplateSecurityInput>>;
};

export type TemplateMeta = {
  __typename?: 'TemplateMeta';
  createdAt: Scalars['Date'];
  deletedAt?: Maybe<Scalars['Date']>;
};

export type TemplateSecurity = {
  __typename?: 'TemplateSecurity';
  name: Scalars['String'];
  create?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  read?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type TemplateSecurityInput = {
  name?: Maybe<Scalars['String']>;
  create?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  read?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type TemplateSettings = {
  __typename?: 'TemplateSettings';
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
};

export type TemplateSettingsInput = {
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
};

export enum TemplateStatus {
  Active = 'Active',
  InActive = 'InActive',
}

export enum TemplateType {
  Questionnaire = 'questionnaire',
  Contract = 'contract',
  Lvz = 'lvz',
  Survey = 'survey',
  Newsletter = 'newsletter',
  Print = 'print',
  SocialMedia = 'socialMedia',
  Invoice = 'invoice',
  Email = 'email',
}

export type TemplatesResponse = {
  __typename?: 'TemplatesResponse';
  count?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Questionaire>>;
};

export enum TermsOfCostsType {
  Monthly = 'Monthly',
  Yearly = 'Yearly',
}

export type Terrain = {
  __typename?: 'Terrain';
  terrainSpecifications?: Maybe<TerrainSpecifications>;
  specifications?: Maybe<Array<Scalars['String']>>;
  typeOfPavement?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<BogPrices>;
};

export type TerrainFeature = {
  __typename?: 'TerrainFeature';
  parking?: Maybe<TerrainParking>;
  measurement?: Maybe<RectangleMeasurement>;
  notes?: Maybe<Scalars['String']>;
  images?: Maybe<Array<File>>;
};

export type TerrainInput = {
  terrainSpecifications?: Maybe<TerrainSpecificationsInput>;
  specifications?: Maybe<Array<Scalars['String']>>;
  typeOfPavement?: Maybe<Array<Scalars['String']>>;
  prices?: Maybe<BogPricesInput>;
};

export enum TerrainParking {
  PaidParking = 'PaidParking',
  PublicParking = 'PublicParking',
  ParkingGarage = 'ParkingGarage',
  ParkingPermits = 'ParkingPermits',
}

export type TerrainSpecifications = {
  __typename?: 'TerrainSpecifications';
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  buildingHeightTerrain?: Maybe<Scalars['AbsoluteFloat']>;
  extensionTerrainPercent?: Maybe<Scalars['AbsoluteFloat']>;
  extensionTerrainM2?: Maybe<Scalars['AbsoluteFloat']>;
  pavedPercentage?: Maybe<Scalars['AbsoluteFloat']>;
};

export type TerrainSpecificationsInput = {
  surface?: Maybe<Scalars['AbsoluteFloat']>;
  buildingHeightTerrain?: Maybe<Scalars['AbsoluteFloat']>;
  extensionTerrainPercent?: Maybe<Scalars['AbsoluteFloat']>;
  extensionTerrainM2?: Maybe<Scalars['AbsoluteFloat']>;
  pavedPercentage?: Maybe<Scalars['AbsoluteFloat']>;
};

export enum TerrainSpecificationsType {
  Fenced = 'Fenced',
  Lockable = 'Lockable',
}

export type TextChapter = {
  __typename?: 'TextChapter';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export type ThreadMessage = {
  __typename?: 'ThreadMessage';
  id: Scalars['ID'];
  folder: EmailFolder;
  from: Array<EmailAndName>;
  to: Array<EmailAndName>;
  subject: Scalars['String'];
  date: Scalars['Date'];
  unread?: Maybe<Scalars['Boolean']>;
  thread_id?: Maybe<Scalars['String']>;
};

export enum TiaraEntities {
  Pim = 'pim',
  Ncp = 'ncp',
  ObjectType = 'objectType',
}

export enum TiaraMessageType {
  Aanmelden = 'Aanmelden',
  Wijzigen = 'Wijzigen',
  Afmelden = 'Afmelden',
  OpvragenStatus = 'OpvragenStatus',
}

export type TiaraMutation = {
  __typename?: 'TiaraMutation';
  id: Scalars['ID'];
  messageType: TiaraMessageType;
  date: Scalars['Date'];
  status: TiaraMutationStatusType;
  errors?: Maybe<Array<Scalars['String']>>;
};

export enum TiaraMutationStatusType {
  Success = 'Success',
  Failure = 'Failure',
  Open = 'Open',
}

export type TiaraSendMessageInput = {
  entityId: Scalars['ID'];
  entity: TiaraEntities;
  messageType: TiaraMessageType;
};

export type TiaraValidation = {
  __typename?: 'TiaraValidation';
  errors?: Maybe<Array<Scalars['String']>>;
};

export type ToggleCommonPricingInput = {
  id: Scalars['ID'];
  isRent: Scalars['Boolean'];
  isSale: Scalars['Boolean'];
};

export type TogglePricingInput = {
  id: Scalars['ID'];
  isRent: Scalars['Boolean'];
  isSale: Scalars['Boolean'];
};

export enum TypeOfAppointment {
  Viewing = 'Viewing',
  OnlineViewing = 'OnlineViewing',
}

export enum TypeOfEmployment {
  IncomeFromEquity = 'IncomeFromEquity',
  SalariedEmployment = 'SalariedEmployment',
  Entrepreneur = 'Entrepreneur',
  Benefits = 'Benefits',
  None = 'None',
}

export enum TypeOfObjectType {
  House = 'House',
  Apartament = 'Apartament',
  BuildingPlot = 'BuildingPlot',
}

export type TypeOfParking = {
  __typename?: 'TypeOfParking';
  type?: Maybe<Scalars['String']>;
  parkingNumber?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export type TypeOfParkingInput = {
  type?: Maybe<Scalars['String']>;
  parkingNumber?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
};

export enum TypeOfParkingType {
  Garage = 'Garage',
  ParkingBasement = 'ParkingBasement',
  ParkingLot = 'ParkingLot',
  Berth = 'Berth',
  MobileHomePitch = 'MobileHomePitch',
  CaravanSite = 'CaravanSite',
}

export enum TypeOfPavement {
  Asphalt = 'Asphalt',
  ClinkerBricks = 'ClinkerBricks',
  StelconPlates = 'StelconPlates',
  FloorTiles = 'FloorTiles',
}

export enum TypeOfStorage {
  StorageRoom = 'StorageRoom',
  StorageArea = 'StorageArea',
}

export type UndoEntityInput = {
  undoIds: Array<Scalars['ID']>;
};

export type UndoIdQueryFilters = {
  relatedEntityId: Scalars['ID'];
};

export type UndoResult = {
  __typename?: 'UndoResult';
  successful?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  entityId?: Maybe<Scalars['ID']>;
  entityType?: Maybe<EventEntityType>;
};

export type UpdateAogSpaceInput = {
  pimId: Scalars['ID'];
  spaceId: Scalars['ID'];
  spaceName?: Maybe<Scalars['String']>;
  groundConfiguration?: Maybe<GroundSpaceInput>;
  buildingsConfiguration?: Maybe<BuildingsSpaceInput>;
  installationsConfiguration?: Maybe<InstallationsInput>;
  animalsConfiguration?: Maybe<AnimalsInput>;
};

export type UpdateBogSpaceInput = {
  pimId: Scalars['ID'];
  spaceId: Scalars['ID'];
  spaceName?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  retailSpaceConfiguration?: Maybe<RetailSpaceInput>;
  leisureSpaceConfiguration?: Maybe<LeisureSpaceInput>;
  horecaSpaceConfiguration?: Maybe<HorecaSpaceInput>;
  businessSpaceConfiguration?: Maybe<BusinessSpaceInput>;
  officeSpaceConfiguration?: Maybe<OfficeSpaceInput>;
  socialRealEstateSpaceConfiguration?: Maybe<SocialRealEstateSpaceInput>;
  terrainConfiguration?: Maybe<TerrainInput>;
  storageConfiguration?: Maybe<StorageInput>;
};

export type UpdateCadastreInput = {
  id: Scalars['String'];
  pimId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  mapsDescription?: Maybe<Scalars['String']>;
  plot?: Maybe<CadastrePlotInput>;
};

export type UpdateCadastreMapInput = {
  pimId: Scalars['String'];
  cadastreId: Scalars['String'];
  mapId: Scalars['String'];
  map?: Maybe<CadastreMapInput>;
  fileId?: Maybe<Scalars['String']>;
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

export type UpdateCommonPricingInput = {
  id: Scalars['ID'];
  rent?: Maybe<CommonRentInformationsInput>;
  sale?: Maybe<CommonSaleInformationsInput>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateCompanyInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  addressSecondLine?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  floor?: Maybe<Scalars['Int']>;
  chamberOfCommerce?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  imageId?: Maybe<Scalars['ID']>;
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

export type UpdateCrmContactInformationInput = {
  id: Scalars['ID'];
  contactInfoDescription?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<CrmAddressInput>>;
  phoneNumbers?: Maybe<Array<CrmPhoneNumberInput>>;
  emailAddresses?: Maybe<Array<CrmEmailAddressInput>>;
  socialMedia?: Maybe<Array<CrmSocialMediaInput>>;
};

export type UpdateCrmFamilyContactsInput = {
  id: Scalars['ID'];
  maritalStatus?: Maybe<Scalars['String']>;
  maritalStatusDate?: Maybe<Scalars['Date']>;
  maritalStatusInformation?: Maybe<Scalars['String']>;
  familyCompositionChildren?: Maybe<Scalars['Int']>;
  familyCompositionAdults?: Maybe<Scalars['Int']>;
  familyCompositionInformation?: Maybe<Scalars['String']>;
  partners?: Maybe<Array<CrmPartnerInput>>;
  contacts?: Maybe<Array<CrmContactInput>>;
};

export type UpdateCrmFinancialInput = {
  id: Scalars['ID'];
  financialInfo?: Maybe<Scalars['String']>;
  income?: Maybe<Array<CrmIncomeInput>>;
  financialObligations?: Maybe<Array<CrmFinancialObligationInput>>;
  bankAccounts?: Maybe<Array<CrmBankAccountInput>>;
};

export type UpdateCrmGeneralInput = {
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  extraNames?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<GenderType>;
  avatarId?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  dateOfDeath?: Maybe<Scalars['Date']>;
  isPassedAway?: Maybe<Scalars['Boolean']>;
  preferredLanguage?: Maybe<Scalars['String']>;
  identification?: Maybe<IdentificationType>;
  identificationNumber?: Maybe<Scalars['String']>;
  identificationIssueCity?: Maybe<Scalars['String']>;
  identificationIssueDate?: Maybe<Scalars['Date']>;
  identificationExpirationDate?: Maybe<Scalars['Date']>;
  preferredTitlePrefix?: Maybe<Scalars['String']>;
  preferredTitleSuffix?: Maybe<Scalars['String']>;
  preferredLetterSalutation?: Maybe<Scalars['String']>;
  preferredTitleInformation?: Maybe<Scalars['String']>;
  identificationNumbers?: Maybe<Array<CrmIdentificationNumberInput>>;
  status?: Maybe<CrmStatus>;
};

export type UpdateCrmHomeSituationInput = {
  id: Scalars['ID'];
  currentHomeSituation?: Maybe<Scalars['String']>;
  currentHomeStatus?: Maybe<Scalars['String']>;
  currentHomeSalesValue?: Maybe<Scalars['Int']>;
  currentHomeMortgage?: Maybe<Scalars['Int']>;
  currentHomeInformation?: Maybe<Scalars['String']>;
  reasonToMove?: Maybe<Array<Scalars['String']>>;
  movingDate?: Maybe<Scalars['Date']>;
  movingInformation?: Maybe<Scalars['String']>;
};

export type UpdateDescriptionInput = {
  section: SectionWithDescriptionType;
  pimId: Scalars['String'];
  description: Scalars['String'];
  meterType?: Maybe<MeterType>;
};

export type UpdateDmsFolderInput = {
  entityId: Scalars['ID'];
  id: Scalars['ID'];
  foldername: Scalars['String'];
  entityType: DmsEntityType;
  type: DmsFolderType;
  order?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Date']>;
};

export type UpdateEmailAddressInput = {
  id: Scalars['String'];
  profileId: Scalars['String'];
  emailAddress: Scalars['String'];
  emailAddressType?: Maybe<EmailAddressType>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export type UpdateEmailInput = {
  id: Scalars['ID'];
  unread?: Maybe<Scalars['Boolean']>;
};

export type UpdateFloorInput = {
  pimId: Scalars['String'];
  floorId: Scalars['String'];
  floorDescription?: Maybe<Scalars['String']>;
  floorType?: Maybe<FloorType>;
};

export type UpdateGroupsInput = {
  groupName?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  entity?: Maybe<EntityInput>;
};

export type UpdateIdentificationNumberInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateInspectionInput = {
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateLinkedPropertiesListDescription = {
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateMatchProfileInput = {
  propertyType?: Maybe<MatchPropertyType>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  matchDuration?: Maybe<DateRange>;
  matchWith?: Maybe<Array<MatchProfileWith>>;
  description?: Maybe<Scalars['String']>;
  estateType?: Maybe<MatchEstateType>;
  commercialEstateType?: Maybe<MatchCommercialEstateType>;
  characteristics?: Maybe<MatchCharacteristicsInput>;
  commercialCharacteristics?: Maybe<MatchCommercialCharacteristicsInput>;
  pricing?: Maybe<MatchPricingInput>;
  outside?: Maybe<MatchOutsidePricingInput>;
  garden?: Maybe<MatchGardenInput>;
  tags?: Maybe<Array<MatchTags>>;
  measurements?: Maybe<MatchMeasurementsInput>;
  revenue?: Maybe<IntRangeInput>;
  exploitation?: Maybe<IntRangeInput>;
  requirements?: Maybe<Array<MatchRequirementInput>>;
  locations?: Maybe<Array<MatchProfileLocationInput>>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type UpdateMediaLinkInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateMeterInput = {
  parentId: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  projectType?: Maybe<ProjectType>;
};

export type UpdateObjectTypesListDescription = {
  id: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateOutsideFeatureInput = {
  pimId: Scalars['String'];
  outsideFeatureId: Scalars['String'];
  feature?: Maybe<Scalars['UpdateFeatureInputConfiguration']>;
};

export type UpdatePhoneNumberInput = {
  id: Scalars['String'];
  profileId: Scalars['String'];
  phoneNumber: Scalars['String'];
  phoneNumberType?: Maybe<PhoneNumberType>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export type UpdatePictureInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['String']>;
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

export type UpdatePricingInput = {
  id: Scalars['ID'];
  rent?: Maybe<RentInformationsInput>;
  sale?: Maybe<SaleInformationsInput>;
  description?: Maybe<Scalars['String']>;
};

export type UpdateProfileInput = {
  id: Scalars['String'];
  gender?: Maybe<GenderType>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  functionDescription?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  adminSettings?: Maybe<Array<AdminSettings>>;
  initials?: Maybe<Scalars['String']>;
  costUnit?: Maybe<Scalars['String']>;
  hideOnMemos?: Maybe<Scalars['Boolean']>;
  isAccountmanager?: Maybe<Scalars['Boolean']>;
  imageId?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
};

export type UpdateProjectPhaseInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  logoId?: Maybe<Scalars['ID']>;
  ncpIds?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateQuestionInput = {
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  type?: Maybe<QuestionType>;
  required?: Maybe<Scalars['Boolean']>;
  commentEnabled?: Maybe<Scalars['Boolean']>;
  showOn?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Array<Maybe<OptionsInput>>>;
  entity?: Maybe<EntityInput>;
};

export type UpdateQuestionaireInput = {
  id: Scalars['ID'];
  templateStatus?: Maybe<TemplateStatus>;
  type: TemplateType;
};

export type UpdateReadingInput = {
  parentId: Scalars['ID'];
  id: Scalars['ID'];
  value?: Maybe<Scalars['Int']>;
  dateOfReading?: Maybe<Scalars['Date']>;
  feedInId?: Maybe<Scalars['String']>;
};

export type UpdateSales = {
  __typename?: 'UpdateSales';
  attentionNote?: Maybe<Scalars['String']>;
  status?: Maybe<SalesStatus>;
  date?: Maybe<Scalars['Date']>;
  type?: Maybe<SalesType>;
  extraInfo?: Maybe<Scalars['String']>;
};

export type UpdateSalesAccountContact = {
  __typename?: 'UpdateSalesAccountContact';
  cyclusId: Scalars['ID'];
  userId: Scalars['ID'];
  role: SalesRole;
};

export type UpdateSalesAddress = {
  __typename?: 'UpdateSalesAddress';
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  extraInfo?: Maybe<Scalars['String']>;
};

export type UpdateSalesBrokerage = {
  __typename?: 'UpdateSalesBrokerage';
  type?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Int']>;
  fixedAmount?: Maybe<Scalars['Int']>;
  amountValues?: Maybe<Scalars['String']>;
  vatPercentage?: Maybe<Scalars['Int']>;
  reservationRate?: Maybe<Scalars['String']>;
  partialCommission?: Maybe<Scalars['Int']>;
  bonusPercentage?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
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

export type UpdateSocialMediaLinkInput = {
  id: Scalars['String'];
  profileId: Scalars['String'];
  socialMediaLink: Scalars['String'];
  socialMediaLinkType?: Maybe<SocialMediaLinkType>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export type UpdateSpaceInput = {
  pimId: Scalars['String'];
  spaceId: Scalars['String'];
  spaceName?: Maybe<Scalars['String']>;
  space?: Maybe<Scalars['UpdateSpaceInputConfiguration']>;
};

export type UpdateTagInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateTaskInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  assignee?: Maybe<Scalars['ID']>;
  startDate?: Maybe<Scalars['Date']>;
  deadline?: Maybe<Scalars['Date']>;
  priority?: Maybe<TaskPriority>;
  label?: Maybe<Scalars['String']>;
  status?: Maybe<TaskStatus>;
  description?: Maybe<Scalars['String']>;
  originalEstimate?: Maybe<Scalars['Int']>;
  taskLog?: Maybe<TaskLogInput>;
  resultIntern?: Maybe<Scalars['String']>;
  resultClient?: Maybe<Scalars['String']>;
};

export type UpdateTeamInput = {
  teamId: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  teamRights?: Maybe<Array<TeamRight>>;
};

export type UpdateTextChapterInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type UpdateUserInTeamInput = {
  teamId: Scalars['ID'];
  userId: Scalars['ID'];
  permissions: PermissionsInTeamInput;
  notes?: Maybe<Scalars['String']>;
};

export type UpdateUspInput = {
  pimId: Scalars['String'];
  id: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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

export type UpdateWorkflowActionInput = {
  status?: Maybe<Scalars['Boolean']>;
};

export type UpdateWorkflowTriggerInput = {
  status?: Maybe<Scalars['Boolean']>;
  conditions?: Maybe<Scalars['String']>;
};

export type UploadFileResponse = {
  __typename?: 'UploadFileResponse';
  id?: Maybe<Scalars['String']>;
};

export type Usp = {
  __typename?: 'Usp';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['Date']>;
};

export type VerifyUserInput = {
  code?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type VerifyUserResponse = {
  __typename?: 'VerifyUserResponse';
  error?: Maybe<Scalars['String']>;
  status: Scalars['String'];
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

export enum WealthClassType {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
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

export type WorkflowAction = {
  __typename?: 'WorkflowAction';
  id: Scalars['ID'];
  workflowActionGroupId: Scalars['ID'];
  type: WorkflowActionType;
  actionIndex: Scalars['Int'];
  status: Scalars['Boolean'];
};

export type WorkflowActionGroup = {
  __typename?: 'WorkflowActionGroup';
  id: Scalars['ID'];
  workflowTriggerId: Scalars['ID'];
  type: WorkflowActionGroupType;
};

export enum WorkflowActionGroupType {
  New = 'New',
  Delete = 'Delete',
  Update = 'Update',
}

export enum WorkflowActionType {
  SendEmail = 'SendEmail',
  Action1 = 'Action1',
  Action2 = 'Action2',
  Action3 = 'Action3',
}

export type WorkflowSection = {
  __typename?: 'WorkflowSection';
  id: Scalars['ID'];
  workflowTemplateId: Scalars['ID'];
  name: Scalars['String'];
  startpoint: WorkflowSectionStartpoint;
  startpointOutside?: Maybe<Scalars['ID']>;
  endpoint: WorkflowSectionEndpoint;
  endpointOutside?: Maybe<Scalars['ID']>;
};

export enum WorkflowSectionEndpoint {
  End = 'End',
  Outside = 'Outside',
  Next = 'Next',
}

export enum WorkflowSectionStartpoint {
  Start = 'Start',
  Outside = 'Outside',
  Previous = 'Previous',
}

export type WorkflowTemplate = {
  __typename?: 'WorkflowTemplate';
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  icon: Scalars['String'];
  status: WorkflowTemplateStatus;
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export enum WorkflowTemplateStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

export type WorkflowTrigger = {
  __typename?: 'WorkflowTrigger';
  id: Scalars['ID'];
  workflowSectionId: Scalars['ID'];
  type: WorkflowTriggerType;
  status: Scalars['Boolean'];
  conditions?: Maybe<Scalars['String']>;
};

export enum WorkflowTriggerType {
  MakeAppointment = 'MakeAppointment',
  DifferentTrigger = 'DifferentTrigger',
  PimPricing = 'PimPricing',
  Trigger1 = 'Trigger1',
  Trigger2 = 'Trigger2',
}

export type ContextType = {
  __typename?: 'contextType';
  child?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
};

export type MessageType = {
  __typename?: 'messageType';
  message?: Maybe<Scalars['String']>;
};

export type PathType = {
  __typename?: 'pathType';
  type?: Maybe<Scalars['String']>;
};

export type AddAllocateMutationVariables = Exact<{
  input: AddAllocateInput;
}>;

export type AddAllocateMutation = { __typename?: 'Mutation' } & {
  addAllocate?: Maybe<{ __typename?: 'Allocate' } & Pick<Allocate, 'id'>>;
};

export type UpdateAllocateMutationVariables = Exact<{
  id: Scalars['ID'];
  input: AllocateInput;
}>;

export type UpdateAllocateMutation = { __typename?: 'Mutation' } & {
  updateAllocate?: Maybe<{ __typename?: 'Allocate' } & Pick<Allocate, 'id'>>;
};

export type DeleteAllocateMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteAllocateMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'deleteAllocate'>;

export type LoginMutationVariables = Exact<{
  input?: Maybe<LoginInput>;
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<
    { __typename?: 'LoginResponse' } & Pick<LoginResponse, 'error'> & {
        AuthenticationResult: { __typename?: 'AuthenticationResult' } & Pick<
          AuthenticationResult,
          'AccessToken' | 'RefreshToken'
        >;
      }
  >;
};

export type ForgotPasswordMutationVariables = Exact<{
  input?: Maybe<ForgotPasswordInput>;
}>;

export type ForgotPasswordMutation = { __typename?: 'Mutation' } & {
  forgotPassword?: Maybe<{ __typename?: 'ForgotPasswordResponse' } & Pick<ForgotPasswordResponse, 'error'>>;
};

export type ResetPasswordMutationVariables = Exact<{
  input?: Maybe<ResetPasswordInput>;
}>;

export type ResetPasswordMutation = { __typename?: 'Mutation' } & {
  resetPassword?: Maybe<{ __typename?: 'ResetPasswordResponse' } & Pick<ResetPasswordResponse, 'error'>>;
};

export type VerifyUserMutationVariables = Exact<{
  input: VerifyUserInput;
}>;

export type VerifyUserMutation = { __typename?: 'Mutation' } & {
  verifyUser?: Maybe<{ __typename?: 'VerifyUserResponse' } & Pick<VerifyUserResponse, 'status'>>;
};

export type BulkMutationVariables = Exact<{
  input: BulkOperationInput;
}>;

export type BulkMutation = { __typename?: 'Mutation' } & {
  bulk: { __typename?: 'BulkOperationResult' } & Pick<BulkOperationResult, 'undoIds'>;
};

export type AddAppointmentMutationVariables = Exact<{
  input: AddAppointmentInput;
}>;

export type AddAppointmentMutation = { __typename?: 'Mutation' } & {
  addAppointment: { __typename?: 'Appointment' } & Pick<
    Appointment,
    | 'id'
    | 'from'
    | 'to'
    | 'travelTimeBefore'
    | 'travelTimeAfter'
    | 'title'
    | 'allDay'
    | 'type'
    | 'isInsideOffice'
    | 'location'
    | 'outsideLocation'
    | 'taskLabel'
    | 'state'
    | 'agreementType'
    | 'repeatAppointment'
    | 'description'
    | 'appointmentType'
    | 'assignedPimIds'
    | 'invitedPersons'
  >;
};

export type DraftAppointmentMutationVariables = Exact<{
  input: DraftAppointmentInput;
}>;

export type DraftAppointmentMutation = { __typename?: 'Mutation' } & {
  draftAppointment: { __typename?: 'DraftAppointment' } & Pick<
    DraftAppointment,
    | 'id'
    | 'from'
    | 'to'
    | 'travelTimeBefore'
    | 'travelTimeAfter'
    | 'title'
    | 'allDay'
    | 'type'
    | 'isInsideOffice'
    | 'location'
    | 'outsideLocation'
    | 'taskLabel'
    | 'state'
    | 'agreementType'
    | 'repeatAppointment'
    | 'description'
    | 'appointmentType'
    | 'assignedPimIds'
    | 'invitedPersons'
  >;
};

export type ConfirmAppointmentMutationVariables = Exact<{
  appointmentId: Scalars['ID'];
  accountId: Scalars['String'];
}>;

export type ConfirmAppointmentMutation = { __typename?: 'Mutation' } & {
  confirmAppointment: { __typename?: 'Appointment' } & Pick<Appointment, 'id'>;
};

export type CreateCompanyMutationVariables = Exact<{
  input: CreateCompanyInput;
}>;

export type CreateCompanyMutation = { __typename?: 'Mutation' } & {
  createCompany: { __typename?: 'Company' } & Pick<Company, 'id'>;
};

export type UpdateCompanyDetailsMutationVariables = Exact<{
  input: UpdateCompanyInput;
}>;

export type UpdateCompanyDetailsMutation = { __typename?: 'Mutation' } & {
  updateCompanyDetails: { __typename?: 'Company' } & Pick<Company, 'id'>;
};

export type UpdateCrmContactInformationMutationVariables = Exact<{
  input: UpdateCrmContactInformationInput;
}>;

export type UpdateCrmContactInformationMutation = { __typename?: 'Mutation' } & {
  updateCrmContactInformation?: Maybe<
    { __typename?: 'CrmContactInformation' } & Pick<
      CrmContactInformation,
      'id' | 'contactInfoDescription' | 'dateCreated' | 'dateUpdated'
    > & {
        addresses?: Maybe<
          Array<
            { __typename?: 'CrmAddress' } & Pick<
              CrmAddress,
              | 'type'
              | 'street'
              | 'houseNumber'
              | 'addition'
              | 'zipcode'
              | 'city'
              | 'country'
              | 'extraInformation'
              | 'availableFrom'
              | 'note'
            >
          >
        >;
        emailAddresses?: Maybe<
          Array<{ __typename?: 'CrmEmailAddress' } & Pick<CrmEmailAddress, 'type' | 'email' | 'availableFrom' | 'note'>>
        >;
        phoneNumbers?: Maybe<
          Array<
            { __typename?: 'CrmPhoneNumber' } & Pick<
              CrmPhoneNumber,
              'type' | 'countryCode' | 'phoneNumber' | 'availableFrom' | 'note'
            >
          >
        >;
        socialMedia?: Maybe<Array<{ __typename?: 'CrmSocialMedia' } & Pick<CrmSocialMedia, 'type' | 'url'>>>;
        lastEditedBy?: Maybe<
          { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
        >;
      }
  >;
};

export type UpdateCrmFamilyContactsMutationVariables = Exact<{
  input: UpdateCrmFamilyContactsInput;
}>;

export type UpdateCrmFamilyContactsMutation = { __typename?: 'Mutation' } & {
  updateCrmFamilyContacts?: Maybe<
    { __typename?: 'CrmFamilyContacts' } & Pick<
      CrmFamilyContacts,
      | 'id'
      | 'maritalStatus'
      | 'maritalStatusDate'
      | 'maritalStatusInformation'
      | 'familyCompositionChildren'
      | 'familyCompositionAdults'
      | 'familyCompositionInformation'
    > & {
        partners?: Maybe<
          Array<
            { __typename?: 'CrmPartner' } & Pick<CrmPartner, 'isDivorced'> & {
                partner: { __typename?: 'LinkedCrm' } & Pick<
                  LinkedCrm,
                  'id' | 'firstName' | 'initials' | 'lastName' | 'email' | 'isPassedAway' | 'dateOfDeath'
                > & { avatar?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>> };
              }
          >
        >;
        contacts?: Maybe<
          Array<
            { __typename?: 'CrmContact' } & Pick<CrmContact, 'type'> & {
                contact: { __typename?: 'LinkedCrm' } & Pick<LinkedCrm, 'id'>;
              }
          >
        >;
      }
  >;
};

export type UpdateCrmFinancialMutationVariables = Exact<{
  input: UpdateCrmFinancialInput;
}>;

export type UpdateCrmFinancialMutation = { __typename?: 'Mutation' } & {
  updateCrmFinancial?: Maybe<{ __typename?: 'CrmFinancial' } & Pick<CrmFinancial, 'id'>>;
};

export type CreateCrmMutationVariables = Exact<{
  input: CreateCrmInput;
}>;

export type CreateCrmMutation = { __typename?: 'Mutation' } & {
  createCrm: { __typename?: 'CrmGeneral' } & Pick<
    CrmGeneral,
    'id' | 'firstName' | 'initials' | 'lastName' | 'dateCreated' | 'completeness'
  >;
};

export type UpdateCrmGeneralMutationVariables = Exact<{
  input: UpdateCrmGeneralInput;
}>;

export type UpdateCrmGeneralMutation = { __typename?: 'Mutation' } & {
  updateCrmGeneral?: Maybe<
    { __typename?: 'CrmGeneral' } & Pick<
      CrmGeneral,
      | 'id'
      | 'firstName'
      | 'extraNames'
      | 'initials'
      | 'lastName'
      | 'gender'
      | 'dateOfBirth'
      | 'placeOfBirth'
      | 'nationality'
      | 'dateOfDeath'
      | 'isPassedAway'
      | 'preferredLanguage'
      | 'identification'
      | 'identificationNumber'
      | 'identificationIssueCity'
      | 'identificationIssueDate'
      | 'identificationExpirationDate'
      | 'preferredTitlePrefix'
      | 'preferredTitleSuffix'
      | 'preferredLetterSalutation'
      | 'preferredTitleInformation'
      | 'status'
    > & {
        identificationNumbers?: Maybe<
          Array<{ __typename?: 'CrmIdentificationNumber' } & Pick<CrmIdentificationNumber, 'type' | 'number' | 'name'>>
        >;
        avatar?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'fileName' | 'url'>>;
      }
  >;
};

export type UpdateCrmHomeSituationMutationVariables = Exact<{
  input: UpdateCrmHomeSituationInput;
}>;

export type UpdateCrmHomeSituationMutation = { __typename?: 'Mutation' } & {
  updateCrmHomeSituation?: Maybe<
    { __typename?: 'CrmHomeSituation' } & Pick<
      CrmHomeSituation,
      | 'id'
      | 'currentHomeSituation'
      | 'currentHomeStatus'
      | 'currentHomeSalesValue'
      | 'currentHomeMortgage'
      | 'currentHomeInformation'
      | 'reasonToMove'
      | 'movingDate'
      | 'movingInformation'
    >
  >;
};

export type CreateDmsFolderMutationVariables = Exact<{
  input: CreateDmsFolderInput;
}>;

export type CreateDmsFolderMutation = { __typename?: 'Mutation' } & {
  createDmsFolder: { __typename?: 'DmsFolder' } & Pick<DmsFolder, 'id'>;
};

export type SendEmailMutationVariables = Exact<{
  accountId: Scalars['String'];
  input: SendEmailInput;
}>;

export type SendEmailMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'sendEmail'>;

export type DeleteEntityMutationVariables = Exact<{
  input: DeleteEntityInput;
}>;

export type DeleteEntityMutation = { __typename?: 'Mutation' } & {
  deleteEntity: Array<{ __typename?: 'DeleteResult' } & Pick<DeleteResult, 'successful' | 'message' | 'undoId'>>;
};

export type UndoEntityMutationVariables = Exact<{
  input: UndoEntityInput;
}>;

export type UndoEntityMutation = { __typename?: 'Mutation' } & {
  undoEntity: Array<{ __typename?: 'UndoResult' } & Pick<UndoResult, 'successful' | 'entityId'>>;
};

export type InitSendFileMutationVariables = Exact<{
  input: InitSendFileInput;
}>;

export type InitSendFileMutation = { __typename?: 'Mutation' } & {
  initSendFile: { __typename?: 'File' } & Pick<File, 'signedUrl' | 'id'>;
};

export type UploadFileMutationVariables = Exact<{
  input: Scalars['UploadFileInput'];
  pathBuilder?: Maybe<Scalars['PathBuilder']>;
}>;

export type UploadFileMutation = { __typename?: 'Mutation' } & {
  uploadFile?: Maybe<{ __typename?: 'UploadFileResponse' } & Pick<UploadFileResponse, 'id'>>;
};

export type AddFilesMutationVariables = Exact<{
  input: AddFilesInput;
}>;

export type AddFilesMutation = { __typename?: 'Mutation' } & {
  addFiles: Array<{ __typename?: 'File' } & Pick<File, 'url'>>;
};

export type RemoveFilesMutationVariables = Exact<{
  input: RemoveFilesInput;
}>;

export type RemoveFilesMutation = { __typename?: 'Mutation' } & {
  removeFiles: Array<Maybe<{ __typename?: 'File' } & Pick<File, 'id'>>>;
};

export type AddIdentificationNumberPimMutationVariables = Exact<{
  input: AddIdentificationNumberInput;
}>;

export type AddIdentificationNumberPimMutation = { __typename?: 'Mutation' } & {
  addIdentificationNumberPim: { __typename?: 'PimWithNewIdentificationNumber' } & {
    newIdentificationNumber: { __typename?: 'IdentificationNumber' } & Pick<IdentificationNumber, 'id'>;
  };
};

export type UpdateIdentificationNumberPimMutationVariables = Exact<{
  input: UpdateIdentificationNumberInput;
}>;

export type UpdateIdentificationNumberPimMutation = { __typename?: 'Mutation' } & {
  updateIdentificationNumberPim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddIdentificationNumberNcpMutationVariables = Exact<{
  input: AddIdentificationNumberInput;
}>;

export type AddIdentificationNumberNcpMutation = { __typename?: 'Mutation' } & {
  addIdentificationNumberNcp: { __typename?: 'NcpWithNewIdentificationNumber' } & {
    newIdentificationNumber: { __typename?: 'IdentificationNumber' } & Pick<IdentificationNumber, 'id'>;
  };
};

export type UpdateIdentificationNumberNcpMutationVariables = Exact<{
  input: UpdateIdentificationNumberInput;
}>;

export type UpdateIdentificationNumberNcpMutation = { __typename?: 'Mutation' } & {
  updateIdentificationNumberNcp: { __typename?: 'NcpCharacteristics' } & Pick<NcpCharacteristics, 'id'>;
};

export type AddIdentificationNumberObjectTypeMutationVariables = Exact<{
  input: AddIdentificationNumberInput;
}>;

export type AddIdentificationNumberObjectTypeMutation = { __typename?: 'Mutation' } & {
  addIdentificationNumberObjectType: { __typename?: 'ObjectTypeWithNewIdentificationNumber' } & {
    newIdentificationNumber: { __typename?: 'IdentificationNumber' } & Pick<IdentificationNumber, 'id'>;
  };
};

export type UpdateIdentificationNumberObjectTypeMutationVariables = Exact<{
  input: UpdateIdentificationNumberInput;
}>;

export type UpdateIdentificationNumberObjectTypeMutation = { __typename?: 'Mutation' } & {
  updateIdentificationNumberObjectType: { __typename?: 'ObjectTypeCharacteristics' } & Pick<
    ObjectTypeCharacteristics,
    'id'
  >;
};

export type UpdateKikSettingsMutationVariables = Exact<{
  input: KikSettingsInput;
}>;

export type UpdateKikSettingsMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'updateKikSettings'>;

export type UpdateKikInfoMutationVariables = Exact<{
  input: KikInfoInput;
}>;

export type UpdateKikInfoMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'updateKikInfo'>;

export type AddLabelMutationVariables = Exact<{
  input: LabelInput;
}>;

export type AddLabelMutation = { __typename?: 'Mutation' } & {
  addLabel: { __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'text' | 'icon'>;
};

export type AddCrmLabelMutationVariables = Exact<{
  input: LabelInput;
}>;

export type AddCrmLabelMutation = { __typename?: 'Mutation' } & {
  addCrmLabel: { __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'text' | 'icon'>;
};

export type AddMatchProfileMutationVariables = Exact<{
  input: AddMatchProfileInput;
}>;

export type AddMatchProfileMutation = { __typename?: 'Mutation' } & {
  addMatchProfile?: Maybe<
    { __typename?: 'MatchProfile' } & Pick<
      MatchProfile,
      | 'id'
      | 'crmId'
      | 'companyId'
      | 'propertyType'
      | 'startDate'
      | 'endDate'
      | 'matchWith'
      | 'description'
      | 'estateType'
      | 'commercialEstateType'
      | 'conditions'
      | 'services'
      | 'tags'
      | 'isActive'
      | 'createdAt'
    > & {
        matchDuration?: Maybe<{ __typename?: 'MatchProfileDateRange' } & Pick<MatchProfileDateRange, 'from' | 'to'>>;
        characteristics?: Maybe<
          { __typename?: 'MatchCharacteristics' } & Pick<MatchCharacteristics, 'general'> & {
              property?: Maybe<
                { __typename?: 'MatchCharacteristicsProperty' } & Pick<
                  MatchCharacteristicsProperty,
                  | 'minAmountRooms'
                  | 'minAmountBedrooms'
                  | 'residentialLayerFrom'
                  | 'residentialLayerTo'
                  | 'constructionYearFrom'
                  | 'constructionYearTo'
                  | 'maintenanceQuality'
                >
              >;
            }
        >;
        commercialCharacteristics?: Maybe<
          { __typename?: 'MatchCommercialCharacteristics' } & Pick<MatchCommercialCharacteristics, 'general'> & {
              property?: Maybe<
                { __typename?: 'MatchCommercialCharacteristicsProperty' } & Pick<
                  MatchCommercialCharacteristicsProperty,
                  | 'minFreeHeight'
                  | 'minFreeSpan'
                  | 'minFloorLoad'
                  | 'minAmountOfFloors'
                  | 'minParkingLots'
                  | 'engergyLabel'
                  | 'constructionYearFrom'
                  | 'constructionYearTo'
                  | 'maintenanceQuality'
                >
              >;
            }
        >;
        pricing?: Maybe<
          { __typename?: 'MatchPricing' } & Pick<
            MatchPricing,
            'buyFrom' | 'buyTo' | 'rentFrom' | 'rentTo' | 'rentFrequency' | 'rentalPeriod' | 'preferredStartDate'
          >
        >;
        outside?: Maybe<{ __typename?: 'MatchOutsidePricing' } & Pick<MatchOutsidePricing, 'minGarage'>>;
        garden?: Maybe<
          { __typename?: 'MatchGarden' } & Pick<
            MatchGarden,
            'situation' | 'outdoorSpacesMin' | 'outdoorSpacesMax' | 'volumeMin' | 'volumeMax'
          >
        >;
        measurements?: Maybe<
          { __typename?: 'MatchMeasurements' } & Pick<
            MatchMeasurements,
            | 'surfaceFromMin'
            | 'surfaceToMin'
            | 'livingAreaFromMin'
            | 'livingAreaToMin'
            | 'businessSpaceSurfaceFromMin'
            | 'businessSpaceSurfaceToMin'
            | 'practiceRoomSurfaceToMax'
            | 'practiceRoomSurfaceToMin'
            | 'plotSurfaceFromMin'
            | 'plotSurfaceToMin'
          >
        >;
        revenue?: Maybe<{ __typename?: 'IntRange' } & Pick<IntRange, 'from' | 'to'>>;
        exploitation?: Maybe<{ __typename?: 'IntRange' } & Pick<IntRange, 'from' | 'to'>>;
        requirements?: Maybe<Array<{ __typename?: 'MatchRequirement' } & Pick<MatchRequirement, 'key' | 'status'>>>;
        locations?: Maybe<
          Array<
            { __typename?: 'MatchProfileLocation' } & Pick<
              MatchProfileLocation,
              'latitude' | 'longitude' | 'street' | 'houseNumber' | 'radius'
            >
          >
        >;
      }
  >;
};

export type CloneMatchProfileMutationVariables = Exact<{
  input: CloneMatchProfileInput;
}>;

export type CloneMatchProfileMutation = { __typename?: 'Mutation' } & {
  cloneMatchProfile?: Maybe<
    { __typename?: 'MatchProfile' } & Pick<
      MatchProfile,
      | 'id'
      | 'crmId'
      | 'companyId'
      | 'propertyType'
      | 'startDate'
      | 'endDate'
      | 'matchWith'
      | 'description'
      | 'estateType'
      | 'commercialEstateType'
      | 'conditions'
      | 'services'
      | 'tags'
      | 'isActive'
      | 'createdAt'
    > & {
        matchDuration?: Maybe<{ __typename?: 'MatchProfileDateRange' } & Pick<MatchProfileDateRange, 'from' | 'to'>>;
        characteristics?: Maybe<
          { __typename?: 'MatchCharacteristics' } & Pick<MatchCharacteristics, 'general'> & {
              property?: Maybe<
                { __typename?: 'MatchCharacteristicsProperty' } & Pick<
                  MatchCharacteristicsProperty,
                  | 'minAmountRooms'
                  | 'minAmountBedrooms'
                  | 'residentialLayerFrom'
                  | 'residentialLayerTo'
                  | 'constructionYearFrom'
                  | 'constructionYearTo'
                  | 'maintenanceQuality'
                >
              >;
            }
        >;
        commercialCharacteristics?: Maybe<
          { __typename?: 'MatchCommercialCharacteristics' } & Pick<MatchCommercialCharacteristics, 'general'> & {
              property?: Maybe<
                { __typename?: 'MatchCommercialCharacteristicsProperty' } & Pick<
                  MatchCommercialCharacteristicsProperty,
                  | 'minFreeHeight'
                  | 'minFreeSpan'
                  | 'minFloorLoad'
                  | 'minAmountOfFloors'
                  | 'minParkingLots'
                  | 'engergyLabel'
                  | 'constructionYearFrom'
                  | 'constructionYearTo'
                  | 'maintenanceQuality'
                >
              >;
            }
        >;
        pricing?: Maybe<
          { __typename?: 'MatchPricing' } & Pick<
            MatchPricing,
            'buyFrom' | 'buyTo' | 'rentFrom' | 'rentTo' | 'rentFrequency' | 'rentalPeriod' | 'preferredStartDate'
          >
        >;
        outside?: Maybe<{ __typename?: 'MatchOutsidePricing' } & Pick<MatchOutsidePricing, 'minGarage'>>;
        garden?: Maybe<
          { __typename?: 'MatchGarden' } & Pick<
            MatchGarden,
            'situation' | 'outdoorSpacesMin' | 'outdoorSpacesMax' | 'volumeMin' | 'volumeMax'
          >
        >;
        measurements?: Maybe<
          { __typename?: 'MatchMeasurements' } & Pick<
            MatchMeasurements,
            | 'surfaceFromMin'
            | 'surfaceToMin'
            | 'livingAreaFromMin'
            | 'livingAreaToMin'
            | 'businessSpaceSurfaceFromMin'
            | 'businessSpaceSurfaceToMin'
            | 'practiceRoomSurfaceToMax'
            | 'practiceRoomSurfaceToMin'
            | 'plotSurfaceFromMin'
            | 'plotSurfaceToMin'
          >
        >;
        revenue?: Maybe<{ __typename?: 'IntRange' } & Pick<IntRange, 'from' | 'to'>>;
        exploitation?: Maybe<{ __typename?: 'IntRange' } & Pick<IntRange, 'from' | 'to'>>;
        requirements?: Maybe<Array<{ __typename?: 'MatchRequirement' } & Pick<MatchRequirement, 'key' | 'status'>>>;
        locations?: Maybe<
          Array<
            { __typename?: 'MatchProfileLocation' } & Pick<
              MatchProfileLocation,
              'latitude' | 'longitude' | 'street' | 'houseNumber' | 'radius'
            >
          >
        >;
      }
  >;
};

export type UpdateMatchProfileMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateMatchProfileInput;
}>;

export type UpdateMatchProfileMutation = { __typename?: 'Mutation' } & {
  updateMatchProfile?: Maybe<
    { __typename?: 'MatchProfile' } & Pick<
      MatchProfile,
      | 'id'
      | 'crmId'
      | 'companyId'
      | 'propertyType'
      | 'startDate'
      | 'endDate'
      | 'matchWith'
      | 'description'
      | 'estateType'
      | 'commercialEstateType'
      | 'conditions'
      | 'services'
      | 'tags'
      | 'isActive'
      | 'createdAt'
    > & {
        matchDuration?: Maybe<{ __typename?: 'MatchProfileDateRange' } & Pick<MatchProfileDateRange, 'from' | 'to'>>;
        characteristics?: Maybe<
          { __typename?: 'MatchCharacteristics' } & Pick<MatchCharacteristics, 'general'> & {
              property?: Maybe<
                { __typename?: 'MatchCharacteristicsProperty' } & Pick<
                  MatchCharacteristicsProperty,
                  | 'minAmountRooms'
                  | 'minAmountBedrooms'
                  | 'residentialLayerFrom'
                  | 'residentialLayerTo'
                  | 'constructionYearFrom'
                  | 'constructionYearTo'
                  | 'maintenanceQuality'
                >
              >;
            }
        >;
        commercialCharacteristics?: Maybe<
          { __typename?: 'MatchCommercialCharacteristics' } & Pick<MatchCommercialCharacteristics, 'general'> & {
              property?: Maybe<
                { __typename?: 'MatchCommercialCharacteristicsProperty' } & Pick<
                  MatchCommercialCharacteristicsProperty,
                  | 'minFreeHeight'
                  | 'minFreeSpan'
                  | 'minFloorLoad'
                  | 'minAmountOfFloors'
                  | 'minParkingLots'
                  | 'engergyLabel'
                  | 'constructionYearFrom'
                  | 'constructionYearTo'
                  | 'maintenanceQuality'
                >
              >;
            }
        >;
        pricing?: Maybe<
          { __typename?: 'MatchPricing' } & Pick<
            MatchPricing,
            'buyFrom' | 'buyTo' | 'rentFrom' | 'rentTo' | 'rentFrequency' | 'rentalPeriod' | 'preferredStartDate'
          >
        >;
        outside?: Maybe<{ __typename?: 'MatchOutsidePricing' } & Pick<MatchOutsidePricing, 'minGarage'>>;
        garden?: Maybe<
          { __typename?: 'MatchGarden' } & Pick<
            MatchGarden,
            'situation' | 'outdoorSpacesMin' | 'outdoorSpacesMax' | 'volumeMin' | 'volumeMax'
          >
        >;
        measurements?: Maybe<
          { __typename?: 'MatchMeasurements' } & Pick<
            MatchMeasurements,
            | 'surfaceFromMin'
            | 'surfaceToMin'
            | 'livingAreaFromMin'
            | 'livingAreaToMin'
            | 'businessSpaceSurfaceFromMin'
            | 'businessSpaceSurfaceToMin'
            | 'practiceRoomSurfaceToMax'
            | 'practiceRoomSurfaceToMin'
            | 'plotSurfaceFromMin'
            | 'plotSurfaceToMin'
          >
        >;
        revenue?: Maybe<{ __typename?: 'IntRange' } & Pick<IntRange, 'from' | 'to'>>;
        exploitation?: Maybe<{ __typename?: 'IntRange' } & Pick<IntRange, 'from' | 'to'>>;
        requirements?: Maybe<Array<{ __typename?: 'MatchRequirement' } & Pick<MatchRequirement, 'key' | 'status'>>>;
        locations?: Maybe<
          Array<
            { __typename?: 'MatchProfileLocation' } & Pick<
              MatchProfileLocation,
              'latitude' | 'longitude' | 'street' | 'houseNumber' | 'radius'
            >
          >
        >;
      }
  >;
};

export type DeleteMatchProfileMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteMatchProfileMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'deleteMatchProfile'>;

export type UpdateNcpCharacteristicsMutationVariables = Exact<{
  input: NcpCharacteristicsInput;
}>;

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

export type SetNcpCharacteristicsMutationVariables = Exact<{
  input: SetCharacteristicsSectionsInput;
}>;

export type SetNcpCharacteristicsMutation = { __typename?: 'Mutation' } & {
  setNcpCharacteristics: { __typename?: 'NcpCharacteristics' } & Pick<NcpCharacteristics, 'id'>;
};

export type CreateNcpMutationVariables = Exact<{
  input: CreateNcpInput;
}>;

export type CreateNcpMutation = { __typename?: 'Mutation' } & {
  createNcp: { __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id'>;
};

export type UpdateNcpMutationVariables = Exact<{
  input: UpdateNcpInput;
}>;

export type UpdateNcpMutation = { __typename?: 'Mutation' } & {
  updateNcp: { __typename?: 'NcpGeneral' } & Pick<
    NcpGeneral,
    'id' | 'objectTypesCount' | 'automaticallyCalculateQuantity' | 'properties'
  >;
};

export type AddNcpLabelMutationVariables = Exact<{
  input: LabelInput;
}>;

export type AddNcpLabelMutation = { __typename?: 'Mutation' } & {
  addNcpLabel: { __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'text' | 'icon'>;
};

export type UpdateNcpMediaDescriptionMutationVariables = Exact<{
  input: CommonUpdateMediaDescriptionInput;
}>;

export type UpdateNcpMediaDescriptionMutation = { __typename?: 'Mutation' } & {
  updateNcpMediaDescription?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type AddNcpPicturesMutationVariables = Exact<{
  input: CommonAddPicturesInput;
}>;

export type AddNcpPicturesMutation = { __typename?: 'Mutation' } & {
  addNcpPictures?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type UpdateNcpPictureMutationVariables = Exact<{
  input: CommonUpdatePictureInput;
}>;

export type UpdateNcpPictureMutation = { __typename?: 'Mutation' } & {
  updateNcpPicture?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type AddNcpMediaLinkMutationVariables = Exact<{
  input: CommonAddMediaLinkInput;
}>;

export type AddNcpMediaLinkMutation = { __typename?: 'Mutation' } & {
  addNcpMediaLink?: Maybe<
    { __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'> & {
        mediaLinks?: Maybe<Array<{ __typename?: 'MediaLink' } & Pick<MediaLink, 'id'>>>;
      }
  >;
};

export type UpdateNcpMediaLinkMutationVariables = Exact<{
  input: CommonUpdateMediaLinkInput;
}>;

export type UpdateNcpMediaLinkMutation = { __typename?: 'Mutation' } & {
  updateNcpMediaLink?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type AddNcpTextChapterMutationVariables = Exact<{
  input: CommonAddTextChapterInput;
}>;

export type AddNcpTextChapterMutation = { __typename?: 'Mutation' } & {
  addNcpTextChapter?: Maybe<
    { __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'> & {
        textChapters?: Maybe<Array<{ __typename?: 'TextChapter' } & Pick<TextChapter, 'id'>>>;
      }
  >;
};

export type UpdateNcpTextChapterMutationVariables = Exact<{
  input: CommonUpdateTextChapterInput;
}>;

export type UpdateNcpTextChapterMutation = { __typename?: 'Mutation' } & {
  updateNcpTextChapter?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type AddNcpUspsMutationVariables = Exact<{
  input: CommonAddUspsInput;
}>;

export type AddNcpUspsMutation = { __typename?: 'Mutation' } & {
  addNcpUsps?: Maybe<
    { __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'> & {
        usps?: Maybe<Array<{ __typename?: 'Usp' } & Pick<Usp, 'id'>>>;
      }
  >;
};

export type UpdateNcpUspsMutationVariables = Exact<{
  input: CommonUpdateUspsInput;
}>;

export type UpdateNcpUspsMutation = { __typename?: 'Mutation' } & {
  updateNcpUsps?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type AddNcpTagMutationVariables = Exact<{
  input: CommonAddTagInput;
}>;

export type AddNcpTagMutation = { __typename?: 'Mutation' } & {
  addNcpTag?: Maybe<
    { __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'> & {
        tags?: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'id'>>>;
      }
  >;
};

export type UpdateNcpTagMutationVariables = Exact<{
  input: CommonUpdateTagInput;
}>;

export type UpdateNcpTagMutation = { __typename?: 'Mutation' } & {
  updateNcpTag?: Maybe<{ __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id'>>;
};

export type ToggleNcpPricingMutationVariables = Exact<{
  input: ToggleCommonPricingInput;
}>;

export type ToggleNcpPricingMutation = { __typename?: 'Mutation' } & {
  toggleNcpPricing: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type UpdateNcpPricingMutationVariables = Exact<{
  input: UpdateCommonPricingInput;
}>;

export type UpdateNcpPricingMutation = { __typename?: 'Mutation' } & {
  updateNcpPricing: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type AddNcpCostMutationVariables = Exact<{
  input: AddCommonCostInput;
}>;

export type AddNcpCostMutation = { __typename?: 'Mutation' } & {
  addNcpCost: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type UpdateNcpCostMutationVariables = Exact<{
  input: UpdateCommonCostInput;
}>;

export type UpdateNcpCostMutation = { __typename?: 'Mutation' } & {
  updateNcpCost: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type UpdateNcpCostsDetailsMutationVariables = Exact<{
  input: UpdateCommonCostsDetailsInput;
}>;

export type UpdateNcpCostsDetailsMutation = { __typename?: 'Mutation' } & {
  updateNcpCostsDetails: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type UpdateNcpInterestsMutationVariables = Exact<{
  input: InterestsInput;
}>;

export type UpdateNcpInterestsMutation = { __typename?: 'Mutation' } & {
  updateNcpInterests: { __typename?: 'NcpPricesResult' } & Pick<NcpPricesResult, 'id'>;
};

export type UpdateNcpLinkedPropertiesListDescriptionMutationVariables = Exact<{
  input: UpdateLinkedPropertiesListDescription;
}>;

export type UpdateNcpLinkedPropertiesListDescriptionMutation = { __typename?: 'Mutation' } & {
  updateNcpLinkedPropertiesListDescription?: Maybe<{ __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id'>>;
};

export type AddNcpServiceMutationVariables = Exact<{
  input: AddServiceInput;
}>;

export type AddNcpServiceMutation = { __typename?: 'Mutation' } & {
  addNcpService: { __typename?: 'NcpWithNewService' } & {
    ncp: { __typename?: 'NcpServices' } & Pick<NcpServices, 'id'>;
    newService: { __typename?: 'Service' } & Pick<Service, 'id'>;
  };
};

export type UpdateNcpServiceMutationVariables = Exact<{
  input: UpdateServiceInput;
}>;

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
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
};

export type UpdateNcpServiceDescriptionMutationVariables = Exact<{
  input: ServiceDescriptionInput;
}>;

export type UpdateNcpServiceDescriptionMutation = { __typename?: 'Mutation' } & {
  updateNcpServiceDescription: { __typename?: 'NcpServices' } & Pick<NcpServices, 'id'>;
};

export type ReadNotificationMutationVariables = Exact<{
  input: ReadNotificationInput;
}>;

export type ReadNotificationMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'readNotification'>;

export type DeleteNotificationMutationVariables = Exact<{
  input: DeleteNotificationInput;
}>;

export type DeleteNotificationMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'deleteNotification'>;

export type BulkReadNotificationsMutationVariables = Exact<{
  input: BulkReadNotificationsInput;
}>;

export type BulkReadNotificationsMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'bulkReadNotifications'>;

export type BulkDeleteNotificationsMutationVariables = Exact<{
  input: BulkDeleteNotificationsInput;
}>;

export type BulkDeleteNotificationsMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'bulkDeleteNotifications'>;

export type AuthorizeNylasAccountMutationVariables = Exact<{
  input: NylasAuthorizationInput;
  isCalendarConnected?: Maybe<Scalars['Boolean']>;
  isEmailConnected?: Maybe<Scalars['Boolean']>;
}>;

export type AuthorizeNylasAccountMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'authorizeNylasAccount'>;

export type AuthorizeNylasAccountWithTokenMutationVariables = Exact<{
  input: NylasAddAccountInput;
}>;

export type AuthorizeNylasAccountWithTokenMutation = { __typename?: 'Mutation' } & {
  authorizeNylasAccountWithToken?: Maybe<
    { __typename?: 'NylasAccount' } & Pick<
      NylasAccount,
      'id' | 'userId' | 'accountId' | 'accessToken' | 'newAccount' | 'isCalendarConnected' | 'isEmailConnected'
    >
  >;
};

export type UpdateObjectTypeCharacteristicsMutationVariables = Exact<{
  input: ObjectTypeCharacteristicsInput;
}>;

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

export type SetObjectTypeCharacteristicsSectionsMutationVariables = Exact<{
  input: SetCharacteristicsSectionsInput;
}>;

export type SetObjectTypeCharacteristicsSectionsMutation = { __typename?: 'Mutation' } & {
  setObjectTypeCharacteristicsSections: { __typename?: 'ObjectTypeCharacteristics' } & Pick<
    ObjectTypeCharacteristics,
    'id'
  >;
};

export type CreateObjectTypeMutationVariables = Exact<{
  input: CreateObjectTypeInput;
}>;

export type CreateObjectTypeMutation = { __typename?: 'Mutation' } & {
  createObjectType: { __typename?: 'ObjectTypeGeneral' } & Pick<
    ObjectTypeGeneral,
    'name' | 'dateUpdated' | 'ncpId' | 'id'
  > & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
};

export type AddObjectTypeLabelMutationVariables = Exact<{
  input: LabelInput;
}>;

export type AddObjectTypeLabelMutation = { __typename?: 'Mutation' } & {
  addObjectTypeLabel: { __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'text' | 'icon'>;
};

export type UpdateObjectTypesListDescriptionMutationVariables = Exact<{
  input: UpdateObjectTypesListDescription;
}>;

export type UpdateObjectTypesListDescriptionMutation = { __typename?: 'Mutation' } & {
  updateObjectTypesListDescription?: Maybe<{ __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id'>>;
};

export type UpdateObjectTypeMediaDescriptionMutationVariables = Exact<{
  input: CommonUpdateMediaDescriptionInput;
}>;

export type UpdateObjectTypeMediaDescriptionMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeMediaDescription?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type AddObjectTypePicturesMutationVariables = Exact<{
  input: CommonAddPicturesInput;
}>;

export type AddObjectTypePicturesMutation = { __typename?: 'Mutation' } & {
  addObjectTypePictures?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type UpdateObjectTypePictureMutationVariables = Exact<{
  input: CommonUpdatePictureInput;
}>;

export type UpdateObjectTypePictureMutation = { __typename?: 'Mutation' } & {
  updateObjectTypePicture?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type AddObjectTypeMediaLinkMutationVariables = Exact<{
  input: CommonAddMediaLinkInput;
}>;

export type AddObjectTypeMediaLinkMutation = { __typename?: 'Mutation' } & {
  addObjectTypeMediaLink?: Maybe<
    { __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'> & {
        mediaLinks?: Maybe<Array<{ __typename?: 'MediaLink' } & Pick<MediaLink, 'id'>>>;
      }
  >;
};

export type UpdateObjectTypeMediaLinkMutationVariables = Exact<{
  input: CommonUpdateMediaLinkInput;
}>;

export type UpdateObjectTypeMediaLinkMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeMediaLink?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type AddObjectTypeTextChapterMutationVariables = Exact<{
  input: CommonAddTextChapterInput;
}>;

export type AddObjectTypeTextChapterMutation = { __typename?: 'Mutation' } & {
  addObjectTypeTextChapter?: Maybe<
    { __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'> & {
        textChapters?: Maybe<Array<{ __typename?: 'TextChapter' } & Pick<TextChapter, 'id'>>>;
      }
  >;
};

export type UpdateObjectTypeTextChapterMutationVariables = Exact<{
  input: CommonUpdateTextChapterInput;
}>;

export type UpdateObjectTypeTextChapterMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeTextChapter?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type AddObjectTypeUspsMutationVariables = Exact<{
  input: CommonAddUspsInput;
}>;

export type AddObjectTypeUspsMutation = { __typename?: 'Mutation' } & {
  addObjectTypeUsps?: Maybe<
    { __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'> & {
        usps?: Maybe<Array<{ __typename?: 'Usp' } & Pick<Usp, 'id'>>>;
      }
  >;
};

export type UpdateObjectTypeUspsMutationVariables = Exact<{
  input: CommonUpdateUspsInput;
}>;

export type UpdateObjectTypeUspsMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeUsps?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type AddObjectTypeTagMutationVariables = Exact<{
  input: CommonAddTagInput;
}>;

export type AddObjectTypeTagMutation = { __typename?: 'Mutation' } & {
  addObjectTypeTag?: Maybe<
    { __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'> & {
        tags?: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'id'>>>;
      }
  >;
};

export type UpdateObjectTypeTagMutationVariables = Exact<{
  input: CommonUpdateTagInput;
}>;

export type UpdateObjectTypeTagMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeTag?: Maybe<{ __typename?: 'ObjectTypeMedia' } & Pick<ObjectTypeMedia, 'id'>>;
};

export type ToggleObjectTypePricingMutationVariables = Exact<{
  input: ToggleCommonPricingInput;
}>;

export type ToggleObjectTypePricingMutation = { __typename?: 'Mutation' } & {
  toggleObjectTypePricing: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'>;
};

export type UpdateObjectTypePricingMutationVariables = Exact<{
  input: UpdateCommonPricingInput;
}>;

export type UpdateObjectTypePricingMutation = { __typename?: 'Mutation' } & {
  updateObjectTypePricing: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'>;
};

export type AddObjectTypeCostMutationVariables = Exact<{
  input: AddCommonCostInput;
}>;

export type AddObjectTypeCostMutation = { __typename?: 'Mutation' } & {
  addObjectTypeCost: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'>;
};

export type UpdateObjectTypeCostMutationVariables = Exact<{
  input: UpdateCommonCostInput;
}>;

export type UpdateObjectTypeCostMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeCost: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'>;
};

export type UpdateObjectTypeCostsDetailsMutationVariables = Exact<{
  input: UpdateCommonCostsDetailsInput;
}>;

export type UpdateObjectTypeCostsDetailsMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeCostsDetails: { __typename?: 'ObjectTypePricesResult' } & Pick<ObjectTypePricesResult, 'id'>;
};

export type SetObjectTypeLinkedPimsMutationVariables = Exact<{
  input: SetLinkedPimsInput;
}>;

export type SetObjectTypeLinkedPimsMutation = { __typename?: 'Mutation' } & {
  setObjectTypeLinkedPims: { __typename?: 'ObjectTypeLinkedPims' } & {
    linkedProperties: { __typename?: 'PimListSearchResult' } & {
      items?: Maybe<Array<{ __typename?: 'ListPim' } & Pick<ListPim, 'id'>>>;
    };
  };
};

export type UpdateLinkedPropertiesListDescriptionMutationVariables = Exact<{
  input: UpdateLinkedPropertiesListDescription;
}>;

export type UpdateLinkedPropertiesListDescriptionMutation = { __typename?: 'Mutation' } & {
  updateLinkedPropertiesListDescription?: Maybe<{ __typename?: 'ObjectTypeGeneral' } & Pick<ObjectTypeGeneral, 'id'>>;
};

export type AddObjectTypeServiceMutationVariables = Exact<{
  input: AddServiceInput;
}>;

export type AddObjectTypeServiceMutation = { __typename?: 'Mutation' } & {
  addObjectTypeService: { __typename?: 'ObjectTypeWithNewService' } & {
    objectType: { __typename?: 'ObjectTypeServices' } & Pick<ObjectTypeServices, 'id'>;
    newService: { __typename?: 'Service' } & Pick<Service, 'id'>;
  };
};

export type UpdateObjectTypeServiceMutationVariables = Exact<{
  input: UpdateServiceInput;
}>;

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
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
};

export type UpdateObjectTypeServiceDescriptionMutationVariables = Exact<{
  input: ServiceDescriptionInput;
}>;

export type UpdateObjectTypeServiceDescriptionMutation = { __typename?: 'Mutation' } & {
  updateObjectTypeServiceDescription: { __typename?: 'ObjectTypeServices' } & Pick<ObjectTypeServices, 'id'>;
};

export type AddAogSpaceMutationVariables = Exact<{
  input: AddAogSpaceInput;
}>;

export type AddAogSpaceMutation = { __typename?: 'Mutation' } & {
  addAogSpace: { __typename?: 'PimWithNewAogSpace' } & {
    newSpace?: Maybe<{ __typename?: 'AogSpace' } & Pick<AogSpace, 'id'>>;
  };
};

export type UpdateAogSpaceMutationVariables = Exact<{
  input: UpdateAogSpaceInput;
}>;

export type UpdateAogSpaceMutation = { __typename?: 'Mutation' } & {
  updateAogSpace: { __typename?: 'AogSpace' } & Pick<AogSpace, 'id'>;
};

export type AddBogSpaceMutationVariables = Exact<{
  input: AddBogSpaceInput;
}>;

export type AddBogSpaceMutation = { __typename?: 'Mutation' } & {
  addBogSpace: { __typename?: 'PimWithNewBogSpace' } & {
    newSpace: { __typename?: 'BogSpace' } & Pick<BogSpace, 'id' | 'type' | 'name'>;
  };
};

export type UpdateBogSpaceMutationVariables = Exact<{
  input: UpdateBogSpaceInput;
}>;

export type UpdateBogSpaceMutation = { __typename?: 'Mutation' } & {
  updateBogSpace: { __typename?: 'BogSpace' } & Pick<BogSpace, 'id'>;
};

export type AddCadastreMutationVariables = Exact<{
  input: AddCadastreInput;
}>;

export type AddCadastreMutation = { __typename?: 'Mutation' } & {
  addCadastre?: Maybe<
    { __typename?: 'PimWithNewCadastre' } & {
      pim?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
      cadastre?: Maybe<{ __typename?: 'Cadastre' } & Pick<Cadastre, 'id' | 'type'>>;
    }
  >;
};

export type UpdateCadastreMutationVariables = Exact<{
  input: UpdateCadastreInput;
}>;

export type UpdateCadastreMutation = { __typename?: 'Mutation' } & {
  updateCadastre?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddCadastreMapsMutationVariables = Exact<{
  input: AddCadastreMapsInput;
}>;

export type AddCadastreMapsMutation = { __typename?: 'Mutation' } & {
  addCadastreMaps?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateMapMutationVariables = Exact<{
  input: UpdateCadastreMapInput;
}>;

export type UpdateMapMutation = { __typename?: 'Mutation' } & {
  updateCadastreMap?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdatePimGeneralInfoMutationVariables = Exact<{
  input: PimGeneralInput;
}>;

export type UpdatePimGeneralInfoMutation = { __typename?: 'Mutation' } & {
  updatePimGeneralInfo: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddFloorToPimMutationVariables = Exact<{
  input: AddNewFloorInput;
}>;

export type AddFloorToPimMutation = { __typename?: 'Mutation' } & {
  addFloorToPim: { __typename?: 'PimWithNewFloor' } & { newFloor: { __typename?: 'Floor' } & Pick<Floor, 'id'> };
};

export type AddSpaceToFloorMutationVariables = Exact<{
  input: AddSpaceInput;
}>;

export type AddSpaceToFloorMutation = { __typename?: 'Mutation' } & {
  addSpaceToFloor: { __typename?: 'PimWithUpdatedSpace' } & {
    pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
    newSpace: { __typename?: 'Space' } & Pick<Space, 'id'>;
  };
};

export type UpdateSpaceMutationVariables = Exact<{
  input: UpdateSpaceInput;
}>;

export type UpdateSpaceMutation = { __typename?: 'Mutation' } & {
  updateSpace: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type UpdateFloorMutationVariables = Exact<{
  input: UpdateFloorInput;
}>;

export type UpdateFloorMutation = { __typename?: 'Mutation' } & {
  updateFloor: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type UpdateInsideGeneralMutationVariables = Exact<{
  input: InsideGeneralInput;
}>;

export type UpdateInsideGeneralMutation = { __typename?: 'Mutation' } & {
  updateInsideGeneral?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdatePimLocationMutationVariables = Exact<{
  input: UpdatePimLocationInput;
}>;

export type UpdatePimLocationMutation = { __typename?: 'Mutation' } & {
  updatePimLocation: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddTagMutationVariables = Exact<{
  input: AddTagInput;
}>;

export type AddTagMutation = { __typename?: 'Mutation' } & {
  addTag?: Maybe<
    { __typename?: 'PimWithNewTag' } & {
      pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
      newTag: { __typename?: 'Tag' } & Pick<Tag, 'id'>;
    }
  >;
};

export type UpdateTagMutationVariables = Exact<{
  input: UpdateTagInput;
}>;

export type UpdateTagMutation = { __typename?: 'Mutation' } & {
  updateTag?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddUspMutationVariables = Exact<{
  input: AddUspInput;
}>;

export type AddUspMutation = { __typename?: 'Mutation' } & {
  addUsp?: Maybe<
    { __typename?: 'PimWithNewUsp' } & {
      pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
      newUsp: { __typename?: 'Usp' } & Pick<Usp, 'id'>;
    }
  >;
};

export type UpdateUspMutationVariables = Exact<{
  input: UpdateUspInput;
}>;

export type UpdateUspMutation = { __typename?: 'Mutation' } & {
  updateUsp?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddMediaLinkMutationVariables = Exact<{
  input: AddMediaLinkInput;
}>;

export type AddMediaLinkMutation = { __typename?: 'Mutation' } & {
  addMediaLink?: Maybe<
    { __typename?: 'PimWithNewMediaLink' } & {
      pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
      newMediaLink: { __typename?: 'MediaLink' } & Pick<MediaLink, 'id'>;
    }
  >;
};

export type UpdateMediaLinkMutationVariables = Exact<{
  input: UpdateMediaLinkInput;
}>;

export type UpdateMediaLinkMutation = { __typename?: 'Mutation' } & {
  updateMediaLink?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddTextChapterMutationVariables = Exact<{
  input: AddTextChapterInput;
}>;

export type AddTextChapterMutation = { __typename?: 'Mutation' } & {
  addTextChapter?: Maybe<
    { __typename?: 'PimWithNewTextChapter' } & {
      pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
      newChapter: { __typename?: 'TextChapter' } & Pick<TextChapter, 'id'>;
    }
  >;
};

export type UpdateTextChapterMutationVariables = Exact<{
  input: UpdateTextChapterInput;
}>;

export type UpdateTextChapterMutation = { __typename?: 'Mutation' } & {
  updateTextChapter?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddPicturesMutationVariables = Exact<{
  input: AddPicturesInput;
}>;

export type AddPicturesMutation = { __typename?: 'Mutation' } & {
  addPictures?: Maybe<{ __typename?: 'PimWithNewPictures' } & { pim: { __typename?: 'Pim' } & Pick<Pim, 'id'> }>;
};

export type UpdatePictureMutationVariables = Exact<{
  input: UpdatePictureInput;
}>;

export type UpdatePictureMutation = { __typename?: 'Mutation' } & {
  updatePicture?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddOutsideFeatureMutationVariables = Exact<{
  input: AddOutsideFeatureInput;
}>;

export type AddOutsideFeatureMutation = { __typename?: 'Mutation' } & {
  addOutsideFeature: { __typename?: 'PimWithNewOutside' } & {
    newOutsideFeature: { __typename?: 'OutsideFeature' } & Pick<OutsideFeature, 'id'>;
  };
};

export type UpdateOutsideFeatureMutationVariables = Exact<{
  input: Scalars['UpdateFeatureInputConfiguration'];
}>;

export type UpdateOutsideFeatureMutation = { __typename?: 'Mutation' } & {
  updateOutsideFeature: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type UpdatePimOutsideInfoMutationVariables = Exact<{
  input: PimOutsideInput;
}>;

export type UpdatePimOutsideInfoMutation = { __typename?: 'Mutation' } & {
  updatePimOutsideInfo: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type TogglePricingMutationVariables = Exact<{
  input: TogglePricingInput;
}>;

export type TogglePricingMutation = { __typename?: 'Mutation' } & {
  togglePricing: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddCostsMutationVariables = Exact<{
  input: AddCostInput;
}>;

export type AddCostsMutation = { __typename?: 'Mutation' } & {
  addCost: { __typename?: 'CostResult' } & { pim: { __typename?: 'Pim' } & Pick<Pim, 'id'> };
};

export type UpdateCostMutationVariables = Exact<{
  input: UpdateCostInput;
}>;

export type UpdateCostMutation = { __typename?: 'Mutation' } & {
  updateCost: { __typename?: 'CostResult' } & { pim: { __typename?: 'Pim' } & Pick<Pim, 'id'> };
};

export type UpdateInvestmentMutationVariables = Exact<{
  input: InvestmentInput;
}>;

export type UpdateInvestmentMutation = { __typename?: 'Mutation' } & {
  updateInvestment: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type UpdatePricingMutationVariables = Exact<{
  input: UpdatePricingInput;
}>;

export type UpdatePricingMutation = { __typename?: 'Mutation' } & {
  updatePricing: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddServiceMutationVariables = Exact<{
  input: AddServiceInput;
}>;

export type AddServiceMutation = { __typename?: 'Mutation' } & {
  addPimService?: Maybe<
    { __typename?: 'PimWithNewService' } & {
      pim: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
      newService: { __typename?: 'Service' } & Pick<Service, 'id'>;
    }
  >;
};

export type UpdateServiceMutationVariables = Exact<{
  input: UpdateServiceInput;
}>;

export type UpdateServiceMutation = { __typename?: 'Mutation' } & {
  updatePimService?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddMeterMutationVariables = Exact<{
  input: AddMeterInput;
}>;

export type AddMeterMutation = { __typename?: 'Mutation' } & {
  addPimMeter?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateMeterMutationVariables = Exact<{
  input: UpdateMeterInput;
}>;

export type UpdateMeterMutation = { __typename?: 'Mutation' } & {
  updatePimMeter?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type AddReadingMutationVariables = Exact<{
  input: AddReadingInput;
}>;

export type AddReadingMutation = { __typename?: 'Mutation' } & {
  addPimReading?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateReadingMutationVariables = Exact<{
  input: UpdateReadingInput;
}>;

export type UpdateReadingMutation = { __typename?: 'Mutation' } & {
  updatePimReading?: Maybe<{ __typename?: 'Pim' } & Pick<Pim, 'id'>>;
};

export type UpdateSpecificationMutationVariables = Exact<{
  input: SpecificationInput;
}>;

export type UpdateSpecificationMutation = { __typename?: 'Mutation' } & {
  updateSpecification: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type UpdateSpecificationAdvancedMutationVariables = Exact<{
  input: SpecificationAdvancedInput;
}>;

export type UpdateSpecificationAdvancedMutation = { __typename?: 'Mutation' } & {
  updateSpecificationAdvanced: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type SetLinkedPropertiesMutationVariables = Exact<{
  input: LinkedPimInput;
}>;

export type SetLinkedPropertiesMutation = { __typename?: 'Mutation' } & {
  setLinkedProperties: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type AddInspectionMutationVariables = Exact<{
  input: AddInspectionInput;
}>;

export type AddInspectionMutation = { __typename?: 'Mutation' } & {
  addInspection: { __typename?: 'AddInspectionResult' } & {
    inspection: { __typename?: 'Inspection' } & Pick<Inspection, 'id'>;
  };
};

export type UpdateInspectionMutationVariables = Exact<{
  input: UpdateInspectionInput;
}>;

export type UpdateInspectionMutation = { __typename?: 'Mutation' } & {
  updateInspection: { __typename?: 'Pim' } & Pick<Pim, 'id'>;
};

export type CreatePimMutationVariables = Exact<{
  input: CreatePimInput;
}>;

export type CreatePimMutation = { __typename?: 'Mutation' } & {
  createPim?: Maybe<
    { __typename?: 'Pim' } & Pick<
      Pim,
      'id' | 'realEstateType' | 'street' | 'houseNumber' | 'postalCode' | 'city' | 'developmentType'
    > & {
        outsideFeatures?: Maybe<Array<{ __typename?: 'OutsideFeature' } & Pick<OutsideFeature, 'id'>>>;
        floors?: Maybe<Array<{ __typename?: 'Floor' } & Pick<Floor, 'id'>>>;
      }
  >;
};

export type UpdateDescriptionMutationVariables = Exact<{
  input: UpdateDescriptionInput;
}>;

export type UpdateDescriptionMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'updateDescription'>;

export type CreateProfileMutationVariables = Exact<{
  input: CreateProfileInput;
}>;

export type CreateProfileMutation = { __typename?: 'Mutation' } & {
  createProfile: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;

export type UpdateProfileMutation = { __typename?: 'Mutation' } & {
  updateProfile: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type ConfirmProfileInviteMutationVariables = Exact<{
  input: ConfirmProfileInvite;
}>;

export type ConfirmProfileInviteMutation = { __typename?: 'Mutation' } & {
  confirmProfileInvite: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type DeactivateProfileMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeactivateProfileMutation = { __typename?: 'Mutation' } & {
  deactivateProfile: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type ReactivateProfileMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type ReactivateProfileMutation = { __typename?: 'Mutation' } & {
  reactivateProfile: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type CreateEmailAddressMutationVariables = Exact<{
  input: CreateEmailAddressInput;
}>;

export type CreateEmailAddressMutation = { __typename?: 'Mutation' } & {
  createEmailAddress: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type UpdateEmailAddressMutationVariables = Exact<{
  input: UpdateEmailAddressInput;
}>;

export type UpdateEmailAddressMutation = { __typename?: 'Mutation' } & {
  updateEmailAddress: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type CreatePhoneNumberMutationVariables = Exact<{
  input: CreatePhoneNumberInput;
}>;

export type CreatePhoneNumberMutation = { __typename?: 'Mutation' } & {
  createPhoneNumber: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type UpdatePhoneNumberMutationVariables = Exact<{
  input: UpdatePhoneNumberInput;
}>;

export type UpdatePhoneNumberMutation = { __typename?: 'Mutation' } & {
  updatePhoneNumber: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type CreateSocialMediaLinkMutationVariables = Exact<{
  input: CreateSocialMediaLinkInput;
}>;

export type CreateSocialMediaLinkMutation = { __typename?: 'Mutation' } & {
  createSocialMediaLink: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type UpdateSocialMediaLinkMutationVariables = Exact<{
  input: UpdateSocialMediaLinkInput;
}>;

export type UpdateSocialMediaLinkMutation = { __typename?: 'Mutation' } & {
  updateSocialMediaLink: { __typename?: 'Profile' } & Pick<Profile, 'id'>;
};

export type AddProjectPhaseMutationVariables = Exact<{
  input: CreateProjectPhaseInput;
}>;

export type AddProjectPhaseMutation = { __typename?: 'Mutation' } & {
  addProjectPhase: { __typename?: 'ProjectPhase' } & Pick<ProjectPhase, 'id'>;
};

export type LinkNcpToProjectPhaseMutationVariables = Exact<{
  input: LinkNcpToProjectPhaseInput;
}>;

export type LinkNcpToProjectPhaseMutation = { __typename?: 'Mutation' } & {
  linkNcpToProjectPhase: { __typename?: 'ProjectPhase' } & Pick<ProjectPhase, 'id'>;
};

export type CreateSalesMutationVariables = Exact<{
  input: CreateSalesInput;
}>;

export type CreateSalesMutation = { __typename?: 'Mutation' } & {
  createSales?: Maybe<
    { __typename?: 'Sales' } & Pick<
      Sales,
      'id' | 'label' | 'status' | 'createdAt' | 'updatedAt' | 'name' | 'type' | 'extraInfo' | 'attentionNote' | 'date'
    >
  >;
};

export type AddTaskLabelMutationVariables = Exact<{
  input: LabelInput;
}>;

export type AddTaskLabelMutation = { __typename?: 'Mutation' } & {
  addTaskLabel: { __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'text' | 'icon'>;
};

export type CreateTaskMutationVariables = Exact<{
  input: CreateTaskInput;
}>;

export type CreateTaskMutation = { __typename?: 'Mutation' } & {
  createTask: { __typename?: 'Task' } & Pick<Task, 'id'>;
};

export type UpdateTaskMutationVariables = Exact<{
  input: UpdateTaskInput;
}>;

export type UpdateTaskMutation = { __typename?: 'Mutation' } & {
  updateTask?: Maybe<{ __typename?: 'Task' } & Pick<Task, 'id'>>;
};

export type AddNewSubtaskMutationVariables = Exact<{
  taskId: Scalars['String'];
  title: Scalars['String'];
}>;

export type AddNewSubtaskMutation = { __typename?: 'Mutation' } & {
  addSubtask: { __typename?: 'Task' } & Pick<Task, 'id'>;
};

export type UpdateSubtaskStatusMutationVariables = Exact<{
  subtaskId: Scalars['ID'];
  status: TaskStatus;
}>;

export type UpdateSubtaskStatusMutation = { __typename?: 'Mutation' } & {
  updateSubtaskStatus?: Maybe<{ __typename?: 'Task' } & Pick<Task, 'id'>>;
};

export type DeleteSubtaskMutationVariables = Exact<{
  subtaskId: Scalars['ID'];
}>;

export type DeleteSubtaskMutation = { __typename?: 'Mutation' } & {
  deleteSubtask?: Maybe<{ __typename?: 'Task' } & Pick<Task, 'id'>>;
};

export type AddTeamMutationVariables = Exact<{
  input: AddTeamInput;
}>;

export type AddTeamMutation = { __typename?: 'Mutation' } & {
  addTeam?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'id' | 'name'>>;
};

export type UpdateTeamMutationVariables = Exact<{
  input: UpdateTeamInput;
}>;

export type UpdateTeamMutation = { __typename?: 'Mutation' } & {
  updateTeam?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'id'>>;
};

export type RemoveTeamMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type RemoveTeamMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'removeTeam'>;

export type AddUserToTeamMutationVariables = Exact<{
  input: AddUserToTeamInput;
}>;

export type AddUserToTeamMutation = { __typename?: 'Mutation' } & {
  addUserToTeam?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'id'>>;
};

export type RemoveUserFromTeamMutationVariables = Exact<{
  input: RemoveUserFromTeamInput;
}>;

export type RemoveUserFromTeamMutation = { __typename?: 'Mutation' } & {
  removeUserFromTeam?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'id'>>;
};

export type UpdateUserInTeamMutationVariables = Exact<{
  input: UpdateUserInTeamInput;
}>;

export type UpdateUserInTeamMutation = { __typename?: 'Mutation' } & {
  updateUserInTeam?: Maybe<{ __typename?: 'Team' } & Pick<Team, 'id'>>;
};

export type CreateQuestionaireMutationVariables = Exact<{
  input: QuestionaireInput;
}>;

export type CreateQuestionaireMutation = { __typename?: 'Mutation' } & {
  createQuestionaire?: Maybe<
    { __typename?: 'Questionaire' } & Pick<
      Questionaire,
      'id' | 'templateName' | 'templateStatus' | 'isAdmin' | 'published' | 'copyFromId'
    > & { entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>> }
  >;
};

export type UpdateQuestionaireMutationVariables = Exact<{
  input: UpdateQuestionaireInput;
}>;

export type UpdateQuestionaireMutation = { __typename?: 'Mutation' } & {
  updateQuestionaire?: Maybe<
    { __typename?: 'Questionaire' } & Pick<
      Questionaire,
      'id' | 'templateName' | 'templateStatus' | 'isAdmin' | 'published' | 'copyFromId'
    > & { entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>> }
  >;
};

export type UpdateTemplateGeneralMutationVariables = Exact<{
  input: TemplateGeneralInput;
}>;

export type UpdateTemplateGeneralMutation = { __typename?: 'Mutation' } & {
  updateTemplateGeneral?: Maybe<{ __typename?: 'Questionaire' } & Pick<Questionaire, 'id'>>;
};

export type CreateQuestionaireGroupMutationVariables = Exact<{
  input: GroupsInput;
}>;

export type CreateQuestionaireGroupMutation = { __typename?: 'Mutation' } & {
  createQuestionaireGroup?: Maybe<
    { __typename?: 'Groups' } & Pick<Groups, 'id' | 'templateId' | 'groupName' | 'copyFromId' | 'order'> & {
        entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>>;
      }
  >;
};

export type UpdateQuestionaireGroupMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateGroupsInput;
}>;

export type UpdateQuestionaireGroupMutation = { __typename?: 'Mutation' } & {
  updateQuestionaireGroup?: Maybe<
    { __typename?: 'Groups' } & Pick<Groups, 'id' | 'templateId' | 'groupName' | 'copyFromId' | 'order'> & {
        entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>>;
      }
  >;
};

export type DeleteQuestionaireGroupMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteQuestionaireGroupMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'deleteQuestionaireGroup'>;

export type CreateQuestionMutationVariables = Exact<{
  input: QuestionInput;
}>;

export type CreateQuestionMutation = { __typename?: 'Mutation' } & {
  createQuestion?: Maybe<
    { __typename?: 'Question' } & Pick<
      Question,
      'id' | 'groupId' | 'order' | 'type' | 'name' | 'required' | 'commentEnabled' | 'showOn'
    > & {
        options?: Maybe<Array<Maybe<{ __typename?: 'Options' } & Pick<Options, 'name'>>>>;
        entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>>;
      }
  >;
};

export type UpdateQuestionMutationVariables = Exact<{
  questionId: Scalars['ID'];
  input: UpdateQuestionInput;
}>;

export type UpdateQuestionMutation = { __typename?: 'Mutation' } & {
  updateQuestion?: Maybe<
    { __typename?: 'Question' } & Pick<
      Question,
      'id' | 'groupId' | 'order' | 'type' | 'name' | 'required' | 'commentEnabled' | 'showOn'
    > & {
        options?: Maybe<Array<Maybe<{ __typename?: 'Options' } & Pick<Options, 'name'>>>>;
        entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>>;
      }
  >;
};

export type TiaraSendMessageMutationVariables = Exact<{
  input: TiaraSendMessageInput;
}>;

export type TiaraSendMessageMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'tiaraSendMessage'>;

export type UpdateWorkflowActionMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateWorkflowActionInput;
}>;

export type UpdateWorkflowActionMutation = { __typename?: 'Mutation' } & {
  updateWorkflowAction: { __typename?: 'WorkflowAction' } & Pick<WorkflowAction, 'id'>;
};

export type UpdateWorkflowTriggerMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateWorkflowTriggerInput;
}>;

export type UpdateWorkflowTriggerMutation = { __typename?: 'Mutation' } & {
  updateWorkflowTrigger: { __typename?: 'WorkflowTrigger' } & Pick<WorkflowTrigger, 'id'>;
};

export type GetAllocateQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetAllocateQuery = { __typename?: 'Query' } & {
  getAllocate?: Maybe<
    { __typename?: 'Allocate' } & Pick<
      Allocate,
      'id' | 'companyId' | 'objectId' | 'name' | 'version' | 'note' | 'assignToRole'
    > & {
        criteria?: Maybe<
          { __typename?: 'AllocateCriteria' } & Pick<
            AllocateCriteria,
            'type' | 'startDate' | 'endDate' | 'amountAssignedCandidates' | 'isPublishedExternally'
          > & {
              rentalePriceCalculation?: Maybe<
                { __typename?: 'AllocateRentalPriceCalculation' } & Pick<
                  AllocateRentalPriceCalculation,
                  'minJointIncome' | 'maxJointIncome' | 'minRentByIncome' | 'maxRentByIcome'
                >
              >;
              interestDetails?: Maybe<
                { __typename?: 'AllocateInterestDetails' } & Pick<
                  AllocateInterestDetails,
                  'minNumberOfPreferences' | 'registrationForm' | 'registrationTo' | 'assignOnlyWithInterest'
                >
              >;
              documents?: Maybe<
                { __typename?: 'AllocateCriteriaDocuments' } & Pick<
                  AllocateCriteriaDocuments,
                  'acceptedMissingDocumentsNumber' | 'onlyAcceptedDocuments'
                >
              >;
              criteriaOrder?: Maybe<
                Array<
                  { __typename?: 'AllocateCriteriaOrder' } & Pick<AllocateCriteriaOrder, 'name' | 'order' | 'checked'>
                >
              >;
            }
        >;
        people?: Maybe<
          { __typename?: 'AllocatePeople' } & {
            jointIncome?: Maybe<
              { __typename?: 'AllocatePeopleJointIncome' } & Pick<
                AllocatePeopleJointIncome,
                'lowestPercentage' | 'distributionThreshold' | 'ficitousCalculation' | 'includePension'
              >
            >;
            income?: Maybe<
              { __typename?: 'AllocatePeopleIncome' } & Pick<
                AllocatePeopleIncome,
                'availableCapitalCount' | 'deductMonthlyObligations' | 'minAge' | 'employementType'
              >
            >;
            partnerIncome?: Maybe<
              { __typename?: 'AllocatePeopleIncome' } & Pick<
                AllocatePeopleIncome,
                'availableCapitalCount' | 'deductMonthlyObligations' | 'minAge' | 'employementType'
              >
            >;
          }
        >;
        home?: Maybe<
          { __typename?: 'AllocateHome' } & Pick<
            AllocateHome,
            'amountChildren' | 'amountAdults' | 'situation' | 'hasCurrentResidence'
          >
        >;
      }
  >;
};

export type ListAllocatesQueryVariables = Exact<{
  objectId: Scalars['ID'];
}>;

export type ListAllocatesQuery = { __typename?: 'Query' } & {
  listAllocates?: Maybe<
    Array<
      { __typename?: 'Allocate' } & Pick<
        Allocate,
        'id' | 'companyId' | 'objectId' | 'name' | 'version' | 'note' | 'assignToRole'
      > & {
          criteria?: Maybe<
            { __typename?: 'AllocateCriteria' } & Pick<
              AllocateCriteria,
              'type' | 'startDate' | 'endDate' | 'amountAssignedCandidates' | 'isPublishedExternally'
            > & {
                rentalePriceCalculation?: Maybe<
                  { __typename?: 'AllocateRentalPriceCalculation' } & Pick<
                    AllocateRentalPriceCalculation,
                    'minJointIncome' | 'maxJointIncome' | 'minRentByIncome' | 'maxRentByIcome'
                  >
                >;
                interestDetails?: Maybe<
                  { __typename?: 'AllocateInterestDetails' } & Pick<
                    AllocateInterestDetails,
                    'minNumberOfPreferences' | 'registrationForm' | 'registrationTo' | 'assignOnlyWithInterest'
                  >
                >;
                documents?: Maybe<
                  { __typename?: 'AllocateCriteriaDocuments' } & Pick<
                    AllocateCriteriaDocuments,
                    'acceptedMissingDocumentsNumber' | 'onlyAcceptedDocuments'
                  >
                >;
                criteriaOrder?: Maybe<
                  Array<
                    { __typename?: 'AllocateCriteriaOrder' } & Pick<AllocateCriteriaOrder, 'name' | 'order' | 'checked'>
                  >
                >;
              }
          >;
          people?: Maybe<
            { __typename?: 'AllocatePeople' } & {
              jointIncome?: Maybe<
                { __typename?: 'AllocatePeopleJointIncome' } & Pick<
                  AllocatePeopleJointIncome,
                  'lowestPercentage' | 'distributionThreshold' | 'ficitousCalculation' | 'includePension'
                >
              >;
              income?: Maybe<
                { __typename?: 'AllocatePeopleIncome' } & Pick<
                  AllocatePeopleIncome,
                  'availableCapitalCount' | 'deductMonthlyObligations' | 'minAge' | 'employementType'
                >
              >;
              partnerIncome?: Maybe<
                { __typename?: 'AllocatePeopleIncome' } & Pick<
                  AllocatePeopleIncome,
                  'availableCapitalCount' | 'deductMonthlyObligations' | 'minAge' | 'employementType'
                >
              >;
            }
          >;
          home?: Maybe<
            { __typename?: 'AllocateHome' } & Pick<
              AllocateHome,
              'amountChildren' | 'amountAdults' | 'situation' | 'hasCurrentResidence'
            >
          >;
        }
    >
  >;
};

export type GetBillingQueryVariables = Exact<{ [key: string]: never }>;

export type GetBillingQuery = { __typename?: 'Query' } & {
  getBilling?: Maybe<{ __typename?: 'Billing' } & Pick<Billing, 'url'>>;
};

export type BulkDetailsQueryVariables = Exact<{
  input: GetBulkDetailsInput;
}>;

export type BulkDetailsQuery = { __typename?: 'Query' } & {
  getBulkDetails?: Maybe<Array<{ __typename?: 'GetBulkResult' } & Pick<GetBulkResult, 'id' | 'value'>>>;
};

export type ListCalendarQueryVariables = Exact<{
  input: AppointmentSearch;
}>;

export type ListCalendarQuery = { __typename?: 'Query' } & {
  listCalendar?: Maybe<
    Array<
      { __typename?: 'Appointment' } & Pick<
        Appointment,
        | 'id'
        | 'from'
        | 'to'
        | 'travelTimeBefore'
        | 'travelTimeAfter'
        | 'title'
        | 'allDay'
        | 'type'
        | 'isInsideOffice'
        | 'location'
        | 'outsideLocation'
        | 'taskLabel'
        | 'state'
        | 'agreementType'
        | 'repeatAppointment'
        | 'description'
        | 'appointmentType'
        | 'assignedPimIds'
        | 'invitedPersons'
      >
    >
  >;
};

export type GetAppointmentQueryVariables = Exact<{
  appointmentId: Scalars['ID'];
}>;

export type GetAppointmentQuery = { __typename?: 'Query' } & {
  getAppointment: { __typename?: 'Appointment' } & Pick<
    Appointment,
    | 'id'
    | 'from'
    | 'to'
    | 'travelTimeBefore'
    | 'travelTimeAfter'
    | 'title'
    | 'allDay'
    | 'type'
    | 'isInsideOffice'
    | 'location'
    | 'outsideLocation'
    | 'taskLabel'
    | 'state'
    | 'agreementType'
    | 'repeatAppointment'
    | 'description'
    | 'appointmentType'
    | 'assignedPimIds'
    | 'invitedPersons'
  >;
};

export type CheckCompanyRegisteredQueryVariables = Exact<{
  name: Scalars['String'];
}>;

export type CheckCompanyRegisteredQuery = { __typename?: 'Query' } & {
  checkCompanyRegistered: { __typename?: 'CheckRegisteredResponse' } & Pick<
    CheckRegisteredResponse,
    'suggestions' | 'taken'
  >;
};

export type GetCompanyDetailsQueryVariables = Exact<{ [key: string]: never }>;

export type GetCompanyDetailsQuery = { __typename?: 'Query' } & {
  getCompanyDetails: { __typename?: 'Company' } & Pick<
    Company,
    | 'id'
    | 'name'
    | 'domain'
    | 'address'
    | 'addressSecondLine'
    | 'state'
    | 'city'
    | 'zipcode'
    | 'country'
    | 'houseNumber'
    | 'floor'
    | 'chamberOfCommerce'
    | 'vat'
  > & { image?: Maybe<{ __typename?: 'File' } & Pick<File, 'url' | 'id'>> };
};

export type GetCrmContactInformationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetCrmContactInformationQuery = { __typename?: 'Query' } & {
  getCrmContactInformation?: Maybe<
    { __typename?: 'CrmContactInformation' } & Pick<
      CrmContactInformation,
      'id' | 'contactInfoDescription' | 'dateCreated' | 'dateUpdated'
    > & {
        addresses?: Maybe<
          Array<
            { __typename?: 'CrmAddress' } & Pick<
              CrmAddress,
              | 'id'
              | 'type'
              | 'street'
              | 'houseNumber'
              | 'addition'
              | 'zipcode'
              | 'city'
              | 'country'
              | 'extraInformation'
              | 'availableFrom'
              | 'note'
            >
          >
        >;
        emailAddresses?: Maybe<
          Array<
            { __typename?: 'CrmEmailAddress' } & Pick<
              CrmEmailAddress,
              'id' | 'type' | 'email' | 'availableFrom' | 'note'
            >
          >
        >;
        phoneNumbers?: Maybe<
          Array<
            { __typename?: 'CrmPhoneNumber' } & Pick<
              CrmPhoneNumber,
              'id' | 'type' | 'countryCode' | 'phoneNumber' | 'availableFrom' | 'note'
            >
          >
        >;
        socialMedia?: Maybe<Array<{ __typename?: 'CrmSocialMedia' } & Pick<CrmSocialMedia, 'id' | 'type' | 'url'>>>;
        lastEditedBy?: Maybe<
          { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
        >;
      }
  >;
};

export type GetCrmFamilyContactsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetCrmFamilyContactsQuery = { __typename?: 'Query' } & {
  getCrmFamilyContacts?: Maybe<
    { __typename?: 'CrmFamilyContacts' } & Pick<
      CrmFamilyContacts,
      | 'id'
      | 'maritalStatus'
      | 'maritalStatusDate'
      | 'maritalStatusInformation'
      | 'familyCompositionChildren'
      | 'familyCompositionAdults'
      | 'familyCompositionInformation'
    > & {
        partners?: Maybe<
          Array<
            { __typename?: 'CrmPartner' } & Pick<CrmPartner, 'isDivorced'> & {
                partner: { __typename?: 'LinkedCrm' } & Pick<
                  LinkedCrm,
                  'id' | 'firstName' | 'initials' | 'lastName' | 'email' | 'isPassedAway' | 'dateOfDeath'
                > & { avatar?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>> };
              }
          >
        >;
        contacts?: Maybe<
          Array<
            { __typename?: 'CrmContact' } & Pick<CrmContact, 'type'> & {
                contact: { __typename?: 'LinkedCrm' } & Pick<LinkedCrm, 'id'>;
              }
          >
        >;
      }
  >;
};

export type GetCrmFinancialQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetCrmFinancialQuery = { __typename?: 'Query' } & {
  getCrmFinancial?: Maybe<
    { __typename?: 'CrmFinancial' } & Pick<CrmFinancial, 'id' | 'financialInfo'> & {
        income?: Maybe<
          Array<
            { __typename?: 'CrmIncome' } & Pick<CrmIncome, 'id' | 'type' | 'information'> & {
                employerIncome?: Maybe<
                  { __typename?: 'CrmEmployerIncome' } & Pick<
                    CrmEmployerIncome,
                    | 'profession'
                    | 'employmentType'
                    | 'grossIncome'
                    | 'grossIncomePeriod'
                    | 'holidayBonus'
                    | 'fixedThirteenthMonth'
                    | 'irregularityAllowance'
                    | 'irregularityAllowancePeriod'
                    | 'profitDistribution'
                    | 'profitDistributionPeriod'
                    | 'commission'
                    | 'commissionPeriod'
                    | 'overtime'
                    | 'overtimePeriod'
                  > & {
                      employer?: Maybe<
                        { __typename?: 'LinkedCrm' } & Pick<
                          LinkedCrm,
                          'id' | 'firstName' | 'extraNames' | 'initials' | 'lastName' | 'email' | 'phoneNumber'
                        > & { avatar?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>> }
                      >;
                      employerInformation?: Maybe<
                        { __typename?: 'CrmEmployerInformation' } & Pick<
                          CrmEmployerInformation,
                          'name' | 'street' | 'houseNumber' | 'addition' | 'zipcode' | 'city' | 'country'
                        >
                      >;
                    }
                >;
                equityIncome?: Maybe<{ __typename?: 'CrmEquityIncome' } & Pick<CrmEquityIncome, 'income'>>;
                pensionIncome?: Maybe<
                  { __typename?: 'CrmPensionIncome' } & Pick<
                    CrmPensionIncome,
                    'aowBenefit' | 'aowBenefitPeriod' | 'retirementBenefit' | 'retirementBenefitPeriod'
                  >
                >;
                socialBenefitIncome?: Maybe<
                  { __typename?: 'CrmSocialBenefitIncome' } & Pick<
                    CrmSocialBenefitIncome,
                    'income' | 'incomePeriod' | 'socialBenefitType'
                  >
                >;
                entrepreneurIncome?: Maybe<
                  { __typename?: 'CrmEntrepreneurIncome' } & Pick<
                    CrmEntrepreneurIncome,
                    | 'entrepreneurType'
                    | 'companyCar'
                    | 'companyBike'
                    | 'pastPensionAge'
                    | 'smeProfitExemption'
                    | 'incomePerYear'
                    | 'workingHoursPerMonth'
                    | 'yearsAsIndependent'
                  >
                >;
              }
          >
        >;
        financialObligations?: Maybe<
          Array<
            { __typename?: 'CrmFinancialObligation' } & Pick<
              CrmFinancialObligation,
              'id' | 'type' | 'financialObligation' | 'information'
            >
          >
        >;
        bankAccounts?: Maybe<
          Array<
            { __typename?: 'CrmBankAccount' } & Pick<
              CrmBankAccount,
              'id' | 'type' | 'accountNumber' | 'bic' | 'iban' | 'swift' | 'purpose'
            >
          >
        >;
      }
  >;
};

export type GetCrmGeneralQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetCrmGeneralQuery = { __typename?: 'Query' } & {
  getCrmGeneral?: Maybe<
    { __typename?: 'CrmGeneral' } & Pick<
      CrmGeneral,
      | 'id'
      | 'firstName'
      | 'extraNames'
      | 'initials'
      | 'lastName'
      | 'gender'
      | 'dateOfBirth'
      | 'placeOfBirth'
      | 'nationality'
      | 'dateOfDeath'
      | 'isPassedAway'
      | 'preferredLanguage'
      | 'identification'
      | 'identificationNumber'
      | 'identificationIssueCity'
      | 'identificationIssueDate'
      | 'identificationExpirationDate'
      | 'preferredTitlePrefix'
      | 'preferredTitleSuffix'
      | 'preferredLetterSalutation'
      | 'preferredTitleInformation'
      | 'status'
      | 'completeness'
      | 'dateCreated'
      | 'dateUpdated'
    > & {
        identificationNumbers?: Maybe<
          Array<{ __typename?: 'CrmIdentificationNumber' } & Pick<CrmIdentificationNumber, 'type' | 'number' | 'name'>>
        >;
        avatar?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'fileName' | 'url'>>;
        lastEditedBy?: Maybe<
          { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
        >;
      }
  >;
};

export type GetCrmHomeSituationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetCrmHomeSituationQuery = { __typename?: 'Query' } & {
  getCrmHomeSituation?: Maybe<
    { __typename?: 'CrmHomeSituation' } & Pick<
      CrmHomeSituation,
      | 'id'
      | 'currentHomeSituation'
      | 'currentHomeStatus'
      | 'currentHomeSalesValue'
      | 'currentHomeMortgage'
      | 'currentHomeInformation'
      | 'reasonToMove'
      | 'movingDate'
      | 'movingInformation'
    >
  >;
};

export type CrmListQueryVariables = Exact<{
  type?: Maybe<CrmType>;
  status?: Maybe<CrmStatus>;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
}>;

export type CrmListQuery = { __typename?: 'Query' } & {
  crmList: { __typename?: 'CrmListSearchResult' } & {
    items?: Maybe<
      Array<
        { __typename?: 'CrmListItem' } & Pick<
          CrmListItem,
          | 'id'
          | 'type'
          | 'firstName'
          | 'initials'
          | 'lastName'
          | 'gender'
          | 'dateOfBirth'
          | 'placeOfBirth'
          | 'nationality'
          | 'maritalStatus'
          | 'familyCompositionChildren'
          | 'familyCompositionAdults'
          | 'currentHomeSituation'
          | 'phoneNumber'
          | 'email'
          | 'status'
          | 'dateCreated'
          | 'dateUpdated'
          | 'completeness'
        > & {
            partners?: Maybe<
              Array<
                { __typename?: 'CrmPartner' } & {
                  partner: { __typename?: 'LinkedCrm' } & Pick<LinkedCrm, 'id' | 'firstName' | 'lastName'> & {
                      avatar?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
                    };
                }
              >
            >;
            addresses?: Maybe<Array<{ __typename?: 'CrmAddress' } & Pick<CrmAddress, 'city'>>>;
            avatar?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
          }
      >
    >;
  };
};

export type ListCrmsCountQueryVariables = Exact<{
  type?: Maybe<CrmType>;
}>;

export type ListCrmsCountQuery = { __typename?: 'Query' } & {
  actionRequired: { __typename?: 'CrmListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  active: { __typename?: 'CrmListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  inactive: { __typename?: 'CrmListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type GetCrmWithSameInfoQueryVariables = Exact<{
  input: CrmWithSameInfoInput;
}>;

export type GetCrmWithSameInfoQuery = { __typename?: 'Query' } & {
  getCrmWithSameInfo: { __typename?: 'CrmListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    items?: Maybe<Array<{ __typename?: 'CrmListItem' } & Pick<CrmListItem, 'id'>>>;
  };
};

export type CrmBulkDetailsQueryVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;

export type CrmBulkDetailsQuery = { __typename?: 'Query' } & {
  status?: Maybe<Array<{ __typename?: 'GetBulkResult' } & Pick<GetBulkResult, 'value'>>>;
};

export type ListDmsFoldersQueryVariables = Exact<{
  entityId: Scalars['ID'];
}>;

export type ListDmsFoldersQuery = { __typename?: 'Query' } & {
  listDmsFolders?: Maybe<
    Array<
      { __typename?: 'DmsFolder' } & Pick<
        DmsFolder,
        'id' | 'entityId' | 'companyId' | 'foldername' | 'entityType' | 'type' | 'order' | 'deletedAt'
      >
    >
  >;
};

export type ListEmailFoldersQueryVariables = Exact<{
  accountId: Scalars['String'];
}>;

export type ListEmailFoldersQuery = { __typename?: 'Query' } & {
  listEmailFolders?: Maybe<
    Array<
      { __typename?: 'EmailFolderListItem' } & Pick<EmailFolderListItem, 'numberOfUnreadEmails'> & {
          folder: { __typename?: 'EmailFolder' } & Pick<EmailFolder, 'id' | 'name' | 'displayName' | 'nylasFolderId'>;
        }
    >
  >;
};

export type ListEmailQueryVariables = Exact<{
  accountId: Scalars['String'];
  folderId?: Maybe<Scalars['ID']>;
  unread?: Maybe<Scalars['Boolean']>;
}>;

export type ListEmailQuery = { __typename?: 'Query' } & {
  listEmail?: Maybe<
    Array<
      { __typename?: 'EmailListItem' } & Pick<EmailListItem, 'id' | 'subject' | 'date' | 'thread_id'> & {
          folder: { __typename?: 'EmailFolder' } & Pick<EmailFolder, 'id' | 'name' | 'displayName'>;
          from: Array<{ __typename?: 'EmailAndName' } & Pick<EmailAndName, 'name' | 'email'>>;
          to: Array<{ __typename?: 'EmailAndName' } & Pick<EmailAndName, 'name' | 'email'>>;
        }
    >
  >;
};

export type GetEmailQueryVariables = Exact<{
  accountId: Scalars['String'];
  emailId: Scalars['String'];
}>;

export type GetEmailQuery = { __typename?: 'Query' } & {
  getEmail?: Maybe<
    { __typename?: 'Email' } & Pick<Email, 'id' | 'subject' | 'body' | 'date' | 'thread_id'> & {
        folder: { __typename?: 'EmailFolder' } & Pick<EmailFolder, 'id' | 'name' | 'displayName'>;
        from: Array<{ __typename?: 'EmailAndName' } & Pick<EmailAndName, 'name' | 'email'>>;
        to: Array<{ __typename?: 'EmailAndName' } & Pick<EmailAndName, 'name' | 'email'>>;
        files?: Maybe<Array<{ __typename?: 'EmailAttachment' } & Pick<EmailAttachment, 'id' | 'filename'>>>;
        threads?: Maybe<
          { __typename?: 'EmailThread' } & Pick<EmailThread, 'id' | 'message_ids'> & {
              participants: Array<{ __typename?: 'EmailAndName' } & Pick<EmailAndName, 'email' | 'name'>>;
            }
        >;
        threadMessages?: Maybe<
          Array<
            { __typename?: 'ThreadMessage' } & Pick<ThreadMessage, 'id' | 'subject' | 'date'> & {
                from: Array<{ __typename?: 'EmailAndName' } & Pick<EmailAndName, 'name' | 'email'>>;
                to: Array<{ __typename?: 'EmailAndName' } & Pick<EmailAndName, 'name' | 'email'>>;
              }
          >
        >;
      }
  >;
};

export type GetKikSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type GetKikSettingsQuery = { __typename?: 'Query' } & {
  getKikSettings?: Maybe<{ __typename?: 'KikSettings' } & Pick<KikSettings, 'username'>>;
};

export type GetLabelsQueryVariables = Exact<{
  id: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty> | LabelProperty>;
}>;

export type GetLabelsQuery = { __typename?: 'Query' } & {
  getLabels?: Maybe<Array<{ __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'icon' | 'text'>>>;
};

export type GetCrmLabelsQueryVariables = Exact<{
  id: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty> | LabelProperty>;
}>;

export type GetCrmLabelsQuery = { __typename?: 'Query' } & {
  getCrmLabels?: Maybe<Array<{ __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'icon' | 'text'>>>;
};

export type CountPimsByParamsQueryVariables = Exact<{
  filters?: Maybe<ListPimsFilters>;
}>;

export type CountPimsByParamsQuery = { __typename?: 'Query' } & {
  listPims: { __typename?: 'PimListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type ListPimsCountQueryVariables = Exact<{
  pricingType?: Maybe<PricingType>;
  propertyTypes?: Maybe<Array<Maybe<PropertyType>> | Maybe<PropertyType>>;
}>;

export type ListPimsCountQuery = { __typename?: 'Query' } & {
  activeCount: { __typename?: 'PimListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  archivedCount: { __typename?: 'PimListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type ListPimsQueryVariables = Exact<{
  archived: Scalars['Boolean'];
  pricingType?: Maybe<PricingType>;
  propertyTypes?: Maybe<Array<Maybe<PropertyType>> | Maybe<PropertyType>>;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
}>;

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
          | 'postalCode'
          | 'country'
          | 'salePrice'
          | 'rentPrice'
          | 'completeness'
          | 'archived'
          | 'attentionNote'
        > & {
            pictures?: Maybe<
              Array<
                { __typename?: 'Picture' } & Pick<Picture, 'id' | 'name' | 'description' | 'type' | 'dateUpdated'> & {
                    file?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'fileName' | 'url'>>;
                  }
              >
            >;
            mainPicture?: Maybe<
              { __typename?: 'Picture' } & Pick<Picture, 'id'> & {
                  file?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'url'>>;
                }
            >;
          }
      >
    >;
  };
};

export type LinkedPimsListQueryVariables = Exact<{
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
}>;

export type LinkedPimsListQuery = { __typename?: 'Query' } & {
  pims: { __typename?: 'PimListSearchResult' } & {
    items?: Maybe<
      Array<{ __typename?: 'ListPim' } & Pick<ListPim, 'id' | 'street' | 'houseNumber' | 'city' | 'postalCode'>>
    >;
  };
  linkedObjectIds: { __typename?: 'ObjectTypeLinkedPims' } & Pick<ObjectTypeLinkedPims, 'linkedPropertiesIds'>;
};

export type GetMatchProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetMatchProfileQuery = { __typename?: 'Query' } & {
  getMatchProfile?: Maybe<
    { __typename?: 'MatchProfile' } & Pick<
      MatchProfile,
      | 'id'
      | 'crmId'
      | 'companyId'
      | 'propertyType'
      | 'startDate'
      | 'endDate'
      | 'matchWith'
      | 'description'
      | 'estateType'
      | 'commercialEstateType'
      | 'conditions'
      | 'services'
      | 'tags'
      | 'isActive'
      | 'createdAt'
    > & {
        matchDuration?: Maybe<{ __typename?: 'MatchProfileDateRange' } & Pick<MatchProfileDateRange, 'from' | 'to'>>;
        characteristics?: Maybe<
          { __typename?: 'MatchCharacteristics' } & Pick<MatchCharacteristics, 'general'> & {
              property?: Maybe<
                { __typename?: 'MatchCharacteristicsProperty' } & Pick<
                  MatchCharacteristicsProperty,
                  | 'minAmountRooms'
                  | 'minAmountBedrooms'
                  | 'residentialLayerFrom'
                  | 'residentialLayerTo'
                  | 'constructionYearFrom'
                  | 'constructionYearTo'
                  | 'maintenanceQuality'
                >
              >;
            }
        >;
        commercialCharacteristics?: Maybe<
          { __typename?: 'MatchCommercialCharacteristics' } & Pick<MatchCommercialCharacteristics, 'general'> & {
              property?: Maybe<
                { __typename?: 'MatchCommercialCharacteristicsProperty' } & Pick<
                  MatchCommercialCharacteristicsProperty,
                  | 'minFreeHeight'
                  | 'minFreeSpan'
                  | 'minFloorLoad'
                  | 'minAmountOfFloors'
                  | 'minParkingLots'
                  | 'engergyLabel'
                  | 'constructionYearFrom'
                  | 'constructionYearTo'
                  | 'maintenanceQuality'
                >
              >;
            }
        >;
        pricing?: Maybe<
          { __typename?: 'MatchPricing' } & Pick<
            MatchPricing,
            'buyFrom' | 'buyTo' | 'rentFrom' | 'rentTo' | 'rentFrequency' | 'rentalPeriod' | 'preferredStartDate'
          >
        >;
        outside?: Maybe<{ __typename?: 'MatchOutsidePricing' } & Pick<MatchOutsidePricing, 'minGarage'>>;
        garden?: Maybe<
          { __typename?: 'MatchGarden' } & Pick<
            MatchGarden,
            'situation' | 'outdoorSpacesMin' | 'outdoorSpacesMax' | 'volumeMin' | 'volumeMax'
          >
        >;
        measurements?: Maybe<
          { __typename?: 'MatchMeasurements' } & Pick<
            MatchMeasurements,
            | 'surfaceFromMin'
            | 'surfaceToMin'
            | 'livingAreaFromMin'
            | 'livingAreaToMin'
            | 'businessSpaceSurfaceFromMin'
            | 'businessSpaceSurfaceToMin'
            | 'practiceRoomSurfaceToMax'
            | 'practiceRoomSurfaceToMin'
            | 'plotSurfaceFromMin'
            | 'plotSurfaceToMin'
          >
        >;
        revenue?: Maybe<{ __typename?: 'IntRange' } & Pick<IntRange, 'from' | 'to'>>;
        exploitation?: Maybe<{ __typename?: 'IntRange' } & Pick<IntRange, 'from' | 'to'>>;
        requirements?: Maybe<Array<{ __typename?: 'MatchRequirement' } & Pick<MatchRequirement, 'key' | 'status'>>>;
        locations?: Maybe<
          Array<
            { __typename?: 'MatchProfileLocation' } & Pick<
              MatchProfileLocation,
              'latitude' | 'longitude' | 'street' | 'houseNumber' | 'radius'
            >
          >
        >;
      }
  >;
};

export type ListMatchProfilesQueryVariables = Exact<{
  crmId: Scalars['ID'];
}>;

export type ListMatchProfilesQuery = { __typename?: 'Query' } & {
  listMatchProfiles?: Maybe<
    Array<
      { __typename?: 'MatchProfile' } & Pick<
        MatchProfile,
        | 'id'
        | 'crmId'
        | 'companyId'
        | 'propertyType'
        | 'startDate'
        | 'endDate'
        | 'matchWith'
        | 'description'
        | 'estateType'
        | 'commercialEstateType'
        | 'conditions'
        | 'services'
        | 'tags'
        | 'isActive'
        | 'createdAt'
      > & {
          matchDuration?: Maybe<{ __typename?: 'MatchProfileDateRange' } & Pick<MatchProfileDateRange, 'from' | 'to'>>;
          characteristics?: Maybe<
            { __typename?: 'MatchCharacteristics' } & Pick<MatchCharacteristics, 'general'> & {
                property?: Maybe<
                  { __typename?: 'MatchCharacteristicsProperty' } & Pick<
                    MatchCharacteristicsProperty,
                    | 'minAmountRooms'
                    | 'minAmountBedrooms'
                    | 'residentialLayerFrom'
                    | 'residentialLayerTo'
                    | 'constructionYearFrom'
                    | 'constructionYearTo'
                    | 'maintenanceQuality'
                  >
                >;
              }
          >;
          commercialCharacteristics?: Maybe<
            { __typename?: 'MatchCommercialCharacteristics' } & Pick<MatchCommercialCharacteristics, 'general'> & {
                property?: Maybe<
                  { __typename?: 'MatchCommercialCharacteristicsProperty' } & Pick<
                    MatchCommercialCharacteristicsProperty,
                    | 'minFreeHeight'
                    | 'minFreeSpan'
                    | 'minFloorLoad'
                    | 'minAmountOfFloors'
                    | 'minParkingLots'
                    | 'engergyLabel'
                    | 'constructionYearFrom'
                    | 'constructionYearTo'
                    | 'maintenanceQuality'
                  >
                >;
              }
          >;
          pricing?: Maybe<
            { __typename?: 'MatchPricing' } & Pick<
              MatchPricing,
              'buyFrom' | 'buyTo' | 'rentFrom' | 'rentTo' | 'rentFrequency' | 'rentalPeriod' | 'preferredStartDate'
            >
          >;
          outside?: Maybe<{ __typename?: 'MatchOutsidePricing' } & Pick<MatchOutsidePricing, 'minGarage'>>;
          garden?: Maybe<
            { __typename?: 'MatchGarden' } & Pick<
              MatchGarden,
              'situation' | 'outdoorSpacesMin' | 'outdoorSpacesMax' | 'volumeMin' | 'volumeMax'
            >
          >;
          measurements?: Maybe<
            { __typename?: 'MatchMeasurements' } & Pick<
              MatchMeasurements,
              | 'surfaceFromMin'
              | 'surfaceToMin'
              | 'livingAreaFromMin'
              | 'livingAreaToMin'
              | 'businessSpaceSurfaceFromMin'
              | 'businessSpaceSurfaceToMin'
              | 'practiceRoomSurfaceToMax'
              | 'practiceRoomSurfaceToMin'
              | 'plotSurfaceFromMin'
              | 'plotSurfaceToMin'
            >
          >;
          revenue?: Maybe<{ __typename?: 'IntRange' } & Pick<IntRange, 'from' | 'to'>>;
          exploitation?: Maybe<{ __typename?: 'IntRange' } & Pick<IntRange, 'from' | 'to'>>;
          requirements?: Maybe<Array<{ __typename?: 'MatchRequirement' } & Pick<MatchRequirement, 'key' | 'status'>>>;
          locations?: Maybe<
            Array<
              { __typename?: 'MatchProfileLocation' } & Pick<
                MatchProfileLocation,
                'latitude' | 'longitude' | 'street' | 'houseNumber' | 'radius'
              >
            >
          >;
        }
    >
  >;
};

export type NcpCharacteristicsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
};

export type NcpGeneralQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
    | 'projectType'
  > & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
};

export type NcpWithSameAddressQueryVariables = Exact<{
  input: NcpWithSameAddressInput;
}>;

export type NcpWithSameAddressQuery = { __typename?: 'Query' } & {
  getNcpWithSameAddress: { __typename?: 'NcpSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    items?: Maybe<Array<{ __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id'>>>;
  };
};

export type NcpGeneralOverallInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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

export type GetNcpLabelsQueryVariables = Exact<{
  id: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty> | LabelProperty>;
}>;

export type GetNcpLabelsQuery = { __typename?: 'Query' } & {
  getNcpLabels?: Maybe<Array<{ __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'icon' | 'text'>>>;
};

export type ListNcpsCountQueryVariables = Exact<{
  pricingType?: Maybe<PricingType>;
  projectType?: Maybe<ProjectType>;
}>;

export type ListNcpsCountQuery = { __typename?: 'Query' } & {
  activeCount: { __typename?: 'NcpListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  archivedCount: { __typename?: 'NcpListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type ListNcpsQueryVariables = Exact<{
  pricingType?: Maybe<PricingType>;
  projectType?: Maybe<ProjectType>;
  archived: Scalars['Boolean'];
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
}>;

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
          | 'projectType'
        > & {
            logoPicture?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
            mainPicture?: Maybe<
              { __typename?: 'Picture' } & Pick<Picture, 'id'> & {
                  file?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
                }
            >;
          }
      >
    >;
  };
};

export type NcpBulkDetailsQueryVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;

export type NcpBulkDetailsQuery = { __typename?: 'Query' } & {
  city?: Maybe<Array<{ __typename?: 'GetBulkResult' } & Pick<GetBulkResult, 'value'>>>;
};

export type NcpMediaQueryVariables = Exact<{
  id: Scalars['ID'];
  picturesSort?: Maybe<Sort>;
}>;

export type NcpMediaQuery = { __typename?: 'Query' } & {
  getNcpMedia: { __typename?: 'NcpMedia' } & Pick<NcpMedia, 'id' | 'mediaDescription' | 'dateUpdated'> & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
      pictures?: Maybe<
        Array<
          { __typename?: 'Picture' } & Pick<
            Picture,
            'id' | 'name' | 'description' | 'type' | 'dateUpdated' | 'isMainPicture'
          > & { file?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'fileName' | 'url'>> }
        >
      >;
      mediaLinks?: Maybe<Array<{ __typename?: 'MediaLink' } & Pick<MediaLink, 'id' | 'name' | 'type' | 'url'>>>;
      textChapters?: Maybe<Array<{ __typename?: 'TextChapter' } & Pick<TextChapter, 'id' | 'name' | 'type' | 'text'>>>;
      usps?: Maybe<Array<{ __typename?: 'Usp' } & Pick<Usp, 'id' | 'name' | 'description' | 'type'>>>;
      tags?: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'id' | 'name' | 'description' | 'type'>>>;
    };
};

export type NcpPricesPricingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
            lastEditedBy?: Maybe<
              { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
            >;
          }
      >;
    };
};

export type NcpPricesCostsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
            lastEditedBy?: Maybe<
              { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
            >;
          }
      >;
    };
};

export type NcpPricesInterestsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
        > & {
            lastEditedBy?: Maybe<
              { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
            >;
          }
      >;
    };
};

export type ListNcpLinkedPimsCountQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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

export type NcpLinkedPimsQueryVariables = Exact<{
  id: Scalars['ID'];
  archived?: Maybe<Scalars['Boolean']>;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
}>;

export type NcpLinkedPimsQuery = { __typename?: 'Query' } & {
  getNcpLinkedPims: { __typename?: 'NcpLinkedPims' } & Pick<
    NcpLinkedPims,
    'linkedPropertiesIds' | 'description' | 'dateUpdated'
  > & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
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
            > & {
                pictures?: Maybe<
                  Array<
                    { __typename?: 'Picture' } & Pick<Picture, 'type'> & {
                        file?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
                      }
                  >
                >;
              }
          >
        >;
      };
    };
};

export type GetNcpServicesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
};

export type NcpOverallInfoQueryVariables = Exact<{
  id: Scalars['ID'];
  archived?: Maybe<Scalars['Boolean']>;
  picturesSort?: Maybe<Sort>;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}>;

export type NcpOverallInfoQuery = { __typename?: 'Query' } & {
  getNcp: { __typename?: 'NcpGeneral' } & Pick<
    NcpGeneral,
    'startSale' | 'startDelivery' | 'properties' | 'objectTypesCount' | 'projectType'
  >;
  getNcpPrices: { __typename?: 'NcpPricesResult' } & {
    pricing?: Maybe<
      { __typename?: 'CommonPricing' } & {
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
      }
    >;
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
          lastEditedBy?: Maybe<
            { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
          >;
        }
    >;
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
      > & {
          lastEditedBy?: Maybe<
            { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
          >;
        }
    >;
  };
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
        > & {
            mainPicture?: Maybe<
              { __typename?: 'Picture' } & Pick<Picture, 'id'> & {
                  file?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
                }
            >;
          }
      >
    >;
  };
  getNcpMedia: { __typename?: 'NcpMedia' } & Pick<
    NcpMedia,
    'id' | 'mediaDescription' | 'dateUpdated' | 'mainPictureId'
  > & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
      pictures?: Maybe<
        Array<
          { __typename?: 'Picture' } & Pick<Picture, 'id' | 'name' | 'description' | 'type' | 'dateUpdated'> & {
              file?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'fileName' | 'url'>>;
            }
        >
      >;
      mediaLinks?: Maybe<Array<{ __typename?: 'MediaLink' } & Pick<MediaLink, 'id' | 'name' | 'type' | 'url'>>>;
      textChapters?: Maybe<Array<{ __typename?: 'TextChapter' } & Pick<TextChapter, 'id' | 'name' | 'type' | 'text'>>>;
      usps?: Maybe<Array<{ __typename?: 'Usp' } & Pick<Usp, 'id' | 'name' | 'description' | 'type'>>>;
      tags?: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'id' | 'name' | 'description' | 'type'>>>;
    };
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
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
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

export type GetNotificationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetNotificationsQuery = { __typename?: 'Query' } & {
  getNotifications?: Maybe<
    { __typename?: 'NotificationSearchResult' } & {
      items?: Maybe<
        Array<
          { __typename?: 'Notification' } & Pick<
            Notification,
            'id' | 'type' | 'isRead' | 'isDeleted' | 'description' | 'dateCreated'
          > & {
              receiver: { __typename?: 'Profile' } & Pick<Profile, 'id' | 'email' | 'isAdmin' | 'isActive'> & {
                  image?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
                };
              createdBy?: Maybe<
                { __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'> & {
                    image?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
                  }
              >;
              linkedEntity?: Maybe<{ __typename?: 'LinkedEntity' } & Pick<LinkedEntity, 'id' | 'type'>>;
            }
        >
      >;
    }
  >;
};

export type ListNylasAccountQueryVariables = Exact<{
  isCalendarConnected?: Maybe<Scalars['Boolean']>;
  isEmailConnected?: Maybe<Scalars['Boolean']>;
}>;

export type ListNylasAccountQuery = { __typename?: 'Query' } & {
  listNylasAccount?: Maybe<
    Array<
      { __typename?: 'NylasAccountItem' } & Pick<
        NylasAccountItem,
        'id' | 'email' | 'provider' | 'billingState' | 'syncState' | 'isCalendarConnected' | 'isEmailConnected'
      >
    >
  >;
};

export type GetNylasAuthUrlQueryVariables = Exact<{
  input: NylasAccountAuthOptions;
}>;

export type GetNylasAuthUrlQuery = { __typename?: 'Query' } & Pick<Query, 'getNylasAuthUrl'>;

export type ObjectTypeCharacteristicsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
};

export type GetObjectTypeGeneralQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetObjectTypeGeneralQuery = { __typename?: 'Query' } & {
  getObjectTypeGeneral: { __typename?: 'ObjectTypeGeneral' } & Pick<
    ObjectTypeGeneral,
    'id' | 'name' | 'dateUpdated' | 'ncpId'
  > & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
};

export type ObjectTypeOverallInfoQueryVariables = Exact<{
  id: Scalars['ID'];
  projectId: Scalars['ID'];
}>;

export type ObjectTypeOverallInfoQuery = { __typename?: 'Query' } & {
  objectType: { __typename?: 'ObjectTypeGeneral' } & Pick<ObjectTypeGeneral, 'id' | 'name'>;
  project: { __typename?: 'NcpGeneral' } & Pick<NcpGeneral, 'id' | 'name'>;
  linkedProperty: { __typename?: 'ObjectTypeLinkedPims' } & {
    linkedProperties: { __typename?: 'PimListSearchResult' } & {
      metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    };
  };
};

export type GetObjectTypeLabelsQueryVariables = Exact<{
  id: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty> | LabelProperty>;
}>;

export type GetObjectTypeLabelsQuery = { __typename?: 'Query' } & {
  getObjectTypeLabels?: Maybe<Array<{ __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'icon' | 'text'>>>;
};

export type ListObjectTypesCountQueryVariables = Exact<{
  ncpId: Scalars['ID'];
}>;

export type ListObjectTypesCountQuery = { __typename?: 'Query' } & {
  activeCount: { __typename?: 'ObjectTypeListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  archivedCount: { __typename?: 'ObjectTypeListSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type ListObjectTypesQueryVariables = Exact<{
  ncpId: Scalars['ID'];
  archived?: Maybe<Scalars['Boolean']>;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
}>;

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
        > & {
            mainPicture?: Maybe<
              { __typename?: 'Picture' } & Pick<Picture, 'id'> & {
                  file?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
                }
            >;
          }
      >
    >;
  };
};

export type ObjectTypeListDescriptionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type ObjectTypeListDescriptionQuery = { __typename?: 'Query' } & {
  getNcp: { __typename?: 'NcpGeneral' } & Pick<
    NcpGeneral,
    'objectTypesListDescription' | 'objectTypesListLastUpdatedOn'
  > & {
      objectTypesListLastUpdatedBy?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName'>>;
    };
};

export type ObjectTypeMediaQueryVariables = Exact<{
  id: Scalars['ID'];
  picturesSort?: Maybe<Sort>;
}>;

export type ObjectTypeMediaQuery = { __typename?: 'Query' } & {
  getObjectTypeMedia: { __typename?: 'ObjectTypeMedia' } & Pick<
    ObjectTypeMedia,
    'id' | 'mediaDescription' | 'dateUpdated'
  > & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
      pictures?: Maybe<
        Array<
          { __typename?: 'Picture' } & Pick<
            Picture,
            'isMainPicture' | 'id' | 'name' | 'description' | 'type' | 'dateUpdated'
          > & { file?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'fileName'>> }
        >
      >;
      mediaLinks?: Maybe<Array<{ __typename?: 'MediaLink' } & Pick<MediaLink, 'id' | 'name' | 'type' | 'url'>>>;
      textChapters?: Maybe<Array<{ __typename?: 'TextChapter' } & Pick<TextChapter, 'id' | 'name' | 'type' | 'text'>>>;
      usps?: Maybe<Array<{ __typename?: 'Usp' } & Pick<Usp, 'id' | 'name' | 'description' | 'type'>>>;
      tags?: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'id' | 'name' | 'description' | 'type'>>>;
    };
};

export type ObjectTypePricesPricingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
            lastEditedBy?: Maybe<
              { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
            >;
          }
      >;
    };
};

export type ObjectTypePricesCostsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
            lastEditedBy?: Maybe<
              { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
            >;
          }
      >;
    };
};

export type GetObjectTypeServicesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
};

export type ListObjectTypeLinkedPimsCountQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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

export type ObjectTypeLinkedPimsQueryVariables = Exact<{
  id: Scalars['ID'];
  archived?: Maybe<Scalars['Boolean']>;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
}>;

export type ObjectTypeLinkedPimsQuery = { __typename?: 'Query' } & {
  getObjectTypeLinkedPims: { __typename?: 'ObjectTypeLinkedPims' } & Pick<
    ObjectTypeLinkedPims,
    'linkedPropertiesIds' | 'description' | 'dateUpdated'
  > & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
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
              | 'attentionNote'
            > & {
                pictures?: Maybe<
                  Array<
                    { __typename?: 'Picture' } & Pick<Picture, 'type'> & {
                        file?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
                      }
                  >
                >;
              }
          >
        >;
      };
    };
};

export type PimAogSpacesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimAogSpacesQuery = { __typename?: 'Query' } & {
  getPimInside: { __typename?: 'PimInside' } & Pick<
    PimInside,
    'id' | 'aogAnimalsDescription' | 'aogBuildingsDescription' | 'aogInstallationsDescription' | 'aogGroundsDescription'
  > & {
      aogSpaces?: Maybe<
        Array<
          { __typename?: 'AogSpace' } & Pick<AogSpace, 'id' | 'name' | 'type' | 'dateUpdated' | 'dateCreated'> & {
              groundConfiguration?: Maybe<
                { __typename?: 'GroundSpace' } & Pick<
                  GroundSpace,
                  'typeOfLooseGround' | 'soilType' | 'soilTypeNotes' | 'cultivationTypes' | 'fenceTypes'
                > & {
                    measurements?: Maybe<
                      { __typename?: 'GroundMeasurements' } & Pick<
                        GroundMeasurements,
                        'length' | 'width' | 'surface' | 'fullBuiltWidth' | 'currentNumberOfSeats' | 'housingArea'
                      >
                    >;
                    specifications?: Maybe<
                      Array<{ __typename?: 'AogSpecifications' } & Pick<AogSpecifications, 'type' | 'notes'>>
                    >;
                  }
              >;
              buildingsConfiguration?: Maybe<
                { __typename?: 'BuildingsSpace' } & Pick<
                  BuildingsSpace,
                  'buildingType' | 'numberOfSameBuilding' | 'buildingTypeNotes'
                > & {
                    measurements?: Maybe<
                      { __typename?: 'BuildingMeasurements' } & Pick<
                        BuildingMeasurements,
                        'length' | 'width' | 'surface' | 'height' | 'volume' | 'constructionYear'
                      >
                    >;
                  }
              >;
              installationsConfiguration?: Maybe<
                { __typename?: 'Installations' } & Pick<Installations, 'type' | 'numberOfSameInstallations' | 'notes'>
              >;
              animalsConfiguration?: Maybe<
                { __typename?: 'Animals' } & Pick<Animals, 'type' | 'numberOfSameAnimals' | 'notes'> & {
                    specifications?: Maybe<
                      Array<{ __typename?: 'AogSpecifications' } & Pick<AogSpecifications, 'type' | 'notes'>>
                    >;
                  }
              >;
              images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'key' | 'id' | 'fileName' | 'url'>>>;
              lastEditedBy?: Maybe<
                { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
              >;
            }
        >
      >;
    };
};

export type PimBogSpacesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimBogSpacesQuery = { __typename?: 'Query' } & {
  getPimInside: { __typename?: 'PimInside' } & Pick<PimInside, 'id'> & {
      bogSpaces?: Maybe<
        Array<
          { __typename?: 'BogSpace' } & Pick<
            BogSpace,
            'id' | 'type' | 'name' | 'notes' | 'description' | 'dateUpdated'
          > & {
              lastEditedBy?: Maybe<
                { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
              >;
              retailSpaceConfiguration?: Maybe<
                { __typename?: 'RetailSpace' } & Pick<
                  RetailSpace,
                  'airTreatment' | 'specifications' | 'wealthClass' | 'commonRooms'
                > & {
                    measurements?: Maybe<
                      { __typename?: 'RetailMeasurements' } & Pick<
                        RetailMeasurements,
                        'surface' | 'salesFloorArea' | 'frontWidth' | 'inUnitsFrom' | 'amountOfFloors'
                      >
                    >;
                    prices?: Maybe<
                      { __typename?: 'GoodWillPrices' } & Pick<
                        GoodWillPrices,
                        | 'priceInventoryGoodwill'
                        | 'vatRate'
                        | 'priceInventoryGoodwillVat'
                        | 'priceInventoryGoodwillIncludedVat'
                        | 'notes'
                      >
                    >;
                    retailerAssociationContribution?: Maybe<
                      { __typename?: 'RetailerAssociationContribution' } & Pick<
                        RetailerAssociationContribution,
                        'contribution' | 'termsOfCosts' | 'vatPercentage' | 'vatTaxedContribution' | 'notes'
                      >
                    >;
                  }
              >;
              leisureSpaceConfiguration?: Maybe<
                { __typename?: 'LeisureSpace' } & Pick<LeisureSpace, 'specifications' | 'services'> & {
                    measurements?: Maybe<
                      { __typename?: 'LeisureMeasurements' } & Pick<
                        LeisureMeasurements,
                        'surface' | 'numberOfPitches' | 'numberOfStays' | 'capacityOfPersons'
                      >
                    >;
                    prices?: Maybe<
                      { __typename?: 'GoodWillPrices' } & Pick<
                        GoodWillPrices,
                        | 'priceInventoryGoodwill'
                        | 'vatRate'
                        | 'priceInventoryGoodwillVat'
                        | 'priceInventoryGoodwillIncludedVat'
                        | 'notes'
                      >
                    >;
                  }
              >;
              horecaSpaceConfiguration?: Maybe<
                { __typename?: 'HorecaSpace' } & Pick<
                  HorecaSpace,
                  'type' | 'notes' | 'specifications' | 'wealthClass' | 'legalForm'
                > & {
                    measurements?: Maybe<
                      { __typename?: 'HorecaMeasurements' } & Pick<
                        HorecaMeasurements,
                        | 'surface'
                        | 'salesFloorArea'
                        | 'amountOfFloors'
                        | 'amountOfRooms'
                        | 'currentNumberOfSeats'
                        | 'housingArea'
                      >
                    >;
                    prices?: Maybe<
                      { __typename?: 'HorecaPrices' } & Pick<
                        HorecaPrices,
                        | 'priceInventoryGoodwill'
                        | 'vatRate'
                        | 'priceInventoryGoodwillVat'
                        | 'priceInventoryGoodwillIncludedVat'
                        | 'revenueLastFiscalYear'
                        | 'rentalIncomeHomeYear'
                        | 'notes'
                      >
                    >;
                  }
              >;
              businessSpaceConfiguration?: Maybe<
                { __typename?: 'BusinessSpace' } & Pick<BusinessSpace, 'airTreatment' | 'services'> & {
                    measurements?: Maybe<
                      { __typename?: 'BusinessSpaceMeasurements' } & Pick<
                        BusinessSpaceMeasurements,
                        'surface' | 'freeHeight' | 'freeSpan' | 'floorLoad' | 'inUnitsFrom' | 'amountOfFloors'
                      >
                    >;
                    prices?: Maybe<
                      { __typename?: 'BogPrices' } & Pick<BogPrices, 'price' | 'vatRate' | 'priceVat' | 'priceIncVat'>
                    >;
                  }
              >;
              officeSpaceConfiguration?: Maybe<
                { __typename?: 'OfficeSpace' } & Pick<
                  OfficeSpace,
                  'airTreatment' | 'services' | 'turnKey' | 'commonRooms'
                > & {
                    measurements?: Maybe<
                      { __typename?: 'OfficeSpaceMeasurements' } & Pick<
                        OfficeSpaceMeasurements,
                        | 'length'
                        | 'width'
                        | 'height'
                        | 'surface'
                        | 'volume'
                        | 'measurementsCertificateAvailable'
                        | 'inUnitsFrom'
                        | 'amountOfFloors'
                      >
                    >;
                    prices?: Maybe<
                      { __typename?: 'BogPrices' } & Pick<BogPrices, 'price' | 'vatRate' | 'priceVat' | 'priceIncVat'>
                    >;
                  }
              >;
              socialRealEstateSpaceConfiguration?: Maybe<
                { __typename?: 'SocialRealEstateSpace' } & Pick<
                  SocialRealEstateSpace,
                  'type' | 'notesAboutType' | 'destinationType' | 'specifications' | 'services'
                > & {
                    measurements?: Maybe<
                      { __typename?: 'SocialRealEstateSpaceMeasurements' } & Pick<
                        SocialRealEstateSpaceMeasurements,
                        'surface' | 'numberOfCareUnits' | 'numberOfSeats'
                      >
                    >;
                    prices?: Maybe<
                      { __typename?: 'SocialRealEstateSpacePrices' } & Pick<
                        SocialRealEstateSpacePrices,
                        'vatRate' | 'notes'
                      >
                    >;
                  }
              >;
              terrainConfiguration?: Maybe<
                { __typename?: 'Terrain' } & Pick<Terrain, 'specifications' | 'typeOfPavement'> & {
                    terrainSpecifications?: Maybe<
                      { __typename?: 'TerrainSpecifications' } & Pick<
                        TerrainSpecifications,
                        | 'surface'
                        | 'buildingHeightTerrain'
                        | 'extensionTerrainPercent'
                        | 'extensionTerrainM2'
                        | 'pavedPercentage'
                      >
                    >;
                    prices?: Maybe<
                      { __typename?: 'BogPrices' } & Pick<BogPrices, 'price' | 'vatRate' | 'priceVat' | 'priceIncVat'>
                    >;
                  }
              >;
              storageConfiguration?: Maybe<
                { __typename?: 'Storage' } & Pick<Storage, 'type' | 'notes'> & {
                    measurements?: Maybe<
                      { __typename?: 'StorageMeasurements' } & Pick<
                        StorageMeasurements,
                        'length' | 'width' | 'height' | 'surface' | 'volume'
                      >
                    >;
                  }
              >;
              images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>>;
            }
        >
      >;
    };
};

export type PimCadastreQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimCadastreQuery = { __typename?: 'Query' } & {
  getPimCadastre: { __typename?: 'PimCadastre' } & Pick<PimCadastre, 'id'> & {
      cadastre?: Maybe<
        Array<
          { __typename?: 'Cadastre' } & Pick<
            Cadastre,
            'id' | 'description' | 'mapsDescription' | 'type' | 'dateCreated' | 'dateUpdated'
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
              lastEditedBy?: Maybe<
                { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
              >;
            }
        >
      >;
    };
};

export type PimGeneralQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

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
    | 'propertyType'
    | 'showExtraAddress'
    | 'showIdentificationNumber'
    | 'attentionNote'
    | 'showAttentionNote'
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
      apartmentGeneral?: Maybe<
        { __typename?: 'ApartmentGeneral' } & {
          propertyDetails?: Maybe<
            { __typename?: 'ApartmentPropertyDetails' } & Pick<
              ApartmentPropertyDetails,
              | 'groundfloorApartmentStartsOnFloor'
              | 'amountOfTotalFloors'
              | 'notes'
              | 'apartmentType'
              | 'characteristicsApartment'
            >
          >;
        }
      >;
      bogGeneral?: Maybe<
        { __typename?: 'BogGeneral' } & Pick<
          BogGeneral,
          'type' | 'characteristics' | 'startsOnFloor' | 'totalFloors' | 'notes'
        >
      >;
      aogGeneral?: Maybe<
        { __typename?: 'AogGeneral' } & Pick<AogGeneral, 'generalType' | 'additionalPosition'> & {
            houseLot?: Maybe<
              { __typename?: 'AogHouseLot' } & Pick<AogHouseLot, 'length' | 'width' | 'surface' | 'amountOfHouses'>
            >;
            specifications?: Maybe<
              Array<{ __typename?: 'AogSpecifications' } & Pick<AogSpecifications, 'type' | 'notes'>>
            >;
          }
      >;
      parkingGeneral?: Maybe<
        { __typename?: 'ParkingLotGeneral' } & {
          type?: Maybe<{ __typename?: 'TypeOfParking' } & Pick<TypeOfParking, 'type' | 'parkingNumber' | 'notes'>>;
          measurements?: Maybe<
            { __typename?: 'ParkingMeasurements' } & Pick<
              ParkingMeasurements,
              'length' | 'width' | 'surface' | 'capacity' | 'height' | 'volume'
            >
          >;
          specifications?: Maybe<
            { __typename?: 'ParkingLotSpecifications' } & Pick<ParkingLotSpecifications, 'type' | 'notes'>
          >;
          material?: Maybe<{ __typename?: 'ParkingMaterial' } & Pick<ParkingMaterial, 'type' | 'notes'>>;
          insulation?: Maybe<{ __typename?: 'ParkingInsulation' } & Pick<ParkingInsulation, 'type' | 'notes'>>;
        }
      >;
      buildingPlotGeneral?: Maybe<
        { __typename?: 'BuildingPlotGeneral' } & {
          propertyDetails?: Maybe<
            { __typename?: 'BuildingPlotPropertyDetails' } & Pick<
              BuildingPlotPropertyDetails,
              'plotReadyForConstruction' | 'buildingPlotNumber' | 'notes' | 'soilType'
            > & {
                measurements?: Maybe<
                  { __typename?: 'RectangleMeasurement' } & Pick<RectangleMeasurement, 'length' | 'width' | 'surface'>
                >;
              }
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
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
    };
};

export type PimWithSameAddressQueryVariables = Exact<{
  input: PimWithSameAddressInput;
}>;

export type PimWithSameAddressQuery = { __typename?: 'Query' } & {
  getPimsGeneralWithSameAddress: { __typename?: 'GeneralPimSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
    items?: Maybe<Array<{ __typename?: 'PimGeneral' } & Pick<PimGeneral, 'id'>>>;
  };
};

export type PimInsideQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimInsideQuery = { __typename?: 'Query' } & {
  getPimInside: { __typename?: 'PimInside' } & Pick<PimInside, 'id'> & {
      floors?: Maybe<
        Array<
          { __typename?: 'Floor' } & Pick<Floor, 'id' | 'level' | 'floorType' | 'floorDescription' | 'dateUpdated'> & {
              lastEditedBy?: Maybe<
                { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
              >;
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
            lastEditedBy?: Maybe<
              { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
            >;
          }
      >;
    };
};

export type PimLocationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimLocationQuery = { __typename?: 'Query' } & {
  getPimLocation: { __typename?: 'PimLocation' } & Pick<
    PimLocation,
    'id' | 'latitude' | 'longitude' | 'type' | 'notes' | 'description' | 'dateUpdated'
  > & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
      goodToKnows?: Maybe<
        Array<{ __typename?: 'GoodToKnow' } & Pick<GoodToKnow, 'type' | 'distance' | 'units' | 'checked'>>
      >;
    };
};

export type PimMediaQueryVariables = Exact<{
  id: Scalars['ID'];
  picturesSort?: Maybe<Sort>;
}>;

export type PimMediaQuery = { __typename?: 'Query' } & {
  getPimMedia: { __typename?: 'PimMedia' } & Pick<PimMedia, 'id' | 'description' | 'dateUpdated'> & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
      pictures?: Maybe<
        Array<
          { __typename?: 'Picture' } & Pick<
            Picture,
            'id' | 'name' | 'description' | 'type' | 'dateUpdated' | 'isMainPicture'
          > & { file?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'fileName'>> }
        >
      >;
      mediaLinks?: Maybe<Array<{ __typename?: 'MediaLink' } & Pick<MediaLink, 'id' | 'name' | 'type' | 'url'>>>;
      textChapters?: Maybe<Array<{ __typename?: 'TextChapter' } & Pick<TextChapter, 'id' | 'name' | 'type' | 'text'>>>;
      usps?: Maybe<Array<{ __typename?: 'Usp' } & Pick<Usp, 'id' | 'name' | 'description' | 'type'>>>;
      tags?: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'id' | 'name' | 'description' | 'type'>>>;
    };
};

export type PimMetersQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimMetersQuery = { __typename?: 'Query' } & {
  getPimServices: { __typename?: 'PimServices' } & {
    metersMeta?: Maybe<
      { __typename?: 'MetersMeta' } & Pick<MetersMeta, 'description'> & {
          Water?: Maybe<
            { __typename?: 'MetersSharedData' } & Pick<MetersSharedData, 'description' | 'dateUpdated'> & {
                lastEditedBy?: Maybe<
                  { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
                >;
              }
          >;
          Gas?: Maybe<
            { __typename?: 'MetersSharedData' } & Pick<MetersSharedData, 'description' | 'dateUpdated'> & {
                lastEditedBy?: Maybe<
                  { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
                >;
              }
          >;
          Electric?: Maybe<
            { __typename?: 'MetersSharedData' } & Pick<MetersSharedData, 'description' | 'dateUpdated'> & {
                lastEditedBy?: Maybe<
                  { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
                >;
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
  };
};

export type MovePimDataQueryVariables = Exact<{ [key: string]: never }>;

export type MovePimDataQuery = { __typename?: 'Query' } & {
  properties: { __typename?: 'PimListSearchResult' } & {
    items?: Maybe<Array<{ __typename?: 'ListPim' } & Pick<ListPim, 'id' | 'street'>>>;
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  bog: { __typename?: 'PimListSearchResult' } & {
    items?: Maybe<Array<{ __typename?: 'ListPim' } & Pick<ListPim, 'id' | 'street'>>>;
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  aog: { __typename?: 'PimListSearchResult' } & {
    items?: Maybe<Array<{ __typename?: 'ListPim' } & Pick<ListPim, 'id' | 'street'>>>;
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  nc: { __typename?: 'NcpListSearchResult' } & {
    items?: Maybe<Array<{ __typename?: 'ListNcp' } & Pick<ListNcp, 'id' | 'name'>>>;
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  relet: { __typename?: 'NcpListSearchResult' } & {
    items?: Maybe<Array<{ __typename?: 'ListNcp' } & Pick<ListNcp, 'id' | 'name'>>>;
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type PimOutsideQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimOutsideQuery = { __typename?: 'Query' } & {
  getPimOutside: { __typename?: 'PimOutside' } & Pick<PimOutside, 'id' | 'dateUpdated'> & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
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
              lastEditedBy?: Maybe<
                { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
              >;
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

export type PimPricingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimPricingQuery = { __typename?: 'Query' } & {
  getPricing: { __typename?: 'PimPrices' } & Pick<PimPrices, 'id' | 'costsDescription' | 'dateUpdated'> & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
      pricing?: Maybe<
        { __typename?: 'Pricing' } & Pick<Pricing, 'description' | 'dateUpdated'> & {
            lastEditedBy?: Maybe<
              { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
            >;
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
        > & {
            lastEditedBy?: Maybe<
              { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
            >;
          }
      >;
    };
};

export type PimServicesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimServicesQuery = { __typename?: 'Query' } & {
  getPimServices: { __typename?: 'PimServices' } & Pick<PimServices, 'description' | 'dateUpdated'> & {
      lastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
      metersMeta?: Maybe<
        { __typename?: 'MetersMeta' } & {
          Water?: Maybe<
            { __typename?: 'MetersSharedData' } & Pick<MetersSharedData, 'description' | 'dateUpdated'> & {
                lastEditedBy?: Maybe<
                  { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
                >;
              }
          >;
          Gas?: Maybe<
            { __typename?: 'MetersSharedData' } & Pick<MetersSharedData, 'description' | 'dateUpdated'> & {
                lastEditedBy?: Maybe<
                  { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
                >;
              }
          >;
          Electric?: Maybe<
            { __typename?: 'MetersSharedData' } & Pick<MetersSharedData, 'description' | 'dateUpdated'> & {
                lastEditedBy?: Maybe<
                  { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
                >;
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

export type PimSpecificationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimSpecificationQuery = { __typename?: 'Query' } & {
  getPimSpecification: { __typename?: 'PimSpecification' } & Pick<
    PimSpecification,
    'linkedPropertiesDescription' | 'inspectionsDescription' | 'linkedPropertiesDateUpdated' | 'inspectionsDateUpdated'
  > & {
      linkedPropertiesLastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
      inspectionsLastEditedBy?: Maybe<
        { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
      >;
      specification?: Maybe<
        { __typename?: 'Specification' } & Pick<Specification, 'description' | 'dateUpdated'> & {
            lastEditedBy?: Maybe<
              { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
            >;
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
            lastEditedBy?: Maybe<
              { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
            >;
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

export type PimInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimInfoQuery = { __typename?: 'Query' } & {
  getPim?: Maybe<
    { __typename?: 'Pim' } & Pick<
      Pim,
      | 'street'
      | 'houseNumberPrefix'
      | 'houseNumber'
      | 'houseNumberAddition'
      | 'constructionNumber'
      | 'constructionNumberPrefix'
      | 'constructionNumberAddition'
      | 'city'
      | 'developmentType'
      | 'status'
      | 'salePrice'
      | 'rentPrice'
      | 'description'
      | 'livingArea'
      | 'propertyType'
      | 'attentionNote'
      | 'completeness'
      | 'archived'
    > & {
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
        parkingGeneral?: Maybe<
          { __typename?: 'ParkingLotGeneral' } & {
            type?: Maybe<{ __typename?: 'TypeOfParking' } & Pick<TypeOfParking, 'type' | 'parkingNumber' | 'notes'>>;
            measurements?: Maybe<
              { __typename?: 'ParkingMeasurements' } & Pick<
                ParkingMeasurements,
                'length' | 'width' | 'surface' | 'capacity' | 'height' | 'volume'
              >
            >;
            specifications?: Maybe<
              { __typename?: 'ParkingLotSpecifications' } & Pick<ParkingLotSpecifications, 'type' | 'notes'>
            >;
            material?: Maybe<{ __typename?: 'ParkingMaterial' } & Pick<ParkingMaterial, 'type' | 'notes'>>;
            insulation?: Maybe<{ __typename?: 'ParkingInsulation' } & Pick<ParkingInsulation, 'type' | 'notes'>>;
          }
        >;
        bogGeneral?: Maybe<
          { __typename?: 'BogGeneral' } & Pick<
            BogGeneral,
            'type' | 'characteristics' | 'startsOnFloor' | 'totalFloors' | 'notes'
          >
        >;
        aogGeneral?: Maybe<
          { __typename?: 'AogGeneral' } & Pick<AogGeneral, 'generalType' | 'additionalPosition'> & {
              houseLot?: Maybe<
                { __typename?: 'AogHouseLot' } & Pick<AogHouseLot, 'length' | 'width' | 'surface' | 'amountOfHouses'>
              >;
              specifications?: Maybe<
                Array<{ __typename?: 'AogSpecifications' } & Pick<AogSpecifications, 'type' | 'notes'>>
              >;
            }
        >;
        houseOutside?: Maybe<
          { __typename?: 'HouseOutside' } & Pick<HouseOutside, 'notes'> & {
              generalInformation?: Maybe<
                { __typename?: 'GeneralInformation' } & Pick<GeneralInformation, 'qualityInformation' | 'notes'> & {
                    images?: Maybe<
                      Array<
                        { __typename?: 'File' } & Pick<
                          File,
                          | 'id'
                          | 'fileName'
                          | 'description'
                          | 'status'
                          | 'fileType'
                          | 'permission'
                          | 'key'
                          | 'signedUrl'
                          | 'url'
                          | 'bucket'
                        >
                      >
                    >;
                  }
              >;
              foundation?: Maybe<
                { __typename?: 'Foundation' } & {
                  type?: Maybe<
                    { __typename?: 'FoundationTypeInformations' } & Pick<FoundationTypeInformations, 'type' | 'notes'>
                  >;
                  material?: Maybe<
                    { __typename?: 'FoundationMaterialInformations' } & Pick<
                      FoundationMaterialInformations,
                      'type' | 'notes'
                    >
                  >;
                }
              >;
              propertyRelated?: Maybe<
                { __typename?: 'PropertyRelated' } & Pick<PropertyRelated, 'items' | 'notes'> & {
                    images?: Maybe<
                      Array<
                        { __typename?: 'File' } & Pick<
                          File,
                          | 'id'
                          | 'fileName'
                          | 'description'
                          | 'status'
                          | 'fileType'
                          | 'permission'
                          | 'key'
                          | 'signedUrl'
                          | 'url'
                          | 'bucket'
                        >
                      >
                    >;
                  }
              >;
              roofInformation?: Maybe<
                { __typename?: 'RoofInformation' } & Pick<RoofInformation, 'yearOfRoof'> & {
                    type?: Maybe<{ __typename?: 'RoofType' } & Pick<RoofType, 'name' | 'notes'>>;
                    material?: Maybe<{ __typename?: 'RoofMaterial' } & Pick<RoofMaterial, 'name' | 'notes'>>;
                    insulation?: Maybe<{ __typename?: 'RoofInsulation' } & Pick<RoofInsulation, 'name' | 'notes'>>;
                    images?: Maybe<
                      Array<
                        { __typename?: 'File' } & Pick<
                          File,
                          | 'id'
                          | 'fileName'
                          | 'description'
                          | 'status'
                          | 'fileType'
                          | 'permission'
                          | 'key'
                          | 'signedUrl'
                          | 'url'
                          | 'bucket'
                        >
                      >
                    >;
                    gutter?: Maybe<{ __typename?: 'GutterInformations' } & Pick<GutterInformations, 'type' | 'notes'>>;
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
        floors?: Maybe<
          Array<
            { __typename?: 'Floor' } & Pick<Floor, 'id' | 'floorDescription' | 'level' | 'floorType'> & {
                spaces?: Maybe<
                  Array<
                    { __typename?: 'Space' } & Pick<
                      Space,
                      'id' | 'spaceType' | 'spaceName' | 'extraRoomPossibility'
                    > & {
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
          { __typename?: 'InsideGeneral' } & Pick<InsideGeneral, 'notes'> & {
              windows?: Maybe<{ __typename?: 'InsideWindows' } & Pick<InsideWindows, 'types' | 'notes'>>;
              extension?: Maybe<{ __typename?: 'Extension' } & Pick<Extension, 'yearOfExtension' | 'notes'>>;
              renovation?: Maybe<{ __typename?: 'Renovation' } & Pick<Renovation, 'yearOfRenovation'>>;
            }
        >;
        cadastre?: Maybe<
          Array<
            { __typename?: 'Cadastre' } & Pick<Cadastre, 'id' | 'description' | 'mapsDescription' | 'type'> & {
                maps?: Maybe<
                  Array<
                    { __typename?: 'CadastreMap' } & Pick<CadastreMap, 'id' | 'mapName' | 'name' | 'type'> & {
                        file?: Maybe<
                          { __typename?: 'File' } & Pick<
                            File,
                            | 'id'
                            | 'fileName'
                            | 'description'
                            | 'status'
                            | 'fileType'
                            | 'permission'
                            | 'key'
                            | 'signedUrl'
                            | 'url'
                            | 'bucket'
                          >
                        >;
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
                    | 'ownershipChoice'
                    | 'ownershipType'
                  > & {
                      lease?: Maybe<
                        { __typename?: 'Lease' } & Pick<
                          Lease,
                          'leaseholder' | 'information' | 'duration' | 'yearlyPrice' | 'endDate'
                        >
                      >;
                      boughtOff?: Maybe<
                        { __typename?: 'BoughtOff' } & Pick<BoughtOff, 'date' | 'perpetually' | 'notes'>
                      >;
                    }
                >;
              }
          >
        >;
        pictures?: Maybe<
          Array<
            { __typename?: 'Picture' } & Pick<Picture, 'id' | 'description' | 'type' | 'name' | 'isMainPicture'> & {
                file?: Maybe<
                  { __typename?: 'File' } & Pick<
                    File,
                    | 'id'
                    | 'fileName'
                    | 'description'
                    | 'fileType'
                    | 'permission'
                    | 'key'
                    | 'signedUrl'
                    | 'url'
                    | 'bucket'
                  >
                >;
              }
          >
        >;
        mainPicture?: Maybe<
          { __typename?: 'Picture' } & Pick<Picture, 'id' | 'description' | 'type' | 'name'> & {
              file?: Maybe<
                { __typename?: 'File' } & Pick<
                  File,
                  'id' | 'fileName' | 'description' | 'fileType' | 'permission' | 'key' | 'signedUrl' | 'url' | 'bucket'
                >
              >;
            }
        >;
      }
  >;
};

export type PimOverallInfoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PimOverallInfoQuery = { __typename?: 'Query' } & {
  getPimGeneral: { __typename?: 'PimGeneral' } & Pick<
    PimGeneral,
    'street' | 'houseNumber' | 'postalCode' | 'city' | 'propertyType'
  >;
  getPimInside: { __typename?: 'PimInside' } & {
    floors?: Maybe<Array<{ __typename?: 'Floor' } & Pick<Floor, 'id' | 'floorType' | 'level'>>>;
    bogSpaces?: Maybe<Array<{ __typename?: 'BogSpace' } & Pick<BogSpace, 'id' | 'type'>>>;
    aogSpaces?: Maybe<
      Array<
        { __typename?: 'AogSpace' } & Pick<AogSpace, 'id' | 'type' | 'name'> & {
            animalsConfiguration?: Maybe<{ __typename?: 'Animals' } & Pick<Animals, 'type'>>;
            groundConfiguration?: Maybe<{ __typename?: 'GroundSpace' } & Pick<GroundSpace, 'typeOfLooseGround'>>;
            buildingsConfiguration?: Maybe<{ __typename?: 'BuildingsSpace' } & Pick<BuildingsSpace, 'buildingType'>>;
            installationsConfiguration?: Maybe<{ __typename?: 'Installations' } & Pick<Installations, 'type'>>;
          }
      >
    >;
  };
  getPimOutside: { __typename?: 'PimOutside' } & {
    outsideFeatures?: Maybe<
      Array<
        { __typename?: 'OutsideFeature' } & Pick<OutsideFeature, 'id' | 'type' | 'description'> & {
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
                    images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>>>;
                  })
              | ({ __typename?: 'GarageFeature' } & Pick<
                  GarageFeature,
                  'main' | 'attached' | 'attic' | 'secondaryWindows' | 'materials' | 'notes'
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
                    images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>>>;
                  })
              | ({ __typename?: 'StorageFeature' } & Pick<
                  StorageFeature,
                  'main' | 'attached' | 'materials' | 'secondaryWindows' | 'notes'
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
                    images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>>>;
                  })
              | ({ __typename?: 'TerrainFeature' } & Pick<TerrainFeature, 'parking' | 'notes'> & {
                    measurement?: Maybe<
                      { __typename?: 'RectangleMeasurement' } & Pick<
                        RectangleMeasurement,
                        'length' | 'width' | 'surface'
                      >
                    >;
                    images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>>>;
                  })
              | ({ __typename?: 'ParkingLotFeature' } & Pick<
                  ParkingLotFeature,
                  'number' | 'price' | 'cost' | 'notes'
                > & { images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'id' | 'url'>>> })
            >;
          }
      >
    >;
  };
  getPimCadastre: { __typename?: 'PimCadastre' } & {
    cadastre?: Maybe<Array<{ __typename?: 'Cadastre' } & Pick<Cadastre, 'id' | 'type'>>>;
  };
  getPimServices: { __typename?: 'PimServices' } & {
    meters?: Maybe<Array<{ __typename?: 'Meter' } & Pick<Meter, 'id' | 'type'>>>;
  };
  getPimMedia: { __typename?: 'PimMedia' } & Pick<PimMedia, 'id'> & {
      pictures?: Maybe<
        Array<
          { __typename?: 'Picture' } & Pick<Picture, 'isMainPicture' | 'id'> & {
              file?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'url'>>;
            }
        >
      >;
    };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<
    { __typename?: 'Profile' } & Pick<
      Profile,
      'id' | 'firstName' | 'lastName' | 'email' | 'adminSettings' | 'isActive' | 'isAdmin' | 'language'
    > & {
        company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id'>>;
        image?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'url'>>;
        teams?: Maybe<Array<{ __typename?: 'ProfileTeam' } & Pick<ProfileTeam, 'id' | 'name'>>>;
      }
  >;
};

export type GetUsersQueryVariables = Exact<{
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
}>;

export type GetUsersQuery = { __typename?: 'Query' } & {
  getAllProfiles: { __typename?: 'ProfileSearchResult' } & {
    items?: Maybe<
      Array<
        { __typename?: 'Profile' } & Pick<
          Profile,
          'id' | 'firstName' | 'lastName' | 'email' | 'functionDescription' | 'adminSettings' | 'isActive' | 'isAdmin'
        > & {
            image?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'url'>>;
            teams?: Maybe<Array<{ __typename?: 'ProfileTeam' } & Pick<ProfileTeam, 'id' | 'name'>>>;
          }
      >
    >;
  };
};

export type GetUsersCountQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersCountQuery = { __typename?: 'Query' } & {
  activeCount: { __typename?: 'ProfileSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
  inActiveCount: { __typename?: 'ProfileSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type GetUserProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetUserProfileQuery = { __typename?: 'Query' } & {
  getProfile?: Maybe<
    { __typename?: 'Profile' } & Pick<
      Profile,
      | 'id'
      | 'firstName'
      | 'lastName'
      | 'email'
      | 'gender'
      | 'dateOfBirth'
      | 'functionDescription'
      | 'initials'
      | 'costUnit'
      | 'hideOnMemos'
      | 'isAccountmanager'
      | 'adminSettings'
      | 'isAdmin'
      | 'isActive'
      | 'language'
    > & {
        image?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'url'>>;
        teams?: Maybe<
          Array<
            { __typename?: 'ProfileTeam' } & Pick<
              ProfileTeam,
              'id' | 'name' | 'createPermission' | 'readPermission' | 'updatePermission' | 'deletePermission'
            >
          >
        >;
        emailAddresses?: Maybe<
          Array<
            { __typename?: 'EmailAddress' } & Pick<
              EmailAddress,
              'id' | 'emailAddress' | 'emailAddressType' | 'isPublic'
            >
          >
        >;
        phoneNumbers?: Maybe<
          Array<
            { __typename?: 'PhoneNumber' } & Pick<PhoneNumber, 'id' | 'phoneNumber' | 'phoneNumberType' | 'isPublic'>
          >
        >;
        socialMediaLinks?: Maybe<
          Array<
            { __typename?: 'SocialMediaLink' } & Pick<
              SocialMediaLink,
              'id' | 'socialMediaLink' | 'socialMediaLinkType' | 'isPublic'
            >
          >
        >;
        company?: Maybe<{ __typename?: 'Company' } & Pick<Company, 'id' | 'name'>>;
      }
  >;
};

export type GetMyTeamMembersQueryVariables = Exact<{
  from?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;

export type GetMyTeamMembersQuery = { __typename?: 'Query' } & {
  members: { __typename?: 'ProfileSearchResult' } & {
    items?: Maybe<
      Array<
        { __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName' | 'isAdmin' | 'email'> & {
            image?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'url'>>;
          }
      >
    >;
  };
};

export type ProjectPhasesQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  ncpId?: Maybe<Scalars['ID']>;
  from: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
}>;

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

export type GetSalesListQueryVariables = Exact<{
  label: SalesLabel;
  status: SalesStatus;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
}>;

export type GetSalesListQuery = { __typename?: 'Query' } & {
  getSalesList?: Maybe<
    { __typename?: 'SalesSearchResult' } & {
      items?: Maybe<
        Array<
          { __typename?: 'Sales' } & Pick<
            Sales,
            | 'id'
            | 'label'
            | 'status'
            | 'createdAt'
            | 'updatedAt'
            | 'name'
            | 'type'
            | 'extraInfo'
            | 'attentionNote'
            | 'date'
          >
        >
      >;
    }
  >;
};

export type SearchQueryVariables = Exact<{
  input: SearchInput;
}>;

export type SearchQuery = { __typename?: 'Query' } & {
  search?: Maybe<
    { __typename?: 'SearchResult' } & {
      users?: Maybe<
        Array<
          { __typename?: 'Profile' } & Pick<
            Profile,
            'id' | 'firstName' | 'lastName' | 'email' | 'functionDescription' | 'adminSettings' | 'isActive' | 'isAdmin'
          > & {
              image?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'url'>>;
              teams?: Maybe<Array<{ __typename?: 'ProfileTeam' } & Pick<ProfileTeam, 'id' | 'name'>>>;
            }
        >
      >;
      emails?: Maybe<
        Array<
          { __typename?: 'Profile' } & Pick<
            Profile,
            'id' | 'firstName' | 'lastName' | 'email' | 'functionDescription' | 'adminSettings' | 'isActive' | 'isAdmin'
          > & {
              image?: Maybe<{ __typename?: 'File' } & Pick<File, 'id' | 'key' | 'url'>>;
              teams?: Maybe<Array<{ __typename?: 'ProfileTeam' } & Pick<ProfileTeam, 'id' | 'name'>>>;
            }
        >
      >;
      crms?: Maybe<
        Array<
          { __typename?: 'CrmListItem' } & Pick<
            CrmListItem,
            'id' | 'type' | 'firstName' | 'initials' | 'lastName' | 'phoneNumber' | 'email'
          > & { avatar?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>> }
        >
      >;
      pims?: Maybe<
        Array<
          { __typename?: 'Pim' } & Pick<
            Pim,
            'id' | 'street' | 'houseNumber' | 'district' | 'city' | 'state' | 'country' | 'county' | 'propertyType'
          >
        >
      >;
      ncps?: Maybe<
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
            | 'projectType'
          > & {
              logoPicture?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
              mainPicture?: Maybe<
                { __typename?: 'Picture' } & Pick<Picture, 'id'> & {
                    file?: Maybe<{ __typename?: 'File' } & Pick<File, 'url'>>;
                  }
              >;
            }
        >
      >;
      teams?: Maybe<
        Array<
          { __typename?: 'Team' } & Pick<Team, 'id' | 'name'> & {
              profileMembers?: Maybe<Array<{ __typename?: 'TeamMember' } & Pick<TeamMember, 'id'>>>;
            }
        >
      >;
      sales?: Maybe<
        Array<
          { __typename?: 'Sales' } & Pick<
            Sales,
            | 'id'
            | 'label'
            | 'status'
            | 'createdAt'
            | 'updatedAt'
            | 'name'
            | 'type'
            | 'extraInfo'
            | 'attentionNote'
            | 'date'
          >
        >
      >;
    }
  >;
};

export type SettingInfoQueryVariables = Exact<{ [key: string]: never }>;

export type SettingInfoQuery = { __typename?: 'Query' } & {
  getTeams?: Maybe<
    { __typename?: 'TeamSearchResult' } & { items?: Maybe<Array<{ __typename?: 'Team' } & Pick<Team, 'id' | 'name'>>> }
  >;
};

export type GetTaskLabelsQueryVariables = Exact<{
  id: Scalars['ID'];
  properties?: Maybe<Array<LabelProperty> | LabelProperty>;
}>;

export type GetTaskLabelsQuery = { __typename?: 'Query' } & {
  getTaskLabels?: Maybe<Array<{ __typename?: 'Label' } & Pick<Label, 'id' | 'property' | 'icon' | 'text'>>>;
};

export type GetTaskQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetTaskQuery = { __typename?: 'Query' } & {
  getTask?: Maybe<
    { __typename?: 'Task' } & Pick<
      Task,
      | 'id'
      | 'taskIndex'
      | 'title'
      | 'assignee'
      | 'startDate'
      | 'deadline'
      | 'priority'
      | 'label'
      | 'status'
      | 'description'
      | 'originalEstimate'
      | 'resultIntern'
      | 'resultClient'
      | 'dateUpdated'
    > & {
        logs?: Maybe<Array<{ __typename?: 'TaskLog' } & Pick<TaskLog, 'timeSpent' | 'dateStarted' | 'notes'>>>;
        subTasks?: Maybe<
          Array<
            { __typename?: 'Subtask' } & Pick<Subtask, 'id' | 'title' | 'status' | 'dateUpdated'> & {
                lastEditedBy?: Maybe<
                  { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
                >;
              }
          >
        >;
        lastEditedBy?: Maybe<
          { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
        >;
      }
  >;
};

export type GetTasksQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  assignees?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  deadlines?: Maybe<Array<DateRange> | DateRange>;
  sortColumn: Scalars['String'];
  sortDirection: SortDirection;
}>;

export type GetTasksQuery = { __typename?: 'Query' } & {
  getTasks?: Maybe<
    { __typename?: 'TaskSearchResult' } & {
      items?: Maybe<
        Array<
          { __typename?: 'Task' } & Pick<
            Task,
            | 'id'
            | 'taskIndex'
            | 'title'
            | 'assignee'
            | 'startDate'
            | 'deadline'
            | 'priority'
            | 'label'
            | 'status'
            | 'description'
            | 'originalEstimate'
            | 'resultIntern'
            | 'resultClient'
            | 'dateUpdated'
          > & {
              logs?: Maybe<Array<{ __typename?: 'TaskLog' } & Pick<TaskLog, 'timeSpent' | 'dateStarted' | 'notes'>>>;
              lastEditedBy?: Maybe<
                { __typename?: 'LastUpdatedProfile' } & Pick<LastUpdatedProfile, 'id' | 'firstName' | 'lastName'>
              >;
            }
        >
      >;
    }
  >;
};

export type GetTasksFullSummaryQueryVariables = Exact<{
  assignees?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;

export type GetTasksFullSummaryQuery = { __typename?: 'Query' } & {
  getTasksFullSummary?: Maybe<
    { __typename?: 'TaskFullSummaryResult' } & Pick<TaskFullSummaryResult, 'today' | 'nextWeek' | 'future' | 'overdue'>
  >;
};

export type GetTasksSummaryByStatusQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  assignees?: Maybe<Array<Scalars['ID']> | Scalars['ID']>;
  deadlines?: Maybe<Array<DateRange> | DateRange>;
}>;

export type GetTasksSummaryByStatusQuery = { __typename?: 'Query' } & {
  getTasksSummaryByStatus?: Maybe<
    { __typename?: 'TaskSummaryByStatusResult' } & Pick<
      TaskSummaryByStatusResult,
      'todo' | 'inProgress' | 'blocked' | 'done'
    >
  >;
};

export type GetTeamsQueryVariables = Exact<{
  from?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
}>;

export type GetTeamsQuery = { __typename?: 'Query' } & {
  getTeams?: Maybe<
    { __typename?: 'TeamSearchResult' } & {
      items?: Maybe<
        Array<
          { __typename?: 'Team' } & Pick<Team, 'id' | 'name' | 'description' | 'teamRights'> & {
              profileMembers?: Maybe<
                Array<
                  { __typename?: 'TeamMember' } & Pick<TeamMember, 'id'> & {
                      user: { __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName' | 'isActive'>;
                    }
                >
              >;
              company: { __typename?: 'Company' } & Pick<Company, 'id' | 'name'>;
            }
        >
      >;
    }
  >;
};

export type GetTeamDetailsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetTeamDetailsQuery = { __typename?: 'Query' } & {
  getTeamDetails?: Maybe<
    { __typename?: 'Team' } & Pick<Team, 'id' | 'name' | 'teamRights'> & {
        company: { __typename?: 'Company' } & Pick<Company, 'id' | 'name'>;
        profileMembers?: Maybe<
          Array<
            { __typename?: 'TeamMember' } & Pick<
              TeamMember,
              'id' | 'notes' | 'createPermission' | 'readPermission' | 'updatePermission' | 'deletePermission'
            > & {
                user: { __typename?: 'Profile' } & Pick<
                  Profile,
                  'id' | 'email' | 'firstName' | 'lastName' | 'isActive'
                >;
              }
          >
        >;
      }
  >;
};

export type GetQuestionaireQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetQuestionaireQuery = { __typename?: 'Query' } & {
  getQuestionaire?: Maybe<
    { __typename?: 'Questionaire' } & Pick<
      Questionaire,
      'id' | 'templateName' | 'isAdmin' | 'published' | 'copyFromId' | 'templateStatus' | 'type'
    > & {
        entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>>;
        settings?: Maybe<
          { __typename?: 'TemplateSettings' } & Pick<
            TemplateSettings,
            'description' | 'version' | 'language' | 'documentType'
          >
        >;
        permissions?: Maybe<
          Array<
            { __typename?: 'TemplateSecurity' } & Pick<
              TemplateSecurity,
              'name' | 'create' | 'update' | 'read' | 'delete'
            >
          >
        >;
        meta: { __typename?: 'TemplateMeta' } & Pick<TemplateMeta, 'createdAt'>;
      }
  >;
};

export type ListQuestionaireGroupsQueryVariables = Exact<{
  templateId: Scalars['ID'];
}>;

export type ListQuestionaireGroupsQuery = { __typename?: 'Query' } & {
  listQuestionaireGroups?: Maybe<
    Array<
      { __typename?: 'Groups' } & Pick<Groups, 'id' | 'templateId' | 'groupName' | 'copyFromId' | 'order'> & {
          entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>>;
        }
    >
  >;
};

export type GetQuestionairesQueryVariables = Exact<{
  filters: ListQuestionairesFilters;
  pagination?: Maybe<Pagination>;
  search?: Maybe<Scalars['String']>;
}>;

export type GetQuestionairesQuery = { __typename?: 'Query' } & {
  getQuestionaires: { __typename?: 'TemplatesResponse' } & Pick<TemplatesResponse, 'count'> & {
      items?: Maybe<
        Array<
          { __typename?: 'Questionaire' } & Pick<
            Questionaire,
            'id' | 'templateName' | 'isAdmin' | 'published' | 'copyFromId' | 'templateStatus' | 'type' | 'labels'
          > & {
              entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>>;
              settings?: Maybe<
                { __typename?: 'TemplateSettings' } & Pick<
                  TemplateSettings,
                  'description' | 'version' | 'language' | 'documentType'
                >
              >;
              meta: { __typename?: 'TemplateMeta' } & Pick<TemplateMeta, 'createdAt'>;
              tags?: Maybe<Array<{ __typename?: 'TemplatTag' } & Pick<TemplatTag, 'name' | 'amount'>>>;
            }
        >
      >;
    };
};

export type GetQuestionaireGroupQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetQuestionaireGroupQuery = { __typename?: 'Query' } & {
  getQuestionaireGroup?: Maybe<
    { __typename?: 'Groups' } & Pick<Groups, 'id' | 'templateId' | 'groupName' | 'copyFromId' | 'order'> & {
        entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>>;
      }
  >;
};

export type ListQuestionsQueryVariables = Exact<{
  groupId: Scalars['ID'];
}>;

export type ListQuestionsQuery = { __typename?: 'Query' } & {
  listQuestions?: Maybe<
    Array<
      { __typename?: 'Question' } & Pick<
        Question,
        'id' | 'groupId' | 'order' | 'type' | 'name' | 'required' | 'commentEnabled' | 'showOn'
      > & {
          options?: Maybe<Array<Maybe<{ __typename?: 'Options' } & Pick<Options, 'name'>>>>;
          entity?: Maybe<{ __typename?: 'Entity' } & Pick<Entity, 'type' | 'subType'>>;
        }
    >
  >;
};

export type GetQuestionairesCountQueryVariables = Exact<{
  filters: ListQuestionairesFilters;
  search?: Maybe<Scalars['String']>;
}>;

export type GetQuestionairesCountQuery = { __typename?: 'Query' } & {
  active: { __typename?: 'TemplatesResponse' } & Pick<TemplatesResponse, 'count'>;
  inactive: { __typename?: 'TemplatesResponse' } & Pick<TemplatesResponse, 'count'>;
};

export type GetTiaraMutationsQueryVariables = Exact<{
  entityId: Scalars['ID'];
  entity: TiaraEntities;
}>;

export type GetTiaraMutationsQuery = { __typename?: 'Query' } & {
  getTiaraMutations?: Maybe<
    Array<{ __typename?: 'TiaraMutation' } & Pick<TiaraMutation, 'id' | 'status' | 'errors' | 'messageType' | 'date'>>
  >;
};

export type GetTiaraValidationQueryVariables = Exact<{
  entityId: Scalars['ID'];
  entity: TiaraEntities;
}>;

export type GetTiaraValidationQuery = { __typename?: 'Query' } & {
  getTiaraValidation: { __typename?: 'TiaraValidation' } & Pick<TiaraValidation, 'errors'>;
};

export const AddAllocateDocument = gql`
  mutation AddAllocate($input: AddAllocateInput!) {
    addAllocate(input: $input) @rest(type: "Allocate", path: "/create-allocate", method: "POST", endpoint: "default") {
      id
    }
  }
`;
export function useAddAllocateMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddAllocateMutation, AddAllocateMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddAllocateMutation, AddAllocateMutationVariables>(
    AddAllocateDocument,
    baseOptions,
  );
}
export type AddAllocateMutationHookResult = ReturnType<typeof useAddAllocateMutation>;
export type AddAllocateMutationResult = ApolloReactCommon.MutationResult<AddAllocateMutation>;
export type AddAllocateMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddAllocateMutation,
  AddAllocateMutationVariables
>;
export const UpdateAllocateDocument = gql`
  mutation UpdateAllocate($id: ID!, $input: AllocateInput!) {
    updateAllocate(id: $id, input: $input)
      @rest(type: "UpdateAllocateResponse", path: "/update-allocate?id={args.id}", method: "PUT", endpoint: "default") {
      id
    }
  }
`;
export function useUpdateAllocateMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAllocateMutation, UpdateAllocateMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateAllocateMutation, UpdateAllocateMutationVariables>(
    UpdateAllocateDocument,
    baseOptions,
  );
}
export type UpdateAllocateMutationHookResult = ReturnType<typeof useUpdateAllocateMutation>;
export type UpdateAllocateMutationResult = ApolloReactCommon.MutationResult<UpdateAllocateMutation>;
export type UpdateAllocateMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateAllocateMutation,
  UpdateAllocateMutationVariables
>;
export const DeleteAllocateDocument = gql`
  mutation DeleteAllocate($id: ID!) {
    deleteAllocate(id: $id)
      @rest(
        type: "DeleteAllocateResponse"
        path: "/delete-allocate?id={args.id}"
        method: "DELETE"
        endpoint: "default"
      )
  }
`;
export function useDeleteAllocateMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAllocateMutation, DeleteAllocateMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeleteAllocateMutation, DeleteAllocateMutationVariables>(
    DeleteAllocateDocument,
    baseOptions,
  );
}
export type DeleteAllocateMutationHookResult = ReturnType<typeof useDeleteAllocateMutation>;
export type DeleteAllocateMutationResult = ApolloReactCommon.MutationResult<DeleteAllocateMutation>;
export type DeleteAllocateMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteAllocateMutation,
  DeleteAllocateMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) @rest(type: "LoginResponse", path: "/login", method: "POST", endpoint: "default") {
      error
      AuthenticationResult {
        AccessToken
        RefreshToken
      }
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
      @rest(type: "ForgotPasswordResponse", path: "/forgot_password", method: "POST", endpoint: "default") {
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
  mutation ResetPassword($input: ResetPasswordInput) {
    resetPassword(input: $input)
      @rest(type: "ResetPasswordResponse", path: "/forgot_password/confirm", method: "POST", endpoint: "default") {
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
export const VerifyUserDocument = gql`
  mutation VerifyUser($input: VerifyUserInput!) {
    verifyUser(input: $input) @rest(type: "VerifyUser", method: "POST", path: "/signup/verify", endpoint: "default") {
      status
    }
  }
`;
export function useVerifyUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyUserMutation, VerifyUserMutationVariables>,
) {
  return ApolloReactHooks.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument, baseOptions);
}
export type VerifyUserMutationHookResult = ReturnType<typeof useVerifyUserMutation>;
export type VerifyUserMutationResult = ApolloReactCommon.MutationResult<VerifyUserMutation>;
export type VerifyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  VerifyUserMutation,
  VerifyUserMutationVariables
>;
export const BulkDocument = gql`
  mutation Bulk($input: BulkOperationInput!) {
    bulk(input: $input) {
      undoIds
    }
  }
`;
export function useBulkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<BulkMutation, BulkMutationVariables>,
) {
  return ApolloReactHooks.useMutation<BulkMutation, BulkMutationVariables>(BulkDocument, baseOptions);
}
export type BulkMutationHookResult = ReturnType<typeof useBulkMutation>;
export type BulkMutationResult = ApolloReactCommon.MutationResult<BulkMutation>;
export type BulkMutationOptions = ApolloReactCommon.BaseMutationOptions<BulkMutation, BulkMutationVariables>;
export const AddAppointmentDocument = gql`
  mutation AddAppointment($input: AddAppointmentInput!) {
    addAppointment(input: $input) {
      id
      from
      to
      travelTimeBefore
      travelTimeAfter
      title
      allDay
      type
      isInsideOffice
      location
      outsideLocation
      taskLabel
      state
      agreementType
      repeatAppointment
      description
      appointmentType
      assignedPimIds
      invitedPersons
    }
  }
`;
export function useAddAppointmentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddAppointmentMutation, AddAppointmentMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddAppointmentMutation, AddAppointmentMutationVariables>(
    AddAppointmentDocument,
    baseOptions,
  );
}
export type AddAppointmentMutationHookResult = ReturnType<typeof useAddAppointmentMutation>;
export type AddAppointmentMutationResult = ApolloReactCommon.MutationResult<AddAppointmentMutation>;
export type AddAppointmentMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddAppointmentMutation,
  AddAppointmentMutationVariables
>;
export const DraftAppointmentDocument = gql`
  mutation DraftAppointment($input: DraftAppointmentInput!) {
    draftAppointment(input: $input) {
      id
      from
      to
      travelTimeBefore
      travelTimeAfter
      title
      allDay
      type
      isInsideOffice
      location
      outsideLocation
      taskLabel
      state
      agreementType
      repeatAppointment
      description
      appointmentType
      assignedPimIds
      invitedPersons
    }
  }
`;
export function useDraftAppointmentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DraftAppointmentMutation, DraftAppointmentMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DraftAppointmentMutation, DraftAppointmentMutationVariables>(
    DraftAppointmentDocument,
    baseOptions,
  );
}
export type DraftAppointmentMutationHookResult = ReturnType<typeof useDraftAppointmentMutation>;
export type DraftAppointmentMutationResult = ApolloReactCommon.MutationResult<DraftAppointmentMutation>;
export type DraftAppointmentMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DraftAppointmentMutation,
  DraftAppointmentMutationVariables
>;
export const ConfirmAppointmentDocument = gql`
  mutation ConfirmAppointment($appointmentId: ID!, $accountId: String!) {
    confirmAppointment(appointmentId: $appointmentId, accountId: $accountId) {
      id
    }
  }
`;
export function useConfirmAppointmentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ConfirmAppointmentMutation, ConfirmAppointmentMutationVariables>,
) {
  return ApolloReactHooks.useMutation<ConfirmAppointmentMutation, ConfirmAppointmentMutationVariables>(
    ConfirmAppointmentDocument,
    baseOptions,
  );
}
export type ConfirmAppointmentMutationHookResult = ReturnType<typeof useConfirmAppointmentMutation>;
export type ConfirmAppointmentMutationResult = ApolloReactCommon.MutationResult<ConfirmAppointmentMutation>;
export type ConfirmAppointmentMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ConfirmAppointmentMutation,
  ConfirmAppointmentMutationVariables
>;
export const CreateCompanyDocument = gql`
  mutation CreateCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      id
    }
  }
`;
export function useCreateCompanyMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(
    CreateCompanyDocument,
    baseOptions,
  );
}
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>;
export type CreateCompanyMutationResult = ApolloReactCommon.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCompanyMutation,
  CreateCompanyMutationVariables
>;
export const UpdateCompanyDetailsDocument = gql`
  mutation UpdateCompanyDetails($input: UpdateCompanyInput!) {
    updateCompanyDetails(input: $input) {
      id
    }
  }
`;
export function useUpdateCompanyDetailsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCompanyDetailsMutation,
    UpdateCompanyDetailsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateCompanyDetailsMutation, UpdateCompanyDetailsMutationVariables>(
    UpdateCompanyDetailsDocument,
    baseOptions,
  );
}
export type UpdateCompanyDetailsMutationHookResult = ReturnType<typeof useUpdateCompanyDetailsMutation>;
export type UpdateCompanyDetailsMutationResult = ApolloReactCommon.MutationResult<UpdateCompanyDetailsMutation>;
export type UpdateCompanyDetailsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCompanyDetailsMutation,
  UpdateCompanyDetailsMutationVariables
>;
export const UpdateCrmContactInformationDocument = gql`
  mutation UpdateCrmContactInformation($input: UpdateCrmContactInformationInput!) {
    updateCrmContactInformation(input: $input) {
      id
      contactInfoDescription
      addresses {
        type
        street
        houseNumber
        addition
        zipcode
        city
        country
        extraInformation
        availableFrom
        note
      }
      emailAddresses {
        type
        email
        availableFrom
        note
      }
      phoneNumbers {
        type
        countryCode
        phoneNumber
        availableFrom
        note
      }
      socialMedia {
        type
        url
      }
      dateCreated
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
    }
  }
`;
export function useUpdateCrmContactInformationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCrmContactInformationMutation,
    UpdateCrmContactInformationMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateCrmContactInformationMutation,
    UpdateCrmContactInformationMutationVariables
  >(UpdateCrmContactInformationDocument, baseOptions);
}
export type UpdateCrmContactInformationMutationHookResult = ReturnType<typeof useUpdateCrmContactInformationMutation>;
export type UpdateCrmContactInformationMutationResult = ApolloReactCommon.MutationResult<
  UpdateCrmContactInformationMutation
>;
export type UpdateCrmContactInformationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCrmContactInformationMutation,
  UpdateCrmContactInformationMutationVariables
>;
export const UpdateCrmFamilyContactsDocument = gql`
  mutation UpdateCrmFamilyContacts($input: UpdateCrmFamilyContactsInput!) {
    updateCrmFamilyContacts(input: $input) {
      id
      maritalStatus
      maritalStatusDate
      maritalStatusInformation
      familyCompositionChildren
      familyCompositionAdults
      familyCompositionInformation
      partners {
        isDivorced
        partner {
          id
          firstName
          initials
          lastName
          email
          avatar {
            url
          }
          isPassedAway
          dateOfDeath
        }
      }
      contacts {
        type
        contact {
          id
        }
      }
    }
  }
`;
export function useUpdateCrmFamilyContactsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCrmFamilyContactsMutation,
    UpdateCrmFamilyContactsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateCrmFamilyContactsMutation, UpdateCrmFamilyContactsMutationVariables>(
    UpdateCrmFamilyContactsDocument,
    baseOptions,
  );
}
export type UpdateCrmFamilyContactsMutationHookResult = ReturnType<typeof useUpdateCrmFamilyContactsMutation>;
export type UpdateCrmFamilyContactsMutationResult = ApolloReactCommon.MutationResult<UpdateCrmFamilyContactsMutation>;
export type UpdateCrmFamilyContactsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCrmFamilyContactsMutation,
  UpdateCrmFamilyContactsMutationVariables
>;
export const UpdateCrmFinancialDocument = gql`
  mutation UpdateCrmFinancial($input: UpdateCrmFinancialInput!) {
    updateCrmFinancial(input: $input) {
      id
    }
  }
`;
export function useUpdateCrmFinancialMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCrmFinancialMutation, UpdateCrmFinancialMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateCrmFinancialMutation, UpdateCrmFinancialMutationVariables>(
    UpdateCrmFinancialDocument,
    baseOptions,
  );
}
export type UpdateCrmFinancialMutationHookResult = ReturnType<typeof useUpdateCrmFinancialMutation>;
export type UpdateCrmFinancialMutationResult = ApolloReactCommon.MutationResult<UpdateCrmFinancialMutation>;
export type UpdateCrmFinancialMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCrmFinancialMutation,
  UpdateCrmFinancialMutationVariables
>;
export const CreateCrmDocument = gql`
  mutation CreateCrm($input: CreateCrmInput!) {
    createCrm(input: $input) {
      id
      firstName
      initials
      lastName
      dateCreated
      completeness
    }
  }
`;
export function useCreateCrmMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCrmMutation, CreateCrmMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateCrmMutation, CreateCrmMutationVariables>(CreateCrmDocument, baseOptions);
}
export type CreateCrmMutationHookResult = ReturnType<typeof useCreateCrmMutation>;
export type CreateCrmMutationResult = ApolloReactCommon.MutationResult<CreateCrmMutation>;
export type CreateCrmMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCrmMutation,
  CreateCrmMutationVariables
>;
export const UpdateCrmGeneralDocument = gql`
  mutation UpdateCrmGeneral($input: UpdateCrmGeneralInput!) {
    updateCrmGeneral(input: $input) {
      id
      firstName
      extraNames
      initials
      lastName
      gender
      dateOfBirth
      placeOfBirth
      nationality
      dateOfDeath
      isPassedAway
      preferredLanguage
      identification
      identificationNumber
      identificationIssueCity
      identificationIssueDate
      identificationExpirationDate
      preferredTitlePrefix
      preferredTitleSuffix
      preferredLetterSalutation
      preferredTitleInformation
      identificationNumbers {
        type
        number
        name
      }
      avatar {
        id
        key
        fileName
        url
      }
      status
    }
  }
`;
export function useUpdateCrmGeneralMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCrmGeneralMutation, UpdateCrmGeneralMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateCrmGeneralMutation, UpdateCrmGeneralMutationVariables>(
    UpdateCrmGeneralDocument,
    baseOptions,
  );
}
export type UpdateCrmGeneralMutationHookResult = ReturnType<typeof useUpdateCrmGeneralMutation>;
export type UpdateCrmGeneralMutationResult = ApolloReactCommon.MutationResult<UpdateCrmGeneralMutation>;
export type UpdateCrmGeneralMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCrmGeneralMutation,
  UpdateCrmGeneralMutationVariables
>;
export const UpdateCrmHomeSituationDocument = gql`
  mutation UpdateCrmHomeSituation($input: UpdateCrmHomeSituationInput!) {
    updateCrmHomeSituation(input: $input) {
      id
      currentHomeSituation
      currentHomeStatus
      currentHomeSalesValue
      currentHomeMortgage
      currentHomeInformation
      reasonToMove
      movingDate
      movingInformation
    }
  }
`;
export function useUpdateCrmHomeSituationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCrmHomeSituationMutation,
    UpdateCrmHomeSituationMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateCrmHomeSituationMutation, UpdateCrmHomeSituationMutationVariables>(
    UpdateCrmHomeSituationDocument,
    baseOptions,
  );
}
export type UpdateCrmHomeSituationMutationHookResult = ReturnType<typeof useUpdateCrmHomeSituationMutation>;
export type UpdateCrmHomeSituationMutationResult = ApolloReactCommon.MutationResult<UpdateCrmHomeSituationMutation>;
export type UpdateCrmHomeSituationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCrmHomeSituationMutation,
  UpdateCrmHomeSituationMutationVariables
>;
export const CreateDmsFolderDocument = gql`
  mutation CreateDmsFolder($input: CreateDmsFolderInput!) {
    createDmsFolder(input: $input)
      @rest(type: "CreateDmsFolder", path: "/dms/folders/create", method: "POST", endpoint: "default") {
      id
    }
  }
`;
export function useCreateDmsFolderMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDmsFolderMutation, CreateDmsFolderMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateDmsFolderMutation, CreateDmsFolderMutationVariables>(
    CreateDmsFolderDocument,
    baseOptions,
  );
}
export type CreateDmsFolderMutationHookResult = ReturnType<typeof useCreateDmsFolderMutation>;
export type CreateDmsFolderMutationResult = ApolloReactCommon.MutationResult<CreateDmsFolderMutation>;
export type CreateDmsFolderMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateDmsFolderMutation,
  CreateDmsFolderMutationVariables
>;
export const SendEmailDocument = gql`
  mutation SendEmail($accountId: String!, $input: SendEmailInput!) {
    sendEmail(accountId: $accountId, input: $input)
  }
`;
export function useSendEmailMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<SendEmailMutation, SendEmailMutationVariables>,
) {
  return ApolloReactHooks.useMutation<SendEmailMutation, SendEmailMutationVariables>(SendEmailDocument, baseOptions);
}
export type SendEmailMutationHookResult = ReturnType<typeof useSendEmailMutation>;
export type SendEmailMutationResult = ApolloReactCommon.MutationResult<SendEmailMutation>;
export type SendEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SendEmailMutation,
  SendEmailMutationVariables
>;
export const DeleteEntityDocument = gql`
  mutation DeleteEntity($input: DeleteEntityInput!) {
    deleteEntity(input: $input) {
      successful
      message
      undoId
    }
  }
`;
export function useDeleteEntityMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteEntityMutation, DeleteEntityMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeleteEntityMutation, DeleteEntityMutationVariables>(
    DeleteEntityDocument,
    baseOptions,
  );
}
export type DeleteEntityMutationHookResult = ReturnType<typeof useDeleteEntityMutation>;
export type DeleteEntityMutationResult = ApolloReactCommon.MutationResult<DeleteEntityMutation>;
export type DeleteEntityMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteEntityMutation,
  DeleteEntityMutationVariables
>;
export const UndoEntityDocument = gql`
  mutation UndoEntity($input: UndoEntityInput!) {
    undoEntity(input: $input) {
      successful
      entityId
    }
  }
`;
export function useUndoEntityMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UndoEntityMutation, UndoEntityMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UndoEntityMutation, UndoEntityMutationVariables>(UndoEntityDocument, baseOptions);
}
export type UndoEntityMutationHookResult = ReturnType<typeof useUndoEntityMutation>;
export type UndoEntityMutationResult = ApolloReactCommon.MutationResult<UndoEntityMutation>;
export type UndoEntityMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UndoEntityMutation,
  UndoEntityMutationVariables
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
export const UpdateKikSettingsDocument = gql`
  mutation UpdateKikSettings($input: KikSettingsInput!) {
    updateKikSettings(input: $input)
  }
`;
export function useUpdateKikSettingsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateKikSettingsMutation, UpdateKikSettingsMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateKikSettingsMutation, UpdateKikSettingsMutationVariables>(
    UpdateKikSettingsDocument,
    baseOptions,
  );
}
export type UpdateKikSettingsMutationHookResult = ReturnType<typeof useUpdateKikSettingsMutation>;
export type UpdateKikSettingsMutationResult = ApolloReactCommon.MutationResult<UpdateKikSettingsMutation>;
export type UpdateKikSettingsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateKikSettingsMutation,
  UpdateKikSettingsMutationVariables
>;
export const UpdateKikInfoDocument = gql`
  mutation UpdateKikInfo($input: KikInfoInput!) {
    updateKikInfo(input: $input)
  }
`;
export function useUpdateKikInfoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateKikInfoMutation, UpdateKikInfoMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateKikInfoMutation, UpdateKikInfoMutationVariables>(
    UpdateKikInfoDocument,
    baseOptions,
  );
}
export type UpdateKikInfoMutationHookResult = ReturnType<typeof useUpdateKikInfoMutation>;
export type UpdateKikInfoMutationResult = ApolloReactCommon.MutationResult<UpdateKikInfoMutation>;
export type UpdateKikInfoMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateKikInfoMutation,
  UpdateKikInfoMutationVariables
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
export const AddCrmLabelDocument = gql`
  mutation AddCrmLabel($input: LabelInput!) {
    addCrmLabel(input: $input) {
      id
      property
      text
      icon
    }
  }
`;
export function useAddCrmLabelMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddCrmLabelMutation, AddCrmLabelMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddCrmLabelMutation, AddCrmLabelMutationVariables>(
    AddCrmLabelDocument,
    baseOptions,
  );
}
export type AddCrmLabelMutationHookResult = ReturnType<typeof useAddCrmLabelMutation>;
export type AddCrmLabelMutationResult = ApolloReactCommon.MutationResult<AddCrmLabelMutation>;
export type AddCrmLabelMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddCrmLabelMutation,
  AddCrmLabelMutationVariables
>;
export const AddMatchProfileDocument = gql`
  mutation AddMatchProfile($input: AddMatchProfileInput!) {
    addMatchProfile(input: $input)
      @rest(type: "AddMatchResponse", path: "/create-match", method: "POST", endpoint: "default") {
      id
      crmId
      companyId
      propertyType
      startDate
      endDate
      matchDuration {
        from
        to
      }
      matchWith
      description
      estateType
      commercialEstateType
      characteristics {
        general
        property {
          minAmountRooms
          minAmountBedrooms
          residentialLayerFrom
          residentialLayerTo
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      commercialCharacteristics {
        general
        property {
          minFreeHeight
          minFreeSpan
          minFloorLoad
          minAmountOfFloors
          minParkingLots
          engergyLabel
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      pricing {
        buyFrom
        buyTo
        rentFrom
        rentTo
        rentFrequency
        rentalPeriod
        preferredStartDate
      }
      outside {
        minGarage
      }
      garden {
        situation
        outdoorSpacesMin
        outdoorSpacesMax
        volumeMin
        volumeMax
      }
      conditions
      services
      tags
      measurements {
        surfaceFromMin
        surfaceToMin
        livingAreaFromMin
        livingAreaToMin
        businessSpaceSurfaceFromMin
        businessSpaceSurfaceToMin
        practiceRoomSurfaceToMax
        practiceRoomSurfaceToMin
        plotSurfaceFromMin
        plotSurfaceToMin
      }
      revenue {
        from
        to
      }
      exploitation {
        from
        to
      }
      requirements {
        key
        status
      }
      locations {
        latitude
        longitude
        street
        houseNumber
        radius
      }
      isActive
      createdAt
    }
  }
`;
export function useAddMatchProfileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddMatchProfileMutation, AddMatchProfileMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddMatchProfileMutation, AddMatchProfileMutationVariables>(
    AddMatchProfileDocument,
    baseOptions,
  );
}
export type AddMatchProfileMutationHookResult = ReturnType<typeof useAddMatchProfileMutation>;
export type AddMatchProfileMutationResult = ApolloReactCommon.MutationResult<AddMatchProfileMutation>;
export type AddMatchProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddMatchProfileMutation,
  AddMatchProfileMutationVariables
>;
export const CloneMatchProfileDocument = gql`
  mutation CloneMatchProfile($input: CloneMatchProfileInput!) {
    cloneMatchProfile(input: $input)
      @rest(type: "CloneMatchResponse", path: "/clone-match", method: "POST", endpoint: "default") {
      id
      crmId
      companyId
      propertyType
      startDate
      endDate
      matchDuration {
        from
        to
      }
      matchWith
      description
      estateType
      commercialEstateType
      characteristics {
        general
        property {
          minAmountRooms
          minAmountBedrooms
          residentialLayerFrom
          residentialLayerTo
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      commercialCharacteristics {
        general
        property {
          minFreeHeight
          minFreeSpan
          minFloorLoad
          minAmountOfFloors
          minParkingLots
          engergyLabel
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      pricing {
        buyFrom
        buyTo
        rentFrom
        rentTo
        rentFrequency
        rentalPeriod
        preferredStartDate
      }
      outside {
        minGarage
      }
      garden {
        situation
        outdoorSpacesMin
        outdoorSpacesMax
        volumeMin
        volumeMax
      }
      conditions
      services
      tags
      measurements {
        surfaceFromMin
        surfaceToMin
        livingAreaFromMin
        livingAreaToMin
        businessSpaceSurfaceFromMin
        businessSpaceSurfaceToMin
        practiceRoomSurfaceToMax
        practiceRoomSurfaceToMin
        plotSurfaceFromMin
        plotSurfaceToMin
      }
      revenue {
        from
        to
      }
      exploitation {
        from
        to
      }
      requirements {
        key
        status
      }
      locations {
        latitude
        longitude
        street
        houseNumber
        radius
      }
      isActive
      createdAt
    }
  }
`;
export function useCloneMatchProfileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CloneMatchProfileMutation, CloneMatchProfileMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CloneMatchProfileMutation, CloneMatchProfileMutationVariables>(
    CloneMatchProfileDocument,
    baseOptions,
  );
}
export type CloneMatchProfileMutationHookResult = ReturnType<typeof useCloneMatchProfileMutation>;
export type CloneMatchProfileMutationResult = ApolloReactCommon.MutationResult<CloneMatchProfileMutation>;
export type CloneMatchProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CloneMatchProfileMutation,
  CloneMatchProfileMutationVariables
>;
export const UpdateMatchProfileDocument = gql`
  mutation UpdateMatchProfile($id: ID!, $input: UpdateMatchProfileInput!) {
    updateMatchProfile(id: $id, input: $input)
      @rest(type: "UpdateMatchResponse", path: "/update-match?id={args.id}", method: "PUT", endpoint: "default") {
      id
      crmId
      companyId
      propertyType
      startDate
      endDate
      matchDuration {
        from
        to
      }
      matchWith
      description
      estateType
      commercialEstateType
      characteristics {
        general
        property {
          minAmountRooms
          minAmountBedrooms
          residentialLayerFrom
          residentialLayerTo
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      commercialCharacteristics {
        general
        property {
          minFreeHeight
          minFreeSpan
          minFloorLoad
          minAmountOfFloors
          minParkingLots
          engergyLabel
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      pricing {
        buyFrom
        buyTo
        rentFrom
        rentTo
        rentFrequency
        rentalPeriod
        preferredStartDate
      }
      outside {
        minGarage
      }
      garden {
        situation
        outdoorSpacesMin
        outdoorSpacesMax
        volumeMin
        volumeMax
      }
      conditions
      services
      tags
      measurements {
        surfaceFromMin
        surfaceToMin
        livingAreaFromMin
        livingAreaToMin
        businessSpaceSurfaceFromMin
        businessSpaceSurfaceToMin
        practiceRoomSurfaceToMax
        practiceRoomSurfaceToMin
        plotSurfaceFromMin
        plotSurfaceToMin
      }
      revenue {
        from
        to
      }
      exploitation {
        from
        to
      }
      requirements {
        key
        status
      }
      locations {
        latitude
        longitude
        street
        houseNumber
        radius
      }
      isActive
      createdAt
    }
  }
`;
export function useUpdateMatchProfileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMatchProfileMutation, UpdateMatchProfileMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateMatchProfileMutation, UpdateMatchProfileMutationVariables>(
    UpdateMatchProfileDocument,
    baseOptions,
  );
}
export type UpdateMatchProfileMutationHookResult = ReturnType<typeof useUpdateMatchProfileMutation>;
export type UpdateMatchProfileMutationResult = ApolloReactCommon.MutationResult<UpdateMatchProfileMutation>;
export type UpdateMatchProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateMatchProfileMutation,
  UpdateMatchProfileMutationVariables
>;
export const DeleteMatchProfileDocument = gql`
  mutation DeleteMatchProfile($id: ID!) {
    deleteMatchProfile(id: $id)
      @rest(
        type: "DeleteMatchProfileResponse"
        path: "/delete-match?id={args.id}"
        method: "DELETE"
        endpoint: "default"
      )
  }
`;
export function useDeleteMatchProfileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteMatchProfileMutation, DeleteMatchProfileMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeleteMatchProfileMutation, DeleteMatchProfileMutationVariables>(
    DeleteMatchProfileDocument,
    baseOptions,
  );
}
export type DeleteMatchProfileMutationHookResult = ReturnType<typeof useDeleteMatchProfileMutation>;
export type DeleteMatchProfileMutationResult = ApolloReactCommon.MutationResult<DeleteMatchProfileMutation>;
export type DeleteMatchProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteMatchProfileMutation,
  DeleteMatchProfileMutationVariables
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
      objectTypesCount
      automaticallyCalculateQuantity
      properties
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
export const ReadNotificationDocument = gql`
  mutation ReadNotification($input: ReadNotificationInput!) {
    readNotification(input: $input)
  }
`;
export function useReadNotificationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ReadNotificationMutation, ReadNotificationMutationVariables>,
) {
  return ApolloReactHooks.useMutation<ReadNotificationMutation, ReadNotificationMutationVariables>(
    ReadNotificationDocument,
    baseOptions,
  );
}
export type ReadNotificationMutationHookResult = ReturnType<typeof useReadNotificationMutation>;
export type ReadNotificationMutationResult = ApolloReactCommon.MutationResult<ReadNotificationMutation>;
export type ReadNotificationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ReadNotificationMutation,
  ReadNotificationMutationVariables
>;
export const DeleteNotificationDocument = gql`
  mutation DeleteNotification($input: DeleteNotificationInput!) {
    deleteNotification(input: $input)
  }
`;
export function useDeleteNotificationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteNotificationMutation, DeleteNotificationMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeleteNotificationMutation, DeleteNotificationMutationVariables>(
    DeleteNotificationDocument,
    baseOptions,
  );
}
export type DeleteNotificationMutationHookResult = ReturnType<typeof useDeleteNotificationMutation>;
export type DeleteNotificationMutationResult = ApolloReactCommon.MutationResult<DeleteNotificationMutation>;
export type DeleteNotificationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteNotificationMutation,
  DeleteNotificationMutationVariables
>;
export const BulkReadNotificationsDocument = gql`
  mutation BulkReadNotifications($input: BulkReadNotificationsInput!) {
    bulkReadNotifications(input: $input)
  }
`;
export function useBulkReadNotificationsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    BulkReadNotificationsMutation,
    BulkReadNotificationsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<BulkReadNotificationsMutation, BulkReadNotificationsMutationVariables>(
    BulkReadNotificationsDocument,
    baseOptions,
  );
}
export type BulkReadNotificationsMutationHookResult = ReturnType<typeof useBulkReadNotificationsMutation>;
export type BulkReadNotificationsMutationResult = ApolloReactCommon.MutationResult<BulkReadNotificationsMutation>;
export type BulkReadNotificationsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  BulkReadNotificationsMutation,
  BulkReadNotificationsMutationVariables
>;
export const BulkDeleteNotificationsDocument = gql`
  mutation BulkDeleteNotifications($input: BulkDeleteNotificationsInput!) {
    bulkDeleteNotifications(input: $input)
  }
`;
export function useBulkDeleteNotificationsMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    BulkDeleteNotificationsMutation,
    BulkDeleteNotificationsMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<BulkDeleteNotificationsMutation, BulkDeleteNotificationsMutationVariables>(
    BulkDeleteNotificationsDocument,
    baseOptions,
  );
}
export type BulkDeleteNotificationsMutationHookResult = ReturnType<typeof useBulkDeleteNotificationsMutation>;
export type BulkDeleteNotificationsMutationResult = ApolloReactCommon.MutationResult<BulkDeleteNotificationsMutation>;
export type BulkDeleteNotificationsMutationOptions = ApolloReactCommon.BaseMutationOptions<
  BulkDeleteNotificationsMutation,
  BulkDeleteNotificationsMutationVariables
>;
export const AuthorizeNylasAccountDocument = gql`
  mutation AuthorizeNylasAccount(
    $input: NylasAuthorizationInput!
    $isCalendarConnected: Boolean
    $isEmailConnected: Boolean
  ) {
    authorizeNylasAccount(input: $input, isCalendarConnected: $isCalendarConnected, isEmailConnected: $isEmailConnected)
  }
`;
export function useAuthorizeNylasAccountMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AuthorizeNylasAccountMutation,
    AuthorizeNylasAccountMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<AuthorizeNylasAccountMutation, AuthorizeNylasAccountMutationVariables>(
    AuthorizeNylasAccountDocument,
    baseOptions,
  );
}
export type AuthorizeNylasAccountMutationHookResult = ReturnType<typeof useAuthorizeNylasAccountMutation>;
export type AuthorizeNylasAccountMutationResult = ApolloReactCommon.MutationResult<AuthorizeNylasAccountMutation>;
export type AuthorizeNylasAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AuthorizeNylasAccountMutation,
  AuthorizeNylasAccountMutationVariables
>;
export const AuthorizeNylasAccountWithTokenDocument = gql`
  mutation AuthorizeNylasAccountWithToken($input: NylasAddAccountInput!) {
    authorizeNylasAccountWithToken(input: $input)
      @rest(type: "CreateNylasAccount", path: "/nylas-addaccount", method: "POST", endpoint: "default") {
      id
      userId
      accountId
      accessToken
      newAccount
      isCalendarConnected
      isEmailConnected
    }
  }
`;
export function useAuthorizeNylasAccountWithTokenMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    AuthorizeNylasAccountWithTokenMutation,
    AuthorizeNylasAccountWithTokenMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    AuthorizeNylasAccountWithTokenMutation,
    AuthorizeNylasAccountWithTokenMutationVariables
  >(AuthorizeNylasAccountWithTokenDocument, baseOptions);
}
export type AuthorizeNylasAccountWithTokenMutationHookResult = ReturnType<
  typeof useAuthorizeNylasAccountWithTokenMutation
>;
export type AuthorizeNylasAccountWithTokenMutationResult = ApolloReactCommon.MutationResult<
  AuthorizeNylasAccountWithTokenMutation
>;
export type AuthorizeNylasAccountWithTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AuthorizeNylasAccountWithTokenMutation,
  AuthorizeNylasAccountWithTokenMutationVariables
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
export const AddAogSpaceDocument = gql`
  mutation AddAogSpace($input: AddAogSpaceInput!) {
    addAogSpace(input: $input) {
      newSpace {
        id
      }
    }
  }
`;
export function useAddAogSpaceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddAogSpaceMutation, AddAogSpaceMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddAogSpaceMutation, AddAogSpaceMutationVariables>(
    AddAogSpaceDocument,
    baseOptions,
  );
}
export type AddAogSpaceMutationHookResult = ReturnType<typeof useAddAogSpaceMutation>;
export type AddAogSpaceMutationResult = ApolloReactCommon.MutationResult<AddAogSpaceMutation>;
export type AddAogSpaceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddAogSpaceMutation,
  AddAogSpaceMutationVariables
>;
export const UpdateAogSpaceDocument = gql`
  mutation UpdateAogSpace($input: UpdateAogSpaceInput!) {
    updateAogSpace(input: $input) {
      id
    }
  }
`;
export function useUpdateAogSpaceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAogSpaceMutation, UpdateAogSpaceMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateAogSpaceMutation, UpdateAogSpaceMutationVariables>(
    UpdateAogSpaceDocument,
    baseOptions,
  );
}
export type UpdateAogSpaceMutationHookResult = ReturnType<typeof useUpdateAogSpaceMutation>;
export type UpdateAogSpaceMutationResult = ApolloReactCommon.MutationResult<UpdateAogSpaceMutation>;
export type UpdateAogSpaceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateAogSpaceMutation,
  UpdateAogSpaceMutationVariables
>;
export const AddBogSpaceDocument = gql`
  mutation AddBogSpace($input: AddBogSpaceInput!) {
    addBogSpace(input: $input) {
      newSpace {
        id
        type
        name
      }
    }
  }
`;
export function useAddBogSpaceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddBogSpaceMutation, AddBogSpaceMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddBogSpaceMutation, AddBogSpaceMutationVariables>(
    AddBogSpaceDocument,
    baseOptions,
  );
}
export type AddBogSpaceMutationHookResult = ReturnType<typeof useAddBogSpaceMutation>;
export type AddBogSpaceMutationResult = ApolloReactCommon.MutationResult<AddBogSpaceMutation>;
export type AddBogSpaceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddBogSpaceMutation,
  AddBogSpaceMutationVariables
>;
export const UpdateBogSpaceDocument = gql`
  mutation UpdateBogSpace($input: UpdateBogSpaceInput!) {
    updateBogSpace(input: $input) {
      id
    }
  }
`;
export function useUpdateBogSpaceMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBogSpaceMutation, UpdateBogSpaceMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateBogSpaceMutation, UpdateBogSpaceMutationVariables>(
    UpdateBogSpaceDocument,
    baseOptions,
  );
}
export type UpdateBogSpaceMutationHookResult = ReturnType<typeof useUpdateBogSpaceMutation>;
export type UpdateBogSpaceMutationResult = ApolloReactCommon.MutationResult<UpdateBogSpaceMutation>;
export type UpdateBogSpaceMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateBogSpaceMutation,
  UpdateBogSpaceMutationVariables
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
      realEstateType
      street
      houseNumber
      postalCode
      city
      developmentType
      outsideFeatures {
        id
      }
      floors {
        id
      }
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
export const CreateProfileDocument = gql`
  mutation CreateProfile($input: CreateProfileInput!) {
    createProfile(input: $input) {
      id
    }
  }
`;
export function useCreateProfileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(
    CreateProfileDocument,
    baseOptions,
  );
}
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = ApolloReactCommon.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateProfileMutation,
  CreateProfileMutationVariables
>;
export const UpdateProfileDocument = gql`
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      id
    }
  }
`;
export function useUpdateProfileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(
    UpdateProfileDocument,
    baseOptions,
  );
}
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = ApolloReactCommon.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>;
export const ConfirmProfileInviteDocument = gql`
  mutation ConfirmProfileInvite($input: ConfirmProfileInvite!) {
    confirmProfileInvite(input: $input) {
      id
    }
  }
`;
export function useConfirmProfileInviteMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ConfirmProfileInviteMutation,
    ConfirmProfileInviteMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<ConfirmProfileInviteMutation, ConfirmProfileInviteMutationVariables>(
    ConfirmProfileInviteDocument,
    baseOptions,
  );
}
export type ConfirmProfileInviteMutationHookResult = ReturnType<typeof useConfirmProfileInviteMutation>;
export type ConfirmProfileInviteMutationResult = ApolloReactCommon.MutationResult<ConfirmProfileInviteMutation>;
export type ConfirmProfileInviteMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ConfirmProfileInviteMutation,
  ConfirmProfileInviteMutationVariables
>;
export const DeactivateProfileDocument = gql`
  mutation DeactivateProfile($id: String!) {
    deactivateProfile(id: $id) {
      id
    }
  }
`;
export function useDeactivateProfileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeactivateProfileMutation, DeactivateProfileMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeactivateProfileMutation, DeactivateProfileMutationVariables>(
    DeactivateProfileDocument,
    baseOptions,
  );
}
export type DeactivateProfileMutationHookResult = ReturnType<typeof useDeactivateProfileMutation>;
export type DeactivateProfileMutationResult = ApolloReactCommon.MutationResult<DeactivateProfileMutation>;
export type DeactivateProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeactivateProfileMutation,
  DeactivateProfileMutationVariables
>;
export const ReactivateProfileDocument = gql`
  mutation ReactivateProfile($id: String!) {
    reactivateProfile(id: $id) {
      id
    }
  }
`;
export function useReactivateProfileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ReactivateProfileMutation, ReactivateProfileMutationVariables>,
) {
  return ApolloReactHooks.useMutation<ReactivateProfileMutation, ReactivateProfileMutationVariables>(
    ReactivateProfileDocument,
    baseOptions,
  );
}
export type ReactivateProfileMutationHookResult = ReturnType<typeof useReactivateProfileMutation>;
export type ReactivateProfileMutationResult = ApolloReactCommon.MutationResult<ReactivateProfileMutation>;
export type ReactivateProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ReactivateProfileMutation,
  ReactivateProfileMutationVariables
>;
export const CreateEmailAddressDocument = gql`
  mutation CreateEmailAddress($input: CreateEmailAddressInput!) {
    createEmailAddress(input: $input) {
      id
    }
  }
`;
export function useCreateEmailAddressMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEmailAddressMutation, CreateEmailAddressMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateEmailAddressMutation, CreateEmailAddressMutationVariables>(
    CreateEmailAddressDocument,
    baseOptions,
  );
}
export type CreateEmailAddressMutationHookResult = ReturnType<typeof useCreateEmailAddressMutation>;
export type CreateEmailAddressMutationResult = ApolloReactCommon.MutationResult<CreateEmailAddressMutation>;
export type CreateEmailAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateEmailAddressMutation,
  CreateEmailAddressMutationVariables
>;
export const UpdateEmailAddressDocument = gql`
  mutation UpdateEmailAddress($input: UpdateEmailAddressInput!) {
    updateEmailAddress(input: $input) {
      id
    }
  }
`;
export function useUpdateEmailAddressMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateEmailAddressMutation, UpdateEmailAddressMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateEmailAddressMutation, UpdateEmailAddressMutationVariables>(
    UpdateEmailAddressDocument,
    baseOptions,
  );
}
export type UpdateEmailAddressMutationHookResult = ReturnType<typeof useUpdateEmailAddressMutation>;
export type UpdateEmailAddressMutationResult = ApolloReactCommon.MutationResult<UpdateEmailAddressMutation>;
export type UpdateEmailAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateEmailAddressMutation,
  UpdateEmailAddressMutationVariables
>;
export const CreatePhoneNumberDocument = gql`
  mutation CreatePhoneNumber($input: CreatePhoneNumberInput!) {
    createPhoneNumber(input: $input) {
      id
    }
  }
`;
export function useCreatePhoneNumberMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePhoneNumberMutation, CreatePhoneNumberMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreatePhoneNumberMutation, CreatePhoneNumberMutationVariables>(
    CreatePhoneNumberDocument,
    baseOptions,
  );
}
export type CreatePhoneNumberMutationHookResult = ReturnType<typeof useCreatePhoneNumberMutation>;
export type CreatePhoneNumberMutationResult = ApolloReactCommon.MutationResult<CreatePhoneNumberMutation>;
export type CreatePhoneNumberMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreatePhoneNumberMutation,
  CreatePhoneNumberMutationVariables
>;
export const UpdatePhoneNumberDocument = gql`
  mutation UpdatePhoneNumber($input: UpdatePhoneNumberInput!) {
    updatePhoneNumber(input: $input) {
      id
    }
  }
`;
export function useUpdatePhoneNumberMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePhoneNumberMutation, UpdatePhoneNumberMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdatePhoneNumberMutation, UpdatePhoneNumberMutationVariables>(
    UpdatePhoneNumberDocument,
    baseOptions,
  );
}
export type UpdatePhoneNumberMutationHookResult = ReturnType<typeof useUpdatePhoneNumberMutation>;
export type UpdatePhoneNumberMutationResult = ApolloReactCommon.MutationResult<UpdatePhoneNumberMutation>;
export type UpdatePhoneNumberMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdatePhoneNumberMutation,
  UpdatePhoneNumberMutationVariables
>;
export const CreateSocialMediaLinkDocument = gql`
  mutation CreateSocialMediaLink($input: CreateSocialMediaLinkInput!) {
    createSocialMediaLink(input: $input) {
      id
    }
  }
`;
export function useCreateSocialMediaLinkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateSocialMediaLinkMutation,
    CreateSocialMediaLinkMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<CreateSocialMediaLinkMutation, CreateSocialMediaLinkMutationVariables>(
    CreateSocialMediaLinkDocument,
    baseOptions,
  );
}
export type CreateSocialMediaLinkMutationHookResult = ReturnType<typeof useCreateSocialMediaLinkMutation>;
export type CreateSocialMediaLinkMutationResult = ApolloReactCommon.MutationResult<CreateSocialMediaLinkMutation>;
export type CreateSocialMediaLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateSocialMediaLinkMutation,
  CreateSocialMediaLinkMutationVariables
>;
export const UpdateSocialMediaLinkDocument = gql`
  mutation UpdateSocialMediaLink($input: UpdateSocialMediaLinkInput!) {
    updateSocialMediaLink(input: $input) {
      id
    }
  }
`;
export function useUpdateSocialMediaLinkMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateSocialMediaLinkMutation,
    UpdateSocialMediaLinkMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateSocialMediaLinkMutation, UpdateSocialMediaLinkMutationVariables>(
    UpdateSocialMediaLinkDocument,
    baseOptions,
  );
}
export type UpdateSocialMediaLinkMutationHookResult = ReturnType<typeof useUpdateSocialMediaLinkMutation>;
export type UpdateSocialMediaLinkMutationResult = ApolloReactCommon.MutationResult<UpdateSocialMediaLinkMutation>;
export type UpdateSocialMediaLinkMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateSocialMediaLinkMutation,
  UpdateSocialMediaLinkMutationVariables
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
export const CreateSalesDocument = gql`
  mutation CreateSales($input: CreateSalesInput!) {
    createSales(input: $input) @rest(type: "CreateSales", path: "/create-sales", method: "POST", endpoint: "default") {
      id
      label
      status
      createdAt
      updatedAt
      name
      type
      extraInfo
      attentionNote
      date
    }
  }
`;
export function useCreateSalesMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSalesMutation, CreateSalesMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateSalesMutation, CreateSalesMutationVariables>(
    CreateSalesDocument,
    baseOptions,
  );
}
export type CreateSalesMutationHookResult = ReturnType<typeof useCreateSalesMutation>;
export type CreateSalesMutationResult = ApolloReactCommon.MutationResult<CreateSalesMutation>;
export type CreateSalesMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateSalesMutation,
  CreateSalesMutationVariables
>;
export const AddTaskLabelDocument = gql`
  mutation AddTaskLabel($input: LabelInput!) {
    addTaskLabel(input: $input) {
      id
      property
      text
      icon
    }
  }
`;
export function useAddTaskLabelMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddTaskLabelMutation, AddTaskLabelMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddTaskLabelMutation, AddTaskLabelMutationVariables>(
    AddTaskLabelDocument,
    baseOptions,
  );
}
export type AddTaskLabelMutationHookResult = ReturnType<typeof useAddTaskLabelMutation>;
export type AddTaskLabelMutationResult = ApolloReactCommon.MutationResult<AddTaskLabelMutation>;
export type AddTaskLabelMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddTaskLabelMutation,
  AddTaskLabelMutationVariables
>;
export const CreateTaskDocument = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`;
export function useCreateTaskMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, baseOptions);
}
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = ApolloReactCommon.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;
export const UpdateTaskDocument = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      id
    }
  }
`;
export function useUpdateTaskMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, baseOptions);
}
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = ApolloReactCommon.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
export const AddNewSubtaskDocument = gql`
  mutation AddNewSubtask($taskId: String!, $title: String!) {
    addSubtask(taskId: $taskId, input: { title: $title }) {
      id
    }
  }
`;
export function useAddNewSubtaskMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddNewSubtaskMutation, AddNewSubtaskMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddNewSubtaskMutation, AddNewSubtaskMutationVariables>(
    AddNewSubtaskDocument,
    baseOptions,
  );
}
export type AddNewSubtaskMutationHookResult = ReturnType<typeof useAddNewSubtaskMutation>;
export type AddNewSubtaskMutationResult = ApolloReactCommon.MutationResult<AddNewSubtaskMutation>;
export type AddNewSubtaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddNewSubtaskMutation,
  AddNewSubtaskMutationVariables
>;
export const UpdateSubtaskStatusDocument = gql`
  mutation UpdateSubtaskStatus($subtaskId: ID!, $status: TaskStatus!) {
    updateSubtaskStatus(subtaskId: $subtaskId, status: $status) {
      id
    }
  }
`;
export function useUpdateSubtaskStatusMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSubtaskStatusMutation, UpdateSubtaskStatusMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateSubtaskStatusMutation, UpdateSubtaskStatusMutationVariables>(
    UpdateSubtaskStatusDocument,
    baseOptions,
  );
}
export type UpdateSubtaskStatusMutationHookResult = ReturnType<typeof useUpdateSubtaskStatusMutation>;
export type UpdateSubtaskStatusMutationResult = ApolloReactCommon.MutationResult<UpdateSubtaskStatusMutation>;
export type UpdateSubtaskStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateSubtaskStatusMutation,
  UpdateSubtaskStatusMutationVariables
>;
export const DeleteSubtaskDocument = gql`
  mutation DeleteSubtask($subtaskId: ID!) {
    deleteSubtask(subtaskId: $subtaskId) {
      id
    }
  }
`;
export function useDeleteSubtaskMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSubtaskMutation, DeleteSubtaskMutationVariables>,
) {
  return ApolloReactHooks.useMutation<DeleteSubtaskMutation, DeleteSubtaskMutationVariables>(
    DeleteSubtaskDocument,
    baseOptions,
  );
}
export type DeleteSubtaskMutationHookResult = ReturnType<typeof useDeleteSubtaskMutation>;
export type DeleteSubtaskMutationResult = ApolloReactCommon.MutationResult<DeleteSubtaskMutation>;
export type DeleteSubtaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteSubtaskMutation,
  DeleteSubtaskMutationVariables
>;
export const AddTeamDocument = gql`
  mutation AddTeam($input: AddTeamInput!) {
    addTeam(input: $input) {
      id
      name
    }
  }
`;
export function useAddTeamMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddTeamMutation, AddTeamMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddTeamMutation, AddTeamMutationVariables>(AddTeamDocument, baseOptions);
}
export type AddTeamMutationHookResult = ReturnType<typeof useAddTeamMutation>;
export type AddTeamMutationResult = ApolloReactCommon.MutationResult<AddTeamMutation>;
export type AddTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTeamMutation, AddTeamMutationVariables>;
export const UpdateTeamDocument = gql`
  mutation UpdateTeam($input: UpdateTeamInput!) {
    updateTeam(input: $input) {
      id
    }
  }
`;
export function useUpdateTeamMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTeamMutation, UpdateTeamMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateTeamMutation, UpdateTeamMutationVariables>(UpdateTeamDocument, baseOptions);
}
export type UpdateTeamMutationHookResult = ReturnType<typeof useUpdateTeamMutation>;
export type UpdateTeamMutationResult = ApolloReactCommon.MutationResult<UpdateTeamMutation>;
export type UpdateTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateTeamMutation,
  UpdateTeamMutationVariables
>;
export const RemoveTeamDocument = gql`
  mutation RemoveTeam($id: String!) {
    removeTeam(id: $id)
  }
`;
export function useRemoveTeamMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveTeamMutation, RemoveTeamMutationVariables>,
) {
  return ApolloReactHooks.useMutation<RemoveTeamMutation, RemoveTeamMutationVariables>(RemoveTeamDocument, baseOptions);
}
export type RemoveTeamMutationHookResult = ReturnType<typeof useRemoveTeamMutation>;
export type RemoveTeamMutationResult = ApolloReactCommon.MutationResult<RemoveTeamMutation>;
export type RemoveTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveTeamMutation,
  RemoveTeamMutationVariables
>;
export const AddUserToTeamDocument = gql`
  mutation AddUserToTeam($input: AddUserToTeamInput!) {
    addUserToTeam(input: $input) {
      id
    }
  }
`;
export function useAddUserToTeamMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddUserToTeamMutation, AddUserToTeamMutationVariables>,
) {
  return ApolloReactHooks.useMutation<AddUserToTeamMutation, AddUserToTeamMutationVariables>(
    AddUserToTeamDocument,
    baseOptions,
  );
}
export type AddUserToTeamMutationHookResult = ReturnType<typeof useAddUserToTeamMutation>;
export type AddUserToTeamMutationResult = ApolloReactCommon.MutationResult<AddUserToTeamMutation>;
export type AddUserToTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddUserToTeamMutation,
  AddUserToTeamMutationVariables
>;
export const RemoveUserFromTeamDocument = gql`
  mutation RemoveUserFromTeam($input: RemoveUserFromTeamInput!) {
    removeUserFromTeam(input: $input) {
      id
    }
  }
`;
export function useRemoveUserFromTeamMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveUserFromTeamMutation, RemoveUserFromTeamMutationVariables>,
) {
  return ApolloReactHooks.useMutation<RemoveUserFromTeamMutation, RemoveUserFromTeamMutationVariables>(
    RemoveUserFromTeamDocument,
    baseOptions,
  );
}
export type RemoveUserFromTeamMutationHookResult = ReturnType<typeof useRemoveUserFromTeamMutation>;
export type RemoveUserFromTeamMutationResult = ApolloReactCommon.MutationResult<RemoveUserFromTeamMutation>;
export type RemoveUserFromTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveUserFromTeamMutation,
  RemoveUserFromTeamMutationVariables
>;
export const UpdateUserInTeamDocument = gql`
  mutation UpdateUserInTeam($input: UpdateUserInTeamInput!) {
    updateUserInTeam(input: $input) {
      id
    }
  }
`;
export function useUpdateUserInTeamMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserInTeamMutation, UpdateUserInTeamMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateUserInTeamMutation, UpdateUserInTeamMutationVariables>(
    UpdateUserInTeamDocument,
    baseOptions,
  );
}
export type UpdateUserInTeamMutationHookResult = ReturnType<typeof useUpdateUserInTeamMutation>;
export type UpdateUserInTeamMutationResult = ApolloReactCommon.MutationResult<UpdateUserInTeamMutation>;
export type UpdateUserInTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateUserInTeamMutation,
  UpdateUserInTeamMutationVariables
>;
export const CreateQuestionaireDocument = gql`
  mutation CreateQuestionaire($input: QuestionaireInput!) {
    createQuestionaire(input: $input)
      @rest(type: "Questionaire", path: "/template", method: "POST", endpoint: "default") {
      id
      templateName
      templateStatus
      isAdmin
      published
      copyFromId
      entity {
        type
        subType
      }
    }
  }
`;
export function useCreateQuestionaireMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateQuestionaireMutation, CreateQuestionaireMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateQuestionaireMutation, CreateQuestionaireMutationVariables>(
    CreateQuestionaireDocument,
    baseOptions,
  );
}
export type CreateQuestionaireMutationHookResult = ReturnType<typeof useCreateQuestionaireMutation>;
export type CreateQuestionaireMutationResult = ApolloReactCommon.MutationResult<CreateQuestionaireMutation>;
export type CreateQuestionaireMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateQuestionaireMutation,
  CreateQuestionaireMutationVariables
>;
export const UpdateQuestionaireDocument = gql`
  mutation UpdateQuestionaire($input: UpdateQuestionaireInput!) {
    updateQuestionaire(input: $input)
      @rest(type: "UpdateQuestionaire", path: "/template", method: "PUT", endpoint: "default") {
      id
      templateName
      templateStatus
      isAdmin
      published
      copyFromId
      entity {
        type
        subType
      }
    }
  }
`;
export function useUpdateQuestionaireMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateQuestionaireMutation, UpdateQuestionaireMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateQuestionaireMutation, UpdateQuestionaireMutationVariables>(
    UpdateQuestionaireDocument,
    baseOptions,
  );
}
export type UpdateQuestionaireMutationHookResult = ReturnType<typeof useUpdateQuestionaireMutation>;
export type UpdateQuestionaireMutationResult = ApolloReactCommon.MutationResult<UpdateQuestionaireMutation>;
export type UpdateQuestionaireMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateQuestionaireMutation,
  UpdateQuestionaireMutationVariables
>;
export const UpdateTemplateGeneralDocument = gql`
  mutation UpdateTemplateGeneral($input: TemplateGeneralInput!) {
    updateTemplateGeneral(input: $input)
      @rest(type: "Template", path: "/template", method: "PUT", endpoint: "default") {
      id
    }
  }
`;
export function useUpdateTemplateGeneralMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateTemplateGeneralMutation,
    UpdateTemplateGeneralMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateTemplateGeneralMutation, UpdateTemplateGeneralMutationVariables>(
    UpdateTemplateGeneralDocument,
    baseOptions,
  );
}
export type UpdateTemplateGeneralMutationHookResult = ReturnType<typeof useUpdateTemplateGeneralMutation>;
export type UpdateTemplateGeneralMutationResult = ApolloReactCommon.MutationResult<UpdateTemplateGeneralMutation>;
export type UpdateTemplateGeneralMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateTemplateGeneralMutation,
  UpdateTemplateGeneralMutationVariables
>;
export const CreateQuestionaireGroupDocument = gql`
  mutation CreateQuestionaireGroup($input: GroupsInput!) {
    createQuestionaireGroup(input: $input)
      @rest(type: "CreateQuestionaireGroup", path: "/groups", method: "POST", endpoint: "default") {
      id
      templateId
      groupName
      copyFromId
      order
      entity {
        type
        subType
      }
    }
  }
`;
export function useCreateQuestionaireGroupMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateQuestionaireGroupMutation,
    CreateQuestionaireGroupMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<CreateQuestionaireGroupMutation, CreateQuestionaireGroupMutationVariables>(
    CreateQuestionaireGroupDocument,
    baseOptions,
  );
}
export type CreateQuestionaireGroupMutationHookResult = ReturnType<typeof useCreateQuestionaireGroupMutation>;
export type CreateQuestionaireGroupMutationResult = ApolloReactCommon.MutationResult<CreateQuestionaireGroupMutation>;
export type CreateQuestionaireGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateQuestionaireGroupMutation,
  CreateQuestionaireGroupMutationVariables
>;
export const UpdateQuestionaireGroupDocument = gql`
  mutation UpdateQuestionaireGroup($id: ID!, $input: UpdateGroupsInput!) {
    updateQuestionaireGroup(id: $id, input: $input)
      @rest(type: "UpdateQuestionaireGroup", path: "/groups/{args.id}", method: "PUT", endpoint: "default") {
      id
      templateId
      groupName
      copyFromId
      order
      entity {
        type
        subType
      }
    }
  }
`;
export function useUpdateQuestionaireGroupMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateQuestionaireGroupMutation,
    UpdateQuestionaireGroupMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateQuestionaireGroupMutation, UpdateQuestionaireGroupMutationVariables>(
    UpdateQuestionaireGroupDocument,
    baseOptions,
  );
}
export type UpdateQuestionaireGroupMutationHookResult = ReturnType<typeof useUpdateQuestionaireGroupMutation>;
export type UpdateQuestionaireGroupMutationResult = ApolloReactCommon.MutationResult<UpdateQuestionaireGroupMutation>;
export type UpdateQuestionaireGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateQuestionaireGroupMutation,
  UpdateQuestionaireGroupMutationVariables
>;
export const DeleteQuestionaireGroupDocument = gql`
  mutation DeleteQuestionaireGroup($id: ID!) {
    deleteQuestionaireGroup(id: $id)
      @rest(type: "DeleteQuestionaireGroup", path: "/groups/{args.id}", method: "DELETE", endpoint: "default")
  }
`;
export function useDeleteQuestionaireGroupMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteQuestionaireGroupMutation,
    DeleteQuestionaireGroupMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<DeleteQuestionaireGroupMutation, DeleteQuestionaireGroupMutationVariables>(
    DeleteQuestionaireGroupDocument,
    baseOptions,
  );
}
export type DeleteQuestionaireGroupMutationHookResult = ReturnType<typeof useDeleteQuestionaireGroupMutation>;
export type DeleteQuestionaireGroupMutationResult = ApolloReactCommon.MutationResult<DeleteQuestionaireGroupMutation>;
export type DeleteQuestionaireGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteQuestionaireGroupMutation,
  DeleteQuestionaireGroupMutationVariables
>;
export const CreateQuestionDocument = gql`
  mutation CreateQuestion($input: QuestionInput!) {
    createQuestion(input: $input)
      @rest(type: "CreateQuestion", path: "/question", method: "POST", endpoint: "default") {
      id
      groupId
      order
      type
      name
      required
      commentEnabled
      showOn
      options {
        name
      }
      entity {
        type
        subType
      }
    }
  }
`;
export function useCreateQuestionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateQuestionMutation, CreateQuestionMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(
    CreateQuestionDocument,
    baseOptions,
  );
}
export type CreateQuestionMutationHookResult = ReturnType<typeof useCreateQuestionMutation>;
export type CreateQuestionMutationResult = ApolloReactCommon.MutationResult<CreateQuestionMutation>;
export type CreateQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateQuestionMutation,
  CreateQuestionMutationVariables
>;
export const UpdateQuestionDocument = gql`
  mutation UpdateQuestion($questionId: ID!, $input: UpdateQuestionInput!) {
    updateQuestion(questionId: $questionId, input: $input)
      @rest(type: "UpdateQuestion", path: "/question/{args.questionId}", method: "PUT", endpoint: "default") {
      id
      groupId
      order
      type
      name
      required
      commentEnabled
      showOn
      options {
        name
      }
      entity {
        type
        subType
      }
    }
  }
`;
export function useUpdateQuestionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateQuestionMutation, UpdateQuestionMutationVariables>,
) {
  return ApolloReactHooks.useMutation<UpdateQuestionMutation, UpdateQuestionMutationVariables>(
    UpdateQuestionDocument,
    baseOptions,
  );
}
export type UpdateQuestionMutationHookResult = ReturnType<typeof useUpdateQuestionMutation>;
export type UpdateQuestionMutationResult = ApolloReactCommon.MutationResult<UpdateQuestionMutation>;
export type UpdateQuestionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateQuestionMutation,
  UpdateQuestionMutationVariables
>;
export const TiaraSendMessageDocument = gql`
  mutation TiaraSendMessage($input: TiaraSendMessageInput!) {
    tiaraSendMessage(input: $input)
  }
`;
export function useTiaraSendMessageMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<TiaraSendMessageMutation, TiaraSendMessageMutationVariables>,
) {
  return ApolloReactHooks.useMutation<TiaraSendMessageMutation, TiaraSendMessageMutationVariables>(
    TiaraSendMessageDocument,
    baseOptions,
  );
}
export type TiaraSendMessageMutationHookResult = ReturnType<typeof useTiaraSendMessageMutation>;
export type TiaraSendMessageMutationResult = ApolloReactCommon.MutationResult<TiaraSendMessageMutation>;
export type TiaraSendMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<
  TiaraSendMessageMutation,
  TiaraSendMessageMutationVariables
>;
export const UpdateWorkflowActionDocument = gql`
  mutation UpdateWorkflowAction($id: ID!, $input: UpdateWorkflowActionInput!) {
    updateWorkflowAction(id: $id, input: $input) {
      id
    }
  }
`;
export function useUpdateWorkflowActionMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateWorkflowActionMutation,
    UpdateWorkflowActionMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateWorkflowActionMutation, UpdateWorkflowActionMutationVariables>(
    UpdateWorkflowActionDocument,
    baseOptions,
  );
}
export type UpdateWorkflowActionMutationHookResult = ReturnType<typeof useUpdateWorkflowActionMutation>;
export type UpdateWorkflowActionMutationResult = ApolloReactCommon.MutationResult<UpdateWorkflowActionMutation>;
export type UpdateWorkflowActionMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateWorkflowActionMutation,
  UpdateWorkflowActionMutationVariables
>;
export const UpdateWorkflowTriggerDocument = gql`
  mutation UpdateWorkflowTrigger($id: ID!, $input: UpdateWorkflowTriggerInput!) {
    updateWorkflowTrigger(id: $id, input: $input) {
      id
    }
  }
`;
export function useUpdateWorkflowTriggerMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateWorkflowTriggerMutation,
    UpdateWorkflowTriggerMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<UpdateWorkflowTriggerMutation, UpdateWorkflowTriggerMutationVariables>(
    UpdateWorkflowTriggerDocument,
    baseOptions,
  );
}
export type UpdateWorkflowTriggerMutationHookResult = ReturnType<typeof useUpdateWorkflowTriggerMutation>;
export type UpdateWorkflowTriggerMutationResult = ApolloReactCommon.MutationResult<UpdateWorkflowTriggerMutation>;
export type UpdateWorkflowTriggerMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateWorkflowTriggerMutation,
  UpdateWorkflowTriggerMutationVariables
>;
export const GetAllocateDocument = gql`
  query GetAllocate($id: ID!) {
    getAllocate(id: $id)
      @rest(type: "GetAllocateResponse", path: "/get-allocate?id={args.id}", method: "GET", endpoint: "default") {
      id
      companyId
      objectId
      name
      version
      note
      criteria {
        type
        startDate
        endDate
        amountAssignedCandidates
        rentalePriceCalculation {
          minJointIncome
          maxJointIncome
          minRentByIncome
          maxRentByIcome
        }
        isPublishedExternally
        interestDetails {
          minNumberOfPreferences
          registrationForm
          registrationTo
          assignOnlyWithInterest
        }
        documents {
          acceptedMissingDocumentsNumber
          onlyAcceptedDocuments
        }
        criteriaOrder {
          name
          order
          checked
        }
      }
      people {
        jointIncome {
          lowestPercentage
          distributionThreshold
          ficitousCalculation
          includePension
        }
        income {
          availableCapitalCount
          deductMonthlyObligations
          minAge
          employementType
        }
        partnerIncome {
          availableCapitalCount
          deductMonthlyObligations
          minAge
          employementType
        }
      }
      home {
        amountChildren
        amountAdults
        situation
        hasCurrentResidence
      }
      assignToRole
    }
  }
`;
export function useGetAllocateQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllocateQuery, GetAllocateQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetAllocateQuery, GetAllocateQueryVariables>(GetAllocateDocument, baseOptions);
}
export function useGetAllocateLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllocateQuery, GetAllocateQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetAllocateQuery, GetAllocateQueryVariables>(GetAllocateDocument, baseOptions);
}
export type GetAllocateQueryHookResult = ReturnType<typeof useGetAllocateQuery>;
export type GetAllocateLazyQueryHookResult = ReturnType<typeof useGetAllocateLazyQuery>;
export type GetAllocateQueryResult = ApolloReactCommon.QueryResult<GetAllocateQuery, GetAllocateQueryVariables>;
export const ListAllocatesDocument = gql`
  query ListAllocates($objectId: ID!) {
    listAllocates(objectId: $objectId)
      @rest(
        type: "ListAllocates"
        path: "/list-allocates?objectId={args.objectId}"
        method: "GET"
        endpoint: "default"
      ) {
      id
      companyId
      objectId
      name
      version
      note
      criteria {
        type
        startDate
        endDate
        amountAssignedCandidates
        rentalePriceCalculation {
          minJointIncome
          maxJointIncome
          minRentByIncome
          maxRentByIcome
        }
        isPublishedExternally
        interestDetails {
          minNumberOfPreferences
          registrationForm
          registrationTo
          assignOnlyWithInterest
        }
        documents {
          acceptedMissingDocumentsNumber
          onlyAcceptedDocuments
        }
        criteriaOrder {
          name
          order
          checked
        }
      }
      people {
        jointIncome {
          lowestPercentage
          distributionThreshold
          ficitousCalculation
          includePension
        }
        income {
          availableCapitalCount
          deductMonthlyObligations
          minAge
          employementType
        }
        partnerIncome {
          availableCapitalCount
          deductMonthlyObligations
          minAge
          employementType
        }
      }
      home {
        amountChildren
        amountAdults
        situation
        hasCurrentResidence
      }
      assignToRole
    }
  }
`;
export function useListAllocatesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListAllocatesQuery, ListAllocatesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListAllocatesQuery, ListAllocatesQueryVariables>(ListAllocatesDocument, baseOptions);
}
export function useListAllocatesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListAllocatesQuery, ListAllocatesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListAllocatesQuery, ListAllocatesQueryVariables>(
    ListAllocatesDocument,
    baseOptions,
  );
}
export type ListAllocatesQueryHookResult = ReturnType<typeof useListAllocatesQuery>;
export type ListAllocatesLazyQueryHookResult = ReturnType<typeof useListAllocatesLazyQuery>;
export type ListAllocatesQueryResult = ApolloReactCommon.QueryResult<ListAllocatesQuery, ListAllocatesQueryVariables>;
export const GetBillingDocument = gql`
  query GetBilling {
    getBilling {
      url
    }
  }
`;
export function useGetBillingQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetBillingQuery, GetBillingQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetBillingQuery, GetBillingQueryVariables>(GetBillingDocument, baseOptions);
}
export function useGetBillingLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBillingQuery, GetBillingQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetBillingQuery, GetBillingQueryVariables>(GetBillingDocument, baseOptions);
}
export type GetBillingQueryHookResult = ReturnType<typeof useGetBillingQuery>;
export type GetBillingLazyQueryHookResult = ReturnType<typeof useGetBillingLazyQuery>;
export type GetBillingQueryResult = ApolloReactCommon.QueryResult<GetBillingQuery, GetBillingQueryVariables>;
export const BulkDetailsDocument = gql`
  query BulkDetails($input: GetBulkDetailsInput!) {
    getBulkDetails(input: $input) {
      id
      value
    }
  }
`;
export function useBulkDetailsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<BulkDetailsQuery, BulkDetailsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<BulkDetailsQuery, BulkDetailsQueryVariables>(BulkDetailsDocument, baseOptions);
}
export function useBulkDetailsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BulkDetailsQuery, BulkDetailsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<BulkDetailsQuery, BulkDetailsQueryVariables>(BulkDetailsDocument, baseOptions);
}
export type BulkDetailsQueryHookResult = ReturnType<typeof useBulkDetailsQuery>;
export type BulkDetailsLazyQueryHookResult = ReturnType<typeof useBulkDetailsLazyQuery>;
export type BulkDetailsQueryResult = ApolloReactCommon.QueryResult<BulkDetailsQuery, BulkDetailsQueryVariables>;
export const ListCalendarDocument = gql`
  query ListCalendar($input: AppointmentSearch!) {
    listCalendar(input: $input) {
      id
      from
      to
      travelTimeBefore
      travelTimeAfter
      title
      allDay
      type
      isInsideOffice
      location
      outsideLocation
      taskLabel
      state
      agreementType
      repeatAppointment
      description
      appointmentType
      assignedPimIds
      invitedPersons
    }
  }
`;
export function useListCalendarQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListCalendarQuery, ListCalendarQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListCalendarQuery, ListCalendarQueryVariables>(ListCalendarDocument, baseOptions);
}
export function useListCalendarLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListCalendarQuery, ListCalendarQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListCalendarQuery, ListCalendarQueryVariables>(
    ListCalendarDocument,
    baseOptions,
  );
}
export type ListCalendarQueryHookResult = ReturnType<typeof useListCalendarQuery>;
export type ListCalendarLazyQueryHookResult = ReturnType<typeof useListCalendarLazyQuery>;
export type ListCalendarQueryResult = ApolloReactCommon.QueryResult<ListCalendarQuery, ListCalendarQueryVariables>;
export const GetAppointmentDocument = gql`
  query GetAppointment($appointmentId: ID!) {
    getAppointment(appointmentId: $appointmentId) {
      id
      from
      to
      travelTimeBefore
      travelTimeAfter
      title
      allDay
      type
      isInsideOffice
      location
      outsideLocation
      taskLabel
      state
      agreementType
      repeatAppointment
      description
      appointmentType
      assignedPimIds
      invitedPersons
    }
  }
`;
export function useGetAppointmentQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetAppointmentQuery, GetAppointmentQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetAppointmentQuery, GetAppointmentQueryVariables>(
    GetAppointmentDocument,
    baseOptions,
  );
}
export function useGetAppointmentLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAppointmentQuery, GetAppointmentQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetAppointmentQuery, GetAppointmentQueryVariables>(
    GetAppointmentDocument,
    baseOptions,
  );
}
export type GetAppointmentQueryHookResult = ReturnType<typeof useGetAppointmentQuery>;
export type GetAppointmentLazyQueryHookResult = ReturnType<typeof useGetAppointmentLazyQuery>;
export type GetAppointmentQueryResult = ApolloReactCommon.QueryResult<
  GetAppointmentQuery,
  GetAppointmentQueryVariables
>;
export const CheckCompanyRegisteredDocument = gql`
  query CheckCompanyRegistered($name: String!) {
    checkCompanyRegistered(name: $name) {
      suggestions
      taken
    }
  }
`;
export function useCheckCompanyRegisteredQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CheckCompanyRegisteredQuery, CheckCompanyRegisteredQueryVariables>,
) {
  return ApolloReactHooks.useQuery<CheckCompanyRegisteredQuery, CheckCompanyRegisteredQueryVariables>(
    CheckCompanyRegisteredDocument,
    baseOptions,
  );
}
export function useCheckCompanyRegisteredLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    CheckCompanyRegisteredQuery,
    CheckCompanyRegisteredQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<CheckCompanyRegisteredQuery, CheckCompanyRegisteredQueryVariables>(
    CheckCompanyRegisteredDocument,
    baseOptions,
  );
}
export type CheckCompanyRegisteredQueryHookResult = ReturnType<typeof useCheckCompanyRegisteredQuery>;
export type CheckCompanyRegisteredLazyQueryHookResult = ReturnType<typeof useCheckCompanyRegisteredLazyQuery>;
export type CheckCompanyRegisteredQueryResult = ApolloReactCommon.QueryResult<
  CheckCompanyRegisteredQuery,
  CheckCompanyRegisteredQueryVariables
>;
export const GetCompanyDetailsDocument = gql`
  query GetCompanyDetails {
    getCompanyDetails {
      id
      name
      domain
      address
      addressSecondLine
      state
      city
      zipcode
      country
      houseNumber
      floor
      chamberOfCommerce
      vat
      image {
        url
        id
      }
    }
  }
`;
export function useGetCompanyDetailsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>(
    GetCompanyDetailsDocument,
    baseOptions,
  );
}
export function useGetCompanyDetailsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>(
    GetCompanyDetailsDocument,
    baseOptions,
  );
}
export type GetCompanyDetailsQueryHookResult = ReturnType<typeof useGetCompanyDetailsQuery>;
export type GetCompanyDetailsLazyQueryHookResult = ReturnType<typeof useGetCompanyDetailsLazyQuery>;
export type GetCompanyDetailsQueryResult = ApolloReactCommon.QueryResult<
  GetCompanyDetailsQuery,
  GetCompanyDetailsQueryVariables
>;
export const GetCrmContactInformationDocument = gql`
  query GetCrmContactInformation($id: ID!) {
    getCrmContactInformation(id: $id) {
      id
      contactInfoDescription
      addresses {
        id
        type
        street
        houseNumber
        addition
        zipcode
        city
        country
        extraInformation
        availableFrom
        note
      }
      emailAddresses {
        id
        type
        email
        availableFrom
        note
      }
      phoneNumbers {
        id
        type
        countryCode
        phoneNumber
        availableFrom
        note
      }
      socialMedia {
        id
        type
        url
      }
      dateCreated
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
    }
  }
`;
export function useGetCrmContactInformationQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCrmContactInformationQuery,
    GetCrmContactInformationQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<GetCrmContactInformationQuery, GetCrmContactInformationQueryVariables>(
    GetCrmContactInformationDocument,
    baseOptions,
  );
}
export function useGetCrmContactInformationLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCrmContactInformationQuery,
    GetCrmContactInformationQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<GetCrmContactInformationQuery, GetCrmContactInformationQueryVariables>(
    GetCrmContactInformationDocument,
    baseOptions,
  );
}
export type GetCrmContactInformationQueryHookResult = ReturnType<typeof useGetCrmContactInformationQuery>;
export type GetCrmContactInformationLazyQueryHookResult = ReturnType<typeof useGetCrmContactInformationLazyQuery>;
export type GetCrmContactInformationQueryResult = ApolloReactCommon.QueryResult<
  GetCrmContactInformationQuery,
  GetCrmContactInformationQueryVariables
>;
export const GetCrmFamilyContactsDocument = gql`
  query getCrmFamilyContacts($id: ID!) {
    getCrmFamilyContacts(id: $id) {
      id
      maritalStatus
      maritalStatusDate
      maritalStatusInformation
      familyCompositionChildren
      familyCompositionAdults
      familyCompositionInformation
      partners {
        isDivorced
        partner {
          id
          firstName
          initials
          lastName
          email
          avatar {
            url
          }
          isPassedAway
          dateOfDeath
        }
      }
      contacts {
        type
        contact {
          id
        }
      }
    }
  }
`;
export function useGetCrmFamilyContactsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCrmFamilyContactsQuery, GetCrmFamilyContactsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCrmFamilyContactsQuery, GetCrmFamilyContactsQueryVariables>(
    GetCrmFamilyContactsDocument,
    baseOptions,
  );
}
export function useGetCrmFamilyContactsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCrmFamilyContactsQuery, GetCrmFamilyContactsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetCrmFamilyContactsQuery, GetCrmFamilyContactsQueryVariables>(
    GetCrmFamilyContactsDocument,
    baseOptions,
  );
}
export type GetCrmFamilyContactsQueryHookResult = ReturnType<typeof useGetCrmFamilyContactsQuery>;
export type GetCrmFamilyContactsLazyQueryHookResult = ReturnType<typeof useGetCrmFamilyContactsLazyQuery>;
export type GetCrmFamilyContactsQueryResult = ApolloReactCommon.QueryResult<
  GetCrmFamilyContactsQuery,
  GetCrmFamilyContactsQueryVariables
>;
export const GetCrmFinancialDocument = gql`
  query GetCrmFinancial($id: ID!) {
    getCrmFinancial(id: $id) {
      id
      financialInfo
      income {
        id
        type
        information
        employerIncome {
          profession
          employer {
            id
            firstName
            extraNames
            initials
            lastName
            email
            phoneNumber
            avatar {
              id
              url
            }
          }
          employerInformation {
            name
            street
            houseNumber
            addition
            zipcode
            city
            country
          }
          employmentType
          grossIncome
          grossIncomePeriod
          holidayBonus
          fixedThirteenthMonth
          irregularityAllowance
          irregularityAllowancePeriod
          profitDistribution
          profitDistributionPeriod
          commission
          commissionPeriod
          overtime
          overtimePeriod
        }
        equityIncome {
          income
        }
        pensionIncome {
          aowBenefit
          aowBenefitPeriod
          retirementBenefit
          retirementBenefitPeriod
        }
        socialBenefitIncome {
          income
          incomePeriod
          socialBenefitType
        }
        entrepreneurIncome {
          entrepreneurType
          companyCar
          companyBike
          pastPensionAge
          smeProfitExemption
          incomePerYear
          workingHoursPerMonth
          yearsAsIndependent
        }
      }
      financialObligations {
        id
        type
        financialObligation
        information
      }
      bankAccounts {
        id
        type
        accountNumber
        bic
        iban
        swift
        purpose
      }
    }
  }
`;
export function useGetCrmFinancialQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCrmFinancialQuery, GetCrmFinancialQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCrmFinancialQuery, GetCrmFinancialQueryVariables>(
    GetCrmFinancialDocument,
    baseOptions,
  );
}
export function useGetCrmFinancialLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCrmFinancialQuery, GetCrmFinancialQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetCrmFinancialQuery, GetCrmFinancialQueryVariables>(
    GetCrmFinancialDocument,
    baseOptions,
  );
}
export type GetCrmFinancialQueryHookResult = ReturnType<typeof useGetCrmFinancialQuery>;
export type GetCrmFinancialLazyQueryHookResult = ReturnType<typeof useGetCrmFinancialLazyQuery>;
export type GetCrmFinancialQueryResult = ApolloReactCommon.QueryResult<
  GetCrmFinancialQuery,
  GetCrmFinancialQueryVariables
>;
export const GetCrmGeneralDocument = gql`
  query getCrmGeneral($id: ID!) {
    getCrmGeneral(id: $id) {
      id
      firstName
      extraNames
      initials
      lastName
      gender
      dateOfBirth
      placeOfBirth
      nationality
      dateOfDeath
      isPassedAway
      preferredLanguage
      identification
      identificationNumber
      identificationIssueCity
      identificationIssueDate
      identificationExpirationDate
      preferredTitlePrefix
      preferredTitleSuffix
      preferredLetterSalutation
      preferredTitleInformation
      identificationNumbers {
        type
        number
        name
      }
      avatar {
        id
        key
        fileName
        url
      }
      status
      completeness
      dateCreated
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
    }
  }
`;
export function useGetCrmGeneralQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCrmGeneralQuery, GetCrmGeneralQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCrmGeneralQuery, GetCrmGeneralQueryVariables>(GetCrmGeneralDocument, baseOptions);
}
export function useGetCrmGeneralLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCrmGeneralQuery, GetCrmGeneralQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetCrmGeneralQuery, GetCrmGeneralQueryVariables>(
    GetCrmGeneralDocument,
    baseOptions,
  );
}
export type GetCrmGeneralQueryHookResult = ReturnType<typeof useGetCrmGeneralQuery>;
export type GetCrmGeneralLazyQueryHookResult = ReturnType<typeof useGetCrmGeneralLazyQuery>;
export type GetCrmGeneralQueryResult = ApolloReactCommon.QueryResult<GetCrmGeneralQuery, GetCrmGeneralQueryVariables>;
export const GetCrmHomeSituationDocument = gql`
  query GetCrmHomeSituation($id: ID!) {
    getCrmHomeSituation(id: $id) {
      id
      currentHomeSituation
      currentHomeStatus
      currentHomeSalesValue
      currentHomeMortgage
      currentHomeInformation
      reasonToMove
      movingDate
      movingInformation
    }
  }
`;
export function useGetCrmHomeSituationQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCrmHomeSituationQuery, GetCrmHomeSituationQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCrmHomeSituationQuery, GetCrmHomeSituationQueryVariables>(
    GetCrmHomeSituationDocument,
    baseOptions,
  );
}
export function useGetCrmHomeSituationLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCrmHomeSituationQuery, GetCrmHomeSituationQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetCrmHomeSituationQuery, GetCrmHomeSituationQueryVariables>(
    GetCrmHomeSituationDocument,
    baseOptions,
  );
}
export type GetCrmHomeSituationQueryHookResult = ReturnType<typeof useGetCrmHomeSituationQuery>;
export type GetCrmHomeSituationLazyQueryHookResult = ReturnType<typeof useGetCrmHomeSituationLazyQuery>;
export type GetCrmHomeSituationQueryResult = ApolloReactCommon.QueryResult<
  GetCrmHomeSituationQuery,
  GetCrmHomeSituationQueryVariables
>;
export const CrmListDocument = gql`
  query crmList(
    $type: CrmType
    $status: CrmStatus
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
    $city: String
  ) {
    crmList(
      filters: { type: $type, status: $status, city: $city }
      pagination: { from: $from, limit: $limit }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        type
        firstName
        initials
        lastName
        gender
        dateOfBirth
        placeOfBirth
        nationality
        maritalStatus
        familyCompositionChildren
        familyCompositionAdults
        currentHomeSituation
        partners {
          partner {
            id
            firstName
            lastName
            avatar {
              url
            }
          }
        }
        phoneNumber
        addresses {
          city
        }
        email
        avatar {
          url
        }
        status
        dateCreated
        dateUpdated
        completeness
      }
    }
  }
`;
export function useCrmListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CrmListQuery, CrmListQueryVariables>) {
  return ApolloReactHooks.useQuery<CrmListQuery, CrmListQueryVariables>(CrmListDocument, baseOptions);
}
export function useCrmListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CrmListQuery, CrmListQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<CrmListQuery, CrmListQueryVariables>(CrmListDocument, baseOptions);
}
export type CrmListQueryHookResult = ReturnType<typeof useCrmListQuery>;
export type CrmListLazyQueryHookResult = ReturnType<typeof useCrmListLazyQuery>;
export type CrmListQueryResult = ApolloReactCommon.QueryResult<CrmListQuery, CrmListQueryVariables>;
export const ListCrmsCountDocument = gql`
  query ListCrmsCount($type: CrmType) {
    actionRequired: crmList(filters: { type: $type, status: ActionRequired }) {
      metadata {
        total
      }
    }
    active: crmList(filters: { type: $type, status: Active }) {
      metadata {
        total
      }
    }
    inactive: crmList(filters: { type: $type, status: Inactive }) {
      metadata {
        total
      }
    }
  }
`;
export function useListCrmsCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListCrmsCountQuery, ListCrmsCountQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListCrmsCountQuery, ListCrmsCountQueryVariables>(ListCrmsCountDocument, baseOptions);
}
export function useListCrmsCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListCrmsCountQuery, ListCrmsCountQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListCrmsCountQuery, ListCrmsCountQueryVariables>(
    ListCrmsCountDocument,
    baseOptions,
  );
}
export type ListCrmsCountQueryHookResult = ReturnType<typeof useListCrmsCountQuery>;
export type ListCrmsCountLazyQueryHookResult = ReturnType<typeof useListCrmsCountLazyQuery>;
export type ListCrmsCountQueryResult = ApolloReactCommon.QueryResult<ListCrmsCountQuery, ListCrmsCountQueryVariables>;
export const GetCrmWithSameInfoDocument = gql`
  query GetCrmWithSameInfo($input: CrmWithSameInfoInput!) {
    getCrmWithSameInfo(input: $input) {
      metadata {
        total
      }
      items {
        id
      }
    }
  }
`;
export function useGetCrmWithSameInfoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCrmWithSameInfoQuery, GetCrmWithSameInfoQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCrmWithSameInfoQuery, GetCrmWithSameInfoQueryVariables>(
    GetCrmWithSameInfoDocument,
    baseOptions,
  );
}
export function useGetCrmWithSameInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCrmWithSameInfoQuery, GetCrmWithSameInfoQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetCrmWithSameInfoQuery, GetCrmWithSameInfoQueryVariables>(
    GetCrmWithSameInfoDocument,
    baseOptions,
  );
}
export type GetCrmWithSameInfoQueryHookResult = ReturnType<typeof useGetCrmWithSameInfoQuery>;
export type GetCrmWithSameInfoLazyQueryHookResult = ReturnType<typeof useGetCrmWithSameInfoLazyQuery>;
export type GetCrmWithSameInfoQueryResult = ApolloReactCommon.QueryResult<
  GetCrmWithSameInfoQuery,
  GetCrmWithSameInfoQueryVariables
>;
export const CrmBulkDetailsDocument = gql`
  query CrmBulkDetails($ids: [ID!]!) {
    status: getBulkDetails(input: { ids: $ids, field: Status, entity: Crm }) {
      value
    }
  }
`;
export function useCrmBulkDetailsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CrmBulkDetailsQuery, CrmBulkDetailsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<CrmBulkDetailsQuery, CrmBulkDetailsQueryVariables>(
    CrmBulkDetailsDocument,
    baseOptions,
  );
}
export function useCrmBulkDetailsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CrmBulkDetailsQuery, CrmBulkDetailsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<CrmBulkDetailsQuery, CrmBulkDetailsQueryVariables>(
    CrmBulkDetailsDocument,
    baseOptions,
  );
}
export type CrmBulkDetailsQueryHookResult = ReturnType<typeof useCrmBulkDetailsQuery>;
export type CrmBulkDetailsLazyQueryHookResult = ReturnType<typeof useCrmBulkDetailsLazyQuery>;
export type CrmBulkDetailsQueryResult = ApolloReactCommon.QueryResult<
  CrmBulkDetailsQuery,
  CrmBulkDetailsQueryVariables
>;
export const ListDmsFoldersDocument = gql`
  query ListDmsFolders($entityId: ID!) {
    listDmsFolders(entityId: $entityId)
      @rest(type: "ListDmsFolders", path: "/dms/folders/list/{args.entityId}", method: "GET", endpoint: "default") {
      id
      entityId
      companyId
      foldername
      entityType
      type
      order
      deletedAt
    }
  }
`;
export function useListDmsFoldersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListDmsFoldersQuery, ListDmsFoldersQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListDmsFoldersQuery, ListDmsFoldersQueryVariables>(
    ListDmsFoldersDocument,
    baseOptions,
  );
}
export function useListDmsFoldersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListDmsFoldersQuery, ListDmsFoldersQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListDmsFoldersQuery, ListDmsFoldersQueryVariables>(
    ListDmsFoldersDocument,
    baseOptions,
  );
}
export type ListDmsFoldersQueryHookResult = ReturnType<typeof useListDmsFoldersQuery>;
export type ListDmsFoldersLazyQueryHookResult = ReturnType<typeof useListDmsFoldersLazyQuery>;
export type ListDmsFoldersQueryResult = ApolloReactCommon.QueryResult<
  ListDmsFoldersQuery,
  ListDmsFoldersQueryVariables
>;
export const ListEmailFoldersDocument = gql`
  query ListEmailFolders($accountId: String!) {
    listEmailFolders(accountId: $accountId)
      @rest(
        type: "ListEmailFolders"
        path: "/nylas-email-folders-unread-count?accountId={args.accountId}"
        method: "GET"
        endpoint: "default"
      ) {
      folder {
        id
        name
        displayName
        nylasFolderId
      }
      numberOfUnreadEmails
    }
  }
`;
export function useListEmailFoldersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListEmailFoldersQuery, ListEmailFoldersQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListEmailFoldersQuery, ListEmailFoldersQueryVariables>(
    ListEmailFoldersDocument,
    baseOptions,
  );
}
export function useListEmailFoldersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListEmailFoldersQuery, ListEmailFoldersQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListEmailFoldersQuery, ListEmailFoldersQueryVariables>(
    ListEmailFoldersDocument,
    baseOptions,
  );
}
export type ListEmailFoldersQueryHookResult = ReturnType<typeof useListEmailFoldersQuery>;
export type ListEmailFoldersLazyQueryHookResult = ReturnType<typeof useListEmailFoldersLazyQuery>;
export type ListEmailFoldersQueryResult = ApolloReactCommon.QueryResult<
  ListEmailFoldersQuery,
  ListEmailFoldersQueryVariables
>;
export const ListEmailDocument = gql`
  query ListEmail($accountId: String!, $folderId: ID, $unread: Boolean) {
    listEmail(accountId: $accountId, folderId: $folderId, unread: $unread)
      @rest(
        type: "ListEmail"
        path: "/nylas-email-list?accountId={args.accountId}&folderId={args.folderId}&unread={args.unread}"
        method: "GET"
        endpoint: "default"
      ) {
      id
      folder {
        id
        name
        displayName
      }
      from {
        name
        email
      }
      to {
        name
        email
      }
      subject
      date
      thread_id
    }
  }
`;
export function useListEmailQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListEmailQuery, ListEmailQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListEmailQuery, ListEmailQueryVariables>(ListEmailDocument, baseOptions);
}
export function useListEmailLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListEmailQuery, ListEmailQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListEmailQuery, ListEmailQueryVariables>(ListEmailDocument, baseOptions);
}
export type ListEmailQueryHookResult = ReturnType<typeof useListEmailQuery>;
export type ListEmailLazyQueryHookResult = ReturnType<typeof useListEmailLazyQuery>;
export type ListEmailQueryResult = ApolloReactCommon.QueryResult<ListEmailQuery, ListEmailQueryVariables>;
export const GetEmailDocument = gql`
  query GetEmail($accountId: String!, $emailId: String!) {
    getEmail(accountId: $accountId, emailId: $emailId)
      @rest(
        type: "GetEmail"
        path: "/nylas-email-item?accountId={args.accountId}&emailId={args.emailId}"
        method: "GET"
        endpoint: "default"
      ) {
      id
      folder {
        id
        name
        displayName
      }
      from {
        name
        email
      }
      to {
        name
        email
      }
      files {
        id
        filename
      }
      subject
      body
      date
      thread_id
      threads {
        id
        message_ids
        participants {
          email
          name
        }
      }
      threadMessages {
        id
        from {
          name
          email
        }
        to {
          name
          email
        }
        subject
        date
      }
    }
  }
`;
export function useGetEmailQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetEmailQuery, GetEmailQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetEmailQuery, GetEmailQueryVariables>(GetEmailDocument, baseOptions);
}
export function useGetEmailLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEmailQuery, GetEmailQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetEmailQuery, GetEmailQueryVariables>(GetEmailDocument, baseOptions);
}
export type GetEmailQueryHookResult = ReturnType<typeof useGetEmailQuery>;
export type GetEmailLazyQueryHookResult = ReturnType<typeof useGetEmailLazyQuery>;
export type GetEmailQueryResult = ApolloReactCommon.QueryResult<GetEmailQuery, GetEmailQueryVariables>;
export const GetKikSettingsDocument = gql`
  query GetKikSettings {
    getKikSettings {
      username
    }
  }
`;
export function useGetKikSettingsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetKikSettingsQuery, GetKikSettingsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetKikSettingsQuery, GetKikSettingsQueryVariables>(
    GetKikSettingsDocument,
    baseOptions,
  );
}
export function useGetKikSettingsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetKikSettingsQuery, GetKikSettingsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetKikSettingsQuery, GetKikSettingsQueryVariables>(
    GetKikSettingsDocument,
    baseOptions,
  );
}
export type GetKikSettingsQueryHookResult = ReturnType<typeof useGetKikSettingsQuery>;
export type GetKikSettingsLazyQueryHookResult = ReturnType<typeof useGetKikSettingsLazyQuery>;
export type GetKikSettingsQueryResult = ApolloReactCommon.QueryResult<
  GetKikSettingsQuery,
  GetKikSettingsQueryVariables
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
export const GetCrmLabelsDocument = gql`
  query GetCrmLabels($id: ID!, $properties: [LabelProperty!]) {
    getCrmLabels(parentId: $id, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
export function useGetCrmLabelsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetCrmLabelsQuery, GetCrmLabelsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetCrmLabelsQuery, GetCrmLabelsQueryVariables>(GetCrmLabelsDocument, baseOptions);
}
export function useGetCrmLabelsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCrmLabelsQuery, GetCrmLabelsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetCrmLabelsQuery, GetCrmLabelsQueryVariables>(
    GetCrmLabelsDocument,
    baseOptions,
  );
}
export type GetCrmLabelsQueryHookResult = ReturnType<typeof useGetCrmLabelsQuery>;
export type GetCrmLabelsLazyQueryHookResult = ReturnType<typeof useGetCrmLabelsLazyQuery>;
export type GetCrmLabelsQueryResult = ApolloReactCommon.QueryResult<GetCrmLabelsQuery, GetCrmLabelsQueryVariables>;
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
  query ListPimsCount($pricingType: PricingType, $propertyTypes: [PropertyType]) {
    activeCount: listPims(filters: { archived: false, pricingType: $pricingType, propertyTypes: $propertyTypes }) {
      metadata {
        total
      }
    }
    archivedCount: listPims(filters: { archived: true, pricingType: $pricingType, propertyTypes: $propertyTypes }) {
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
  query ListPims(
    $archived: Boolean!
    $pricingType: PricingType
    $propertyTypes: [PropertyType]
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    listPims(
      filters: { archived: $archived, pricingType: $pricingType, propertyTypes: $propertyTypes }
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
        postalCode
        country
        pictures {
          id
          name
          description
          type
          dateUpdated
          file {
            id
            key
            fileName
            url
          }
        }
        mainPicture {
          id
          file {
            id
            key
            url
          }
        }
        salePrice
        rentPrice
        completeness
        archived
        attentionNote
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
export const LinkedPimsListDocument = gql`
  query LinkedPimsList($from: Int!, $limit: Int, $id: ID!) {
    pims: listPims(filters: { archived: false }, pagination: { from: $from, limit: $limit }) {
      items {
        id
        street
        houseNumber
        city
        postalCode
      }
    }
    linkedObjectIds: getObjectTypeLinkedPims(id: $id) {
      linkedPropertiesIds
    }
  }
`;
export function useLinkedPimsListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<LinkedPimsListQuery, LinkedPimsListQueryVariables>,
) {
  return ApolloReactHooks.useQuery<LinkedPimsListQuery, LinkedPimsListQueryVariables>(
    LinkedPimsListDocument,
    baseOptions,
  );
}
export function useLinkedPimsListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LinkedPimsListQuery, LinkedPimsListQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<LinkedPimsListQuery, LinkedPimsListQueryVariables>(
    LinkedPimsListDocument,
    baseOptions,
  );
}
export type LinkedPimsListQueryHookResult = ReturnType<typeof useLinkedPimsListQuery>;
export type LinkedPimsListLazyQueryHookResult = ReturnType<typeof useLinkedPimsListLazyQuery>;
export type LinkedPimsListQueryResult = ApolloReactCommon.QueryResult<
  LinkedPimsListQuery,
  LinkedPimsListQueryVariables
>;
export const GetMatchProfileDocument = gql`
  query GetMatchProfile($id: ID!) {
    getMatchProfile(id: $id)
      @rest(type: "GetMatchProfileResponse", path: "/get-match?id={args.id}", method: "GET", endpoint: "default") {
      id
      crmId
      companyId
      propertyType
      startDate
      endDate
      matchDuration {
        from
        to
      }
      matchWith
      description
      estateType
      commercialEstateType
      characteristics {
        general
        property {
          minAmountRooms
          minAmountBedrooms
          residentialLayerFrom
          residentialLayerTo
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      commercialCharacteristics {
        general
        property {
          minFreeHeight
          minFreeSpan
          minFloorLoad
          minAmountOfFloors
          minParkingLots
          engergyLabel
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      pricing {
        buyFrom
        buyTo
        rentFrom
        rentTo
        rentFrequency
        rentalPeriod
        preferredStartDate
      }
      outside {
        minGarage
      }
      garden {
        situation
        outdoorSpacesMin
        outdoorSpacesMax
        volumeMin
        volumeMax
      }
      conditions
      services
      tags
      measurements {
        surfaceFromMin
        surfaceToMin
        livingAreaFromMin
        livingAreaToMin
        businessSpaceSurfaceFromMin
        businessSpaceSurfaceToMin
        practiceRoomSurfaceToMax
        practiceRoomSurfaceToMin
        plotSurfaceFromMin
        plotSurfaceToMin
      }
      revenue {
        from
        to
      }
      exploitation {
        from
        to
      }
      requirements {
        key
        status
      }
      locations {
        latitude
        longitude
        street
        houseNumber
        radius
      }
      isActive
      createdAt
    }
  }
`;
export function useGetMatchProfileQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetMatchProfileQuery, GetMatchProfileQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetMatchProfileQuery, GetMatchProfileQueryVariables>(
    GetMatchProfileDocument,
    baseOptions,
  );
}
export function useGetMatchProfileLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMatchProfileQuery, GetMatchProfileQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetMatchProfileQuery, GetMatchProfileQueryVariables>(
    GetMatchProfileDocument,
    baseOptions,
  );
}
export type GetMatchProfileQueryHookResult = ReturnType<typeof useGetMatchProfileQuery>;
export type GetMatchProfileLazyQueryHookResult = ReturnType<typeof useGetMatchProfileLazyQuery>;
export type GetMatchProfileQueryResult = ApolloReactCommon.QueryResult<
  GetMatchProfileQuery,
  GetMatchProfileQueryVariables
>;
export const ListMatchProfilesDocument = gql`
  query ListMatchProfiles($crmId: ID!) {
    listMatchProfiles(crmId: $crmId)
      @rest(
        type: "ListMatchProfileResponse"
        path: "/list-matches?crmId={args.crmId}"
        method: "GET"
        endpoint: "default"
      ) {
      id
      crmId
      companyId
      propertyType
      startDate
      endDate
      matchDuration {
        from
        to
      }
      matchWith
      description
      estateType
      commercialEstateType
      characteristics {
        general
        property {
          minAmountRooms
          minAmountBedrooms
          residentialLayerFrom
          residentialLayerTo
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      commercialCharacteristics {
        general
        property {
          minFreeHeight
          minFreeSpan
          minFloorLoad
          minAmountOfFloors
          minParkingLots
          engergyLabel
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      pricing {
        buyFrom
        buyTo
        rentFrom
        rentTo
        rentFrequency
        rentalPeriod
        preferredStartDate
      }
      outside {
        minGarage
      }
      garden {
        situation
        outdoorSpacesMin
        outdoorSpacesMax
        volumeMin
        volumeMax
      }
      conditions
      services
      tags
      measurements {
        surfaceFromMin
        surfaceToMin
        livingAreaFromMin
        livingAreaToMin
        businessSpaceSurfaceFromMin
        businessSpaceSurfaceToMin
        practiceRoomSurfaceToMax
        practiceRoomSurfaceToMin
        plotSurfaceFromMin
        plotSurfaceToMin
      }
      revenue {
        from
        to
      }
      exploitation {
        from
        to
      }
      requirements {
        key
        status
      }
      locations {
        latitude
        longitude
        street
        houseNumber
        radius
      }
      isActive
      createdAt
    }
  }
`;
export function useListMatchProfilesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListMatchProfilesQuery, ListMatchProfilesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListMatchProfilesQuery, ListMatchProfilesQueryVariables>(
    ListMatchProfilesDocument,
    baseOptions,
  );
}
export function useListMatchProfilesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListMatchProfilesQuery, ListMatchProfilesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListMatchProfilesQuery, ListMatchProfilesQueryVariables>(
    ListMatchProfilesDocument,
    baseOptions,
  );
}
export type ListMatchProfilesQueryHookResult = ReturnType<typeof useListMatchProfilesQuery>;
export type ListMatchProfilesLazyQueryHookResult = ReturnType<typeof useListMatchProfilesLazyQuery>;
export type ListMatchProfilesQueryResult = ApolloReactCommon.QueryResult<
  ListMatchProfilesQuery,
  ListMatchProfilesQueryVariables
>;
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
      projectType
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
  query ListNcpsCount($pricingType: PricingType, $projectType: ProjectType) {
    activeCount: listNcps(filters: { archived: false, pricingType: $pricingType, projectType: $projectType }) {
      metadata {
        total
      }
    }
    archivedCount: listNcps(filters: { archived: true, pricingType: $pricingType, projectType: $projectType }) {
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
  query ListNcps(
    $pricingType: PricingType
    $projectType: ProjectType
    $archived: Boolean!
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    listNcps(
      filters: { archived: $archived, pricingType: $pricingType, projectType: $projectType }
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
          id
          file {
            url
          }
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
        projectType
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
export const NcpBulkDetailsDocument = gql`
  query NcpBulkDetails($ids: [ID!]!) {
    city: getBulkDetails(input: { ids: $ids, field: City, entity: Ncp }) {
      value
    }
  }
`;
export function useNcpBulkDetailsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpBulkDetailsQuery, NcpBulkDetailsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpBulkDetailsQuery, NcpBulkDetailsQueryVariables>(
    NcpBulkDetailsDocument,
    baseOptions,
  );
}
export function useNcpBulkDetailsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpBulkDetailsQuery, NcpBulkDetailsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpBulkDetailsQuery, NcpBulkDetailsQueryVariables>(
    NcpBulkDetailsDocument,
    baseOptions,
  );
}
export type NcpBulkDetailsQueryHookResult = ReturnType<typeof useNcpBulkDetailsQuery>;
export type NcpBulkDetailsLazyQueryHookResult = ReturnType<typeof useNcpBulkDetailsLazyQuery>;
export type NcpBulkDetailsQueryResult = ApolloReactCommon.QueryResult<
  NcpBulkDetailsQuery,
  NcpBulkDetailsQueryVariables
>;
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
        isMainPicture
        file {
          id
          key
          fileName
          url
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
          pictures {
            type
            file {
              url
            }
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
export const NcpOverallInfoDocument = gql`
  query NcpOverallInfo(
    $id: ID!
    $archived: Boolean
    $picturesSort: Sort
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int
    $limit: Int
    $name: String
  ) {
    getNcp(id: $id) {
      startSale
      startDelivery
      properties
      objectTypesCount
      projectType
    }
    getNcpPrices(id: $id) {
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
      }
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
    listObjectTypes(
      filters: { ncpId: $id, archived: $archived }
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
          id
          file {
            url
          }
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
          url
        }
      }
      mainPictureId
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
    getProjectPhases(filters: { name: $name, ncpId: $id }, pagination: { from: $from, limit: $limit }) {
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
export function useNcpOverallInfoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<NcpOverallInfoQuery, NcpOverallInfoQueryVariables>,
) {
  return ApolloReactHooks.useQuery<NcpOverallInfoQuery, NcpOverallInfoQueryVariables>(
    NcpOverallInfoDocument,
    baseOptions,
  );
}
export function useNcpOverallInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NcpOverallInfoQuery, NcpOverallInfoQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<NcpOverallInfoQuery, NcpOverallInfoQueryVariables>(
    NcpOverallInfoDocument,
    baseOptions,
  );
}
export type NcpOverallInfoQueryHookResult = ReturnType<typeof useNcpOverallInfoQuery>;
export type NcpOverallInfoLazyQueryHookResult = ReturnType<typeof useNcpOverallInfoLazyQuery>;
export type NcpOverallInfoQueryResult = ApolloReactCommon.QueryResult<
  NcpOverallInfoQuery,
  NcpOverallInfoQueryVariables
>;
export const GetNotificationsDocument = gql`
  query GetNotifications {
    getNotifications {
      items {
        id
        type
        receiver {
          id
          email
          isAdmin
          isActive
          image {
            url
          }
        }
        createdBy {
          id
          firstName
          lastName
          image {
            url
          }
        }
        linkedEntity {
          id
          type
        }
        isRead
        isDeleted
        description
        dateCreated
      }
    }
  }
`;
export function useGetNotificationsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(
    GetNotificationsDocument,
    baseOptions,
  );
}
export function useGetNotificationsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetNotificationsQuery, GetNotificationsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetNotificationsQuery, GetNotificationsQueryVariables>(
    GetNotificationsDocument,
    baseOptions,
  );
}
export type GetNotificationsQueryHookResult = ReturnType<typeof useGetNotificationsQuery>;
export type GetNotificationsLazyQueryHookResult = ReturnType<typeof useGetNotificationsLazyQuery>;
export type GetNotificationsQueryResult = ApolloReactCommon.QueryResult<
  GetNotificationsQuery,
  GetNotificationsQueryVariables
>;
export const ListNylasAccountDocument = gql`
  query ListNylasAccount($isCalendarConnected: Boolean, $isEmailConnected: Boolean) {
    listNylasAccount(isCalendarConnected: $isCalendarConnected, isEmailConnected: $isEmailConnected)
      @rest(type: "NylasAccount", path: "/nylas-account-list", method: "GET", endpoint: "default") {
      id
      email
      provider
      billingState
      syncState
      isCalendarConnected
      isEmailConnected
    }
  }
`;
export function useListNylasAccountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListNylasAccountQuery, ListNylasAccountQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListNylasAccountQuery, ListNylasAccountQueryVariables>(
    ListNylasAccountDocument,
    baseOptions,
  );
}
export function useListNylasAccountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListNylasAccountQuery, ListNylasAccountQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListNylasAccountQuery, ListNylasAccountQueryVariables>(
    ListNylasAccountDocument,
    baseOptions,
  );
}
export type ListNylasAccountQueryHookResult = ReturnType<typeof useListNylasAccountQuery>;
export type ListNylasAccountLazyQueryHookResult = ReturnType<typeof useListNylasAccountLazyQuery>;
export type ListNylasAccountQueryResult = ApolloReactCommon.QueryResult<
  ListNylasAccountQuery,
  ListNylasAccountQueryVariables
>;
export const GetNylasAuthUrlDocument = gql`
  query GetNylasAuthUrl($input: NylasAccountAuthOptions!) {
    getNylasAuthUrl(input: $input)
  }
`;
export function useGetNylasAuthUrlQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetNylasAuthUrlQuery, GetNylasAuthUrlQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetNylasAuthUrlQuery, GetNylasAuthUrlQueryVariables>(
    GetNylasAuthUrlDocument,
    baseOptions,
  );
}
export function useGetNylasAuthUrlLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetNylasAuthUrlQuery, GetNylasAuthUrlQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetNylasAuthUrlQuery, GetNylasAuthUrlQueryVariables>(
    GetNylasAuthUrlDocument,
    baseOptions,
  );
}
export type GetNylasAuthUrlQueryHookResult = ReturnType<typeof useGetNylasAuthUrlQuery>;
export type GetNylasAuthUrlLazyQueryHookResult = ReturnType<typeof useGetNylasAuthUrlLazyQuery>;
export type GetNylasAuthUrlQueryResult = ApolloReactCommon.QueryResult<
  GetNylasAuthUrlQuery,
  GetNylasAuthUrlQueryVariables
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
          id
          file {
            url
          }
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
        isMainPicture
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
          pictures {
            type
            file {
              url
            }
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
          attentionNote
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
export const PimAogSpacesDocument = gql`
  query PimAogSpaces($id: ID!) {
    getPimInside(id: $id) {
      id
      aogAnimalsDescription
      aogBuildingsDescription
      aogInstallationsDescription
      aogGroundsDescription
      aogSpaces {
        id
        name
        type
        groundConfiguration {
          typeOfLooseGround
          soilType
          soilTypeNotes
          measurements {
            length
            width
            surface
            fullBuiltWidth
            currentNumberOfSeats
            housingArea
          }
          specifications {
            type
            notes
          }
          cultivationTypes
          fenceTypes
        }
        buildingsConfiguration {
          buildingType
          numberOfSameBuilding
          buildingTypeNotes
          measurements {
            length
            width
            surface
            height
            volume
            constructionYear
          }
        }
        installationsConfiguration {
          type
          numberOfSameInstallations
          notes
        }
        animalsConfiguration {
          type
          numberOfSameAnimals
          notes
          specifications {
            type
            notes
          }
        }
        images {
          key
          id
          fileName
          url
        }
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateCreated
      }
    }
  }
`;
export function usePimAogSpacesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimAogSpacesQuery, PimAogSpacesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimAogSpacesQuery, PimAogSpacesQueryVariables>(PimAogSpacesDocument, baseOptions);
}
export function usePimAogSpacesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimAogSpacesQuery, PimAogSpacesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimAogSpacesQuery, PimAogSpacesQueryVariables>(
    PimAogSpacesDocument,
    baseOptions,
  );
}
export type PimAogSpacesQueryHookResult = ReturnType<typeof usePimAogSpacesQuery>;
export type PimAogSpacesLazyQueryHookResult = ReturnType<typeof usePimAogSpacesLazyQuery>;
export type PimAogSpacesQueryResult = ApolloReactCommon.QueryResult<PimAogSpacesQuery, PimAogSpacesQueryVariables>;
export const PimBogSpacesDocument = gql`
  query PimBogSpaces($id: ID!) {
    getPimInside(id: $id) {
      id
      bogSpaces {
        id
        type
        name
        notes
        description
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
        retailSpaceConfiguration {
          measurements {
            surface
            salesFloorArea
            frontWidth
            inUnitsFrom
            amountOfFloors
          }
          airTreatment
          specifications
          prices {
            priceInventoryGoodwill
            vatRate
            priceInventoryGoodwillVat
            priceInventoryGoodwillIncludedVat
            notes
          }
          wealthClass
          retailerAssociationContribution {
            contribution
            termsOfCosts
            vatPercentage
            vatTaxedContribution
            notes
          }
          commonRooms
        }
        leisureSpaceConfiguration {
          measurements {
            surface
            numberOfPitches
            numberOfStays
            capacityOfPersons
          }
          specifications
          prices {
            priceInventoryGoodwill
            vatRate
            priceInventoryGoodwillVat
            priceInventoryGoodwillIncludedVat
            notes
          }
          services
        }
        horecaSpaceConfiguration {
          measurements {
            surface
            salesFloorArea
            amountOfFloors
            amountOfRooms
            currentNumberOfSeats
            housingArea
          }
          type
          notes
          specifications
          prices {
            priceInventoryGoodwill
            vatRate
            priceInventoryGoodwillVat
            priceInventoryGoodwillIncludedVat
            revenueLastFiscalYear
            rentalIncomeHomeYear
            notes
          }
          wealthClass
          legalForm
        }
        businessSpaceConfiguration {
          measurements {
            surface
            freeHeight
            freeSpan
            floorLoad
            inUnitsFrom
            amountOfFloors
          }
          airTreatment
          services
          prices {
            price
            vatRate
            priceVat
            priceIncVat
          }
        }
        officeSpaceConfiguration {
          measurements {
            length
            width
            height
            surface
            volume
            measurementsCertificateAvailable
            inUnitsFrom
            amountOfFloors
          }
          airTreatment
          services
          prices {
            price
            vatRate
            priceVat
            priceIncVat
          }
          turnKey
          commonRooms
        }
        socialRealEstateSpaceConfiguration {
          measurements {
            surface
            numberOfCareUnits
            numberOfSeats
          }
          type
          notesAboutType
          destinationType
          specifications
          services
          prices {
            vatRate
            notes
          }
        }
        terrainConfiguration {
          terrainSpecifications {
            surface
            buildingHeightTerrain
            extensionTerrainPercent
            extensionTerrainM2
            pavedPercentage
          }
          specifications
          typeOfPavement
          prices {
            price
            vatRate
            priceVat
            priceIncVat
          }
        }
        storageConfiguration {
          measurements {
            length
            width
            height
            surface
            volume
          }
          type
          notes
        }
        images {
          url
        }
      }
    }
  }
`;
export function usePimBogSpacesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimBogSpacesQuery, PimBogSpacesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimBogSpacesQuery, PimBogSpacesQueryVariables>(PimBogSpacesDocument, baseOptions);
}
export function usePimBogSpacesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimBogSpacesQuery, PimBogSpacesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimBogSpacesQuery, PimBogSpacesQueryVariables>(
    PimBogSpacesDocument,
    baseOptions,
  );
}
export type PimBogSpacesQueryHookResult = ReturnType<typeof usePimBogSpacesQuery>;
export type PimBogSpacesLazyQueryHookResult = ReturnType<typeof usePimBogSpacesLazyQuery>;
export type PimBogSpacesQueryResult = ApolloReactCommon.QueryResult<PimBogSpacesQuery, PimBogSpacesQueryVariables>;
export const PimCadastreDocument = gql`
  query PimCadastre($id: ID!) {
    getPimCadastre(id: $id) {
      id
      cadastre {
        id
        description
        mapsDescription
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
      propertyType
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
      apartmentGeneral {
        propertyDetails {
          groundfloorApartmentStartsOnFloor
          amountOfTotalFloors
          notes
          apartmentType
          characteristicsApartment
        }
      }
      bogGeneral {
        type
        characteristics
        startsOnFloor
        totalFloors
        notes
      }
      aogGeneral {
        generalType
        additionalPosition
        houseLot {
          length
          width
          surface
          amountOfHouses
        }
        specifications {
          type
          notes
        }
      }
      parkingGeneral {
        type {
          type
          parkingNumber
          notes
        }
        measurements {
          length
          width
          surface
          capacity
          height
          volume
        }
        specifications {
          type
          notes
        }
        material {
          type
          notes
        }
        insulation {
          type
          notes
        }
      }
      buildingPlotGeneral {
        propertyDetails {
          plotReadyForConstruction
          buildingPlotNumber
          notes
          soilType
          measurements {
            length
            width
            surface
          }
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
      attentionNote
      showAttentionNote
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
        isMainPicture
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
export const PimMetersDocument = gql`
  query PimMeters($id: ID!) {
    getPimServices(id: $id) {
      metersMeta {
        description
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
    }
  }
`;
export function usePimMetersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<PimMetersQuery, PimMetersQueryVariables>,
) {
  return ApolloReactHooks.useQuery<PimMetersQuery, PimMetersQueryVariables>(PimMetersDocument, baseOptions);
}
export function usePimMetersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimMetersQuery, PimMetersQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimMetersQuery, PimMetersQueryVariables>(PimMetersDocument, baseOptions);
}
export type PimMetersQueryHookResult = ReturnType<typeof usePimMetersQuery>;
export type PimMetersLazyQueryHookResult = ReturnType<typeof usePimMetersLazyQuery>;
export type PimMetersQueryResult = ApolloReactCommon.QueryResult<PimMetersQuery, PimMetersQueryVariables>;
export const MovePimDataDocument = gql`
  query MovePimData {
    properties: listPims(filters: { archived: false, propertyTypes: [Apartment, House] }) {
      items {
        id
        street
      }
      metadata {
        total
      }
    }
    bog: listPims(filters: { archived: false, propertyTypes: [Commercial] }) {
      items {
        id
        street
      }
      metadata {
        total
      }
    }
    aog: listPims(filters: { archived: false, propertyTypes: [Agricultural] }) {
      items {
        id
        street
      }
      metadata {
        total
      }
    }
    nc: listNcps(filters: { archived: false, projectType: NewConstruction }) {
      items {
        id
        name
      }
      metadata {
        total
      }
    }
    relet: listNcps(filters: { archived: false, projectType: Relet }) {
      items {
        id
        name
      }
      metadata {
        total
      }
    }
  }
`;
export function useMovePimDataQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<MovePimDataQuery, MovePimDataQueryVariables>,
) {
  return ApolloReactHooks.useQuery<MovePimDataQuery, MovePimDataQueryVariables>(MovePimDataDocument, baseOptions);
}
export function useMovePimDataLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MovePimDataQuery, MovePimDataQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<MovePimDataQuery, MovePimDataQueryVariables>(MovePimDataDocument, baseOptions);
}
export type MovePimDataQueryHookResult = ReturnType<typeof useMovePimDataQuery>;
export type MovePimDataLazyQueryHookResult = ReturnType<typeof useMovePimDataLazyQuery>;
export type MovePimDataQueryResult = ApolloReactCommon.QueryResult<MovePimDataQuery, MovePimDataQueryVariables>;
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
export const PimInfoDocument = gql`
  query PimInfo($id: ID!) {
    getPim(id: $id) {
      street
      houseNumberPrefix
      houseNumber
      houseNumberAddition
      constructionNumber
      constructionNumberPrefix
      constructionNumberAddition
      city
      developmentType
      status
      salePrice
      rentPrice
      description
      livingArea
      propertyType
      attentionNote
      completeness
      archived
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
      parkingGeneral {
        type {
          type
          parkingNumber
          notes
        }
        measurements {
          length
          width
          surface
          capacity
          height
          volume
        }
        specifications {
          type
          notes
        }
        material {
          type
          notes
        }
        insulation {
          type
          notes
        }
      }
      bogGeneral {
        type
        characteristics
        startsOnFloor
        totalFloors
        notes
      }
      aogGeneral {
        generalType
        additionalPosition
        houseLot {
          length
          width
          surface
          amountOfHouses
        }
        specifications {
          type
          notes
        }
      }
      houseOutside {
        generalInformation {
          qualityInformation
          images {
            id
            fileName
            description
            status
            fileType
            permission
            key
            signedUrl
            url
            bucket
          }
          notes
        }
        foundation {
          type {
            type
            notes
          }
          material {
            type
            notes
          }
        }
        propertyRelated {
          items
          notes
          images {
            id
            fileName
            description
            status
            fileType
            permission
            key
            signedUrl
            url
            bucket
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
            fileName
            description
            status
            fileType
            permission
            key
            signedUrl
            url
            bucket
          }
          yearOfRoof
          gutter {
            type
            notes
          }
          gutterMaterial {
            material
            notes
          }
        }
        notes
      }
      floors {
        id
        floorDescription
        level
        floorType
        spaces {
          id
          spaceType
          spaceName
          extraRoomPossibility
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
        windows {
          types
          notes
        }
        extension {
          yearOfExtension
          notes
        }
        renovation {
          yearOfRenovation
        }
        notes
      }
      cadastre {
        id
        description
        mapsDescription
        type
        maps {
          id
          mapName
          name
          file {
            id
            fileName
            description
            status
            fileType
            permission
            key
            signedUrl
            url
            bucket
          }
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
      }
      pictures {
        id
        description
        type
        name
        file {
          id
          fileName
          description
          fileType
          permission
          key
          signedUrl
          url
          bucket
        }
        isMainPicture
      }
      mainPicture {
        id
        description
        type
        name
        file {
          id
          fileName
          description
          fileType
          permission
          key
          signedUrl
          url
          bucket
        }
      }
    }
  }
`;
export function usePimInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PimInfoQuery, PimInfoQueryVariables>) {
  return ApolloReactHooks.useQuery<PimInfoQuery, PimInfoQueryVariables>(PimInfoDocument, baseOptions);
}
export function usePimInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PimInfoQuery, PimInfoQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<PimInfoQuery, PimInfoQueryVariables>(PimInfoDocument, baseOptions);
}
export type PimInfoQueryHookResult = ReturnType<typeof usePimInfoQuery>;
export type PimInfoLazyQueryHookResult = ReturnType<typeof usePimInfoLazyQuery>;
export type PimInfoQueryResult = ApolloReactCommon.QueryResult<PimInfoQuery, PimInfoQueryVariables>;
export const PimOverallInfoDocument = gql`
  query PimOverallInfo($id: ID!) {
    getPimGeneral(id: $id) {
      street
      houseNumber
      postalCode
      city
      propertyType
    }
    getPimInside(id: $id) {
      floors {
        id
        floorType
        level
      }
      bogSpaces {
        id
        type
      }
      aogSpaces {
        id
        type
        name
        animalsConfiguration {
          type
        }
        groundConfiguration {
          typeOfLooseGround
        }
        buildingsConfiguration {
          buildingType
        }
        installationsConfiguration {
          type
        }
      }
    }
    getPimOutside(id: $id) {
      outsideFeatures {
        id
        type
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
              id
              url
            }
          }
          ... on GarageFeature {
            main
            garageTypes: types
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
            notes
            images {
              id
              url
            }
          }
          ... on StorageFeature {
            main
            attached
            storageTypes: types
            materials
            storageInsulations: insulations
            storageServices: services
            secondaryWindows
            measurement {
              length
              width
              height
              surface
              volume
            }
            notes
            images {
              id
              url
            }
          }
          ... on TerrainFeature {
            parking
            measurement {
              length
              width
              surface
            }
            notes
            images {
              id
              url
            }
          }
          ... on ParkingLotFeature {
            number
            price
            cost
            notes
            images {
              id
              url
            }
          }
        }
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
    getPimMedia(id: $id) {
      id
      pictures {
        isMainPicture
        id
        file {
          id
          key
          url
        }
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
      company {
        id
      }
      image {
        id
        key
        url
      }
      teams {
        id
        name
      }
      adminSettings
      isActive
      isAdmin
      language
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
export const GetUsersDocument = gql`
  query GetUsers($from: Int!, $limit: Int, $search: String, $isActive: Boolean) {
    getAllProfiles(filters: { isActive: $isActive }, search: $search, pagination: { from: $from, limit: $limit }) {
      items {
        id
        firstName
        lastName
        email
        image {
          id
          key
          url
        }
        functionDescription
        adminSettings
        isActive
        isAdmin
        teams {
          id
          name
        }
      }
    }
  }
`;
export function useGetUsersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
}
export function useGetUsersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUsersCountDocument = gql`
  query GetUsersCount {
    activeCount: getAllProfiles(filters: { isActive: true }) {
      metadata {
        total
      }
    }
    inActiveCount: getAllProfiles(filters: { isActive: false }) {
      metadata {
        total
      }
    }
  }
`;
export function useGetUsersCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersCountQuery, GetUsersCountQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetUsersCountQuery, GetUsersCountQueryVariables>(GetUsersCountDocument, baseOptions);
}
export function useGetUsersCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersCountQuery, GetUsersCountQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetUsersCountQuery, GetUsersCountQueryVariables>(
    GetUsersCountDocument,
    baseOptions,
  );
}
export type GetUsersCountQueryHookResult = ReturnType<typeof useGetUsersCountQuery>;
export type GetUsersCountLazyQueryHookResult = ReturnType<typeof useGetUsersCountLazyQuery>;
export type GetUsersCountQueryResult = ApolloReactCommon.QueryResult<GetUsersCountQuery, GetUsersCountQueryVariables>;
export const GetUserProfileDocument = gql`
  query GetUserProfile($id: ID!) {
    getProfile(id: $id) {
      id
      firstName
      lastName
      email
      gender
      dateOfBirth
      functionDescription
      initials
      costUnit
      hideOnMemos
      isAccountmanager
      adminSettings
      isAdmin
      image {
        id
        key
        url
      }
      isActive
      teams {
        id
        name
        createPermission
        readPermission
        updatePermission
        deletePermission
      }
      emailAddresses {
        id
        emailAddress
        emailAddressType
        isPublic
      }
      phoneNumbers {
        id
        phoneNumber
        phoneNumberType
        isPublic
      }
      socialMediaLinks {
        id
        socialMediaLink
        socialMediaLinkType
        isPublic
      }
      company {
        id
        name
      }
      language
    }
  }
`;
export function useGetUserProfileQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(
    GetUserProfileDocument,
    baseOptions,
  );
}
export function useGetUserProfileLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(
    GetUserProfileDocument,
    baseOptions,
  );
}
export type GetUserProfileQueryHookResult = ReturnType<typeof useGetUserProfileQuery>;
export type GetUserProfileLazyQueryHookResult = ReturnType<typeof useGetUserProfileLazyQuery>;
export type GetUserProfileQueryResult = ApolloReactCommon.QueryResult<
  GetUserProfileQuery,
  GetUserProfileQueryVariables
>;
export const GetMyTeamMembersDocument = gql`
  query GetMyTeamMembers($from: Int, $limit: Int, $search: String) {
    members: getMyTeamMembers(search: $search, pagination: { from: $from, limit: $limit }) {
      items {
        id
        firstName
        lastName
        isAdmin
        email
        image {
          id
          key
          url
        }
      }
    }
  }
`;
export function useGetMyTeamMembersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetMyTeamMembersQuery, GetMyTeamMembersQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetMyTeamMembersQuery, GetMyTeamMembersQueryVariables>(
    GetMyTeamMembersDocument,
    baseOptions,
  );
}
export function useGetMyTeamMembersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMyTeamMembersQuery, GetMyTeamMembersQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetMyTeamMembersQuery, GetMyTeamMembersQueryVariables>(
    GetMyTeamMembersDocument,
    baseOptions,
  );
}
export type GetMyTeamMembersQueryHookResult = ReturnType<typeof useGetMyTeamMembersQuery>;
export type GetMyTeamMembersLazyQueryHookResult = ReturnType<typeof useGetMyTeamMembersLazyQuery>;
export type GetMyTeamMembersQueryResult = ApolloReactCommon.QueryResult<
  GetMyTeamMembersQuery,
  GetMyTeamMembersQueryVariables
>;
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
export const GetSalesListDocument = gql`
  query GetSalesList($label: SalesLabel!, $status: SalesStatus!, $sortColumn: String!, $sortDirection: SortDirection!) {
    getSalesList(label: $label, status: $status, sort: { column: $sortColumn, direction: $sortDirection })
      @rest(
        type: "ListSales"
        path: "/get-sales-list?label={args.label}&status={args.status}"
        method: "GET"
        endpoint: "default"
      ) {
      items {
        id
        label
        status
        createdAt
        updatedAt
        name
        type
        extraInfo
        attentionNote
        date
      }
    }
  }
`;
export function useGetSalesListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetSalesListQuery, GetSalesListQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetSalesListQuery, GetSalesListQueryVariables>(GetSalesListDocument, baseOptions);
}
export function useGetSalesListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSalesListQuery, GetSalesListQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetSalesListQuery, GetSalesListQueryVariables>(
    GetSalesListDocument,
    baseOptions,
  );
}
export type GetSalesListQueryHookResult = ReturnType<typeof useGetSalesListQuery>;
export type GetSalesListLazyQueryHookResult = ReturnType<typeof useGetSalesListLazyQuery>;
export type GetSalesListQueryResult = ApolloReactCommon.QueryResult<GetSalesListQuery, GetSalesListQueryVariables>;
export const SearchDocument = gql`
  query Search($input: SearchInput!) {
    search(input: $input) @rest(type: "Search", path: "/search", method: "POST", endpoint: "default") {
      users {
        id
        firstName
        lastName
        email
        image {
          id
          key
          url
        }
        functionDescription
        adminSettings
        isActive
        isAdmin
        teams {
          id
          name
        }
      }
      emails {
        id
        firstName
        lastName
        email
        image {
          id
          key
          url
        }
        functionDescription
        adminSettings
        isActive
        isAdmin
        teams {
          id
          name
        }
      }
      crms {
        id
        type
        firstName
        initials
        lastName
        phoneNumber
        email
        avatar {
          url
        }
      }
      pims {
        id
        street
        houseNumber
        district
        city
        state
        country
        county
        propertyType
      }
      ncps {
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
          id
          file {
            url
          }
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
        projectType
      }
      teams {
        id
        name
        profileMembers {
          id
        }
      }
      sales {
        id
        label
        status
        createdAt
        updatedAt
        name
        type
        extraInfo
        attentionNote
        date
      }
    }
  }
`;
export function useSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
  return ApolloReactHooks.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
}
export function useSearchLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
}
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = ApolloReactCommon.QueryResult<SearchQuery, SearchQueryVariables>;
export const SettingInfoDocument = gql`
  query SettingInfo {
    getTeams {
      items {
        id
        name
      }
    }
  }
`;
export function useSettingInfoQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<SettingInfoQuery, SettingInfoQueryVariables>,
) {
  return ApolloReactHooks.useQuery<SettingInfoQuery, SettingInfoQueryVariables>(SettingInfoDocument, baseOptions);
}
export function useSettingInfoLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SettingInfoQuery, SettingInfoQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<SettingInfoQuery, SettingInfoQueryVariables>(SettingInfoDocument, baseOptions);
}
export type SettingInfoQueryHookResult = ReturnType<typeof useSettingInfoQuery>;
export type SettingInfoLazyQueryHookResult = ReturnType<typeof useSettingInfoLazyQuery>;
export type SettingInfoQueryResult = ApolloReactCommon.QueryResult<SettingInfoQuery, SettingInfoQueryVariables>;
export const GetTaskLabelsDocument = gql`
  query GetTaskLabels($id: ID!, $properties: [LabelProperty!]) {
    getTaskLabels(parentId: $id, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
export function useGetTaskLabelsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetTaskLabelsQuery, GetTaskLabelsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetTaskLabelsQuery, GetTaskLabelsQueryVariables>(GetTaskLabelsDocument, baseOptions);
}
export function useGetTaskLabelsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTaskLabelsQuery, GetTaskLabelsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetTaskLabelsQuery, GetTaskLabelsQueryVariables>(
    GetTaskLabelsDocument,
    baseOptions,
  );
}
export type GetTaskLabelsQueryHookResult = ReturnType<typeof useGetTaskLabelsQuery>;
export type GetTaskLabelsLazyQueryHookResult = ReturnType<typeof useGetTaskLabelsLazyQuery>;
export type GetTaskLabelsQueryResult = ApolloReactCommon.QueryResult<GetTaskLabelsQuery, GetTaskLabelsQueryVariables>;
export const GetTaskDocument = gql`
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      taskIndex
      title
      assignee
      startDate
      deadline
      priority
      label
      status
      description
      originalEstimate
      logs {
        timeSpent
        dateStarted
        notes
      }
      subTasks {
        id
        title
        status
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateUpdated
      }
      resultIntern
      resultClient
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
    }
  }
`;
export function useGetTaskQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTaskQuery, GetTaskQueryVariables>) {
  return ApolloReactHooks.useQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, baseOptions);
}
export function useGetTaskLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTaskQuery, GetTaskQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, baseOptions);
}
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskQueryResult = ApolloReactCommon.QueryResult<GetTaskQuery, GetTaskQueryVariables>;
export const GetTasksDocument = gql`
  query GetTasks(
    $search: String
    $assignees: [ID!]
    $deadlines: [DateRange!]
    $sortColumn: String!
    $sortDirection: SortDirection!
  ) {
    getTasks(
      filters: { search: $search, assignees: $assignees, deadlines: $deadlines }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        taskIndex
        title
        assignee
        startDate
        deadline
        priority
        label
        status
        description
        originalEstimate
        logs {
          timeSpent
          dateStarted
          notes
        }
        resultIntern
        resultClient
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
export function useGetTasksQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, baseOptions);
}
export function useGetTasksLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, baseOptions);
}
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksQueryResult = ApolloReactCommon.QueryResult<GetTasksQuery, GetTasksQueryVariables>;
export const GetTasksFullSummaryDocument = gql`
  query GetTasksFullSummary($assignees: [ID!]) {
    getTasksFullSummary(filters: { assignees: $assignees }) {
      today
      nextWeek
      future
      overdue
    }
  }
`;
export function useGetTasksFullSummaryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetTasksFullSummaryQuery, GetTasksFullSummaryQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetTasksFullSummaryQuery, GetTasksFullSummaryQueryVariables>(
    GetTasksFullSummaryDocument,
    baseOptions,
  );
}
export function useGetTasksFullSummaryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTasksFullSummaryQuery, GetTasksFullSummaryQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetTasksFullSummaryQuery, GetTasksFullSummaryQueryVariables>(
    GetTasksFullSummaryDocument,
    baseOptions,
  );
}
export type GetTasksFullSummaryQueryHookResult = ReturnType<typeof useGetTasksFullSummaryQuery>;
export type GetTasksFullSummaryLazyQueryHookResult = ReturnType<typeof useGetTasksFullSummaryLazyQuery>;
export type GetTasksFullSummaryQueryResult = ApolloReactCommon.QueryResult<
  GetTasksFullSummaryQuery,
  GetTasksFullSummaryQueryVariables
>;
export const GetTasksSummaryByStatusDocument = gql`
  query GetTasksSummaryByStatus($search: String, $assignees: [ID!], $deadlines: [DateRange!]) {
    getTasksSummaryByStatus(filters: { search: $search, assignees: $assignees, deadlines: $deadlines }) {
      todo
      inProgress
      blocked
      done
    }
  }
`;
export function useGetTasksSummaryByStatusQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetTasksSummaryByStatusQuery, GetTasksSummaryByStatusQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetTasksSummaryByStatusQuery, GetTasksSummaryByStatusQueryVariables>(
    GetTasksSummaryByStatusDocument,
    baseOptions,
  );
}
export function useGetTasksSummaryByStatusLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetTasksSummaryByStatusQuery,
    GetTasksSummaryByStatusQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<GetTasksSummaryByStatusQuery, GetTasksSummaryByStatusQueryVariables>(
    GetTasksSummaryByStatusDocument,
    baseOptions,
  );
}
export type GetTasksSummaryByStatusQueryHookResult = ReturnType<typeof useGetTasksSummaryByStatusQuery>;
export type GetTasksSummaryByStatusLazyQueryHookResult = ReturnType<typeof useGetTasksSummaryByStatusLazyQuery>;
export type GetTasksSummaryByStatusQueryResult = ApolloReactCommon.QueryResult<
  GetTasksSummaryByStatusQuery,
  GetTasksSummaryByStatusQueryVariables
>;
export const GetTeamsDocument = gql`
  query GetTeams($from: Int, $limit: Int, $search: String) {
    getTeams(pagination: { from: $from, limit: $limit }, search: $search) {
      items {
        id
        profileMembers {
          id
          user {
            id
            firstName
            lastName
            isActive
          }
        }
        company {
          id
          name
        }
        name
        description
        teamRights
      }
    }
  }
`;
export function useGetTeamsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, baseOptions);
}
export function useGetTeamsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTeamsQuery, GetTeamsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetTeamsQuery, GetTeamsQueryVariables>(GetTeamsDocument, baseOptions);
}
export type GetTeamsQueryHookResult = ReturnType<typeof useGetTeamsQuery>;
export type GetTeamsLazyQueryHookResult = ReturnType<typeof useGetTeamsLazyQuery>;
export type GetTeamsQueryResult = ApolloReactCommon.QueryResult<GetTeamsQuery, GetTeamsQueryVariables>;
export const GetTeamDetailsDocument = gql`
  query GetTeamDetails($id: ID!) {
    getTeamDetails(id: $id) {
      id
      name
      teamRights
      company {
        id
        name
      }
      profileMembers {
        id
        user {
          id
          email
          firstName
          lastName
          isActive
        }
        notes
        createPermission
        readPermission
        updatePermission
        deletePermission
      }
    }
  }
`;
export function useGetTeamDetailsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetTeamDetailsQuery, GetTeamDetailsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetTeamDetailsQuery, GetTeamDetailsQueryVariables>(
    GetTeamDetailsDocument,
    baseOptions,
  );
}
export function useGetTeamDetailsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTeamDetailsQuery, GetTeamDetailsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetTeamDetailsQuery, GetTeamDetailsQueryVariables>(
    GetTeamDetailsDocument,
    baseOptions,
  );
}
export type GetTeamDetailsQueryHookResult = ReturnType<typeof useGetTeamDetailsQuery>;
export type GetTeamDetailsLazyQueryHookResult = ReturnType<typeof useGetTeamDetailsLazyQuery>;
export type GetTeamDetailsQueryResult = ApolloReactCommon.QueryResult<
  GetTeamDetailsQuery,
  GetTeamDetailsQueryVariables
>;
export const GetQuestionaireDocument = gql`
  query GetQuestionaire($id: ID!) {
    getQuestionaire(id: $id)
      @rest(type: "Questionaire", path: "/template/{args.id}", method: "GET", endpoint: "default") {
      id
      templateName
      isAdmin
      published
      copyFromId
      templateStatus
      type
      entity {
        type
        subType
      }
      settings {
        description
        version
        language
        documentType
      }
      permissions {
        name
        create
        update
        read
        delete
      }
      meta {
        createdAt
      }
    }
  }
`;
export function useGetQuestionaireQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetQuestionaireQuery, GetQuestionaireQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetQuestionaireQuery, GetQuestionaireQueryVariables>(
    GetQuestionaireDocument,
    baseOptions,
  );
}
export function useGetQuestionaireLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetQuestionaireQuery, GetQuestionaireQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetQuestionaireQuery, GetQuestionaireQueryVariables>(
    GetQuestionaireDocument,
    baseOptions,
  );
}
export type GetQuestionaireQueryHookResult = ReturnType<typeof useGetQuestionaireQuery>;
export type GetQuestionaireLazyQueryHookResult = ReturnType<typeof useGetQuestionaireLazyQuery>;
export type GetQuestionaireQueryResult = ApolloReactCommon.QueryResult<
  GetQuestionaireQuery,
  GetQuestionaireQueryVariables
>;
export const ListQuestionaireGroupsDocument = gql`
  query ListQuestionaireGroups($templateId: ID!) {
    listQuestionaireGroups(templateId: $templateId)
      @rest(
        type: "ListQuestionaireGroups"
        path: "/groups?templateId={args.templateId}"
        method: "GET"
        endpoint: "default"
      ) {
      id
      templateId
      groupName
      copyFromId
      order
      entity {
        type
        subType
      }
    }
  }
`;
export function useListQuestionaireGroupsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListQuestionaireGroupsQuery, ListQuestionaireGroupsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListQuestionaireGroupsQuery, ListQuestionaireGroupsQueryVariables>(
    ListQuestionaireGroupsDocument,
    baseOptions,
  );
}
export function useListQuestionaireGroupsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ListQuestionaireGroupsQuery,
    ListQuestionaireGroupsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<ListQuestionaireGroupsQuery, ListQuestionaireGroupsQueryVariables>(
    ListQuestionaireGroupsDocument,
    baseOptions,
  );
}
export type ListQuestionaireGroupsQueryHookResult = ReturnType<typeof useListQuestionaireGroupsQuery>;
export type ListQuestionaireGroupsLazyQueryHookResult = ReturnType<typeof useListQuestionaireGroupsLazyQuery>;
export type ListQuestionaireGroupsQueryResult = ApolloReactCommon.QueryResult<
  ListQuestionaireGroupsQuery,
  ListQuestionaireGroupsQueryVariables
>;
export const GetQuestionairesDocument = gql`
  query GetQuestionaires($filters: ListQuestionairesFilters!, $pagination: Pagination, $search: String) {
    getQuestionaires(filters: $filters, pagination: $pagination, search: $search)
      @rest(
        type: "GetQuestionaires"
        path: "/templates/{args.filters.type}?templateStatus={args.filters.templateStatus}&page={args.pagination.page}&limit={args.pagination.limit}"
        method: "GET"
        endpoint: "default"
      ) {
      items {
        id
        templateName
        isAdmin
        published
        copyFromId
        templateStatus
        type
        entity {
          type
          subType
        }
        settings {
          description
          version
          language
          documentType
        }
        meta {
          createdAt
        }
        labels
        tags {
          name
          amount
        }
      }
      count
    }
  }
`;
export function useGetQuestionairesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetQuestionairesQuery, GetQuestionairesQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetQuestionairesQuery, GetQuestionairesQueryVariables>(
    GetQuestionairesDocument,
    baseOptions,
  );
}
export function useGetQuestionairesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetQuestionairesQuery, GetQuestionairesQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetQuestionairesQuery, GetQuestionairesQueryVariables>(
    GetQuestionairesDocument,
    baseOptions,
  );
}
export type GetQuestionairesQueryHookResult = ReturnType<typeof useGetQuestionairesQuery>;
export type GetQuestionairesLazyQueryHookResult = ReturnType<typeof useGetQuestionairesLazyQuery>;
export type GetQuestionairesQueryResult = ApolloReactCommon.QueryResult<
  GetQuestionairesQuery,
  GetQuestionairesQueryVariables
>;
export const GetQuestionaireGroupDocument = gql`
  query GetQuestionaireGroup($id: ID!) {
    getQuestionaireGroup(id: $id)
      @rest(type: "GetQuestionaireGroup", path: "/groups/{args.id}", method: "GET", endpoint: "default") {
      id
      templateId
      groupName
      copyFromId
      order
      entity {
        type
        subType
      }
    }
  }
`;
export function useGetQuestionaireGroupQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetQuestionaireGroupQuery, GetQuestionaireGroupQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetQuestionaireGroupQuery, GetQuestionaireGroupQueryVariables>(
    GetQuestionaireGroupDocument,
    baseOptions,
  );
}
export function useGetQuestionaireGroupLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetQuestionaireGroupQuery, GetQuestionaireGroupQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetQuestionaireGroupQuery, GetQuestionaireGroupQueryVariables>(
    GetQuestionaireGroupDocument,
    baseOptions,
  );
}
export type GetQuestionaireGroupQueryHookResult = ReturnType<typeof useGetQuestionaireGroupQuery>;
export type GetQuestionaireGroupLazyQueryHookResult = ReturnType<typeof useGetQuestionaireGroupLazyQuery>;
export type GetQuestionaireGroupQueryResult = ApolloReactCommon.QueryResult<
  GetQuestionaireGroupQuery,
  GetQuestionaireGroupQueryVariables
>;
export const ListQuestionsDocument = gql`
  query ListQuestions($groupId: ID!) {
    listQuestions(groupId: $groupId)
      @rest(type: "ListQuestions", path: "/question?groupId={args.groupId}", method: "GET", endpoint: "default") {
      id
      groupId
      order
      type
      name
      required
      commentEnabled
      showOn
      options {
        name
      }
      entity {
        type
        subType
      }
    }
  }
`;
export function useListQuestionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListQuestionsQuery, ListQuestionsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<ListQuestionsQuery, ListQuestionsQueryVariables>(ListQuestionsDocument, baseOptions);
}
export function useListQuestionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListQuestionsQuery, ListQuestionsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<ListQuestionsQuery, ListQuestionsQueryVariables>(
    ListQuestionsDocument,
    baseOptions,
  );
}
export type ListQuestionsQueryHookResult = ReturnType<typeof useListQuestionsQuery>;
export type ListQuestionsLazyQueryHookResult = ReturnType<typeof useListQuestionsLazyQuery>;
export type ListQuestionsQueryResult = ApolloReactCommon.QueryResult<ListQuestionsQuery, ListQuestionsQueryVariables>;
export const GetQuestionairesCountDocument = gql`
  query GetQuestionairesCount($filters: ListQuestionairesFilters!, $search: String) {
    active: getQuestionaires(filters: $filters, search: $search)
      @rest(
        type: "GetQuestionairesCount"
        path: "/templates/{args.filters.type}?templateStatus=Active&countOnly=true"
        method: "GET"
        endpoint: "default"
      ) {
      count
    }
    inactive: getQuestionaires(filters: $filters, search: $search)
      @rest(
        type: "GetQuestionairesCount"
        path: "/templates/{args.filters.type}?templateStatus=InActive&countOnly=true"
        method: "GET"
        endpoint: "default"
      ) {
      count
    }
  }
`;
export function useGetQuestionairesCountQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetQuestionairesCountQuery, GetQuestionairesCountQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetQuestionairesCountQuery, GetQuestionairesCountQueryVariables>(
    GetQuestionairesCountDocument,
    baseOptions,
  );
}
export function useGetQuestionairesCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetQuestionairesCountQuery, GetQuestionairesCountQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetQuestionairesCountQuery, GetQuestionairesCountQueryVariables>(
    GetQuestionairesCountDocument,
    baseOptions,
  );
}
export type GetQuestionairesCountQueryHookResult = ReturnType<typeof useGetQuestionairesCountQuery>;
export type GetQuestionairesCountLazyQueryHookResult = ReturnType<typeof useGetQuestionairesCountLazyQuery>;
export type GetQuestionairesCountQueryResult = ApolloReactCommon.QueryResult<
  GetQuestionairesCountQuery,
  GetQuestionairesCountQueryVariables
>;
export const GetTiaraMutationsDocument = gql`
  query GetTiaraMutations($entityId: ID!, $entity: TiaraEntities!) {
    getTiaraMutations(entityId: $entityId, entity: $entity) {
      id
      status
      errors
      messageType
      date
    }
  }
`;
export function useGetTiaraMutationsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetTiaraMutationsQuery, GetTiaraMutationsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetTiaraMutationsQuery, GetTiaraMutationsQueryVariables>(
    GetTiaraMutationsDocument,
    baseOptions,
  );
}
export function useGetTiaraMutationsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTiaraMutationsQuery, GetTiaraMutationsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetTiaraMutationsQuery, GetTiaraMutationsQueryVariables>(
    GetTiaraMutationsDocument,
    baseOptions,
  );
}
export type GetTiaraMutationsQueryHookResult = ReturnType<typeof useGetTiaraMutationsQuery>;
export type GetTiaraMutationsLazyQueryHookResult = ReturnType<typeof useGetTiaraMutationsLazyQuery>;
export type GetTiaraMutationsQueryResult = ApolloReactCommon.QueryResult<
  GetTiaraMutationsQuery,
  GetTiaraMutationsQueryVariables
>;
export const GetTiaraValidationDocument = gql`
  query GetTiaraValidation($entityId: ID!, $entity: TiaraEntities!) {
    getTiaraValidation(entityId: $entityId, entity: $entity) {
      errors
    }
  }
`;
export function useGetTiaraValidationQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetTiaraValidationQuery, GetTiaraValidationQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetTiaraValidationQuery, GetTiaraValidationQueryVariables>(
    GetTiaraValidationDocument,
    baseOptions,
  );
}
export function useGetTiaraValidationLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTiaraValidationQuery, GetTiaraValidationQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetTiaraValidationQuery, GetTiaraValidationQueryVariables>(
    GetTiaraValidationDocument,
    baseOptions,
  );
}
export type GetTiaraValidationQueryHookResult = ReturnType<typeof useGetTiaraValidationQuery>;
export type GetTiaraValidationLazyQueryHookResult = ReturnType<typeof useGetTiaraValidationLazyQuery>;
export type GetTiaraValidationQueryResult = ApolloReactCommon.QueryResult<
  GetTiaraValidationQuery,
  GetTiaraValidationQueryVariables
>;
