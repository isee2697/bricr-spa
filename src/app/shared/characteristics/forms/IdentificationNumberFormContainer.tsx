import React from 'react';
import { useParams } from 'react-router-dom';

import {
  IdentificationNumber,
  NcpCharacteristicsDocument,
  ObjectTypeCharacteristicsDocument,
  UpdateIdentificationNumberNcpMutation,
  UpdateIdentificationNumberObjectTypeMutation,
  useAddIdentificationNumberNcpMutation,
  useAddIdentificationNumberObjectTypeMutation,
  useUpdateIdentificationNumberNcpMutation,
  useUpdateIdentificationNumberObjectTypeMutation,
} from 'api/types';
import { IdentificationNumberForm } from 'app/shared/identificationNumber/IdentificationNumberForm';
import { EntityType, useEntityType } from 'app/shared/entityType';

import { IdentificationNumbersForm } from './Forms.types';

export const IdentificationNumberFormContainer = ({
  items,
  isInitEditing,
  isInitExpanded,
}: IdentificationNumbersForm) => {
  const { entityType } = useEntityType();
  const { id } = useParams<{ id: string }>();
  const [addIdentificationNumberNcp] = useAddIdentificationNumberNcpMutation();
  const [updateIdentificationNumberNcp] = useUpdateIdentificationNumberNcpMutation();

  const [addIdentificationNumberObjectType] = useAddIdentificationNumberObjectTypeMutation();
  const [updateIdentificationNumberObjectType] = useUpdateIdentificationNumberObjectTypeMutation();

  const handleAdd = async () => {
    if (entityType === EntityType.Project) {
      const { data } = await addIdentificationNumberNcp({
        variables: {
          input: {
            parentId: id,
          },
        },
        refetchQueries: [
          {
            query: NcpCharacteristicsDocument,
            variables: {
              id,
            },
          },
        ],
      });

      return {
        id: data?.addIdentificationNumberNcp.newIdentificationNumber.id,
      };
    }

    if (entityType === EntityType.ObjectType) {
      const { data } = await addIdentificationNumberObjectType({
        variables: {
          input: {
            parentId: id,
          },
        },
        refetchQueries: [
          {
            query: ObjectTypeCharacteristicsDocument,
            variables: {
              id,
            },
          },
        ],
      });

      return {
        id: data?.addIdentificationNumberObjectType.newIdentificationNumber.id,
      };
    }

    throw new Error();
  };

  const handleSave = async (values: IdentificationNumber) => {
    let result: UpdateIdentificationNumberNcpMutation | UpdateIdentificationNumberObjectTypeMutation | undefined;

    try {
      if (entityType === EntityType.Project) {
        const { data } = await updateIdentificationNumberNcp({
          variables: {
            input: {
              id: values.id,
              name: values.name,
              number: values.number,
              type: values.type,
            },
          },
          refetchQueries: [
            {
              query: NcpCharacteristicsDocument,
              variables: {
                id,
              },
            },
          ],
        });

        result = data;
      }

      if (entityType === EntityType.ObjectType) {
        const { data } = await updateIdentificationNumberObjectType({
          variables: {
            input: {
              id: values.id,
              name: values.name,
              number: values.number,
              type: values.type,
            },
          },
          refetchQueries: [
            {
              query: ObjectTypeCharacteristicsDocument,
              variables: {
                id,
              },
            },
          ],
        });

        result = data;
      }

      if (!result) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <IdentificationNumberForm
      items={items}
      onAdd={handleAdd}
      onSave={handleSave}
      isInitExpanded={isInitExpanded}
      isInitEditing={isInitEditing}
    />
  );
};
