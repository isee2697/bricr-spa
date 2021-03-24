import { gql } from 'apollo-boost';

export const CREATE_QUESTIONAIRE = gql`
  mutation CreateQuestionaire($input: QuestionaireInput!) {
    createQuestionaire(input: $input)
      @rest(type: "Questionaire", path: "/template", method: "POST", endpoint: "default") {
      id
      templateName
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
