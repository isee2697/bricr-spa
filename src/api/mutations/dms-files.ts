import { gql } from 'apollo-boost';

export const CREATE_DMS_FILE = gql`
  mutation CreateDmsFile($input: DmsFileInput!) {
    createDmsFile(input: $input)
      @rest(type: "CreateDmsFile", path: "/dms/files/create", method: "POST", endpoint: "default") {
      id
      signedUrl
    }
  }
`;
