import { AnyObject } from 'react-final-form';

import { PropertyType } from 'api/types';

export type AddPimBody = {
  forceAdd?: boolean;
  category: string;
  propertyType: PropertyType;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
};

export type AddPimSubmit<T = AnyObject> = (
  body: T,
) => Promise<
  | undefined
  | {
      error: 'conflict' | 'unknown';
      conflictsCount?: number;
    }
>;

export type AddPimStepProps = {
  onNext: () => void;
  onPrev: () => void;
};

export enum PropertyCategory {
  PROPERTY = 'Property',
  PROJECT = 'Project',
  COMPLEX = 'Complex',
}

export type AddPimModalProps = {
  onSubmit: AddPimSubmit;
  isOpen: boolean;
  propertyCategory?: string;
};
