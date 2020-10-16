import React from 'react';

import { Card } from 'ui/atoms';
import { AppointmentMeetingType } from 'api/types';
import { CheckboxField } from 'form/fields';
import { useLocale } from 'hooks';

export const CheckboxesCard = () => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      {Object.values(AppointmentMeetingType).map(item => (
        <CheckboxField name={item} label={formatMessage({ id: `dictionaries.appointment.meeting_type.${item}` })} />
      ))}
    </Card>
  );
};
