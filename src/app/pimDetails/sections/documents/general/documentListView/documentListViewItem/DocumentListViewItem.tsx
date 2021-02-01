import React from 'react';
import clsx from 'clsx';
import { DateTime } from 'luxon';

import { Grid, Typography, ProgressFilling } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { ListOptionsMenu } from 'ui/molecules';

import { DocumentListViewItemProps } from './DocumentListViewItem.types';
import { useStyles } from './DocumentListViewItem.styles';

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
          <ListOptionsMenu id={id} onDeleteClick={() => onDelete?.()} hideEditButton>
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'pim_details.documents.menu.print',
              })}
              onClick={() => {
                onPrint?.();
              }}
            />
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'pim_details.documents.menu.lock_unlock',
              })}
              onClick={() => {
                onToggleLock?.();
              }}
            />
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'pim_details.documents.menu.send',
              })}
              onClick={() => {
                onSend?.();
              }}
            />
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'pim_details.documents.menu.copy',
              })}
              onClick={() => {
                onCopy?.();
              }}
            />
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'pim_details.documents.menu.archive',
              })}
              onClick={() => {
                onArchive?.();
              }}
            />
          </ListOptionsMenu>
        </div>
      </Grid>
    </>
  );
};
