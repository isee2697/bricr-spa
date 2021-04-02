import { gql } from 'apollo-boost';

export const LIST_DMS_FOLDERS = gql`
  query ListDmsFolders($entityId: ID!) {
    listDmsFolders(entityId: $entityId)
      @rest(type: "ListDmsFolders", path: "/dms/folders/list/{args.entityId}", method: "GET", endpoint: "default") {
      id
      entityId
      companyId
      foldername
      entityType
      type
      order
      deletedAt
      isEmailFolder
      isQuestionaireFolder
      isListOfItemsFolder
      isContractsFolder
      isSurveyFolder
      isInvoicesFolder
    }
  }
`;
