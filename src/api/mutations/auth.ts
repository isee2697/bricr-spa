import { gql } from 'apollo-boost';

export const LOGIN = gql`
  mutation Login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      accessToken
      refreshToken
    }
  }
`;
