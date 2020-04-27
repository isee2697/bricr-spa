import { AnyObject } from 'react-final-form';

export const fieldMatchValidator = (field: string, message: string) => (
  value: string | number,
  allValues: AnyObject,
) => {
  if (!allValues || value !== (allValues[field] as string)) {
    return { id: message };
  }

  return undefined;
};
