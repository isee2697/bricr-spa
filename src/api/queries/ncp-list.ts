import { gql } from 'apollo-boost';

export const LIST_NCPS_COUNT = gql`
  query ListNcpsCount($pricingType: PricingType, $projectType: ProjectType) {
    activeCount: listNcps(filters: { archived: false, pricingType: $pricingType, projectType: $projectType }) {
      metadata {
        total
      }
    }
    archivedCount: listNcps(filters: { archived: true, pricingType: $pricingType, projectType: $projectType }) {
      metadata {
        total
      }
    }
  }
`;

export const LIST_NCPS = gql`
  query ListNcps(
    $pricingType: PricingType
    $projectType: ProjectType
    $archived: Boolean!
    $sortColumn: String!
    $sortDirection: SortDirection!
    $from: Int!
    $limit: Int
  ) {
    listNcps(
      filters: { archived: $archived, pricingType: $pricingType, projectType: $projectType }
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
        projectType
      }
    }
  }
`;

export const NCP_BULK_DETAILS = gql`
  query NcpBulkDetails($ids: [ID!]!) {
    city: getBulkDetails(input: { ids: $ids, field: City, entity: Ncp }) {
      value
    }
  }
`;
