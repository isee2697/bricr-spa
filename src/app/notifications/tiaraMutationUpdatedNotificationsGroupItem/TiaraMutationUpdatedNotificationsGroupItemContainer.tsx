import React from 'react';

import { TiaraEntities } from 'api/types';

import { TiaraMutationUpdatedNotificationsGroupItemContainerProps } from './TiaraMutationUpdatedNotificationsGroupItem.types';
import { TiaraMutationUpdatedNotificationsGroupItemNcpContainer } from './tiaraMutationUpdatedNotificationsGroupItemNcpContainer';
import { TiaraMutationUpdatedNotificationsGroupItemObjectTypeContainer } from './tiaraMutationUpdatedNotificationsGroupItemObjectTypeContainer';
import { TiaraMutationUpdatedNotificationsGroupItemPimContainer } from './tiaraMutationUpdatedNotificationsGroupItemPimContainer';

export const TiaraMutationUpdatedNotificationsGroupItemContainer = ({
  data,
}: TiaraMutationUpdatedNotificationsGroupItemContainerProps) => {
  switch (data.entity) {
    case TiaraEntities.Pim:
      return <TiaraMutationUpdatedNotificationsGroupItemPimContainer data={data} />;
    case TiaraEntities.Ncp:
      return <TiaraMutationUpdatedNotificationsGroupItemNcpContainer data={data} />;
    case TiaraEntities.ObjectType:
      return <TiaraMutationUpdatedNotificationsGroupItemObjectTypeContainer data={data} />;
    default:
      throw new Error('Unkown entity type');
  }
};
