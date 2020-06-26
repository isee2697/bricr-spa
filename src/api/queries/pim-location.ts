import { gql } from 'apollo-boost';

export const PIM_LOCATION = gql`
  query PimLocation($id: ID!) {
    getPimLocation(id: $id) {
      id
      latitude
      longitude
      type
      notes
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      goodToKnows {
        type
        distance
        units
        checked
      }
    }
  }
`;
