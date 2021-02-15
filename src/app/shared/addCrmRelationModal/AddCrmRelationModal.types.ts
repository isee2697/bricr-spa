import { CreateCrmInput } from 'api/types';

export type AddCrmRelationModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onCreateNewRelation: AddCrmSubmit;
  onRequestBricrData: VoidFunction;
};

export type AddCrmRelationStepProps = {
  handleGoTo: (step: number) => void;
  onRequestBricrData: () => void;
  onClose: () => void;
};

export type AddCrmSubmit<T = CreateCrmInput & { forceAdd?: boolean }> = (
  body: T,
) => Promise<
  | undefined
  | {
      error: 'conflict' | 'unknown';
      conflictsCount?: number;
    }
>;

export enum TypeOfInformation {
  General = 'General',
  Contact = 'Contact',
  PeopleAndFamily = 'PeopleAndFamily',
  Finance = 'Finance',
  HomeSituation = 'HomeSituation',
  EmfProfile = 'EmfProfile',
}
