import { LinkedPim, Profile } from 'api/types';

export type LinkedPropertyProps = {
  properties: LinkedPim[];
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
  onDescriptionUpdate(values: unknown): Promise<undefined | { error: boolean }>;
  description: string;
};
