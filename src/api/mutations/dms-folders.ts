import { gql } from 'apollo-boost';

export const CREATE_DMS_FOLDER = gql`
  mutation CreateDmsFolder($input: CreateDmsFolderInput!) {
    createDmsFolder(input: $input)
      @rest(type: "CreateDmsFolder", path: "/dms/folders/create", method: "POST", endpoint: "default") {
      id
    }
  }
`;
