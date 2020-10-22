import React from 'react';
import clsx from 'classnames';

import { Avatar, Box, Emoji, IconButton, ProgressFilling, Typography } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CrmRelationsDetailsCustomerJourneyTab } from '../CrmRelationsDetailsCustomerJourney.types';

import { useStyles } from './ListItem.styles';
import { ListItemProps } from './ListItem.types';
import { ListItemViewings } from './listItemViewings/ListItemViewings';
import { ListItemBiddings } from './listItemBiddings/ListItemBiddings';
import { ListItemCandidates } from './listItemCandidates/ListItemCandidates';
import { ListItemOptants } from './listItemOptants/ListItemOptants';

export const ListItem = ({ isShowListHeader, isShowNumber, checked, checkbox, status, item }: ListItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const { index, image, name, price, size, rooms, properties, matchStrength } = item;

  return (
    <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
      {isShowListHeader && checkbox}
      <Box className={classes.rowItem}>
        <Box display="flex">
          {isShowNumber && (
            <Box>
              <Typography variant="h6" className={classes.itemNo}>
                {index + 1}
              </Typography>
            </Box>
          )}
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
                      {formatMessage({ id: 'crm.details.customer_journey.hours_ago' }, { before: 1 })}
                    </Typography>
                    <Typography variant="h3" className={classes.fontWeightMedium}>
                      {name}
                    </Typography>
                    <Box display="flex">
                      <Typography variant="h6" className={clsx(classes.property, classes.fontWeightMedium)}>
                        {formatMessage({ id: 'crm.details.customer_journey.room_size' }, { size })}
                      </Typography>
                      <Typography variant="h6" className={clsx(classes.property, classes.fontWeightMedium)}>
                        {formatMessage({ id: 'crm.details.customer_journey.rooms' }, { rooms })}
                      </Typography>
                      {properties.map((property, index) => (
                        <Typography
                          key={index}
                          variant="h6"
                          className={clsx(classes.property, classes.fontWeightMedium)}
                        >
                          {formatMessage({ id: `crm.details.customer_journey.properties.${property}` })}
                        </Typography>
                      ))}
                    </Box>
                    <Typography variant="h3" className={clsx(classes.price, classes.fontWeightMedium)}>
                      € {price}
                    </Typography>
                    <Box>
                      <Typography variant="h6" className={clsx(classes.matchStrengthLabel, classes.fontWeightMedium)}>
                        {formatMessage(
                          { id: 'crm.details.customer_journey.match_strenth' },
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
            {status === CrmRelationsDetailsCustomerJourneyTab.Viewings &&
              item.brokerages &&
              item.brokerages.length > 0 && <ListItemViewings brokerages={item.brokerages} />}
            {status === CrmRelationsDetailsCustomerJourneyTab.Biddings && item.counters && item.counters.length > 0 && (
              <ListItemBiddings counters={item.counters} />
            )}
            {status === CrmRelationsDetailsCustomerJourneyTab.Candidate &&
              item.candidates &&
              item.candidates.length > 0 && <ListItemCandidates candidates={item.candidates} />}
            {status === CrmRelationsDetailsCustomerJourneyTab.Optant && item.optants && item.optants.length > 0 && (
              <ListItemOptants optants={item.optants} />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
