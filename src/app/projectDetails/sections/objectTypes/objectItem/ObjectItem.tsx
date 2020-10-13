import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { useParams } from 'react-router';
import { AppRoute } from 'routing/AppRoute.enum';
import { Grid, Typography, Box, Chip, IconButton, Collapse, ProgressFilling, ColoredImage, InfoItem } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon, ComplexBuildingIcon, MenuIcon, WarningIcon } from 'ui/atoms/icons';
import { ListObjectTypes } from 'api/types';

import { useStyles } from './ObjectItem.styles';

export const ObjectItem = ({
  id,
  dateCreated,
  mainPicture,
  name,
  areaRangeFrom,
  areaRangeTo,
  numberOfRoomsFrom,
  numberOfRoomsTo,
  archived,
  completeness,
  salePriceFrom,
  salePriceTo,
  rentPriceFrom,
  rentPriceTo,
  matches,
  interests,
  propertiesAvailable,
  propertiesConnected,
  soldOrRent,
  underOption,
  attentionNote,
}: ListObjectTypes) => {
  const { formatMessage, locale } = useLocale();
  const { push } = useHistory();
  const { id: projectId } = useParams<{ id: string }>();
  const classes = useStyles();
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ColoredImage
            className={classes.image}
            onClick={() => push(AppRoute.objectTypeDetails.replace(':projectId', projectId).replace(':id', id))}
            src={mainPicture?.file?.url ?? undefined}
            grayscale={archived ?? false}
            variant="purple"
          />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item>
              <Typography className={classes.date} variant="h6">
                {DateTime.fromISO(dateCreated.toString()).toRelative({
                  locale,
                })}
              </Typography>
              <Typography className={classes.title} variant="h3">
                <ComplexBuildingIcon /> {name}
              </Typography>
              {areaRangeFrom && areaRangeTo && (
                <Typography className={classNames(classes.subTitle, 'first')} variant="h6">
                  {`${areaRangeFrom} - ${areaRangeTo} ${formatMessage({ id: 'common.square_meters' })}`}
                </Typography>
              )}
              {numberOfRoomsFrom && numberOfRoomsTo && (
                <Typography
                  className={classes.subTitle}
                  variant="h6"
                >{` ${numberOfRoomsFrom} - ${numberOfRoomsTo} ${formatMessage({ id: 'common.rooms' })}`}</Typography>
              )}
            </Grid>
            <Grid className={classes.rightItem} item>
              <MenuIcon />
            </Grid>
          </Grid>
          <Box mb={7.5} />
          {salePriceFrom && salePriceTo && (
            <Grid container>
              <Grid item>
                <Typography className={classes.price}>
                  € {salePriceFrom} - {salePriceTo}
                </Typography>
              </Grid>
              <Grid item className={classes.rightItem}>
                <Chip size="small" color="primary" variant="outlined" label={formatMessage({ id: 'common.sale' })} />
              </Grid>
            </Grid>
          )}
          <Box mb={1} />
          {rentPriceFrom && rentPriceTo && (
            <Grid container>
              <Grid item>
                <Typography>
                  € {rentPriceFrom} - {rentPriceTo} {formatMessage({ id: 'projects.per_month' })}
                </Typography>
              </Grid>
              <Grid item className={classes.rightItem}>
                <Chip size="small" color="primary" variant="outlined" label={formatMessage({ id: 'common.rent' })} />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Typography className={classes.information} variant="h6">
            {formatMessage({ id: 'common.information_completed' })}
          </Typography>
          <ProgressFilling progress={completeness / 100} />
        </Grid>
        {attentionNote && (
          <Grid item>
            <Box className={classes.warning}>
              <WarningIcon /> {attentionNote}
            </Box>
          </Grid>
        )}
        <Grid onClick={() => setToggled(prevState => !prevState)} className={classes.rightItem} item>
          <IconButton>{toggled ? <ArrowUpIcon /> : <ArrowDownIcon />}</IconButton>
          <Typography className={classes.grayText} variant="h5">
            {formatMessage({ id: toggled ? 'projects.hide' : 'projects.show_more' })}
          </Typography>
        </Grid>
      </Grid>
      <Collapse in={toggled}>
        <Grid container className={classes.extraInformation}>
          <InfoItem xs={2} amount={matches} labelId="projects.matches" />
          <InfoItem xs={2} amount={interests} labelId="projects.interests" />
          <InfoItem xs={2} color="red" amount={propertiesAvailable} labelId="projects.available" />
          <InfoItem xs={2} color="orange" amount={underOption} labelId="projects.under_option" />
          <InfoItem xs={2} color="green" amount={soldOrRent} labelId="projects.sold_or_rent" />
          <InfoItem xs={2} amount={propertiesConnected} labelId="projects.properties" />
        </Grid>
      </Collapse>
    </>
  );
};
