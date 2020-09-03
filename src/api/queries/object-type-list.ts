import { gql } from 'apollo-boost';

export const LIST_OBJECT_TYPES_COUNT = gql`
  query ListObjectTypesCount($ncpId: ID!) {
    activeCount: listObjectTypes(filters: { ncpId: $ncpId, archived: null }) {
      metadata {
        total
      }
    }
    archivedCount: listObjectTypes(filters: { ncpId: $ncpId, archived: true }) {
      metadata {
        total
      }
    }
  }
`;

export const LIST_OBJECT_TYPES = gql`
  query ListObjectTypes(
    $ncpId: ID!
    $archived: Boolean
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    listObjectTypes(
      filters: { ncpId: $ncpId, archived: $archived }
      pagination: { from: $from, limit: $limit }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        ncpId
        dateCreated
        dateUpdated
        archived
        areaRangeFrom
        areaRangeTo
        numberOfRoomsFrom
        numberOfRoomsTo
        mainPicture {
          id
          file {
            url
          }
        }
        name
        salePriceFrom
        salePriceTo
        rentPriceFrom
        rentPriceTo
        saleLabel
        rentLabel
        partOfPhase
        completeness
        matches
        interests
        propertiesConnected
        propertiesAvailable
        underOption
        soldOrRent
        attentionNote
      }
    }
  }
`;

export const OBJECT_TYPE_LIST_DESCRIPTION = gql`
  query ObjectTypeListDescription($id: ID!) {
    getNcp(id: $id) {
      objectTypesListDescription
      objectTypesListLastUpdatedBy {
        id
        firstName
        lastName
      }
      objectTypesListLastUpdatedOn
    }
  }
`;
