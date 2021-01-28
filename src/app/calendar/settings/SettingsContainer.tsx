import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

import { NylasAccountAuthOptions, useAuthorizeNylasAccountWithTokenMutation, useGetNylasAuthUrlQuery } from 'api/types';
import { useAuthState } from 'hooks';

import { AddNewAccountBody } from './addNewAccountModal/AddNewAccountModal.types';
import { CalendarSettings } from './Settings';
import { CalendarSettingsContainerProps } from './Settings.types';

export const CalendarSettingsContainer = (props: CalendarSettingsContainerProps) => {
  const { user } = useAuthState();
  const [opt, setOptions] = useState<NylasAccountAuthOptions>();
  const { data: nylasAuthUrl } = useGetNylasAuthUrlQuery({
    skip: !user || !opt,
    variables: {
      input: opt || { loginHint: '' },
    },
  });

  const [addNylasAccount] = useAuthorizeNylasAccountWithTokenMutation();
  const [nylasAuthCode] = useQueryParam('code', StringParam);
  const { accessToken } = useAuthState();

  useEffect(() => {
    const addNewNylasAccount = async () => {
      try {
        if (nylasAuthCode) {
          const account = await addNylasAccount({
            variables: {
              input: { nylasToken: nylasAuthCode, isCalendarConnected: true },
            },
          });

          if (account) {
            window.location.href = window.location.href.split('?')[0];
          }
        }
      } catch (error) {}
    };

    addNewNylasAccount();
  }, [accessToken, addNylasAccount, nylasAuthCode]);

  if (nylasAuthUrl?.getNylasAuthUrl) {
    window.open(nylasAuthUrl.getNylasAuthUrl, '_self');
  }

  const handleAddNewAccount = async (values: AddNewAccountBody) => {
    const options = {
      loginHint: values.email,
      redirectURI: window.location.href.split('?')[0],
      scopes: ['email.modify', 'email.send', 'calendar', 'contacts'],
    };
    setOptions(options);

    return undefined;
  };

  return <CalendarSettings {...props} onAddNewAccount={handleAddNewAccount} />;
};
