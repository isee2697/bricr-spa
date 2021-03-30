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
      securities {
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
