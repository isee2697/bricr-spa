import { gql } from 'apollo-boost';

export const CRM_CONTACT_INFORMATION = gql`
  mutation UpdateCrmContactInformation($input: UpdateCrmContactInformationInput!) {
    updateCrmContactInformation(input: $input) {
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
      }
    }
  }
`;
