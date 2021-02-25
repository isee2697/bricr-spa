import { gql } from 'apollo-boost';

export const GET_CRM_GENERAL = gql`
  query getCrmGeneral($id: ID!) {
    getCrmGeneral(id: $id) {
      id
      firstName
      extraNames
      initials
      lastName
      gender
      dateOfBirth
      placeOfBirth
      nationality
      dateOfDeath
      isPassedAway
      preferredLanguage
      identification
      identificationNumber
      identificationIssueCity
      identificationIssueDate
      identificationExpirationDate
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
