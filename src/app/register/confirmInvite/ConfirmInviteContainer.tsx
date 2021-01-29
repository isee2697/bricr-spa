import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useQueryParam } from 'use-query-params';
import { useHistory } from 'react-router-dom';

import { useConfirmProfileInviteMutation } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { ConfirmInviteData } from './ConfirmInvite.types';
import { ConfirmInvite } from './ConfirmInvite';

export const ConfirmInviteContainer = () => {
  const { state } = useLocation();
  const { push } = useHistory();
  const [email] = useQueryParam<{ email: string }>('email');
  const [error, setError] = useState();
  const [confirm] = useConfirmProfileInviteMutation();

  const emailValue = state?.email || email;

  if (!emailValue) {
    push(AppRoute.login);
  }

  const handleSubmit = async (data: ConfirmInviteData) => {
    try {
      const response = await confirm({
        variables: {
          input: {
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            email: emailValue || data.email,
          },
        },
      });

      if (response && response.data) {
        push(AppRoute.verify, { email: emailValue, name: data.firstName, skipSetup: true });
      }
    } catch (e) {
      setError('register.error.failed_to_confirm_user');
    }
  };

  return <ConfirmInvite onSubmit={handleSubmit} error={error} />;
};

export default ConfirmInviteContainer;
