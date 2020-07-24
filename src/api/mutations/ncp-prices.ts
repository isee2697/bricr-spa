import { gql } from 'apollo-boost';

export const TOGGLE_NCP_PRICING = gql`
  mutation ToggleNcpPricing($input: ToggleCommonPricingInput!) {
    toggleNcpPricing(input: $input) {
      id
    }
  }
`;

export const UPDATE_NCP_PRICING = gql`
  mutation UpdateNcpPricing($input: UpdateCommonPricingInput!) {
    updateNcpPricing(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_COST = gql`
  mutation AddNcpCost($input: AddCommonCostInput!) {
    addNcpCost(input: $input) {
      id
    }
  }
`;

export const UPDATE_NCP_COST = gql`
  mutation UpdateNcpCost($input: UpdateCommonCostInput!) {
    updateNcpCost(input: $input) {
      id
    }
  }
`;

export const UPDATE_NCP_COSTS_DETAILS = gql`
  mutation UpdateNcpCostsDetails($input: UpdateCommonCostsDetailsInput!) {
    updateNcpCostsDetails(input: $input) {
      id
    }
  }
`;

export const UPDATE_NCP_INTERESTS = gql`
  mutation UpdateNcpInterests($input: InterestsInput!) {
    updateNcpInterests(input: $input) {
      id
    }
  }
`;
