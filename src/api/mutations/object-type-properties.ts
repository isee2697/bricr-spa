import { gql } from 'apollo-boost';

export const SET_LINKED_PROPERTIES = gql`
  mutation SetObjectTypeLinkedPims($input: SetLinkedPimsInput!) {
    setObjectTypeLinkedPims(input: $input) {
      linkedProperties(pagination: { from: 0 }) {
        items {
          id
        }
      }
    }
  }
`;

export const UPDATE_LINKED_PROPERTIES_DESCRIPTION = gql`
  mutation UpdateLinkedPropertiesListDescription($input: UpdateLinkedPropertiesListDescription!) {
    updateLinkedPropertiesListDescription(input: $input) {
      id
    }
  }
`;
