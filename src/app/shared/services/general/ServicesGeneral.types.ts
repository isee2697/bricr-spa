import { ReactNode } from 'react';
import { DateTime } from 'luxon';

import { ProjectDetailsProps } from 'app/projectDetails/ProjectDetails.types';
import {
  Meter,
  ServiceType,
  PimServices,
  ServiceConfiguration,
  OwnershipType,
  MetersSharedData,
  NcpServices,
  ObjectTypeServices,
} from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { LinkedPersonProps } from 'ui/molecules/linkedPerson/LinkedPerson.types';

export type ServicesProps = PimDetailsSectionProps &
  ProjectDetailsProps & {
    ncpServices: NcpServices | ObjectTypeServices;
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
  title: ReactNode;
  types?: ServiceRadioType[];
  typesTitle?: string;
  item: T;
  isEditMode: boolean;
  toggled: boolean;
  onToggleClick: VoidFunction;
  hasOwnership: boolean;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  isExpanded: boolean;
  onExpand: (id: string) => void;
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
