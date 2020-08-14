import { gql } from 'apollo-boost';

export const PIM_MEDIA = gql`
  query PimGeneral($id: ID!) {
    getPimGeneral(id: $id) {
      id
      street
      houseNumber
      postalCode
      district
      city
      state
      county
      country
      propertyType
      houseGeneral {
        propertyConnection
        propertyDetails
        construction {
          type
          from
          to
          notes
        }
        availability {
          availability
          from
          notes
          habitation
          currentUse
          currentDestination
        }
      }
      apartmentGeneral {
        propertyDetails {
          groundfloorApartmentStartsOnFloor
          amountOfTotalFloors
          notes
          apartmentType
          characteristicsApartment
        }
      }
      bogGeneral {
        type
        characteristics
        startsOnFloor
        totalFloors
        notes
      }
      aogGeneral {
        generalType
        additionalPosition
        houseLot {
          length
          width
          surface
          amountOfHouses
        }
        specifications {
          type
          notes
        }
      }
      parkingGeneral {
        type {
          type
          parkingNumber
          notes
        }
        measurements {
          length
          width
          surface
          capacity
          height
          volume
        }
        specifications {
          type
          notes
        }
        material {
          type
          notes
        }
        insulation {
          type
          notes
        }
      }
      buildingPlotGeneral {
        propertyDetails {
          plotReadyForConstruction
          buildingPlotNumber
          notes
          soilType
          measurements {
            length
            width
            surface
          }
        }
      }
      extraAddress {
        plotNumber
        plotNumberAddition
        houseNumberStart
        houseNumberEnd
      }
      identificationNumbers {
        id
        name
        number
        type
      }
      showExtraAddress
      showIdentificationNumber
      attentionNote
      showAttentionNote
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
    }
  }
`;

export const PIM_GENERAL_WITH_SAME_ADDRESS = gql`
  query PimWithSameAddress($input: PimWithSameAddressInput!) {
    getPimsGeneralWithSameAddress(input: $input) {
      metadata {
        total
      }
      items {
        id
      }
    }
  }
`;
