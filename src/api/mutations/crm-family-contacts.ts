import { gql } from 'apollo-boost';

export const UPDATE_CRM_FAMILY_CONTACTS = gql`
  mutation UpdateCrmFamilyContacts($input: UpdateCrmFamilyContactsInput!) {
    updateCrmFamilyContacts(input: $input) {
      id
      maritalStatus
      maritalStatusDate
      maritalStatusInformation
      familyCompositionChildren
      familyCompositionAdults
      familyCompositionInformation
      partners {
        isDivorced
        partner {
          id
          firstName
          initials
          lastName
          email
          avatar {
            url
          }
          isPassedAway
          dateOfDeath
        }
      }
      contacts {
        type
        contact {
          id
        }
      }
    }
  }
`;
