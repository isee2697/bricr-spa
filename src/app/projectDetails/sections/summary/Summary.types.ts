import { ProjectDetailsProps } from '../../ProjectDetails.types';
import { CommonPricing, Energy, ListObjectTypes } from 'api/types';

export type SummaryProps = ProjectDetailsProps & {
  summary: ProjectDetailsSummary;
};

export type ProjectDetailsSummary = {
  pricing?: CommonPricing;
  objecttypes?: ListObjectTypes[];
  energy?: Energy;
  image: string;
};
