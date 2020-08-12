import { gql } from 'apollo-boost';

export const PIM_METERS = gql`
  query PimMeters($id: ID!) {
    getPimServices(id: $id) {
      metersMeta {
        Water {
          description
          lastEditedBy {
            id
            firstName
            lastName
          }
          dateUpdated
        }
        Gas {
          description
          lastEditedBy {
            id
            firstName
            lastName
          }
          dateUpdated
        }
        Electric {
          description
          lastEditedBy {
            id
            firstName
            lastName
          }
          dateUpdated
        }
      }
      meters {
        id
        type
        name
        description
        readings {
          id
          value
          description
          feedInId
          dateOfReading
        }
      }
    }
  }
`;
