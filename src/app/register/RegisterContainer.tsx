import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useClaimSpaceHook } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { useCreateCompanyMutation } from 'api/types';
import { Loader } from 'ui/atoms';

import { RegisterForm } from './forms/RegisterForm';
import { RegisterFormFields } from './forms/RegisterForm.types';

export const RegisterContainer = () => {
  const { isClaimed, spaceName, updateClaimSpace } = useClaimSpaceHook();
  const [timeout, setNewTimeout] = useState<NodeJS.Timeout>();
  const { push } = useHistory();
  const [createCompany] = useCreateCompanyMutation();
  const [loading, setLoading] = useState<boolean>(false);

  const checkSpaceAvailable = async (space: string) => {
    const updated = {
      isCheckingSpaceName: true,
      isClaimed: undefined,
      spaceName: space,
    };
    updateClaimSpace(updated);

    if (timeout) {
      clearTimeout(timeout);
    }

    setNewTimeout(
      setTimeout(() => {
        updateClaimSpace({
          ...updated,
          isCheckingSpaceName: false,
          isClaimed: space.length === 0 ? undefined : space === 'hendriks',
          suggestions: space === 'hendriks' ? ['nl_hendriks', 'hendriks_nl', 'hendriks_realestate'] : undefined,
        });
      }, 1500),
    );

    return undefined;
  };

  const handleSave = async ({ name, email }: RegisterFormFields) => {
    setLoading(true);
    const { data: result } = await createCompany({
      variables: {
        input: {
          name: spaceName ?? '',
          email,
        },
      },
    });

    if (!result || !result.createCompany) {
      setLoading(false);
      throw new Error('Could not create company.');
    } else if (name && email && spaceName) {
      setLoading(false);
      push(`${AppRoute.setup}/?name=${name}`);
    }

    return undefined;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <RegisterForm
      isSubmitEnabled={isClaimed !== undefined && !isClaimed}
      checkSpaceAvailable={checkSpaceAvailable}
      onSubmit={handleSave}
      spaceName={spaceName}
    />
  );
};
