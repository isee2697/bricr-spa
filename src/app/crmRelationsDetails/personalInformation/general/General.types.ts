import { CrmGeneral } from 'api/types';

export type PersonalInformationGeneralProps = {
  data: Pick<
    CrmGeneral,
    | 'id'
    | 'firstName'
    | 'extraNames'
    | 'insertion'
    | 'lastName'
    | 'gender'
    | 'dateOfBirth'
    | 'placeOfBirth'
    | 'nationality'
    | 'preferredLanguage'
    | 'identification'
    | 'identificationNumber'
    | 'identificationIssueCity'
    | 'identificationIssueDate'
    | 'preferredTitlePrefix'
    | 'preferredTitleSuffix'
    | 'preferredLetterSalutation'
    | 'preferredTitleInformation'
  >;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type PersonalInformationGeneralContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
