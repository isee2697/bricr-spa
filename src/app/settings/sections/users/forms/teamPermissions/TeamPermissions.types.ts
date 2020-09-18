import { ProfileTeam } from 'api/types';
import { DataHandlerProps } from 'app/shared/types';

export type TeamPermissionsContainerProps = {
  data: ProfileTeam;
  index: number;
  isEditing: boolean;
};

export type TeamPermissionsProps = DataHandlerProps<ProfileTeam> & {
  index: number;
  isEditing: boolean;
};
