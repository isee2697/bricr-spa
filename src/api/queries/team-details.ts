import { gql } from 'apollo-boost';

export const GET_TEAM_DETAILS = gql`
  query GetTeamDetails($id: ID!) {
    getTeamDetails(id: $id) {
      id
      name
      profileMembers {
        id
        user {
          firstName
          lastName
        }
      }
    }
  }
`;
