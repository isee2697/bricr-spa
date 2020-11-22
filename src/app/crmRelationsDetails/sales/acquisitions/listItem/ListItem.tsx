import React from 'react';
import clsx from 'classnames';

import { Box, Chip, Grid, IconButton, Typography, UserAvatar } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { ListItemProps } from './ListItem.types';
import { useStyles } from './ListItem.styles';

export const ListItem = ({
  item: { interests, address, accountManagers },
  checkbox,
  checked,
  status,
}: ListItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box className={clsx(classes.row, { [classes.rowChecked]: checked }, status)}>
        {checkbox}
        <Box width="100%" display="flex" alignItems="flex-start" className={classes.rowItem}>
          <Box width="100%">
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Typography variant="h6" color="textSecondary" className={classes.fontWeightMedium}>
                  {formatMessage({ id: 'crm.details.sales.acquisitions.acquisition.interested_in' })}
                </Typography>
                <Box display="flex" flexWrap="wrap">
                  {interests.map((interest, index) => (
                    <Box mr={1.5} mt={0.5} key={index}>
                      <Chip
                        variant="outlined"
                        color="primary"
                        label={formatMessage({ id: `dictionaries.sales.interests.${interest}` })}
                        size="small"
                      />
                    </Box>
                  ))}
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h3" className={classes.fontWeightBold}>
                    {address}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                  {formatMessage({ id: 'crm.details.sales.acquisition.account_managers' })}
                </Typography>
                <Box display="flex" alignItems="center">
                  {accountManagers.map(({ name, image }, index) => (
                    <Box mr={0.5} mb={0.5}>
                      <UserAvatar name={name} variant="circle" avatar={image} />
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
          <IconButton variant="rounded" size="small">
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
