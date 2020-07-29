import React from 'react';

import { Box, Grid, IconButton, Typography } from 'ui/atoms';
import { EditIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { useStyles } from './AccountManager.styles';
import { AccountManagerProps } from './AccountManager.types';

export const AccountManager = ({ inEditMode, account, onEdit }: AccountManagerProps) => {
  const classes = useStyles({ src: account.image.url });
  const { formatMessage } = useLocale();

  return (
    <Grid container>
      <Grid item xs={3}>
        <Box className={classes.image} />
      </Grid>
      <Grid item xs={9}>
        <Box p={2} className={classes.container}>
          <Box mb={2} pb={1} className={classes.titleContainer}>
            <Typography className={classes.title}>{account.name}</Typography>

            {inEditMode && (
              <IconButton data-testid="edit-account-manager-button" className={classes.edit} onClick={onEdit}>
                <EditIcon />
              </IconButton>
            )}
          </Box>
          <Grid container>
            <Grid item xs={5} direction="column">
              <Typography className={classes.itemTitle}>
                {formatMessage({ id: 'project_details.characteristics.account_manager.office' })}
              </Typography>
              {account.office.map(item => (
                <Typography className={classes.itemText}>{item}</Typography>
              ))}
            </Grid>
            <Grid item xs={5} direction="column">
              <Typography className={classes.itemTitle}>
                {formatMessage({ id: 'project_details.characteristics.account_manager.contact' })}
              </Typography>
              <Typography className={classes.itemText}>
                {formatMessage(
                  { id: 'project_details.characteristics.account_manager.phone' },
                  { text: account.phone, u: msg => <u>{msg}</u> },
                )}
              </Typography>
              <Typography className={classes.itemText}>
                {formatMessage(
                  { id: 'project_details.characteristics.account_manager.email' },
                  { text: account.phone, u: msg => <u>{msg}</u> },
                )}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
