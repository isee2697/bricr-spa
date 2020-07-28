import { gql } from 'apollo-boost';

export const UPDATE_NCP_CHARACTERISTICS = gql`
  mutation UpdateNcpCharacteristics($input: NcpCharacteristicsInput!) {
    updateNcpCharacteristics(input: $input) {
      id
      measurements {
        volumeFrom
        volumeTo
        livingSpaceFrom
        livingSpaceTo
        plotAreaFrom
        plotAreaTo
        calculateAutomatically
      }
    }
  }
`;

export const SET_NCP_CHARACTERISTICS = gql`
  mutation SetNcpCharacteristics($input: SetCharacteristicsSectionsInput!) {
    setNcpCharacteristics(input: $input) {
      id
    }
  }
`;
