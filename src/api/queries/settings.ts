import { gql } from 'apollo-boost';

export const SETTINGS_INFO = gql`
  query SettingInfo {
    getTeams {
      items {
        id
        name
      }
    }
  }
`;
