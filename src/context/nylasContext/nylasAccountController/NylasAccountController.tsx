import React, { useEffect } from 'react';

import { Loader } from 'ui/atoms/loader/Loader';
import { useNylasAccountDispatch, useNylasAccountState } from 'hooks';
import { setNylasAccounts } from '../nylasAccountActionCreator/nylasAccountActionCreators';
import { useListNylasAccountQuery } from 'api/types';

import { NylasAccountControllerProps } from './NylasAccountController.types';

export const NylasAccountController = ({ children }: NylasAccountControllerProps) => {
  const dispatch = useNylasAccountDispatch();
  const { accounts } = useNylasAccountState();

  const { loading, data, error } = useListNylasAccountQuery({
    variables: { isCalendarConnected: true },
    skip: !!accounts.length,
  });

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!error && data && data.listNylasAccount) {
      return dispatch(setNylasAccounts(data.listNylasAccount));
    }

    return dispatch(setNylasAccounts([]));
  }, [dispatch, error, data, loading]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};
