import React from 'react';
import { useParams } from 'react-router-dom';

import { usePimSpecificationQuery, LinkedPim } from 'api/types';

import { LinkedProperty } from './LinkedProperty';

export const LinkedPropertyContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePimSpecificationQuery({ variables: { id } });

  if (!data?.getPimSpecification.linkedProperties) {
    return null;
  }

  return <LinkedProperty properties={data?.getPimSpecification.linkedProperties as LinkedPim[]} />;
};
