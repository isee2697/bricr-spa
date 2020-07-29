import { gql } from 'apollo-boost';

export const PIM_SERVICES = gql`
  query PimServices($id: ID!) {
    getPimServices(id: $id) {
      description
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
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
      hotWaterSupplies {
        id
        type
        name
        description
        configuration {
          ... on HotWaterSupplyConfiguration {
            type
            fuel
          }
        }
        yearOfInstallation
        ownership
      }
      heatingSources {
        id
        type
        name
        description
        configuration {
          ... on HeatingSourceConfiguration {
            type
          }
        }
        yearOfInstallation
      }
      additionalServices {
        id
        type
        name
        description
        configuration {
          ... on AdditionalServiceConfiguration {
            type
          }
        }
        yearOfInstallation
        ownership
      }
    }
  }
`;
