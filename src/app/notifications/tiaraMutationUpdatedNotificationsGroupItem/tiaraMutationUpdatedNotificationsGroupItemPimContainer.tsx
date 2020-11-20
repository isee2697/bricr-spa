import React from 'react';

import { usePimGeneralQuery } from 'api/types';

import { TiaraMutationUpdatedNotificationsGroupItem } from './TiaraMutationUpdatedNotificationsGroupItem';
import { TiaraMutationUpdatedNotificationsGroupItemContainerProps } from './TiaraMutationUpdatedNotificationsGroupItem.types';

export const TiaraMutationUpdatedNotificationsGroupItemPimContainer = ({
  data: { pimId, messageType, status, date, errors },
}: TiaraMutationUpdatedNotificationsGroupItemContainerProps) => {
  const { data } = usePimGeneralQuery({ variables: { id: pimId ?? '' } });
  const description = `${data?.getPimGeneral.street} ${data?.getPimGeneral.houseNumber}`;

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
