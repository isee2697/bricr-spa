export type CreateWizardProps = {
  onCloseWizard: VoidFunction;
};

export type CreateWizardStepProps = {
  onNextStep: () => void;
  onPreviousStep: () => void;
};
