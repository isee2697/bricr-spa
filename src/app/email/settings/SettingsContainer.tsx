import React, { useEffect, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

import { NylasAccountAuthOptions, useAuthorizeNylasAccountWithTokenMutation, useGetNylasAuthUrlQuery } from 'api/types';
import { AddNewInboxBody } from '../addNewInboxModal/AddNewInboxModal.types';
import { useAuthState } from 'hooks';

import { EmailSettings } from './Settings';
import { EmailSettingsContainerProps } from './Settings.types';

export const EmailSettingsContainer = ({ ...props }: EmailSettingsContainerProps) => {
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
    setOptions(options);

    return undefined;
  };

  return <EmailSettings {...props} onAddNewInbox={handleAddNewInbox} />;
};
