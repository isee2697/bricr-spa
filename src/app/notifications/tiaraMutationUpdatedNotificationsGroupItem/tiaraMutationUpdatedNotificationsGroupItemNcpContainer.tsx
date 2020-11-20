import React from 'react';

import { useNcpGeneralQuery } from 'api/types';

import { TiaraMutationUpdatedNotificationsGroupItem } from './TiaraMutationUpdatedNotificationsGroupItem';
import { TiaraMutationUpdatedNotificationsGroupItemContainerProps } from './TiaraMutationUpdatedNotificationsGroupItem.types';

export const TiaraMutationUpdatedNotificationsGroupItemNcpContainer = ({
  data: { ncpId, messageType, status, date, errors },
}: TiaraMutationUpdatedNotificationsGroupItemContainerProps) => {
  const { data } = useNcpGeneralQuery({ variables: { id: ncpId ?? '' } });
  const description = `${data?.getNcp.name}`;

  return (
    <TiaraMutationUpdatedNotificationsGroupItem
      description={description}
      messageType={messageType}
      status={status}
      date={date}
      errors={errors}
    />
  );
};
