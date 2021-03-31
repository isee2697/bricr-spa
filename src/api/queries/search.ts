import { gql } from 'apollo-boost';

export const SEARCH = gql`
  query Search($input: SearchInput!) {
    search(input: $input) @rest(type: "Search", path: "/search", method: "POST", endpoint: "default") {
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
        initials
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
        propertyType
      }
      ncps {
        id
        dateCreated
        dateUpdated
        archived
        areaRangeFrom
        areaRangeTo
        numberOfRoomsFrom
        numberOfRoomsTo
        logoPicture {
          url
        }
        mainPicture {
          id
          file {
            url
          }
        }
        name
        salePriceFrom
        salePriceTo
        rentPriceFrom
        rentPriceTo
        saleLabel
        rentLabel
        partOfPhase
        soldNumber
        rentNumber
        completeness
        available
        underOption
        soldOrRent
        matches
        interests
        candidates
        optants
        properties
        objectTypesCount
        attentionNote
        projectType
      }
      teams {
        id
        name
        profileMembers {
          id
        }
      }
      sales {
        id
        label
        status
        createdAt
        updatedAt
        name
        type
        extraInfo
        attentionNote
        date
      }
    }
  }
`;
