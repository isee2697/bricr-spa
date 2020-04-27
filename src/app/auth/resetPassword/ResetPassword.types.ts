export type ResetPasswordFormValues = { password: string; repeatPassword: string };

export type ResetPasswordProps = {
  onSubmit(payload: ResetPasswordFormValues): Promise<boolean>;
};
