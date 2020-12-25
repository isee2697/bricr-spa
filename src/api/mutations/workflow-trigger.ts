import { gql } from 'apollo-boost';

export const UPDATE_WORKFLOW_TRIGGER = gql`
  mutation UpdateWorkflowTrigger($id: ID!, $input: UpdateWorkflowTriggerInput!) {
    updateWorkflowTrigger(id: $id, input: $input) {
      id
    }
  }
`;
