import React, { ReactElement, useState } from 'react';
import clsx from 'classnames';

import { Box, Avatar, Emoji, Typography, IconButton, Chip, MenuItem, Menu } from 'ui/atoms';
import { useLocale } from 'hooks';
import { HistoryIcon, MenuIcon } from 'ui/atoms/icons';
import { NvmItemStatus } from '../PimNvm.types';

import { NvmSearchItemProps } from './NvmSearch.types';
import { useStyles } from './NvmSearchItem.styles';

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

export const NvmSearchItem = ({
  item: { id, image, price, properties, address, date, labels, rooms, size, status },
  checkbox,
  checked,
}: NvmSearchItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
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
      <Box key={id} className={clsx(classes.row, { [classes.rowChecked]: checked })}>
        {checkbox}
        <Box component="span" className={classes.rowItem} display="flex" alignItems="flex-start">
          <Avatar variant="rounded" src={image || ''} className={classes.image}>
            {!image && <Emoji>{'📷'}</Emoji>}
          </Avatar>
          <Box width="100%">
            <Box>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Typography variant="h6" color="textSecondary">
                    2 days ago
                  </Typography>
                  <Typography variant="h3" className={classes.fontWeightBold}>
                    {address}
                  </Typography>
                  <Box display="flex" flexWrap alignItems="flex-end">
                    <Typography variant="h6" className={classes.fontWeightBold} color="textSecondary">
                      90 m<sup>2</sup>
                    </Typography>
                    <Box ml={2}>
                      <Typography variant="h6" className={classes.fontWeightBold} color="textSecondary">
                        {formatMessage({ id: 'nvm.rooms' }, { rooms })}
                      </Typography>
                    </Box>
                    {properties.map((property, index) => (
                      <Box ml={2}>
                        <Typography variant="h6" key={index} className={classes.fontWeightBold} color="textSecondary">
                          {formatMessage({ id: 'dictionaries.property_type' }, { type: property })}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <IconButton size="small" variant="rounded" onClick={onMenuClick}>
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Box>
                  <Typography variant="h5" color="textSecondary" className={classes.oldPrice}>
                    {price.original && `€ ${price.original}`}
                  </Typography>
                  <Box display="flex">
                    <Typography variant="h3" color="textSecondary" className={classes.fontWeightBold}>
                      € {price.new}
                    </Typography>
                    <Typography variant="h3">{price.perMonth && `€ ${price.perMonth} p/m`}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Box
                    className={clsx(
                      classes.status,
                      status === NvmItemStatus.WaitForOwner ||
                        status === NvmItemStatus.ProcessReactions ||
                        status === NvmItemStatus.PriceChange
                        ? 'orange'
                        : status === NvmItemStatus.SignContract || status === NvmItemStatus.Cancellation
                        ? 'red'
                        : 'success',
                    )}
                  >
                    <Typography variant="h5" color="inherit">
                      {formatMessage({ id: `nvm.status.${status}` })}
                    </Typography>
                  </Box>
                  <Box display="flex">
                    {labels.map((label, index) => (
                      <Box mr={1} key={index}>
                        <Chip
                          variant="outlined"
                          color="primary"
                          label={formatMessage({ id: `nvm.label.${label}` })}
                          size="small"
                        />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Menu
        id={`nvm-search-menu-${id}`}
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <SubMenuItem
          title={formatMessage({
            id: 'nvm.purchase',
          })}
          onClick={() => {
            // TODO: Copy NVM to purchase list
            onMenuClose();
          }}
        />
      </Menu>
    </>
  );
};
