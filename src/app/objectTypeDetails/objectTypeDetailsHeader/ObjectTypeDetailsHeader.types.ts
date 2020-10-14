import { ReactNode } from 'react';

import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

export type ObjectTypeDetailsHeaderProps = ProjectDetailsProps & {
  action?: ReactNode;
};
