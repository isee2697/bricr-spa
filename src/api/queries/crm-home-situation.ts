import { gql } from 'apollo-boost';

export const GET_CRM_HOME_SITUATION = gql`
  query GetCrmHomeSituation($id: ID!) {
    getCrmHomeSituation(id: $id) {
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
