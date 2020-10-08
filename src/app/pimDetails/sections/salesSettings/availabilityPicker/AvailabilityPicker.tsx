import React from 'react';
import { ReactNode } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { Grid } from 'ui/atoms';
import { CheckboxButtonField, CheckboxGroupField, GenericField, TimePickerField } from 'form/fields';

type DaysType = {
  label: string;
  icon: ReactNode;
  value: string;
};

type AvailabilityPickerType = {
  days: DaysType[];
};

export const AvailabilityPicker = ({ days }: AvailabilityPickerType) => {
  return (
    <Form
      onSubmit={() => {}}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              {days.map(day => {
                return (
                  <Grid item xs={1}>
                    <CheckboxButtonField name={day.value} option={day} />
                    <TimePickerField placeholder="Type number" name="my field" label={<>Label</>} disabled />
                  </Grid>
                );
              })}
            </Grid>
          </form>
        );
      }}
    />
  );
};
