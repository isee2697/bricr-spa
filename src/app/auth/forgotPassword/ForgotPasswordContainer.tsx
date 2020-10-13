import React, { useCallback } from 'react';
import { useForgotPasswordMutation, ForgotPasswordInput } from 'api/types';

import { ForgotPassword } from './ForgotPassword';

export const ForgotPasswordContainer = () => {
  const [forgotPassword] = useForgotPasswordMutation();

  const onSubmit = useCallback(
    async (body: ForgotPasswordInput): Promise<boolean> => {
      try {
        const { errors } = await forgotPassword({
          variables: {
            input: body,
          },
        });

        if (errors) {
          throw new Error();
        }

        return true;
      } catch {
        return false;
      }
    },
    [forgotPassword],
  );

  return <ForgotPassword onSubmit={onSubmit} />;
};
