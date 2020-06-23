import { gql } from 'apollo-boost';

export const PIM_OUTSIDE = gql`
  query PimOutside($id: ID!) {
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
            main
            type
            notes
            quality
            location
            shape
            measurement {
              length
              width
              surface
            }
            images {
              url
            }
          }
          ... on GarageFeature {
            main
            garageTypes: types
            notes
            attached
            attic
            garageInsulations: insulations
            garageServices: services
            secondaryWindows
            materials
            measurement {
              length
              width
              height
              surface
              volume
            }
            images {
              url
            }
          }
          ... on StorageFeature {
            main
            storageTypes: types
            notes
            attached
            storageInsulations: insulations
            storageServices: services
            secondaryWindows
            materials
            measurement {
              length
              width
              height
              surface
              volume
            }
            images {
              url
            }
          }
          ... on TerrainFeature {
            parking
            notes
            measurement {
              length
              width
              surface
            }
            images {
              url
            }
          }
          ... on ParkingLotFeature {
            number
            price
            cost
            notes
            images {
              url
            }
          }
        }
      }
    }
  }
`;
