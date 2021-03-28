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

export const UPDATE_QUESTIONAIRE = gql`
  mutation UpdateQuestionaire($input: UpdateQuestionaireInput!) {
    updateQuestionaire(input: $input)
      @rest(type: "UpdateQuestionaire", path: "/template", method: "PUT", endpoint: "default") {
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

export const UPDATE_TEMPLATE_GENERAL = gql`
  mutation UpdateTemplateGeneral($input: TemplateGeneralInput!) {
    updateTemplateGeneral(input: $input)
      @rest(type: "Template", path: "/template", method: "PUT", endpoint: "default") {
      id
    }
  }
`;
