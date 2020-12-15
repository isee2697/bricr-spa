import { gql } from 'apollo-boost';

export const GET_KIK_SETTINGS = gql`
  query GetKikSettings {
    getKikSettings {
      username
    }
  }
`;
