import React from 'react';
import { useParams } from 'react-router-dom';

import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { CRM_DOCUMENT_DETAIL } from 'api/mocks/crm-relation';

import { DocumentDetails } from './DocumentDetails';
import { DocumentDetailsContainerProps, DocumentDetailsType } from './DocumentDetails.types';

export const DocumentDetailsContainer = ({ path, ...props }: DocumentDetailsContainerProps) => {
  const params = useParams<{ id: string; docId: string }>();
  const { formatMessage } = useLocale();

  const data: DocumentDetailsType = CRM_DOCUMENT_DETAIL;

  const breadcrumbs = (
    <NavBreadcrumb
      title={formatMessage({ id: 'crm.details.document_details' })}
      to={`${path.replace(':id', params.id)}/documents`}
    />
  );

  return (
    <DocumentDetails
      breadcrumbs={breadcrumbs}
      data={data}
      path={`${path.replace(':id', params.id)}/documents/folders`}
      {...props}
    />
  );
};

export default DocumentDetailsContainer;
