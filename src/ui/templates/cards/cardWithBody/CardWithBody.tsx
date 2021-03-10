import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader, Chip } from 'ui/atoms';

import { CardWithBodyProps } from './CardWithBody.types';
import { useStyles } from './CardWithBody.styles';

export const CardWithBody = ({
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
      <CardHeader
        className={titleClass}
        action={titleActions}
        title={
          <>
            {formatMessage({ id: titleId, defaultMessage: titleId })}
            {titleAmount && <Chip size="small" label={titleAmount} className={classes.count} />}
          </>
        }
      />
      <CardContent className={bodyClass}>{children}</CardContent>
    </Card>
  );
};
