import React from 'react';

import { Header } from 'app/crmBusinessesDetails/header/Header';

import { Contacts } from './Contacts';
import { ContactsContainerProps } from './Contacts.types';

export const ContactsContainer = ({ onSidebarOpen, isSidebarVisible }: ContactsContainerProps) => {
  const handleSave = async (input: unknown) => {
    return undefined;
  };

  return (
    <>
      <Header onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Contacts onSave={handleSave} />
    </>
  );
};
