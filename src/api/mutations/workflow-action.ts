import { gql } from 'apollo-boost';

export const UPDATE_WORKFLOW_ACTION = gql`
  mutation UpdateWorkflowAction($id: ID!, $input: UpdateWorkflowActionInput!) {
    updateWorkflowAction(id: $id, input: $input) {
      id
    }
  }
`;
