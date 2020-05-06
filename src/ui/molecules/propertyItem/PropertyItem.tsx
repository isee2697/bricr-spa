import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { DateTime } from 'luxon';

import { Avatar, Box, Typography, IconButton, ProgressFilling, Collapse, Button, Price } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons/menu/MenuIcon';
import { HelpIcon } from 'ui/atoms/icons/help/HelpIcon';
import { ArrowDownIcon } from 'ui/atoms/icons/arrowDown/ArrowDownIcon';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';

import { PropertyItemProps } from './PropertyItem.types';
import { useStyles } from './PropertyItem.styles';

export const PropertyItem = ({
  title,
  image,
  date,
  labels,
  discountPrice,
  price,
  pricePerMeter,
  categories,
  stage,
  children,
  isAlert,
  isArchived,
  onMenuClick,
}: PropertyItemProps) => {
  const { formatMessage } = useLocale();
  const intl = useIntl();
  const [isCollapsed, setCollapse] = useState(false);
  const classes = useStyles({ isArchived });

  return (
    <div className={classes.wrapper}>
      <Box display="flex" width="100%" flexDirection="column">
        <Box display="flex" mb={1}>
          <div>
            <Avatar variant="rounded" src={image} className={classes.image} />
          </div>
          <Box width="100%">
            <Box display="flex" justifyContent="space-between">
              <div>
                <Typography className={classes.date}>
                  {isArchived && formatMessage({ id: AppMessages['property_item.archived'] })}{' '}
                  {DateTime.fromISO(date.toString()).toRelative({ locale: intl.locale })}
                </Typography>
                <Typography className={classes.title}>{title}</Typography>
                <div className={classes.categories}>
                  {labels.map(label => (
                    <Box component="span" key={label}>
                      {label}
                    </Box>
                  ))}
                </div>
              </div>
              <div>
                <IconButton variant="rounded" size="small" onClick={onMenuClick}>
                  <MenuIcon />
                </IconButton>
              </div>
            </Box>
            <div className={classes.content}>
              <div>
                {discountPrice ? (
                  <s className={classes.discountPrice}>
                    {discountPrice && (
                      <Price
                        minimumFractionDigits={discountPrice % 1 === 0 ? 0 : 2}
                        maximumFractionDigits={discountPrice % 1 === 0 ? 0 : 2}
                        value={discountPrice}
                      />
                    )}
                  </s>
                ) : (
                  <Box mb={2.5} />
                )}
                <div className={classes.prices}>
                  <div className={classes.price}>
                    <Price
                      value={price}
                      minimumFractionDigits={price % 1 === 0 ? 0 : 2}
                      maximumFractionDigits={price % 1 === 0 ? 0 : 2}
                    />
                  </div>
                  {pricePerMeter && (
                    <span>
                      <Price
                        value={pricePerMeter}
                        minimumFractionDigits={pricePerMeter % 1 === 0 ? 0 : 2}
                        maximumFractionDigits={pricePerMeter % 1 === 0 ? 0 : 2}
                      />{' '}
                      {formatMessage({ id: AppMessages['property_item.per_meter'] })}
                    </span>
                  )}
                </div>
              </div>
              <div>{categories}</div>
            </div>
          </Box>
        </Box>
        {!isArchived ? (
          <>
            <Box display="flex">
              <div className={classes.infoProgress}>
                <Box mb={1}>{formatMessage({ id: AppMessages['property_item.info_completed'] })}</Box>
                <ProgressFilling stage={stage} />
              </div>
              <Box ml={1.5} display="flex" alignItems="center" width="100%" justifyContent="space-between">
                {isAlert && !isArchived && (
                  <div className={classes.alert}>
                    <HelpIcon color="inherit" />
                    <Box ml={0.5}>{formatMessage({ id: AppMessages['property_item.error'] })}</Box>
                  </div>
                )}
              </Box>
              <div className={classes.buttonWrapper}>
                <Button
                  color="ghost"
                  endIcon={<ArrowDownIcon color="primary" />}
                  onClick={() => setCollapse(prevState => !prevState)}
                >
                  {isCollapsed
                    ? formatMessage({ id: AppMessages['property_item.button_hide'] })
                    : formatMessage({ id: AppMessages['property_item.button_more'] })}
                </Button>
              </div>
            </Box>
            <Collapse in={isCollapsed}>
              <Box width="100%" mt={3}>
                <div className={classes.collapse}>{formatMessage({ id: AppMessages['property_item.progress'] })}</div>
                {children}
              </Box>
            </Collapse>
          </>
        ) : (
          children
        )}
      </Box>
    </div>
  );
};
