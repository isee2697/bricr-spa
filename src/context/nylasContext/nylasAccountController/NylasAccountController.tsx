import React from 'react';

import { useAuthState, useNylasAccountDispatch } from 'hooks';
import { setNylasAccounts } from '../nylasAccountActionCreator/nylasAccountActionCreators';
import { useListNylasAccountQuery } from 'api/types';

import { NylasAccountControllerProps } from './NylasAccountController.types';

export const NylasAccountController = ({ children }: NylasAccountControllerProps) => {
  const { user } = useAuthState();
  const { data } = useListNylasAccountQuery({
    fetchPolicy: 'no-cache',
    skip: !user,
  });

  const dispatch = useNylasAccountDispatch();

  if (data?.listNylasAccount) {
    dispatch(setNylasAccounts(data.listNylasAccount));
  } else {
    dispatch(setNylasAccounts([]));
  }

  return <>{children}</>;
};
