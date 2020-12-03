import { gql } from 'apollo-boost';

export const CHECK_COMPANY_REGISTERED = gql`
  query CheckCompanyRegistered($name: String!) {
    checkCompanyRegistered(name: $name) {
      suggestions
      taken
    }
  }
`;

export const GET_COMPANY_DETAILS = gql`
  query GetCompanyDetails {
    getCompanyDetails {
      id
      name
      domain
      address
      state
      city
      zipcode
      country
      houseNumber
      floor
      chamberOfCommerce
      vat
      image {
        url
        id
      }
    }
  }
`;
