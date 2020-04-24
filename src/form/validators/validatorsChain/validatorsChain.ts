import { FieldValidator } from 'final-form';

export const validatorsChain = <T>(...args: FieldValidator<T>[]) => (value: T, allValues: object) => {
  for (let i = 0; i < args.length; i += 1) {
    const validatorResult = args[i](value, allValues);

    if (validatorResult) {
      return validatorResult;
    }
  }

  return undefined;
};
