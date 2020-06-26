import { gql } from 'apollo-boost';

export const ADD_OUTSIDE_FEATURE = gql`
  mutation AddOutsideFeature($input: AddOutsideFeatureInput!) {
    addOutsideFeature(input: $input) {
      newOutsideFeature {
        id
      }
    }
  }
`;

export const UPDATE_OUTSIDE_FEATURE = gql`
  mutation UpdateOutsideFeature($input: UpdateFeatureInputConfiguration!) {
    updateOutsideFeature(input: $input) {
      id
    }
  }
`;

export const UPDATE_OUTSIDE_INFO = gql`
  mutation UpdatePimOutsideInfo($input: PimOutsideInput!) {
    updatePimOutsideInfo(input: $input) {
      id
    }
  }
`;
