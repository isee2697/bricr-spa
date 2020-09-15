import { gql } from 'apollo-boost';

export const GET_TASK = gql`
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      assignee
      startDate
      deadline
      priority
      label
      status
    }
  }
`;

export const GET_TASKS = gql`
  query GetTasks(
    $search: String
    $assignees: [ID!]
    $from: Date
    $to: Date
    $sortColumn: String!
    $sortDirection: SortDirection!
  ) {
    getTasks(
      filters: { search: $search, assignees: $assignees, deadline: { from: $from, to: $to } }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        title
        assignee
        startDate
        deadline
        priority
        label
        status
      }
    }
  }
`;
