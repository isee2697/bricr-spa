import { gql } from 'apollo-boost';

export const ADD_PHASE = gql`
  mutation AddProjectPhase($input: CreateProjectPhaseInput!) {
    addProjectPhase(input: $input) {
      id
    }
  }
`;

export const LINK_PHASE = gql`
  mutation LinkNcpToProjectPhase($input: LinkNcpToProjectPhaseInput!) {
    linkNcpToProjectPhase(input: $input) {
      id
    }
  }
`;
