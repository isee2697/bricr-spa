export type CreateWizardProps = {
  onGotoResult: VoidFunction;
  onSaveCriteria: VoidFunction;
};

export type CreateWizardStepProps = {
  onNextStep: () => void;
  onPreviousStep: () => void;
};
