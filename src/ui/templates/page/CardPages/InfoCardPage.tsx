import React from 'react';

import { CardWithInfo, Page } from 'ui/templates/index';
import { InfoPageProps } from 'ui/templates/page/Page.types';

export const InfoCardPage = ({
  children,
  infoTextFirst,
  infoTextSecond,
  infoEmoji,
  emptyTextFirst,
  emptyTextSecond,
  emptyEmoji,
  isEmpty,
  cardTitle,
  ...props
}: InfoPageProps) => {
  return (
    <Page {...props}>
      <CardWithInfo
        cardTitle={cardTitle}
        infoTextFirst={infoTextFirst}
        infoTextSecond={infoTextSecond}
        infoEmoji={infoEmoji}
        emptyEmoji={emptyEmoji}
        emptyTextFirst={emptyTextFirst}
        emptyTextSecond={emptyTextSecond}
        isEmpty={isEmpty}
      >
        {children}
      </CardWithInfo>
    </Page>
  );
};
