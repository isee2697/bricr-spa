import { gql } from 'apollo-boost';

export const PIM_PRICING = gql`
  query PimPricing($id: ID!) {
    getPricing(id: $id) {
      id
      pricing {
        rent {
          isEnabled
          rentalPrice
          paymentFrequency
          suffix
          notes
          conditions
        }
        sale {
          isEnabled
          general {
            prefix
            price
            suffix
            executionSale
            dateOfExecutionSale
            conditions
            purchaseMix
            notes
          }
          woz {
            wozPrice
            referenceDateWoz
            notes
          }
        }
      }
      costs {
        id
        serviceCosts
        paymentsFrequency
        vatTaxedServiceCosts
        vatPercentage
        notes
        type
        name
      }
      investment {
        netRentalIncome
        grossRentalIncome
        economicRentalValue
        averageMaturity
        rentIndexed
        splitApartment
        averageVacancyPercentage
        numberOfRentableUnits
        amountOfTenants
        remainingTermContacts
        vacancySquareMeters
        notes
      }
    }
  }
`;
