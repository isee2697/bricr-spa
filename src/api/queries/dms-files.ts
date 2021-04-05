import { gql } from 'apollo-boost';

export const LIST_DMS_FILES = gql`
  query ListDmsFiles($folderId: ID!) {
    listDmsFiles(folderId: $folderId)
      @rest(type: "ListDmsFiles", path: "/dms/files/list/{args.folderId}", method: "GET", endpoint: "default") {
      id
      folderId
      companyId
      fileName
      isPrivate
      entity {
        type
        subType
      }
      signedUrl
      meta {
        createdAt
        deletedAt
        fileType
      }
    }
  }
`;
