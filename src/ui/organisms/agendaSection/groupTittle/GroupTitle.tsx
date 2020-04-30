import React from 'react';
import { DateTime, Duration } from 'luxon';

import { Grid } from 'ui/atoms';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';

import { GroupTitleProps } from './GroupTittle.types';
import { useStyles } from './GroupTitle.styles';

export const GroupTitle = ({ date, dateFormat }: GroupTitleProps) => {
  const { formatMessage, locale } = useLocale();
  const classes = useStyles();

  const today = DateTime.local();
  const tomorrow = today.plus(Duration.fromObject({ days: 1 }));

  let title;
  if (today.toFormat(dateFormat) === date) {
    title = formatMessage({ id: AppMessages['date.today'] });
  } else if (tomorrow.toFormat(dateFormat) === date) {
    title = title = formatMessage({ id: AppMessages['date.tomorrow'] });
  } else {
    title = DateTime.fromString(date, dateFormat)
      .setLocale(locale)
      .toFormat(dateFormat);
  }

  return (
    <Grid container>
      <Grid className={classes.title} item>
        {title}
      </Grid>
      <Grid item className={classes.day}>
        {DateTime.fromString(date, dateFormat).setLocale(locale).weekdayLong}
      </Grid>
    </Grid>
  );
};
