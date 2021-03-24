import { gql } from 'apollo-boost';

export const GET_QUESTIONAIRE = gql`
  query GetQuestionaire($id: ID!) {
    getQuestionaire(id: $id)
      @rest(type: "Questionaire", path: "/template/{args.id}", method: "POST", endpoint: "default") {
      id
      templateName
      isAdmin
      published
      copyFromId
      isActive
      entity {
        type
        subType
      }
    }
  }
`;
