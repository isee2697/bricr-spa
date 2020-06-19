import React, { useMemo } from 'react';

import { LabelProperty, useGetLabelsQuery } from 'api/types';
import { iconPickerIcons } from 'hooks/useCustomLabels/icons';
import { SquareIcon } from 'ui/atoms/icons';

import { CustomRadioDataType, CustomRadioDataTypeRecord } from './useCustomLabels.types';

export const useCustomLabels = (pimId: string, properties: LabelProperty[]) => {
  const { data } = useGetLabelsQuery({
    variables: {
      pimId,
      properties,
    },
  });

  return useMemo(() => {
    const labels =
      data?.getLabels?.map(
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
