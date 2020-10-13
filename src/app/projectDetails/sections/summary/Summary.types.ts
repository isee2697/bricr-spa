import { ProjectDetailsProps } from '../../ProjectDetails.types';

export type SummaryProps = ProjectDetailsProps & {
  summary: ProjectDetailsSummary;
};

export type ProjectDetailsSummary = {
  image: string;
};
