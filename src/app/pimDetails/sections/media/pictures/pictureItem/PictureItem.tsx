import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { Chip, Grid, Typography } from 'ui/atoms';
import { EditIcon, SaleIcon } from 'ui/atoms/icons';
import { useGetPrivateFile, useLocale } from 'hooks';
import { EntityWithFiles } from 'api/types';

import { PictureItemProps } from './PictureItem.types';
import { useStyles } from './PictureItem.styles';

export const PictureItem = ({ picture, editing, checkbox, onSelect, customLabel }: PictureItemProps) => {
  const { formatMessage } = useLocale();
  const { data } = useGetPrivateFile(picture.file?.key || '', EntityWithFiles.MediaPicture, picture.id);
  const classes = useStyles({ src: data?.signedUrl });

  const handleOnClick = () => {
    if (editing) {
      onSelect();
    }
  };

  return (
    <Grid
      container
      spacing={0}
      className={classNames(classes.container, editing && classes.active)}
      data-testid="picture-item"
      onClick={handleOnClick}
    >
      <Grid xs={3} item>
        <div className={classes.image}> {checkbox} </div>
      </Grid>
      <Grid xs={9} item>
        <div className={classes.content}>
          <Typography className={classNames(classes.title, !editing && classes.disabledText)} variant="h5">
            {picture.name ?? picture.file?.fileName}
            <EditIcon />
          </Typography>
          <Typography variant="h5" className={classNames(classes.disabledText)}>
            {picture.description}
          </Typography>
          {picture.type && (
            <Chip
              label={
                customLabel ? customLabel.label : formatMessage({ id: `dictionaries.media.picture.${picture.type}` })
              }
              variant="outlined"
              icon={customLabel && customLabel.icon ? (customLabel.icon as ReactElement) : <SaleIcon />}
              color="primary"
              className={classes.chip}
            />
          )}
        </div>
      </Grid>
    </Grid>
  );
};
