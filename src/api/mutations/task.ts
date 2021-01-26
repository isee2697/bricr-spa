import { gql } from 'apollo-boost';

export const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      id
    }
  }
`;

export const ADD_NEW_SUBTASK = gql`
  mutation AddNewSubtask($taskId: String!, $title: String!) {
    addSubtask(taskId: $taskId, input: { title: $title }) {
      id
    }
  }
`;

export const UPDATE_SUBTASK_STATUS = gql`
  mutation UpdateSubtaskStatus($subtaskId: ID!, $status: TaskStatus!) {
    updateSubtaskStatus(subtaskId: $subtaskId, status: $status) {
      id
    }
  }
`;

export const DELETE_SUBTASK = gql`
  mutation DeleteSubtask($subtaskId: ID!) {
    deleteSubtask(subtaskId: $subtaskId) {
      id
    }
  }
`;
