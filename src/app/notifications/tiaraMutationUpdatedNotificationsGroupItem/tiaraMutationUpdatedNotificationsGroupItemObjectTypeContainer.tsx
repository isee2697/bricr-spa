import React from 'react';

import { useGetObjectTypeGeneralQuery } from 'api/types';

import { TiaraMutationUpdatedNotificationsGroupItem } from './TiaraMutationUpdatedNotificationsGroupItem';
import { TiaraMutationUpdatedNotificationsGroupItemContainerProps } from './TiaraMutationUpdatedNotificationsGroupItem.types';

export const TiaraMutationUpdatedNotificationsGroupItemObjectTypeContainer = ({
  data: { objectTypeId, messageType, status, date, errors },
}: TiaraMutationUpdatedNotificationsGroupItemContainerProps) => {
  const { data } = useGetObjectTypeGeneralQuery({ variables: { id: objectTypeId ?? '' } });
  const description = `${data?.getObjectTypeGeneral.name}`;

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
