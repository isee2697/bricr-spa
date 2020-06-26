import { LinkedPim, Profile } from 'api/types';

export type LinkedPropertyProps = {
  properties: LinkedPim[];
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
};
