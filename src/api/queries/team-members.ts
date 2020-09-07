import { gql } from 'apollo-boost';

export const GET_TEAM_MEMBERS = gql`
  query GetMyTeamMembers($search: String, $from: Int, $limit: Int) {
    members: getMyTeamMembers(pagination: { from: $from, limit: $limit }, search: $search) {
      items {
        id
        firstName
        lastName
      }
    }
  }
`;
