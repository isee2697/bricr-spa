import React from 'react';

import { useClaimSpaceHook } from '../../hooks/useClaimSpaceHook/useClaimSpaceHook';

import { RegisterForm } from './forms/RegisterForm';
import { RegisterFormFields } from './forms/RegisterForm.types';

export const RegisterContainer = () => {
  const { isClaimed, updateClaimSpace } = useClaimSpaceHook();
  // @ToDo implement logics

  const checkSpaceAvailable = async (space: string) => {
    if (space.length > 4) {
      await setTimeout(() => {
        updateClaimSpace({
          isClaimed: true,
          spaceName: space,
        });
      }, 500);
    }

    return undefined;
  };

  const handleSave = async ({ name, email, space }: RegisterFormFields) => {
    return undefined;
  };

  return (
    <RegisterForm
      isSubmitEnabled={isClaimed !== undefined && !isClaimed}
      checkSpaceAvailable={checkSpaceAvailable}
      onSubmit={handleSave}
    />
  );
};
