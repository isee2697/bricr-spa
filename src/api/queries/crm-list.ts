import { gql } from 'apollo-boost';

export const CRM_LIST = gql`
  query crmList(
    $type: CrmType
    $status: CrmStatus
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    crmList(
      filters: { type: $type, status: $status }
      pagination: { from: $from, limit: $limit }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
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
  }
`;

export const LIST_CRMS_COUNT = gql`
  query ListCrmsCount($type: CrmType) {
    actionRequired: crmList(filters: { type: $type, status: ActionRequired }) {
      metadata {
        total
      }
    }
    active: crmList(filters: { type: $type, status: Active }) {
      metadata {
        total
      }
    }
    inactive: crmList(filters: { type: $type, status: Inactive }) {
      metadata {
        total
      }
    }
  }
`;
