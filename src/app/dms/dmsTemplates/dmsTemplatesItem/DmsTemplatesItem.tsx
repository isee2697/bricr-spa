import React from 'react';
import { DateTime } from 'luxon';
import clsx from 'clsx';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Typography, Chip, Avatar, Emoji } from 'ui/atoms';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { DmsTemplatesItemProps } from './DmsTemplatesItem.types';
import { useStyles } from './DmsTemplatesItem.styles';

export const DmsTemplatesItem = ({ template, onStatusChange, category }: DmsTemplatesItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles(template);
  const { id, templateName, published, meta, isActive, labels, tags } = template;
  const avatar = 'https://source.unsplash.com/featured/?map';

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <Box display="flex">
        <Box position="relative" className={classes.imageWrapper}>
          <Avatar variant="rounded" src={avatar} className={classes.image}>
            {!avatar && <Emoji>{'📷'}</Emoji>}
          </Avatar>

          {!!isActive && (
            <Box className={classes.inactiveWrapper}>
              <Chip
                color="secondary"
                label={formatMessage({
                  id: 'dms.templates.inactive',
                })}
                className={classes.inactiveChip}
                size="small"
              />
            </Box>
          )}
        </Box>
        <Box width="100%" display="flex" flexDirection="column" alignItems="space-between">
          <Box display="flex" justifyContent="space-between" mb={2}>
            <div>
              <Typography className={classes.date}>{DateTime.fromISO(meta?.createdAt).toLocaleString()}</Typography>
              <Typography className={classes.title}>{templateName}</Typography>
              <Box mt={2}>
                {labels?.length
                  ? labels.map(label => (
                      <Box component="span" key={label} mr={2}>
                        <Chip variant="outlined" color="primary" label={label} size="small" />
                      </Box>
                    ))
                  : null}
              </Box>
            </div>
            <div>
              <ListOptionsMenu
                id={`dms-template-item-menu-${id}`}
                hideDeleteButton={category === 'bricr'}
                hideEditButton
              >
                <ListOptionsMenuItem
                  title={formatMessage({
                    id: 'dms.templates.clone',
                  })}
                />
                <ListOptionsMenuItem
                  title={formatMessage({
                    id: 'dms.templates.active_inactive',
                  })}
                  onClick={() => {
                    onStatusChange(published === true ? 'inactive' : 'active');
                  }}
                />
              </ListOptionsMenu>
            </div>
          </Box>
          <Box display="flex" className={classes.stats}>
            {tags?.map(({ name, amount }) => (
              <Box
                display="flex"
                flexDirection="column"
                className={clsx(classes.statItem, !amount && 'disabled')}
                key={name}
              >
                <Typography className={classes.statInfo}>{amount ?? '-'}</Typography>
                <Typography className={classes.statLabel}>
                  {formatMessage({ id: `dms.templates.stats.${name.toLowerCase()}` })}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
