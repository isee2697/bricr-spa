import { PropertyType } from 'api/types';

type AddPimBody = {
  forceAdd?: boolean;
  category: string;
  propertyType: PropertyType;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
};

export type AddPimSubmit = (
  body: AddPimBody,
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

export type AddPimModalProps = {
  isOpened: boolean;
  onClose: () => void;
  onSubmit: AddPimSubmit;
};
