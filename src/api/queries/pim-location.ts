import { gql } from 'apollo-boost';

export const PIM_LOCATION = gql`
  query PimLocation($id: ID!) {
    getPimLocation(id: $id) {
      id
      latitude
      longitude
      type
      notes
      goodToKnows {
        type
        distance
        units
        checked
      }
    }
  }
`;
