import React, { useCallback, useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import {
  AppointmentLocation,
  useAddAppointmentMutation,
  AppointmentMeetingType,
  AddAppointmentInput,
  TaskLabel,
  CalendarTypes,
  AppointmentRepeat,
} from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { NewAppointment } from './NewAppointment';
import { AppointmentFormType, AppointmentTermFormType, NewAppointmentContainerProps } from './NewAppointment.types';

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

const splitDateTime = (date: string) => {
  const datetime = DateTime.fromISO(date);

  return { date: datetime.toISODate(), time: datetime.toISOTime() };
};

const mergeDateTime = (date: string, time: string) => {
  const jsDate = DateTime.fromISO(date).toJSDate();
  const jsTime = DateTime.fromISO(time).toJSDate();

  return new Date(
    jsDate.getTime() + (jsTime.getTime() % (1000 * 3600 * 24)) - jsTime.getTimezoneOffset() * 60 * 1000,
  ).toISOString();
};

const INITIAL_APPOINTMENT: AppointmentFormType = {
  from: splitDateTime(
    DateTime.local()
      .plus({ day: 1 })
      .toISO(),
  ),
  to: splitDateTime(
    DateTime.local()
      .plus({ day: 1, hour: 1 })
      .toISO(),
  ),
  type: CalendarTypes.Appointment,
};

export const NewAppointmentContainer = ({ teamMembers, account, isEdit }: NewAppointmentContainerProps) => {
  const [appointment] = useState<AppointmentFormType>(INITIAL_APPOINTMENT);
  const [addAppointment] = useAddAppointmentMutation();
  const { push } = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (appointment): Promise<boolean> => {
      if (appointment.type === CalendarTypes.Birthday) {
        appointment.to.date = appointment.from.date;
        appointment.repeatAppointment = AppointmentRepeat.Yearly;
        appointment.allDay = true;
      }

      if (appointment.allDay) {
        appointment.from.time = '00:00:00';
        appointment.to.time = '23:59:59';
      }

      const description = document.querySelector('.rich-text-field#description')?.innerHTML;

      const appointmentInput: AddAppointmentInput = {
        ...appointment,
        accountId: account?.id || '',
        from: mergeDateTime(appointment.from.date, appointment.from.time),
        to: mergeDateTime(appointment.to.date, appointment.to.time),
        alternativeTerms: appointment.alternativeTerms?.map((item: AppointmentTermFormType) => ({
          from: mergeDateTime(item.from.date, item.from.time),
          to: mergeDateTime(item.to.date, item.to.time),
        })),
        agreementType: Object.values(AppointmentMeetingType).filter(type => appointment.agreementType?.[type]),
        taskLabel: TaskLabel.Business,
        description,
      };

      try {
        setLoading(true);
        const { data, errors } = await addAppointment({
          variables: {
            input: appointmentInput,
          },
        });
        setLoading(false);

        if (!errors && data && data.addAppointment) {
          push(AppRoute.calendarAppointments.replace(':accountId', account?.id || ''));

          return true;
        }

        throw new Error();
      } catch {
        setLoading(false);

        return false;
      }
    },
    [account, addAppointment, push],
  );

  return (
    <NewAppointment
      locations={locations}
      members={teamMembers}
      appointmentInfo={appointment}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
};
