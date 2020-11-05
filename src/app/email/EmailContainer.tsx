import React from 'react';

import { AppRoute } from 'routing/AppRoute.enum';
import { EntityType } from 'app/shared/entityType';

import { Email } from './Email';

export const EmailContainer = () => {
  return <Email path={AppRoute.email} entityType={EntityType.Email} />;
};
