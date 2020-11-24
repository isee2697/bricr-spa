import { TiaraEntities, TiaraMessageType, TiaraMutation, TiaraValidation } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type TiaraContainerProps = PimDetailsSectionProps & {
  entity: TiaraEntities;
};

export type TiaraProps = {
  mutations: TiaraMutation[];
  validation: TiaraValidation;
  sendMessage(messageType: TiaraMessageType): Promise<undefined | { error: boolean }>;
};
