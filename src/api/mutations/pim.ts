import { gql } from 'apollo-boost';

export const CREATE_PIM = gql`
  mutation CreatePim($input: CreatePimInput!) {
    createPim(input: $input) {
      id
      realEstateType
      street
      houseNumber
      postalCode
      city
      developmentType
      outsideFeatures {
        id
      }
      floors {
        id
      }
    }
  }
`;

export const UPDATE_DESCRIPTION = gql`
  mutation UpdateDescription($input: UpdateDescriptionInput!) {
    updateDescription(input: $input)
  }
`;
