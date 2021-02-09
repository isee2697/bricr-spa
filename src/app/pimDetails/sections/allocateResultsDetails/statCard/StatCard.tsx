import React from 'react';
import clsx from 'classnames';

import { Avatar, Box, Emoji, Typography, CardContent, Card, CardHeader, Chip } from 'ui/atoms';
import { useLocale } from 'hooks';

import { StatCardProps } from './StatCard.types';
import { useStyles } from './StatCard.styles';

export const StatCard = ({ item }: StatCardProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h2">
            {formatMessage({ id: `pim_details.allocate_results_details.based_on` })}
            &nbsp;<b>{item.allocationBase}</b>
          </Typography>
        }
      />
      <CardContent className={classes.content}>
        <Box display="flex" flexDirection="column">
          <Box className={classes.rowItem} display="flex">
            <Box mr={2}>
              <Avatar variant="rounded" src={item.image} className={classes.image}>
                {!item.image && <Emoji>{'📷'}</Emoji>}
              </Avatar>
            </Box>
            <Box width="100%" display="flex" alignItems="flex-end" justifyContent="space-between">
              <Box>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Typography variant="h3" className={classes.fontWeightBold}>
                      {item.name}
                    </Typography>
                    <Box display="flex" flexWrap="wrap" alignItems="flex-end">
                      <Box mr={2}>
                        <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                          {item.size} m<sup>2</sup>
                        </Typography>
                      </Box>
                      <Box mr={2}>
                        <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                          {formatMessage({ id: 'pim_details.allocate_results_details.rooms' }, { count: item.rooms })}
                        </Typography>
                      </Box>
                      {item.propertyTypes.map((property, index) => (
                        <Box key={index} mr={2}>
                          <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                            {formatMessage({ id: `dictionaries.property_type.${property}` })}
                          </Typography>
                        </Box>
                      ))}
                      {item.propertyRelatedItems.map((property, index) => (
                        <Box key={index} mr={2}>
                          <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                            {formatMessage({ id: `dictionaries.property_related_item.${property}` })}
                          </Typography>
                        </Box>
                      ))}
                      {item.outsideFeatureTypes.map((type, index) => (
                        <Box key={index} mr={2}>
                          <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                            {formatMessage({ id: `dictionaries.outside_feature_type.${type}` })}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
                <Box mt={1.5}>
                  {item.objectTypes.map((type, index) => (
                    <Box key={index} mr={2}>
                      <Chip
                        size="small"
                        variant="outlined"
                        label={
                          <Box display="flex" alignItems="center">
                            <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                              {formatMessage({ id: `dictionaries.object_type.${type}` })}
                            </Typography>
                          </Box>
                        }
                      />
                    </Box>
                  ))}
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                  <Typography variant="h3" className={classes.fontWeightBold}>
                    € {item.monthlyPrice} p/m
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" ml={1} mr={2}>
                <Box className={classes.before}>{item.assigned.length}</Box>
                <Box ml={1.5} className={classes.after}>
                  {item.unassigned.length}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
