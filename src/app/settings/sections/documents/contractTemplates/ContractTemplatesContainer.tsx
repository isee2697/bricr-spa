import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { useModalDispatch } from 'hooks';

import { ContractTemplates } from './ContractTemplates';
import { ContractTemplate } from './ContractTemplates.types';
import { AddContractTemplateBody } from './addContractTemplateModal/AddContractTemplateModal.types';

export const ContractTemplatesContainer = () => {
  const [contractTemplates, setContractTemplates] = useState<ContractTemplate[]>([
    {
      id: '0001',
      name: 'Sales contract',
      version: 1,
      dateVersion: DateTime.local(),
      status: 'inactive',
    },
  ]);
  const { close } = useModalDispatch();

  const handleAddContractTemplate = async (body: AddContractTemplateBody) => {
    setContractTemplates([
      ...contractTemplates,
      {
        id: `${contractTemplates.length}`,
        name: body.name,
        version: 1,
        dateVersion: DateTime.local(),
        status: 'inactive',
      },
    ]);

    close('add-contract-template');

    return undefined;
  };

  return <ContractTemplates contractTemplates={contractTemplates} onAddContractTemplate={handleAddContractTemplate} />;
};
