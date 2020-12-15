import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { AppointmentLocation } from 'api/types';
import { CalendarProps } from '../Calendar.types';
import { schedulerData } from 'api/mocks/calendar';

import { NewAppointment } from './NewAppointment';
import { Appointment } from './NewAppointment.types';

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

export const NewAppointmentContainer = ({ data, isEdit }: Pick<CalendarProps, 'data'> & { isEdit?: boolean }) => {
  const [appointment, setAppointment] = useState<Appointment>();
  const { params } = useRouteMatch();

  useEffect(() => {
    if (isEdit && params.id) {
      const schedule = schedulerData.find(item => item.id.toString() === params.id);
      setAppointment(schedule);
    }
  }, [isEdit, params.id]);

  return <NewAppointment locations={locations} members={data} appointmentInfo={appointment} />;
};
