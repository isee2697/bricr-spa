import { gql } from 'apollo-boost';

export const LIST_DMS_FOLDER_FILES = gql`
  query ListDmsFolderFiles($folderId: ID!) {
    listDmsFolderFiles(folderId: $folderId)
      @rest(type: "ListDmsFolderFiles", path: "/dms/files/list/{args.folderId}", method: "GET", endpoint: "default") {
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
