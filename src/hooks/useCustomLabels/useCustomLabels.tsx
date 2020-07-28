import React, { useMemo } from 'react';

import {
  LabelProperty,
  useGetLabelsQuery,
  useGetNcpLabelsQuery,
  useGetObjectTypeLabelsQuery,
  GetLabelsQuery,
  GetNcpLabelsQuery,
} from 'api/types';
import { iconPickerIcons } from 'hooks/useCustomLabels/icons';
import { SquareIcon } from 'ui/atoms/icons';
import { EntityType } from 'app/shared/entityType';

import { CustomRadioDataType, CustomRadioDataTypeRecord } from './useCustomLabels.types';

const getQuery = (entityType: EntityType) => {
  switch (entityType) {
    case EntityType.Property:
      return useGetLabelsQuery;
    case EntityType.Project:
      return useGetNcpLabelsQuery;
    case EntityType.ObjectType:
      return useGetObjectTypeLabelsQuery;
    default:
      throw new Error('There is no such EnitityType');
  }
};

export const useCustomLabels = (
  id: string,
  properties: LabelProperty[],
  entityType: EntityType = EntityType.Property,
) => {
  const useQuery = getQuery(entityType);
  const { data } = useQuery({
    variables: {
      id,
      properties,
    },
  });

  return useMemo(() => {
    const labels =
      ((data as GetLabelsQuery)?.getLabels || (data as GetNcpLabelsQuery)?.getNcpLabels)?.map(
        (label): CustomRadioDataType => ({
          icon: iconPickerIcons.find(icon => icon.name === label.icon)?.icon ?? <SquareIcon color="inherit" />,
          label: label.text,
          value: label.id,
          isCustom: true,
          property: label.property,
        }),
      ) ?? [];

    return labels.reduce<CustomRadioDataTypeRecord>((record, label) => {
      if (!record[label.property]) {
        record[label.property] = [];
      }

      record[label.property]?.push(label);

      return record;
    }, {});
  }, [data]);
};
