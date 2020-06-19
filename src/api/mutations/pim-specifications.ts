import { gql } from 'apollo-boost';

export const UPDATE_SPECIFICATION = gql`
  mutation UpdateSpecification($input: SpecificationInput!) {
    updateSpecification(input: $input) {
      id
    }
  }
`;

export const UPDATE_SPECIFICATION_ADVANCED = gql`
  mutation UpdateSpecificationAdvanced($input: SpecificationAdvancedInput!) {
    updateSpecificationAdvanced(input: $input) {
      id
    }
  }
`;

export const SET_LINKED_PROPERTIES = gql`
  mutation SetLinkedProperties($input: LinkedPimInput!) {
    setLinkedProperties(input: $input) {
      id
    }
  }
`;

export const ADD_INSPECTION = gql`
  mutation AddInspection($input: AddInspectionInput!) {
    addInspection(input: $input) {
      inspection {
        id
      }
    }
  }
`;

export const UPDATE_INSPECTION = gql`
  mutation UpdateInspection($input: UpdateInspectionInput!) {
    updateInspection(input: $input) {
      id
    }
  }
`;
