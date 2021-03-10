import { gql } from 'apollo-boost';

export const ADD_MATCH_PROFILE = gql`
  mutation AddMatchProfile($input: AddMatchProfileInput!) {
    addMatchProfile(input: $input)
      @rest(type: "AddMatchResponse", path: "/create-match", method: "POST", endpoint: "default") {
      id
      crmId
      companyId
      propertyType
      startDate
      endDate
      matchDuration {
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
      isActive
      createdAt
    }
  }
`;

export const CLONE_MATCH_PROFILE = gql`
  mutation CloneMatchProfile($input: CloneMatchProfileInput!) {
    cloneMatchProfile(input: $input)
      @rest(type: "CloneMatchResponse", path: "/clone-match", method: "POST", endpoint: "default") {
      id
      crmId
      companyId
      propertyType
      startDate
      endDate
      matchDuration {
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
      isActive
      createdAt
    }
  }
`;

export const UPDATE_MATCH_PROFILE = gql`
  mutation UpdateMatchProfile($id: ID!, $input: UpdateMatchProfileInput!) {
    updateMatchProfile(id: $id, input: $input)
      @rest(type: "UpdateMatchResponse", path: "/update-match?id={args.id}", method: "PUT", endpoint: "default") {
      id
      crmId
      companyId
      propertyType
      startDate
      endDate
      matchDuration {
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
      isActive
      createdAt
    }
  }
`;

export const DELETE_MATCH_PROFILE = gql`
  mutation DeleteMatchProfile($id: ID!) {
    deleteMatchProfile(id: $id)
      @rest(
        type: "DeleteMatchProfileResponse"
        path: "/delete-match?id={args.id}"
        method: "DELETE"
        endpoint: "default"
      )
  }
`;
