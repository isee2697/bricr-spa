import { gql } from 'apollo-boost';

export const CRM_LIST = gql`
  query crmList(
    $type: CrmType
    $status: CrmStatus
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
    $city: String
  ) {
    crmList(
      filters: { type: $type, status: $status, city: $city }
      pagination: { from: $from, limit: $limit }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        type
        firstName
        initials
        lastName
        gender
        dateOfBirth
        placeOfBirth
        nationality
        maritalStatus
        familyCompositionChildren
        familyCompositionAdults
        currentHomeSituation
        partner {
          id
          firstName
          lastName
          avatar {
            url
          }
        }
        phoneNumber
        addresses {
          city
        }
        email
        avatar {
          url
        }
        status
        dateCreated
        dateUpdated
        completeness
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

export const GET_CRM_WITH_SAME_INFO = gql`
  query GetCrmWithSameInfo($input: CrmWithSameInfoInput!) {
    getCrmWithSameInfo(input: $input) {
      metadata {
        total
      }
      items {
        id
      }
    }
  }
`;
