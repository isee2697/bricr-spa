import { gql } from 'apollo-boost';

export const UPDATE_LINKED_PROPERTIES_DESCRIPTION = gql`
  mutation UpdateNcpLinkedPropertiesListDescription($input: UpdateLinkedPropertiesListDescription!) {
    updateNcpLinkedPropertiesListDescription(input: $input) {
      id
    }
  }
`;
