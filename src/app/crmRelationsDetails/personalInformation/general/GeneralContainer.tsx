import React from 'react';
import { useParams } from 'react-router-dom';

import { UpdateCrmGeneralInput, useGetCrmGeneralQuery } from 'api/types';
import { useUpdateCrmGeneralMutation } from 'api/types';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';

import { PersonalInformationGeneral } from './General';
import { PersonalInformationGeneralContainerProps } from './General.types';

export const PersonalInformationGeneralContainer = ({
  isSidebarVisible,
  onSidebarOpen,
}: PersonalInformationGeneralContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCrmGeneralQuery({ variables: { id } });
  const [updateCrmGeneral] = useUpdateCrmGeneralMutation();

  const handleSave = async (input: UpdateCrmGeneralInput) => {
    try {
      const inputWithoutAvatar = { ...input, id, avatar: undefined };
      await updateCrmGeneral({ variables: { input: inputWithoutAvatar } });
    } catch {
      return { error: true };
    }
  };

  const crm = data?.getCrmGeneral;

  if (!crm) {
    return null;
  }

  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <PersonalInformationGeneral data={crm} onSave={handleSave} />
    </>
  );
};
