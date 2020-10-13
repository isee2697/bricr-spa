import React from 'react';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { Box, Card, Grid, Typography } from 'ui/atoms';
import { AogSpaceType } from '../../../../../api/types';

import { AogSpaceInformationProps } from './AogSpaceInformation.types';

export const AogSpaceInformation = ({ type, isEmpty }: AogSpaceInformationProps) => {
  const { formatMessage } = useLocale();

  const typeLower = type.toLowerCase();

  const mainLine = isEmpty ? `pim_details.${typeLower}.empty_title` : `pim_details.${typeLower}.explanation_title`;
  const subLine = isEmpty
    ? `pim_details.${typeLower}.explanation_description`
    : `pim_details.${typeLower}.empty_description`;

  let emoji: string;

  switch (type) {
    case AogSpaceType.Ground:
      emoji = isEmpty ? '🚏' : '🏞️';
      break;
    case AogSpaceType.Buildings:
      emoji = isEmpty ? '🏗️' : '🏢';
      break;
    case AogSpaceType.Installations:
      emoji = isEmpty ? '🚧' : '🏭';
      break;
    case AogSpaceType.Animals:
    default:
      emoji = isEmpty ? '🐣' : '🦆🐄🐟';
      break;
  }

  return (
    <>
      <Grid item xs={12}>
        <Box mb={1} />
        <Card>
          <InfoSection emoji={emoji}>
            <Typography variant="h3">{formatMessage({ id: mainLine })}</Typography>
            <Typography variant="h3">{formatMessage({ id: subLine })}</Typography>
          </InfoSection>
        </Card>
      </Grid>
    </>
  );
};
