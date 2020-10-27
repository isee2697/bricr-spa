import { gql } from 'apollo-boost';

export const GET_TASK_LABELS = gql`
  query GetTaskLabels($id: ID!, $properties: [LabelProperty!]) {
    getTaskLabels(parentId: $id, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
