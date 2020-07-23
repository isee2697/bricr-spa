import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  ChapterOrUspType,
  LabelProperty,
  PimMediaDocument,
  NcpMediaDocument,
  ObjectTypeMediaDocument,
  UpdateUspInput,
  useAddUspMutation,
  useAddNcpUspsMutation,
  useAddObjectTypeUspsMutation,
  useUpdateUspMutation,
  useUpdateNcpUspsMutation,
  useUpdateObjectTypeUspsMutation,
} from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';
import { useCustomLabels } from 'hooks/useCustomLabels';
import { useEntityType, EntityType } from 'app/shared/entityType';

import { Usps } from './Usps';
import { UspsContainerProps } from './Usps.types';

const options = Object.values(ChapterOrUspType).map(tagName => ({
  label: `dictionaries.media.chapter_or_usp.${tagName}`,
  value: tagName,
  icon: <SquareIcon />,
}));

export const UspsContainer = ({ usps, onAddCustomType }: UspsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const entityType = useEntityType();

  const [newUspId, setNewUspId] = useState<string | undefined>();
  const customLabels = useCustomLabels(id, [LabelProperty.Usp], entityType)[LabelProperty.Usp] ?? [];

  const [addUsp] = useAddUspMutation();
  const [addNcpUsp] = useAddNcpUspsMutation();
  const [addObjectTypeUsps] = useAddObjectTypeUspsMutation();
  const [editUsp] = useUpdateUspMutation();
  const [editNcpUsp] = useUpdateNcpUspsMutation();
  const [editObjectTypeUsp] = useUpdateObjectTypeUspsMutation();

  const handleAdd = async () => {
    try {
      if (!id) {
        throw new Error();
      }

      if (entityType === EntityType.Property) {
        const { data } = await addUsp({
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

        setNewUspId(data?.addUsp?.newUsp.id ?? undefined);
      }

      if (entityType === EntityType.Project) {
        const { data } = await addNcpUsp({
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

        const usps = data?.addNcpUsps?.usps;

        if (usps?.length) {
          setNewUspId(usps[usps.length - 1].id);
        }
      }

      if (entityType === EntityType.ObjectType) {
        const { data } = await addObjectTypeUsps({
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

        const usps = data?.addObjectTypeUsps?.usps;

        if (usps?.length) {
          setNewUspId(usps[usps.length - 1].id);
        }
      }

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

      if (entityType === EntityType.Property) {
        await editUsp({
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
        await editNcpUsp({
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

      if (entityType === EntityType.ObjectType) {
        await editObjectTypeUsp({
          variables: {
            input: { ...values, parentId: id },
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
