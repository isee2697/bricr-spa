import React, { useEffect } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

import { useGetNylasAuthUrlLazyQuery } from 'api/types';
import { AddNewInboxBody } from '../addNewInboxModal/AddNewInboxModal.types';
import { useAuthState } from 'hooks';

import { EmailSettings } from './Settings';
import { EmailSettingsContainerProps } from './Settings.types';

export const EmailSettingsContainer = ({ onAddedNewAccount, ...props }: EmailSettingsContainerProps) => {
  const [getNylasAuthUrl, { data: nylasAuthUrl }] = useGetNylasAuthUrlLazyQuery();
  const [nylasAuthCode] = useQueryParam('code', StringParam);
  const { accessToken } = useAuthState();

  useEffect(() => {
    const addNylasAccount = async () => {
      if (nylasAuthCode) {
        const response = await fetch(`${process.env.REACT_APP_FILE_URL}/nylas-addaccount`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
          },
          body: JSON.stringify({
            nylasToken: nylasAuthCode,
            token: accessToken,
            isEmailConnected: true,
          }),
        });

        if (response.ok) {
          const { account } = await response.json();

          if (account) {
            window.location.href = window.location.href.split('?')[0];
          }
        }
      }
    };

    if (nylasAuthCode) {
      addNylasAccount();
    }
  }, [accessToken, nylasAuthCode]);

  if (nylasAuthUrl?.getNylasAuthUrl) {
    window.open(nylasAuthUrl.getNylasAuthUrl, '_self');
  }

  const handleAddNewInbox = async (values: AddNewInboxBody) => {
    const options = {
      loginHint: values.mainEmailAddress,
      redirectURI: window.location.href,
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
