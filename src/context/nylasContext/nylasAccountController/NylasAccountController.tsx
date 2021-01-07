import React, { useEffect } from 'react';

import { useAuthState, useNylasAccountDispatch } from 'hooks';
import {
  setNylasCalendarAccounts,
  setNylasEmailAccounts,
} from '../nylasAccountActionCreator/nylasAccountActionCreators';

import { NylasAccountControllerProps } from './NylasAccountController.types';

export const NylasAccountController = ({ children }: NylasAccountControllerProps) => {
  const { user, accessToken } = useAuthState();
  const dispatch = useNylasAccountDispatch();

  useEffect(() => {
    const getNylasAccounts = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_FILE_URL}/nylas-account-list?accountId=${user?.id}&isCalendarConnected=true`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + accessToken,
            },
          },
        );

        if (response.ok) {
          const accounts = await response.json();
          dispatch(setNylasCalendarAccounts(accounts));
        } else {
          throw new Error('Error returned while getting nylas calendar account list');
        }
      } catch (e) {
        dispatch(setNylasCalendarAccounts([]));
      }

      try {
        const response = await fetch(
          `${process.env.REACT_APP_FILE_URL}/nylas-account-list?accountId=${user?.id}&isEmailConnected=true`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + accessToken,
            },
          },
        );

        if (response.ok) {
          const accounts = await response.json();
          dispatch(setNylasEmailAccounts(accounts));
        } else {
          throw new Error('Error returned while getting nylas email account list');
        }
      } catch (e) {
        dispatch(setNylasEmailAccounts([]));
      }
    };

    if (user) {
      getNylasAccounts();
    }
  }, [dispatch, user, accessToken]);

  return <>{children}</>;
};
