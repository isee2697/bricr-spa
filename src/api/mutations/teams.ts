import { gql } from 'apollo-boost';

export const ADD_TEAM = gql`
  mutation AddTeam($input: AddTeamInput!) {
    addTeam(input: $input) {
      id
      name
    }
  }
`;
