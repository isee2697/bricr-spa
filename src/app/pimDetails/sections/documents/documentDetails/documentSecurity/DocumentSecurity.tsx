import React, { ReactElement, useCallback, useState } from 'react';
import { DateTime } from 'luxon';
import { useHistory, useParams } from 'react-router-dom';

import { Box, Grid, IconButton, Typography, Menu, MenuItem } from 'ui/atoms';
import { useLocale } from 'hooks';
import { DeleteIcon, HistoryIcon, MenuIcon, ExitIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';

import { useStyles } from './DocumentSecurity.styles';
import { SecurityGeneralForm } from './forms/SecurityGeneralForm';
import { DocumentSecurityProps } from './DocumentSecurity.types';
import { SecurityDetailsForm } from './forms/SecurityDetailsForm';
import { SecurityRightsForm } from './forms/SecurityRightsForm';
import { SecuritySecureForm } from './forms/SecuritySecureForm';
import { SecurityActionsForm } from './forms/SecurityActionsForm';

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

export const DocumentSecurity = ({ title }: DocumentSecurityProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const { push } = useHistory();
  const { id: pimId } = useParams<{ id: string }>();

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const handleGoBack = useCallback(() => {
    if (pimId) {
      push(AppRoute.pimDetails.replace(':id', pimId) + '/documents');
    }
  }, [push, pimId]);

  const createdAt = new Date(2020, 12, 25, 16, 53);
  const owner = 'Christian van Gils';

  return (
    <Page withoutHeader>
      <Grid xs={12} item>
        <Box display="flex" alignItems="center">
          <Typography variant="h1">{title}</Typography>
          <Box display="flex">
            <IconButton onClick={handleGoBack} variant="rounded" size="small">
              <ExitIcon />
            </IconButton>
            <Box ml={3.5}>
              <IconButton
                className="menu-icon"
                variant="rounded"
                size="small"
                selected={Boolean(menuEl)}
                onClick={onMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu id={pimId} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
                <SubMenuItem
                  title={formatMessage({
                    id: 'pim_details.documents.menu.generate_pdf',
                  })}
                  onClick={() => {
                    onMenuClose();
                  }}
                />
                <SubMenuItem
                  title={formatMessage({
                    id: 'pim_details.documents.menu.send',
                  })}
                  onClick={() => {
                    onMenuClose();
                  }}
                />
                <SubMenuItem
                  title={formatMessage({
                    id: 'pim_details.documents.menu.save_as_draft',
                  })}
                  onClick={() => {
                    onMenuClose();
                  }}
                />
                <SubMenuItem
                  title={formatMessage({
                    id: 'pim_details.documents.menu.copy',
                  })}
                  onClick={() => {
                    onMenuClose();
                  }}
                />
                <SubMenuItem
                  title={formatMessage({
                    id: 'pim_details.documents.menu.archive',
                  })}
                  onClick={() => {
                    onMenuClose();
                  }}
                />
                <SubMenuItem
                  title={formatMessage({
                    id: 'common.delete',
                  })}
                  onClick={() => {
                    onMenuClose();
                  }}
                  icon={<DeleteIcon color="secondary" />}
                />
              </Menu>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Box mt={3} width="100%">
        <Box display="flex" flexDirection="column" width="100%">
          <SecurityGeneralForm />
          <Box mt={3.5} />
          <SecurityDetailsForm />
          <Box mt={3.5} />
          <SecurityRightsForm />
          <Box mt={3.5} />
          <SecuritySecureForm />
          <Box mt={3.5} />
          <SecurityActionsForm />
          <Box mt={7} display="flex" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" className={classes.grayText}>
              {formatMessage({ id: 'common.last_updated' })}:{' '}
              <Typography component="span" variant="h5" className={classes.boldText}>
                {DateTime.fromJSDate(createdAt).toFormat('dd-MM-yyyy HH:mm')} by {owner}
              </Typography>
            </Typography>
            <Typography variant="h5" className={classes.grayText}>
              <HistoryIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};
