import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Chapter, TextChaptersContainerProps } from 'app/shared/media/textChapters/TextChapters.types';
import {
  ChapterOrUspType,
  LabelProperty,
  PimMediaDocument,
  NcpMediaDocument,
  useAddTextChapterMutation,
  useAddNcpTextChapterMutation,
  useUpdateTextChapterMutation,
  useUpdateNcpTextChapterMutation,
} from 'api/types';
import { RICH_TEXT_DEFAULT } from 'form/fields/richTextField/RichTextField';
import { SquareIcon } from 'ui/atoms/icons';
import { useCustomLabels } from 'hooks/useCustomLabels';
import { useEntityType, EntityType } from 'app/shared/entityType';

import { TextChapters } from './TextChapters';

const options = Object.values(ChapterOrUspType).map(tagName => ({
  label: `dictionaries.media.chapter_or_usp.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const TextChaptersContainer = ({ chapters, onAddCustomType }: TextChaptersContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const entityType = useEntityType();

  const [newChapterId, setNewChapterId] = useState<string | undefined>();
  const customLabels = useCustomLabels(id, [LabelProperty.TextChapter], entityType)[LabelProperty.TextChapter] ?? [];

  const [addTextChapter] = useAddTextChapterMutation();
  const [addNcpTextChapter] = useAddNcpTextChapterMutation();
  const [editTextChapter] = useUpdateTextChapterMutation();
  const [editNcpTextChapter] = useUpdateNcpTextChapterMutation();

  const handleAdd = async () => {
    try {
      if (!id) {
        throw new Error();
      }

      if (entityType === EntityType.Property) {
        const { data } = await addTextChapter({
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

        setNewChapterId(data?.addTextChapter?.newChapter.id ?? undefined);
      }

      if (entityType === EntityType.Project) {
        const { data } = await addNcpTextChapter({
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

        const chapters = data?.addNcpTextChapter?.textChapters;

        if (chapters?.length) {
          setNewChapterId(chapters[chapters.length - 1].id);
        }
      }

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const handleSave = async ({ chapter, ...values }: Chapter) => {
    try {
      if (!id) {
        throw new Error();
      }

      if (entityType === EntityType.Property) {
        await editTextChapter({
          variables: {
            input: {
              pimId: id,
              ...values,
              text: JSON.stringify(chapter),
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
        await editNcpTextChapter({
          variables: {
            input: {
              parentId: id,
              ...values,
              text: JSON.stringify(chapter),
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

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const textChapters =
    chapters &&
    chapters.map(ch => ({
      ...ch,
      chapter: ch.text ? JSON.parse(ch.text) : RICH_TEXT_DEFAULT,
    }));

  return (
    <TextChapters
      onSave={handleSave}
      options={[...options, ...customLabels]}
      onAdd={handleAdd}
      chapters={textChapters ?? []}
      newChapterId={newChapterId}
      onAddCustomType={onAddCustomType}
    />
  );
};
