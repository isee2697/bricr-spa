import React from 'react';
import { useParams } from 'react-router-dom';

import { UpdateCrmFamilyContactsInput, useGetCrmFamilyContactsQuery } from 'api/types';
import { useUpdateCrmFamilyContactsMutation } from 'api/types';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';

import { FamilyAndContacts } from './FamilyAndContacts';
import { FamilyAndContactsContainerProps } from './FamilyAndContacts.types';

export const FamilyAndContactsContainer = ({ isSidebarVisible, onSidebarOpen }: FamilyAndContactsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCrmFamilyContactsQuery({ variables: { id } });
  const [updateCrmFamilyContacts] = useUpdateCrmFamilyContactsMutation();

  const handleSave = async (input: UpdateCrmFamilyContactsInput) => {
    try {
      await updateCrmFamilyContacts({ variables: { input } });
    } catch {
      return { error: true };
    }
  };

  const crm = data?.getCrmFamilyContacts;

  if (!crm) {
    return null;
  }

  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <FamilyAndContacts data={crm} onSave={handleSave} />
    </>
  );
};
