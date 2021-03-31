import { CrmGeneral } from 'api/types';

export type PersonalInformationProps = {
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
  >;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
