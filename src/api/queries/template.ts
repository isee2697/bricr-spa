import { gql } from 'apollo-boost';

export const GET_QUESTIONAIRE = gql`
  query GetQuestionaire($id: ID!) {
    getQuestionaire(id: $id)
      @rest(type: "Questionaire", path: "/template/{args.id}", method: "GET", endpoint: "default") {
      id
      templateName
      isAdmin
      published
      copyFromId
      isActive
      type
      entity {
        type
        subType
      }
      settings {
        description
        version
        language
        documentType
      }
      meta {
        createdAt
      }
    }
  }
`;
