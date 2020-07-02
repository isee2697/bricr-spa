import { ExecutionResult } from 'apollo-link';

import { AddIdentificationNumberMutation, IdentificationNumber } from 'api/types';

export type IdentificationNumberFormContainerProps = {
  items: IdentificationNumber[];
};

export type IdentificationNumberFormProps = IdentificationNumberFormContainerProps & {
  onAdd: () => Promise<ExecutionResult<AddIdentificationNumberMutation>>;
  onSave(values: IdentificationNumber): Promise<undefined | { error: boolean }>;
};
