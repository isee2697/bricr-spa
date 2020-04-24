export const requireValidator = (value: string | number) => {
  if (value === undefined || value === null || value === '' || (typeof value !== 'number' && value.length === 0)) {
    return { id: 'validation.required' };
  }

  return undefined;
};
