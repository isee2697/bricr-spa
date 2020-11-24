import { LastUpdatedProfile } from 'api/types';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

export type InterestsProps = ProjectDetailsProps & {
  dateUpdated: string | null | undefined;
  updatedBy: LastUpdatedProfile | null | undefined;
};
