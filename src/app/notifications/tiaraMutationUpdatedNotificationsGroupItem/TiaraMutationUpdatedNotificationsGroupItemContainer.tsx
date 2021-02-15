import React from 'react';

import { Entities } from 'api/types';

import { TiaraMutationUpdatedNotificationsGroupItemContainerProps } from './TiaraMutationUpdatedNotificationsGroupItem.types';
import { TiaraMutationUpdatedNotificationsGroupItemNcpContainer } from './tiaraMutationUpdatedNotificationsGroupItemNcpContainer';
import { TiaraMutationUpdatedNotificationsGroupItemObjectTypeContainer } from './tiaraMutationUpdatedNotificationsGroupItemObjectTypeContainer';
import { TiaraMutationUpdatedNotificationsGroupItemPimContainer } from './tiaraMutationUpdatedNotificationsGroupItemPimContainer';

export const TiaraMutationUpdatedNotificationsGroupItemContainer = ({
  data,
}: TiaraMutationUpdatedNotificationsGroupItemContainerProps) => {
  switch (data.linkedEntity?.type) {
    case Entities.Pim:
      return <TiaraMutationUpdatedNotificationsGroupItemPimContainer data={data} />;
    case Entities.Ncp:
      return <TiaraMutationUpdatedNotificationsGroupItemNcpContainer data={data} />;
    case Entities.ObjectType:
      return <TiaraMutationUpdatedNotificationsGroupItemObjectTypeContainer data={data} />;
    default:
      throw new Error('Unkown entity type');
  }
};
