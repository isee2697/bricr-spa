import { gql } from 'apollo-boost';

export const CREATE_CRM = gql`
  mutation CreateCrm($input: CreateCrmInput!) {
    createCrm(input: $input) {
      id
      firstName
      insertion
      lastName
    }
  }
`;

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
        name
      }
      avatar {
        id
        key
        fileName
        url
      }
      status
    }
  }
`;
