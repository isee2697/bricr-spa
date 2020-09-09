import { TeamMember } from 'api/types';
import { DataHandlerProps, PromiseFunction } from 'app/shared/types';

export type TeamMemberContainerProps = {
  data: TeamMember[];
};

export type TeamMemberProps = DataHandlerProps<TeamMember[]> & {
  onAdd: PromiseFunction<TeamMember>;
};
