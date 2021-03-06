import { Maybe, Notification, TiaraMessageType, TiaraMutationStatusType } from 'api/types';

export type TiaraMutationUpdatedNotificationsGroupItemContainerProps = {
  data: Notification & TiaraMutationUpdatedNotificationsGroupItemProps;
};
export type TiaraMutationUpdatedNotificationsGroupItemProps = {
  description: string;
  messageType: TiaraMessageType;
  status: TiaraMutationStatusType;
  date: string;
  errors?: Maybe<string[]>;
};
