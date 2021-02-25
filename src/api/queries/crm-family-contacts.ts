import { gql } from 'apollo-boost';

export const GET_CRM_FAMILY_CONTACTS = gql`
  query getCrmFamilyContacts($id: ID!) {
    getCrmFamilyContacts(id: $id) {
      id
      maritalStatus
      maritalStatusDate
      maritalStatusInformation
      familyCompositionChildren
      familyCompositionAdults
      familyCompositionInformation
      partner {
        id
        firstName
        initials
        lastName
        email
        avatar {
          url
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
