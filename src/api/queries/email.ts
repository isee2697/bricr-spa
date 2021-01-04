import { gql } from 'apollo-boost';

export const LIST_EMAIL_FOLDERS = gql`
  query ListEmailFolders($accountId: String!) {
    listEmailFolders(accountId: $accountId) {
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
  query ListEmail($accountId: String!, $folderId: ID!) {
    listEmail(accountId: $accountId, folderId: $folderId) {
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
  query GetEmail($accountId: String!, $emailId: String!) {
    getEmail(accountId: $accountId, emailId: $emailId) {
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
