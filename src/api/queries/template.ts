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
      templateStatus
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
      permissions {
        name
        create
        update
        read
        delete
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

export const GET_QUESTIONAIRES = gql`
  query GetQuestionaires($filters: ListQuestionairesFilters!, $pagination: Pagination, $search: String) {
    getQuestionaires(filters: $filters, pagination: $pagination, search: $search)
      @rest(
        type: "GetQuestionaires"
        path: "/templates/{args.filters.type}?templateStatus={args.filters.templateStatus}&page={args.pagination.page}&limit={args.pagination.limit}"
        method: "GET"
        endpoint: "default"
      ) {
      items {
        id
        templateName
        isAdmin
        published
        copyFromId
        templateStatus
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
        labels
        tags {
          name
          amount
        }
      }
      count
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

export const GET_QUESTIONAIRES_COUNT = gql`
  query GetQuestionairesCount($filters: ListQuestionairesFilters!, $search: String) {
    active: getQuestionaires(filters: $filters, search: $search)
      @rest(
        type: "GetQuestionairesCount"
        path: "/templates/{args.filters.type}?templateStatus=Active&countOnly=true"
        method: "GET"
        endpoint: "default"
      ) {
      count
    }
    inactive: getQuestionaires(filters: $filters, search: $search)
      @rest(
        type: "GetQuestionairesCount"
        path: "/templates/{args.filters.type}?templateStatus=InActive&countOnly=true"
        method: "GET"
        endpoint: "default"
      ) {
      count
    }
  }
`;
