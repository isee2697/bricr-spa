import React from 'react';
import { AnyObject } from 'final-form';

import { BulkEntities, BulkField, BulkOperations, useBulkMutation, useMovePimDataQuery } from 'api/types';
import { useModalState } from 'hooks';

import { MovePimModal } from './MovePimModal';

export const MovePimModalContainer = () => {
  const [bulk] = useBulkMutation();
  const { isOpen: isModalOpen, options } = useModalState('move-pim');

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

  return <MovePimModal onSubmit={handleSubmit} isOpen={isModalOpen} options={options} data={data} />;
};
