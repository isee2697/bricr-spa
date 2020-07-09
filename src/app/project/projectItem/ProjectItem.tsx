import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { AppRoute } from '../../../routing/AppRoute.enum';
import {
  Grid,
  Typography,
  CircularStatus,
  Box,
  Chip,
  IconButton,
  Collapse,
  ProgressFilling,
  ColoredImage,
  InfoItem,
} from 'ui/atoms';
import { ProjectData } from '../Project.types';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon, MenuIcon, NewConstructionIcon, WarningIcon } from 'ui/atoms/icons';

import { useStyles } from './ProjectItem.styles';

export const ProjectItem = ({
  id,
  dateCreated,
  name,
  measurements,
  mainImage,
  amountOfProperties,
  soldProperties,
  rentedProperties,
  logo,
  prices,
  amountOfPhases,
  amountOfCandidates,
  amountOfInterests,
  amountOfMatches,
  amountOfObjectTypes,
  amountOfOptands,
  availableProperties,
  underOptionProperties,
}: ProjectData) => {
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const classes = useStyles();
  const daysAgo = Math.round(-DateTime.fromISO(dateCreated).diffNow('day').days);
  const percentage = (soldProperties / amountOfProperties) * 100;
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <Grid container>
        <Grid item>
          <Typography className={classes.date} variant="h6">
            {daysAgo} {formatMessage({ id: 'common.days_ago' })}
          </Typography>
          <Typography className={classes.title} variant="h3">
            <NewConstructionIcon /> {name}
          </Typography>
          <Typography className={classes.subTitle} variant="h6">
            {measurements?.surfaceFrom &&
              measurements.surfaceTo &&
              `${measurements.surfaceFrom} - ${measurements.surfaceTo} ${formatMessage({
                id: 'common.square_meters',
              })}`}
            {measurements?.roomsFrom &&
              measurements?.roomsTo &&
              ` ${measurements.roomsFrom} - ${measurements.roomsTo} ${formatMessage({ id: 'common.rooms' })}`}
          </Typography>
        </Grid>
        <Grid className={classes.rightItem} item>
          <MenuIcon />
        </Grid>
      </Grid>
      <ColoredImage
        className={classes.image}
        onClick={() => push(AppRoute.projectDetails.replace(':id', id))}
        src={mainImage}
        variant="green"
      >
        <Grid item style={{ backgroundImage: `url(${logo})` }} className={classes.logo}></Grid>
        <Grid className={classes.stats} item>
          <Grid container justify="center">
            <Typography className={classes.statsText} variant="h6">
              {formatMessage({ id: 'projects.sold_properties' })}
            </Typography>
            <Box mb={3}>
              <CircularStatus value={percentage} />
            </Box>
            <Typography className={classes.statsText} variant="h6">
              {soldProperties} / {amountOfProperties}
            </Typography>
          </Grid>
        </Grid>
      </ColoredImage>
      <Grid container spacing={3}>
        <Grid item>
          {prices.saleFrom && prices.saleTo && (
            <Typography className={classes.price}>
              € {prices.saleFrom} - {prices.saleTo}
            </Typography>
          )}
        </Grid>
        <Grid item className={classes.price}>
          {prices.rentFrom && prices.rentTo && (
            <Typography>
              € {prices.rentFrom} - {prices.rentTo} {formatMessage({ id: 'projects.per_month' })}
            </Typography>
          )}
        </Grid>
        <Grid className={classes.rightItem} item>
          {(prices.saleFrom || prices.saleTo) && (
            <Chip size="small" color="primary" variant="outlined" label={formatMessage({ id: 'common.sale' })} />
          )}
          {(prices.rentFrom || prices.rentTo) && (
            <Chip size="small" color="primary" variant="outlined" label={formatMessage({ id: 'common.rent' })} />
          )}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {amountOfPhases && (
          <Grid item>
            <Typography>
              {`${formatMessage({ id: 'projects.part_of' })} ${amountOfPhases} ${formatMessage({
                id: 'projects.phases',
              })}`}
            </Typography>
          </Grid>
        )}
        <Grid item>
          <Box className={classes.warning}>
            <WarningIcon /> {formatMessage({ id: 'projects.no_more_scheduling' })}
          </Box>
        </Grid>
        <Grid onClick={() => setToggled(prevState => !prevState)} className={classes.rightItem} item>
          <IconButton>{toggled ? <ArrowUpIcon /> : <ArrowDownIcon />}</IconButton>
          <Typography className={classes.grayText} variant="h5">
            {formatMessage({ id: toggled ? 'projects.hide' : 'projects.show_more' })}
          </Typography>
        </Grid>
      </Grid>
      <Collapse in={toggled}>
        <Grid container className={classes.extraInformation}>
          <Grid item xs={6}>
            <Typography className={classes.information} variant="h6">
              {formatMessage({ id: 'common.information_completed' })}
            </Typography>
            <ProgressFilling progress={0.7} />
          </Grid>
          <InfoItem xs={2} color="red" amount={availableProperties} labelId="projects.available" />
          <InfoItem xs={2} color="orange" amount={underOptionProperties} labelId="projects.under_option" />
          <InfoItem xs={2} color="green" amount={soldProperties + rentedProperties} labelId="projects.sold_or_rent" />
        </Grid>
        <Grid container className={classes.extraInformation}>
          <InfoItem xs={2} amount={amountOfMatches} labelId="projects.matches" />
          <InfoItem xs={2} amount={amountOfInterests} labelId="projects.interests" />
          <InfoItem xs={2} amount={amountOfCandidates} labelId="projects.candidates" />
          <InfoItem xs={2} amount={amountOfOptands} labelId="projects.optands" />
          <InfoItem xs={2} amount={amountOfProperties} labelId="projects.properties" />
          <InfoItem xs={2} amount={amountOfObjectTypes} labelId="projects.objecttypes" />
        </Grid>
      </Collapse>
    </>
  );
};
