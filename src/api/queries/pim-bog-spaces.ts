import { gql } from 'apollo-boost';

export const PIM_COMMERCIAL_SPACES = gql`
  query PimBogSpaces($id: ID!) {
    getPimInside(id: $id) {
      id
      bogSpaces {
        id
        type
        name
        notes
        description
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
        retailSpaceConfiguration {
          measurements {
            surface
            salesFloorArea
            frontWidth
            inUnitsFrom
            amountOfFloors
          }
          airTreatment
          specifications
          prices {
            priceInventoryGoodwill
            vatRate
            priceInventoryGoodwillVat
            priceInventoryGoodwillIncludedVat
            notes
          }
          wealthClass
          retailerAssociationContribution {
            contribution
            termsOfCosts
            vatPercentage
            vatTaxedContribution
            notes
          }
          commonRooms
        }
        leisureSpaceConfiguration {
          measurements {
            surface
            numberOfPitches
            numberOfStays
            capacityOfPersons
          }
          specifications
          prices {
            priceInventoryGoodwill
            vatRate
            priceInventoryGoodwillVat
            priceInventoryGoodwillIncludedVat
            notes
          }
          services
        }
        horecaSpaceConfiguration {
          measurements {
            surface
            salesFloorArea
            amountOfFloors
            amountOfRooms
            currentNumberOfSeats
            housingArea
          }
          type
          notes
          specifications
          prices {
            priceInventoryGoodwill
            vatRate
            priceInventoryGoodwillVat
            priceInventoryGoodwillIncludedVat
            revenueLastFiscalYear
            rentalIncomeHomeYear
            notes
          }
          wealthClass
          legalForm
        }
        businessSpaceConfiguration {
          measurements {
            surface
            freeHeight
            freeSpan
            floorLoad
            inUnitsFrom
            amountOfFloors
          }
          airTreatment
          services
          prices {
            price
            vatRate
            priceVat
            priceIncVat
          }
        }
        officeSpaceConfiguration {
          measurements {
            length
            width
            height
            surface
            volume
            measurementsCertificateAvailable
            inUnitsFrom
            amountOfFloors
          }
          airTreatment
          services
          prices {
            price
            vatRate
            priceVat
            priceIncVat
          }
          turnKey
          commonRooms
        }
        socialRealEstateSpaceConfiguration {
          measurements {
            surface
            numberOfCareUnits
            numberOfSeats
          }
          type
          notesAboutType
          destinationType
          specifications
          services
          prices {
            vatRate
            notes
          }
        }
        terrainConfiguration {
          terrainSpecifications {
            surface
            buildingHeightTerrain
            extensionTerrainPercent
            extensionTerrainM2
            pavedPercentage
          }
          specifications
          typeOfPavement
          prices {
            price
            vatRate
            priceVat
            priceIncVat
          }
        }
        storageConfiguration {
          measurements {
            length
            width
            height
            surface
            volume
          }
          type
          notes
        }
        images {
          url
        }
      }
    }
  }
`;
