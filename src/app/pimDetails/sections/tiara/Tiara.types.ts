import { TiaraMessageType, TiaraMutation } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type TiaraProps = PimDetailsSectionProps & {
  mutations: TiaraMutation[];
  sendMessage(messageType: TiaraMessageType): Promise<undefined | { error: boolean }>;
};
