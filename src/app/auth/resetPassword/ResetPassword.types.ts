export type ResetPasswordFormValues = { password: string; repeatPassword: string; email: string };

export type ResetPasswordProps = {
  onSubmit(payload: ResetPasswordFormValues): Promise<boolean>;
};
