import { gql } from 'apollo-boost';

export const GET_LABELS = gql`
  query GetLabels($id: ID!, $properties: [LabelProperty!]) {
    getLabels(pimId: $id, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
