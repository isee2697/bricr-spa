import { ApolloError } from "apollo-boost";

import { Profile, Task } from "api/types";

export type TasksProps = {
  user: Profile;
  error: ApolloError | undefined;
  members: TeamMemberItem[];
};

export type TaskItem = Task & {
  assigneeDetail?: TeamMemberItem;
};

export type TeamMemberItem = Pick<Profile, "id" | "firstName" | "lastName">;
