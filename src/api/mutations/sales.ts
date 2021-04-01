import { gql } from 'apollo-boost';

export const CREATE_SALES = gql`
  mutation CreateSales($input: CreateSalesInput!) {
    createSales(input: $input) @rest(type: "CreateSales", path: "/create-sales", method: "POST", endpoint: "default") {
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
`;
