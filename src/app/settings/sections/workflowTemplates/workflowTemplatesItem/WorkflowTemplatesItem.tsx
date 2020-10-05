import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Avatar, Box, Typography, Emoji, IconButton, Chip, Menu, MenuItem, Checkbox } from 'ui/atoms';
import { MenuIcon, EditIcon } from 'ui/atoms/icons';

import { WorkflowTemplatesItemProps } from './WorkflowTemplatesItem.types';
import { useStyles } from './WorkflowTemplatesItem.styles';

export const WorkflowTemplatesItem = ({ template, onCopyToCustom, onStatusChange }: WorkflowTemplatesItemProps) => {
  const { formatMessage } = useLocale();
  const intl = useIntl();
  const classes = useStyles(template);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const {
    id,
    name,
    createdAt,
    avatar,
    workflowSections,
    startPoints,
    labels,
    started,
    inProgress,
    completed,
    status,
  } = template;

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
        <Box>
          <Avatar variant="rounded" src={avatar} className={classes.image}>
            {!avatar && <Emoji>{'📷'}</Emoji>}
          </Avatar>
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
              <div className={classes.labels}>
                <Box component="span">
                  {formatMessage({ id: 'settings.workflow_templates.workflow_sections' }, { count: workflowSections })}
                </Box>
                <Box component="span">
                  {formatMessage({ id: 'settings.workflow_templates.startpoints' }, { count: startPoints })}
                </Box>
              </div>
              <Box mt={2}>
                {labels.length
                  ? labels.map(label => (
                      <Box component="span" key={label}>
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
                    onCopyToCustom();
                  }}
                >
                  <EditIcon classes={{ root: classes.menuIcon }} />
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({
                        id: 'settings.workflow_templates.copy_to_custom',
                      })}
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem
                  className={classes.menuItem}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                    onStatusChange();
                  }}
                >
                  <EditIcon classes={{ root: classes.menuIcon }} />
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({
                        id: 'settings.workflow_templates.inactive',
                      })}
                    </Typography>
                  </Box>
                  <Box ml="auto">
                    <Checkbox color="primary" checked={status === 'active'} onChange={() => {}} name="checkedA" />
                  </Box>
                </MenuItem>
              </Menu>
            </div>
          </Box>
          <Box display="flex" className={classes.stats}>
            <Box display="flex" flexDirection="column" className={classes.statItem}>
              <Typography className={classes.statInfo}>{started}</Typography>
              <Typography className={classes.statLabel}>
                {formatMessage({ id: 'settings.workflow_templates.started' })}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" className={classes.statItem}>
              <Typography className={classes.statInfo}>{inProgress}</Typography>
              <Typography className={classes.statLabel}>
                {formatMessage({
                  id: 'settings.workflow_templates.in_progress',
                })}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" className={classes.statItem}>
              <Typography className={classes.statInfo}>{completed}</Typography>
              <Typography className={classes.statLabel}>
                {formatMessage({ id: 'settings.workflow_templates.completed' })}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
