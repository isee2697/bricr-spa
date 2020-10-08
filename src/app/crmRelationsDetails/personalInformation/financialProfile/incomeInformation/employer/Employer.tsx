import React from 'react';
import { Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { DropdownField } from 'form/fields';

import { useStyles } from './Employer.styles';

export const Employer = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const Professions = [
    {
      label: formatMessage({ id: 'dictionaries.profession.designer' }),
      value: 'Designer',
    },
  ];

  return (
    <>
      <Box>
        <DropdownField
          items={Professions}
          placeholder="crm.details.personal_information_financial_profile.income_information.profession"
          label="crm.details.personal_information_financial_profile.income_information.profession"
          name="employer.profession"
        />
      </Box>
    </>
  );
};
