import React from 'react';
import { useParams } from 'react-router-dom';

import { usePimMediaQuery } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { Media } from './Media';

export const MediaContainer = (props: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePimMediaQuery({ variables: { id } });

  if (data) return <Media {...props} media={data.getPimMedia} />;

  return null;
};
