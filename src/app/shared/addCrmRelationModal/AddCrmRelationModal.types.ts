export type AddCrmRelationModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onCreateNewRelation: VoidFunction;
  onRequestBricrData: VoidFunction;
};

export type AddCrmRelationStepProps = {
  onNext: () => void;
  onCreateNewRelation: () => void;
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
