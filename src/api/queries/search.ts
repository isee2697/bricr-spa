import { gql } from 'apollo-boost';

export const ADVANCED_SEARCH = gql`
  query AdvancedSearch($input: AdvancedSearchInput!) {
    advancedSearch(input: $input) {
      users {
        id
        firstName
        lastName
        email
        image {
          id
          key
          url
        }
        functionDescription
        adminSettings
        isActive
        isAdmin
        teams {
          id
          name
        }
      }
      emails {
        id
        firstName
        lastName
        email
        image {
          id
          key
          url
        }
        functionDescription
        adminSettings
        isActive
        isAdmin
        teams {
          id
          name
        }
      }
      crms {
        id
        type
        firstName
        insertion
        lastName
        phoneNumber
        email
        avatar {
          url
        }
      }
      pims {
        id
        street
        houseNumber
        district
        city
        state
        country
        county
      }
      teams {
        id
        name
        profileMembers {
          id
        }
      }
    }
  }
`;
