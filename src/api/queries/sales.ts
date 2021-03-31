import { gql } from 'apollo-boost';

export const GET_SALES_LIST = gql`
  query GetSalesList($label: SalesLabel!, $status: SalesStatus!, $sortColumn: String!, $sortDirection: SortDirection!) {
    getSalesList(label: $label, status: $status, sort: { column: $sortColumn, direction: $sortDirection })
      @rest(
        type: "ListSales"
        path: "/get-sales-list?label={args.label}&status={args.status}"
        method: "GET"
        endpoint: "default"
      ) {
      items {
        id
        label
        status
        createdAt
        updatedAt
        name
        type
        extraInfo
        attentionNote
        date
      }
    }
  }
`;
