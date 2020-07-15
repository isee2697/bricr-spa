import React, { ReactElement } from 'react';
import classNames from 'classnames';

import { Chip, Grid, Typography, IconButton, Box } from 'ui/atoms';
import { EditIcon, SaleIcon } from 'ui/atoms/icons';
import { useGetPrivateFile, useLocale } from 'hooks';
import { EntityWithFiles } from 'api/types';

import { PictureItemProps } from './PictureItem.types';
import { useStyles } from './PictureItem.styles';

export const PictureItem = ({ picture, editing, checkbox, onEdit, customLabel, isSelected }: PictureItemProps) => {
  const { formatMessage } = useLocale();
  const { data } = useGetPrivateFile(picture.file?.key || '', EntityWithFiles.NcpMediaPicture, picture.id);
  const classes = useStyles({ src: data?.signedUrl });

  const handleEdit = () => {
    if (editing) {
      onEdit();
    }
  };

  return (
    <Grid container spacing={0} className={classNames(classes.container, isSelected && classes.selected)}>
      <Grid item xs={3}>
        <div className={classes.image}> {checkbox} </div>
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
          <Box display="flex" justifyContent="flex-end" padding={0.5}>
            <IconButton onClick={handleEdit} data-testid="edit-picture-button">
              <EditIcon />
            </IconButton>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};
