import React, { useState } from 'react';

import { PimDetailsSectionProps } from '../../PimDetails.types';
import { LabelProperty } from 'api/types';
import { AddCustomPropertyModalContainer } from 'ui/organisms/addCustomPropertyModal/AddCustomPropertyModalContainer';

import { Specification } from './Specification';

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
        property={LabelProperty.ObligationToProvideInformation}
        isOpened={isCustomPropertyModalOpen}
        onClose={() => setIsCustomPropertyModalOpen(false)}
      />
    </>
  );
};
