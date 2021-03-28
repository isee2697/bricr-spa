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
        path: "/templates/{args.filters.type}?isActive={args.filters.isActive}&page={args.pagination.from}&limit={args.pagination.limit}"
        method: "GET"
        endpoint: "default"
      ) {
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

export const GET_QUESTIONAIRES_COUNT = gql`
  query GetQuestionairesCount($filters: ListQuestionairesFilters!, $search: String) {
    active: getQuestionairesCount(filters: $filters, search: $search)
      @rest(
        type: "GetQuestionairesCount"
        path: "/templates-count/{args.filters.type}?isActive=true"
        method: "GET"
        endpoint: "default"
      )
    inactive: getQuestionairesCount(filters: $filters, search: $search)
      @rest(
        type: "GetQuestionairesCount"
        path: "/templates-count/{args.filters.type}?isActive=false"
        method: "GET"
        endpoint: "default"
      )
  }
`;
