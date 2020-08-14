import { gql } from 'apollo-boost';

export const PIM_OVERALL_INFO = gql`
  query PimOverallInfo($id: ID!) {
    getPimGeneral(id: $id) {
      street
      houseNumber
      postalCode
      city
      propertyType
    }
    getPimInside(id: $id) {
      floors {
        id
        floorType
        level
      }
      bogSpaces {
        id
        type
      }
      aogSpaces {
        id
        type
        name
        animalsConfiguration {
          type
        }
        groundConfiguration {
          typeOfLooseGround
        }
        buildingsConfiguration {
          buildingType
        }
        installationsConfiguration {
          type
        }
      }
    }
    getPimOutside(id: $id) {
      outsideFeatures {
        id
        type
      }
    }
    getPimCadastre(id: $id) {
      cadastre {
        id
        type
      }
    }
    getPimServices(id: $id) {
      meters {
        id
        type
      }
    }
  }
`;
