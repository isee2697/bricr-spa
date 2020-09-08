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
    }
  }
`;
