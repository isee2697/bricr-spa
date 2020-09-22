import { gql } from 'apollo-boost';

export const CREATE_PROFILE = gql`
  mutation CreateProfile($input: CreateProfileInput!) {
    createProfile(input: $input) {
      id
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(input: $input) {
      id
    }
  }
`;

export const DEACTIVATE_PROFILE = gql`
  mutation DeactivateProfile($id: String!) {
    deactivateProfile(id: $id) {
      id
    }
  }
`;

export const REACTIVATE_PROFILE = gql`
  mutation ReactivateProfile($id: String!) {
    reactivateProfile(id: $id) {
      id
    }
  }
`;

export const CREATE_EMAIL_ADDRESSS = gql`
  mutation CreateEmailAddress($input: CreateEmailAddressInput!) {
    createEmailAddress(input: $input) {
      id
    }
  }
`;

export const UPDATE_EMAIL_ADDRESSS = gql`
  mutation UpdateEmailAddress($input: UpdateEmailAddressInput!) {
    updateEmailAddress(input: $input) {
      id
    }
  }
`;

export const CREATE_PHONE_NUMBER = gql`
  mutation CreatePhoneNumber($input: CreatePhoneNumberInput!) {
    createPhoneNumber(input: $input) {
      id
    }
  }
`;

export const UPDATE_PHONE_NUMBER = gql`
  mutation UpdatePhoneNumber($input: UpdatePhoneNumberInput!) {
    updatePhoneNumber(input: $input) {
      id
    }
  }
`;

export const CREATE_SOCIAL_MEDIA_LINK = gql`
  mutation CreateSocialMediaLink($input: CreateSocialMediaLinkInput!) {
    createSocialMediaLink(input: $input) {
      id
    }
  }
`;

export const UPDATE_SOCIAL_MEDIA_LINK = gql`
  mutation UpdateSocialMediaLink($input: UpdateSocialMediaLinkInput!) {
    updateSocialMediaLink(input: $input) {
      id
    }
  }
`;
