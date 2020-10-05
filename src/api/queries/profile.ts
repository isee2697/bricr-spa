import { gql } from 'apollo-boost';

export const CURRENT_USER = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      company {
        id
      }
      image {
        id
        key
        url
      }
      teams {
        id
        name
      }
      adminSettings
      isActive
      isAdmin
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers($from: Int!, $limit: Int, $search: String, $isActive: Boolean) {
    getAllProfiles(filters: { isActive: $isActive }, search: $search, pagination: { from: $from, limit: $limit }) {
      items {
        id
        firstName
        lastName
        email
        image {
          id
          key
          url
        }
        functionDescription
        adminSettings
        isActive
        isAdmin
        teams {
          id
          name
        }
      }
    }
  }
`;

export const GET_USERS_COUNT = gql`
  query GetUsersCount {
    activeCount: getAllProfiles(filters: { isActive: true }) {
      metadata {
        total
      }
    }
    inActiveCount: getAllProfiles(filters: { isActive: false }) {
      metadata {
        total
      }
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query GetUserProfile($id: ID!) {
    getProfile(id: $id) {
      id
      firstName
      lastName
      email
      gender
      dateOfBirth
      functionDescription
      initials
      costUnit
      hideOnMemos
      isAccountmanager
      adminSettings
      isAdmin
      image {
        id
        key
        url
      }
      isActive
      teams {
        id
        name
        createPermission
        readPermission
        updatePermission
        deletePermission
      }
      emailAddresses {
        id
        emailAddress
        emailAddressType
        isPublic
      }
      phoneNumbers {
        id
        phoneNumber
        phoneNumberType
        isPublic
      }
      socialMediaLinks {
        id
        socialMediaLink
        socialMediaLinkType
        isPublic
      }
      company {
        id
        name
      }
    }
  }
`;

export const GET_MY_TEAMMEMBERS = gql`
  query GetMyTeamMembers($from: Int, $limit: Int, $search: String) {
    members: getMyTeamMembers(search: $search, pagination: { from: $from, limit: $limit }) {
      items {
        id
        firstName
        lastName
        isAdmin
        email
        image {
          id
          key
          url
        }
      }
    }
  }
`;
