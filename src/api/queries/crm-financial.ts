import { gql } from 'apollo-boost';

export const GET_CRM_FINANCIAL = gql`
  query GetCrmFinancial($id: ID!) {
    getCrmFinancial(id: $id) {
      id
      financialInfo
      income {
        id
        type
        information
        employerIncome {
          profession
          employer {
            id
            firstName
            extraNames
            initials
            lastName
            email
            phoneNumber
            avatar {
              id
              url
            }
          }
          employerInformation {
            name
            street
            houseNumber
            addition
            zipcode
            city
            country
          }
          employmentType
          grossIncome
          grossIncomePeriod
          holidayBonus
          fixedThirteenthMonth
          irregularityAllowance
          irregularityAllowancePeriod
          profitDistribution
          profitDistributionPeriod
          commission
          commissionPeriod
          overtime
          overtimePeriod
        }
        equityIncome {
          income
        }
        pensionIncome {
          aowBenefit
          aowBenefitPeriod
          retirementBenefit
          retirementBenefitPeriod
        }
        socialBenefitIncome {
          income
          incomePeriod
          socialBenefitType
        }
        entrepreneurIncome {
          entrepreneurType
          companyCar
          companyBike
          pastPensionAge
          smeProfitExemption
          incomePerYear
          workingHoursPerMonth
          yearsAsIndependent
        }
      }
      financialObligations {
        id
        type
        financialObligation
        information
      }
      bankAccounts {
        id
        type
        accountNumber
        bic
        iban
        swift
        purpose
      }
    }
  }
`;
