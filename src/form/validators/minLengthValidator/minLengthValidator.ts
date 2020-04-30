export const minLengthValidator = (minLength: number) => (value: string | number) => {
  if (typeof value === 'string' && value.length < minLength) {
    return { id: 'validation.min_length', values: { length: minLength } };
  }

  return undefined;
};
