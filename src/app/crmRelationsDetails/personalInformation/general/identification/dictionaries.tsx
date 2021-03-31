import { IdentificationType } from 'api/types';

export const idTypes = Object.keys(IdentificationType).map(key => ({
  label: key,
  value: key,
}));
