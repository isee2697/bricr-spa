export type LoginProps = {
  onSubmit(payload: { login?: string; password?: string }): Promise<boolean>;
};
