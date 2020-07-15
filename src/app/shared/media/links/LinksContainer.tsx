import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { LinksContainerProps } from 'app/shared/media/links/Links.types';
import {
  LabelProperty,
  MediaLinkType,
  PimMediaDocument,
  UpdateMediaLinkInput,
  useAddMediaLinkMutation,
  useUpdateMediaLinkMutation,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';
import { useCustomLabels } from 'hooks/useCustomLabels';

import { Links } from './Links';

const options = Object.values(MediaLinkType).map(tagName => ({
  label: `dictionaries.media.link.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const LinksContainer = ({ links, onAddCustomType }: LinksContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [newLinkId, setNewLinkId] = useState<string | undefined>();
  const customLabels = useCustomLabels(id, [LabelProperty.MediaLink])[LabelProperty.MediaLink] ?? [];

  // TODO: change data based on type while integration
  const [addMediaLink] = useAddMediaLinkMutation();
  const [editMediaLink] = useUpdateMediaLinkMutation();

  const handleAdd = async () => {
    try {
      if (!id) {
        throw new Error();
      }

      const { data } = await addMediaLink({
        variables: {
          input: {
            pimId: id,
          },
        },
        refetchQueries: [
          {
            query: PimMediaDocument,
            variables: {
              id: id,
            },
          },
        ],
      });

      setNewLinkId(data?.addMediaLink?.newMediaLink?.id ?? undefined);

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const handleSave = async (values: UpdateMediaLinkInput) => {
    try {
      if (!id) {
        throw new Error();
      }

      await editMediaLink({
        variables: {
          input: {
            pimId: id,
            ...values,
          },
        },
        refetchQueries: [
          {
            query: PimMediaDocument,
            variables: {
              id: id,
            },
          },
        ],
      });

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  return (
    <Links
      links={links ?? []}
      onSave={handleSave}
      options={[...options, ...customLabels]}
      onAdd={handleAdd}
      newLinkId={newLinkId}
      onAddCustomType={onAddCustomType}
    />
  );
};