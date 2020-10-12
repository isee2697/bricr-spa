import React from 'react';
import { useParams } from 'react-router-dom';
import { UpdateCrmGeneralInput, useGetCrmGeneralQuery } from 'api/types';
import { useUpdateCrmGeneralMutation } from 'api/types';

import { PersonalInformationGeneral } from './General';

export const PersonalInformationGeneralContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCrmGeneralQuery({ variables: { id } });
  const [updateCrmGeneral] = useUpdateCrmGeneralMutation();

  const handleSave = async (input: UpdateCrmGeneralInput) => {
    try {
      const inputWithoutAvatar = { ...input, avatar: undefined };
      await updateCrmGeneral({ variables: { input: inputWithoutAvatar } });
    } catch {
      return { error: true };
    }
  };

  const crm = data?.getCrmGeneral;

  if (!crm) {
    return null;
  }

  console.log(crm);

  return <PersonalInformationGeneral data={crm} onSave={handleSave} />;
};
