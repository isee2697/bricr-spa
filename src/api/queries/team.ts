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
            isActive
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

export const GET_TEAM_DETAILS = gql`
  query GetTeamDetails($id: ID!) {
    getTeamDetails(id: $id) {
      id
      name
      teamRights
      company {
        id
        name
      }
      profileMembers {
        id
        user {
          id
          email
          firstName
          lastName
          isActive
        }
        notes
        createPermission
        readPermission
        updatePermission
        deletePermission
      }
    }
  }
`;
