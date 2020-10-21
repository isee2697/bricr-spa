import React from 'react';
import clsx from 'classnames';

import { useLocale } from 'hooks';
import { Avatar, Box, Emoji, IconButton, ProgressFilling, Typography } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';

import { ListItemProps } from './ListItem.types';
import { useStyles } from './ListItem.styles';

export const ListItem = ({ checked, checkbox, item }: ListItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const { image, name, size, rooms, properties, price, matchStrength } = item;

  return (
    <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
      {checkbox}
      <Box className={classes.rowItem}>
        <Box display="flex">
          <Box display="flex" flexDirection="column" width="100%">
            <Box display="flex" width="100%">
              <Box>
                <Avatar variant="rounded" src={image} className={classes.image}>
                  {!image && <Emoji>{'📷'}</Emoji>}
                </Avatar>
              </Box>
              <Box width="100%">
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Box>
                    <Typography variant="h6" className={classes.createdTime}>
                      {formatMessage({ id: 'crm.details.personal_information_match_profile.hours_ago' }, { before: 1 })}
                    </Typography>
                    <Typography variant="h3" className={classes.fontWeightMedium}>
                      {name}
                    </Typography>
                    <Box display="flex" flexWrap="wrap">
                      <Typography variant="h6" className={clsx(classes.property, classes.fontWeightMedium)}>
                        {formatMessage({ id: 'crm.details.personal_information_match_profile.room_size' }, { size })}
                      </Typography>
                      <Typography variant="h6" className={clsx(classes.property, classes.fontWeightMedium)}>
                        {formatMessage({ id: 'crm.details.personal_information_match_profile.rooms' }, { rooms })}
                      </Typography>
                      {properties.map((property, index) => (
                        <Typography
                          key={index}
                          variant="h6"
                          className={clsx(classes.property, classes.fontWeightMedium)}
                        >
                          {formatMessage({
                            id: `crm.details.personal_information_match_profile.properties.${property}`,
                          })}
                        </Typography>
                      ))}
                    </Box>
                    <Typography variant="h3" className={clsx(classes.price, classes.fontWeightMedium)}>
                      € {price}
                    </Typography>
                    <Box>
                      <Typography variant="h6" className={clsx(classes.matchStrengthLabel, classes.fontWeightMedium)}>
                        {formatMessage(
                          { id: 'crm.details.personal_information_match_profile.match_strenth' },
                          { percentage: Math.floor(matchStrength * 100) },
                        )}
                      </Typography>
                      <ProgressFilling progress={matchStrength ?? 0} />
                    </Box>
                  </Box>
                  <Box>
                    <IconButton className="menu-icon" variant="rounded" size="small" onClick={() => {}}>
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
