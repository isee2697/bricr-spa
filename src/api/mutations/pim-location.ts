import { gql } from 'apollo-boost';

export const UPDATE_PIM_LOCATION = gql`
  mutation UpdatePimLocation($input: UpdatePimLocationInput!) {
    updatePimLocation(input: $input) {
      id
    }
  }
`;
