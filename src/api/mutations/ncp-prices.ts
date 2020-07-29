import { gql } from 'apollo-boost';

export const TOGGLE_NCP_PRICING = gql`
  mutation ToggleNcpPricing($input: ToggleNcpPricingInput!) {
    toggleNcpPricing(input: $input) {
      id
    }
  }
`;

export const UPDATE_NCP_PRICING = gql`
  mutation UpdateNcpPricing($input: UpdateNcpPricingInput!) {
    updateNcpPricing(input: $input) {
      id
    }
  }
`;

export const ADD_NCP_COST = gql`
  mutation AddNcpCost($input: AddCostInput!) {
    addNcpCost(input: $input) {
      id
    }
  }
`;

export const UPDATE_NCP_COST = gql`
  mutation UpdateNcpCost($input: UpdateNcpCostInput!) {
    updateNcpCost(input: $input) {
      id
    }
  }
`;

export const UPDATE_NCP_COSTS_DETAILS = gql`
  mutation UpdateNcpCostsDetails($input: UpdateNcpCostsDetailsInput!) {
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
