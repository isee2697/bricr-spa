import { LinkedPim, LastUpdatedProfile } from 'api/types';

export type LinkedPropertyProps = {
  properties: LinkedPim[];
  dateUpdated?: string | null;
  updatedBy?: LastUpdatedProfile | null;
  onDescriptionUpdate(values: unknown): Promise<undefined | { error: boolean }>;
  description: string;
};
