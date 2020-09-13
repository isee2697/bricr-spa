import React, { useState } from "react";
import clsx from "classnames";
import { DateTime } from "luxon";
import { isUndefined } from "lodash";

import { Grid, Typography, Box } from "ui/atoms";
import { useLocale } from "hooks/useLocale/useLocale";

import { useStyles } from "./TasksDateSectionNextWeek.styles";
import { TasksDateSectionNextWeekProps } from "./TasksDateSectionNextWeek.types";

export const TasksDateSectionNextWeek = ({
  onSelectDate,
}: TasksDateSectionNextWeekProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const [selectedDate, setSelectedDate] = useState<number | undefined>(
    undefined
  );

  const selectDate = (index: number) => {
    if (!isUndefined(selectedDate) && selectedDate === index) {
      setSelectedDate(undefined);
      onSelectDate({
        from: DateTime.local()
          .plus({ days: 1 })
          .toISO(),
        to: DateTime.local()
          .plus({ days: 7 })
          .toISO(),
      });
    } else {
      setSelectedDate(index);
      onSelectDate({
        from: DateTime.local()
          .plus({ days: index + 1 })
          .toISO(),
        to: DateTime.local()
          .plus({ days: index + 1 })
          .toISO(),
      });
    }
  };

  const today: DateTime = DateTime.local();
  const days = Array.from(new Array(7), (value, index) => index);

  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item>
        <Box className={classes.title}>
          {isUndefined(selectedDate) && (
            <Typography variant="h3" className={classes.inlineBlock}>
              {formatMessage({ id: "tasks.tasks_next_week" })}
            </Typography>
          )}
          {!isUndefined(selectedDate) && (
            <>
              <Typography
                variant="h3"
                className={clsx(classes.inlineBlock, classes.marginRightHalf)}
              >
                {formatMessage({ id: "tasks.tasks_for" })}{" "}
              </Typography>
              <Typography
                variant="h3"
                className={clsx(classes.inlineBlock, classes.fontWeightBold)}
              >
                {formatMessage({ id: "tasks.selected_days" }, { count: 1 })}
              </Typography>
            </>
          )}
        </Box>
      </Grid>
      <Grid item>
        <Grid container>
          {days.map((index) => (
            <Grid
              key={index}
              item
              className={clsx(
                classes.dayBox,
                !isUndefined(selectedDate) &&
                  selectedDate === index &&
                  "selected"
              )}
              onClick={() => selectDate(index)}
            >
              <Typography variant="h3">
                {today.plus({ days: index + 1 }).day}
              </Typography>
              <Typography variant="h6" className={classes.weekDay}>
                {today.plus({ days: index + 1 }).weekdayShort}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
