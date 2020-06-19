import { gql } from 'apollo-boost';

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
          images {
            url
          }
          #pictures
        }
        propertyRelated {
          items
          notes
          images {
            url
          }
          #pictures
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
          images {
            url
          }
        }
        notes
      }
      floors {
        id
        level
        floorType
      }
      outsideFeatures {
        id
        description
        type
      }
    }
  }
`;
