import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  LabelProperty,
  PimMediaDocument,
  TagType,
  UpdateTagInput,
  useAddTagMutation,
  useUpdateTagMutation,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';
import { TagsContainerProps } from 'app/shared/media/tags/Tags.types';
import { useCustomLabels } from 'hooks/useCustomLabels';

import { Tags } from './Tags';

const options = Object.values(TagType).map(tagName => ({
  label: `dictionaries.media.tag.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const TagsContainer = ({ tags, onAddCustomType }: TagsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [newTagId, setNewTagId] = useState<string | undefined>();
  const customLabels = useCustomLabels(id, [LabelProperty.Tag])[LabelProperty.Tag] ?? [];

  // TODO: change data based on type while integration
  const [addTag] = useAddTagMutation();
  const [editTag] = useUpdateTagMutation();

  const handleAdd = async () => {
    try {
      if (!id) {
        throw new Error();
      }

      const { data } = await addTag({
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

      setNewTagId(data?.addTag?.newTag.id ?? undefined);

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const handleSave = async (values: UpdateTagInput) => {
    try {
      if (!id) {
        throw new Error();
      }

      await editTag({
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
    <Tags
      onSave={handleSave}
      options={[...options, ...customLabels]}
      onAdd={handleAdd}
      tags={tags ?? []}
      newTagId={newTagId}
      onAddCustomType={onAddCustomType}
    />
  );
};
