import React from 'react';

import { Box } from 'ui/atoms';
import { CardWithBody } from 'ui/templates';

import { PersonalInformationProps } from './PersonalInformation.types';
import { PersonalInformationItem } from './personalInformationItem/PersonalInformationItem';

export const PersonalInformation = ({ crm }: PersonalInformationProps) => {
  const { partners } = crm;

  return (
    <CardWithBody titleId={'crm.details.summary.personal_information'}>
      <PersonalInformationItem {...crm} />
      {partners?.length && (
        <Box mt={2}>
          <PersonalInformationItem {...partners[0].partner} />
        </Box>
      )}
    </CardWithBody>
  );
};
