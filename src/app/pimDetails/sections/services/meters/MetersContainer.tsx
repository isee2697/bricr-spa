import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import upperFirst from 'lodash/upperFirst';

import {
  useUpdateMeterMutation,
  useAddReadingMutation,
  PimServicesDocument,
  Meter,
  SectionWithDescriptionType,
  useUpdateDescriptionMutation,
  MeterType,
} from 'api/types';
import { ServicesMetersContainerProps } from '../Services.types';
import { useLocale } from 'hooks';

import { Meters } from './Meters';

export const MetersContainer = ({
  pimServices,
  title,
  linkedPerson,
  type,
  isMeterAdded,
  ...props
}: ServicesMetersContainerProps) => {
  const { id, meterType } = useParams<{ id: string; meterType: string }>();
  const { formatMessage } = useLocale();
  const [loading, setLoading] = useState(false);
  const [updateMeter] = useUpdateMeterMutation();
  const [addReading] = useAddReadingMutation();
  const [updateDescription] = useUpdateDescriptionMutation();

  const meters =
    pimServices.meters && pimServices.meters.filter(meter => meter.type.toString().toLowerCase() === meterType);
  const typeOfMeter = upperFirst(meterType) as MeterType;
  const metersMeta = pimServices.metersMeta?.[typeOfMeter];

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
      const { data } = await updateMeter({
        variables: {
          input: {
            pimId: id,
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
      const { data } = await addReading({
        variables: {
          input: {
            pimId: id,
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
    <Meters
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
