export type PersonalInformationProps = {
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
