import { gql } from 'apollo-boost';

export const CREATE_QUESTIONAIRE = gql`
  mutation CreateQuestionaire($input: QuestionaireInput!) {
    createQuestionaire(input: $input)
      @rest(type: "Questionaire", path: "/questionaire", method: "POST", endpoint: "default") {
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
