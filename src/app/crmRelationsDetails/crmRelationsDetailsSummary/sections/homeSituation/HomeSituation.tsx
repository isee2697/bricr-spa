import React from 'react';

import { useLocale } from 'hooks';
import { Box, Typography } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useStyles } from '../../CrmRelationsDetailsSummary.styles';
import { CrmHomeSituation } from 'api/types';

import { HomeSituationProps } from './HomeSituation.types';

export const HomeSituation = ({ crm }: HomeSituationProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const mockData: CrmHomeSituation = {
    id: '0001',
    currentHomeSituation: 'Livein',
    currentHomeSalesValue: 24500000,
    currentHomeMortgage: 19900000,
    reasonToMove: ['Change of income'],
  };

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
          {formatMessage(
            { id: 'crm.details.summary.home_situation.current_home_situation' },
            { situation: mockData.currentHomeSituation },
          )}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h5" color="textSecondary" className={classes.fontWeightMedium}>
          {formatMessage({ id: 'common.current_home' })}
        </Typography>
        <Typography variant="h4" className={classes.fontWeightMedium}>
          {formatMessage(
            { id: 'crm.details.summary.home_situation.current_home.value' },
            { price: mockData.currentHomeSalesValue },
          )}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h5" color="textSecondary" className={classes.fontWeightMedium}>
          {formatMessage({ id: 'common.mortgage' })}
        </Typography>
        <Typography variant="h4" className={classes.fontWeightMedium}>
          € {mockData.currentHomeMortgage}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" color="textSecondary" className={classes.fontWeightMedium}>
          {formatMessage({ id: 'common.reason_to_move' })}
        </Typography>
        {mockData.reasonToMove?.map(reason => (
          <Typography variant="h4" className={classes.fontWeightMedium}>
            {reason}
          </Typography>
        ))}
      </Box>
    </FormSection>
  );
};
