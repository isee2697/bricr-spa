import React from 'react';
import { useParams } from 'react-router-dom';

import { UpdateCrmContactInformationInput, useGetCrmContactInformationQuery } from 'api/types';
import { useUpdateCrmContactInformationMutation } from 'api/types';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';

import { ContactInformation } from './ContactInformation';
import { ContactInformationContainerProps } from './ContactInformation.types';

export const ContactInformationContainer = ({ onSidebarOpen, isSidebarVisible }: ContactInformationContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetCrmContactInformationQuery({ variables: { id } });
  const [updateCrmContactInformation] = useUpdateCrmContactInformationMutation();

  const handleSave = async (input: UpdateCrmContactInformationInput) => {
    try {
      await updateCrmContactInformation({
        variables: {
          input: {
            id,
            addresses: input.addresses,
            emailAddresses: input.emailAddresses,
            phoneNumbers: input.phoneNumbers,
            socialMedia: input.socialMedia,
          },
        },
      });
    } catch {
      return { error: true };
    }
  };

  const crm = data?.getCrmContactInformation;

  if (!crm) {
    return null;
  }

  return (
    <>
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <ContactInformation data={crm} onSave={handleSave} />
    </>
  );
};
