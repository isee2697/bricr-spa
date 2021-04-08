import { gql } from 'apollo-boost';

export const GET_TASK = gql`
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      taskIndex
      title
      assignee
      startDate
      deadline
      priority
      label
      status
      description
      originalEstimate
      logs {
        timeSpent
        dateStarted
        notes
      }
      subTasks {
        id
        title
        status
        lastEditedBy {
          id
          firstName
          lastName
        }
        dateUpdated
      }
      resultIntern
      resultClient
      dateUpdated
      lastEditedBy {
        id
        firstName
        lastName
      }
    }
  }
`;

export const GET_TASKS = gql`
  query GetTasks(
    $search: String
    $assignees: [ID!]
    $deadlines: [DateRangeInput!]
    $sortColumn: String!
    $sortDirection: SortDirection!
  ) {
    getTasks(
      filters: { search: $search, assignees: $assignees, deadlines: $deadlines }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
        taskIndex
        title
        assignee
        startDate
        deadline
        priority
        label
        status
        description
        originalEstimate
        logs {
          timeSpent
          dateStarted
          notes
        }
        resultIntern
        resultClient
        dateUpdated
        lastEditedBy {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const GET_TASKS_FULL_SUMMARY = gql`
  query GetTasksFullSummary($assignees: [ID!]) {
    getTasksFullSummary(filters: { assignees: $assignees }) {
      today
      nextWeek
      future
      overdue
    }
  }
`;

export const GET_TASKS_SUMMARY_BY_STATUS = gql`
  query GetTasksSummaryByStatus($search: String, $assignees: [ID!], $deadlines: [DateRangeInput!]) {
    getTasksSummaryByStatus(filters: { search: $search, assignees: $assignees, deadlines: $deadlines }) {
      todo
      inProgress
      blocked
      done
    }
  }
`;
