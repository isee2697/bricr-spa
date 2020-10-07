import { DateTime } from 'luxon';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import {
  AddServiceInput,
  Meter,
  MetersSharedData,
  OwnershipType,
  PimServices,
  ServiceConfiguration,
  ServiceType,
} from 'api/types';
import { LinkedPersonProps } from 'ui/molecules/linkedPerson/LinkedPerson.types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type ServicesProps = PimDetailsSectionProps & {
  pimServices: PimServices;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  onDescriptionUpdate(values: unknown): Promise<undefined | { error: boolean }>;
};

export type ServicesMetersContainerProps = PimDetailsSectionProps & {
  isMeterAdded: boolean;
  pimServices: PimServices;
  linkedPerson: LinkedPersonProps;
  type: 'GasMeters' | 'WaterMeters' | 'ElectricityMeters';
};

export type ServicesMetersProps = {
  isMeterAdded: boolean;
  meters: Meter[];
  metersMeta: MetersSharedData;
  onDescriptionUpdate(body: { description: string }): Promise<undefined | { error: boolean }>;
  loading: boolean;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  onAddReading(values: unknown): Promise<undefined | { error: boolean }>;
  linkedPerson: LinkedPersonProps;
  title: string;
};

export type ServiceTypeListProps<T> = {
  emptyEmoji: string;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  title: string;
  items: T[];
  type: ServiceType;
};

export type ServiceFormProps<T> = {
  types?: ServiceRadioType[];
  typesTitle?: string;
  item: T;
  isEditMode: boolean;
  hasOwnership: boolean;
};

export type ServiceRadioType = RadioDataType & {
  hasOwnership?: boolean;
};

export type ServiceForm = {
  id: string;
  type: ServiceType;
  name: string;
  description?: string;
  yearOfInstallation?: DateTime;
  configuration: ServiceConfiguration;
  ownership?: OwnershipType;
};

export type AddServiceSubmit = (
  body: AddServiceInput,
) => Promise<
  | undefined
  | {
      error: boolean;
    }
>;

export type AddServiceModalProps = {
  isOpened: boolean;
  onSubmit: AddServiceSubmit;
  onClose: VoidFunction;
  types: ServiceRadioType[];
  title: string;
  nameLabel: string;
};

export type AddServiceModalContainerProps = {
  onAddService: VoidFunction;
  isOpened: boolean;
  type: ServiceType;
  types: ServiceRadioType[];
  onClose: (id?: string) => void;
};
