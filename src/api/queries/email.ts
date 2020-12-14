import { gql } from 'apollo-boost';

export const LIST_EMAIL_FOLDERS = gql`
  query ListEmailFolders {
    listEmailFolders {
      folder {
        name
        displayName
      }
      numberOfEmails
    }
  }
`;

export const LIST_EMAIL = gql`
  query ListEmail($folder: String!) {
    listEmail(folder: $folder) {
      id
      folder {
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
