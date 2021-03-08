import { gql } from 'apollo-boost';

export const GET_LABELS = gql`
  query GetLabels($id: ID!, $properties: [LabelProperty!]) {
    getLabels(parentId: $id, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;

export const GET_CRM_LABELS = gql`
  query GetCrmLabels($id: ID!, $properties: [LabelProperty!]) {
    getCrmLabels(parentId: $id, properties: $properties) {
      id
      property
      icon
      text
    }
  }
`;
