import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Chapter, TextChaptersContainerProps } from 'app/pimDetails/sections/media/textChapters/TextChapters.types';
import {
  ChapterOrUspType,
  LabelProperty,
  PimMediaDocument,
  useAddTextChapterMutation,
  useUpdateTextChapterMutation,
} from 'api/types';
import { RICH_TEXT_DEFAULT } from 'form/fields/richTextField/RichTextField';
import { SquareIcon } from 'ui/atoms/icons';
import { useCustomLabels } from 'hooks/useCustomLabels';

import { TextChapters } from './TextChapters';

const options = Object.values(ChapterOrUspType).map(tagName => ({
  label: `dictionaries.media.chapter_or_usp.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const TextChaptersContainer = ({ chapters, onAddCustomType }: TextChaptersContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addTextChapter] = useAddTextChapterMutation();
  const [editTextChapter] = useUpdateTextChapterMutation();
  const [newChapterId, setNewChapterId] = useState<string | null>(null);
  const customLabels = useCustomLabels(id, [LabelProperty.TextChapter])[LabelProperty.TextChapter] ?? [];

  const handleAdd = async () => {
    try {
      if (!id) {
        throw new Error();
      }

      const { data } = await addTextChapter({
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

      setNewChapterId(data?.addTextChapter?.newChapter.id ?? null);

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
