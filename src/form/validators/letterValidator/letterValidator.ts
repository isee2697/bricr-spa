export const letterValidator = (value: string | number) => {
  if (value) {
    const parsed = `${value}`;

    if (parsed.search(/\D/g) >= 0) {
      return { id: 'validation.letter' };
    }
  }

  return undefined;
};
