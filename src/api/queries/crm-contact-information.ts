import { gql } from 'apollo-boost';

export const GET_CRM_CONTACT_INFORMATION = gql`
  query GetCrmContactInformation($id: ID!) {
    getCrmContactInformation(id: $id) {
      id
      contactInfoDescription
      addresses {
        id
        type
        street
        houseNumber
        addition
        zipcode
        city
        country
        extraInformation
        availableFrom
        note
      }
      emailAddresses {
        id
        type
        email
        availableFrom
        note
      }
      phoneNumbers {
        id
        type
        countryCode
        phoneNumber
        availableFrom
        note
      }
      socialMedia {
        id
        type
        url
      }
      dateCreated
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
    }
  }
`;
