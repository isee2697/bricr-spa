import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
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
  MenuItem,
} from 'ui/atoms';
import { useLocale, useModalDispatch } from 'hooks';
import { ArchiveIcon, ArrowDownIcon, ArrowUpIcon, HistoryIcon, NewConstructionIcon, WarningIcon } from 'ui/atoms/icons';
import { ListOptionsMenu } from 'ui/molecules';
import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';

import { ProjectItemProps } from './ProjectItem.types';
import { useStyles } from './ProjectItem.styles';

export const ProjectItem = ({
  id,
  dateCreated,
  areaRangeFrom,
  areaRangeTo,
  numberOfRoomsFrom,
  numberOfRoomsTo,
  logoPicture,
  mainPicture,
  name,
  salePriceFrom,
  salePriceTo,
  rentPriceFrom,
  rentPriceTo,
  partOfPhase,
  completeness,
  available,
  underOption,
  soldOrRent,
  matches,
  interests,
  candidates,
  optants,
  properties,
  objectTypesCount,
  archived,
  attentionNote,
  onDelete,
  onArchive,
}: ProjectItemProps) => {
  const { formatMessage, locale } = useLocale();
  const { push } = useHistory();
  const classes = useStyles();
  const { open } = useModalDispatch();
  const [toggled, setToggled] = useState(false);
  const percentage = soldOrRent && properties ? (soldOrRent / properties) * 100 : 0;

  const goToItem = (edit?: boolean) => {
    push(`${AppRoute.projectDetails.replace(':id', id)}${!!edit ? '/general' : ''}`, {
      newlyAdded: !!edit,
    });
  };

  return (
    <>
      <Grid container>
        <Grid item>
          <Typography className={classes.date} variant="h6">
            {DateTime.fromISO(dateCreated.toString()).toRelative({
              locale: locale,
            })}
          </Typography>
          <Typography className={classes.title} variant="h3">
            <NewConstructionIcon /> {name}
          </Typography>
          <Typography className={classes.subTitle} variant="h6">
            {areaRangeFrom &&
              areaRangeTo &&
              `${areaRangeFrom} - ${areaRangeTo} ${formatMessage({
                id: 'common.square_meters',
              })}`}
            {numberOfRoomsFrom &&
              numberOfRoomsTo &&
              ` ${numberOfRoomsFrom} - ${numberOfRoomsTo} ${formatMessage({ id: 'common.rooms' })}`}
          </Typography>
        </Grid>
        <Grid className={classes.rightItem} item>
          <ListOptionsMenu onEditClick={() => goToItem(true)} onDeleteClick={onDelete}>
            <MenuItem
              onClick={() => {
                open('move-pim-item', { propertyCategory: PropertyCategory.PROJECT });
              }}
            >
              <HistoryIcon />
              <Typography>{formatMessage({ id: 'projects.move_ncp' })}</Typography>
            </MenuItem>
            {!archived && (
              <MenuItem onClick={() => onArchive()} data-testid="delete-option-button">
                <ArchiveIcon />
                <Typography>{formatMessage({ id: 'projects.archive' })}</Typography>
              </MenuItem>
            )}
          </ListOptionsMenu>
        </Grid>
      </Grid>
      <ColoredImage
        className={classes.image}
        onClick={() => goToItem()}
        src={mainPicture?.file?.url || undefined}
        grayscale={archived}
        variant="green"
      >
        {logoPicture?.url && (
          <Grid item style={{ backgroundImage: `url(${logoPicture?.url})` }} className={classes.logo} />
        )}
        <Grid className={classes.stats} item>
          <Grid container justify="center">
            <Typography className={classes.statsText} variant="h6">
              {formatMessage({ id: 'projects.sold_properties' })}
            </Typography>
            <Box mb={3}>
              <CircularStatus value={percentage} />
            </Box>
            <Typography className={classes.statsText} variant="h6">
              {soldOrRent ?? 0} / {properties ?? 0}
            </Typography>
          </Grid>
        </Grid>
      </ColoredImage>
      <Grid container spacing={3}>
        <Grid item>
          {salePriceFrom && salePriceTo && (
            <Typography className={classes.price}>
              € {salePriceFrom} - {salePriceTo}
            </Typography>
          )}
        </Grid>
        <Grid item className={classes.price}>
          {rentPriceFrom && rentPriceTo && (
            <Typography>
              € {rentPriceFrom} - {rentPriceTo} {formatMessage({ id: 'projects.per_month' })}
            </Typography>
          )}
        </Grid>
        <Grid className={classes.rightItem} item>
          {(salePriceFrom || salePriceTo) && (
            <Chip size="small" color="primary" variant="outlined" label={formatMessage({ id: 'common.sale' })} />
          )}
          {(rentPriceFrom || rentPriceTo) && (
            <Chip size="small" color="primary" variant="outlined" label={formatMessage({ id: 'common.rent' })} />
          )}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {!!partOfPhase && (
          <Grid item>
            <Typography>
              {`${formatMessage({ id: 'projects.part_of' })} ${partOfPhase} ${formatMessage({
                id: 'projects.phases',
              })}`}
            </Typography>
          </Grid>
        )}
        {!!attentionNote && (
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
          <Grid item xs={6}>
            <Typography className={classes.information} variant="h6">
              {formatMessage({ id: 'common.information_completed' })}
            </Typography>
            <ProgressFilling progress={completeness / 100} />
          </Grid>
          <InfoItem xs={2} color="red" amount={available} labelId="projects.available" />
          <InfoItem xs={2} color="orange" amount={underOption} labelId="projects.under_option" />
          <InfoItem xs={2} color="green" amount={soldOrRent} labelId="projects.sold_or_rent" />
        </Grid>
        <Grid container className={classes.extraInformation}>
          <InfoItem xs={2} amount={matches} labelId="projects.matches" />
          <InfoItem xs={2} amount={interests} labelId="projects.interests" />
          <InfoItem xs={2} amount={candidates} labelId="projects.candidates" />
          <InfoItem xs={2} amount={optants} labelId="projects.optands" />
          <InfoItem xs={2} amount={properties} labelId="projects.properties" />
          <InfoItem xs={2} amount={objectTypesCount} labelId="projects.objecttypes" />
        </Grid>
      </Collapse>
    </>
  );
};
