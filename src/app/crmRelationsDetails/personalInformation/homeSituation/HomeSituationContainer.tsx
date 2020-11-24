import React from 'react';
import { useParams } from 'react-router-dom';

import { UpdateCrmHomeSituationInput, useGetCrmHomeSituationQuery } from 'api/types';
import { useUpdateCrmHomeSituationMutation } from 'api/types';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';

import { HomeSituation } from './HomeSituation';
import { HomeSituationContainerProps } from './HomeSituation.types';

export const HomeSituationContainer = ({ onSidebarOpen, isSidebarVisible }: HomeSituationContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCrmHomeSituationQuery({ variables: { id } });
  const [updateCrmHomeSituation] = useUpdateCrmHomeSituationMutation();

  const handleSave = async (input: UpdateCrmHomeSituationInput) => {
    try {
      await updateCrmHomeSituation({ variables: { input } });
    } catch {
      return { error: true };
    }
  };

  const crm = data?.getCrmHomeSituation;

  if (!crm) {
    return null;
  }

  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <HomeSituation data={crm} onSave={handleSave} />
    </>
  );
};
