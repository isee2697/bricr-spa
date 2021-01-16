import React from 'react';

import { useLocale } from 'hooks';
import { Page } from 'ui/templates';

import { DocumentName } from './documentName/DocumentName';
import { DocumentDetails } from './documentDetails/DocumentDetails';
import { DocumentRights } from './documentRights/DocumentRights';

export const DocumentSecurity = () => {
  const { formatMessage } = useLocale();

  return (
    <Page title={formatMessage({ id: 'pim_details.documents.contracts.security.questionnaire' })}>
      <DocumentName />
      <DocumentDetails />
      <DocumentRights />
    </Page>
  );
};
