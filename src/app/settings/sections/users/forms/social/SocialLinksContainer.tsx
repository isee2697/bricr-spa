import React from 'react';
import { useParams } from 'react-router-dom';

import { GetUserProfileDocument, SocialMediaLink, useUpdateSocialMediaLinkMutation } from 'api/types';

import { SocialLinks } from './SocialLinks';

export const SocialLinksContainer = ({ data }: { data: SocialMediaLink[] }) => {
  const { id: profileId } = useParams<{ id: string }>();
  const [updateSocial] = useUpdateSocialMediaLinkMutation();
  const items = data.map(item => ({
    ...item,
    name: item.socialMediaLinkType ? `${item.socialMediaLinkType} ${item.socialMediaLink}` : item.socialMediaLink,
  }));

  const handleSave = async (data: SocialMediaLink & { name: string }) => {
    try {
      delete data?.name;
      const response = updateSocial({
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

  return <SocialLinks onSave={handleSave} data={items} />;
};
