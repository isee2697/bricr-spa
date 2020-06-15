import { gql } from 'apollo-boost';

export const TOGGLE_PIM_PRICING = gql`
  mutation TogglePricing($input: TogglePricingInput!) {
    togglePricing(input: $input) {
      id
    }
  }
`;

export const ADD_PIM_COST = gql`
  mutation AddCosts($input: AddCostInput!) {
    addCost(input: $input) {
      pim {
        id
      }
    }
  }
`;

export const UPDATE_PIM_COST = gql`
  mutation UpdateCost($input: UpdateCostInput!) {
    updateCost(input: $input) {
      pim {
        id
      }
    }
  }
`;

export const UPDATE_PIM_INVESTMENT = gql`
  mutation UpdateInvestment($input: InvestmentInput!) {
    updateInvestment(input: $input) {
      id
    }
  }
`;

export const UPDATE_PIM_PRICING = gql`
  mutation UpdatePricing($input: UpdatePricingInput!) {
    updatePricing(input: $input) {
      id
    }
  }
`;
