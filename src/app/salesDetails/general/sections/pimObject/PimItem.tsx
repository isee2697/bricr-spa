import React from 'react';
import { DateTime } from 'luxon';
import { useIntl } from 'react-intl';

import { useLocale } from 'hooks';
import { Pim } from 'api/types';
import { Box, Typography, Avatar, Emoji, Price, Chip } from 'ui/atoms';

import { useStyles } from './PimItem.styles';

const generateNonemptyList = (obj: { [key: string]: unknown }) =>
  Object.keys(obj)
    .filter(key => !!obj[key])
    .reduce((list, key) => [...list, key], [] as string[]);

export const PimItem = ({
  street,
  houseNumberPrefix,
  houseNumber,
  houseNumberAddition,
  constructionNumberPrefix,
  constructionNumber,
  constructionNumberAddition,
  city,
  dateCreated,
  livingArea,
  propertyType,
  salePrice,
  rentPrice,
  completeness,
  archived,
  mainPicture,
}: Pim) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const intl = useIntl();

  const title = `${street} ${houseNumberPrefix ?? ''}${houseNumber}${houseNumberAddition ?? ''}${
    constructionNumber
      ? ` (${constructionNumberPrefix ?? ''}${constructionNumber}${constructionNumberAddition ?? ''})`
      : ''
  }, ${city}`;
  const labels = generateNonemptyList({ [`${livingArea} m2`]: livingArea, [`${propertyType}`]: propertyType });
  const categories = !archived
    ? generateNonemptyList({
        [formatMessage({ id: 'pim.type.sale' })]: salePrice,
        [formatMessage({ id: 'pim.type.rent' })]: rentPrice,
      })
    : [formatMessage({ id: 'property_item.sold' })];

  const image = mainPicture?.file?.url ?? undefined;

  return (
    <Box display="flex" width="100%" flexDirection="column">
      <Box display="flex" mb={1}>
        <div>
          <Avatar variant="rounded" src={image} className={classes.image}>
            {!image && <Emoji>{'📷'}</Emoji>}
          </Avatar>
        </div>
        <Box width="100%">
          <Box display="flex" justifyContent="space-between">
            <div>
              <Typography className={classes.date}>
                {DateTime.fromISO(dateCreated.toString()).toRelative({
                  locale: intl.locale,
                })}
              </Typography>
              <Typography className={classes.title}>{title}</Typography>
              <div className={classes.labels}>
                {labels.length ? (
                  labels.map(label => (
                    <Box component="span" key={label}>
                      {label}
                    </Box>
                  ))
                ) : (
                  <Box mb={2.5} />
                )}
              </div>
            </div>
          </Box>
          <div className={classes.content}>
            <div>
              <Box mb={2.5} />
              <div className={classes.prices}>
                {salePrice && (
                  <div className={classes.price}>
                    <Price
                      value={salePrice}
                      minimumFractionDigits={salePrice % 1 === 0 ? 0 : 2}
                      maximumFractionDigits={salePrice % 1 === 0 ? 0 : 2}
                    />
                  </div>
                )}
                {rentPrice && (
                  <span>
                    <Price
                      value={rentPrice}
                      minimumFractionDigits={rentPrice % 1 === 0 ? 0 : 2}
                      maximumFractionDigits={rentPrice % 1 === 0 ? 0 : 2}
                    />{' '}
                    {formatMessage({ id: 'property_item.per_meter' })}
                  </span>
                )}
              </div>
            </div>
            <div>
              <Box display="flex" justifyContent="flex-end">
                {categories.map(category => (
                  <Box ml={1} key={category}>
                    <Chip variant="outlined" color="primary" label={category} size="small" />
                  </Box>
                ))}
              </Box>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
