import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  ChapterOrUspType,
  LabelProperty,
  PimMediaDocument,
  UpdateUspInput,
  useAddUspMutation,
  useUpdateUspMutation,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';
import { useCustomLabels } from 'hooks/useCustomLabels';

import { Usps } from './Usps';
import { UspsContainerProps } from './Usps.types';

const options = Object.values(ChapterOrUspType).map(tagName => ({
  label: `dictionaries.media.chapter_or_usp.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const UspsContainer = ({ usps, onAddCustomType }: UspsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addUsp] = useAddUspMutation();
  const [editUsp] = useUpdateUspMutation();
  const [newUspId, setNewUspId] = useState<string | undefined>();
  const customLabels = useCustomLabels(id, [LabelProperty.Usp])[LabelProperty.Usp] ?? [];

  const handleAdd = async () => {
    try {
      if (!id) {
        throw new Error();
      }

      const { data } = await addUsp({
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

      setNewUspId(data?.addUsp?.newUsp.id ?? undefined);

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

  return (
    <Usps
      onSave={handleSave}
      options={[...options, ...customLabels]}
      onAdd={handleAdd}
      usps={usps ?? []}
      newUspId={newUspId}
      onAddCustomType={onAddCustomType}
    />
  );
};
