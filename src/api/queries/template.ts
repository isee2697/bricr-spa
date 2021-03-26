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

export const GET_QUESTIONAIRES = gql`
  query GetQuestionaires($search: String, $from: Int, $limit: Int, $type: String) {
    getQuestionaires(pagination: { from: $from, limit: $limit }, search: $search, type: $type)
      @rest(type: "Questionaire", path: "/templates/{args.type}", method: "GET", endpoint: "default") {
      id
      templateName
      isAdmin
      isActive
      published
      copyFromId
      type
      meta {
        createdAt
      }
      entity {
        type
        subType
      }
      labels
      tags {
        name
        amount
      }
    }
  }
`;
