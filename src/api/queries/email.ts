import { gql } from 'apollo-boost';

export const LIST_EMAIL_FOLDERS = gql`
  query ListEmailFolders($accountId: String!) {
    listEmailFolders(accountId: $accountId)
      @rest(
        type: "ListEmailFolders"
        path: "/nylas-email-folders-unread-count?accountId={args.accountId}"
        method: "GET"
        endpoint: "default"
      ) {
      folder {
        id
        name
        displayName
        nylasFolderId
      }
      numberOfUnreadEmails
    }
  }
`;

export const LIST_EMAIL = gql`
  query ListEmail($accountId: String!, $folderId: ID, $unread: Boolean) {
    listEmail(accountId: $accountId, folderId: $folderId, unread: $unread)
      @rest(
        type: "ListEmail"
        path: "/nylas-email-list?accountId={args.accountId}&folderId={args.folderId}&unread={args.unread}"
        method: "GET"
        endpoint: "default"
      ) {
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
    getEmail(accountId: $accountId, emailId: $emailId)
      @rest(
        type: "GetEmail"
        path: "/nylas-email-item?accountId={args.accountId}&emailId={args.emailId}"
        method: "GET"
        endpoint: "default"
      ) {
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
