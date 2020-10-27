import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Avatar, Box, Typography, Emoji, IconButton, Menu, MenuItem } from 'ui/atoms';
import { PropertyStage } from 'ui/molecules';
import { MenuIcon, EditIcon } from 'ui/atoms/icons';
import { Button } from 'ui/atoms/button/Button.styles';
import { DmsRequestStatusType } from 'app/dms/Dms.types';

import { DmsDetailViewItemProps } from './DmsDetailViewItem.types';
import { useStyles } from './DmsDetailViewItem.styles';

export const DmsDetailViewItem = ({ data }: DmsDetailViewItemProps) => {
  const { formatMessage } = useLocale();
  const intl = useIntl();
  const classes = useStyles(data);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const { id, name, modifiedAt, avatar, requestStatus } = data;

  const stageItems = Object.keys(DmsRequestStatusType).map(title => ({
    title,
  }));
  const stageIndex = stageItems.findIndex(item => item.title === requestStatus) || 0;

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
        <Box position="relative">
          <Avatar variant="rounded" src={avatar} className={classes.image}>
            {!avatar && <Emoji>{'📷'}</Emoji>}
          </Avatar>
        </Box>
        <Box width="100%" display="flex" flexDirection="column" alignItems="space-between">
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Box width="100%">
              <Typography className={classes.date}>{modifiedAt?.toRelative({ locale: intl.locale }) || ''}</Typography>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography className={classes.title}>{name}</Typography>
                {requestStatus === DmsRequestStatusType.ACCEPTED && (
                  <Box mr={3}>
                    <Button variant="outlined" className={classes.readyForReview} size="small">
                      {formatMessage({ id: 'dms.documents.ready_for_review' })}
                    </Button>
                  </Box>
                )}
              </Box>
              <Box mt={2}>
                <Typography className={classes.subtitle}>
                  {formatMessage({ id: 'dms.documents.request_status' })}
                </Typography>
              </Box>
              <Box mt={2} width="100%">
                {stageItems && stageIndex !== undefined && <PropertyStage items={stageItems} activeItem={stageIndex} />}
              </Box>
            </Box>
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
                  }}
                >
                  <EditIcon classes={{ root: classes.menuIcon }} />
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({
                        id: 'dms.documents.edit',
                      })}
                    </Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
