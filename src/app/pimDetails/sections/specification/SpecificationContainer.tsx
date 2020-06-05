import React from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm } from 'ui/organisms';
import { PimDetailsSectionProps } from '../../PimDetails.types';

import { Specification } from './Specification';

export const SpecificationContainer = ({ title, isSidebarVisible, onOpenSidebar, pim }: PimDetailsSectionProps) => {
  const handleSave = () => Promise.resolve({ error: false });

  return (
    <AutosaveForm
      initialValues={pim || undefined}
      onSave={handleSave}
      subscription={{}}
      mutators={{ ...arrayMutators }}
    >
      <Specification title={title} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} />
    </AutosaveForm>
  );
};
