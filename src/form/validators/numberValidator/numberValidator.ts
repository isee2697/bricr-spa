export const numberValidator = () => (value: string | number) => {
  if (value) {
    const parsed = parseInt(value.toString(), 10);

    if (Number.isNaN(parsed)) {
      return { id: 'validation.number' };
    }
  }

  return undefined;
};
