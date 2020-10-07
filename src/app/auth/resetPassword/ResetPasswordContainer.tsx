import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useResetPasswordMutation } from 'api/types';

import { ResetPassword } from './ResetPassword';
import { ResetPasswordFormValues } from './ResetPassword.types';

export const ResetPasswordContainer = () => {
  const [forgotPassword] = useResetPasswordMutation();
  const { token } = useParams<{ token: string }>();

  const onSubmit = useCallback(
    async (body: ResetPasswordFormValues): Promise<boolean> => {
      try {
        const { errors, data } = await forgotPassword({
          variables: {
            input: {
              newPassword: body.password,
            },
            token,
          },
        });

        if (errors || data?.resetPassword === null) {
          throw new Error();
        }

        return true;
      } catch (error) {
        return false;
      }
    },
    [forgotPassword, token],
  );

  return <ResetPassword onSubmit={onSubmit} />;
};
