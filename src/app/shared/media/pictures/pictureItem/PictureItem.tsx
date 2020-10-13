import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { Chip, Grid, Typography, Box, MenuItem } from 'ui/atoms';
import { ListOptionsMenu } from 'ui/molecules';
import { HomeIcon, SaleIcon } from 'ui/atoms/icons';
import { useGetPrivateFile, useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { getEntityFilesType, useUpdateImage } from '../Pictures.helpers';

import { PictureItemProps } from './PictureItem.types';
import { useStyles } from './PictureItem.styles';

export const PictureItem = ({
  picture,
  editing,
  checkbox,
  onEdit,
  customLabel,
  isSelected,
  isMainPicture,
}: PictureItemProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const { entityType } = useEntityType();
  const { data } = useGetPrivateFile(picture.file?.key || '', getEntityFilesType(entityType), picture.id);
  const classes = useStyles({ src: data?.signedUrl });
  const { save } = useUpdateImage(id);

  const handleEdit = () => {
    if (editing) {
      onEdit();
    }
  };

  return (
    <Grid container spacing={0} className={classNames(classes.container, isSelected && classes.selected)}>
      <Grid item xs={3}>
        <div className={classes.image}>
          {isMainPicture && <div className={classes.mainPicture}>{formatMessage({ id: 'common.main_picture' })}</div>}
          {checkbox}
        </div>
      </Grid>
      <Grid item xs={8}>
        <Box className={classes.content}>
          <Typography className={classNames(classes.title, !editing && classes.disabledText)} variant="h5">
            {picture.name ?? picture.file?.fileName}
          </Typography>
          <Typography variant="h5" className={classNames(classes.disabledText)}>
            {picture.description ?? formatMessage({ id: 'pim_details.media.pictures.description_placeholder' })}
          </Typography>
          {picture.type && (
            <Chip
              className={classes.chip}
              label={
                customLabel
                  ? customLabel.label
                  : formatMessage({ id: `dictionaries.media.picture.${picture.type}`, defaultMessage: ' ' })
              }
              variant="outlined"
              icon={customLabel && customLabel.icon ? (customLabel.icon as ReactElement) : <SaleIcon />}
              color="primary"
            />
          )}
        </Box>
      </Grid>
      <Grid item xs={1}>
        {editing && (
          <ListOptionsMenu onEditClick={handleEdit}>
            <MenuItem disabled={isMainPicture} onClick={() => save({ ...picture, isMainPicture: true })}>
              <HomeIcon />
              {formatMessage({ id: 'common.set_main_picture' })}
            </MenuItem>
          </ListOptionsMenu>
        )}
      </Grid>
    </Grid>
  );
};
