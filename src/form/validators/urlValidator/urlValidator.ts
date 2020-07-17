const URL_REGEX = /^(https?:\/\/)?(www\.)?([^.:/\s]+\.)+[^.\s]+$/;

export const urlValidator = (value: string | number) => {
  if (!value) {
    return undefined;
  }

  return !URL_REGEX.test(value.toString()) ? { id: 'validation.url' } : undefined;
};
