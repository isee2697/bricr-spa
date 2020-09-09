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

export const ADD_USER_TO_TEAM = gql`
  mutation AddUserToTeam($input: AddUserToTeamInput!) {
    addUserToTeam(input: $input) {
      id
    }
  }
`;
