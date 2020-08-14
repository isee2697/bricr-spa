import React from 'react';
import { useParams } from 'react-router';

import { usePimAogSpacesQuery } from 'api/types';

import { AogSpaces } from './AogSpaces';
import { AogSpacesContainerProps } from './AogSpaces.types';

export const AogSpacesContainer = ({ isSidebarVisible, onSidebarOpen, type }: AogSpacesContainerProps) => {
  const { id } = useParams<{ id: string; spaceId: string }>();

  const { data } = usePimAogSpacesQuery({ variables: { id } });

  if (!data) {
    return null;
  }

  return (
    <AogSpaces data={data.getPimInside} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} type={type} />
  );
};
