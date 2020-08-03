import { gql } from 'apollo-boost';

export const OBJECT_TYPE_PRICES_PRICING = gql`
  query ObjectTypePricesPricing($id: ID!) {
    getObjectTypePrices(id: $id) {
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

export const OBJECT_TYPE_PRICES_COSTS = gql`
  query ObjectTypePricesCosts($id: ID!) {
    getObjectTypePrices(id: $id) {
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
