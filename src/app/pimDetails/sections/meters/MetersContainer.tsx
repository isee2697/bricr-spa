import React from 'react';
import { useParams } from 'react-router-dom';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimMeters, usePimMetersQuery } from 'api/types';

import { Meters } from './Meters';

export const MetersContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePimMetersQuery({ variables: { id } });

  if (!data || !data.getPimServices) {
    return null;
  }

  return (
    <Meters
      data={data?.getPimServices as PimMeters}
      title={title}
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
    />
  );
};
