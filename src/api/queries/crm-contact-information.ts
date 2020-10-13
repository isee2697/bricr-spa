import { gql } from 'apollo-boost';

export const GET_CRM_CONTACT_INFORMATION = gql`
  query GetCrmContactInformation($id: ID!) {
    getCrmContactInformation(id: $id) {
      id
      addresses {
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
        type
        email
        availableFrom
        note
      }
      phoneNumbers {
        type
        countryCode
        phoneNumber
        availableFrom
        note
      }
      socialMedia {
        type
        url
      }  }
  }
`;
