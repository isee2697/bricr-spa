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
      partner {
        id
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
