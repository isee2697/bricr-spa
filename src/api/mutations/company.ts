import { gql } from 'apollo-boost';

export const CREATE_COMPANY = gql`
  mutation CreateCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      id
    }
  }
`;

export const UPDATE_COMPANY_DETAILS = gql`
  mutation UpdateCompanyDetails($input: UpdateCompanyInput!) {
    updateCompanyDetails(input: $input) {
      id
    }
  }
`;
