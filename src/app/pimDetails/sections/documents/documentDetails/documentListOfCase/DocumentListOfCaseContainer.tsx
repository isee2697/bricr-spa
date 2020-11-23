import React from 'react';
import { useParams } from 'react-router-dom';

import { NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { PIM_DOCUMENT_LISTOFCASE } from 'api/mocks/pim';

import { DocumentListOfCase } from './DocumentListOfCase';

export const DocumentListOfCaseContainer = () => {
  const { id: pimId, kind, docId } = useParams<{ id: string; kind: string; docId: string }>();
  const { formatMessage } = useLocale();

  const loading = false;
  const error = undefined;
  const data = PIM_DOCUMENT_LISTOFCASE;

  const pathname = AppRoute.pimDocumentDetails
    .replace(':id', pimId)
    .replace(':kind', kind)
    .replace(':docId', docId);

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: `header.links.${kind}_list` })} to={pathname} />
      <NavBreadcrumb title={data?.name} urlBase={''} />
    </>
  );

  return <DocumentListOfCase loading={loading} error={error} pimId={pimId} data={data} breadcrumbs={breadcrumbs} />;
};
