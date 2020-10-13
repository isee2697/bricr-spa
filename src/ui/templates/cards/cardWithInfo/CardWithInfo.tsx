import React from 'react';
import { Box, Typography } from 'ui/atoms';
import { CardWithInfoProps } from 'ui/templates/cards/cardWithInfo/CardWithInfo.types';
import { FormSection } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';

export const CardWithInfo = ({
  children,
  isEmpty,
  emptyEmoji,
  infoEmoji,
  cardTitle,
  emptyTextFirst,
  infoTextFirst,
  emptyTextSecond,
  infoTextSecond,
}: CardWithInfoProps) => {
  return (
    <Box width="100%" mt={3}>
      <FormSection title={cardTitle} isEditable={false}>
        <InfoSection emoji={isEmpty && emptyEmoji ? emptyEmoji : infoEmoji}>
          <Typography>{isEmpty ? emptyTextFirst : infoTextFirst}</Typography>
          <Typography>{isEmpty ? emptyTextSecond : infoTextSecond}</Typography>
          {children}
        </InfoSection>
      </FormSection>
    </Box>
  );
};
