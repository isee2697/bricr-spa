import React from 'react';

import { Box, Grid, TextField, TileRadio, Typography } from 'ui/atoms';
import { MarketingSurveyType } from 'app/crmMarketingSurveyDetails/MarketingSurveyDetails.types';
import { SquareIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { GeneralProps } from './General.types';
import { useStyles } from './General.styles';

export const General = ({ data }: GeneralProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1}>
        {Object.keys(MarketingSurveyType).map(type => (
          <Grid key={type} item xs={2}>
            <TileRadio
              onClick={() => {}}
              isSelected={data.surveyType === type}
              title={formatMessage({ id: `dictionaries.marketing_survey_type.${type}` })}
              isDisabled
            >
              <SquareIcon />
            </TileRadio>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box width="50%">
          <TextField
            name="note"
            label={formatMessage({ id: 'crm.details.marketing_survey_detalis.version' })}
            variant="outlined"
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="h5">
            {formatMessage({ id: 'crm.details.marketing_survey_detilas.average_score' })}
          </Typography>
          <Box ml={3} />
          <Typography variant="h2" className={classes.score}>
            {data.score}
          </Typography>
        </Box>
      </Box>
      <TextField
        name="note"
        label={formatMessage({ id: 'crm.details.marketing_survey_detalis.note' })}
        variant="outlined"
        margin="normal"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  );
};
