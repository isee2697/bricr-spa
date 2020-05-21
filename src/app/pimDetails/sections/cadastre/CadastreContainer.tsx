import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { Cadastre } from './Cadastre';

export const CadastreContainer = ({ title, isSidebarVisible, onOpenSidebar, pim }: PimDetailsSectionProps) => {
  const handleSave = () => Promise.resolve({ error: false });

  if (!pim) {
    return null;
  }

  return (
    <Cadastre
      isSidebarVisible={isSidebarVisible}
      onOpenSidebar={onOpenSidebar}
      title={title}
      pim={pim}
      onSave={handleSave}
    />
  );
};
