import { gql } from 'apollo-boost';

export const ADD_SERVICE = gql`
  mutation AddService($input: AddServiceInput!) {
    addService(input: $input) {
      pim {
        id
      }
      newService {
        id
      }
    }
  }
`;

export const UPDATE_SERVICE = gql`
  mutation UpdateService($input: UpdateServiceInput!) {
    updateService(input: $input) {
      id
    }
  }
`;

export const ADD_METER = gql`
  mutation AddMeter($input: AddMeterInput!) {
    addMeter(input: $input) {
      id
    }
  }
`;

export const UPDATE_METER = gql`
  mutation UpdateMeter($input: UpdateMeterInput!) {
    updateMeter(input: $input) {
      id
    }
  }
`;

export const ADD_READING = gql`
  mutation AddReading($input: AddReadingInput!) {
    addReading(input: $input) {
      id
    }
  }
`;

export const UPDATE_READING = gql`
  mutation UpdateReading($input: UpdateReadingInput!) {
    updateReading(input: $input) {
      id
    }
  }
`;
