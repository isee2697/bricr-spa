import { gql } from 'apollo-boost';

export const ADD_ALLOCATE = gql`
  mutation AddAllocate($input: AddAllocateInput!) {
    addAllocate(input: $input) @rest(type: "Allocate", path: "/create-allocate", method: "POST", endpoint: "default") {
      id
    }
  }
`;

export const UPDATE_ALLOCATE = gql`
  mutation UpdateAllocate($id: ID!, $input: AllocateInput!) {
    updateAllocate(id: $id, input: $input)
      @rest(type: "UpdateAllocateResponse", path: "/update-allocate?id={args.id}", method: "PUT", endpoint: "default") {
      id
    }
  }
`;

export const DELETE_ALLOCATE = gql`
  mutation DeleteAllocate($id: ID!) {
    deleteAllocate(id: $id)
      @rest(
        type: "DeleteAllocateResponse"
        path: "/delete-allocate?id={args.id}"
        method: "DELETE"
        endpoint: "default"
      )
  }
`;
