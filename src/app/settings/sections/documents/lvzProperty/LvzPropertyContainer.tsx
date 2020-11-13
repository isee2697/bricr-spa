import React, { useState } from 'react';

import { useModalDispatch } from 'hooks';

import { LvzProperty } from './LvzProperty';
import { AddLvzPropertyGroupBody } from './addLvzPropertyGroupModal/AddLvzPropertyGroupModal.types';
import { LvzPropertyGroup } from './LvzProperty.types';

export const LvzPropertyContainer = () => {
  const [lzvGroups, setLzvGroups] = useState<LvzPropertyGroup[]>([]);
  const { close } = useModalDispatch();

  const handleAddLvzGroup = async (body: AddLvzPropertyGroupBody) => {
    setLzvGroups([
      ...lzvGroups,
      {
        id: `${lzvGroups.length}`,
        name: body.name,
      },
    ]);

    close('add-lvz-property-group');

    return undefined;
  };

  return <LvzProperty groups={lzvGroups} onAddLvzGroup={handleAddLvzGroup} />;
};
