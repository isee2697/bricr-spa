import React from 'react';
import { useParams } from 'react-router-dom';
import { GetUserProfileDocument, PhoneNumber, useUpdatePhoneNumberMutation } from 'api/types';

import { PhoneNumbers } from './PhoneNumbers';

export const PhoneNumbersContainer = ({ data }: { data: PhoneNumber[] }) => {
  const { id: profileId } = useParams<{ id: string }>();
  const [updateMail] = useUpdatePhoneNumberMutation();
  const items = data.map(item => ({ ...item, name: item.phoneNumber }));

  const handleSave = async (data: PhoneNumber & { name: string }) => {
    try {
      delete data?.name;

      const response = updateMail({
        variables: {
          input: {
            profileId,
            ...data,
          },
        },
        refetchQueries: [
          {
            query: GetUserProfileDocument,
            variables: { id: profileId },
          },
        ],
      });

      if (!response) {
        throw Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return <PhoneNumbers onSave={handleSave} data={items} />;
};
