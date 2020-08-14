import { AogSpace, AogSpaceType } from 'api/types';

export type AogTypeSpecificFormProps = {
  data: AogSpace;
};
export type AogSpaceFormProps = AogTypeSpecificFormProps & {
  onSave: (data: AogSpace) => Promise<undefined | { error: boolean }>;
};
