import { Maybe, TiaraEntities, TiaraMessageType, TiaraMutation, TiaraMutationStatusType } from 'api/types';

export type TiaraMutationUpdatedNotificationsGroupItemContainerProps = {
  data: TiaraMutationUpdatedNotification;
};
export type TiaraMutationUpdatedNotificationsGroupItemProps = {
  description: string;
  messageType: TiaraMessageType;
  status: TiaraMutationStatusType;
  date: string;
  errors?: Maybe<string[]>;
};

export type TiaraMutationUpdatedNotification = TiaraMutation & {
  entity: TiaraEntities;
  pimId?: string;
  ncpId?: string;
  objectTypeId?: string;
};
