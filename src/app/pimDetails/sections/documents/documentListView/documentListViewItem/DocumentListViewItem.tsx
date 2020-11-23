import React, { useState, ReactElement } from 'react';
import clsx from 'clsx';
import { DateTime } from 'luxon';

import { Grid, Typography, Box, IconButton, ProgressFilling, MenuItem, Menu } from 'ui/atoms';
import { useLocale } from 'hooks';
import { MenuIcon, HistoryIcon, DeleteIcon } from 'ui/atoms/icons';

import { DocumentListViewItemProps } from './DocumentListViewItem.types';
import { useStyles } from './DocumentListViewItem.styles';

type SubMenuItemType = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactElement;
};

const SubMenuItem = ({ title, onClick, icon }: SubMenuItemType) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.menuItem}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {icon ?? <HistoryIcon classes={{ root: classes.menuIcon }} />}
      <Box ml={2}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </MenuItem>
  );
};

export const DocumentListViewItem = ({
  id,
  dateCreated,
  versionNumber,
  documentKind,
  contractAddress,
  price,
  sellers,
  buyer,
  completeness,
  onClick,
  onPrint,
  onToggleLock,
  onSend,
  onCopy,
  onArchive,
  onDelete,
}: DocumentListViewItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <Grid container className={classes.root} wrap="wrap" spacing={2} onClick={() => onClick?.(documentKind, id)}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h3" component="span" className={classes.boldText}>
            {formatMessage({ id: 'pim_details.documents.version' })} {versionNumber}
          </Typography>{' '}
          <Typography variant="h3" component="span" className={classes.date}>
            {DateTime.fromJSDate(new Date(dateCreated))?.toFormat('dd-MM-yyyy') || ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <Typography variant="h5" component="span" className={classes.boldText}>
            {documentKind}
          </Typography>{' '}
          <Typography variant="h5" component="span">
            {contractAddress}
          </Typography>
          <Typography variant="h5">€ {price}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" className={classes.grayText}>
            {formatMessage({ id: 'pim_details.documents.sellers' })}
          </Typography>
          {sellers.map(item => (
            <Typography variant="h5" className={classes.boldText}>
              {item}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" className={classes.grayText}>
            {formatMessage({ id: 'pim_details.documents.buyer' })}
          </Typography>
          <Typography variant="h5" className={classes.boldText}>
            {buyer}
          </Typography>
        </Grid>
        {completeness && (
          <Grid item xs={12} sm={6} md={4}>
            <Typography className={classes.information} variant="h6">
              {formatMessage({ id: 'common.information_completed' })}{' '}
              <Typography variant="h6" component="span" className={clsx(classes.boldText, classes.information)}>
                {completeness}%
              </Typography>
            </Typography>
            <ProgressFilling progress={completeness / 100} />
          </Grid>
        )}
        <div className={classes.menu}>
          <IconButton
            className="menu-icon"
            variant="rounded"
            size="small"
            selected={Boolean(menuEl)}
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu id={id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
            <SubMenuItem
              title={formatMessage({
                id: 'pim_details.documents.menu.print',
              })}
              onClick={() => {
                onPrint?.();
                onMenuClose();
              }}
            />
            <SubMenuItem
              title={formatMessage({
                id: 'pim_details.documents.menu.lock_unlock',
              })}
              onClick={() => {
                onToggleLock?.();
                onMenuClose();
              }}
            />
            <SubMenuItem
              title={formatMessage({
                id: 'pim_details.documents.menu.send',
              })}
              onClick={() => {
                onSend?.();
                onMenuClose();
              }}
            />
            <SubMenuItem
              title={formatMessage({
                id: 'pim_details.documents.menu.copy',
              })}
              onClick={() => {
                onCopy?.();
                onMenuClose();
              }}
            />
            <SubMenuItem
              title={formatMessage({
                id: 'pim_details.documents.menu.archive',
              })}
              onClick={() => {
                onArchive?.();
                onMenuClose();
              }}
            />
            <SubMenuItem
              title={formatMessage({
                id: 'common.delete',
              })}
              onClick={() => {
                onDelete?.();
                onMenuClose();
              }}
              icon={<DeleteIcon color="secondary" />}
            />
          </Menu>
        </div>
      </Grid>
    </>
  );
};
