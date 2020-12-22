import { gql } from 'apollo-boost';

export const GET_SALES_LIST = gql`
  query GetSalesList($label: SalesLabel!, $status: SalesStatus!, $sortColumn: String!, $sortDirection: SortDirection!) {
    getSalesList(
      filters: { label: $label, status: $status }
      sort: { column: $sortColumn, direction: $sortDirection }
    ) {
      items {
        id
      }
    }
  }
`;
