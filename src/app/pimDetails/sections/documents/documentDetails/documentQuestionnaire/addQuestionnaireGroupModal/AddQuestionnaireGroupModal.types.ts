export type AddQuestionnaireGroupBody = {
  name: string;
};

export type AddQuestionnaireGroupModalProps = {
  onSubmit: (values: AddQuestionnaireGroupBody) => Promise<boolean>;
};
