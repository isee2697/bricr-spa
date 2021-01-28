import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useResetPasswordMutation } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { ResetPassword } from './ResetPassword';
import { ResetPasswordFormValues } from './ResetPassword.types';

export const ResetPasswordContainer = () => {
  const [forgotPassword] = useResetPasswordMutation();
  const { token } = useParams<{ token: string }>();
  const { push } = useHistory();

  const onSubmit = useCallback(
    async (body: ResetPasswordFormValues): Promise<boolean> => {
      try {
        const { errors, data } = await forgotPassword({
          variables: {
            input: {
              password: body.password,
              code: token,
              username: body.email,
            },
          },
        });

        if (errors || data?.resetPassword === null) {
          throw new Error();
        }

        push(AppRoute.login);

        return true;
      } catch (error) {
        return false;
      }
    },
    [forgotPassword, push, token],
  );

  return <ResetPassword onSubmit={onSubmit} />;
};

export default ResetPasswordContainer;
