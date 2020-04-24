export type LoginProps = {
  onSubmit(payload: { username?: string; password?: string }): Promise<boolean>;
};
