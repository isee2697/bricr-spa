import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { DateTime } from 'luxon';
import clsx from 'clsx';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Avatar, Box, Typography, Emoji, IconButton, Chip, Menu, MenuItem, Checkbox } from 'ui/atoms';
import { MenuIcon, EditIcon } from 'ui/atoms/icons';

import { DmsTemplatesItemProps } from './DmsTemplatesItem.types';
import { useStyles } from './DmsTemplatesItem.styles';

export const DmsTemplatesItem = ({ template, onStatusChange }: DmsTemplatesItemProps) => {
  const { formatMessage } = useLocale();
  const intl = useIntl();
  const classes = useStyles(template);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const { id, name, createdAt, avatar, labels, meta, status } = template;

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <Box display="flex">
        <Box position="relative" className={classes.imageWrapper}>
          <Avatar variant="rounded" src={avatar} className={classes.image}>
            {!avatar && <Emoji>{'📷'}</Emoji>}
          </Avatar>
          {status === 'inactive' && (
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
              <Typography className={classes.date}>
                {DateTime.fromISO(new Date(createdAt.toString()).toISOString()).toRelative({
                  locale: intl.locale,
                })}
              </Typography>
              <Typography className={classes.title}>{name}</Typography>
              <Box mt={2}>
                {labels.length
                  ? labels.map(label => (
                      <Box component="span" key={label} mr={2}>
                        <Chip variant="outlined" color="primary" label={label} size="small" />
                      </Box>
                    ))
                  : null}
              </Box>
            </div>
            <div>
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
                <MenuItem
                  className={classes.menuItem}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                    onStatusChange(status === 'active' ? 'inactive' : 'active');
                  }}
                >
                  <EditIcon classes={{ root: classes.menuIcon }} />
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({
                        id: 'dms.templates.inactive',
                      })}
                    </Typography>
                  </Box>
                  <Box ml="auto">
                    <Checkbox color="primary" checked={status === 'active'} name="checkedA" />
                  </Box>
                </MenuItem>
              </Menu>
            </div>
          </Box>
          <Box display="flex" className={classes.stats}>
            {Object.entries(meta).map(([key, value], index) => (
              <Box
                display="flex"
                flexDirection="column"
                className={clsx(classes.statItem, !value && 'disabled')}
                key={index}
              >
                <Typography className={classes.statInfo}>{value}</Typography>
                <Typography className={classes.statLabel}>
                  {formatMessage({ id: `dms.templates.stats.${key}` })}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
