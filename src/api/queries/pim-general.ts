import { gql } from 'apollo-boost';

export const PIM_MEDIA = gql`
  query PimGeneral($id: ID!) {
    getPimGeneral(id: $id) {
      id
      street
      houseNumber
      postalCode
      district
      city
      state
      county
      country
      houseGeneral {
        propertyConnection
        propertyDetails
        construction {
          type
          from
          to
          notes
        }
        availability {
          availability
          from
          notes
          habitation
          currentUse
          currentDestination
        }
      }
      extraAddress {
        plotNumber
        plotNumberAddition
        houseNumberStart
        houseNumberEnd
      }
      identificationNumbers {
        id
        name
        number
        type
      }
      showExtraAddress
      showIdentificationNumber
      attentionNote
      showAttentionNote
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
    }
  }
`;

export const PIM_GENERAL_WITH_SAME_ADDRESS = gql`
  query PimWithSameAddress($input: PimWithSameAddressInput!) {
    getPimsGeneralWithSameAddress(input: $input) {
      metadata {
        total
      }
      items {
        id
      }
    }
  }
`;
