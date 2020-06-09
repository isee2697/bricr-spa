import React from 'react';
import classNames from 'classnames';

import { Grid, Typography } from 'ui/atoms';
import { EditIcon } from 'ui/atoms/icons';

import { PictureItemProps } from './PictureItem.types';
import { useStyles } from './PictureItem.styles';

export const PictureItem = ({ picture, editing, checkbox, onSelect }: PictureItemProps) => {
  const classes = useStyles({ src: picture.image.url });

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
            {picture.title}
            <EditIcon />
          </Typography>
          <Typography variant="h5" className={classNames(!editing && classes.disabledText)}>
            {picture.description}
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
};
