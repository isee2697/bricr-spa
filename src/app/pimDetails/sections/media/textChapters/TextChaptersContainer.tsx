import React from 'react';
import { useParams } from 'react-router-dom';

import { Chapter, TextChaptersContainerProps } from 'app/pimDetails/sections/media/textChapters/TextChapters.types';
import { ChapterOrUspType, PimMediaDocument, useAddTextChapterMutation, useUpdateTextChapterMutation } from 'api/types';
import { RICH_TEXT_DEFAULT } from 'form/fields/richTextField/RichTextField';
import { SquareIcon } from 'ui/atoms/icons';

import { TextChapters } from './TextChapters';

const options = Object.values(ChapterOrUspType).map(tagName => ({
  label: `dictionaries.media.chapter_or_usp.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const TextChaptersContainer = ({ chapters }: TextChaptersContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addTextChapter] = useAddTextChapterMutation();
  const [editTextChapter] = useUpdateTextChapterMutation();

  const handleAdd = async () => {
    try {
      if (!id) {
        throw new Error();
      }

      await addTextChapter({
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

  return <TextChapters onSave={handleSave} options={options} onAdd={handleAdd} chapters={textChapters ?? []} />;
};
