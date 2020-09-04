import { gql } from 'apollo-boost';

export const LIST_NCPS_COUNT = gql`
  query ListNcpsCount($pricingType: PricingType) {
    activeCount: listNcps(filters: { archived: false, pricingType: $pricingType }) {
      metadata {
        total
      }
    }
    archivedCount: listNcps(filters: { archived: true, pricingType: $pricingType }) {
      metadata {
        total
      }
    }
  }
`;

export const LIST_NCPS = gql`
  query ListNcps(
    $pricingType: PricingType
    $archived: Boolean!
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    listNcps(
      filters: { archived: $archived, pricingType: $pricingType }
      pagination: { from: $from, limit: $limit }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        dateCreated
        dateUpdated
        archived
        areaRangeFrom
        areaRangeTo
        numberOfRoomsFrom
        numberOfRoomsTo
        logoPicture {
          url
        }
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
        soldNumber
        rentNumber
        completeness
        available
        underOption
        soldOrRent
        matches
        interests
        candidates
        optants
        properties
        objectTypesCount
        attentionNote
      }
    }
  }
`;

export const NCP_BULK_DETAILS = gql`
  query NcpBulkDetails($ids: [ID!]!) {
    city: getBulkDetails(input: { ids: $ids, field: city, entity: Ncp }) {
      value
    }
  }
`;
