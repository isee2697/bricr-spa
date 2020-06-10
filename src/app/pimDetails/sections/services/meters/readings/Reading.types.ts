import { LinkedPersonProps } from 'ui/molecules/linkedPerson/LinkedPerson.types';
import { Reading } from 'api/types';

export type ReadingContainerProps = {
  readings: Reading[];
  editing: boolean;
  linkedPerson: LinkedPersonProps;
};

export type ReadingProps = ReadingContainerProps & {
  onSave(values: Reading): Promise<undefined | { error: boolean }>;
};

export type EditMReadingBody = {
  id: string;
  value?: number;
  dateOfReading?: Date;
  feedInId?: string;
};

export type AddReadingSubmit = (
  body: null,
) => Promise<
  | undefined
  | {
      error: boolean;
    }
>;
