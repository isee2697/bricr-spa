import { gql } from 'apollo-boost';

export const GET_CRM_GENERAL = gql`
  query getCrmGeneral($id: ID!) {
    getCrmGeneral(id: $id) {
      id
      firstName
      extraNames
      insertion
      lastName
      gender
      dateOfBirth
      placeOfBirth
      nationality
      preferredLanguage
      identification
      identificationNumber
      identificationIssueCity
      identificationIssueDate
      preferredTitlePrefix
      preferredTitleSuffix
      preferredLetterSalutation
      preferredTitleInformation
      identificationNumbers {
        type
        number
      }
      avatar {
        id
        key
        fileName
        url
      }
    }
  }
`;
