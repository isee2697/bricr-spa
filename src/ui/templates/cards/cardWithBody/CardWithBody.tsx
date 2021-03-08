import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, CardHeader } from 'ui/atoms';

import { CardWithBodyProps } from './CardWithBody.types';

export const CardWithBody = ({ titleId, titleActions, children }: CardWithBodyProps) => {
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader title={formatMessage({ id: titleId })} action={titleActions} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
