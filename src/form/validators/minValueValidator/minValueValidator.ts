export const minValueValidator = (minLength: number) => (value: string | number) => {
  if (typeof Number(value) === 'number' && Number(value) < minLength) {
    return { id: 'validation.min_value', values: { value: minLength } };
  }

  return undefined;
};
