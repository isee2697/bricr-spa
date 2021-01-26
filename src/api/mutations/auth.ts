import { gql } from 'apollo-boost';

export const LOGIN = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) @rest(type: "LoginResponse", path: "/login", method: "POST", endpoint: "default") {
      error
      AuthenticationResult {
        AccessToken
        RefreshToken
      }
    }
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($input: ForgotPasswordInput) {
    forgotPassword(input: $input)
      @rest(type: "ForgotPasswordResponse", path: "/forgot_password", method: "POST", endpoint: "default") {
      error
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($input: RefreshTokenInput) {
    refreshToken(input: $input)
      @rest(type: "LoginResponse", path: "/refresh-token", method: "POST", endpoint: "default") {
      error
      AuthenticationResult {
        AccessToken
        RefreshToken
      }
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($input: ResetPasswordInput) {
    resetPassword(input: $input)
      @rest(type: "ResetPasswordResponse", path: "/forgot_password/confirm", method: "POST", endpoint: "default") {
      error
    }
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($input: VerifyUserInput!) {
    verifyUser(input: $input) @rest(type: "VerifyUser", method: "POST", path: "/signup/verify", endpoint: "default") {
      status
    }
  }
`;
