import { gql } from 'apollo-boost';

export const PIM_SPECIFICATION = gql`
  query PimSpecification($id: ID!) {
    getPimSpecification(id: $id) {
      specification {
        energy {
          label
          energyIndex
          endDateEnergyLabel
          EPC
          characteristicType
          notes
        }
        approvals {
          notes
          label
        }
        obligation {
          label
          notes
        }
      }
      specificationAdvanced {
        parking {
          description
          parkingCapacity
          parkingFacilities
        }
        monument {
          notes
          type
        }
        inside {
          notes
          type
        }
        housingOptions {
          notes
          type
        }
        specialTags {
          notes
          type
        }
        propertyRights {
          notes
          type
        }
        homeOwnerAssociation {
          name
          monthlyContribution
          goodToKnow
          notes
        }
      }
      linkedProperties {
        id
        houseNumberPrefix
        houseNumber
        houseNumberAddition
        postalCode
        district
        city
        state
        county
        country
        propertyType
        attention
        plotNumber
        salePrice
        rentPrice
        status
        images {
          url
        }
      }
      inspections {
        id
        inspectionType
        type
        description
      }
    }
  }
`;
