import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { PimMediaDocument, TagType, UpdateTagInput, useAddTagMutation, useUpdateTagMutation } from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';
import { TagsContainerProps } from 'app/pimDetails/sections/media/tags/Tags.types';

import { Tags } from './Tags';

const options = Object.values(TagType).map(tagName => ({
  label: `dictionaries.media.tag.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const TagsContainer = ({ tags }: TagsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addTag] = useAddTagMutation();
  const [editTag] = useUpdateTagMutation();
  const [newTagId, setNewTagId] = useState<string | null>(null);

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

      setNewTagId(data?.addTag?.newTag.id ?? null);

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

  return <Tags onSave={handleSave} options={options} onAdd={handleAdd} tags={tags ?? []} newTagId={newTagId} />;
};
