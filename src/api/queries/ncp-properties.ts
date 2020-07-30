import { gql } from 'apollo-boost';

export const LIST_NCP_PROPERTIES_COUNT = gql`
  query ListNcpLinkedPimsCount($id: ID!) {
    activeCount: getNcpLinkedPims(id: $id) {
      linkedProperties(filters: { archived: false }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
    archivedCount: getNcpLinkedPims(id: $id) {
      linkedProperties(filters: { archived: true }, pagination: { from: 0 }) {
        metadata {
          total
        }
      }
    }
  }
`;

export const LIST_NCP_PROPERTIES = gql`
  query NcpLinkedPims(
    $id: ID!
    $archived: Boolean
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    getNcpLinkedPims(id: $id) {
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
        }
      }
    }
  }
`;
