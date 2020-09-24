import { DateTime } from 'luxon';

export const timeValidator = (value: string | null) => {
  if (value && DateTime.fromISO(value)?.invalidReason) {
    return { id: 'validation.invalid_time' };
  }

  return undefined;
};
