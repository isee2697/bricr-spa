import { gql } from 'apollo-boost';

export const ADD_PIM_SERVICE = gql`
  mutation AddService($input: AddServiceInput!) {
    addPimService(input: $input) {
      pim {
        id
      }
      newService {
        id
      }
    }
  }
`;

export const UPDATE_PIM_SERVICE = gql`
  mutation UpdateService($input: UpdateServiceInput!) {
    updatePimService(input: $input) {
      id
    }
  }
`;

export const ADD_PIM_METER = gql`
  mutation AddMeter($input: AddMeterInput!) {
    addPimMeter(input: $input) {
      id
    }
  }
`;

export const UPDATE_PIM_METER = gql`
  mutation UpdateMeter($input: UpdateMeterInput!) {
    updatePimMeter(input: $input) {
      id
    }
  }
`;

export const ADD_PIM_READING = gql`
  mutation AddReading($input: AddReadingInput!) {
    addPimReading(input: $input) {
      id
    }
  }
`;

export const UPDATE_PIM_READING = gql`
  mutation UpdateReading($input: UpdateReadingInput!) {
    updatePimReading(input: $input) {
      id
    }
  }
`;
