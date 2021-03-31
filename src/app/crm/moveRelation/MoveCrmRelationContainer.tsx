import React from 'react';
import { AnyObject } from 'final-form';

import { BulkEntities, BulkField, BulkOperations, useBulkMutation, useMovePimDataQuery } from 'api/types';
import { useModalState } from 'hooks';

import { MoveCrmRelation } from './MoveCrmRelation';

export const MoveCrmRelationContainer = () => {
  const [bulk] = useBulkMutation();
  const { isOpen: isModalOpen } = useModalState('move-crm-relation');

  const { data } = useMovePimDataQuery({
    skip: !isModalOpen,
  });

  const handleSubmit = async (values: AnyObject) => {
    try {
      const ids = values.ids;
      const value = values.teams.map((team: string) => 'team_' + team);

      await bulk({
        variables: {
          input: {
            ids,
            value,
            operation: BulkOperations.SetField,
            entity: BulkEntities.Pim,
            field: BulkField.Security,
          },
        },
        refetchQueries: [],
      });
    } catch (error) {}

    return undefined;
  };

  return <MoveCrmRelation onSubmit={handleSubmit} isOpen={isModalOpen} data={data} />;
};
