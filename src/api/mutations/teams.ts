import { gql } from 'apollo-boost';

export const ADD_TEAM = gql`
  mutation AddTeam($input: AddTeamInput!) {
    addTeam(input: $input) {
      id
      name
    }
  }
`;

export const UPDATE_TEAM = gql`
  mutation UpdateTeam($input: UpdateTeamInput!) {
    updateTeam(input: $input) {
      id
    }
  }
`;

export const REMOVE_TEAM = gql`
  mutation RemoveTeam($id: String!) {
    removeTeam(id: $id)
  }
`;

export const ADD_USER_TO_TEAM = gql`
  mutation AddUserToTeam($input: AddUserToTeamInput!) {
    addUserToTeam(input: $input) {
      id
    }
  }
`;

export const REMOVE_USER_FROM_TEAM = gql`
  mutation RemoveUserFromTeam($input: RemoveUserFromTeamInput!) {
    removeUserFromTeam(input: $input) {
      id
    }
  }
`;

export const UPDATE_USER_IN_TEAM = gql`
  mutation UpdateUserInTeam($input: UpdateUserInTeamInput!) {
    updateUserInTeam(input: $input) {
      id
    }
  }
`;
