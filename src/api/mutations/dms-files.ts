import { gql } from 'apollo-boost';

export const INIT_DMS_FILE = gql`
  mutation InitCreateDmsFile($input: DmsFileInput!) {
    initCreateDmsFile(input: $input)
      @rest(type: "InitCreateDmsFile", path: "/dms/files/create", method: "POST", endpoint: "default") {
      id
      signedUrl
    }
  }
`;
