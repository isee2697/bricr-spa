import { gql } from 'apollo-boost';

export const ADD_TASK_LABEL = gql`
  mutation AddTaskLabel($input: LabelInput!) {
    addTaskLabel(input: $input) {
      id
      property
      text
      icon
    }
  }
`;
