import React from 'react';

import { Card, CardHeader, CardContent, CardActions, IconButton, Button, Typography } from '../../atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { Email } from 'ui/molecules/email/Email';
import { useLocale } from 'hooks/useLocale/useLocale';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './Emails.styles';
import { EmailsProps, EmailItem } from './Emails.types';

export const Emails = ({ data, onEmailClick, count, onAddClick, onMoreClick }: EmailsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'emails.title' })}
        action={
          <IconButton aria-label="add" color="primary" size="small" onClick={onAddClick}>
            <AddIcon color="inherit" />
          </IconButton>
        }
      />
      <CardContent className={classes.card}>
        {data.length ? (
          data.map((email: EmailItem) => (
            <Email
              name={email.name}
              avatar={email.avatar}
              title={email.title}
              date={email.date}
              open={email.open}
              onClick={id => onEmailClick(id)}
              id={email.id}
              key={email.id}
            >
              {email.children}
            </Email>
          ))
        ) : (
          <InfoSection emoji="🤔">
            <Typography variant="h3">
              {formatMessage({
                id: 'dashboard.emails.empty_title',
              })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({
                id: 'dashboard.emails.empty_description',
              })}
            </Typography>
          </InfoSection>
        )}
      </CardContent>
      <CardActions>
        <Button fullWidth onClick={onMoreClick}>
          {formatMessage({ id: 'emails.view_more' })} ({count})
        </Button>
      </CardActions>
    </Card>
  );
};
