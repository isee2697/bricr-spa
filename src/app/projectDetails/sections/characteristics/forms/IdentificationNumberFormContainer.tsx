import React from 'react';

import { IdentificationNumber } from 'api/types';
import { IdentificationNumberForm } from 'app/shared/identificationNumber/IdentificationNumberForm';

export const IdentificationNumberFormContainer = ({ items }: { items: IdentificationNumber[] }) => {
  const handleAdd = async () => {
    return {
      id: undefined,
    };
  };

  const handleSave = async (values: IdentificationNumber) => {
    return undefined;
  };

  return <IdentificationNumberForm items={items} onAdd={handleAdd} onSave={handleSave} />;
};
