import { gql } from 'apollo-boost';

export const GET_MATCH_PROFILE = gql`
  query GetMatchProfile($id: ID!) {
    getMatchProfile(id: $id) {
      id
      crmId
      companyId
      propertyType
      startDate
      endDate
      duration {
        from
        to
      }
      matchWith
      description
      estateType
      commercialEstateType
      characteristics {
        general
        property {
          minAmountRooms
          minAmountBedrooms
          residentialLayerFrom
          residentialLayerTo
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      commercialCharacteristics {
        general
        property {
          minFreeHeight
          minFreeSpan
          minFloorLoad
          minAmountOfFloors
          minParkingLots
          engergyLabel
          constructionYearFrom
          constructionYearTo
          maintenanceQuality
        }
      }
      pricing {
        buyFrom
        buyTo
        rentFrom
        rentTo
        rentFrequency
        rentalPeriod
        preferredStartDate
      }
      outside {
        minGarage
      }
      garden {
        situation
        outdoorSpacesMin
        outdoorSpacesMax
        volumeMin
        volumeMax
      }
      conditions
      services
      tags
      measurements {
        surfaceFromMin
        surfaceToMin
        livingAreaFromMin
        livingAreaToMin
        businessSpaceSurfaceFromMin
        businessSpaceSurfaceToMin
        practiceRoomSurfaceToMax
        practiceRoomSurfaceToMin
        plotSurfaceFromMin
        plotSurfaceToMin
      }
      revenue {
        from
        to
      }
      exploitation {
        from
        to
      }
      requirements {
        key
        status
      }
      locations {
        latitude
        longitude
        street
        houseNumber
        radius
      }
    }
  }
`;
