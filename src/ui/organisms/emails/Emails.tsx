import React from 'react';

import { Card, CardHeader, CardContent, CardActions, IconButton, Button } from '../../atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { Email } from 'ui/molecules/email/Email';
import { EmailProps } from 'ui/molecules/email/Email.types';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './Emails.styles';
import { EmailsProps } from './Emails.types';

export const Emails = ({ data, onEmailClick, count, onAddClick, onMoreClick }: EmailsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: AppMessages['emails.title'] })}
        action={
          <IconButton aria-label="add" color="primary" size="small" onClick={onAddClick}>
            <AddIcon color="inherit" />
          </IconButton>
        }
      />
      <CardContent className={classes.card}>
        {data.map((email: EmailProps) => (
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
        ))}
      </CardContent>
      <CardActions>
        <Button fullWidth onClick={onMoreClick}>
          {formatMessage({ id: AppMessages['emails.view_more'] })} ({count})
        </Button>
      </CardActions>
    </Card>
  );
};