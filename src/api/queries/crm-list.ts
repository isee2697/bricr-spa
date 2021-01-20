import { gql } from 'apollo-boost';

export const CRM_LIST = gql`
  query crmList {
    crmList {
      id
      type
      firstName
      insertion
      lastName
      phoneNumber
      email
      avatar {
        url
      }
      status
    }
  }
`;
