import { gql } from 'apollo-boost';

export const PIM_PRICES_PRICING = gql`
  query NcpPricesPricing($id: ID!) {
    getNcpPrices(id: $id) {
      id
      pricing {
        rent {
          minPrice
          maxPrice
          isEnabled
          calculateAutomatically
        }
        sale {
          minPrice
          maxPrice
          isEnabled
          calculateAutomatically
        }
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateUpdated
        description
      }
    }
  }
`;

export const PIM_PRICES_COSTS = gql`
  query NcpPricesCosts($id: ID!) {
    getNcpPrices(id: $id) {
      id
      costs {
        costs {
          id
          serviceCostsFrom
          serviceCostsTill
          paymentsFrequency
          vatTaxedServiceCostsFrom
          vatTaxedServiceCostsTill
          vatPercentage
          notes
          type
          name
          dateCreated
        }
        description
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateUpdated
      }
    }
  }
`;

export const PIM_PRICES_INTERESTS = gql`
  query NcpPricesInterests($id: ID!) {
    getNcpPrices(id: $id) {
      id
      interests {
        groundInterest
        buildingInterest
        rentedagen
        suspensiveCondition
        description
        dateCreated
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
      }
    }
  }
`;
