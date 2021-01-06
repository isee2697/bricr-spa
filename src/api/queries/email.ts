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
  query ListEmail($accountId: String!, $folderId: ID, $unread: Boolean) {
    listEmail(accountId: $accountId, folderId: $folderId, unread: $unread) {
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
      thread_id
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
      files {
        id
        filename
      }
      subject
      body
      date
      thread_id
      threads {
        id
        message_ids
        participants {
          email
          name
        }
      }
      threadMessages {
        id
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
  }
`;
