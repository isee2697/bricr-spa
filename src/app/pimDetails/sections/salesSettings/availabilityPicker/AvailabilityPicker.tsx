import React, { ReactNode, useState } from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Grid } from 'ui/atoms';
import { CheckboxButtonField, TimePickerField } from 'form/fields';

import { useStyles } from './AvailabilityPicker.styles';

type DaysType = {
  label: string;
  icon: ReactNode;
  value: string;
};

type AvailabilityPickerType = {
  days: DaysType[];
};

export const AvailabilityPicker = ({ days }: AvailabilityPickerType) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const classes = useStyles();

  const toggleDay = (day: string) => {
    const newDays = [...selectedDays];
    const index = newDays.indexOf(day);

    if (index > -1) {
      newDays.splice(index, 1);
    } else {
      newDays.push(day);
    }

    setSelectedDays(newDays);
  };

  return (
    <Form
      onSubmit={() => {}}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={1} className={classes.rowHead}>
                <div className={classes.row}>
                  <p>Days</p>
                </div>
                <div className={classes.row}>
                  <p>Start at</p>
                </div>
                <div className={classes.row}>
                  <p>End at</p>
                </div>
              </Grid>
              {days.map((day, index) => {
                return (
                  <Grid item xs={2} className={classes.col}>
                    <div className={classes.row}>
                      <CheckboxButtonField
                        name={day.value}
                        option={day}
                        xs={12}
                        onChange={() => toggleDay(day.value)}
                      />
                    </div>
                    <div className={classes.row}>
                      <TimePickerField
                        placeholder="Type number"
                        name={`${day.value}.from`}
                        disabled={!selectedDays.includes(day.value)}
                      />
                    </div>
                    <div className={classes.row}>
                      <TimePickerField
                        placeholder="Type number"
                        name={`${day.value}.to`}
                        disabled={!selectedDays.includes(day.value)}
                      />
                    </div>
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
