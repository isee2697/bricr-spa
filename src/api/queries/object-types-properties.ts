import { gql } from 'apollo-boost';

export const LIST_OBJECT_TYPES_COUNT = gql`
  query ListObjectTypeLinkedPimsCount($id: ID!) {
    activeCount: getObjectTypeLinkedPims(id: $id) {
      linkedProperties(filters: { archived: false }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
    archivedCount: getObjectTypeLinkedPims(id: $id) {
      linkedProperties(filters: { archived: true }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
  }
`;

export const LIST_OBJECT_TYPES = gql`
  query ObjectTypeLinkedPims(
    $id: ID!
    $archived: Boolean
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    getObjectTypeLinkedPims(id: $id) {
      linkedPropertiesIds
      description
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      linkedProperties(
        filters: { archived: $archived }
        pagination: { from: $from, limit: $limit }
        sort: { column: $sortColumn, direction: $sortDirection }
      ) {
        items {
          id
          street
          houseNumberPrefix
          houseNumber
          houseNumberAddition
          constructionNumberPrefix
          constructionNumber
          constructionNumberAddition
          city
          dateCreated
          livingArea
          propertyType
          images {
            url
          }
          salePrice
          rentPrice
          completeness
          archived
          postalCode
          country
          status
          developmentType
          linkedObjectTypeIds
          attentionNote
        }
      }
    }
  }
`;
