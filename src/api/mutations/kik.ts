import { gql } from 'apollo-boost';

export const UPDATE_KIK_SETTINGS = gql`
  mutation UpdateKikSettings($input: KikSettingsInput!) {
    updateKikSettings(input: $input)
  }
`;

export const UPDATE_KIK_INFO = gql`
  mutation UpdateKikInfo($input: KikInfoInput!) {
    updateKikInfo(input: $input)
  }
`;
