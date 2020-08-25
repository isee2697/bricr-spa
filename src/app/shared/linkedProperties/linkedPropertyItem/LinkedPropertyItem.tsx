import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { AppRoute } from 'routing/AppRoute.enum';
import { Grid, Typography, Box, Chip, IconButton, Collapse, ProgressFilling, ColoredImage } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon, MenuIcon, BuildingIcon, WarningIcon } from 'ui/atoms/icons';
import { ListPim } from 'api/types';
import { PropertyStage } from 'ui/molecules';

import { useStyles } from './LinkedPropertyItem.styles';

export const LinkedPropertyItem = ({
  id,
  street,
  houseNumberPrefix,
  houseNumber,
  houseNumberAddition,
  constructionNumberPrefix,
  constructionNumber,
  constructionNumberAddition,
  city,
  dateCreated,
  livingArea,
  pictures,
  salePrice,
  rentPrice,
  completeness,
  archived,
  linkedObjectTypeIds,
  projectId,
  attentionNote,
}: ListPim & { projectId: string }) => {
  const { formatMessage, locale } = useLocale();
  const { push } = useHistory();
  const classes = useStyles();
  const [toggled, setToggled] = useState(false);

  const title = `${street} ${houseNumberPrefix ?? ''}${houseNumber}${houseNumberAddition ?? ''}${
    constructionNumber
      ? ` (${constructionNumberPrefix ?? ''}${constructionNumber}${constructionNumberAddition ?? ''})`
      : ''
  }, ${city}`;

  const stageItems = !archived
    ? ['Acquisition', 'Order', 'List up', 'Reactions', 'Bidding', 'Sign'].map(title => ({
        title,
      }))
    : undefined; // TODO: replace it with real transaction data

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ColoredImage
            className={classes.image}
            onClick={() =>
              push(
                AppRoute.linkedPropertyDetails
                  .replace(':projectId', projectId)
                  .replace(':objectTypeId', linkedObjectTypeIds?.[0] ?? '')
                  .replace(':id', id),
              )
            }
            src={pictures?.[0]?.file?.url || undefined}
            grayscale={archived ?? false}
            variant="blue"
          />
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item>
              <Typography className={classes.date} variant="h6">
                {DateTime.fromISO(dateCreated.toString()).toRelative({
                  locale,
                })}
              </Typography>
              <Typography className={classes.title} variant="h3">
                <BuildingIcon /> {title}
              </Typography>
              {livingArea && (
                <Typography className={classNames(classes.subTitle, 'first')} variant="h6">
                  {`${livingArea} ${formatMessage({ id: 'common.square_meters' })}`}
                </Typography>
              )}
            </Grid>
            <Grid className={classes.rightItem} item>
              <MenuIcon />
            </Grid>
          </Grid>
          <Box mb={1.5} />
          <Grid container>
            <Grid item container xs={9}>
              {salePrice && <Typography className={classes.discount}>€ {salePrice}</Typography>}
            </Grid>
            <Grid item className={classes.rightItem}>
              <Typography className={classes.status}>Wait for owner</Typography>
              {/* TODO change to proper values from backend*/}
            </Grid>
          </Grid>
          <Box mb={0.5} />
          <Grid container>
            <Grid item container xs={9}>
              {salePrice && (
                <Box mr={2}>
                  <Typography className={classes.price}>€ {salePrice}</Typography>
                </Box>
              )}
              {rentPrice && (
                <Typography>
                  € {rentPrice} {formatMessage({ id: 'projects.per_month' })}
                </Typography>
              )}
            </Grid>
            <Grid item className={classes.rightItem}>
              {salePrice && (
                <Box ml={1}>
                  <Chip size="small" color="primary" variant="outlined" label={formatMessage({ id: 'common.sale' })} />
                </Box>
              )}
              {rentPrice && (
                <Chip size="small" color="primary" variant="outlined" label={formatMessage({ id: 'common.rent' })} />
              )}
            </Grid>
          </Grid>
          <Box mb={1} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Typography className={classes.information} variant="h6">
            {formatMessage({ id: 'common.information_completed' })}
          </Typography>
          <ProgressFilling progress={completeness / 100} />
        </Grid>
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
        <Box width="100%" mt={3}>
          <div className={classes.collapse}>{formatMessage({ id: 'property_item.progress' })}</div>
          {stageItems !== undefined && <PropertyStage items={stageItems} activeItem={0} />}
        </Box>
      </Collapse>
    </>
  );
};
