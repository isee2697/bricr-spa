import React from 'react';
import { useParams } from 'react-router-dom';
import { EmailAddress, GetUserProfileDocument, useUpdateEmailAddressMutation } from 'api/types';

import { EmailAddresses } from './EmailAddresses';

export const EmailAddressesContainer = ({ data }: { data: EmailAddress[] }) => {
  const { id: profileId } = useParams<{ id: string }>();
  const [updateMail] = useUpdateEmailAddressMutation();
  const items = data.map(mail => ({ ...mail, name: mail.emailAddress }));

  const handleSave = async (data: EmailAddress & { name: string }) => {
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

  return <EmailAddresses onSave={handleSave} data={items} />;
};
