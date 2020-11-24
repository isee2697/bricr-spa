import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardHeader, CardContent, Box, Avatar, Emoji, Typography, ProgressFilling } from 'ui/atoms';
import { CRM_RELATIONS } from 'api/mocks/crm-relation';

import { useStyles } from './Properties.styles';
import { PropertyItemProps } from './Properties.types';

const PropertyItem = ({ property: { avatar, property, informationCompletedStatus } }: PropertyItemProps) => {
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
                id: 'sales_details.dashboard.properties.documents',
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

  const crmRelations = CRM_RELATIONS;

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'sales_details.dashboard.properties' })} />
      <CardContent>
        {crmRelations.map((crmRelation, index) => (
          <PropertyItem key={index} property={crmRelation} />
        ))}
      </CardContent>
    </Card>
  );
};
