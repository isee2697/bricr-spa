import React from 'react';
import { useParams } from 'react-router-dom';

import { ChapterOrUspType, PimMediaDocument, UpdateUspInput, useAddUspMutation, useUpdateUspMutation } from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';

import { Usps } from './Usps';
import { UspsContainerProps } from './Usps.types';

const options = Object.values(ChapterOrUspType).map(tagName => ({
  label: `dictionaries.media.chapter_or_usp.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const UspsContainer = ({ usps }: UspsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addUsp] = useAddUspMutation();
  const [editUsp] = useUpdateUspMutation();

  const handleAdd = async () => {
    try {
      if (!id) {
        throw new Error();
      }

      await addUsp({
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

  const handleSave = async (values: UpdateUspInput) => {
    try {
      if (!id) {
        throw new Error();
      }

      await editUsp({
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

  return <Usps onSave={handleSave} options={options} onAdd={handleAdd} usps={usps ?? []} />;
};
