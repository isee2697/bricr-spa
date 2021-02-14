import React from 'react';
import { useParams } from 'react-router-dom';

import { useListMatchProfilesQuery } from 'api/types';

import { MatchProfileList } from './List';
import { ListContainerProps } from './List.types';

export const MatchProfileListContainer = (props: ListContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useListMatchProfilesQuery({ variables: { crmId: id } });

  return <MatchProfileList {...props} matchProfiles={data?.listMatchProfiles || []} />;
};
