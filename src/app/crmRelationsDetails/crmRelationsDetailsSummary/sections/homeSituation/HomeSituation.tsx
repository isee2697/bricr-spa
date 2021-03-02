import React from 'react';

import { useLocale } from 'hooks';
import { Box, Typography } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useStyles } from '../../CrmRelationsDetailsSummary.styles';

import { HomeSituationProps } from './HomeSituation.types';

export const HomeSituation = ({ crm }: HomeSituationProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.summary.home_situation' })}
      isEditable={false}
      isExpandable={false}
    >
      <Box mb={2}>
        <Typography variant="h5" color="textSecondary" className={classes.fontWeightMedium}>
          {formatMessage({ id: 'common.current_home' })}
        </Typography>
        <Typography variant="h4" className={classes.fontWeightMedium}>
          Live-in
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h5" color="textSecondary" className={classes.fontWeightMedium}>
          {formatMessage({ id: 'common.current_home' })}
        </Typography>
        <Typography variant="h4" className={classes.fontWeightMedium}>
          Yes, for sale, estimated € 245.000,00
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h5" color="textSecondary" className={classes.fontWeightMedium}>
          {formatMessage({ id: 'common.mortgage' })}
        </Typography>
        <Typography variant="h4" className={classes.fontWeightMedium}>
          € 199.000,00
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" color="textSecondary" className={classes.fontWeightMedium}>
          {formatMessage({ id: 'common.reason_to_move' })}
        </Typography>
        <Typography variant="h4" className={classes.fontWeightMedium}>
          Change of income
        </Typography>
      </Box>
    </FormSection>
  );
};
