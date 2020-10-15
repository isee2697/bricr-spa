import { gql } from 'apollo-boost';

export const UPDATE_CRM_GENERAL = gql`
  mutation UpdateCrmGeneral($input: UpdateCrmGeneralInput!) {
    updateCrmGeneral(input: $input) {
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
