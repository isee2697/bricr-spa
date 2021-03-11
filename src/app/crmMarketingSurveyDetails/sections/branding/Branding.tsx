import React from 'react';

import { Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';

import { useStyles } from './Branding.styles';
import { BrandingProps } from './Branding.types';

export const Branding = ({ data }: BrandingProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5">
        {formatMessage({ id: 'crm.detalis.marketing_survey_details.branding_description' })}
      </Typography>
      <Box display="flex" alignItems="center" mt={2}>
        <Box>
          <Typography variant="h6" color="textSecondary" className={classes.italic}>
            {formatMessage({ id: 'crm.detalis.marketing_survey_details.distractors' })}
          </Typography>
          <Box mt={1} className={classes.card} display="flex" alignItems="center" justifyContent="space-between">
            {Array.from({ length: 7 }).map((item, index) => (
              <Box display="flex" flexDirection="column" alignItems="center" mr={1}>
                <Typography variant="h6" color="textSecondary" className={classes.italic}>
                  {index}
                </Typography>
                <Box className={classes.cardItem}>
                  {data.recommendation === index && <Box className={classes.checkmark} />}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box ml={2}>
          <Typography variant="h6" color="textSecondary" className={classes.italic}>
            {formatMessage({ id: 'crm.detalis.marketing_survey_details.passives' })}
          </Typography>
          <Box mt={1} className={classes.card} display="flex" alignItems="center" justifyContent="space-between">
            {Array.from({ length: 2 }).map((item, index) => (
              <Box display="flex" flexDirection="column" alignItems="center" mr={1}>
                <Typography variant="h6" color="textSecondary" className={classes.italic}>
                  {index + 7}
                </Typography>
                <Box className={classes.cardItem}>
                  {data.recommendation === index + 7 && <Box className={classes.checkmark} />}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box ml={2}>
          <Typography variant="h6" color="textSecondary" className={classes.italic}>
            {formatMessage({ id: 'crm.detalis.marketing_survey_details.distractors' })}
          </Typography>
          <Box mt={1} className={classes.card} display="flex" alignItems="center" justifyContent="space-between">
            {Array.from({ length: 2 }).map((item, index) => (
              <Box display="flex" flexDirection="column" alignItems="center" mr={1}>
                <Typography variant="h6" color="textSecondary" className={classes.italic}>
                  {index + 9}
                </Typography>
                <Box className={classes.cardItem}>
                  {data.recommendation === index + 9 && <Box className={classes.checkmark} />}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
