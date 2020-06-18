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
