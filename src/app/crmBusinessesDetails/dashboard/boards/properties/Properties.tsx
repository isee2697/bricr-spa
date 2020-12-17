import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardHeader, CardContent, Box, Avatar, Emoji, Typography, ProgressFilling } from 'ui/atoms';
import { CRM_BUSINESSES } from 'api/mocks/crm-business';

import { useStyles } from './Properties.styles';
import { PropertyProps } from './Properties.types';

const PropertyItem = ({ property: { avatar, property, informationCompletedStatus } }: PropertyProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box display="flex" width="100%" className={classes.propertyItem}>
      <Box mr={2}>
        <Avatar variant="rounded" size="medium" src={avatar} className={classes.propertyImage}>
          {!avatar && <Emoji>{'📷'}</Emoji>}
        </Avatar>
      </Box>
      <Box width="100%">
        <Typography variant="h5" className={classes.propertyTitle}>
          {property}
        </Typography>
        <Box display="flex" mt={2}>
          <Box mr={3.5}>
            <Typography variant="h6" className={classes.propertyLabel}>
              {formatMessage({
                id: 'property_item.info_completed',
              })}
            </Typography>
            <ProgressFilling progress={informationCompletedStatus ?? 0} />
          </Box>
          <Box>
            <Typography variant="h6" className={classes.propertyLabel}>
              {formatMessage({
                id: 'crm.details.dashboard.properties.documents',
              })}
            </Typography>
            <Typography variant="h5">5/9</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const Properties = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const crmBusinesses = CRM_BUSINESSES;

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'crm.details.dashboard.properties' })} />
      <CardContent>
        {crmBusinesses.map((business, index) => (
          <PropertyItem key={index} property={{ ...business, avatar: business.avatar.url || '' }} />
        ))}
      </CardContent>
    </Card>
  );
};
