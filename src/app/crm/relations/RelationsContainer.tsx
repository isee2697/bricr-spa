import React, { useState } from 'react';

import {
  CrmStatus,
  useCrmListQuery,
  useUpdateCrmGeneralMutation,
  CrmListDocument,
  ListPimsFilters,
  PropertyType,
} from 'api/types';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CrmItem } from '../Crm.types';

import { RelationsContainerProps } from './Relations.types';
import { Relations } from './Relations';

export const RelationsContainer = (props: RelationsContainerProps) => {
  const { data } = useCrmListQuery();
  const [updateCrmGeneral] = useUpdateCrmGeneralMutation();
  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({
    propertyTypes: [PropertyType.Apartment, PropertyType.House],
  });

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

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  return (
    <Relations
      {...props}
      crms={crms}
      onUpdateItemStatus={hanldeUpdateCrmStatus}
      onDeleteItem={handleDeleteCrm}
      activeFilters={activeFilters}
      onFilter={handleFilterChange}
    />
  );
};
