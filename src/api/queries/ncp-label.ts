import { gql } from 'apollo-boost';

export const GET_NCP_LABELS = gql`
  query GetNcpLabels($id: ID!, $properties: [LabelProperty!]) {
    getNcpLabels(parentId: $id, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
