import { gql } from 'apollo-boost';

export const GET_OBJECT_TYPE_LABELS = gql`
  query GetObjectTypeLabels($id: ID!, $properties: [LabelProperty!]) {
    getObjectTypeLabels(parentId: $id, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
