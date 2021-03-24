import { gql } from 'apollo-boost';

export const GET_QUESTIONAIRE = gql`
  query GetQuestionaire($id: ID!) {
    getQuestionaire(id: $id)
      @rest(type: "Questionaire", path: "/questionaire/{args.id}", method: "POST", endpoint: "default") {
      id
      questionaireName
      isAdmin
      published
      copyFromId
      entity {
        type
        subType
      }
    }
  }
`;

export const GET_QUESTIONAIRES = gql`
  query GetQuestionaires(
    $search: String
    $from: Int
    $limit: Int
  ) {
    getQuestionaires(
      pagination: { from: $from, limit: $limit }
      search: $search
    )
      @rest(type: "Questionaire", path: "/questionaires", method: "GET", endpoint: "default") {
      id
      questionaireName
      isAdmin
      published
      copyFromId
      entity {
        type
        subType
      }
    }
  }
`;
