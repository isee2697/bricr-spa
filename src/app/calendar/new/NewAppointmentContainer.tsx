import React, { useCallback, useState } from 'react';
import { DateTime } from 'luxon';

import {
  AppointmentLocation,
  useAddAppointmentMutation,
  AddAppointmentInput,
  AppointmentType,
  AppointmentTermInput,
} from 'api/types';
import { CalendarProps } from '../Calendar.types';

import { NewAppointment } from './NewAppointment';

const locations: AppointmentLocation[] = [
  {
    id: 'Loc1',
    name: 'White room',
    availablePlaces: 8,
    suggest: true,
  },
  {
    id: 'Loc2',
    name: 'Green room',
    availablePlaces: 8,
  },
  {
    id: 'Loc3',
    name: 'Red room',
    availablePlaces: 8,
    suggest: true,
  },
  {
    id: 'Loc4',
    name: 'Blue room',
    availablePlaces: 8,
  },
  {
    id: 'Loc5',
    name: 'Purple room',
    availablePlaces: 8,
  },
  {
    id: 'Loc6',
    name: 'Dark room',
    availablePlaces: 8,
    suggest: true,
  },
];

const DEFAULT_TERM_ITEM: AppointmentTermInput = {
  from: DateTime.local()
    .plus({ day: 1 })
    .toISODate(),
  to: DateTime.local()
    .plus({ day: 1, hour: 1 })
    .toISODate(),
};

const INITIAL_APPOINTMENT: AddAppointmentInput = {
  alternativeTerms: [DEFAULT_TERM_ITEM],
  appointmentType: AppointmentType.Aquisition,
};

export const NewAppointmentContainer = ({ data, isEdit }: Pick<CalendarProps, 'data'> & { isEdit?: boolean }) => {
  const [appointment] = useState<AddAppointmentInput>();
  const [addAppointment] = useAddAppointmentMutation();

  // const { params } = useRouteMatch();
  // useEffect(() => {
  //   if (isEdit && params.id) {
  //     const schedule = schedulerData.find(item => item.id.toString() === params.id);
  //     setAppointment(schedule);
  //   }
  // }, [isEdit, params.id]);

  const handleSubmit = useCallback(
    async (appointment: AddAppointmentInput): Promise<boolean> => {
      try {
        const { data, errors } = await addAppointment({
          variables: {
            input: { ...appointment, description: '' },
          },
        });

        if (!errors && data && data.addAppointment) {
          return true;
        }

        throw new Error();
      } catch {
        return false;
      }
    },
    [addAppointment],
  );

  return (
    <NewAppointment
      locations={locations}
      members={data}
      appointmentInfo={appointment || INITIAL_APPOINTMENT}
      onSubmit={handleSubmit}
    />
  );
};
