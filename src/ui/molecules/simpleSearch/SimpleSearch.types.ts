import { ChangeEvent } from 'react';

export type SimpleSearchProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholderId?: string;
  className?: string;
};
