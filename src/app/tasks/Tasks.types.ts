import { ApolloError } from 'apollo-boost';

import { Profile } from 'api/types';

export type TasksProps = {
  user: Profile;
  error: ApolloError | undefined;
  members: TeamMemberItem[];
};

export type TeamMemberItem = Pick<Profile, 'id' | 'firstName' | 'lastName'>;
