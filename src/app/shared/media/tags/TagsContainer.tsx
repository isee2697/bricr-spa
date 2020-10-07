import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  LabelProperty,
  PimMediaDocument,
  NcpMediaDocument,
  ObjectTypeMediaDocument,
  TagType,
  UpdateTagInput,
  useAddTagMutation,
  useAddNcpTagMutation,
  useAddObjectTypeTagMutation,
  useUpdateTagMutation,
  useUpdateNcpTagMutation,
  useUpdateObjectTypeTagMutation,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';
import { TagsContainerProps } from 'app/shared/media/tags/Tags.types';
import { useCustomLabels } from 'hooks/useCustomLabels';
import { useEntityType, EntityType } from 'app/shared/entityType';

import { Tags } from './Tags';

const options = Object.values(TagType).map(tagName => ({
  label: `dictionaries.media.tag.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const TagsContainer = ({ tags, onAddCustomType }: TagsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { entityType } = useEntityType();

  const [newTagId, setNewTagId] = useState<string | undefined>();
  const customLabels = useCustomLabels(id, [LabelProperty.Tag], entityType)[LabelProperty.Tag] ?? [];

  const [addTag] = useAddTagMutation();
  const [addNcpTag] = useAddNcpTagMutation();
  const [addObjectTypeTag] = useAddObjectTypeTagMutation();
  const [editTag] = useUpdateTagMutation();
  const [editNcpTag] = useUpdateNcpTagMutation();
  const [editObjectTypeTag] = useUpdateObjectTypeTagMutation();

  const handleAdd = async () => {
    try {
      if (!id) {
        throw new Error();
      }

      if (entityType === EntityType.Property || entityType === EntityType.LinkedProperty) {
        const { data } = await addTag({
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

        setNewTagId(data?.addTag?.newTag.id ?? undefined);
      }

      if (entityType === EntityType.Project) {
        const { data } = await addNcpTag({
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

        const tags = data?.addNcpTag?.tags;

        if (tags?.length) {
          setNewTagId(tags[tags.length - 1].id);
        }
      }

      if (entityType === EntityType.ObjectType) {
        const { data } = await addObjectTypeTag({
          variables: {
            input: { parentId: id },
          },
          refetchQueries: [
            {
              query: ObjectTypeMediaDocument,
              variables: { id },
            },
          ],
        });

        const tags = data?.addObjectTypeTag?.tags;

        if (tags?.length) {
          setNewTagId(tags[tags.length - 1].id);
        }
      }

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

      if (entityType === EntityType.Property) {
        await editTag({
          variables: {
            input: {
              ...values,
              pimId: id,
            },
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
        await editNcpTag({
          variables: {
            input: {
              ...values,
              parentId: id,
            },
          },
          refetchQueries: [
            {
              query: NcpMediaDocument,
              variables: { id },
            },
          ],
        });
      }

      if (entityType === EntityType.ObjectType) {
        await editObjectTypeTag({
          variables: {
            input: {
              ...values,
              parentId: id,
            },
          },
          refetchQueries: [
            {
              query: ObjectTypeMediaDocument,
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
