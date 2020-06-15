import { gql } from 'apollo-boost';

export const CREATE_PIM = gql`
  mutation CreatePim($input: CreatePimInput!) {
    createPim(input: $input) {
      id
    }
  }
`;

export const UPDATE_PIM_GENERAL_INFO = gql`
  mutation UpdatePimGeneralInfo($input: PimGeneralInput!) {
    updatePimGeneralInfo(input: $input) {
      id
    }
  }
`;

export const ADD_FLOOR = gql`
  mutation AddFloorToPim($input: AddNewFloorInput!) {
    addFloorToPim(input: $input) {
      floors {
        id
      }
    }
  }
`;

export const ADD_SPACE_TO_FLOOR = gql`
  mutation AddSpaceToFloor($input: AddSpaceInput!) {
    addSpaceToFloor(input: $input) {
      pim {
        id
      }
      newSpace {
        id
      }
    }
  }
`;

export const UPDATE_SPACE = gql`
  mutation UpdateSpace($input: UpdateSpaceInput!) {
    updateSpace(input: $input) {
      id
    }
  }
`;

export const UPDATE_FLOOR = gql`
  mutation UpdateFloor($input: UpdateFloorInput!) {
    updateFloor(input: $input) {
      id
    }
  }
`;

export const ADD_OUTSIDE_FEATURE = gql`
  mutation AddOutsideFeature($input: AddOutsideFeatureInput!) {
    addOutsideFeature(input: $input) {
      outsideFeatures {
        id
      }
    }
  }
`;

export const UPDATE_OUTSIDE_FEATURE = gql`
  mutation updateOutsideFeature($input: UpdateFeatureInputConfiguration!) {
    updateOutsideFeature(input: $input) {
      id
    }
  }
`;

export const UPDATE_OUTSIDE_INFO = gql`
  mutation UpdatePimOutsideInfo($input: PimOutsideInput!) {
    updatePimOutsideInfo(input: $input) {
      id
    }
  }
`;

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
