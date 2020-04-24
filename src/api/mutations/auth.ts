import { gql } from 'apollo-boost';

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) @rest(type: "LoginResponse", path: "/users/login", method: "POST") {
      accessToken
      refreshToken
    }
  }
`;
