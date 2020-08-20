export type MeterInfoContainerProps = {
  hasMeters: boolean;
  description?: string;
};

export type MeterInfoProps = MeterInfoContainerProps & {
  onSave?: (body: { description?: string }) => Promise<undefined | { error: boolean }>;
};
