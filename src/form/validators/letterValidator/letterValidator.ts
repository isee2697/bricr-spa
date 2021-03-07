export const letterValidator = (value: string | number) => {
  if (value) {
    const parsed = `${value}`;

    if (!/^[a-zA-Z\s\-]+$/.test(parsed)) {
      return { id: 'validation.letter' };
    }
  }

  return undefined;
};
