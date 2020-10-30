import { PropertyType } from '../../../api/types';
export enum SetupSteps {
  ClientType = 'ClientType',
  PropertyTypes = 'PropertyTypes',
  ConfirmationTypes = 'ConfirmationTypes',
}
export enum ClientType {
  Developer = 'Developer',
  Administrator = 'Administrator',
  Broker = 'Broker',
}

export type StepData = {
  clientName?: string;
  clientTypes?: ClientType[];
  propertyTypes?: PropertyType[];
};
