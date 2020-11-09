import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { DateTime } from 'luxon';

import { usePDFDocument } from 'hooks/usePDFDocument/usePDFDocument';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Typography, IconButton, Menu, MenuItem, Checkbox } from 'ui/atoms';
import { MenuIcon, EditIcon } from 'ui/atoms/icons';

import { DmsContentBlockItemProps } from './DmsContentBlockItem.types';
import { useStyles } from './DmsContentBlockItem.styles';

export const DmsContentBlockItem = ({ contentBlock, onStatusChange }: DmsContentBlockItemProps) => {
  const { formatMessage } = useLocale();
  const intl = useIntl();
  const classes = useStyles(contentBlock);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const { id, name, createdAt, status, file } = contentBlock;
  const { pages } = usePDFDocument({
    url: file || '',
  });

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <Box width="100%" display="flex" flexDirection="column" alignItems="space-between">
        <Box display="flex" justifyContent="space-between" mb={2}>
          <div>
            <Typography className={classes.date}>
              {DateTime.fromISO(new Date(createdAt.toString()).toISOString()).toRelative({
                locale: intl.locale,
              })}
            </Typography>
            <Typography className={classes.title}>{name}</Typography>
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
        <Box display="flex" flexDirection="column" alignItems="center" className={classes.pdfViewer}>
          {pages.map((canvasURL, index) => (
            <Box my={2}>
              <img src={canvasURL} key={index} alt={'Page ' + index} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
