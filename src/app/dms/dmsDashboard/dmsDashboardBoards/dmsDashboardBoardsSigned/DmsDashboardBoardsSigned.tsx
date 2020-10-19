import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Avatar,
  Emoji,
  Typography,
  ProgressFilling,
} from 'ui/atoms';
import { DMSSigned } from 'api/mocks/dms';

import { useStyles } from './DmsDashboardBoardsSigned.styles';
import { DmsDashboardBoardsPropertyProps } from './DmsDashboardBoardsSigned.types';

const PropertyItem = ({
  property: { avatar, property, informationCompletedStatus },
}: DmsDashboardBoardsPropertyProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box display='flex' width='100%' className={classes.propertyItem}>
      <Box mr={2}>
        <Avatar
          variant='rounded'
          size='medium'
          src={avatar}
          className={classes.propertyImage}
        >
          {!avatar && <Emoji>{'📷'}</Emoji>}
        </Avatar>
      </Box>
      <Box width='100%'>
        <Typography variant='h5' className={classes.propertyTitle}>
          {property}
        </Typography>
        <Box display='flex' mt={2}>
          <Box mr={3.5}>
            <Typography variant='h6' className={classes.propertyLabel}>
              {formatMessage({
                id: 'property_item.info_completed',
              })}
            </Typography>
            <ProgressFilling progress={informationCompletedStatus ?? 0} />
          </Box>
          <Box>
            <Typography variant='h6' className={classes.propertyLabel}>
              {formatMessage({
                id: 'dms.dashboard.properties.documents',
              })}
            </Typography>
            <Typography variant='h5'>5/9</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const DmsDashboardBoardsSigned = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const dmsRelations = DMSSigned;

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'dms.dashboard.signed' })} />
      <CardContent>
        {dmsRelations.map((dmsRelation, index) => (
          <PropertyItem key={index} property={dmsRelation} />
        ))}
      </CardContent>
    </Card>
  );
};
