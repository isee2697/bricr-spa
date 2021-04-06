import { gql } from 'apollo-boost';

export const CREATE_DMS_FILE = gql`
  mutation CreateDmsFile($input: DmsFileInput!, $file: UploadFileInput!) {
    createDmsFile(input: $input, file: $file)
      @rest(type: "CreateDmsFile", path: "/dms/files/create", method: "POST", endpoint: "default") {
      id
      signedUrl
    }
  }
`;
