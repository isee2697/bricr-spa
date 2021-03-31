import React from 'react';
import clsx from 'clsx';
import { DateTime } from 'luxon';

import { Card, Checkbox, Box, Typography, Emoji, Avatar, Grid, CardHeader, CardContent, PersonChip } from 'ui/atoms';
import { useLocale } from 'hooks';

import { useStyle } from './RelationCard.styles';
import { RelationCardProps, TypographyItemProps } from './RelationCard.types';

const TypographyItem = ({ source, compare, className, variant = 'h5' }: TypographyItemProps) => {
  const classes = useStyle();

  return (
    <Typography
      variant={variant}
      color="textSecondary"
      className={clsx(className, classes.typographyItem, compare && (source === compare ? 'green' : 'red'))}
    >
      {source || '-'}
    </Typography>
  );
};

export const RelationCard = ({ title, crm, compare, onCheck, isChecked, children, showPercent }: RelationCardProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyle();

  return (
    <Card>
      <CardHeader
        title={title}
        action={
          <Box display="flex" alignItems="center">
            <Typography variant="h5" className={clsx(!compare && classes.fontWeightBold)}>
              {(crm.createdAt || DateTime.fromJSDate(new Date())).toFormat('dd-MM-yyyy')}
            </Typography>
            <Box ml={4.5} className={classes.checkbox} display="flex" alignItems="center" justifyContent="center">
              {onCheck && <Checkbox checked={isChecked} onChange={() => onCheck()} color="primary" />}
            </Box>
          </Box>
        }
      />
      <CardContent className={clsx(children && classes.resultContent)}>
        <Box className={classes.relationWrapper} display="flex" alignItems="stretch" width="100%">
          <Avatar variant="rounded" src={crm.avatar?.url || ''} className={classes.image}>
            {!crm.avatar && <Emoji>{'📷'}</Emoji>}
          </Avatar>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            className={classes.relationContent}
            width="100%"
          >
            <TypographyItem
              source={`${crm.firstName} ${crm.lastName}`}
              compare={compare && `${compare.firstName} ${compare.lastName}`}
              className={classes.name}
              variant="h3"
            />
            <Box className={classes.divider} mt={1} mb={1.5} width="100%" />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={5}>
                <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                  {formatMessage({ id: 'crm.relation.address' })}
                </Typography>
                <TypographyItem
                  source={
                    crm.address ? `${crm.address.street} ${crm.address.houseNumber} ${crm.address.houseNumber}` : '-'
                  }
                  compare={
                    compare &&
                    (compare.address
                      ? `${compare.address.street} ${compare.address.houseNumber} ${compare.address.houseNumber}`
                      : '-')
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                  {formatMessage({ id: 'crm.relation.contact' })}
                </Typography>
                <TypographyItem
                  source={`T: ${crm.phoneNumber || '-'}`}
                  compare={compare && `T: ${compare.phoneNumber || '-'}`}
                />
                <TypographyItem source={crm.email} compare={compare?.email} />
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                  {formatMessage({ id: 'crm.relation.gender' })}
                </Typography>
                <TypographyItem
                  source={crm.gender ? formatMessage({ id: `dictionaries.gender.${crm.gender}` }) : '-'}
                  compare={
                    compare && (compare.gender ? formatMessage({ id: `dictionaries.gender.${compare.gender}` }) : '-')
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                  {formatMessage({ id: 'crm.relation.partner' })}
                </Typography>
                {crm.partners?.length ? (
                  <PersonChip
                    name={`${crm.partners[0].partner.firstName} ${crm.partners[0].partner.lastName}`}
                    image={crm.partners[0].partner.avatar?.url || ''}
                  />
                ) : (
                  <Typography variant="h5" className={clsx(classes.typographyItem, 'red')}>
                    -
                  </Typography>
                )}
              </Grid>
            </Grid>
            {showPercent && crm.matchedPercent ? (
              <Typography
                variant="h2"
                className={clsx(
                  classes.matchedPercent,
                  crm.matchedPercent === 100 ? 'green' : crm.matchedPercent > 50 ? 'yellow' : 'red',
                )}
              >
                {crm.matchedPercent}%
              </Typography>
            ) : null}
          </Box>
        </Box>

        {children}
      </CardContent>
    </Card>
  );
};
