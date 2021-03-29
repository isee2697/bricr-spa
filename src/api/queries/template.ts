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
  query GetQuestionaires($filters: ListQuestionairesFilters!, $pagination: Pagination, $search: String) {
    getQuestionaires(filters: $filters, pagination: $pagination, search: $search)
      @rest(
        type: "GetQuestionaires"
        path: "/templates/{args.filters.type}?isActive={args.filters.isActive}&page={args.pagination.page}&limit={args.pagination.limit}"
        method: "GET"
        endpoint: "default"
      ) {
      items {
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
      count
    }
  }
`;

export const GET_QUESTIONAIRES_COUNT = gql`
  query GetQuestionairesCount($filters: ListQuestionairesFilters!, $search: String) {
    active: getQuestionaires(filters: $filters, search: $search)
      @rest(
        type: "GetQuestionairesCount"
        path: "/templates/{args.filters.type}?isActive=true&countOnly=true"
        method: "GET"
        endpoint: "default"
      ) {
      count
    }
    inactive: getQuestionaires(filters: $filters, search: $search)
      @rest(
        type: "GetQuestionairesCount"
        path: "/templates/{args.filters.type}?isActive=false&countOnly=true"
        method: "GET"
        endpoint: "default"
      ) {
      count
    }
  }
`;
