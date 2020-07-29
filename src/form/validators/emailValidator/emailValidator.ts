const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

export const emailValidator = (value: string | number) => {
  if (!value) {
    return undefined;
  }

  return !EMAIL_REGEX.test(value.toString()) ? { id: 'validation.email' } : undefined;
};
