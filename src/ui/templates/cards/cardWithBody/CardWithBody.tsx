import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader, Chip } from 'ui/atoms';

import { CardWithBodyProps } from './CardWithBody.types';
import { useStyles } from './CardWithBody.styles';

export const CardWithBody = ({
  title,
  titleId,
  titleAmount,
  titleActions,
  children,
  bodyClass,
  titleClass,
}: CardWithBodyProps) => {
  const classes = useStyles();

  const { formatMessage } = useLocale();

  return (
    <Card>
      {(titleId || title) && (
        <CardHeader
          className={titleClass}
          action={titleActions}
          title={
            <>
              {titleId ? formatMessage({ id: titleId, defaultMessage: titleId }) : title}
              {titleAmount ? <Chip size="small" label={titleAmount} className={classes.count} /> : undefined}
            </>
          }
        />
      )}
      <CardContent className={bodyClass}>{children}</CardContent>
    </Card>
  );
};
