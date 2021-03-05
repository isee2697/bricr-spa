import { CrmGeneral } from 'api/types';

export type PersonalInformationGeneralProps = {
  data: Pick<
    CrmGeneral,
    | 'id'
    | 'firstName'
    | 'extraNames'
    | 'initials'
    | 'lastName'
    | 'gender'
    | 'dateOfBirth'
    | 'placeOfBirth'
    | 'nationality'
    | 'dateOfDeath'
    | 'isPassedAway'
    | 'preferredLanguage'
    | 'identification'
    | 'identificationNumber'
    | 'identificationIssueCity'
    | 'identificationIssueDate'
    | 'preferredTitlePrefix'
    | 'preferredTitleSuffix'
    | 'preferredLetterSalutation'
    | 'preferredTitleInformation'
    | 'status'
    | 'dateCreated'
    | 'completeness'
  >;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};

export type PersonalInformationGeneralContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};
