import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useQueryParam } from 'use-query-params';
import { useHistory } from 'react-router-dom';

import { VerifyData } from 'app/register/verify/Verify.types';
import { useVerifyUserMutation } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { VerifyUser } from './VerifyUser';

export const VerifyUserContainer = () => {
  const { state } = useLocation();
  const { push } = useHistory();
  const [email] = useQueryParam<{ email: string }>('email');
  const [name] = useQueryParam<{ name: string }>('name');
  const [skipSetupParam] = useQueryParam<{ skipSetup: boolean }>('skipSetup');
  const [error, setError] = useState();
  const [verifyUser] = useVerifyUserMutation();

  const emailValue = state?.email || email;
  const nameValue = state?.name || name;
  const skipSetup = state?.skipSetup || skipSetupParam;
  const handleSubmit = async (data: VerifyData) => {
    try {
      const verified = await verifyUser({
        variables: {
          input: {
            code: data.code,
            username: emailValue || data.email,
          },
        },
      });

      if (verified && verified.data === 'verified') {
        skipSetup ? push(AppRoute.login) : push(AppRoute.setup, { email: emailValue, name: nameValue });
      }
    } catch (e) {
      let message = 'register.error.failed_to_verify';

      if (e.code === 'CodeMismatchException') {
        message = 'register.error.invalid_token';
      }

      setError(message);
    }
  };

  return <VerifyUser email={emailValue} name={nameValue} onSubmit={handleSubmit} error={error} />;
};
