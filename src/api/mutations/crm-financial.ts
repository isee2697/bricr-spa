import { gql } from 'apollo-boost';

export const UPDATE_CRM_FINANCIAL = gql`
  mutation UpdateCrmFinancial($input: UpdateCrmFinancialInput!) {
    updateCrmFinancial(input: $input) {
      id
    }
  }
`;
