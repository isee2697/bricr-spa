import { gql } from 'apollo-boost';

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) @rest(type: "LoginResponse", path: "/login", method: "POST", endpoint: "default")
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($input: ForgotPasswordInput) {
    forgotPassword(input: $input)
      @rest(type: "ForgotPasswordResponse", path: "/public/auth/reset-password", method: "POST", endpoint: "default") {
      error
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($input: ResetPasswordInput, $token: String!) {
    resetPassword(input: $input, token: $token)
      @rest(
        type: "ResetPasswordResponse"
        path: "/public/auth/reset-password/{args.token}"
        method: "POST"
        endpoint: "default"
      ) {
      error
    }
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($input: VerifyUserInput!) {
    verifyUser(input: $input) @rest(type: "VerifyUser", method: "POST", path: "/signup/verify", endpoint: "default")
  }
`;
