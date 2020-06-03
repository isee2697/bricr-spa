import React from 'react';

import { Section } from '../section/Section';
import { useLocale } from 'hooks';

export const LinksContainer = () => {
  const { formatMessage } = useLocale();

  return (
    <Section
      count={0}
      icon="🎥"
      emptyLineFirst={formatMessage({ id: 'pim_details.media.links.empty_line_1' })}
      emptyLineSecond={formatMessage({ id: 'pim_details.media.links.empty_line_2' })}
      title={formatMessage({ id: 'pim_details.media.links.title' })}
      onAdd={() => {}}
    />
  );
};
