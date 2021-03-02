import React from 'react';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, CardHeader } from 'ui/atoms';

import { PersonalInformationProps } from './PersonalInformation.types';
import { PersonalInformationItem } from './personalInformationItem/PersonalInformationItem';

export const PersonalInformation = ({ crm }: PersonalInformationProps) => {
  const { formatMessage } = useLocale();
  const { partner } = crm;

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'crm.details.summary.personal_information' })} />
      <CardContent>
        <PersonalInformationItem {...crm} />
        {partner && (
          <Box mt={2}>
            <PersonalInformationItem {...partner} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
