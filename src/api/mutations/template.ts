import { gql } from 'apollo-boost';

export const CREATE_QUESTIONAIRE = gql`
  mutation CreateQuestionaire($input: QuestionaireInput!) {
    createQuestionaire(input: $input)
      @rest(type: "Questionaire", path: "/template", method: "POST", endpoint: "default") {
      id
      templateName
      templateStatus
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
      templateStatus
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

export const CREATE_QUESTIONAIRE_GROUP = gql`
  mutation CreateQuestionaireGroup($input: GroupsInput!) {
    createQuestionaireGroup(input: $input)
      @rest(type: "CreateQuestionaireGroup", path: "/groups", method: "POST", endpoint: "default") {
      id
      templateId
      groupName
      copyFromId
      order
      entity {
        type
        subType
      }
    }
  }
`;

export const UPDATE_QUESTIONAIRE_GROUP = gql`
  mutation UpdateQuestionaireGroup($id: ID!, $input: UpdateGroupsInput!) {
    updateQuestionaireGroup(id: $id, input: $input)
      @rest(type: "UpdateQuestionaireGroup", path: "/groups/{args.id}", method: "PUT", endpoint: "default") {
      id
      templateId
      groupName
      copyFromId
      order
      entity {
        type
        subType
      }
    }
  }
`;

export const DELETE_QUESTIONAIRE_GROUP = gql`
  mutation DeleteQuestionaireGroup($id: ID!) {
    deleteQuestionaireGroup(id: $id)
      @rest(type: "DeleteQuestionaireGroup", path: "/groups/{args.id}", method: "DELETE", endpoint: "default")
  }
`;

export const CREATE_QUESTION = gql`
  mutation CreateQuestion($input: QuestionInput!) {
    createQuestion(input: $input)
      @rest(type: "CreateQuestion", path: "/question", method: "POST", endpoint: "default") {
      id
      groupId
      order
      type
      name
      required
      commentEnabled
      showOn
      options {
        name
      }
      entity {
        type
        subType
      }
    }
  }
`;

export const UPDATE_QUESTION = gql`
  mutation UpdateQuestion($questionId: ID!, $input: UpdateQuestionInput!) {
    updateQuestion(questionId: $questionId, input: $input)
      @rest(type: "UpdateQuestion", path: "/question/{args.questionId}", method: "PUT", endpoint: "default") {
      id
      groupId
      order
      type
      name
      required
      commentEnabled
      showOn
      options {
        name
      }
      entity {
        type
        subType
      }
    }
  }
`;
