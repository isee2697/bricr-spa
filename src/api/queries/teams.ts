import { gql } from 'apollo-boost';

export const GET_TEAMS = gql`
  query GetTeams($from: Int, $limit: Int, $search: String) {
    getTeams(pagination: { from: $from, limit: $limit }, search: $search) {
      items {
        id
        profileMembers {
          id
          user {
            id
            firstName
            lastName
          }
        }
        company {
          id
          name
        }
        name
        description
        teamRights
      }
    }
  }
`;
