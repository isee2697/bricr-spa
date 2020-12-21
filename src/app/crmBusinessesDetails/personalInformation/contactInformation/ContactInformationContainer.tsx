import React from 'react';

import { UpdateCrmContactInformationInput } from 'api/types';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';

import { ContactInformation } from './ContactInformation';
import { ContactInformationContainerProps } from './ContactInformation.types';

export const ContactInformationContainer = ({ onSidebarOpen, isSidebarVisible }: ContactInformationContainerProps) => {
  const handleSave = async (input: UpdateCrmContactInformationInput) => {
    return undefined;
  };

  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <ContactInformation onSave={handleSave} />
    </>
  );
};
