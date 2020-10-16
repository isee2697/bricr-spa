import { gql } from 'apollo-boost';

export const UPDATE_CRM_HOME_SITUATION = gql`
  mutation UpdateCrmHomeSituation($input: UpdateCrmHomeSituationInput!) {
    updateCrmHomeSituation(input: $input) {
      id
      currentHomeSituation
      currentHomeStatus
      currentHomeSalesValue
      currentHomeMortgage
      currentHomeInformation
      reasonToMove
      movingDate
      movingInformation
    }
  }
`;
