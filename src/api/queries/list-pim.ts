import { gql } from 'apollo-boost';

export const COUNT_PIMS_BY_PARAMS = gql`
  query CountPimsByParams($filters: ListPimsFilters) {
    listPims(filters: $filters) {
      metadata {
        total
      }
    }
  }
`;

export const LIST_PIMS_COUNT = gql`
  query ListPimsCount($pricingType: PricingType, $propertyTypes: [PropertyType]) {
    activeCount: listPims(filters: { archived: false, pricingType: $pricingType, propertyTypes: $propertyTypes }) {
      metadata {
        total
      }
    }
    archivedCount: listPims(filters: { archived: true, pricingType: $pricingType, propertyTypes: $propertyTypes }) {
      metadata {
        total
      }
    }
  }
`;

export const LIST_PIMS = gql`
  query ListPims(
    $archived: Boolean!
    $pricingType: PricingType
    $propertyTypes: [PropertyType]
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    listPims(
      filters: { archived: $archived, pricingType: $pricingType, propertyTypes: $propertyTypes }
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
        pictures {
          id
          name
          description
          type
          dateUpdated
          file {
            id
            key
            fileName
            url
          }
        }
        mainPicture {
          id
          name
          description
          type
          dateUpdated
          file {
            id
            key
            fileName
            url
          }
        }
        salePrice
        rentPrice
        completeness
        archived
        attentionNote
      }
    }
  }
`;

export const LINKED_LIST_PIMS = gql`
  query LinkedPimsList($from: Int!, $limit: Int, $id: ID!) {
    pims: listPims(filters: { archived: false }, pagination: { from: $from, limit: $limit }) {
      items {
        id
        street
        houseNumber
        city
        postalCode
      }
    }
    linkedObjectIds: getObjectTypeLinkedPims(id: $id) {
      linkedPropertiesIds
    }
  }
`;
