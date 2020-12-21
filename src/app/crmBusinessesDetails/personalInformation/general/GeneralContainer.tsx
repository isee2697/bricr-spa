import React from 'react';

import { UpdateCrmGeneralInput } from 'api/types';
import { Header } from 'app/crmBusinessesDetails/header/Header';
import { Button } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowOriginalIcon } from 'ui/atoms/icons';

import { PersonalInformationGeneral } from './General';
import { PersonalInformationGeneralContainerProps } from './General.types';

export const PersonalInformationGeneralContainer = ({
  isSidebarVisible,
  onSidebarOpen,
}: PersonalInformationGeneralContainerProps) => {
  const { formatMessage } = useLocale();
  const handleSave = async (input: UpdateCrmGeneralInput) => {
    return undefined;
  };

  return (
    <>
      <Header
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button variant="contained" color="primary" size="small" endIcon={<ArrowOriginalIcon />}>
            {formatMessage({ id: 'crm.details.personal_information_general.invite_user_to_mybricr' })}
          </Button>
        }
      />
      <PersonalInformationGeneral onSave={handleSave} />
    </>
  );
};
