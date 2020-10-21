import { CreateCrmInput } from 'api/types';

export type AddCrmRelationModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onCreateNewRelation: (input: CreateCrmInput) => Promise<void>;
  onRequestBricrData: VoidFunction;
};

export type AddCrmRelationStepProps = {
  handleGoTo: (step: number) => void;
  onCreateNewRelation: (input: CreateCrmInput) => Promise<void>;
  onRequestBricrData: () => void;
  onClose: () => void;
};

export enum TypeOfInformation {
  General = 'General',
  Contact = 'Contact',
  PeopleAndFamily = 'PeopleAndFamily',
  Finance = 'Finance',
  HomeSituation = 'HomeSituation',
  EmfProfile = 'EmfProfile',
}
