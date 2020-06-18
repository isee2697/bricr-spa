import React, { useState } from 'react';

import { PimDetailsSectionProps } from '../../PimDetails.types';

import { Specification } from './Specification';
import { AddCustomPropertyModalContainer } from './addCustomPropertyModal/AddCustomPropertyModalContainer';

export const SpecificationContainer = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const [isCustomPropertyModalOpen, setIsCustomPropertyModalOpen] = useState(false);

  return (
    <>
      <Specification
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        onAddPropertyClick={() => setIsCustomPropertyModalOpen(v => !v)}
      />
      <AddCustomPropertyModalContainer
        isOpened={isCustomPropertyModalOpen}
        onClose={() => setIsCustomPropertyModalOpen(false)}
      />
    </>
  );
};
