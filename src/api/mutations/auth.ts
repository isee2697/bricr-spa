import { gql } from 'apollo-boost';

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) @rest(type: "LoginResponse", path: "/users/login", method: "POST") {
      accessToken
      refreshToken
    }
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($input: ForgotPasswordInput) {
    forgotPassword(input: $input) {
      error
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($input: ResetPasswordInput) {
    resetPassword(input: $input) {
      error
    }
  }
`;
