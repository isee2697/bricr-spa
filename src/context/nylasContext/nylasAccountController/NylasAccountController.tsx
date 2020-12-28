import React, { useEffect } from 'react';

import { Loader } from 'ui/atoms/loader/Loader';
import { useAuthState, useNylasAccountDispatch } from 'hooks';
import { setNylasAccounts } from '../nylasAccountActionCreator/nylasAccountActionCreators';
import { useListNylasAccountQuery } from 'api/types';

import { NylasAccountControllerProps } from './NylasAccountController.types';

export const NylasAccountController = ({ children }: NylasAccountControllerProps) => {
  const { user, accessToken } = useAuthState();
  const dispatch = useNylasAccountDispatch();

  const { loading, data } = useListNylasAccountQuery({
    variables: { isCalendarConnected: true },
  });

  useEffect(() => {
    if (user && !loading && data?.listNylasAccount) {
      dispatch(setNylasAccounts(data.listNylasAccount));
    }
  }, [dispatch, data, loading, user, accessToken]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};
