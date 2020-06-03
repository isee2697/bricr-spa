import React from 'react';

import { Section } from '../section/Section';
import { useLocale } from 'hooks';

export const UspsContainer = () => {
  const { formatMessage } = useLocale();

  return (
    <Section
      count={0}
      icon="💼"
      emptyLineFirst={formatMessage({ id: 'pim_details.media.usps.empty_line_1' })}
      emptyLineSecond={formatMessage({ id: 'pim_details.media.usps.empty_line_2' })}
      title={formatMessage({ id: 'pim_details.media.usps.title' })}
      onAdd={() => {}}
    />
  );
};
