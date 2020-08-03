import { gql } from 'apollo-boost';

export const OBJECT_TYPE_SERVICES = gql`
  query GetObjectTypeServices($id: ID!) {
    getObjectTypeServices(id: $id) {
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
