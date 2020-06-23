import React from 'react';
import { useParams } from 'react-router-dom';

import { usePimCadastreQuery } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { Cadastre } from './Cadastre';

export const CadastreContainer = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();

  const { data } = usePimCadastreQuery({ variables: { id } });

  return <Cadastre title={title} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} data={data} />;
};
