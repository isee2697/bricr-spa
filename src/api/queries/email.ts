import { gql } from 'apollo-boost';

export const LIST_EMAIL_FOLDERS = gql`
  query ListEmailFolders {
    listEmailFolders {
      folder {
        id
        name
        displayName
      }
      numberOfUnreadEmails
    }
  }
`;

export const LIST_EMAIL = gql`
  query ListEmail($folder: ID!) {
    listEmail(folderId: $folder) {
      id
      folder {
        id
        name
        displayName
      }
      from {
        name
        email
      }
      to {
        name
        email
      }
      subject
      date
    }
  }
`;

export const GET_EMAIL = gql`
  query GetEmail($id: ID!) {
    getEmail(id: $id) {
      id
      folder {
        id
        name
        displayName
      }
      from {
        name
        email
      }
      to {
        name
        email
      }
      subject
      body
      date
    }
  }
`;
