import { gql } from 'apollo-boost';

export const PIM_AOG_SPACES = gql`
  query PimAogSpaces($id: ID!) {
    getPimInside(id: $id) {
      id
      aogAnimalsDescription
      aogBuildingsDescription
      aogInstallationsDescription
      aogGroundsDescription
      aogSpaces {
        id
        name
        type
        groundConfiguration {
          typeOfLooseGround
          soilType
          soilTypeNotes
          measurements {
            length
            width
            surface
            fullBuiltWidth
            currentNumberOfSeats
            housingArea
          }
          specifications {
            type
            notes
          }
          cultivationTypes
          fenceTypes
        }
        buildingsConfiguration {
          buildingType
          numberOfSameBuilding
          buildingTypeNotes
          measurements {
            length
            width
            surface
            height
            volume
            constructionYear
          }
        }
        installationsConfiguration {
          type
          numberOfSameInstallations
          notes
        }
        animalsConfiguration {
          type
          numberOfSameAnimals
          notes
          specifications {
            type
            notes
          }
        }
        images {
          key
          id
          fileName
          url
        }
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateCreated
      }
    }
  }
`;
