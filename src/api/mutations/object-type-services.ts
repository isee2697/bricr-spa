import { gql } from 'apollo-boost';

export const ADD_OBJECT_TYPE_SERVICE = gql`
  mutation AddObjectTypeService($input: AddServiceInput!) {
    addObjectTypeService(input: $input) {
      objectType {
        id
      }
      newService {
        id
      }
    }
  }
`;

export const UPDATE_OBJECT_TYPE_SERVICE = gql`
  mutation UpdateObjectTypeService($input: UpdateServiceInput!) {
    updateObjectTypeService(input: $input) {
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

export const UPDATE_OBJECT_TYPE_SERVICE_DESCRIPTION = gql`
  mutation UpdateObjectTypeServiceDescription($input: ServiceDescriptionInput!) {
    updateObjectTypeServiceDescription(input: $input) {
      id
    }
  }
`;
