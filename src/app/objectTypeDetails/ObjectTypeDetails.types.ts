import { GetObjectTypeGeneralQuery } from 'api/types';
import { NcpProps } from '../projectDetails/ProjectDetails.types';

export type ObjectTypeDetailsProps = {
  isSidebarVisible: boolean;
  onSidebarOpen: VoidFunction;
};

export type NcpObjectTypesProps = NcpProps & {
  objectTypes: GetObjectTypeGeneralQuery | undefined;
};
