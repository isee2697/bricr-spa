import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader } from 'ui/atoms';

import { CardWithBodyProps } from './CardWithBody.types';

export const CardWithBody = ({
  titleId,
  titleNode,
  titleActions,
  children,
  bodyClass,
  titleClass,
}: CardWithBodyProps) => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader className={titleClass} title={titleNode ?? formatMessage({ id: titleId })} action={titleActions} />
      <CardContent className={bodyClass}>{children}</CardContent>
    </Card>
  );
};
