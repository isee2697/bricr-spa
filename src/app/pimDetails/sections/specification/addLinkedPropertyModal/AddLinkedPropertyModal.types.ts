import { File, LinkedPim, ListPim, Maybe } from 'api/types';

export type LinkedPimType =
  | (Pick<
      ListPim,
      | 'id'
      | 'street'
      | 'houseNumberPrefix'
      | 'houseNumber'
      | 'houseNumberAddition'
      | 'constructionNumberPrefix'
      | 'constructionNumber'
      | 'constructionNumberAddition'
      | 'city'
      | 'dateCreated'
      | 'livingArea'
      | 'propertyType'
      | 'salePrice'
      | 'rentPrice'
      | 'completeness'
      | 'archived'
    > & { images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>> })
  | undefined;

export type PimList = Maybe<Array<{ __typename?: 'ListPim' } & LinkedPimType>> | undefined;

export type LinkedProperty = Maybe<
  Array<
    { __typename?: 'LinkedPim' } & Pick<
      LinkedPim,
      | 'id'
      | 'houseNumberPrefix'
      | 'houseNumber'
      | 'houseNumberAddition'
      | 'postalCode'
      | 'district'
      | 'city'
      | 'state'
      | 'county'
      | 'country'
      | 'propertyType'
      | 'attention'
      | 'plotNumber'
      | 'salePrice'
      | 'rentPrice'
      | 'status'
    > & { images?: Maybe<Array<{ __typename?: 'File' } & Pick<File, 'url'>>> }
  >
>;

export type AddLinkedPropertyModalProps = {
  isOpened: boolean;
  onClose: () => void;
  onSubmit: (e: object) => Promise<undefined | { error: boolean }>;
  pimList: PimList | undefined;
  linkedProperty: LinkedProperty | undefined;
  onPropertySelect: (id: string) => void;
  selectedPims: string[];
};

export type AddLinkedPropertyModalContainerProps = {
  isOpened: boolean;
  onClose: () => void;
};

export type LinkedPropertyType = ListPim;
