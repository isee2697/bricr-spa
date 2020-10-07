import React from 'react';

import { Box, Typography } from 'ui/atoms';
import { AogSpaceDescriptionContainer } from '../aogSpaceDescription/AogSpaceDescriptionContainer';
import { useLocale } from 'hooks';

import { AogSpaceInformationProps } from './AogSpaceInformation.types';
import { AogSpaceInformation } from './AogSpaceInformation';

export const AogSpaceInformationContainer = ({ type, isEmpty }: AogSpaceInformationProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Box mb={6} />
      <Typography variant="h1">{formatMessage({ id: `pim_details.${type.toLowerCase()}.title` })}</Typography>
      <Box mb={1} />
      <AogSpaceDescriptionContainer type={type} />
      <AogSpaceInformation isEmpty={isEmpty} type={type} />
    </>
  );
};
