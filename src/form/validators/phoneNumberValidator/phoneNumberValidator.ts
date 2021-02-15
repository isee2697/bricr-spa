export const phoneNumberValidator = (value: string | number) => {
  if (value) {
    const parsed = `${value}`;

    if (
      !parsed.match(
        /^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$/,
      )
    ) {
      return { id: 'validation.phone_number' };
    }
  }

  return undefined;
};
