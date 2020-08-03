import { gql } from 'apollo-boost';

export const NCP_SERVICES = gql`
  query GetNcpServices($id: ID!) {
    getNcpServices(id: $id) {
      id
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
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
      servicesDescription
    }
  }
`;
