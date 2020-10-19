import { DateTime } from 'luxon';

import { ProjectDetailsProps } from '../../ProjectDetails.types';
import {
  CommonCosts,
  CommonPricing,
  Energy,
  Interests,
  ListObjectTypes,
  Measurements,
  ProjectMarketing,
  ProjectPhase,
} from 'api/types';

export type SummaryProps = ProjectDetailsProps & {
  summary: ProjectDetailsSummary;
};

export type ProjectDetailsSummary = {
  pricing?: CommonPricing;
  costs?: CommonCosts;
  interests?: Interests;
  objecttypes?: ListObjectTypes[];
  energy?: Energy;
  image?: string;
  projectMarketing?: ProjectMarketing;
  phases?: ProjectPhase[];
  startSale?: DateTime;
  startDelivery?: DateTime;
  properties?: number;
  objectTypesCount?: number;
  measurements?: Measurements;
};

export type SummaryCardProps = {
  summary: ProjectDetailsSummary;
};
