import upperFirst from 'lodash/upperFirst';

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useUpdateMeterMutation,
  useAddReadingMutation,
  PimServicesDocument,
  Meter,
  SectionWithDescriptionType,
  useUpdateDescriptionMutation,
  MeterType,
} from 'api/types';
import { ServicesMetersContainerProps } from '../../services/Services.types';
import { useLocale } from 'hooks';

import { MetersType } from './MetersType';

export const MeterTypeContainer = ({
  pimMeters,
  pimMetersMeta,
  title,
  linkedPerson,
  type,
  isMeterAdded,
  ...props
}: ServicesMetersContainerProps) => {
  const { id, meterType } = useParams<{ id: string; meterType: string }>();
  const { formatMessage } = useLocale();
  const [loading, setLoading] = useState(false);
  const [updatePimMeter] = useUpdateMeterMutation();
  const [addPimReading] = useAddReadingMutation();
  const [updateDescription] = useUpdateDescriptionMutation();

  const meters = pimMeters && pimMeters.filter(meter => meter.type.toString().toLowerCase() === meterType);
  const typeOfMeter = upperFirst(meterType) as MeterType;
  const metersMeta = pimMetersMeta?.[typeOfMeter];

  const onDescriptionUpdate = async (body: { description: string }) => {
    try {
      updateDescription({
        variables: {
          input: {
            ...body,
            pimId: id,
            section: SectionWithDescriptionType.Meters,
            meterType: typeOfMeter,
          },
        },
        refetchQueries: [
          {
            query: PimServicesDocument,
            variables: {
              id,
            },
          },
        ],
      });

      return undefined;
    } catch {
      return { error: true };
    }
  };

  const handleEdit = async (body: Meter) => {
    try {
      const { data } = await updatePimMeter({
        variables: {
          input: {
            parentId: id,
            id: body.id,
            name: body.name,
            description: body.description,
          },
        },
        refetchQueries: [
          {
            query: PimServicesDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!data) {
        throw new Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  const onAddReading = async (meterId: string) => {
    setLoading(true);

    try {
      const { data } = await addPimReading({
        variables: {
          input: {
            parentId: id,
            meterId: meterId,
          },
        },
        refetchQueries: [
          {
            query: PimServicesDocument,
            variables: {
              id,
            },
          },
        ],
      });

      await setLoading(false);

      if (!data) {
        throw new Error();
      }
    } catch {
      return { error: true };
    }

    return undefined;
  };

  return (
    <MetersType
      isMeterAdded={isMeterAdded}
      onSave={handleEdit}
      linkedPerson={linkedPerson}
      loading={loading}
      meters={meters || []}
      metersMeta={metersMeta || {}}
      onDescriptionUpdate={onDescriptionUpdate}
      onAddReading={onAddReading}
      title={formatMessage({ id: `dictionaries.service.meter.${type.charAt(0).toUpperCase()}${type.slice(1)}Meters` })}
    />
  );
};
