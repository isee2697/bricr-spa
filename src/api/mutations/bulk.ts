import { gql } from 'apollo-boost';

export const BULK = gql`
  mutation Bulk($input: BulkOperationInput!) {
    bulk(input: $input) {
      undoIds
    }
  }
`;
