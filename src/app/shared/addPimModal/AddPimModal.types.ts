import { AnyObject } from 'react-final-form';

import { NcpType, PropertyType } from 'api/types';
import { ModalStateOptions } from 'context/modal/modalContext/ModalContext.types';

export type AddPimBody = {
  forceAdd?: boolean;
  category: string;
  propertyType: PropertyType;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
};

export type AddNcpBody = {
  forceAdd?: boolean;
  category: string;
  propertyType: NcpType;
  name: string;
  additionalName: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  country: string;
  additionalHouseNumber: string;
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
  options?: ModalStateOptions;
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
  options?: ModalStateOptions;
};
