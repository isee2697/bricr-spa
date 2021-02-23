import { gql } from 'apollo-boost';

export const GET_ALLOCATE = gql`
  query GetAllocate($id: ID!) {
    getAllocate(id: $id) {
      id
      companyId
      objectId
      name
      version
      note
      criteria {
        type
        startDate
        endDate
        amountAssignedCandidates
        rentalePriceCalculation {
          minJointIncome
          maxJointIncome
          minRentByIncome
          maxRentByIcome
        }
        isPublishedExternally
        interestDetails {
          minNumberOfPreferences
          registrationForm
          registrationTo
          assignOnlyWithInterest
        }
        documents {
          acceptedMissingDocumentsNumber
          onlyAcceptedDocuments
        }
        criteriaOrder {
          name
          order
          checked
        }
      }
      people {
        jointIncome {
          lowestPercentage
          distributionThreshold
          ficitousCalculation
          includePension
        }
        income {
          availableCapitalCount
          deductMonthlyObligations
          minAge
          employementType
        }
        partnerIncome {
          availableCapitalCount
          deductMonthlyObligations
          minAge
          employementType
        }
      }
      home {
        amountChildren
        amountAdults
        situation
        hasCurrentResidence
      }
      assignToRole
    }
  }
`;

export const LIST_ALLOCATES = gql`
  query ListAllocates($objectId: ID!) {
    listAllocates(objectId: $objectId) {
      id
      companyId
      objectId
      name
      version
      note
      criteria {
        type
        startDate
        endDate
        amountAssignedCandidates
        rentalePriceCalculation {
          minJointIncome
          maxJointIncome
          minRentByIncome
          maxRentByIcome
        }
        isPublishedExternally
        interestDetails {
          minNumberOfPreferences
          registrationForm
          registrationTo
          assignOnlyWithInterest
        }
        documents {
          acceptedMissingDocumentsNumber
          onlyAcceptedDocuments
        }
        criteriaOrder {
          name
          order
          checked
        }
      }
      people {
        jointIncome {
          lowestPercentage
          distributionThreshold
          ficitousCalculation
          includePension
        }
        income {
          availableCapitalCount
          deductMonthlyObligations
          minAge
          employementType
        }
        partnerIncome {
          availableCapitalCount
          deductMonthlyObligations
          minAge
          employementType
        }
      }
      home {
        amountChildren
        amountAdults
        situation
        hasCurrentResidence
      }
      assignToRole
    }
  }
`;
