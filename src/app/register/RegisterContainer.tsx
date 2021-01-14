import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryParam } from 'use-query-params';

import { useClaimSpaceHook } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';
import { useCheckCompanyRegisteredQuery, useCreateCompanyMutation, BricrPlans, CreateCompanyInput } from 'api/types';
import { Loader } from 'ui/atoms';
import { HandleCreateCompanyInput } from 'app/register/forms/RegisterForm.types';

import { RegisterForm } from './forms/RegisterForm';

export const RegisterContainer = () => {
  const { isClaimed, spaceName, updateClaimSpace, suggestions } = useClaimSpaceHook();
  const [preferredPlan] = useQueryParam<string>('preferred_license');
  const [amountUsers] = useQueryParam<number>('preferred_users');
  const [amountProperties] = useQueryParam<number>('preferred_properties');
  const plan = (Object.keys(BricrPlans).find(item => item.toLowerCase() === preferredPlan) ??
    BricrPlans.Professional) as BricrPlans;

  const [formData, setFormData] = useState<CreateCompanyInput>({
    name: '',
    space: '',
    email: '',
    password: '',
    plan,
    amountUsers: Number(amountUsers),
    amountProperties: Number(amountProperties),
  });
  const { push } = useHistory();
  const [createCompany] = useCreateCompanyMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const { data: checkData } = useCheckCompanyRegisteredQuery({
    variables: { name: spaceName ?? '' },
    skip: !spaceName,
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    const newSuggestions = checkData && checkData.checkCompanyRegistered.suggestions;

    if (!!newSuggestions && newSuggestions !== suggestions) {
      updateClaimSpace({
        isCheckingSpaceName: false,
        isClaimed: !!checkData?.checkCompanyRegistered?.taken,
        suggestions: newSuggestions,
        spaceName,
      });
    }
  }, [checkData, spaceName, suggestions, updateClaimSpace]);

  const checkSpaceAvailable = async (space: string) => {
    const updated = {
      isCheckingSpaceName: true,
      isClaimed: undefined,
      spaceName: space,
    };
    updateClaimSpace(updated);

    return undefined;
  };

  const handleSave = async (input: HandleCreateCompanyInput) => {
    setLoading(true);
    delete input.repeat_password;

    try {
      const { data: result } = await createCompany({
        variables: {
          input: {
            ...(input as CreateCompanyInput),
            space: spaceName ?? '',
          },
        },
      });

      if (!result || !result.createCompany) {
        setLoading(false);
        throw new Error('Could not create company.');
      } else if (input.name && input.email && spaceName) {
        setLoading(false);
        push(AppRoute.verify, { email: input.email, name: input.name });
      }

      return undefined;
    } catch (e) {
      setLoading(false);
      const message = e.message?.replace('GraphQL error: ', '');

      if (message.includes('"suggestions"') && message.includes('"taken":true')) {
        const json = JSON.parse(message);
        setFormData(old => ({ ...old, ...input }));

        updateClaimSpace({
          isCheckingSpaceName: false,
          isClaimed: json.taken,
          suggestions: json.suggestions,
          spaceName,
        });

        return undefined;
      } else {
        setError(message);
      }

      return { error: true };
    }
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
      data={formData}
      error={error}
    />
  );
};
