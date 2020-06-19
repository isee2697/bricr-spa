import React from 'react';
import { useParams } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { LocationType, PimLocationDocument, usePimLocationQuery, useUpdatePimLocationMutation } from 'api/types';
import { BellIcon } from 'ui/atoms/icons';
import { LocationForm } from 'app/pimDetails/sections/general/location/Location.types';

import { Location } from './Location';

export const locationOptions = Object.values(LocationType).map(location => ({
  label: `dictionaries.general_location.type.${location}`,
  value: location,
  icon: <BellIcon />,
}));

export const LocationContainer = (props: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePimLocationQuery({ variables: { id } });
  const [updateLocation] = useUpdatePimLocationMutation();

  const handleUpdate = async ({ goodToKnows, latitude, longitude, ...values }: LocationForm) => {
    if (!id) {
      throw new Error();
    }

    try {
      await updateLocation({
        variables: {
          input: {
            id,
            latitude: parseFloat(latitude ?? '') || null,
            longitude: parseFloat(longitude ?? '') || null,
            goodToKnows:
              goodToKnows &&
              goodToKnows.map(goodToKnow => ({
                ...goodToKnow,
                distance: parseInt(goodToKnow.distance ?? '') || null,
              })),
            ...values,
          },
        },
        refetchQueries: [
          {
            query: PimLocationDocument,
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

  if (data)
    return (
      <Location {...props} typeOptions={locationOptions} onSave={handleUpdate} initialValues={data.getPimLocation} />
    );

  return null;
};
