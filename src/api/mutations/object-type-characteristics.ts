import { gql } from 'apollo-boost';

export const UPDATE_OBJECT_TYPE_CHARACTERISTICS = gql`
  mutation UpdateObjectTypeCharacteristics($input: ObjectTypeCharacteristicsInput!) {
    updateObjectTypeCharacteristics(input: $input) {
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

export const SET_OBJECT_TYPE_CHARACTERISTICS = gql`
  mutation SetObjectTypeCharacteristicsSections($input: SetCharacteristicsSectionsInput!) {
    setObjectTypeCharacteristicsSections(input: $input) {
      id
    }
  }
`;
