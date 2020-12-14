import React from 'react';
import { useParams } from 'react-router-dom';

import { KikInfoType, PimCadastreDocument, usePimCadastreQuery, useUpdateKikInfoMutation } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { Cadastre } from './Cadastre';

export const CadastreContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();

  const { data } = usePimCadastreQuery({ variables: { id } });
  const [updateKikInfoMutation] = useUpdateKikInfoMutation();
  const handleAutofill = async (infoType: KikInfoType) => {
    try {
      await updateKikInfoMutation({
        variables: { input: { pimId: id, infoType } },
        refetchQueries: [{ query: PimCadastreDocument, variables: { id } }],
      });
    } catch {
      return { error: true };
    }
  };

  return (
    <Cadastre
      title={title}
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
      data={data}
      onAutofill={handleAutofill}
    />
  );
};
