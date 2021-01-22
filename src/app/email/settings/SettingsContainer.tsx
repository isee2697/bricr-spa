import React, { useEffect } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

import { useGetNylasAuthUrlLazyQuery, useAuthorizeNylasAccountWithTokenMutation } from 'api/types';
import { AddNewInboxBody } from '../addNewInboxModal/AddNewInboxModal.types';
import { useAuthState } from 'hooks';

import { EmailSettings } from './Settings';
import { EmailSettingsContainerProps } from './Settings.types';

export const EmailSettingsContainer = ({ onAddedNewAccount, ...props }: EmailSettingsContainerProps) => {
  const [getNylasAuthUrl, { data: nylasAuthUrl }] = useGetNylasAuthUrlLazyQuery();
  const [addNylasAccount] = useAuthorizeNylasAccountWithTokenMutation();
  const [nylasAuthCode] = useQueryParam('code', StringParam);
  const { accessToken } = useAuthState();

  useEffect(() => {
    const addNewNylasAccount = async () => {
      try {
        if (nylasAuthCode) {
          const account = await addNylasAccount({ variables: { nylasToken: nylasAuthCode, isEmailConnected: true } });

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

  const handleAddNewInbox = async (values: AddNewInboxBody) => {
    const options = {
      loginHint: values.mainEmailAddress,
      redirectURI: window.location.href.split('?')[0],
      scopes: ['email.modify', 'email.send', 'calendar', 'contacts'],
    };

    getNylasAuthUrl({
      variables: {
        input: options,
      },
    });

    return undefined;
  };

  return <EmailSettings {...props} onAddNewInbox={handleAddNewInbox} />;
};
