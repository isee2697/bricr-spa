export type ServicesProps = {
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
