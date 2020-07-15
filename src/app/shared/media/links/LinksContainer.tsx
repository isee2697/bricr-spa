import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { LinksContainerProps } from 'app/shared/media/links/Links.types';
import {
  LabelProperty,
  MediaLinkType,
  PimMediaDocument,
  NcpMediaDocument,
  UpdateMediaLinkInput,
  UpdateNcpMediaLinkInput,
  useAddMediaLinkMutation,
  useAddNcpMediaLinkMutation,
  useUpdateMediaLinkMutation,
  useUpdateNcpMediaLinkMutation,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';
import { useCustomLabels } from 'hooks/useCustomLabels';
import { useEntityType, EntityType } from 'app/shared/entityType';

import { Links } from './Links';

const options = Object.values(MediaLinkType).map(tagName => ({
  label: `dictionaries.media.link.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const LinksContainer = ({ links, onAddCustomType }: LinksContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const entityType = useEntityType();

  const [newLinkId, setNewLinkId] = useState<string | undefined>();
  const customLabels = useCustomLabels(id, [LabelProperty.MediaLink], entityType)[LabelProperty.MediaLink] ?? [];

  const [addMediaLink] = useAddMediaLinkMutation();
  const [addNcpMediaLink] = useAddNcpMediaLinkMutation();
  const [editMediaLink] = useUpdateMediaLinkMutation();
  const [editNcpMediaLink] = useUpdateNcpMediaLinkMutation();

  const handleAdd = async () => {
    try {
      if (!id) {
        throw new Error();
      }

      if (entityType === EntityType.Property) {
        const { data } = await addMediaLink({
          variables: {
            input: { pimId: id },
          },
          refetchQueries: [
            {
              query: PimMediaDocument,
              variables: { id },
            },
          ],
        });

        setNewLinkId(data?.addMediaLink?.newMediaLink?.id ?? undefined);
      }

      if (entityType === EntityType.Project) {
        const { data } = await addNcpMediaLink({
          variables: {
            input: { parentId: id },
          },
          refetchQueries: [
            {
              query: NcpMediaDocument,
              variables: { id },
            },
          ],
        });

        const links = data?.addNcpMediaLink?.mediaLinks;

        if (links?.length) {
          setNewLinkId(links[links.length - 1].id);
        }
      }

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const handleSave = async (values: UpdateMediaLinkInput | UpdateNcpMediaLinkInput) => {
    try {
      if (!id) {
        throw new Error();
      }

      if (entityType === EntityType.Property) {
        await editMediaLink({
          variables: {
            input: { ...values, pimId: id },
          },
          refetchQueries: [
            {
              query: PimMediaDocument,
              variables: { id },
            },
          ],
        });
      }

      if (entityType === EntityType.Project) {
        await editNcpMediaLink({
          variables: {
            input: { ...values, parentId: id },
          },
          refetchQueries: [
            {
              query: NcpMediaDocument,
              variables: { id },
            },
          ],
        });
      }

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
