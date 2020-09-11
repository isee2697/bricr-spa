import { Team as TeamData, TeamMember } from 'api/types';
import { DataHandlerProps, PromiseFunction } from 'app/shared/types';

export type TeamMemberContainerProps = {
  data: TeamMember[];
};

export type TeamMemberProps = TeamMemberContainerProps & {
  onRemove: PromiseFunction<string>;
  onSave: PromiseFunction<TeamMember>;
};

export type TeamProps = DataHandlerProps<TeamData> & {
  onRemove: PromiseFunction<string>;
};
