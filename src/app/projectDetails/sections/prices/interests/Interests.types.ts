import { Profile } from 'api/types';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

export type InterestsProps = ProjectDetailsProps & {
  dateUpdated: string | null | undefined;
  updatedBy: Profile | null | undefined;
};
