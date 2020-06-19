import { gql } from 'apollo-boost';

export const GET_LABELS = gql`
  query GetLabels($pimId: ID!, $properties: [LabelProperty!]) {
    getLabels(pimId: $pimId, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
