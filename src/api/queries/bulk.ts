import { gql } from 'apollo-boost';

export const COUNT_PIMS_BY_PARAMS = gql`
  query BulkDetails($input: GetBulkDetailsInput!) {
    getBulkDetails(input: $input) {
      id
      value
    }
  }
`;
