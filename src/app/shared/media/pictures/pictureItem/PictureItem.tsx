import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { Chip, Grid, Typography, IconButton, Box, Menu, MenuItem } from 'ui/atoms';
import { DeleteIcon, EditIcon, HomeIcon, MenuIcon, SaleIcon } from 'ui/atoms/icons';
import { useGetPrivateFile, useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { getEntityFilesType, useUpdateImage } from '../Pictures.helpers';

import { PictureItemProps } from './PictureItem.types';
import { useStyles } from './PictureItem.styles';

export const PictureItem = ({ picture, editing, checkbox, onEdit, customLabel, isSelected }: PictureItemProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const { entityType } = useEntityType();
  const { data } = useGetPrivateFile(picture.file?.key || '', getEntityFilesType(entityType), picture.id);
  const classes = useStyles({ src: data?.signedUrl });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { save } = useUpdateImage(id);
  console.log(entityType);
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
          <>
            <Box display="flex" justifyContent="flex-end" padding={0.5}>
              <IconButton onClick={e => setAnchorEl(e.currentTarget)} data-testid="edit-picture-button">
                <MenuIcon />
              </IconButton>
            </Box>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              offsetRight={12}
            >
              <MenuItem onClick={() => save({ ...picture, isMainPicture: true, signedUrl: '' })}>
                {/*<IconButton data-testid="edit-picture-button">*/}
                <HomeIcon />
                {/*</IconButton>{' '}*/}
                Set main picture
              </MenuItem>
              <MenuItem onClick={handleEdit}>
                {/*<IconButton data-testid="edit-picture-button">*/}
                <EditIcon />
                {/*</IconButton>{' '}*/}
                Edit
              </MenuItem>
              <MenuItem disabled onClick={handleEdit}>
                {/*<IconButton data-testid="edit-picture-button">*/}
                <DeleteIcon />
                {/*</IconButton>{' '}*/}
                Delete
              </MenuItem>
            </Menu>
          </>
        )}
      </Grid>
    </Grid>
  );
};
