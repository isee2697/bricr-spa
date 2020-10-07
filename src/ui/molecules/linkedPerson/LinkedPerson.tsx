import React from 'react';
import { Card, CardHeader, CardContent, Grid, UserAvatar, Typography } from 'ui/atoms';
import { LinkIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { LinkedPersonProps } from './LinkedPerson.types';
import { useStyles } from './LinkedPerson.styles';

export const LinkedPerson = ({ avatar, name, company, office, phone, email, onChangeClick }: LinkedPersonProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={<UserAvatar name={name} avatar={avatar} />}
        title={
          <Typography className={classes.title} variant="h4">
            {name}
          </Typography>
        }
        action={
          <Grid className={classes.link} onClick={onChangeClick} container alignItems="center">
            <LinkIcon /> <Typography variant="h5">{formatMessage({ id: `linked_person.change_link` })}</Typography>
          </Grid>
        }
      />
      <CardContent className={classes.content}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Typography className={classes.subTitle} variant="h5">
              {formatMessage({ id: `linked_person.office` })}
            </Typography>
            <Typography variant="h5">{office}</Typography>
            <Typography variant="h5">{company}</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography className={classes.subTitle} variant="h5">
              {formatMessage({ id: `linked_person.phone` })}
            </Typography>
            <Typography variant="h5">{phone}</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography className={classes.subTitle} variant="h5">
              {formatMessage({ id: `linked_person.email` })}
            </Typography>
            <Typography variant="h5">{email}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
