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

export const LIST_QUESTIONAIRE_GROUPS = gql`
  query ListQuestionaireGroups($templateId: ID!) {
    listQuestionaireGroups(templateId: $templateId)
      @rest(
        type: "ListQuestionaireGroups"
        path: "/groups?templateId={args.templateId}"
        method: "GET"
        endpoint: "default"
      ) {
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

export const GET_QUESTIONAIRE_GROUP = gql`
  query GetQuestionaireGroup($id: ID!) {
    getQuestionaireGroup(id: $id)
      @rest(type: "GetQuestionaireGroup", path: "/groups/{args.id}", method: "GET", endpoint: "default") {
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

export const LIST_QUESTIONS = gql`
  query ListQuestions($groupId: ID!) {
    listQuestions(groupId: $groupId)
      @rest(type: "ListQuestions", path: "/question?groupId={args.groupId}", method: "GET", endpoint: "default") {
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
