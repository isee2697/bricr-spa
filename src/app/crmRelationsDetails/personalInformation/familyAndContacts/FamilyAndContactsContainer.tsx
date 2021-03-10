import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { UpdateCrmFamilyContactsInput, useGetCrmFamilyContactsLazyQuery } from 'api/types';
import { useUpdateCrmFamilyContactsMutation } from 'api/types';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Loader } from 'ui/atoms';

import { FamilyAndContacts } from './FamilyAndContacts';
import { FamilyAndContactsContainerProps } from './FamilyAndContacts.types';

export const FamilyAndContactsContainer = ({ isSidebarVisible, onSidebarOpen }: FamilyAndContactsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateCrmFamilyContacts] = useUpdateCrmFamilyContactsMutation();

  const [getCrmDetails, { data }] = useGetCrmFamilyContactsLazyQuery({
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    getCrmDetails({ variables: { id } });
  }, [getCrmDetails, id]);

  const handleSave = async (input: UpdateCrmFamilyContactsInput) => {
    try {
      await updateCrmFamilyContacts({ variables: { input } });
      getCrmDetails({ variables: { id } });
    } catch {
      return { error: true };
    }
  };

  const crm = data?.getCrmFamilyContacts;

  if (!crm) {
    return <Loader />;
  }

  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <FamilyAndContacts data={crm} onSave={handleSave} />
    </>
  );
};
