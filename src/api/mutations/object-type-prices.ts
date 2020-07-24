import { gql } from 'apollo-boost';

export const TOGGLE_OBJECT_TYPE_PRICING = gql`
  mutation ToggleObjectTypePricing($input: ToggleCommonPricingInput!) {
    toggleObjectTypePricing(input: $input) {
      id
    }
  }
`;

export const UPDATE_OBJECT_TYPE_PRICING = gql`
  mutation UpdateObjectTypePricing($input: UpdateCommonPricingInput!) {
    updateObjectTypePricing(input: $input) {
      id
    }
  }
`;

export const ADD_OBJECT_TYPE_COST = gql`
  mutation AddObjectTypeCost($input: AddCommonCostInput!) {
    addObjectTypeCost(input: $input) {
      id
    }
  }
`;

export const UPDATE_OBJECT_TYPE_COST = gql`
  mutation UpdateObjectTypeCost($input: UpdateCommonCostInput!) {
    updateObjectTypeCost(input: $input) {
      id
    }
  }
`;

export const UPDATE_OBJECT_TYPE_COSTS_DETAILS = gql`
  mutation UpdateObjectTypeCostsDetails($input: UpdateCommonCostInput!) {
    updateObjectTypeCost(input: $input) {
      id
    }
  }
`;
