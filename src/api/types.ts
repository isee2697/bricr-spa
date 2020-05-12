import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type ForgotPasswordInput = {
  username: Scalars['String'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  error?: Maybe<Scalars['String']>;
  stack?: Maybe<Scalars['String']>;
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  error?: Maybe<Scalars['String']>;
  stack?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<ProfileTeam>>;
};

export type ProfileTeam = {
  __typename?: 'ProfileTeam';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type SearchMetadata = {
  __typename?: 'SearchMetadata';
  total: Scalars['Int'];
};

export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Sort = {
  column: Scalars['String'];
  direction: SortDirection;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['String'];
  teams?: Maybe<Array<Team>>;
  name?: Maybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['String'];
  members?: Maybe<Array<Profile>>;
  company: Company;
  name?: Maybe<Scalars['String']>;
};

export enum RealEstateType {
  Residential = 'Residential',
  Business = 'Business',
}

export enum DevelopmentType {
  New = 'New',
  Existing = 'Existing',
}

export enum PimStatus {
  Prospect = 'Prospect',
  Available = 'Available',
  Option = 'Option',
  Bid = 'Bid',
  SoldWithReservation = 'SoldWithReservation',
  RentedWithReservation = 'RentedWithReservation',
  Sold = 'Sold',
  Rented = 'Rented',
}

export enum PropertyType {
  House = 'House',
  Apartment = 'Apartment',
  Commercial = 'Commercial',
  Agricultural = 'Agricultural',
  ParkingLot = 'ParkingLot',
  BuildingPlot = 'BuildingPlot',
  Other = 'Other',
}

export type CreatePimInput = {
  realEstateType: RealEstateType;
  street: Scalars['String'];
  houseNumberPrefix?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  houseNumberAddition?: Maybe<Scalars['String']>;
  constructionNumberPrefix?: Maybe<Scalars['String']>;
  constructionNumber?: Maybe<Scalars['String']>;
  constructionNumberAddition?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  district?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  developmentType: DevelopmentType;
  status: PimStatus;
  salePrice?: Maybe<Scalars['Float']>;
  rentPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  livingArea?: Maybe<Scalars['Int']>;
  propertyType?: Maybe<PropertyType>;
  attention?: Maybe<Scalars['String']>;
};

export type UpdatePimInput = {
  id: Scalars['String'];
  realEstateType: RealEstateType;
  street: Scalars['String'];
  houseNumberPrefix?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  houseNumberAddition?: Maybe<Scalars['String']>;
  constructionNumberPrefix?: Maybe<Scalars['String']>;
  constructionNumber?: Maybe<Scalars['String']>;
  constructionNumberAddition?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  district?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  developmentType: DevelopmentType;
  status: PimStatus;
  salePrice?: Maybe<Scalars['Float']>;
  rentPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  livingArea?: Maybe<Scalars['Int']>;
  propertyType?: Maybe<PropertyType>;
  attention?: Maybe<Scalars['String']>;
};

export type Pim = {
  __typename?: 'Pim';
  id: Scalars['String'];
  realEstateType: RealEstateType;
  street: Scalars['String'];
  houseNumberPrefix?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  houseNumberAddition?: Maybe<Scalars['String']>;
  constructionNumberPrefix?: Maybe<Scalars['String']>;
  constructionNumber?: Maybe<Scalars['String']>;
  constructionNumberAddition?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  district?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  developmentType: DevelopmentType;
  status: PimStatus;
  salePrice?: Maybe<Scalars['Float']>;
  rentPrice?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['String']>>;
  livingArea?: Maybe<Scalars['Int']>;
  propertyType?: Maybe<PropertyType>;
  attention?: Maybe<Scalars['String']>;
  completeness: Scalars['Float'];
  archived: Scalars['Boolean'];
  dateCreated: Scalars['Date'];
};

export type PimSearchResult = {
  __typename?: 'PimSearchResult';
  metadata?: Maybe<SearchMetadata>;
  items?: Maybe<Array<Pim>>;
};

export type Pagination = {
  from?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  searchAfter?: Maybe<Array<Scalars['String']>>;
};

export type ListPimsFilters = {
  developmentType?: Maybe<DevelopmentType>;
  status?: Maybe<PimStatus>;
  houseNumberPrefix?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  houseNumberAddition?: Maybe<Scalars['String']>;
  constructionNumberPrefix?: Maybe<Scalars['String']>;
  constructionNumber?: Maybe<Scalars['String']>;
  constructionNumberAddition?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  archived?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Profile>;
  getProfile?: Maybe<Profile>;
  listPims: PimSearchResult;
  getPim?: Maybe<Pim>;
  getPropertyTypes: Array<Scalars['String']>;
};

export type QueryGetProfileArgs = {
  id: Scalars['ID'];
};

export type QueryListPimsArgs = {
  filters?: Maybe<ListPimsFilters>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Array<Sort>>;
};

export type QueryGetPimArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<LoginResponse>;
  forgotPassword?: Maybe<ForgotPasswordResponse>;
  resetPassword?: Maybe<ResetPasswordResponse>;
  deleteUser?: Maybe<Scalars['String']>;
  createPim?: Maybe<Scalars['String']>;
  updatePim?: Maybe<Scalars['String']>;
  removePim?: Maybe<Scalars['String']>;
};

export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};

export type MutationForgotPasswordArgs = {
  input?: Maybe<ForgotPasswordInput>;
};

export type MutationResetPasswordArgs = {
  input?: Maybe<ResetPasswordInput>;
  token: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationCreatePimArgs = {
  input: CreatePimInput;
};

export type MutationUpdatePimArgs = {
  input: UpdatePimInput;
};

export type MutationRemovePimArgs = {
  id: Scalars['String'];
};

export type LoginMutationVariables = {
  input?: Maybe<LoginInput>;
};

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'LoginResponse' } & Pick<LoginResponse, 'accessToken' | 'refreshToken'>>;
};

export type ForgotPasswordMutationVariables = {
  input?: Maybe<ForgotPasswordInput>;
};

export type ForgotPasswordMutation = { __typename?: 'Mutation' } & {
  forgotPassword?: Maybe<{ __typename?: 'ForgotPasswordResponse' } & Pick<ForgotPasswordResponse, 'error'>>;
};

export type ResetPasswordMutationVariables = {
  input?: Maybe<ResetPasswordInput>;
  token: Scalars['String'];
};

export type ResetPasswordMutation = { __typename?: 'Mutation' } & {
  resetPassword?: Maybe<{ __typename?: 'ResetPasswordResponse' } & Pick<ResetPasswordResponse, 'error'>>;
};

export type CreatePimMutationVariables = {
  input: CreatePimInput;
};

export type CreatePimMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'createPim'>;

export type CountPimsByParamsQueryVariables = {
  filters?: Maybe<ListPimsFilters>;
};

export type CountPimsByParamsQuery = { __typename?: 'Query' } & {
  listPims: { __typename?: 'PimSearchResult' } & {
    metadata?: Maybe<{ __typename?: 'SearchMetadata' } & Pick<SearchMetadata, 'total'>>;
  };
};

export type MeQueryVariables = {};

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<{ __typename?: 'Profile' } & Pick<Profile, 'id' | 'firstName' | 'lastName' | 'email' | 'avatar'>>;
};

export const LoginDocument = gql`
  mutation Login($input: LoginInput) {
    login(input: $input) @rest(type: "LoginResponse", path: "/public/auth/login", method: "POST") {
      accessToken
      refreshToken
    }
  }
`;
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($input: ForgotPasswordInput) {
    forgotPassword(input: $input)
      @rest(type: "ForgotPasswordResponse", path: "/public/auth/reset-password", method: "POST") {
      error
    }
  }
`;
export function useForgotPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>,
) {
  return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(
    ForgotPasswordDocument,
    baseOptions,
  );
}
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const ResetPasswordDocument = gql`
  mutation ResetPassword($input: ResetPasswordInput, $token: String!) {
    resetPassword(input: $input, token: $token)
      @rest(type: "ResetPasswordResponse", path: "/public/auth/reset-password/{args.token}", method: "POST") {
      error
    }
  }
`;
export function useResetPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>,
) {
  return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(
    ResetPasswordDocument,
    baseOptions,
  );
}
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;
export const CreatePimDocument = gql`
  mutation CreatePim($input: CreatePimInput!) {
    createPim(input: $input)
  }
`;
export function useCreatePimMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePimMutation, CreatePimMutationVariables>,
) {
  return ApolloReactHooks.useMutation<CreatePimMutation, CreatePimMutationVariables>(CreatePimDocument, baseOptions);
}
export type CreatePimMutationHookResult = ReturnType<typeof useCreatePimMutation>;
export type CreatePimMutationResult = ApolloReactCommon.MutationResult<CreatePimMutation>;
export type CreatePimMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreatePimMutation,
  CreatePimMutationVariables
>;
export const CountPimsByParamsDocument = gql`
  query CountPimsByParams($filters: ListPimsFilters) {
    listPims(filters: $filters) {
      metadata {
        total
      }
    }
  }
`;
export function useCountPimsByParamsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<CountPimsByParamsQuery, CountPimsByParamsQueryVariables>,
) {
  return ApolloReactHooks.useQuery<CountPimsByParamsQuery, CountPimsByParamsQueryVariables>(
    CountPimsByParamsDocument,
    baseOptions,
  );
}
export function useCountPimsByParamsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CountPimsByParamsQuery, CountPimsByParamsQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<CountPimsByParamsQuery, CountPimsByParamsQueryVariables>(
    CountPimsByParamsDocument,
    baseOptions,
  );
}
export type CountPimsByParamsQueryHookResult = ReturnType<typeof useCountPimsByParamsQuery>;
export type CountPimsByParamsLazyQueryHookResult = ReturnType<typeof useCountPimsByParamsLazyQuery>;
export type CountPimsByParamsQueryResult = ApolloReactCommon.QueryResult<
  CountPimsByParamsQuery,
  CountPimsByParamsQueryVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      avatar
    }
  }
`;
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
