import React from 'react';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography, Grid } from 'ui/atoms';
import { MeterIcon, MutationIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './OutsideSpaces.styles';

export const OutsideSpaces = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">
              {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.title' })}
            </Typography>
            <Counter count={5} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        <FormSubSection
          title={
            <>
              <Typography variant="h4" className={classes.detailPanelIndex}>
                1
              </Typography>
              <Typography variant="h3">Garden back</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.type_of_garden' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <MutationIcon className={classes.detailItemIcon} /> Patro/atrium
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.quality_of_garden' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <MutationIcon className={classes.detailItemIcon} /> Beautifully constructed
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.location' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <MutationIcon className={classes.detailItemIcon} /> North, West
            </Typography>
          </Box>
          <Box className={classes.detailItem}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.shape_of_garden' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              <MutationIcon className={classes.detailItemIcon} /> Rectangle
            </Typography>
          </Box>
          <Grid container spacing={1} className={classes.detailItem}>
            <Grid item xs={6}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.length' })}
              </Typography>
              <Typography variant="h4" className={classes.detailItemValue}>
                12 <MeterIcon className={classes.detailItemIconSmall} />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.width' })}
              </Typography>
              <Typography variant="h4" className={classes.detailItemValue}>
                9 <MeterIcon className={classes.detailItemIconSmall} />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.surface' })}
              </Typography>
              <Typography variant="h4" className={classes.detailItemValue}>
                453 <SquareMeterIcon className={classes.detailItemIconSmall} />
              </Typography>
            </Grid>
          </Grid>
        </FormSubSection>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.detailPanelIndex}>
                1
              </Typography>
              <Typography variant="h3">Garden front</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          Garden front content
        </FormSubSection>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.detailPanelIndex}>
                1
              </Typography>
              <Typography variant="h3">Garage 1</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          Garage 1 content
        </FormSubSection>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.detailPanelIndex}>
                1
              </Typography>
              <Typography variant="h3">Garage 2</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          Garage 2 content
        </FormSubSection>
      </CardContent>
    </Card>
  );
};
