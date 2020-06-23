import { DateTime } from 'luxon';

export const dateValidator = (value: string | null) => {
  if (value && DateTime.fromISO(value)?.invalidReason) {
    return { id: 'validation.invalid_date' };
  }

  return undefined;
};
