import React from 'react';
import { default as IntercomApp } from 'react-intercom';

import { useAuthState } from 'hooks';

export const Intercom = () => {
  const { user } = useAuthState();
  const { REACT_APP_INTERCOM_ID: appID } = process.env;

  if (appID) {
    const intercomUser = user && {
      userId: user.id,
      email: user.email,
      name: user.firstName,
    };

    return <IntercomApp appID={appID} {...intercomUser} />;
  } else {
    return <></>;
  }
};
