export type AddCrmBusinessModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onCreateNewBusiness: (input: CreateBusinessInput) => Promise<void>;
  onRequestBricrData: VoidFunction;
};

export type AddCrmBusinessStepProps = {
  handleGoTo: (step: number) => void;
  onCreateNewBusiness: (input: CreateBusinessInput) => Promise<void>;
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

export type CreateBusinessInput = {
  business: string;
  emailAddress: string;
  phoneNumber: string;
};

export type Business = {
  id: string;
  name: string;
};
