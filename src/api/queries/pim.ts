import { gql } from 'apollo-boost';

export const PIM_OVERALL_INFO = gql`
  query PimOverallInfo($id: ID!) {
    getPimGeneral(id: $id) {
      street
      houseNumber
      postalCode
      city
    }
    getPimInside(id: $id) {
      floors {
        id
        floorType
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
