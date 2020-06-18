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
        floorDescription
        spaces {
          id
          spaceType
          spaceName
          configuration {
            ... on KitchenSpace {
              constructionYear
              notes
              kitchenType: type
              constructionType
              servicesNotes
              kitchenServices: services
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
            ... on LivingRoomSpace {
              livingRoomType: type
              shape
              stairs
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
            ... on BathroomSpace {
              constructionYear
              shape
              bathroomServices: services
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
            ... on BedroomSpace {
              notes
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
            ... on HomeOfficeSpace {
              notes
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
            ... on OtherSpace {
              notes
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
