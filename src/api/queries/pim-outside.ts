import { gql } from 'apollo-boost';

export const PIM_OUTSIDE = gql`
  query GetPimOutside($id: ID!) {
    getPimOutside(id: $id) {
      id
      lastEditedBy
      dateUpdated
      houseOutside {
        foundation {
          material {
            notes
            type
          }
          type {
            notes
            type
          }
        }
        generalInformation {
          qualityInformation
          images {
            id
            url
          }
          notes
        }
        propertyRelated {
          items
          notes
          images {
            id
            url
          }
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
            id
            url
          }
          gutter {
            notes
            type
          }
          gutterMaterial {
            material
            notes
          }
          yearOfRoof
        }
        notes
      }
      outsideFeatures {
        id
        type
        dateCreated
        dateUpdated
        lastEditedBy
        description
        configuration {
          ... on GardenFeature {
            measurement {
              width
              length
              surface
            }
            location
            main
            notes
            quality
            shape
            type
          }
        }
      }
    }
  }
`;
