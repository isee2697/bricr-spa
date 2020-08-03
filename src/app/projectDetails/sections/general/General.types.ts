import { NcpGeneral } from 'api/types';
import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';

export type GeneralProps = ProjectDetailsProps & {
  data: NcpGeneral;
};
