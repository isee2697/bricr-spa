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
  query ListPimsCount {
    activeCount: listPims(filters: { archived: false }) {
      metadata {
        total
      }
    }
    archivedCount: listPims(filters: { archived: true }) {
      metadata {
        total
      }
    }
  }
`;

export const LIST_PIMS = gql`
  query ListPims($archived: Boolean!, $sortColumn: String!, $sortDirection: SortDirection!, $from: Int!, $limit: Int) {
    listPims(
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
      }
    }
  }
`;

export const PIM_DETAILS = gql`
  query PimDetails($id: ID!) {
    getPim(id: $id) {
      id
      realEstateType
      street
      houseNumber
      constructionNumberPrefix
      constructionNumber
      constructionNumberAddition
      postalCode
      district
      city
      state
      county
      country
      developmentType
      status
      salePrice
      rentPrice
      description
      images {
        url
      }
      livingArea
      propertyType
      attention
      completeness
      archived
      dateCreated
      # dateUpdated
      # updatedBy
      houseGeneral {
        availability {
          availability
          from
          notes
          habitation
          currentUse
          currentDestination
        }
        construction {
          type
          from
          to
          notes
        }
        floor
        propertyConnection
        propertyDetails
      }
      houseOutside {
        generalInformation {
          notes
          qualityInformation
          pictures
        }
        propertyRelated {
          items
          notes
          pictures
        }
        roofInformation {
          type {
            name
            notes
          }
          material {
            name
            notes
          }
          insulation {
            name
            notes
          }
        }
        notes
      }
      floors {
        id
        level
        floorType
        floorDescription
        spaces {
          id
          spaceType
          spaceName
          configuration {
            ... on KitchenSpace {
              constructionYear
              notes
              type
              constructionType
              servicesNotes
              services
              appliances {
                name
                quantity
                notes
              }
              hob
              shape
              measurement {
                length
                width
                height
                surface
                volume
              }
              serviceHeating
              images {
                url
              }
            }
          }
        }
      }
      outsideFeatures {
        id
        description
        type
        configuration {
          ... on GardenFeature {
            mainGarden
            type
            notes
            quality
            location
            shape
            dimensions {
              ... on RectangleDimensions {
                length
                height
              }
            }
            surface
            pictures
          }
        }
      }
      cadastre {
        id
        description
        type
        configuration {
          ... on CadastreMaps {
            maps {
              id
              mapName
              fileName
              description
              type
            }
          }
          ... on CadastrePlot {
            notes
            name
            municipalCode
            sectionCode
            plot
            indexNumber
            surface
            share
            codeSize
            ownership {
              stressedInChargeOf
            }
            lease {
              leaseholder
              information
              duration
              yearlyPrice
              endDate
            }
            boughtOff {
              date
              perpetually
              notes
            }
          }
        }
      }
      # cadastralMaps {
      #   id
      #   file
      #   fileName
      #   title
      #   type
      #   dateUpdated
      #   updatedBy
      # }
      # services {
      #   heating {
      #     id
      #     name
      #   }
      #   hotWater {
      #     id
      #     name
      #   }
      #   additional {
      #     id
      #     name
      #   }
      #   meters {
      #     id
      #     name
      #     type
      #     counter
      #   }
      # }
    }
  }
`;
