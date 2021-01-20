import React from 'react';

import { CrmStatus, useCrmListQuery, useUpdateCrmGeneralMutation, CrmListDocument } from 'api/types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CrmItem } from '../Crm.types';

import { RelationsContainerProps } from './Relations.types';
import { Relations } from './Relations';

export const RelationsContainer = (props: RelationsContainerProps) => {
  const { data } = useCrmListQuery();
  const [updateCrmGeneral] = useUpdateCrmGeneralMutation();

  const crms: CrmItem[] = (data?.crmList || []).map(crm => ({
    ...mockCrm,
    ...crm,
    status: crm.status || CrmStatus.ActionRequired,
  }));

  const hanldeUpdateCrmStatus = async (id: string, status: CrmStatus) => {
    await updateCrmGeneral({
      variables: {
        input: {
          id,
          status,
        },
      },
      refetchQueries: [
        {
          query: CrmListDocument,
        },
      ],
    });
  };

  const handleDeleteCrm = async (id: string) => {};

  return <Relations {...props} crms={crms} onUpdateItemStatus={hanldeUpdateCrmStatus} onDeleteItem={handleDeleteCrm} />;
};
