import { gql } from 'apollo-boost';

export const ADD_NCP_SERVICE = gql`
  mutation AddNcpService($input: AddServiceInput!) {
    addNcpService(input: $input) {
      ncp {
        id
      }
      newService {
        id
      }
    }
  }
`;

export const UPDATE_NCP_SERVICE = gql`
  mutation UpdateNcpService($input: UpdateServiceInput!) {
    updateNcpService(input: $input) {
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
      lastEditedBy {
        id
        firstName
        lastName
      }
      dateUpdated
      servicesDescription
    }
  }
`;

export const UPDATE_NCP_SERVICE_DESCRIPTION = gql`
  mutation UpdateNcpServiceDescription($input: ServiceDescriptionInput!) {
    updateNcpServiceDescription(input: $input) {
      id
    }
  }
`;
