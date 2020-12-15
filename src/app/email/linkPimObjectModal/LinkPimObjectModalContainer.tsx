import React from 'react';

import { Pim, SortDirection, useListPimsQuery } from 'api/types';

import { LinkPimObjectModal } from './LinkPimObjectModal';
import { LinkPimObjectModalContainerProps } from './LinkPimObjectModal.types';

export const LinkPimObjectModalContainer = (props: LinkPimObjectModalContainerProps) => {
  const { loading, data } = useListPimsQuery({
    variables: {
      from: 0,
      limit: undefined,
      sortColumn: 'dateCreated',
      sortDirection: SortDirection.Asc,
      archived: false,
    },
    fetchPolicy: 'no-cache',
  });

  return <LinkPimObjectModal {...props} pims={(data?.listPims.items ?? []) as Pim[]} loading={loading} />;
};
